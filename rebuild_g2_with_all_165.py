#!/usr/bin/env python3
"""
Rebuild G2 question bank with ALL 165 questions
Include original IDs to ensure nothing is lost
"""

import json

# Manually map questions to units based on content review
MANUAL_UNIT_MAPPING = {
    # Questions that need manual categorization
    46: 14,  # Building systems - distribution effect
    54: 14,  # Building systems - stack effect
    80: 11,  # Regulators - pressure limits
    92: 22,  # Venting - combustion analyzer
    102: 18,  # Water heaters - combination systems
    103: 18,  # Water heaters - combination systems
    106: 19,  # Furnaces - garage installation
    110: 12,  # Electrical - troubleshooting
    111: 12,  # Electrical - troubleshooting
    122: 20,  # Hydronic - relief valve
    124: 20,  # Hydronic - backflow preventer
    125: 20,  # Hydronic - pool heater chlorinators
    130: 21,  # Space heaters - dirt pockets
    140: 22,  # Venting - spillage
    142: 22,  # Venting - clearances
    145: 22,  # Venting - vent sizing
    153: 23,  # HVAC Add-ons - electronic air cleaner
    155: 23,  # HVAC Add-ons - humidifier
    159: 24,  # Air handling - BTU definition
    161: 24,  # Air handling - sensible heat
    162: 24,  # Air handling - pressure units
}

def load_answer_key():
    """Load complete answer key"""
    path = r"C:\LocalProjects\WorkFlow\TSSA G2 Exam Prep\g2_exam_2023_COMPLETE_answer_key.json"
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def load_existing_units():
    """Load unit assignments from existing question bank"""
    path = r"C:\LocalProjects\WorkFlow\hvac-student-resources\g2_question_bank.js"
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract unit assignments
    import re
    unit_map = {}

    # Find all question/unit pairs
    pattern = r'unit: (\d+),\s*question: "([^"]+)"'
    for match in re.finditer(pattern, content):
        unit = int(match.group(1))
        # Normalize question for matching
        q_text = match.group(2).replace('\\', '').lower().strip()
        unit_map[q_text[:50]] = unit

    return unit_map

def assign_unit(question_id, question_text, existing_units):
    """Assign a unit to a question"""

    # Check manual mapping first
    if question_id in MANUAL_UNIT_MAPPING:
        return MANUAL_UNIT_MAPPING[question_id]

    # Try to match with existing units
    q_norm = question_text.lower().strip()[:50]
    if q_norm in existing_units:
        return existing_units[q_norm]

    # Keyword matching as fallback
    q_lower = question_text.lower()

    if any(kw in q_lower for kw in ['pipe', 'piping', 'weld', 'tube', 'tubing', 'purge', 'nps', 'schedule', 'elbow', 'tee']):
        return 10
    elif any(kw in q_lower for kw in ['regulator', 'meter', 'relief', 'propane cylinder', 'tank', 'container', 'diaphragm']):
        return 11
    elif any(kw in q_lower for kw in ['electrical', 'fuse', 'wire', 'amperage', 'voltage', 'resistance', 'ohm', 'circuit', 'transformer']):
        return 12
    elif any(kw in q_lower for kw in ['gas valve', 'thermocouple', 'thermopile', 'hot surface', 'flame rod', 'pilot', 'aquastat', 'limit']):
        return 13
    elif any(kw in q_lower for kw in ['building', 'combustion air', 'ventilation', 'depressurization', 'stack effect', 'distribution']):
        return 14
    elif any(kw in q_lower for kw in ['range', 'dryer', 'clothes', 'barbecue', 'lamp', 'oven', 'moisture exhaust']):
        return 15
    elif any(kw in q_lower for kw in ['refrigerator', 'absorption', 'ammonia', 'generator', 'evaporator']):
        return 16
    elif any(kw in q_lower for kw in ['conversion', 'converting', 'flue gas analysis']):
        return 17
    elif any(kw in q_lower for kw in ['water heater', 'combination system', 'circulator', 'mixing valve', 'dip tube', 'anode', 'storage tank']):
        return 18
    elif any(kw in q_lower for kw in ['furnace', 'forced air', 'blower', 'heat exchanger', 'high limit', 'filter', 'duct', 'belt', 'pulley']):
        return 19
    elif any(kw in q_lower for kw in ['boiler', 'hydronic', 'expansion tank', 'lwco', 'backflow', 'pool heater', 'steam']):
        return 20
    elif any(kw in q_lower for kw in ['space heater', 'fireplace', 'radiant', 'infra-red', 'decorative', 'room heater']):
        return 21
    elif any(kw in q_lower for kw in ['vent', 'venting', 'chimney', 'draft', 'flue', 'b vent', 'spillage', 'connector']):
        return 22
    elif any(kw in q_lower for kw in ['humidifier', 'electronic air', 'air filtration', 'humidistat', 'ionizing']):
        return 23
    elif any(kw in q_lower for kw in ['heat loss', 'heat gain', 'btu', 'cfm', 'air handling', 'convection', 'sensible', 'latent']):
        return 24

    return None

def main():
    print("Loading all 165 questions from answer key...")
    all_questions = load_answer_key()

    print("Loading existing unit assignments...")
    existing_units = load_existing_units()

    print("Assigning units to all questions...")
    questions_by_unit = {}
    uncategorized = []

    for q in all_questions:
        unit = assign_unit(q['id'], q['question'], existing_units)

        if unit:
            if unit not in questions_by_unit:
                questions_by_unit[unit] = []
            questions_by_unit[unit].append(q)
        else:
            uncategorized.append(q)
            print(f"  WARNING: Could not categorize Q{q['id']}: {q['question'][:60]}...")

    total_categorized = sum(len(questions_by_unit[u]) for u in questions_by_unit)

    print(f"\nResults:")
    print(f"=" * 60)
    print(f"Total questions: 165")
    print(f"Categorized: {total_categorized}")
    print(f"Uncategorized: {len(uncategorized)}")
    print(f"\nQuestions by Unit:")
    for unit in sorted(questions_by_unit.keys()):
        print(f"  Unit {unit}: {len(questions_by_unit[unit])} questions")

    # Generate JavaScript
    print(f"\nGenerating JavaScript...")
    js_lines = []
    js_lines.append("// TSSA G2 Comprehensive Question Bank - ALL 165 Questions")
    js_lines.append("// Organized by CSA Units 10-24")
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
    js_lines.append(f"    totalQuestions: {total_categorized},")
    js_lines.append("    questionsByUnit: {")
    for unit in sorted(questions_by_unit.keys()):
        js_lines.append(f"        {unit}: {len(questions_by_unit[unit])},")
    js_lines.append("    }")
    js_lines.append("};")

    # Write output
    output_path = r"C:\LocalProjects\WorkFlow\hvac-student-resources\g2_question_bank_165.js"
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(js_lines))

    print(f"\n[SUCCESS] Generated: {output_path}")
    print(f"Total questions in file: {total_categorized}")

if __name__ == "__main__":
    main()
