#!/usr/bin/env python3
"""
G2 Question Bank Builder
Combines and organizes G2 questions by CSA Units 10-24
"""

import json
import re
from collections import defaultdict

# CSA Unit mapping based on question content keywords
UNIT_KEYWORDS = {
    10: ['pipe', 'piping', 'welding', 'tubing', 'purge', 'purging', 'rigging', 'hoisting', 'nps', 'schedule 40', 'equivalent length', 'elbow', 'tee', 'fitting'],
    11: ['regulator', 'pressure regulator', 'meter', 'overpressure', 'relief valve', 'propane cylinder', 'tank', 'container', 'bellows', 'diaphragm'],
    12: ['electrical', 'fuse', 'wire', 'amperage', 'voltage', 'resistance', 'ohm', 'circuit', 'transformer', 'thermostat', 'wiring', 'awg'],
    13: ['control', 'gas valve', 'thermocouple', 'thermopile', 'hot surface igniter', 'flame rod', 'pilot', 'aquastat', 'limit', 'fan control'],
    14: ['building', 'combustion air', 'ventilation', 'depressurization', 'stack effect', 'distribution effect', 'air supply', 'building envelope'],
    15: ['range', 'dryer', 'clothes dryer', 'barbecue', 'lamp', 'oven', 'moisture exhaust', 'flexible connector', 'appliance clearance'],
    16: ['refrigerator', 'absorption', 'ammonia', 'generator', 'evaporator', 'condenser', 'direct vent type'],
    17: ['conversion', 'burner', 'converting', 'flue gas analysis'],
    18: ['water heater', 'combination system', 'circulator', 'mixing valve', 'dip tube', 'anode', 'temperature and pressure relief', 'storage tank'],
    19: ['furnace', 'forced air', 'forced warm air', 'blower', 'heat exchanger', 'high limit', 'fan motor', 'filter', 'duct', 'belt', 'pulley'],
    20: ['boiler', 'hydronic', 'circulator pump', 'expansion tank', 'low water cut', 'lwco', 'backflow preventer', 'prv', 'pool heater', 'steam boiler'],
    21: ['space heater', 'fireplace', 'radiant heater', 'infra-red', 'decorative appliance', 'room heater', 'construction heater'],
    22: ['vent', 'venting', 'chimney', 'draft', 'draft hood', 'flue', 'b vent', 'type b', 'vent connector', 'power venter', 'spillage'],
    23: ['humidifier', 'electronic air cleaner', 'air filtration', 'humidistat', 'bypass humidifier', 'ionizing'],
    24: ['heat loss', 'heat gain', 'btu', 'cfm', 'air handling', 'afue', 'convection', 'conduction', 'radiant', 'sensible heat', 'latent heat']
}

def categorize_question(question_text, notes=""):
    """Categorize question into CSA units based on content"""
    text_lower = (question_text + " " + notes).lower()

    # Score each unit based on keyword matches
    unit_scores = defaultdict(int)
    for unit, keywords in UNIT_KEYWORDS.items():
        for keyword in keywords:
            if keyword in text_lower:
                unit_scores[unit] += 1

    # Return unit with highest score, or None if no match
    if unit_scores:
        return max(unit_scores.items(), key=lambda x: x[1])[0]
    return None

def load_answer_key():
    """Load the complete answer key JSON"""
    with open(r"C:\LocalProjects\WorkFlow\TSSA G2 Exam Prep\g2_exam_2023_COMPLETE_answer_key.json", 'r', encoding='utf-8') as f:
        return json.load(f)

def normalize_question_text(text):
    """Normalize question text for duplicate detection"""
    # Remove extra whitespace, punctuation variations
    text = re.sub(r'\s+', ' ', text.lower().strip())
    text = re.sub(r'[^\w\s]', '', text)
    return text

