#!/usr/bin/env python3
"""
Remove diagram-dependent pipe sizing questions from G2 question bank
"""

import json

# Questions to remove (require diagrams)
DIAGRAM_QUESTIONS = [1, 2, 3, 4, 10, 11, 12, 13, 14, 15]

def main():
    print("Loading complete answer key...")
    with open(r"C:\LocalProjects\WorkFlow\TSSA G2 Exam Prep\g2_exam_2023_COMPLETE_answer_key.json", 'r', encoding='utf-8') as f:
        all_questions = json.load(f)

    print(f"Total questions: {len(all_questions)}")
    print(f"Removing {len(DIAGRAM_QUESTIONS)} diagram-dependent questions...")

    # Filter out diagram questions
    filtered_questions = [q for q in all_questions if q['id'] not in DIAGRAM_QUESTIONS]

    print(f"Remaining questions: {len(filtered_questions)}")

    # Load existing unit mappings
    import re
    with open(r"C:\LocalProjects\WorkFlow\hvac-student-resources\g2_question_bank_165.js", 'r', encoding='utf-8') as f:
        js_content = f.read()

    # Build ID to unit mapping from existing file
    id_to_unit = {}
    pattern = r'id: (\d+),\s*unit: (\d+)'
    for match in re.finditer(pattern, js_content):
        qid = int(match.group(1))
        unit = int(match.group(2))
        id_to_unit[qid] = unit

    # Categorize remaining questions using existing mappings
    questions_by_unit = {}
    for q in filtered_questions:
        unit = id_to_unit.get(q['id'])
        if unit:
            if unit not in questions_by_unit:
                questions_by_unit[unit] = []
            questions_by_unit[unit].append(q)

    total = sum(len(questions_by_unit[u]) for u in questions_by_unit)

    print(f"\nQuestion distribution:")
    for unit in sorted(questions_by_unit.keys()):
        print(f"  Unit {unit}: {len(questions_by_unit[unit])} questions")

    # Generate JavaScript
    print(f"\nGenerating JavaScript...")
    js_lines = []
    js_lines.append("// TSSA G2 Comprehensive Question Bank - 155 Questions")
    js_lines.append("// Organized by CSA Units 10-24")
    js_lines.append("// Diagram-dependent pipe sizing questions removed")
    js_lines.append("")
    js_lines.append("const rawQuestionBank = [")

    for unit in sorted(questions_by_unit.keys()):
        js_lines.append(f"\n    // ========================================")
        js_lines.append(f"    // CSA UNIT {unit} - {len(questions_by_unit[unit])} Questions")
        js_lines.append(f"    // ========================================")

        for q in questions_by_unit[unit]:
            js_lines.append("    {")
            js_lines.append(f"        id: {q['id']},")
            js_lines.append(f"        unit: {unit},")
            js_lines.append(f"        question: {json.dumps(q['question'], ensure_ascii=False)},")
            js_lines.append(f"        options: {json.dumps(q['options'], ensure_ascii=False)},")
            js_lines.append(f"        correct: {q['correct']},")
            if q.get('reasoning'):
                js_lines.append(f"        reasoning: {json.dumps(q['reasoning'], ensure_ascii=False)},")
            if q.get('csaReference'):
                js_lines.append(f"        csaReference: {json.dumps(q['csaReference'], ensure_ascii=False)}")
            js_lines.append("    },")

    # Remove trailing comma
    if js_lines[-1].endswith(","):
        js_lines[-1] = js_lines[-1][:-1]

    js_lines.append("];")
    js_lines.append("")
    js_lines.append("// Question bank statistics")
    js_lines.append("const QUESTION_BANK_STATS = {")
    js_lines.append(f"    totalQuestions: {total},")
    js_lines.append("    questionsByUnit: {")
    for unit in sorted(questions_by_unit.keys()):
        js_lines.append(f"        {unit}: {len(questions_by_unit[unit])},")
    js_lines.append("    }")
    js_lines.append("};")

    # Write output
    output_path = r"C:\LocalProjects\WorkFlow\hvac-student-resources\g2_question_bank_final.js"
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(js_lines))

    print(f"\n[SUCCESS] Generated: {output_path}")
    print(f"Final total: {total} questions")
    print(f"Removed: {len(DIAGRAM_QUESTIONS)} diagram-dependent questions")

if __name__ == "__main__":
    main()
