#!/usr/bin/env python3
"""
Update G2 simulator with new comprehensive question bank
"""

import re

def main():
    print("Reading G2 simulator HTML...")
    html_path = r"C:\LocalProjects\WorkFlow\hvac-student-resources\public\g2-exam-simulator.html"
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    print("Reading new question bank...")
    js_path = r"C:\LocalProjects\WorkFlow\hvac-student-resources\g2_question_bank.js"
    with open(js_path, 'r', encoding='utf-8') as f:
        new_question_bank = f.read()

    # Extract just the array part (remove const declaration for insertion)
    new_bank_start = new_question_bank.find('const rawQuestionBank = [')
    new_bank_end = new_question_bank.find('];', new_bank_start) + 2
    new_bank_content = new_question_bank[new_bank_start:new_bank_end]

    # Also get the statistics
    stats_start = new_question_bank.find('// Question bank statistics')
    if stats_start != -1:
        stats_content = new_question_bank[stats_start:]
    else:
        stats_content = ""

    # Find and replace the old question bank
    old_bank_pattern = r'const rawQuestionBank = \[.*?\];'
    match = re.search(old_bank_pattern, html_content, re.DOTALL)

    if not match:
        print("ERROR: Could not find existing question bank")
        return

    print(f"Found existing question bank at position {match.start()}-{match.end()}")
    print(f"Old bank size: {len(match.group(0))} characters")
    print(f"New bank size: {len(new_bank_content)} characters")

    # Replace old bank with new bank
    html_content = html_content[:match.start()] + new_bank_content + "\n\n" + stats_content + "\n" + html_content[match.end():]

    # Now add the even distribution function after the question bank
    distribution_function = """
        // Create a balanced exam with even distribution across all units
        function createBalancedExam(numQuestions) {
            const questionsByUnit = {};

            // Group questions by unit
            questionBank.forEach(q => {
                const unit = q.unit || 0;
                if (!questionsByUnit[unit]) {
                    questionsByUnit[unit] = [];
                }
                questionsByUnit[unit].push(q);
            });

            const units = Object.keys(questionsByUnit).filter(u => u != 0);  // Exclude uncategorized
            const questionsPerUnit = Math.floor(numQuestions / units.length);
            const remainder = numQuestions % units.length;

            let exam = [];

            // Take equal number from each unit
            units.forEach((unit, index) => {
                const unitQuestions = questionsByUnit[unit];
                const shuffled = shuffleArray([...unitQuestions]);

                // Take questionsPerUnit from this unit, plus 1 extra for first 'remainder' units
                const takeCount = questionsPerUnit + (index < remainder ? 1 : 0);
                exam = exam.concat(shuffled.slice(0, Math.min(takeCount, shuffled.length)));
            });

            // If we don't have enough questions, fill from uncategorized or duplicate
            while (exam.length < numQuestions) {
                const remaining = shuffleArray([...questionBank]);
                exam.push(remaining[0]);
            }

            // Final shuffle so units aren't grouped together
            return shuffleArray(exam).slice(0, numQuestions);
        }
"""

    # Find where to insert (after the normalizeQuestion function, before startExam)
    insert_point = html_content.find('// Start exam function')
    if insert_point == -1:
        insert_point = html_content.find('function startExam(')

    if insert_point != -1:
        html_content = html_content[:insert_point] + distribution_function + "\n\n        " + html_content[insert_point:]
        print("Added balanced distribution function")

    # Update the startExam function to use balanced distribution
    # Find and replace: const shuffled = shuffleArray(questionBank);
    # With: const shuffled = createBalancedExam(questionBank.length);
    html_content = re.sub(
        r'const shuffled = shuffleArray\(questionBank\);',
        'const shuffled = createBalancedExam(questionBank.length);',
        html_content,
        count=1
    )

    html_content = re.sub(
        r'const exam = shuffled\.slice\(0, numQuestions\);',
        'const exam = createBalancedExam(numQuestions);',
        html_content
    )

    # Update the UI to show correct question counts
    html_content = re.sub(
        r'<p><strong>175 Questions</strong></p>',
        '<p><strong>153 Questions</strong></p>',
        html_content
    )

    html_content = re.sub(
        r'Question 1 of 175',
        'Question 1 of 153',
        html_content
    )

    # Write updated HTML
    output_path = html_path
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html_content)

    print(f"\n[SUCCESS] G2 simulator updated!")
    print(f"New question bank: 153 questions organized by Units 10-24")
    print(f"Added balanced distribution function for even unit coverage")
    print(f"Updated UI to reflect 153 questions")

if __name__ == "__main__":
    main()
