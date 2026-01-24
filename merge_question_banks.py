#!/usr/bin/env python3
"""
Merge existing G2 simulator questions with new question bank
Remove duplicates and generate final comprehensive bank
"""

import json
import re

def normalize_question(text):
    """Normalize question text for duplicate detection"""
    text = re.sub(r'\s+', ' ', text.lower().strip())
    text = re.sub(r'[^\w\s]', '', text)
    return text

def extract_questions_from_html():
    """Extract existing questions from the current G2 simulator"""
    html_path = r"C:\LocalProjects\WorkFlow\hvac-student-resources\public\g2-exam-simulator.html"

    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the rawQuestionBank array
    start = content.find('const rawQuestionBank = [')
    end = content.find('];', start)

    if start == -1 or end == -1:
        print("Could not find existing question bank in HTML")
        return []

    # Extract the JavaScript array content
    js_array = content[start:end+2]

    # Parse questions using regex
    question_pattern = r'\{[^}]*question:\s*"([^"]*)"[^}]*options:\s*\[([^\]]*)\][^}]*correct:\s*(\d+)[^}]*\}'

    questions = []
    for match in re.finditer(question_pattern, js_array, re.DOTALL):
        q_text = match.group(1)
        options_text = match.group(2)
        correct = int(match.group(3))

        # Parse options
        options = [opt.strip().strip('"').strip("'") for opt in options_text.split(',')]

        questions.append({
            'question': q_text,
            'options': options,
            'correct': correct,
            'source': 'existing'
        })

    return questions

def load_new_questions():
    """Load new categorized questions"""
    js_path = r"C:\LocalProjects\WorkFlow\hvac-student-resources\g2_question_bank.js"

    with open(js_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Use exec to parse the JavaScript (since it's well-formed JSON-like structure)
    # Extract the array content
    start = content.find('const rawQuestionBank = [')
    end = content.find('];', start)

    if start == -1 or end == -1:
        return []

    json_content = content[start+len('const rawQuestionBank = '):end+1]

    # Clean up for JSON parsing
    json_content = re.sub(r',\s*\]', ']', json_content)
    json_content = re.sub(r',\s*\}', '}', json_content)
    json_content = re.sub(r'//.*?\n', '\n', json_content)  # Remove comments

    try:
        questions = json.loads(json_content)
        for q in questions:
            q['source'] = 'new'
        return questions
    except json.JSONDecodeError as e:
        print(f"JSON decode error: {e}")
        return []

def main():
    print("Extracting existing questions from G2 simulator...")
    existing_questions = extract_questions_from_html()
    print(f"Found {len(existing_questions)} existing questions")

    print("\nLoading new categorized questions...")
    new_questions = load_new_questions()
    print(f"Found {len(new_questions)} new questions")

    # Find duplicates
    print("\nChecking for duplicates...")
    seen_questions = {}
    merged_questions = []
    duplicates_removed = 0

    # Process new questions first (they have better structure with units, reasoning, etc.)
    for q in new_questions:
        norm_text = normalize_question(q['question'])
        if norm_text not in seen_questions:
            seen_questions[norm_text] = q
            merged_questions.append(q)
        else:
            duplicates_removed += 1

    # Add existing questions that aren't duplicates
    existing_added = 0
    for q in existing_questions:
        norm_text = normalize_question(q['question'])
        if norm_text not in seen_questions:
            seen_questions[norm_text] = q
            merged_questions.append(q)
            existing_added += 1
        else:
            duplicates_removed += 1

    print(f"\nMerge Results:")
    print(f"=" * 60)
    print(f"New questions: {len(new_questions)}")
    print(f"Existing questions: {len(existing_questions)}")
    print(f"Duplicates removed: {duplicates_removed}")
    print(f"Unique questions from existing: {existing_added}")
    print(f"Final total: {len(merged_questions)}")

    # Generate unit statistics
    unit_stats = {}
    no_unit_count = 0
    for q in merged_questions:
        if 'unit' in q:
            unit = q['unit']
            unit_stats[unit] = unit_stats.get(unit, 0) + 1
        else:
            no_unit_count += 1

    print(f"\nQuestions by Unit:")
    print(f"=" * 60)
    for unit in sorted(unit_stats.keys()):
        print(f"Unit {unit}: {unit_stats[unit]} questions")
    if no_unit_count > 0:
        print(f"Uncategorized: {no_unit_count} questions")

    # Save merged questions as JSON for inspection
    output_json = r"C:\LocalProjects\WorkFlow\hvac-student-resources\g2_merged_questions.json"
    with open(output_json, 'w', encoding='utf-8') as f:
        json.dump(merged_questions, f, indent=2, ensure_ascii=False)

    print(f"\n[SUCCESS] Merged questions saved to: {output_json}")
    print(f"Total final questions: {len(merged_questions)}")

if __name__ == "__main__":
    main()