def main():
    print("Loading G2 Question Bank...")

    # Load all 165 questions from answer key
    all_questions = load_answer_key()
    print(f"Loaded {len(all_questions)} questions from answer key")

    # Categorize questions by unit
    questions_by_unit = defaultdict(list)
    uncategorized = []

    for q in all_questions:
        notes = q.get('notes', '')
        unit = categorize_question(q['question'], notes)

        if unit:
            questions_by_unit[unit].append(q)
        else:
            uncategorized.append(q)
            # Try to categorize based on CSA reference if available
            csa_ref = q.get('csaReference', '')
            if csa_ref:
                # Extract unit number from CSA reference if possible
                match = re.search(r'Unit\s+(\d+)', csa_ref, re.IGNORECASE)
                if match:
                    unit = int(match.group(1))
                    if 10 <= unit <= 24:
                        questions_by_unit[unit].append(q)
                        uncategorized.remove(q)

    # Report categorization results
    print(f"\nCategorization Results:")
    print(f"=" * 60)
    total_categorized = 0
    for unit in sorted(questions_by_unit.keys()):
        count = len(questions_by_unit[unit])
        total_categorized += count
        print(f"Unit {unit}: {count} questions")

    print(f"\nUncategorized: {len(uncategorized)} questions")
    print(f"Total Categorized: {total_categorized}")

    # Check for duplicates within each unit
    print(f"\nChecking for duplicates...")
    duplicates_found = 0
    for unit in questions_by_unit:
        seen = {}
        unique_questions = []
        for q in questions_by_unit[unit]:
            norm_text = normalize_question_text(q['question'])
            if norm_text not in seen:
                seen[norm_text] = q
                unique_questions.append(q)
            else:
                duplicates_found += 1
                print(f"  Duplicate in Unit {unit}: Q{q['id']} (duplicate of Q{seen[norm_text]['id']})")
        questions_by_unit[unit] = unique_questions

    print(f"Total duplicates removed: {duplicates_found}")

    # Generate JavaScript question bank
    print(f"\nGenerating JavaScript question bank...")

    js_output = []
    js_output.append("// TSSA G2 Comprehensive Question Bank - Organized by CSA Units 10-24")
    js_output.append("// Total Questions: " + str(sum(len(questions_by_unit[u]) for u in questions_by_unit)))
    js_output.append("")
    js_output.append("const rawQuestionBank = [")

    for unit in sorted(questions_by_unit.keys()):
        if not questions_by_unit[unit]:
            continue

        js_output.append(f"\n    // ========================================")
        js_output.append(f"    // CSA UNIT {unit} - {len(questions_by_unit[unit])} Questions")
        js_output.append(f"    // ========================================")

        for q in questions_by_unit[unit]:
            js_output.append("    {")
            js_output.append(f"        unit: {unit},")
            js_output.append(f"        question: {json.dumps(q['question'])},")
            js_output.append(f"        options: {json.dumps(q['options'])},")
            js_output.append(f"        correct: {q['correct']},")
            if q.get('reasoning'):
                js_output.append(f"        reasoning: {json.dumps(q['reasoning'])},")
            if q.get('csaReference'):
                js_output.append(f"        csaReference: {json.dumps(q['csaReference'])}")
            js_output.append("    },")

    # Remove trailing comma from last question
    if js_output[-1].endswith(","):
        js_output[-1] = js_output[-1][:-1]

    js_output.append("];")
    js_output.append("")
    js_output.append("// Question bank statistics")
    js_output.append("const QUESTION_BANK_STATS = {")
    js_output.append(f"    totalQuestions: {sum(len(questions_by_unit[u]) for u in questions_by_unit)},")
    js_output.append("    questionsByUnit: {")
    for unit in sorted(questions_by_unit.keys()):
        js_output.append(f"        {unit}: {len(questions_by_unit[unit])},")
    js_output.append("    }")
    js_output.append("};")

    # Write to output file
    output_path = r"C:\LocalProjects\WorkFlow\hvac-student-resources\g2_question_bank.js"
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(js_output))

    print(f"\n[SUCCESS] Question bank generated: {output_path}")
    print(f"\nFinal Statistics:")
    print(f"=" * 60)
    print(f"Total Questions: {sum(len(questions_by_unit[u]) for u in questions_by_unit)}")
    print(f"Units Covered: {len(questions_by_unit)}")
    print(f"Average Questions per Unit: {sum(len(questions_by_unit[u]) for u in questions_by_unit) / len(questions_by_unit):.1f}")

if __name__ == "__main__":
    main()
