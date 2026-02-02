// CSA B149.1-25 Comprehensive Question Bank - All 24 Units
// Organized by Unit with difficulty levels and CSA code references

export interface Question {
  id: number;
  unit: number;
  unitName: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  question: string;
  options: string[];
  correct: number;
  reasoning: string;
  csaReference: string;
}

export const UNIT_NAMES: Record<number, string> = {
  1: "Safety",
  2: "Fasteners, Tools and Testing Equipment",
  3: "Properties of Natural Gas and Fuels Safe Handling",
  4: "Code and Regulations",
  5: "Introduction to Electricity",
  6: "Technical Manuals, Specs, Drawings and Graphs",
  7: "Customer Relations",
  8: "Intro to Piping and Tubing Systems",
  9: "Intro to Gas Appliances",
  10: "Advanced Piping and Tubing Systems",
  11: "Pressure Regulators",
  12: "Basic Electricity for Gas Fired Equipment",
  13: "Controls",
  14: "Building as a System",
  15: "Domestic Appliances",
  16: "Gas Fired Refrigerators",
  17: "Conversion Burners",
  18: "Water Heaters and Combination Systems",
  19: "Forced Warm Air Heating Systems",
  20: "Hydronic Heating Systems",
  21: "Space Heaters and Fireplaces",
  22: "Venting Systems",
  23: "Forced Air Add-On Devices",
  24: "Air Handling"
};

export const questionBank: Question[] = [
  // ========================================
  // UNIT 1 - SAFETY (15 Questions)
  // ========================================
  {
    id: 1001,
    unit: 1,
    unitName: "Safety",
    difficulty: "basic",
    question: "What is the minimum safe distance to keep flammable materials away from an operating gas appliance?",
    options: ["12 inches (300 mm)", "24 inches (600 mm)", "36 inches (900 mm)", "48 inches (1200 mm)"],
    correct: 2,
    reasoning: "CSA B149.1-25 requires maintaining a minimum clearance of 36 inches (900 mm) from combustible materials to ensure fire safety.",
    csaReference: "CSA B149.1-25, Clause 7.1 - Clearances from combustibles"
  },
  {
    id: 1002,
    unit: 1,
    unitName: "Safety",
    difficulty: "basic",
    question: "What should you do FIRST when you smell gas in a building?",
    options: ["Turn on the lights to investigate", "Open windows and evacuate immediately", "Call the gas company from inside", "Light a match to find the leak"],
    correct: 1,
    reasoning: "When gas is detected, immediate evacuation without operating any electrical switches is critical. Opening windows during evacuation helps dissipate gas accumulation.",
    csaReference: "CSA B149.1-25, Annex H - Emergency procedures"
  },
  {
    id: 1003,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What is the Lower Explosive Limit (LEL) of natural gas?",
    options: ["2%", "5%", "10%", "15%"],
    correct: 1,
    reasoning: "Natural gas has an LEL of approximately 5% by volume in air. Below this concentration, the mixture is too lean to ignite.",
    csaReference: "CSA B149.1-25, Section 3 - Definitions and fuel properties"
  },
  {
    id: 1004,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What is the Upper Explosive Limit (UEL) of natural gas?",
    options: ["10%", "12%", "15%", "20%"],
    correct: 2,
    reasoning: "Natural gas has a UEL of approximately 15% by volume in air. Above this concentration, the mixture is too rich to ignite.",
    csaReference: "CSA B149.1-25, Section 3 - Definitions and fuel properties"
  },
  {
    id: 1005,
    unit: 1,
    unitName: "Safety",
    difficulty: "basic",
    question: "What color is the flame when natural gas burns with complete combustion?",
    options: ["Yellow", "Orange", "Blue", "Red"],
    correct: 2,
    reasoning: "Complete combustion of natural gas produces a blue flame, indicating proper air-to-fuel ratio and efficient burning.",
    csaReference: "CSA B149.1-25, Section 7 - Combustion principles"
  },
  {
    id: 1006,
    unit: 1,
    unitName: "Safety",
    difficulty: "advanced",
    question: "What is the auto-ignition temperature of natural gas?",
    options: ["400°F (204°C)", "540°F (282°C)", "900°F (482°C)", "1100°F (593°C)"],
    correct: 3,
    reasoning: "Natural gas has an auto-ignition temperature of approximately 1100°F (593°C), meaning it will ignite without a spark at this temperature.",
    csaReference: "CSA B149.1-25, Section 3 - Gas properties"
  },
  {
    id: 1007,
    unit: 1,
    unitName: "Safety",
    difficulty: "basic",
    question: "What type of fire extinguisher should be used on a gas-fed fire?",
    options: ["Type A - Water", "Type B - Dry Chemical", "Type C - CO2", "Shut off the gas supply first"],
    correct: 3,
    reasoning: "For gas-fed fires, the first action is to shut off the gas supply. Using an extinguisher without stopping the fuel source is ineffective and dangerous.",
    csaReference: "CSA B149.1-25, Annex H - Fire safety procedures"
  },
  {
    id: 1008,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "At what oxygen concentration does carbon monoxide become immediately dangerous to life?",
    options: ["100 ppm", "200 ppm", "400 ppm", "1200 ppm"],
    correct: 3,
    reasoning: "Carbon monoxide at 1200 ppm or higher is considered immediately dangerous to life and health (IDLH). Evacuation is required.",
    csaReference: "CSA B149.1-25, Section 8 - Venting and combustion products"
  },
  {
    id: 1009,
    unit: 1,
    unitName: "Safety",
    difficulty: "basic",
    question: "What is the recommended maximum CO reading for ambient air in an occupied space?",
    options: ["0 ppm", "9 ppm", "35 ppm", "50 ppm"],
    correct: 1,
    reasoning: "The maximum recommended CO reading for ambient air is 9 ppm. Higher readings require investigation and remediation.",
    csaReference: "CSA B149.1-25, Annex A - Combustion testing"
  },
  {
    id: 1010,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What PPE is required when working with refrigerants?",
    options: ["Safety glasses only", "Gloves only", "Safety glasses, gloves, and proper ventilation", "No special PPE required"],
    correct: 2,
    reasoning: "Refrigerants can cause frostbite on contact and displace oxygen. Safety glasses, gloves, and adequate ventilation are essential.",
    csaReference: "TSSA Safety Guidelines - Refrigerant handling"
  },
  {
    id: 1011,
    unit: 1,
    unitName: "Safety",
    difficulty: "advanced",
    question: "What is the specific gravity of natural gas compared to air?",
    options: ["0.55 to 0.65", "0.75 to 0.85", "1.0 (same as air)", "1.5 to 2.0"],
    correct: 0,
    reasoning: "Natural gas has a specific gravity of 0.55-0.65, making it lighter than air. It rises and dissipates, which affects leak detection strategies.",
    csaReference: "CSA B149.1-25, Section 3 - Natural gas properties"
  },
  {
    id: 1012,
    unit: 1,
    unitName: "Safety",
    difficulty: "basic",
    question: "How should you test for gas leaks?",
    options: ["Use a match or lighter", "Listen for hissing sounds only", "Use approved leak detection solution or combustible gas detector", "Smell for the odorant only"],
    correct: 2,
    reasoning: "Always use approved leak detection solutions or combustible gas detectors. Never use open flames to check for leaks.",
    csaReference: "CSA B149.1-25, Clause 6.19 - Leak testing requirements"
  },
  {
    id: 1013,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What odorant is added to natural gas for leak detection?",
    options: ["Hydrogen sulfide", "Mercaptan (methyl mercaptan)", "Ammonia", "Propane"],
    correct: 1,
    reasoning: "Mercaptan (methyl mercaptan or similar compounds) is added to natural gas to give it a distinctive 'rotten egg' smell for leak detection.",
    csaReference: "CSA B149.1-25, Section 3 - Odorization requirements"
  },
  {
    id: 1014,
    unit: 1,
    unitName: "Safety",
    difficulty: "advanced",
    question: "What is the minimum ventilation requirement when purging gas lines?",
    options: ["One air change per hour", "Natural ventilation only", "Continuous mechanical ventilation to outdoors", "No ventilation required"],
    correct: 2,
    reasoning: "Purging operations require continuous mechanical ventilation to safely remove gas from the work area and prevent accumulation.",
    csaReference: "CSA B149.1-25, Clause 6.23 - Purging procedures"
  },
  {
    id: 1015,
    unit: 1,
    unitName: "Safety",
    difficulty: "basic",
    question: "What is the proper method to transport a gas cylinder?",
    options: ["Roll it on its side", "Carry it by the valve", "Use a proper cylinder cart with the cylinder secured upright", "Drag it across the floor"],
    correct: 2,
    reasoning: "Gas cylinders must be transported upright and secured on proper cylinder carts to prevent damage and accidental valve breakage.",
    csaReference: "TSSA Cylinder Handling Guidelines"
  },

  // ========================================
  // UNIT 2 - FASTENERS, TOOLS AND TESTING EQUIPMENT (15 Questions)
  // ========================================
  {
    id: 2001,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "basic",
    question: "What is the correct tool for tightening a flare fitting?",
    options: ["Pipe wrench", "Adjustable wrench", "Two flare nut wrenches", "Channel lock pliers"],
    correct: 2,
    reasoning: "Flare fittings require two flare nut wrenches - one to hold the fitting and one to tighten the nut to prevent twisting the tubing.",
    csaReference: "CSA B149.1-25, Clause 6.8 - Fitting installation"
  },
  {
    id: 2002,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "intermediate",
    question: "What type of thread sealant is approved for use on gas piping?",
    options: ["Teflon tape (yellow)", "Regular plumber's tape (white)", "Pipe dope only", "Any thread sealant"],
    correct: 0,
    reasoning: "Yellow Teflon tape (gas-rated) or approved pipe thread compound specifically listed for gas service must be used.",
    csaReference: "CSA B149.1-25, Clause 6.7 - Thread sealants"
  },
  {
    id: 2003,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "basic",
    question: "How many threads should remain visible after properly assembling a threaded pipe joint?",
    options: ["0 threads", "1-2 threads", "3-4 threads", "5-6 threads"],
    correct: 2,
    reasoning: "A properly assembled threaded joint should have 3-4 threads remaining visible to ensure proper engagement without over-tightening.",
    csaReference: "CSA B149.1-25, Clause 6.6 - Threaded joint assembly"
  },
  {
    id: 2004,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "intermediate",
    question: "What is the minimum accuracy requirement for a pressure gauge used in gas testing?",
    options: ["±1%", "±2%", "±3%", "±5%"],
    correct: 2,
    reasoning: "Pressure gauges used for gas testing must have a minimum accuracy of ±3% of full scale to ensure reliable test results.",
    csaReference: "CSA B149.1-25, Clause 6.18 - Testing equipment requirements"
  },
  {
    id: 2005,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "basic",
    question: "What type of tubing cutter should be used for CSST (corrugated stainless steel tubing)?",
    options: ["Standard wheel cutter", "Hacksaw", "Manufacturer-approved CSST cutter", "Reciprocating saw"],
    correct: 2,
    reasoning: "CSST requires manufacturer-approved cutting tools to prevent damage to the tubing and maintain the warranty.",
    csaReference: "CSA B149.1-25, Clause 6.11 - CSST installation requirements"
  },
  {
    id: 2006,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "advanced",
    question: "What is the purpose of a dielectric union in gas piping?",
    options: ["To increase flow capacity", "To prevent galvanic corrosion between dissimilar metals", "To allow for thermal expansion", "To reduce noise"],
    correct: 1,
    reasoning: "Dielectric unions prevent galvanic corrosion when connecting dissimilar metals (e.g., copper to steel) in gas piping systems.",
    csaReference: "CSA B149.1-25, Clause 6.4 - Piping materials and connections"
  },
  {
    id: 2007,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "intermediate",
    question: "What is the proper torque specification for a 1/2\" flare fitting?",
    options: ["Hand tight plus 1/6 turn", "Hand tight plus 1/3 turn", "Hand tight plus 1/2 turn", "As tight as possible"],
    correct: 0,
    reasoning: "Flare fittings are tightened hand tight plus approximately 1/6 turn (60 degrees) to achieve proper seal without damaging the flare.",
    csaReference: "CSA B149.1-25, Clause 6.8 - Flare fitting installation"
  },
  {
    id: 2008,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "basic",
    question: "What tool is used to measure gas pressure at an appliance?",
    options: ["Thermometer", "Manometer or digital pressure gauge", "Multimeter", "Anemometer"],
    correct: 1,
    reasoning: "A manometer (water column gauge) or digital pressure gauge is used to measure gas pressure in inches of water column (in. w.c.).",
    csaReference: "CSA B149.1-25, Clause 6.18 - Pressure testing"
  },
  {
    id: 2009,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "intermediate",
    question: "What is the standard unit of measurement for gas pressure at the appliance level?",
    options: ["PSI", "Inches of water column (in. w.c.)", "Bar", "Atmospheres"],
    correct: 1,
    reasoning: "Gas pressure at the appliance level is measured in inches of water column (in. w.c.) for precise low-pressure readings.",
    csaReference: "CSA B149.1-25, Section 3 - Definitions"
  },
  {
    id: 2010,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "advanced",
    question: "How often should a combustible gas detector be calibrated?",
    options: ["Daily before use", "Weekly", "Monthly", "Per manufacturer recommendations, typically annually"],
    correct: 3,
    reasoning: "Combustible gas detectors should be calibrated according to manufacturer recommendations, typically annually, with regular bump tests.",
    csaReference: "TSSA Equipment Maintenance Guidelines"
  },
  {
    id: 2011,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "basic",
    question: "What is the purpose of a tubing reamer?",
    options: ["To cut tubing", "To remove internal burrs after cutting", "To flare tubing ends", "To bend tubing"],
    correct: 1,
    reasoning: "A tubing reamer removes internal burrs created during cutting, ensuring smooth gas flow and proper fitting connections.",
    csaReference: "CSA B149.1-25, Clause 6.8 - Tubing preparation"
  },
  {
    id: 2012,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "intermediate",
    question: "What angle should a 45° flare fitting seat be?",
    options: ["37°", "45°", "60°", "90°"],
    correct: 1,
    reasoning: "A 45° flare fitting creates a 45-degree seat angle for the tubing flare, matching the fitting body for a proper seal.",
    csaReference: "CSA B149.1-25, Clause 6.8 - Flare fitting specifications"
  },
  {
    id: 2013,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "advanced",
    question: "What is the minimum wall thickness required for Schedule 40 black iron pipe used in gas service?",
    options: ["Depends on pipe diameter", "0.109\" for all sizes", "0.083\" for all sizes", "Wall thickness is not specified"],
    correct: 0,
    reasoning: "Schedule 40 pipe wall thickness varies by diameter. For example, 1/2\" Schedule 40 has 0.109\" wall, while 2\" has 0.154\" wall.",
    csaReference: "CSA B149.1-25, Clause 6.2 - Pipe specifications"
  },
  {
    id: 2014,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "basic",
    question: "What is the correct way to store pipe wrenches?",
    options: ["Hanging by the jaw", "Laying flat with jaws closed", "Standing upright", "Any position is acceptable"],
    correct: 1,
    reasoning: "Pipe wrenches should be stored flat with jaws closed to protect the teeth and maintain proper adjustment.",
    csaReference: "General trade practice - Tool maintenance"
  },
  {
    id: 2015,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "intermediate",
    question: "What type of fitting is NOT permitted for underground gas piping?",
    options: ["Welded joints", "PE fusion joints", "Threaded joints", "Mechanical compression joints approved for underground"],
    correct: 2,
    reasoning: "Threaded joints are not permitted for underground gas piping due to corrosion concerns and difficulty in achieving reliable seals.",
    csaReference: "CSA B149.1-25, Clause 6.5 - Underground piping requirements"
  },

  // ========================================
  // UNIT 3 - PROPERTIES OF NATURAL GAS (15 Questions)
  // ========================================
  {
    id: 3001,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "basic",
    question: "What is the primary component of natural gas?",
    options: ["Propane", "Butane", "Methane", "Ethane"],
    correct: 2,
    reasoning: "Natural gas is composed primarily of methane (CH4), typically 85-95% by volume.",
    csaReference: "CSA B149.1-25, Section 3 - Definitions"
  },
  {
    id: 3002,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is the heating value of natural gas in BTU per cubic foot?",
    options: ["500 BTU/ft³", "750 BTU/ft³", "1000 BTU/ft³", "1500 BTU/ft³"],
    correct: 2,
    reasoning: "Natural gas has a heating value of approximately 1000 BTU per cubic foot (1050 BTU/ft³ typical).",
    csaReference: "CSA B149.1-25, Section 3 - Gas properties"
  },
  {
    id: 3003,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "basic",
    question: "Is natural gas heavier or lighter than air?",
    options: ["Heavier than air", "Lighter than air", "Same as air", "Depends on temperature"],
    correct: 1,
    reasoning: "Natural gas (specific gravity 0.55-0.65) is lighter than air (1.0) and will rise when released.",
    csaReference: "CSA B149.1-25, Section 3 - Gas properties"
  },
  {
    id: 3004,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is the heating value of propane in BTU per cubic foot?",
    options: ["1000 BTU/ft³", "1500 BTU/ft³", "2000 BTU/ft³", "2500 BTU/ft³"],
    correct: 3,
    reasoning: "Propane has a heating value of approximately 2500 BTU per cubic foot, more than twice that of natural gas.",
    csaReference: "CSA B149.2-25, Section 3 - Propane properties"
  },
  {
    id: 3005,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "basic",
    question: "Is propane heavier or lighter than air?",
    options: ["Heavier than air", "Lighter than air", "Same as air", "Depends on pressure"],
    correct: 0,
    reasoning: "Propane (specific gravity 1.52) is heavier than air and will settle in low areas when released.",
    csaReference: "CSA B149.2-25, Section 3 - Propane properties"
  },
  {
    id: 3006,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "advanced",
    question: "What is the flame temperature of natural gas when burning with proper air mixture?",
    options: ["1000°F (538°C)", "1500°F (816°C)", "2000°F (1093°C)", "3500°F (1927°C)"],
    correct: 3,
    reasoning: "Natural gas burns at approximately 3500°F (1927°C) when properly mixed with air for complete combustion.",
    csaReference: "CSA B149.1-25, Section 3 - Combustion characteristics"
  },
  {
    id: 3007,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is the theoretical air-to-gas ratio for complete combustion of natural gas?",
    options: ["5:1", "10:1", "15:1", "20:1"],
    correct: 1,
    reasoning: "The theoretical air-to-gas ratio for natural gas is approximately 10:1 (10 cubic feet of air per cubic foot of gas).",
    csaReference: "CSA B149.1-25, Section 7 - Combustion principles"
  },
  {
    id: 3008,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "basic",
    question: "What produces the yellow color in a 'lazy' gas flame?",
    options: ["Too much air", "Unburned carbon particles", "Water vapor", "Nitrogen"],
    correct: 1,
    reasoning: "A yellow flame indicates incomplete combustion with unburned carbon particles glowing in the flame.",
    csaReference: "CSA B149.1-25, Section 7 - Combustion analysis"
  },
  {
    id: 3009,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "advanced",
    question: "What is the Wobbe Index used for?",
    options: ["Measuring pipe size", "Comparing interchangeability of fuel gases", "Calculating pressure drop", "Determining flow rate"],
    correct: 1,
    reasoning: "The Wobbe Index compares the interchangeability of fuel gases based on heating value and specific gravity.",
    csaReference: "CSA B149.1-25, Annex B - Gas interchangeability"
  },
  {
    id: 3010,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is produced when natural gas burns with insufficient air?",
    options: ["Only CO2 and H2O", "Carbon monoxide (CO)", "Nitrogen oxides only", "Pure oxygen"],
    correct: 1,
    reasoning: "Incomplete combustion due to insufficient air produces carbon monoxide (CO), a deadly colorless, odorless gas.",
    csaReference: "CSA B149.1-25, Section 8 - Products of combustion"
  },
  {
    id: 3011,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "basic",
    question: "What is the chemical formula for methane?",
    options: ["C2H6", "C3H8", "CH4", "C4H10"],
    correct: 2,
    reasoning: "Methane, the primary component of natural gas, has the chemical formula CH4 (one carbon, four hydrogen atoms).",
    csaReference: "CSA B149.1-25, Section 3 - Gas chemistry"
  },
  {
    id: 3012,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is the chemical formula for propane?",
    options: ["CH4", "C2H6", "C3H8", "C4H10"],
    correct: 2,
    reasoning: "Propane has the chemical formula C3H8 (three carbon atoms, eight hydrogen atoms).",
    csaReference: "CSA B149.2-25, Section 3 - Propane chemistry"
  },
  {
    id: 3013,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "advanced",
    question: "At what temperature does propane vaporize at atmospheric pressure?",
    options: ["-44°F (-42°C)", "0°F (-18°C)", "32°F (0°C)", "60°F (16°C)"],
    correct: 0,
    reasoning: "Propane boils (vaporizes) at -44°F (-42°C) at atmospheric pressure, which is why it's stored as a liquid under pressure.",
    csaReference: "CSA B149.2-25, Section 3 - Propane properties"
  },
  {
    id: 3014,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "basic",
    question: "What percentage of oxygen is in normal atmospheric air?",
    options: ["15%", "18%", "21%", "25%"],
    correct: 2,
    reasoning: "Normal atmospheric air contains approximately 21% oxygen and 78% nitrogen, with trace amounts of other gases.",
    csaReference: "CSA B149.1-25, Section 3 - Combustion air requirements"
  },
  {
    id: 3015,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What happens to gas pressure as temperature increases in a closed container?",
    options: ["Pressure decreases", "Pressure increases", "Pressure stays the same", "Pressure fluctuates randomly"],
    correct: 1,
    reasoning: "Per Gay-Lussac's Law, gas pressure increases proportionally with temperature in a closed container (P1/T1 = P2/T2).",
    csaReference: "CSA B149.1-25, Annex D - Gas laws"
  },

  // ========================================
  // UNIT 4 - CODE AND REGULATIONS (15 Questions)
  // ========================================
  {
    id: 4001,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "basic",
    question: "What is the primary code governing natural gas installations in Canada?",
    options: ["CSA B149.2", "CSA B149.1", "TSSA Act", "Building Code"],
    correct: 1,
    reasoning: "CSA B149.1 is the Natural Gas and Propane Installation Code that governs gas installations in Canada.",
    csaReference: "CSA B149.1-25, Scope"
  },
  {
    id: 4002,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "basic",
    question: "What regulatory body oversees gas technician licensing in Ontario?",
    options: ["CSA", "TSSA", "ESA", "HRAI"],
    correct: 1,
    reasoning: "The Technical Standards and Safety Authority (TSSA) regulates gas technician licensing and safety in Ontario.",
    csaReference: "Ontario Regulation 212/01 - Gaseous Fuels"
  },
  {
    id: 4003,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "What certification level is required to install natural gas appliances in Ontario?",
    options: ["G1", "G2", "G3", "Any G-level"],
    correct: 1,
    reasoning: "G2 certification is required to install natural gas (NG) appliances. G3 is for propane only; G1 includes both.",
    csaReference: "TSSA Certification Requirements"
  },
  {
    id: 4004,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "How long must gas installation records be retained?",
    options: ["1 year", "2 years", "5 years", "7 years"],
    correct: 3,
    reasoning: "Gas installation records must be retained for a minimum of 7 years as per TSSA requirements.",
    csaReference: "TSSA Record Keeping Requirements"
  },
  {
    id: 4005,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "advanced",
    question: "What is required before making modifications to an existing gas installation?",
    options: ["Nothing special", "Verbal approval from homeowner", "Written permission and proper permits", "Just notify TSSA after completion"],
    correct: 2,
    reasoning: "Modifications to gas installations require proper permits and often require inspection by the authority having jurisdiction.",
    csaReference: "CSA B149.1-25, Section 4 - General requirements"
  },
  {
    id: 4006,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "basic",
    question: "What does AHJ stand for in gas code terminology?",
    options: ["Associated HVAC Journeyman", "Authority Having Jurisdiction", "Approved Heating Junction", "Annual HVAC Juncture"],
    correct: 1,
    reasoning: "AHJ stands for Authority Having Jurisdiction - the organization responsible for approving equipment, installations, or procedures.",
    csaReference: "CSA B149.1-25, Section 3 - Definitions"
  },
  {
    id: 4007,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "When is a TSSA inspection required?",
    options: ["Never", "Only for commercial installations", "As required by regulation for specific installations", "Only when requested by homeowner"],
    correct: 2,
    reasoning: "TSSA inspections are required for specific installations as defined by regulation, including certain commercial and new construction work.",
    csaReference: "Ontario Regulation 212/01"
  },
  {
    id: 4008,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "advanced",
    question: "What is the penalty for performing gas work without proper certification?",
    options: ["Warning only", "Fine up to $50,000 for individuals", "Jail time only", "No penalty exists"],
    correct: 1,
    reasoning: "Individuals can face fines up to $50,000 and corporations up to $100,000 for performing gas work without proper certification.",
    csaReference: "TSSA Act - Penalties"
  },
  {
    id: 4009,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "basic",
    question: "What must be attached to an appliance after a gas installation?",
    options: ["Nothing required", "A completed appliance label", "Only manufacturer's label", "Owner's manual only"],
    correct: 1,
    reasoning: "A completed appliance label with technician information, date, and work performed must be attached after installation.",
    csaReference: "TSSA Labeling Requirements"
  },
  {
    id: 4010,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "What code governs propane installations specifically?",
    options: ["CSA B149.1 only", "CSA B149.2", "Both B149.1 and B149.2", "Building Code"],
    correct: 2,
    reasoning: "Propane installations are governed by CSA B149.2, with CSA B149.1 referenced for installation practices. Both codes apply.",
    csaReference: "CSA B149.2-25, Scope"
  },
  {
    id: 4011,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "advanced",
    question: "What is required when an installation does not comply with current code?",
    options: ["Ignore it if it was code-compliant when installed", "Must be upgraded to current code", "Depends on the AHJ requirements", "Always must be reported to TSSA"],
    correct: 2,
    reasoning: "Existing installations typically are grandfathered unless modifications are made. The AHJ determines if upgrades are required.",
    csaReference: "CSA B149.1-25, Section 4 - Existing installations"
  },
  {
    id: 4012,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "basic",
    question: "What document provides guidance on interpreting CSA code requirements?",
    options: ["The code itself only", "CSA Annexes and handbooks", "Building Code", "Manufacturer instructions only"],
    correct: 1,
    reasoning: "CSA Annexes provide additional guidance and explanatory information for interpreting code requirements.",
    csaReference: "CSA B149.1-25, Annexes"
  },
  {
    id: 4013,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "How often is the CSA B149.1 code typically updated?",
    options: ["Every year", "Every 3-5 years", "Every 10 years", "Only when necessary"],
    correct: 1,
    reasoning: "CSA B149.1 is typically updated every 3-5 years to incorporate new technologies and safety requirements.",
    csaReference: "CSA Standards Development Process"
  },
  {
    id: 4014,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "advanced",
    question: "What takes precedence: manufacturer's instructions or CSA code?",
    options: ["CSA code always", "Manufacturer's instructions always", "The more restrictive requirement", "AHJ decides"],
    correct: 2,
    reasoning: "When manufacturer's instructions and CSA code differ, the more restrictive requirement applies to ensure safety.",
    csaReference: "CSA B149.1-25, Section 4.2 - Manufacturer's instructions"
  },
  {
    id: 4015,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "basic",
    question: "What is required before energizing a newly installed gas appliance?",
    options: ["Nothing special", "Pressure testing and leak check", "Just turn on the gas", "Only check pilot light"],
    correct: 1,
    reasoning: "All new gas installations require pressure testing and leak checking before the appliance can be energized.",
    csaReference: "CSA B149.1-25, Clause 6.18 - Testing requirements"
  },

  // ========================================
  // UNIT 5 - INTRODUCTION TO ELECTRICITY (15 Questions)
  // ========================================
  {
    id: 5001,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "basic",
    question: "What is the unit of measurement for electrical current?",
    options: ["Volts", "Watts", "Amperes", "Ohms"],
    correct: 2,
    reasoning: "Electrical current is measured in Amperes (Amps), which represents the flow of electrons through a conductor.",
    csaReference: "CSA Unit 5 - Electrical fundamentals"
  },
  {
    id: 5002,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "basic",
    question: "What is the unit of measurement for electrical resistance?",
    options: ["Volts", "Watts", "Amperes", "Ohms"],
    correct: 3,
    reasoning: "Electrical resistance is measured in Ohms (Ω), which represents opposition to current flow.",
    csaReference: "CSA Unit 5 - Electrical fundamentals"
  },
  {
    id: 5003,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "According to Ohm's Law, if voltage is 120V and resistance is 40 ohms, what is the current?",
    options: ["2 amps", "3 amps", "4 amps", "5 amps"],
    correct: 1,
    reasoning: "Ohm's Law: I = V/R. Therefore, 120V ÷ 40Ω = 3 amps.",
    csaReference: "CSA Unit 5 - Ohm's Law"
  },
  {
    id: 5004,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "What is the standard residential electrical service voltage in Canada?",
    options: ["110V", "120V/240V", "220V", "277V"],
    correct: 1,
    reasoning: "Standard residential electrical service in Canada is 120V/240V single-phase, providing 120V for most circuits and 240V for large appliances.",
    csaReference: "CSA Unit 5 - Electrical systems"
  },
  {
    id: 5005,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "basic",
    question: "What color wire is typically used for the ground conductor?",
    options: ["Black", "White", "Green or bare copper", "Red"],
    correct: 2,
    reasoning: "The ground conductor is typically green, green with yellow stripe, or bare copper wire.",
    csaReference: "Canadian Electrical Code - Wire colors"
  },
  {
    id: 5006,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "basic",
    question: "What color wire is typically used for the neutral conductor?",
    options: ["Black", "White", "Green", "Red"],
    correct: 1,
    reasoning: "The neutral conductor is typically white or grey in Canadian residential wiring.",
    csaReference: "Canadian Electrical Code - Wire colors"
  },
  {
    id: 5007,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "What is the formula for calculating electrical power?",
    options: ["P = I × R", "P = V × I", "P = V / I", "P = V × R"],
    correct: 1,
    reasoning: "Electrical power (Watts) equals Voltage multiplied by Current: P = V × I (Watts = Volts × Amps).",
    csaReference: "CSA Unit 5 - Power calculations"
  },
  {
    id: 5008,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "advanced",
    question: "In a series circuit, what happens to total resistance when more resistors are added?",
    options: ["Decreases", "Increases", "Stays the same", "Becomes zero"],
    correct: 1,
    reasoning: "In a series circuit, total resistance equals the sum of individual resistances (RT = R1 + R2 + R3...), so adding resistors increases total resistance.",
    csaReference: "CSA Unit 5 - Series circuits"
  },
  {
    id: 5009,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "advanced",
    question: "In a parallel circuit, what happens to total resistance when more resistors are added?",
    options: ["Decreases", "Increases", "Stays the same", "Becomes infinite"],
    correct: 0,
    reasoning: "In a parallel circuit, adding resistors decreases total resistance because 1/RT = 1/R1 + 1/R2 + 1/R3...",
    csaReference: "CSA Unit 5 - Parallel circuits"
  },
  {
    id: 5010,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "basic",
    question: "What safety device protects circuits from overcurrent?",
    options: ["Transformer", "Capacitor", "Fuse or circuit breaker", "Resistor"],
    correct: 2,
    reasoning: "Fuses and circuit breakers protect circuits by interrupting current flow when it exceeds safe levels.",
    csaReference: "CSA Unit 5 - Circuit protection"
  },
  {
    id: 5011,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "What is the purpose of a transformer in HVAC equipment?",
    options: ["Store electricity", "Change voltage levels", "Measure current", "Generate electricity"],
    correct: 1,
    reasoning: "Transformers change voltage levels, typically stepping down 120V to 24V for control circuits in HVAC equipment.",
    csaReference: "CSA Unit 5 - Transformers"
  },
  {
    id: 5012,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "basic",
    question: "What meter setting should you use to test for voltage?",
    options: ["Ohms", "Amps", "AC Volts or DC Volts", "Continuity"],
    correct: 2,
    reasoning: "Use the AC Volts or DC Volts setting depending on the type of voltage being measured.",
    csaReference: "CSA Unit 5 - Meter usage"
  },
  {
    id: 5013,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "What must you do before testing resistance with an ohmmeter?",
    options: ["Turn the power on", "De-energize the circuit", "Ground the meter", "Nothing special"],
    correct: 1,
    reasoning: "The circuit must be de-energized (power off) before testing resistance to prevent meter damage and inaccurate readings.",
    csaReference: "CSA Unit 5 - Safe testing procedures"
  },
  {
    id: 5014,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "advanced",
    question: "What is the typical control circuit voltage for gas furnaces?",
    options: ["12V DC", "24V AC", "120V AC", "240V AC"],
    correct: 1,
    reasoning: "Most gas furnace control circuits operate at 24V AC, provided by a step-down transformer from 120V.",
    csaReference: "CSA Unit 5 - HVAC control circuits"
  },
  {
    id: 5015,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "basic",
    question: "What is the difference between AC and DC electricity?",
    options: ["AC is more powerful", "AC alternates direction, DC flows in one direction", "DC is safer", "There is no difference"],
    correct: 1,
    reasoning: "AC (Alternating Current) changes direction periodically; DC (Direct Current) flows in one direction continuously.",
    csaReference: "CSA Unit 5 - Types of current"
  },

  // ========================================
  // UNIT 6 - TECHNICAL MANUALS, SPECS (10 Questions)
  // ========================================
  {
    id: 6001,
    unit: 6,
    unitName: "Technical Manuals, Specs, Drawings and Graphs",
    difficulty: "basic",
    question: "Where can you find the correct gas pressure settings for an appliance?",
    options: ["CSA code only", "Manufacturer's installation manual", "Gas utility", "Building inspector"],
    correct: 1,
    reasoning: "The manufacturer's installation manual provides specific gas pressure settings and adjustment procedures for each appliance model.",
    csaReference: "CSA B149.1-25, Clause 4.2 - Manufacturer's instructions"
  },
  {
    id: 6002,
    unit: 6,
    unitName: "Technical Manuals, Specs, Drawings and Graphs",
    difficulty: "intermediate",
    question: "What information is found on an appliance rating plate?",
    options: ["Installation date only", "Model, serial, input rating, gas type, manifold pressure", "Price and warranty", "Technician's name"],
    correct: 1,
    reasoning: "Rating plates contain model number, serial number, input rating (BTU/h), gas type, manifold pressure, and certification marks.",
    csaReference: "CSA B149.1-25, Clause 4.3 - Appliance labeling"
  },
  {
    id: 6003,
    unit: 6,
    unitName: "Technical Manuals, Specs, Drawings and Graphs",
    difficulty: "intermediate",
    question: "What does a wiring diagram show?",
    options: ["Physical location of components", "Electrical connections between components", "Pipe sizes only", "Vent sizes only"],
    correct: 1,
    reasoning: "Wiring diagrams show the electrical connections between components, not their physical locations (that's a pictorial diagram).",
    csaReference: "CSA Unit 6 - Reading diagrams"
  },
  {
    id: 6004,
    unit: 6,
    unitName: "Technical Manuals, Specs, Drawings and Graphs",
    difficulty: "basic",
    question: "What symbol represents a normally open switch on a wiring diagram?",
    options: ["Solid line between two points", "Gap between two points", "Circle", "Triangle"],
    correct: 1,
    reasoning: "A normally open (NO) switch is represented by a gap between two contact points on a wiring diagram.",
    csaReference: "CSA Unit 6 - Electrical symbols"
  },
  {
    id: 6005,
    unit: 6,
    unitName: "Technical Manuals, Specs, Drawings and Graphs",
    difficulty: "advanced",
    question: "What is the purpose of a ladder diagram?",
    options: ["Show pipe layout", "Show control circuit logic in sequential format", "Calculate heat loss", "Show vent routing"],
    correct: 1,
    reasoning: "Ladder diagrams show control circuit logic in a sequential, easy-to-follow format with power rails on the sides.",
    csaReference: "CSA Unit 6 - Ladder diagrams"
  },
  {
    id: 6006,
    unit: 6,
    unitName: "Technical Manuals, Specs, Drawings and Graphs",
    difficulty: "basic",
    question: "What certification mark indicates an appliance is approved for use in Canada?",
    options: ["UL only", "CSA, cUL, or other recognized certification", "Energy Star", "Manufacturer's logo"],
    correct: 1,
    reasoning: "CSA, cUL (UL Listed for Canada), or other SCC-accredited certification marks indicate approval for Canadian use.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Certification requirements"
  },
  {
    id: 6007,
    unit: 6,
    unitName: "Technical Manuals, Specs, Drawings and Graphs",
    difficulty: "intermediate",
    question: "What unit is typically used for appliance input ratings on Canadian equipment?",
    options: ["Watts only", "BTU per hour (BTU/h)", "Horsepower", "Joules"],
    correct: 1,
    reasoning: "Canadian gas appliance input ratings are typically expressed in BTU per hour (BTU/h) or MBH (thousands of BTU/h).",
    csaReference: "CSA B149.1-25, Section 3 - Definitions"
  },
  {
    id: 6008,
    unit: 6,
    unitName: "Technical Manuals, Specs, Drawings and Graphs",
    difficulty: "advanced",
    question: "How do you calculate the output of an 80% efficient furnace with 100,000 BTU/h input?",
    options: ["100,000 × 0.80 = 80,000 BTU/h", "100,000 ÷ 0.80 = 125,000 BTU/h", "100,000 + 80 = 100,080 BTU/h", "100,000 - 80 = 99,920 BTU/h"],
    correct: 0,
    reasoning: "Output = Input × Efficiency. 100,000 BTU/h × 0.80 = 80,000 BTU/h output.",
    csaReference: "CSA Unit 6 - Efficiency calculations"
  },
  {
    id: 6009,
    unit: 6,
    unitName: "Technical Manuals, Specs, Drawings and Graphs",
    difficulty: "basic",
    question: "What does AFUE stand for?",
    options: ["Average Fuel Usage Efficiency", "Annual Fuel Utilization Efficiency", "Appliance Fuel Use Estimate", "Annual Furnace Unit Efficiency"],
    correct: 1,
    reasoning: "AFUE stands for Annual Fuel Utilization Efficiency, measuring seasonal heating efficiency as a percentage.",
    csaReference: "CSA Unit 6 - Efficiency ratings"
  },
  {
    id: 6010,
    unit: 6,
    unitName: "Technical Manuals, Specs, Drawings and Graphs",
    difficulty: "intermediate",
    question: "What is the minimum AFUE requirement for new gas furnaces in Canada?",
    options: ["80%", "90%", "92%", "95%"],
    correct: 2,
    reasoning: "New gas furnaces in Canada must have a minimum AFUE of 92% per current energy efficiency regulations.",
    csaReference: "Energy Efficiency Regulations - Canada"
  },

  // ========================================
  // UNIT 7 - CUSTOMER RELATIONS (10 Questions)
  // ========================================
  {
    id: 7001,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "basic",
    question: "What should you do first when arriving at a customer's home?",
    options: ["Start working immediately", "Introduce yourself and show identification", "Ask for payment upfront", "Inspect the basement"],
    correct: 1,
    reasoning: "Professional practice requires introducing yourself, showing identification/company credentials before beginning work.",
    csaReference: "CSA Unit 7 - Professional conduct"
  },
  {
    id: 7002,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "basic",
    question: "What should you do if you discover an unsafe condition during a service call?",
    options: ["Ignore it if not related to your work", "Inform the customer and document it", "Fix it without telling the customer", "Leave immediately"],
    correct: 1,
    reasoning: "Technicians have a duty to inform customers of unsafe conditions and document findings, even if unrelated to the original call.",
    csaReference: "TSSA Code of Ethics"
  },
  {
    id: 7003,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "How should you explain technical issues to a homeowner?",
    options: ["Use technical jargon to sound professional", "Use simple, clear language they can understand", "Avoid explaining anything", "Write it down and leave"],
    correct: 1,
    reasoning: "Clear, simple communication helps customers understand their equipment and builds trust in your expertise.",
    csaReference: "CSA Unit 7 - Communication skills"
  },
  {
    id: 7004,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "basic",
    question: "What should you do with the work area after completing a job?",
    options: ["Leave it as is", "Clean up and leave it as clean or cleaner than you found it", "Ask the customer to clean up", "Only clean if asked"],
    correct: 1,
    reasoning: "Professional practice requires leaving the work area clean and removing all debris from the job.",
    csaReference: "CSA Unit 7 - Professional standards"
  },
  {
    id: 7005,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "What is the proper way to handle a customer complaint?",
    options: ["Argue your position", "Listen, acknowledge, and work toward resolution", "Ignore it", "Blame the manufacturer"],
    correct: 1,
    reasoning: "Professional complaint handling involves listening to the customer, acknowledging their concern, and working toward a fair resolution.",
    csaReference: "CSA Unit 7 - Conflict resolution"
  },
  {
    id: 7006,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "basic",
    question: "What personal protective equipment should be worn at a customer's home?",
    options: ["Whatever you prefer", "As required by the task and company policy", "Nothing - it's not a construction site", "Full hazmat suit"],
    correct: 1,
    reasoning: "Appropriate PPE should be worn based on the work being performed and company safety policies.",
    csaReference: "CSA Unit 7 - Safety practices"
  },
  {
    id: 7007,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "What should you do if a customer asks you to do work outside your certification?",
    options: ["Do it anyway to please the customer", "Politely decline and explain certification requirements", "Do it but don't document it", "Refer to a friend"],
    correct: 1,
    reasoning: "Technicians must work within their certification scope and should explain why certain work requires different credentials.",
    csaReference: "TSSA Certification Requirements"
  },
  {
    id: 7008,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "basic",
    question: "What documentation should be provided to the customer after completing work?",
    options: ["Nothing required", "Invoice and applicable labels/documentation", "Verbal summary only", "Only if they ask"],
    correct: 1,
    reasoning: "Customers should receive an invoice detailing work performed, applicable appliance labels, and any relevant documentation.",
    csaReference: "TSSA Documentation Requirements"
  },
  {
    id: 7009,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "advanced",
    question: "What is the proper procedure when equipment must be shut down for safety?",
    options: ["Just shut it down and leave", "Tag, lock out, explain to customer, and document", "Tell customer to restart it later", "Only shut down if customer agrees"],
    correct: 1,
    reasoning: "Safety shutdowns require proper tagging, lockout, customer notification with written explanation, and documentation of the hazard.",
    csaReference: "TSSA Safety Shutdown Procedures"
  },
  {
    id: 7010,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "How should customer information and property be handled?",
    options: ["Share interesting details with friends", "Maintain confidentiality and respect property", "Take photos for social media", "Discuss with other customers"],
    correct: 1,
    reasoning: "Customer privacy must be respected. Personal information is confidential and property must be treated with care.",
    csaReference: "CSA Unit 7 - Professional ethics"
  },

  // ========================================
  // UNIT 8 - INTRO TO PIPING AND TUBING (15 Questions)
  // ========================================
  {
    id: 8001,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "basic",
    question: "What is the most common material for interior natural gas piping?",
    options: ["Copper", "PVC", "Black iron (steel)", "Aluminum"],
    correct: 2,
    reasoning: "Black iron (black steel) pipe is the most common material for interior natural gas piping due to its durability and reliability.",
    csaReference: "CSA B149.1-25, Clause 6.2 - Piping materials"
  },
  {
    id: 8002,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "basic",
    question: "What type of tubing can be used for natural gas service?",
    options: ["Type L copper only", "CSST only", "Approved copper, CSST, or PE tubing", "PVC tubing"],
    correct: 2,
    reasoning: "Approved materials include copper tubing (Type K, L, or ACR), CSST, and PE (polyethylene) for underground service.",
    csaReference: "CSA B149.1-25, Clause 6.2 - Approved materials"
  },
  {
    id: 8003,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the minimum burial depth for underground gas piping?",
    options: ["6 inches", "12 inches", "18 inches (450 mm)", "24 inches"],
    correct: 2,
    reasoning: "Underground gas piping must be buried at least 18 inches (450 mm) below grade to protect from damage.",
    csaReference: "CSA B149.1-25, Clause 6.5 - Underground piping"
  },
  {
    id: 8004,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What material is used for underground gas service lines?",
    options: ["Black iron pipe", "Galvanized steel", "Polyethylene (PE) or coated steel", "Copper only"],
    correct: 2,
    reasoning: "Underground service lines typically use PE (polyethylene) or properly coated steel to resist corrosion.",
    csaReference: "CSA B149.1-25, Clause 6.5 - Underground materials"
  },
  {
    id: 8005,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "basic",
    question: "What type of fitting is used to connect black iron pipe?",
    options: ["Flare fittings", "Threaded malleable iron fittings", "Compression fittings", "Push-fit fittings"],
    correct: 1,
    reasoning: "Black iron pipe uses threaded malleable iron or steel fittings with approved thread sealant.",
    csaReference: "CSA B149.1-25, Clause 6.6 - Threaded connections"
  },
  {
    id: 8006,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "advanced",
    question: "What is the maximum allowable pressure drop in a gas piping system?",
    options: ["0.3 in. w.c.", "0.5 in. w.c.", "1.0 in. w.c.", "2.0 in. w.c."],
    correct: 1,
    reasoning: "The maximum allowable pressure drop from the meter to the appliance is typically 0.5 inches water column.",
    csaReference: "CSA B149.1-25, Clause 6.1 - Pipe sizing criteria"
  },
  {
    id: 8007,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Why is galvanized pipe NOT permitted for interior gas piping?",
    options: ["It's too expensive", "The zinc coating can flake and clog valves/orifices", "It's too heavy", "It's not strong enough"],
    correct: 1,
    reasoning: "Galvanized pipe is prohibited because the zinc coating can flake off internally and clog gas valves and burner orifices.",
    csaReference: "CSA B149.1-25, Clause 6.2 - Prohibited materials"
  },
  {
    id: 8008,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "basic",
    question: "What is used to support horizontal gas piping runs?",
    options: ["Nothing required", "Pipe hangers at specified intervals", "Duct tape", "Wire only"],
    correct: 1,
    reasoning: "Horizontal gas piping must be supported with approved pipe hangers at intervals specified by code based on pipe size.",
    csaReference: "CSA B149.1-25, Clause 6.3 - Pipe support"
  },
  {
    id: 8009,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is a drip leg (sediment trap) and where is it installed?",
    options: ["A drain for water heaters", "A vertical pipe section before the appliance to catch debris", "A type of valve", "A pressure regulator"],
    correct: 1,
    reasoning: "A drip leg is a vertical section of pipe installed before the appliance to collect sediment and moisture from the gas supply.",
    csaReference: "CSA B149.1-25, Clause 6.16 - Drip leg requirements"
  },
  {
    id: 8010,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "basic",
    question: "What is the minimum length of a drip leg?",
    options: ["1 inch", "2 inches", "3 inches (75 mm)", "6 inches"],
    correct: 2,
    reasoning: "The minimum length of a drip leg (sediment trap) is 3 inches (75 mm) to adequately collect debris.",
    csaReference: "CSA B149.1-25, Clause 6.16 - Drip leg dimensions"
  },
  {
    id: 8011,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "advanced",
    question: "What test pressure is required for a new low-pressure gas piping system?",
    options: ["3 psi (20 kPa) for 10 minutes", "15 psi (100 kPa) for 30 minutes", "25 psi for 1 hour", "50 psi for 2 hours"],
    correct: 0,
    reasoning: "New low-pressure piping (under 14\" w.c.) requires a test at 3 psi (20 kPa) minimum for 10 minutes with no pressure loss.",
    csaReference: "CSA B149.1-25, Clause 6.18 - Pressure testing"
  },
  {
    id: 8012,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What type of valve is required at the gas appliance?",
    options: ["Gate valve", "Globe valve", "Approved gas cock or ball valve", "Check valve"],
    correct: 2,
    reasoning: "An approved manual gas shutoff valve (gas cock or ball valve listed for gas service) is required at each appliance.",
    csaReference: "CSA B149.1-25, Clause 6.15 - Shutoff valves"
  },
  {
    id: 8013,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "basic",
    question: "Where must a main gas shutoff valve be located?",
    options: ["In the basement only", "Within 6 feet of the meter and easily accessible", "Anywhere in the building", "Outside only"],
    correct: 1,
    reasoning: "The main shutoff valve must be within 6 feet (1.8 m) of the gas meter and readily accessible in an emergency.",
    csaReference: "CSA B149.1-25, Clause 6.14 - Main shutoff location"
  },
  {
    id: 8014,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "advanced",
    question: "What bonding requirement applies to CSST installations?",
    options: ["No bonding required", "Bond to the grounding electrode system", "Bond to a water pipe only", "Use plastic fittings"],
    correct: 1,
    reasoning: "CSST must be bonded to the building's grounding electrode system to protect against lightning-induced damage.",
    csaReference: "CSA B149.1-25, Clause 6.11 - CSST bonding"
  },
  {
    id: 8015,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the purpose of a union fitting in gas piping?",
    options: ["Increase pressure", "Allow for appliance disconnection without cutting pipe", "Reduce vibration", "Filter the gas"],
    correct: 1,
    reasoning: "Union fittings allow appliances to be disconnected for service or replacement without cutting the piping.",
    csaReference: "CSA B149.1-25, Clause 6.15 - Appliance connections"
  },

  // ========================================
  // UNIT 9 - INTRO TO GAS APPLIANCES (15 Questions)
  // ========================================
  {
    id: 9001,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "basic",
    question: "What are the three components required for combustion?",
    options: ["Gas, air, electricity", "Fuel, oxygen, ignition source (heat)", "Pilot, thermocouple, gas valve", "Burner, heat exchanger, blower"],
    correct: 1,
    reasoning: "The fire triangle requires fuel (gas), oxygen (air), and an ignition source (heat) for combustion to occur.",
    csaReference: "CSA B149.1-25, Section 7 - Combustion principles"
  },
  {
    id: 9002,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "basic",
    question: "What is the function of a thermocouple?",
    options: ["Control gas pressure", "Generate a small voltage when heated to prove pilot flame", "Ignite the main burner", "Regulate air flow"],
    correct: 1,
    reasoning: "A thermocouple generates a small DC voltage (millivolts) when heated by the pilot flame, proving the pilot is lit.",
    csaReference: "CSA Unit 9 - Safety controls"
  },
  {
    id: 9003,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the typical output voltage of a thermocouple?",
    options: ["10-15 millivolts", "20-30 millivolts", "120 volts", "24 volts"],
    correct: 1,
    reasoning: "A properly functioning thermocouple generates 20-30 millivolts DC when heated by the pilot flame.",
    csaReference: "CSA Unit 9 - Thermocouple testing"
  },
  {
    id: 9004,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "basic",
    question: "What is the purpose of a draft diverter (draft hood)?",
    options: ["Increase draft", "Prevent backdraft from affecting the burner and dilute flue gases", "Cool the flue gases", "Preheat combustion air"],
    correct: 1,
    reasoning: "A draft diverter prevents negative pressure from affecting the burner flame and dilutes flue gases with room air.",
    csaReference: "CSA B149.1-25, Clause 8.4 - Draft diverters"
  },
  {
    id: 9005,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is primary air in a gas burner?",
    options: ["Air supplied by a blower", "Air mixed with gas before the burner ports", "Air from outdoors", "Air in the combustion chamber"],
    correct: 1,
    reasoning: "Primary air is mixed with gas in the burner venturi before the burner ports. Secondary air is drawn into the flame above the ports.",
    csaReference: "CSA Unit 9 - Burner operation"
  },
  {
    id: 9006,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "advanced",
    question: "What percentage of primary air is typical for an atmospheric burner?",
    options: ["25%", "40-60%", "80%", "100%"],
    correct: 1,
    reasoning: "Atmospheric burners typically draw 40-60% of the required combustion air as primary air, with the rest as secondary air.",
    csaReference: "CSA Unit 9 - Combustion air ratios"
  },
  {
    id: 9007,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "basic",
    question: "What type of appliance has a sealed combustion chamber?",
    options: ["Category I", "Category III", "Category IV (direct vent/sealed)", "All categories"],
    correct: 2,
    reasoning: "Category IV (and some Category III) appliances have sealed combustion, drawing air from outside and venting products of combustion to outside.",
    csaReference: "CSA B149.1-25, Section 8 - Appliance categories"
  },
  {
    id: 9008,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What safety device opens the gas valve on a millivolt system?",
    options: ["Circuit breaker", "Thermocouple-powered electromagnet", "24V transformer", "120V relay"],
    correct: 1,
    reasoning: "In millivolt systems, the thermocouple powers an electromagnet in the gas valve that holds it open when the pilot is proven.",
    csaReference: "CSA Unit 9 - Millivolt systems"
  },
  {
    id: 9009,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "basic",
    question: "What is the purpose of a limit switch on a furnace?",
    options: ["Control the thermostat", "Shut off gas if temperature gets too high", "Turn on the blower", "Regulate gas pressure"],
    correct: 1,
    reasoning: "The high limit switch shuts off the gas valve if the heat exchanger temperature exceeds safe limits.",
    csaReference: "CSA Unit 9 - Safety controls"
  },
  {
    id: 9010,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What determines the gas input rate of a burner?",
    options: ["Burner color", "Orifice size and gas pressure", "Flame height only", "Room temperature"],
    correct: 1,
    reasoning: "Gas input rate is determined by the orifice size and the gas pressure at the manifold (inlet pressure to the orifice).",
    csaReference: "CSA Unit 9 - Gas input calculation"
  },
  {
    id: 9011,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "advanced",
    question: "What is the standard manifold pressure for natural gas appliances?",
    options: ["1.5 in. w.c.", "3.5 in. w.c.", "7.0 in. w.c.", "11.0 in. w.c."],
    correct: 1,
    reasoning: "Standard manifold pressure for natural gas is 3.5 inches water column (in. w.c.), though some high-efficiency units may differ.",
    csaReference: "CSA B149.1-25, Clause 7.4 - Gas pressure"
  },
  {
    id: 9012,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "basic",
    question: "What is indicated by a yellow, lazy flame on a gas burner?",
    options: ["Perfect combustion", "Too much air", "Incomplete combustion - needs adjustment", "Normal operation"],
    correct: 2,
    reasoning: "A yellow, lazy flame indicates incomplete combustion due to insufficient air, requiring burner adjustment.",
    csaReference: "CSA Unit 9 - Flame characteristics"
  },
  {
    id: 9013,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is flame rollout?",
    options: ["Normal flame pattern", "Flames extending outside the combustion chamber - dangerous condition", "Pilot flame adjustment", "Burner ignition sequence"],
    correct: 1,
    reasoning: "Flame rollout is a dangerous condition where flames extend outside the combustion chamber, often due to blocked heat exchanger.",
    csaReference: "CSA Unit 9 - Unsafe conditions"
  },
  {
    id: 9014,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "advanced",
    question: "What is the function of a flame rectification sensor?",
    options: ["Light the pilot", "Prove main burner flame by detecting current flow through the flame", "Control gas pressure", "Measure flame temperature"],
    correct: 1,
    reasoning: "Flame rectification uses the flame's ability to conduct DC current in one direction to prove the flame is present.",
    csaReference: "CSA Unit 9 - Electronic ignition systems"
  },
  {
    id: 9015,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the trial for ignition time on most gas appliances?",
    options: ["5 seconds", "10-15 seconds", "60 seconds", "90 seconds"],
    correct: 1,
    reasoning: "Most gas appliances have a trial for ignition of 10-15 seconds, after which the gas valve closes if flame is not proven.",
    csaReference: "CSA Unit 9 - Ignition timing"
  },

  // ========================================
  // UNIT 10 - ADVANCED PIPING (15 Questions)
  // ========================================
  {
    id: 10001,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What size tubing is required to supply propane to a 225,000 BTU/h appliance with 95 feet of copper tubing at 2 psig with 1.0 psi drop?",
    options: ["3/8 inch", "1/2 inch", "5/8 inch", "3/4 inch"],
    correct: 2,
    reasoning: "Using CSA B149.1 Annex D propane tubing sizing tables for 2 psig with 1.0 psi drop, 95 feet for 225,000 BTU/h requires 5/8\" copper.",
    csaReference: "CSA B149.1-25, Annex D - Propane tubing sizing"
  },
  {
    id: 10002,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the minimum distance a purge line must terminate from a building or air intake?",
    options: ["5 feet (1.5 m)", "10 feet (3 m)", "15 feet (4.5 m)", "20 feet (6 m)"],
    correct: 1,
    reasoning: "Purge lines must terminate at least 10 feet (3 m) from buildings or air intakes for safety during purging.",
    csaReference: "CSA B149.1-25, Clause 6.23 - Purging requirements"
  },
  {
    id: 10003,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "What is the equivalent length of a 2-inch 90° threaded elbow?",
    options: ["2.06 feet", "2.41 feet", "5.17 feet", "6.16 feet"],
    correct: 2,
    reasoning: "According to fitting equivalent length tables, a 2-inch 90° threaded elbow has an equivalent length of 5.17 feet.",
    csaReference: "CSA B149.1-25, Annex C - Fitting equivalent lengths"
  },
  {
    id: 10004,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "What test time and pressure is required for a new welded 3\" piping system over 220 feet at 40 psig supply?",
    options: ["60 min at 50 psig", "180 min at 60 psig", "60 min at 55 psig", "180 min at 50 psig"],
    correct: 1,
    reasoning: "For systems over 125 feet with supply pressure above 20 psig, test at 1.5 times working pressure (60 psig) for 180 minutes.",
    csaReference: "CSA B149.1-25, Table 6.3 - Pressure test requirements"
  },
  {
    id: 10005,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What factor must be considered when sizing piping for multiple appliances?",
    options: ["Only the largest appliance", "Sum of all connected loads", "Average of all loads", "Only intermittent loads"],
    correct: 1,
    reasoning: "Piping must be sized for the total connected load (sum of all appliance input ratings) to ensure adequate supply.",
    csaReference: "CSA B149.1-25, Clause 6.1 - Pipe sizing"
  },
  {
    id: 10006,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the purpose of a line pressure regulator?",
    options: ["Increase pressure", "Reduce and maintain constant downstream pressure", "Measure flow rate", "Filter the gas"],
    correct: 1,
    reasoning: "A line pressure regulator reduces incoming pressure and maintains a constant downstream pressure regardless of flow changes.",
    csaReference: "CSA B149.1-25, Clause 5.1 - Pressure regulation"
  },
  {
    id: 10007,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "When is a two-stage regulation system required?",
    options: ["Always", "When inlet pressure exceeds 2 psig", "When pressure reduction ratio exceeds 10:1", "Never required"],
    correct: 2,
    reasoning: "Two-stage regulation is typically required when the pressure reduction ratio exceeds approximately 10:1 for stable operation.",
    csaReference: "CSA B149.1-25, Clause 5.3 - Multi-stage regulation"
  },
  {
    id: 10008,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the maximum working pressure for standard residential gas piping?",
    options: ["2 psig", "5 psig", "14 inches w.c. (1/2 psig)", "20 psig"],
    correct: 2,
    reasoning: "Standard residential gas piping operates at 14 inches water column or less (low pressure - under 1/2 psig).",
    csaReference: "CSA B149.1-25, Section 3 - Pressure definitions"
  },
  {
    id: 10009,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "What method is used to join PE (polyethylene) pipe?",
    options: ["Threaded fittings", "Heat fusion", "Soldering", "Glue"],
    correct: 1,
    reasoning: "PE pipe is joined using heat fusion (butt fusion or electrofusion), creating a permanent, leak-free joint.",
    csaReference: "CSA B149.1-25, Clause 6.9 - PE pipe joining"
  },
  {
    id: 10010,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "What is the longest equivalent length run for 1/2\" pipe serving a 65,000 BTU/h appliance at 0.5\" w.c. pressure drop?",
    options: ["25 feet", "50 feet", "75 feet", "100 feet"],
    correct: 1,
    reasoning: "Using pipe sizing tables, 1/2\" pipe at 0.5\" w.c. drop can serve approximately 50 feet equivalent length at 65,000 BTU/h.",
    csaReference: "CSA B149.1-25, Annex A - Pipe sizing tables"
  },
  {
    id: 10011,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What protection is required for gas piping passing through a concrete floor?",
    options: ["No protection needed", "Sleeve or casing to protect from corrosion and movement", "Paint only", "Tape only"],
    correct: 1,
    reasoning: "Gas piping through concrete must be sleeved to protect from corrosion, physical damage, and allow for movement.",
    csaReference: "CSA B149.1-25, Clause 6.4 - Piping protection"
  },
  {
    id: 10012,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "What determines the regulator vent line sizing?",
    options: ["Always 1/4 inch", "Based on regulator capacity and vent line length", "Same as inlet pipe", "No requirements"],
    correct: 1,
    reasoning: "Regulator vent line sizing depends on regulator capacity and vent line length per manufacturer's requirements and code.",
    csaReference: "CSA B149.1-25, Clause 5.4 - Regulator venting"
  },
  {
    id: 10013,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the maximum pressure for CSST applications?",
    options: ["2 psig", "5 psig", "10 psig (depending on manufacturer)", "No limit"],
    correct: 2,
    reasoning: "CSST pressure ratings vary by manufacturer but typically range from 5-10 psig maximum per listing.",
    csaReference: "CSA B149.1-25, Clause 6.11 - CSST requirements"
  },
  {
    id: 10014,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Where is a gas riser located?",
    options: ["In the attic", "Where piping transitions from underground to above ground", "Inside appliances", "At the meter only"],
    correct: 1,
    reasoning: "A gas riser is the transition point where underground piping comes above ground, typically at the building entrance.",
    csaReference: "CSA B149.1-25, Clause 6.5 - Underground-to-above-ground transition"
  },
  {
    id: 10015,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "What is diversity factor in gas piping design?",
    options: ["A safety margin", "Reduction factor for simultaneous appliance operation", "Pipe material selection", "Flow velocity limit"],
    correct: 1,
    reasoning: "Diversity factor accounts for the probability that not all appliances operate simultaneously, allowing smaller pipe sizing.",
    csaReference: "CSA B149.1-25, Annex E - Diversity factors"
  },

  // ========================================
  // UNIT 11 - PRESSURE REGULATORS (15 Questions)
  // ========================================
  {
    id: 11001,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "basic",
    question: "What is the primary function of a gas pressure regulator?",
    options: ["Increase gas pressure", "Reduce and maintain constant outlet pressure", "Measure gas flow", "Filter impurities"],
    correct: 1,
    reasoning: "Pressure regulators reduce inlet pressure to a lower, constant outlet pressure for safe appliance operation.",
    csaReference: "CSA B149.1-25, Clause 5.1 - Pressure regulation"
  },
  {
    id: 11002,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What happens if the regulator vent becomes blocked while the regulator is open?",
    options: ["Pressure drops", "Downstream pressure becomes excessive", "No effect", "Pressure fluctuates"],
    correct: 1,
    reasoning: "A blocked vent prevents the diaphragm from operating properly, causing excessive downstream pressure.",
    csaReference: "CSA B149.1-25, Clause 5.4 - Regulator venting"
  },
  {
    id: 11003,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "basic",
    question: "What component in a regulator senses outlet pressure?",
    options: ["Orifice", "Diaphragm", "Spring", "Valve seat"],
    correct: 1,
    reasoning: "The diaphragm flexes in response to outlet pressure changes, controlling the valve position.",
    csaReference: "CSA Unit 11 - Regulator components"
  },
  {
    id: 11004,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What is 'lock-up' pressure on a regulator?",
    options: ["The pressure when the regulator fails", "The pressure when no gas is flowing (zero demand)", "The maximum inlet pressure", "The minimum outlet pressure"],
    correct: 1,
    reasoning: "Lock-up pressure is the outlet pressure when there is no demand (zero flow), typically slightly higher than delivery pressure.",
    csaReference: "CSA Unit 11 - Regulator performance"
  },
  {
    id: 11005,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "advanced",
    question: "What is 'droop' in regulator operation?",
    options: ["Physical wear", "Decrease in outlet pressure as flow increases", "Increase in outlet pressure", "Regulator failure"],
    correct: 1,
    reasoning: "Droop is the decrease in outlet pressure from lock-up to maximum flow. Better regulators have less droop.",
    csaReference: "CSA Unit 11 - Regulator characteristics"
  },
  {
    id: 11006,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "basic",
    question: "Where must the regulator vent terminate?",
    options: ["Inside the building", "To the outdoors or to an approved location", "Into the appliance", "Anywhere"],
    correct: 1,
    reasoning: "Regulator vents must terminate to the outdoors or to an approved atmospheric location per manufacturer and code requirements.",
    csaReference: "CSA B149.1-25, Clause 5.4 - Vent termination"
  },
  {
    id: 11007,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What is a service regulator?",
    options: ["A regulator inside the appliance", "The first-stage regulator at the meter reducing to delivery pressure", "An emergency backup regulator", "A flow control device"],
    correct: 1,
    reasoning: "The service regulator is typically at or near the meter, reducing supply pressure to delivery pressure for the building.",
    csaReference: "CSA B149.1-25, Clause 5.2 - Service regulation"
  },
  {
    id: 11008,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "advanced",
    question: "What is the purpose of an internal relief valve in a regulator?",
    options: ["Increase flow capacity", "Vent excess pressure if the diaphragm fails", "Reduce noise", "Filter debris"],
    correct: 1,
    reasoning: "The internal relief valve vents excess gas to atmosphere through the vent if the regulator fails open.",
    csaReference: "CSA B149.1-25, Clause 5.5 - Overpressure protection"
  },
  {
    id: 11009,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "How do you adjust the outlet pressure on most regulators?",
    options: ["Replace the orifice", "Turn the adjustment screw to increase/decrease spring tension", "Change the diaphragm", "Adjust the inlet valve"],
    correct: 1,
    reasoning: "Adjusting the spring tension via the adjustment screw changes the setpoint pressure on most regulators.",
    csaReference: "CSA Unit 11 - Regulator adjustment"
  },
  {
    id: 11010,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "basic",
    question: "What is the standard delivery pressure for natural gas at residential appliances?",
    options: ["3.5 in. w.c.", "7.0 in. w.c.", "11.0 in. w.c.", "14.0 in. w.c."],
    correct: 1,
    reasoning: "Standard delivery pressure for natural gas is 7.0 inches water column at the meter outlet/building entrance.",
    csaReference: "CSA B149.1-25, Clause 5.2 - Delivery pressure"
  },
  {
    id: 11011,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What could cause low outlet pressure from a regulator?",
    options: ["Blocked vent", "Dirty/clogged regulator, damaged diaphragm, or low inlet pressure", "Too large an orifice", "High inlet pressure"],
    correct: 1,
    reasoning: "Low outlet pressure can result from debris restricting flow, damaged diaphragm, or insufficient inlet pressure.",
    csaReference: "CSA Unit 11 - Troubleshooting"
  },
  {
    id: 11012,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "advanced",
    question: "What is a two-pound (2 psig) system?",
    options: ["A system using two regulators", "A medium-pressure distribution system operating at 2 psi", "An emergency backup system", "A propane-only system"],
    correct: 1,
    reasoning: "A 2-pound system operates at 2 psig, requiring a second-stage regulator at the appliance to reduce to utilization pressure.",
    csaReference: "CSA B149.1-25, Clause 5.3 - Multi-pressure systems"
  },
  {
    id: 11013,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "basic",
    question: "What happens to the gas flow when demand increases?",
    options: ["Regulator closes", "Diaphragm moves to open the valve more, increasing flow", "Pressure increases", "Flow decreases"],
    correct: 1,
    reasoning: "Increased demand lowers outlet pressure, causing the diaphragm to move and open the valve wider to maintain pressure.",
    csaReference: "CSA Unit 11 - Regulator operation"
  },
  {
    id: 11014,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What is the minimum inlet-to-outlet pressure differential for proper regulator operation?",
    options: ["0.5 in. w.c.", "1.0 in. w.c.", "Varies by manufacturer, typically 1-2 in. w.c.", "No minimum required"],
    correct: 2,
    reasoning: "Regulators require a minimum pressure differential (typically 1-2 in. w.c.) to operate properly. Check manufacturer specs.",
    csaReference: "CSA Unit 11 - Regulator specifications"
  },
  {
    id: 11015,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "advanced",
    question: "What is an appliance regulator?",
    options: ["The service regulator", "A regulator built into the appliance gas valve to fine-tune pressure", "An external pressure booster", "A flow meter"],
    correct: 1,
    reasoning: "Many appliance gas valves include an integral regulator to maintain proper manifold pressure at the burners.",
    csaReference: "CSA Unit 11 - Appliance regulation"
  },

  // ========================================
  // UNIT 12 - BASIC ELECTRICITY FOR GAS EQUIPMENT (15 Questions)
  // ========================================
  {
    id: 12001,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "basic",
    question: "What voltage reading should you get across a closed switch?",
    options: ["Line voltage (120V)", "0 volts", "24 volts", "Infinite"],
    correct: 1,
    reasoning: "A closed (conducting) switch has no resistance, so there is no voltage drop across it - reading should be 0V.",
    csaReference: "CSA Unit 12 - Switch testing"
  },
  {
    id: 12002,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "What voltage reading should you get across an open switch on the primary side of a 24V transformer?",
    options: ["0 volts", "24 volts", "120 volts", "240 volts"],
    correct: 2,
    reasoning: "An open switch on the 120V primary side shows full line voltage across its contacts because no current flows.",
    csaReference: "CSA Unit 12 - Transformer circuits"
  },
  {
    id: 12003,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "basic",
    question: "What safety device monitors furnace heat exchanger temperature?",
    options: ["Thermostat", "High limit switch", "Flame sensor", "Pressure switch"],
    correct: 1,
    reasoning: "The high limit switch monitors heat exchanger temperature and shuts off the burner if it gets too hot.",
    csaReference: "CSA Unit 12 - Safety controls"
  },
  {
    id: 12004,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "What is the purpose of a pressure switch on an induced draft furnace?",
    options: ["Control gas pressure", "Prove combustion air blower is operating before allowing ignition", "Regulate airflow", "Control room pressure"],
    correct: 1,
    reasoning: "The pressure switch proves the inducer motor is running and creating proper draft before the control allows ignition.",
    csaReference: "CSA Unit 12 - Draft proving"
  },
  {
    id: 12005,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "advanced",
    question: "What is the typical microamp reading for a properly functioning flame sensor?",
    options: ["0.5 - 1.0 µA", "2 - 6 µA", "10 - 15 µA", "100+ µA"],
    correct: 1,
    reasoning: "A properly functioning flame sensor typically reads 2-6 microamps. Below 1 µA usually causes lockout.",
    csaReference: "CSA Unit 12 - Flame rectification"
  },
  {
    id: 12006,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "basic",
    question: "What is a common cause of weak flame sensor signal?",
    options: ["Too much gas", "Dirty or oxidized flame sensor rod", "High gas pressure", "New igniter"],
    correct: 1,
    reasoning: "A dirty or oxidized flame sensor rod cannot conduct properly, resulting in weak microamp readings.",
    csaReference: "CSA Unit 12 - Flame sensor maintenance"
  },
  {
    id: 12007,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "How do you clean a flame sensor?",
    options: ["Sandpaper", "Light abrasive (steel wool or emery cloth)", "Water only", "Replace it - don't clean"],
    correct: 1,
    reasoning: "Light abrasive cleaning with fine steel wool or emery cloth removes oxidation without damaging the sensor rod.",
    csaReference: "CSA Unit 12 - Sensor maintenance"
  },
  {
    id: 12008,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "basic",
    question: "What does a fan limit control do?",
    options: ["Only controls the high limit", "Controls blower on/off based on temperature and provides high limit protection", "Only controls the blower", "Controls gas valve"],
    correct: 1,
    reasoning: "A fan limit control turns the blower on/off based on heat exchanger temperature and provides high limit safety cutoff.",
    csaReference: "CSA Unit 12 - Fan limit controls"
  },
  {
    id: 12009,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "advanced",
    question: "What component in an intermittent pilot system sparks to light the pilot?",
    options: ["Thermocouple", "Hot surface igniter", "Spark electrode (igniter)", "Flame sensor"],
    correct: 2,
    reasoning: "In intermittent pilot (IP) systems, a spark electrode creates a spark to ignite the pilot when there's a call for heat.",
    csaReference: "CSA Unit 12 - Ignition systems"
  },
  {
    id: 12010,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "What is the purpose of a time delay relay in a furnace?",
    options: ["Immediate shutoff", "Delay an action (like blower start) after a condition is met", "Speed up operation", "Measure voltage"],
    correct: 1,
    reasoning: "Time delay relays delay blower start after burner ignition and blower shutoff after burner stops to maximize heat extraction.",
    csaReference: "CSA Unit 12 - Timing circuits"
  },
  {
    id: 12011,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "basic",
    question: "What terminals on a standard thermostat are used for heating?",
    options: ["R and G", "R and Y", "R and W", "R and C"],
    correct: 2,
    reasoning: "R (power) and W (heat) terminals complete the heating circuit. W goes to the gas valve/ignition control.",
    csaReference: "CSA Unit 12 - Thermostat wiring"
  },
  {
    id: 12012,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "advanced",
    question: "What does a rollout switch protect against?",
    options: ["High room temperature", "Flames extending outside the combustion chamber", "Low gas pressure", "Blower failure"],
    correct: 1,
    reasoning: "Rollout switches detect flames extending outside the combustion chamber and shut off gas flow - indicating blocked heat exchanger.",
    csaReference: "CSA Unit 12 - Safety controls"
  },
  {
    id: 12013,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "How do you test a high limit switch?",
    options: ["Only visual inspection", "Check continuity with ohmmeter when cool, verify opens when heated", "Replace without testing", "Voltage test only"],
    correct: 1,
    reasoning: "Test limit switches for continuity when cool (should be closed) and verify they open at the rated temperature.",
    csaReference: "CSA Unit 12 - Limit switch testing"
  },
  {
    id: 12014,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "basic",
    question: "What is the function of the blower door safety switch?",
    options: ["Control blower speed", "Prevent operation when the blower compartment door is open", "Adjust airflow", "Monitor temperature"],
    correct: 1,
    reasoning: "The blower door switch prevents furnace operation when the door is removed, protecting technicians and homeowners.",
    csaReference: "CSA Unit 12 - Safety interlocks"
  },
  {
    id: 12015,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "advanced",
    question: "What is soft lockout vs. hard lockout on a furnace control?",
    options: ["Same thing", "Soft = auto-reset after time; Hard = requires manual reset/power cycle", "Soft = permanent; Hard = temporary", "Based on temperature"],
    correct: 1,
    reasoning: "Soft lockout automatically resets after a time period; hard lockout requires manual reset or power cycle to clear.",
    csaReference: "CSA Unit 12 - Control operation"
  },

  // ========================================
  // UNIT 13 - CONTROLS (15 Questions)
  // ========================================
  {
    id: 13001,
    unit: 13,
    unitName: "Controls",
    difficulty: "basic",
    question: "What type of control is a thermostat?",
    options: ["Limit control", "Operating control", "Safety control", "Flame safeguard"],
    correct: 1,
    reasoning: "A thermostat is an operating control that cycles the heating system to maintain desired temperature.",
    csaReference: "CSA Unit 13 - Control types"
  },
  {
    id: 13002,
    unit: 13,
    unitName: "Controls",
    difficulty: "intermediate",
    question: "What is the difference between a modulating and a two-stage gas valve?",
    options: ["No difference", "Modulating = infinite adjustment; Two-stage = high/low only", "Two-stage = infinite adjustment", "Modulating = on/off only"],
    correct: 1,
    reasoning: "Modulating valves adjust continuously over their range; two-stage valves switch between fixed high and low fire positions.",
    csaReference: "CSA Unit 13 - Gas valve operation"
  },
  {
    id: 13003,
    unit: 13,
    unitName: "Controls",
    difficulty: "basic",
    question: "What does a combination gas valve include?",
    options: ["Only a manual shutoff", "Manual shutoff, automatic operator, pressure regulator in one unit", "Just a regulator", "Filter only"],
    correct: 1,
    reasoning: "A combination gas valve combines manual shutoff, automatic gas valve operator, and pressure regulator in one assembly.",
    csaReference: "CSA Unit 13 - Combination valves"
  },
  {
    id: 13004,
    unit: 13,
    unitName: "Controls",
    difficulty: "intermediate",
    question: "What is the purpose of the 'heat anticipator' in a mechanical thermostat?",
    options: ["Delay heating start", "Shut off heat slightly early to prevent overshoot", "Increase heating speed", "Save energy by reducing cycles"],
    correct: 1,
    reasoning: "The heat anticipator shuts off the heating call slightly before reaching setpoint to prevent temperature overshoot.",
    csaReference: "CSA Unit 13 - Thermostat operation"
  },
  {
    id: 13005,
    unit: 13,
    unitName: "Controls",
    difficulty: "advanced",
    question: "What opens first in a two-stage gas valve during light-off?",
    options: ["Main valve", "Both simultaneously", "Pilot valve/first stage", "Second stage"],
    correct: 2,
    reasoning: "In redundant gas valves, the pilot (first stage) valve opens first, followed by the main (second stage) after ignition is proven.",
    csaReference: "CSA Unit 13 - Gas valve sequencing"
  },
  {
    id: 13006,
    unit: 13,
    unitName: "Controls",
    difficulty: "intermediate",
    question: "What control proves combustion airflow on Category IV furnaces?",
    options: ["Thermostat", "Pressure switch", "Limit switch", "Flame sensor"],
    correct: 1,
    reasoning: "Pressure switches prove inducer motor operation and proper combustion airflow before allowing ignition.",
    csaReference: "CSA Unit 13 - Draft proving"
  },
  {
    id: 13007,
    unit: 13,
    unitName: "Controls",
    difficulty: "basic",
    question: "What is the function of a gas valve solenoid?",
    options: ["Regulate pressure", "Open/close the valve when energized/de-energized", "Filter gas", "Measure flow"],
    correct: 1,
    reasoning: "The solenoid is an electromagnetic operator that opens the gas valve when energized and closes when de-energized.",
    csaReference: "CSA Unit 13 - Valve operators"
  },
  {
    id: 13008,
    unit: 13,
    unitName: "Controls",
    difficulty: "advanced",
    question: "What is 'proven' ground in flame rectification systems?",
    options: ["Any ground connection", "A verified ground path from burner to control for flame sensing", "Electrical panel ground", "Water pipe ground"],
    correct: 1,
    reasoning: "Proven ground is a verified low-resistance path from the burner to the control, required for flame rectification to work properly.",
    csaReference: "CSA Unit 13 - Flame sensing circuits"
  },
  {
    id: 13009,
    unit: 13,
    unitName: "Controls",
    difficulty: "intermediate",
    question: "What causes a furnace to short-cycle on the limit?",
    options: ["Normal operation", "Airflow restriction, dirty filter, or failed blower", "Too much gas", "Low room temperature"],
    correct: 1,
    reasoning: "Short-cycling on the limit indicates overheating due to restricted airflow from dirty filters, blocked returns, or blower issues.",
    csaReference: "CSA Unit 13 - Troubleshooting"
  },
  {
    id: 13010,
    unit: 13,
    unitName: "Controls",
    difficulty: "basic",
    question: "What is the sequence of operation for a typical furnace?",
    options: ["Burner → Blower → Thermostat", "Thermostat call → Inducer → Ignition → Main burner → Blower", "Blower → Ignition → Burner", "Random sequence"],
    correct: 1,
    reasoning: "Typical sequence: Thermostat calls for heat → Inducer starts → Ignition attempted → Main burner lights → Blower starts after delay.",
    csaReference: "CSA Unit 13 - Furnace sequence"
  },
  {
    id: 13011,
    unit: 13,
    unitName: "Controls",
    difficulty: "advanced",
    question: "What is a pre-purge on a furnace?",
    options: ["Post-operation fan run", "Running the inducer before ignition to clear the combustion chamber", "Gas purge", "Thermostat delay"],
    correct: 1,
    reasoning: "Pre-purge runs the inducer motor before ignition to clear any residual combustion gases from the heat exchanger.",
    csaReference: "CSA Unit 13 - Ignition timing"
  },
  {
    id: 13012,
    unit: 13,
    unitName: "Controls",
    difficulty: "intermediate",
    question: "What does a blocked flue cause on a pressure switch?",
    options: ["Normal operation", "Failure to close - no ignition", "Higher pressure reading", "Switch opens immediately"],
    correct: 1,
    reasoning: "A blocked flue prevents proper draft, so the pressure switch won't close (prove), preventing ignition sequence.",
    csaReference: "CSA Unit 13 - Pressure switch function"
  },
  {
    id: 13013,
    unit: 13,
    unitName: "Controls",
    difficulty: "basic",
    question: "What should you check if a furnace inducer runs but ignition doesn't occur?",
    options: ["Only the thermostat", "Pressure switch closure, igniter function, gas valve", "Only the gas meter", "Only the filter"],
    correct: 1,
    reasoning: "Check: pressure switch closing, igniter firing, gas valve receiving signal and opening. These are common failure points.",
    csaReference: "CSA Unit 13 - Troubleshooting no-ignition"
  },
  {
    id: 13014,
    unit: 13,
    unitName: "Controls",
    difficulty: "advanced",
    question: "What is flame rectification?",
    options: ["Flame color control", "Using the flame's electrical conductivity to prove flame presence", "Gas pressure adjustment", "Pilot flame sensing"],
    correct: 1,
    reasoning: "Flame rectification uses the flame's ability to conduct DC current to prove flame presence - current flows in one direction through the flame.",
    csaReference: "CSA Unit 13 - Flame proving methods"
  },
  {
    id: 13015,
    unit: 13,
    unitName: "Controls",
    difficulty: "intermediate",
    question: "What is the typical trial for ignition time?",
    options: ["1-2 seconds", "4-10 seconds", "30 seconds", "60 seconds"],
    correct: 1,
    reasoning: "Most furnaces allow 4-10 seconds for flame establishment before going to lockout if flame isn't proven.",
    csaReference: "CSA Unit 13 - Ignition timing"
  },

  // ========================================
  // UNIT 14 - BUILDING AS A SYSTEM (10 Questions)
  // ========================================
  {
    id: 14001,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "What is 'tight construction' in terms of combustion air?",
    options: ["Well-insulated roofs", "Buildings with minimal air infiltration requiring dedicated combustion air", "Buildings with many windows", "Old construction"],
    correct: 1,
    reasoning: "Tight construction refers to well-sealed buildings with vapor barriers, weather stripping, etc., requiring dedicated combustion air openings.",
    csaReference: "CSA B149.1-25, Clause 8.2 - Combustion air in tight buildings"
  },
  {
    id: 14002,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "basic",
    question: "What is the stack effect in a building?",
    options: ["Chimney cleaning method", "Natural air movement due to temperature differences between inside and outside", "HVAC duct sizing", "Fire safety requirement"],
    correct: 1,
    reasoning: "Stack effect is the natural movement of air due to temperature (density) differences - warm air rises, drawing in replacement air.",
    csaReference: "CSA Unit 14 - Building pressure dynamics"
  },
  {
    id: 14003,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "What can cause negative pressure in a building?",
    options: ["Opening windows", "Exhaust fans, clothes dryers, range hoods operating simultaneously", "Too much insulation", "High outdoor temperature"],
    correct: 1,
    reasoning: "Multiple exhaust appliances operating together can depressurize a building, potentially causing backdrafting of combustion appliances.",
    csaReference: "CSA Unit 14 - Building depressurization"
  },
  {
    id: 14004,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "advanced",
    question: "What is spillage at a draft hood?",
    options: ["Normal operation", "Combustion products escaping into the room instead of up the vent", "Gas leaking", "Pilot outage"],
    correct: 1,
    reasoning: "Spillage is flue gases escaping through the draft hood into the living space, often caused by negative pressure or venting problems.",
    csaReference: "CSA Unit 14 - Spillage testing"
  },
  {
    id: 14005,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "What is the minimum combustion air opening size per 1000 BTU/h in confined spaces?",
    options: ["1 sq. in. per 1000 BTU/h (one opening)", "1 sq. in. per 4000 BTU/h (two openings)", "2 sq. in. per 1000 BTU/h", "No minimum specified"],
    correct: 1,
    reasoning: "For confined spaces with two openings, each opening needs minimum 1 sq. in. per 4000 BTU/h of total input.",
    csaReference: "CSA B149.1-25, Table 8.1 - Combustion air sizing"
  },
  {
    id: 14006,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "basic",
    question: "What defines a 'confined space' for combustion air purposes?",
    options: ["Any room", "Room volume less than 50 cu. ft. per 1000 BTU/h of appliance input", "Basement only", "Room with no windows"],
    correct: 1,
    reasoning: "A confined space has less than 50 cubic feet of volume per 1000 BTU/h of total appliance input in that space.",
    csaReference: "CSA B149.1-25, Section 3 - Confined space definition"
  },
  {
    id: 14007,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "advanced",
    question: "What is worst-case depressurization testing?",
    options: ["Testing with all doors open", "Testing with all exhausts operating and doors closed to maximize negative pressure", "Testing on the coldest day", "Pressure testing pipes"],
    correct: 1,
    reasoning: "Worst-case testing operates all exhaust fans, dryers, etc. with interior doors closed to create maximum building depressurization.",
    csaReference: "CSA Unit 14 - Combustion safety testing"
  },
  {
    id: 14008,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "basic",
    question: "Why are sealed combustion appliances preferred in tight buildings?",
    options: ["They're cheaper", "They draw combustion air from outside, unaffected by building pressure", "They produce more heat", "They're easier to install"],
    correct: 1,
    reasoning: "Sealed combustion appliances use outdoor air for combustion and are not affected by building pressure or indoor air quality.",
    csaReference: "CSA B149.1-25, Clause 8.3 - Direct vent appliances"
  },
  {
    id: 14009,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "What is makeup air?",
    options: ["Cosmetic ventilation", "Air supplied to replace air exhausted from the building", "Filtered air", "Heated air only"],
    correct: 1,
    reasoning: "Makeup air replaces air removed by exhaust systems, maintaining neutral or positive building pressure.",
    csaReference: "CSA Unit 14 - Makeup air systems"
  },
  {
    id: 14010,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "advanced",
    question: "What pressure differential can cause spillage at an atmospheric draft hood?",
    options: ["Any negative pressure", "-3 to -5 Pascal or greater negative pressure", "Only positive pressure", "Pressure doesn't affect spillage"],
    correct: 1,
    reasoning: "Building depressurization of -3 to -5 Pa or more can overcome natural draft and cause spillage at atmospheric vent systems.",
    csaReference: "CSA Unit 14 - Pressure limits"
  },

  // ========================================
  // UNIT 15 - DOMESTIC APPLIANCES (10 Questions)
  // ========================================
  {
    id: 15001,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "basic",
    question: "What is the most common type of residential gas range ignition?",
    options: ["Standing pilot", "Electronic spark ignition", "Hot surface ignition", "Manual match lighting"],
    correct: 1,
    reasoning: "Modern residential gas ranges typically use electronic spark ignition for both surface burners and oven.",
    csaReference: "CSA Unit 15 - Range ignition systems"
  },
  {
    id: 15002,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "What safety device prevents gas flow to an oven burner if the igniter fails?",
    options: ["Thermostat", "Oven safety valve (flame switch)", "Timer", "Door switch"],
    correct: 1,
    reasoning: "The oven safety valve (flame switch) only opens when the igniter reaches proper temperature, preventing raw gas release.",
    csaReference: "CSA Unit 15 - Oven safety systems"
  },
  {
    id: 15003,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "basic",
    question: "What clearance is required above a gas range without a listed hood?",
    options: ["18 inches", "24 inches", "30 inches", "36 inches"],
    correct: 2,
    reasoning: "A minimum 30-inch clearance is required above a gas range to combustible materials when no listed range hood is installed.",
    csaReference: "CSA B149.1-25, Clause 7.5 - Range installation"
  },
  {
    id: 15004,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "What type of connector is commonly used for gas ranges?",
    options: ["Rigid pipe only", "Approved flexible appliance connector", "Garden hose", "Copper tubing only"],
    correct: 1,
    reasoning: "Approved stainless steel flexible appliance connectors are commonly used for ranges to allow movement for cleaning.",
    csaReference: "CSA B149.1-25, Clause 6.13 - Appliance connectors"
  },
  {
    id: 15005,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "advanced",
    question: "What is the typical resistance of a good gas oven igniter?",
    options: ["0 ohms", "40-90 ohms", "500+ ohms", "Infinite ohms"],
    correct: 1,
    reasoning: "A functioning hot surface oven igniter typically measures 40-90 ohms. Higher resistance indicates a weak or failing igniter.",
    csaReference: "CSA Unit 15 - Igniter testing"
  },
  {
    id: 15006,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "basic",
    question: "What causes a clicking sound but no ignition on a gas range surface burner?",
    options: ["Normal operation", "Wet burner cap, misaligned cap, or clogged ports", "Gas pressure too high", "Too much gas flow"],
    correct: 1,
    reasoning: "Continuous clicking without ignition usually indicates moisture, misalignment, or clogged burner ports preventing ignition.",
    csaReference: "CSA Unit 15 - Troubleshooting"
  },
  {
    id: 15007,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "What is the gas input rating of a typical residential gas dryer?",
    options: ["10,000-15,000 BTU/h", "20,000-25,000 BTU/h", "50,000-75,000 BTU/h", "100,000+ BTU/h"],
    correct: 1,
    reasoning: "Typical residential gas dryers have input ratings of 20,000-25,000 BTU/h.",
    csaReference: "CSA Unit 15 - Dryer specifications"
  },
  {
    id: 15008,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "basic",
    question: "What must be installed with a gas dryer for safe operation?",
    options: ["Nothing special", "Proper exhaust duct to outdoors", "Recirculating filter", "Air conditioning"],
    correct: 1,
    reasoning: "Gas dryers require proper exhaust ducting to outdoors to remove combustion products and moisture.",
    csaReference: "CSA B149.1-25, Clause 7.10 - Dryer venting"
  },
  {
    id: 15009,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "advanced",
    question: "What is the maximum length for a gas dryer exhaust duct?",
    options: ["15 feet", "25 feet (varies with elbows)", "50 feet", "No limit"],
    correct: 1,
    reasoning: "Maximum dryer exhaust length is typically 25 feet, reduced by 5 feet for each 90° elbow and 2.5 feet for each 45° elbow.",
    csaReference: "CSA B149.1-25, Clause 7.10 - Dryer exhaust requirements"
  },
  {
    id: 15010,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "What ignition system do most modern gas dryers use?",
    options: ["Standing pilot", "Hot surface igniter with flame sensor", "Electronic spark", "Manual lighting"],
    correct: 1,
    reasoning: "Modern gas dryers typically use hot surface igniters with flame sensors for safe, efficient ignition.",
    csaReference: "CSA Unit 15 - Dryer ignition"
  },

  // ========================================
  // UNIT 16 - GAS FIRED REFRIGERATORS (10 Questions)
  // ========================================
  {
    id: 16001,
    unit: 16,
    unitName: "Gas Fired Refrigerators",
    difficulty: "basic",
    question: "What type of refrigeration cycle do gas refrigerators use?",
    options: ["Compression cycle", "Absorption cycle", "Evaporative cooling", "Thermoelectric"],
    correct: 1,
    reasoning: "Gas refrigerators use the absorption refrigeration cycle, using heat instead of a compressor.",
    csaReference: "CSA Unit 16 - Absorption refrigeration"
  },
  {
    id: 16002,
    unit: 16,
    unitName: "Gas Fired Refrigerators",
    difficulty: "intermediate",
    question: "What are the three main chemicals in an absorption refrigeration system?",
    options: ["Freon, oil, water", "Ammonia, water, hydrogen", "Propane, air, nitrogen", "CO2, water, alcohol"],
    correct: 1,
    reasoning: "Absorption systems use ammonia (refrigerant), water (absorbent), and hydrogen (to equalize pressure).",
    csaReference: "CSA Unit 16 - System chemistry"
  },
  {
    id: 16003,
    unit: 16,
    unitName: "Gas Fired Refrigerators",
    difficulty: "advanced",
    question: "What happens in the generator (boiler) of an absorption refrigerator?",
    options: ["Ammonia condenses", "Heat separates ammonia from water solution", "Hydrogen is added", "Cooling occurs"],
    correct: 1,
    reasoning: "In the generator, heat from the gas burner boils off ammonia vapor from the ammonia-water solution.",
    csaReference: "CSA Unit 16 - Absorption cycle components"
  },
  {
    id: 16004,
    unit: 16,
    unitName: "Gas Fired Refrigerators",
    difficulty: "basic",
    question: "Why must gas refrigerators be level?",
    options: ["For appearance", "The absorption cycle requires gravity flow of liquids", "Door alignment", "No reason"],
    correct: 1,
    reasoning: "Absorption refrigerators rely on gravity for liquid circulation. Being out of level disrupts the cycle and can cause damage.",
    csaReference: "CSA Unit 16 - Installation requirements"
  },
  {
    id: 16005,
    unit: 16,
    unitName: "Gas Fired Refrigerators",
    difficulty: "intermediate",
    question: "What indicates a problem with the absorption cycle (not the burner)?",
    options: ["No flame", "Refrigerator doesn't cool even with proper flame", "Gas smell", "Pilot won't light"],
    correct: 1,
    reasoning: "If the burner operates normally but cooling doesn't occur, the absorption cycle itself has failed (blockage, leak, etc.).",
    csaReference: "CSA Unit 16 - Troubleshooting"
  },
  {
    id: 16006,
    unit: 16,
    unitName: "Gas Fired Refrigerators",
    difficulty: "basic",
    question: "What type of venting do gas refrigerators require?",
    options: ["No venting needed", "Proper ventilation for combustion products", "Only outdoor installation", "Same as gas dryer"],
    correct: 1,
    reasoning: "Gas refrigerators need proper ventilation to remove combustion products. Many use a flue/chimney system built into the unit.",
    csaReference: "CSA B149.1-25, Clause 7.14 - Refrigerator venting"
  },
  {
    id: 16007,
    unit: 16,
    unitName: "Gas Fired Refrigerators",
    difficulty: "advanced",
    question: "What is the typical gas input for a full-size gas refrigerator?",
    options: ["500-1000 BTU/h", "2000-5000 BTU/h", "10,000-15,000 BTU/h", "25,000+ BTU/h"],
    correct: 1,
    reasoning: "Gas refrigerators typically use 2000-5000 BTU/h, much less than heating appliances but operating continuously.",
    csaReference: "CSA Unit 16 - Refrigerator specifications"
  },
  {
    id: 16008,
    unit: 16,
    unitName: "Gas Fired Refrigerators",
    difficulty: "intermediate",
    question: "Where is cooling produced in an absorption refrigerator?",
    options: ["In the generator", "In the evaporator where ammonia evaporates", "In the condenser", "In the absorber"],
    correct: 1,
    reasoning: "Cooling occurs in the evaporator where liquid ammonia evaporates, absorbing heat from the refrigerator interior.",
    csaReference: "CSA Unit 16 - Refrigeration cycle"
  },

  // ========================================
  // UNIT 17 - CONVERSION BURNERS (10 Questions)
  // ========================================
  {
    id: 17001,
    unit: 17,
    unitName: "Conversion Burners",
    difficulty: "basic",
    question: "What is a conversion burner?",
    options: ["A standard furnace burner", "A gas burner designed to replace oil burners in existing equipment", "An outdoor burner", "A pilot burner"],
    correct: 1,
    reasoning: "Conversion burners are designed to replace oil burners in existing boilers or furnaces, converting them to gas operation.",
    csaReference: "CSA B149.1-25, Clause 7.15 - Conversion burners"
  },
  {
    id: 17002,
    unit: 17,
    unitName: "Conversion Burners",
    difficulty: "intermediate",
    question: "What must be verified before installing a conversion burner?",
    options: ["Color of existing equipment", "Existing equipment approval for conversion and structural integrity", "Age only", "Brand name"],
    correct: 1,
    reasoning: "The existing equipment must be listed/approved for conversion and structurally sound before installing a conversion burner.",
    csaReference: "CSA B149.1-25, Clause 7.15 - Conversion requirements"
  },
  {
    id: 17003,
    unit: 17,
    unitName: "Conversion Burners",
    difficulty: "advanced",
    question: "What combustion air adjustment is critical for conversion burners?",
    options: ["Maximum air always", "Air-fuel ratio adjusted per manufacturer specs for clean combustion", "Minimum air always", "No adjustment needed"],
    correct: 1,
    reasoning: "Proper air-fuel ratio adjustment is critical for clean combustion and efficient operation per manufacturer specifications.",
    csaReference: "CSA Unit 17 - Burner adjustment"
  },
  {
    id: 17004,
    unit: 17,
    unitName: "Conversion Burners",
    difficulty: "basic",
    question: "What type of gas conversion burner is most common?",
    options: ["Infrared", "Power (forced draft) burner", "Atmospheric", "Catalytic"],
    correct: 1,
    reasoning: "Power burners (forced draft) are most common for conversions as they provide controlled combustion air supply.",
    csaReference: "CSA Unit 17 - Burner types"
  },
  {
    id: 17005,
    unit: 17,
    unitName: "Conversion Burners",
    difficulty: "intermediate",
    question: "What safety controls are required on conversion burners?",
    options: ["None", "Flame safeguard, high limit, and low water cutoff (for boilers)", "Only a thermostat", "Manual reset only"],
    correct: 1,
    reasoning: "Conversion burners require flame safeguard controls, high limit switches, and low water cutoff for boiler applications.",
    csaReference: "CSA B149.1-25, Clause 7.15 - Safety requirements"
  },
  {
    id: 17006,
    unit: 17,
    unitName: "Conversion Burners",
    difficulty: "basic",
    question: "What venting modification is typically needed when converting from oil to gas?",
    options: ["No changes", "May require liner or resizing due to different flue gas characteristics", "Remove the chimney", "Add a fan always"],
    correct: 1,
    reasoning: "Gas produces cooler, wetter flue gases than oil, often requiring chimney liner installation or size adjustment.",
    csaReference: "CSA B149.1-25, Clause 8.10 - Conversion venting"
  },
  {
    id: 17007,
    unit: 17,
    unitName: "Conversion Burners",
    difficulty: "advanced",
    question: "What is the firing rate consideration for oil-to-gas conversion?",
    options: ["Always increase input", "Match or reduce input to equipment capacity and heat exchanger design", "Double the input", "No consideration needed"],
    correct: 1,
    reasoning: "Input rating must match equipment heat exchanger capacity. Over-firing can damage equipment designed for lower oil inputs.",
    csaReference: "CSA Unit 17 - Sizing considerations"
  },
  {
    id: 17008,
    unit: 17,
    unitName: "Conversion Burners",
    difficulty: "intermediate",
    question: "What documentation is required after a conversion burner installation?",
    options: ["None", "Appliance label, combustion test results, and permit documentation", "Verbal notification only", "Just the receipt"],
    correct: 1,
    reasoning: "Conversion installations require proper labeling, documented combustion testing, and permits per jurisdiction requirements.",
    csaReference: "CSA B149.1-25, Clause 7.15 - Documentation"
  },

  // ========================================
  // UNIT 18 - WATER HEATERS (15 Questions)
  // ========================================
  {
    id: 18001,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "basic",
    question: "What is the purpose of a T&P (Temperature and Pressure) relief valve?",
    options: ["Regulate water pressure", "Prevent tank explosion by releasing if temperature or pressure is too high", "Control water temperature", "Filter water"],
    correct: 1,
    reasoning: "The T&P valve is a critical safety device that releases water if temperature exceeds 210°F or pressure exceeds 150 psi.",
    csaReference: "CSA B149.1-25, Clause 7.16 - Water heater safety"
  },
  {
    id: 18002,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "basic",
    question: "Where must the T&P relief valve discharge line terminate?",
    options: ["Into a drain", "To floor level or outdoors, visible and unthreaded", "Back into the tank", "Into the wall"],
    correct: 1,
    reasoning: "The discharge line must terminate where discharge is visible, near the floor or outdoors, with no threads on the end.",
    csaReference: "CSA B149.1-25, Clause 7.16 - Relief valve discharge"
  },
  {
    id: 18003,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What is FVIR technology in water heaters?",
    options: ["Flow Volume Indicator Rating", "Flammable Vapor Ignition Resistant - design to prevent vapor ignition", "Fast Valve Ignition Response", "Furnace Venting Integration Requirement"],
    correct: 1,
    reasoning: "FVIR (Flammable Vapor Ignition Resistant) water heaters are designed to prevent ignition of flammable vapors near the unit.",
    csaReference: "CSA B149.1-25, Clause 7.16 - FVIR requirements"
  },
  {
    id: 18004,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What is the typical thermostat setpoint for domestic water heaters?",
    options: ["100°F (38°C)", "120°F (49°C)", "160°F (71°C)", "180°F (82°C)"],
    correct: 1,
    reasoning: "120°F (49°C) is the recommended setpoint - hot enough for domestic use while minimizing scalding risk and energy waste.",
    csaReference: "CSA Unit 18 - Water heater settings"
  },
  {
    id: 18005,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "basic",
    question: "What is the function of an anode rod in a water heater?",
    options: ["Heat the water", "Protect the tank from corrosion by sacrificial action", "Control temperature", "Regulate pressure"],
    correct: 1,
    reasoning: "The anode rod sacrificially corrodes instead of the tank, extending tank life. It should be inspected/replaced periodically.",
    csaReference: "CSA Unit 18 - Water heater components"
  },
  {
    id: 18006,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "advanced",
    question: "What is a tankless (on-demand) water heater's main advantage?",
    options: ["Lower cost", "Heats water only when needed - no standby losses", "Larger capacity", "Simpler installation"],
    correct: 1,
    reasoning: "Tankless water heaters heat water only on demand, eliminating standby heat losses associated with storage tanks.",
    csaReference: "CSA Unit 18 - Tankless water heaters"
  },
  {
    id: 18007,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What minimum clearance is required above a water heater for service access?",
    options: ["6 inches", "12 inches", "18 inches (varies by jurisdiction)", "No requirement"],
    correct: 2,
    reasoning: "Typically 18 inches minimum above the water heater for service access, though local codes may vary.",
    csaReference: "CSA B149.1-25, Clause 7.16 - Installation clearances"
  },
  {
    id: 18008,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "basic",
    question: "What causes 'stacking' in a water heater?",
    options: ["Sediment buildup", "Repeated short draws causing stratified hot water at top, false satisfaction", "Too much pressure", "Incorrect venting"],
    correct: 1,
    reasoning: "Stacking occurs when short draws cause layered hot water at top, satisfying the thermostat while lower water is cold.",
    csaReference: "CSA Unit 18 - Water heater operation"
  },
  {
    id: 18009,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "advanced",
    question: "What is a combination (combi) system?",
    options: ["Two water heaters", "Single unit providing both space heating and domestic hot water", "Dual fuel system", "Solar with gas backup"],
    correct: 1,
    reasoning: "Combination systems use one high-efficiency unit to provide both space heating and domestic hot water.",
    csaReference: "CSA Unit 18 - Combination systems"
  },
  {
    id: 18010,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What is the typical input rating range for residential tank water heaters?",
    options: ["10,000-20,000 BTU/h", "30,000-50,000 BTU/h", "75,000-100,000 BTU/h", "150,000+ BTU/h"],
    correct: 1,
    reasoning: "Typical residential gas water heaters have input ratings of 30,000-50,000 BTU/h.",
    csaReference: "CSA Unit 18 - Water heater sizing"
  },
  {
    id: 18011,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "basic",
    question: "What causes rumbling or popping sounds in a water heater?",
    options: ["Normal operation", "Sediment buildup on bottom causing steam bubbles", "Gas leak", "High pressure"],
    correct: 1,
    reasoning: "Sediment on the tank bottom traps water that flashes to steam, causing rumbling or popping sounds during heating.",
    csaReference: "CSA Unit 18 - Troubleshooting"
  },
  {
    id: 18012,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "advanced",
    question: "What venting category are most power-vented water heaters?",
    options: ["Category I", "Category III", "Category IV", "No category"],
    correct: 1,
    reasoning: "Most power-vented water heaters are Category III - positive vent pressure with non-condensing flue gases.",
    csaReference: "CSA B149.1-25, Section 8 - Venting categories"
  },
  {
    id: 18013,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What is the purpose of a dip tube in a water heater?",
    options: ["Drain the tank", "Direct cold water to bottom of tank for proper stratification", "Vent gases", "Support the anode"],
    correct: 1,
    reasoning: "The dip tube directs incoming cold water to the tank bottom, maintaining hot water stratification at the top for use.",
    csaReference: "CSA Unit 18 - Water heater components"
  },
  {
    id: 18014,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "basic",
    question: "What is first hour rating (FHR)?",
    options: ["Installation time", "Gallons of hot water available in the first hour of use", "Recovery time", "Efficiency rating"],
    correct: 1,
    reasoning: "First hour rating indicates how many gallons of hot water the heater can deliver in the first hour starting fully heated.",
    csaReference: "CSA Unit 18 - Water heater performance"
  },
  {
    id: 18015,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "advanced",
    question: "What is thermal expansion and how is it addressed?",
    options: ["Not a concern", "Water volume increase when heated - requires expansion tank in closed systems", "Gas expansion", "Pipe expansion only"],
    correct: 1,
    reasoning: "Heated water expands. In closed systems (with check valves), an expansion tank is required to absorb this volume increase.",
    csaReference: "CSA Unit 18 - Thermal expansion"
  },

  // ========================================
  // UNIT 19 - FORCED WARM AIR HEATING (15 Questions)
  // ========================================
  {
    id: 19001,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "basic",
    question: "What is the function of the heat exchanger in a gas furnace?",
    options: ["Mix gas and air", "Transfer heat from combustion gases to circulating air without mixing", "Filter the air", "Control gas flow"],
    correct: 1,
    reasoning: "The heat exchanger transfers heat from combustion products to the circulating air while keeping them completely separated.",
    csaReference: "CSA Unit 19 - Furnace components"
  },
  {
    id: 19002,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "What is the AFUE of a standard efficiency furnace?",
    options: ["70-80%", "80-89%", "90-95%", "96%+"],
    correct: 1,
    reasoning: "Standard efficiency furnaces have AFUE ratings of 80-89%. Below 80% is low efficiency; 90%+ is high efficiency.",
    csaReference: "CSA Unit 19 - Furnace efficiency"
  },
  {
    id: 19003,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "basic",
    question: "What distinguishes a condensing furnace from a standard furnace?",
    options: ["Color", "Extracts additional heat by condensing flue gas moisture - 90%+ efficiency", "Uses more gas", "No blower"],
    correct: 1,
    reasoning: "Condensing furnaces extract latent heat by cooling flue gases enough to condense water vapor, achieving 90%+ AFUE.",
    csaReference: "CSA Unit 19 - Condensing furnaces"
  },
  {
    id: 19004,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "What must be done with condensate from a high-efficiency furnace?",
    options: ["Let it evaporate", "Properly drain to approved location (floor drain, pump, etc.)", "Collect in bucket", "Return to furnace"],
    correct: 1,
    reasoning: "Condensate must be properly drained to a floor drain, condensate pump, or other approved disposal method.",
    csaReference: "CSA B149.1-25, Clause 8.20 - Condensate disposal"
  },
  {
    id: 19005,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "advanced",
    question: "What type of heat exchanger is used in condensing furnaces?",
    options: ["Single steel", "Primary and secondary (often stainless steel secondary)", "Cast iron only", "Copper only"],
    correct: 1,
    reasoning: "Condensing furnaces use primary and secondary heat exchangers; the secondary is often stainless steel to resist acidic condensate.",
    csaReference: "CSA Unit 19 - Condensing heat exchanger"
  },
  {
    id: 19006,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "basic",
    question: "What is the typical temperature rise across a gas furnace?",
    options: ["20-30°F", "35-65°F (check rating plate)", "80-100°F", "Over 100°F"],
    correct: 1,
    reasoning: "Typical temperature rise is 35-65°F. The specific range is listed on the furnace rating plate.",
    csaReference: "CSA Unit 19 - Temperature rise"
  },
  {
    id: 19007,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "What indicates a cracked heat exchanger?",
    options: ["Normal operation", "Visible cracks, elevated CO, flame disturbance when blower starts, soot", "Loud blower", "Low gas pressure"],
    correct: 1,
    reasoning: "Cracked heat exchangers may show visible damage, elevated CO levels, flame disturbance with blower operation, or soot.",
    csaReference: "CSA Unit 19 - Heat exchanger inspection"
  },
  {
    id: 19008,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "basic",
    question: "What is the purpose of the inducer motor on a furnace?",
    options: ["Circulate room air", "Provide combustion air and remove flue gases before and during burner operation", "Heat the air", "Control gas flow"],
    correct: 1,
    reasoning: "The inducer creates draft for combustion, pulling air through the heat exchanger and pushing flue gases out the vent.",
    csaReference: "CSA Unit 19 - Inducer function"
  },
  {
    id: 19009,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "advanced",
    question: "What is a modulating furnace?",
    options: ["Two-speed only", "Furnace that continuously adjusts firing rate to match heating demand", "Single-stage with timer", "Gravity furnace"],
    correct: 1,
    reasoning: "Modulating furnaces continuously adjust their firing rate (often 40-100%) to precisely match heating load for comfort and efficiency.",
    csaReference: "CSA Unit 19 - Modulating systems"
  },
  {
    id: 19010,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "What venting material is required for Category IV furnaces?",
    options: ["Type B vent", "Single-wall metal", "PVC, CPVC, or approved plastic vent (per manufacturer)", "Masonry chimney only"],
    correct: 2,
    reasoning: "Category IV furnaces require special venting - typically PVC, CPVC, or stainless steel - per manufacturer specifications.",
    csaReference: "CSA B149.1-25, Clause 8.18 - Category IV venting"
  },
  {
    id: 19011,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "basic",
    question: "What is the function of the blower motor in a furnace?",
    options: ["Burn gas", "Circulate air through the duct system", "Ignite the burner", "Regulate pressure"],
    correct: 1,
    reasoning: "The blower motor circulates air through the heat exchanger and duct system to distribute heat throughout the building.",
    csaReference: "CSA Unit 19 - Blower operation"
  },
  {
    id: 19012,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "What causes short cycling in a furnace?",
    options: ["Normal operation", "Oversized unit, blocked filter, limit tripping, thermostat issues", "Undersized unit", "Too much gas"],
    correct: 1,
    reasoning: "Short cycling can be caused by oversized equipment, airflow restrictions, limit switch problems, or thermostat issues.",
    csaReference: "CSA Unit 19 - Troubleshooting"
  },
  {
    id: 19013,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "advanced",
    question: "What is static pressure in a duct system?",
    options: ["Weight of the ducts", "Pressure exerted equally in all directions within the duct - measures system resistance", "Air velocity", "Temperature"],
    correct: 1,
    reasoning: "Static pressure (measured in inches w.c.) indicates duct system resistance and is critical for proper airflow.",
    csaReference: "CSA Unit 19 - Airflow measurement"
  },
  {
    id: 19014,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "basic",
    question: "What is the purpose of a furnace filter?",
    options: ["Increase efficiency", "Remove particulates from circulating air, protect equipment", "Heat the air", "Control humidity"],
    correct: 1,
    reasoning: "Filters remove dust and particulates from circulating air, protecting equipment and improving indoor air quality.",
    csaReference: "CSA Unit 19 - Air filtration"
  },
  {
    id: 19015,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "What is the typical sequence of operation for a modern furnace?",
    options: ["Blower → Burner → Off", "Thermostat → Inducer → Ignition → Flame proof → Main valve → Blower delay → Heat", "Random", "Burner only"],
    correct: 1,
    reasoning: "Modern sequence: thermostat call → inducer proves → ignition → flame sensed → main gas → blower starts after delay.",
    csaReference: "CSA Unit 19 - Furnace sequence"
  },

  // ========================================
  // UNIT 20 - HYDRONIC HEATING (10 Questions)
  // ========================================
  {
    id: 20001,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "basic",
    question: "What is a hydronic heating system?",
    options: ["Forced air system", "System that uses water to transfer heat", "Electric baseboard", "Steam only"],
    correct: 1,
    reasoning: "Hydronic systems use water (or water/glycol mix) as the heat transfer medium, circulating through pipes to radiators or radiant tubing.",
    csaReference: "CSA Unit 20 - Hydronic basics"
  },
  {
    id: 20002,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "intermediate",
    question: "What safety device prevents boiler operation without adequate water?",
    options: ["Thermostat", "Low water cutoff", "High limit", "Pressure regulator"],
    correct: 1,
    reasoning: "The low water cutoff shuts down the burner if water level drops too low, preventing dry-fire damage.",
    csaReference: "CSA B149.1-25, Clause 7.18 - Boiler safety controls"
  },
  {
    id: 20003,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "basic",
    question: "What is the function of an expansion tank in a hydronic system?",
    options: ["Heat water", "Absorb water expansion as it heats to maintain proper pressure", "Filter water", "Pump water"],
    correct: 1,
    reasoning: "The expansion tank absorbs the increased volume of water as it heats, preventing excessive pressure buildup.",
    csaReference: "CSA Unit 20 - System components"
  },
  {
    id: 20004,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "intermediate",
    question: "What is the typical operating pressure for a residential hot water boiler?",
    options: ["5-10 psi", "12-18 psi", "30-40 psi", "50+ psi"],
    correct: 1,
    reasoning: "Residential hot water boilers typically operate at 12-18 psi, with a maximum of 30 psi relief setting.",
    csaReference: "CSA Unit 20 - Operating pressures"
  },
  {
    id: 20005,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "advanced",
    question: "What is the purpose of a mixing valve in radiant floor heating?",
    options: ["Increase temperature", "Lower supply water temperature for radiant floors (typically 80-120°F)", "Filter water", "Increase pressure"],
    correct: 1,
    reasoning: "Mixing valves reduce boiler water temperature to safe levels for radiant floor systems, typically 80-120°F.",
    csaReference: "CSA Unit 20 - Radiant systems"
  },
  {
    id: 20006,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "basic",
    question: "What circulates water in most modern hydronic systems?",
    options: ["Gravity", "Circulator pump", "Expansion tank", "Thermostat"],
    correct: 1,
    reasoning: "Modern hydronic systems use circulator pumps to move water through the piping and heat emitters.",
    csaReference: "CSA Unit 20 - System operation"
  },
  {
    id: 20007,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "intermediate",
    question: "What is the typical high limit setting for a hot water boiler?",
    options: ["140°F", "180-200°F", "220°F", "250°F"],
    correct: 1,
    reasoning: "Typical high limit setting is 180-200°F for hot water boilers. The relief valve is set at 30 psi.",
    csaReference: "CSA Unit 20 - Boiler controls"
  },
  {
    id: 20008,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "advanced",
    question: "What is outdoor reset control?",
    options: ["Outdoor thermostat", "Control that adjusts boiler water temperature based on outdoor temperature", "Emergency shutoff", "Freeze protection"],
    correct: 1,
    reasoning: "Outdoor reset lowers boiler water temperature as outdoor temperature rises, improving efficiency and comfort.",
    csaReference: "CSA Unit 20 - Advanced controls"
  },
  {
    id: 20009,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "basic",
    question: "What is a common cause of no heat in a hydronic zone?",
    options: ["Boiler working fine means zones work", "Zone valve stuck closed or circulator not running", "Too much water", "Filter clogged"],
    correct: 1,
    reasoning: "Common causes include stuck zone valves, failed zone actuators, or circulator pump issues.",
    csaReference: "CSA Unit 20 - Troubleshooting"
  },
  {
    id: 20010,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "intermediate",
    question: "Why is air removal important in hydronic systems?",
    options: ["Increases efficiency", "Air causes noise, corrosion, and blocks circulation", "Not important", "Improves water quality"],
    correct: 1,
    reasoning: "Air in the system causes noise, promotes corrosion, and can block water circulation through air-bound sections.",
    csaReference: "CSA Unit 20 - Air elimination"
  },

  // ========================================
  // UNIT 21 - SPACE HEATERS AND FIREPLACES (10 Questions)
  // ========================================
  {
    id: 21001,
    unit: 21,
    unitName: "Space Heaters and Fireplaces",
    difficulty: "basic",
    question: "What is a direct vent gas fireplace?",
    options: ["Uses room air", "Sealed system using outdoor air for combustion, venting directly outside", "Unvented unit", "B-vent appliance"],
    correct: 1,
    reasoning: "Direct vent units are sealed combustion - they draw combustion air from outside and exhaust directly outside through coaxial venting.",
    csaReference: "CSA B149.1-25, Clause 7.20 - Direct vent appliances"
  },
  {
    id: 21002,
    unit: 21,
    unitName: "Space Heaters and Fireplaces",
    difficulty: "intermediate",
    question: "What is a vent-free (ventless) gas appliance?",
    options: ["Category IV appliance", "Appliance designed to operate without a vent system in the room", "Direct vent unit", "Power vented unit"],
    correct: 1,
    reasoning: "Vent-free appliances are designed to operate without external venting, with combustion products released into the room.",
    csaReference: "CSA B149.1-25, Clause 7.21 - Vent-free appliances"
  },
  {
    id: 21003,
    unit: 21,
    unitName: "Space Heaters and Fireplaces",
    difficulty: "advanced",
    question: "What safety feature is required on vent-free gas appliances?",
    options: ["Nothing special", "Oxygen Depletion Sensor (ODS) pilot", "Only a thermocouple", "High limit only"],
    correct: 1,
    reasoning: "Vent-free appliances require an Oxygen Depletion Sensor (ODS) that shuts off the appliance if oxygen levels drop too low.",
    csaReference: "CSA B149.1-25, Clause 7.21 - ODS requirement"
  },
  {
    id: 21004,
    unit: 21,
    unitName: "Space Heaters and Fireplaces",
    difficulty: "basic",
    question: "What is the maximum input rating typically allowed for vent-free heaters per room?",
    options: ["10,000 BTU/h", "20,000 BTU/h", "40,000 BTU/h (varies by jurisdiction)", "No limit"],
    correct: 2,
    reasoning: "Most jurisdictions limit vent-free heaters to 40,000 BTU/h maximum, with some having lower limits or banning them entirely.",
    csaReference: "CSA B149.1-25, Clause 7.21 - Vent-free limitations"
  },
  {
    id: 21005,
    unit: 21,
    unitName: "Space Heaters and Fireplaces",
    difficulty: "intermediate",
    question: "What clearance is required around a freestanding gas stove?",
    options: ["No clearance needed", "Per manufacturer's listing and CSA code minimums", "Always 36 inches", "Only 6 inches"],
    correct: 1,
    reasoning: "Clearances to combustibles are specified by the manufacturer's listing and must meet CSA code minimum requirements.",
    csaReference: "CSA B149.1-25, Clause 7.20 - Installation clearances"
  },
  {
    id: 21006,
    unit: 21,
    unitName: "Space Heaters and Fireplaces",
    difficulty: "basic",
    question: "What type of gas logs require venting?",
    options: ["All types", "Vented gas log sets (decorative or heater-rated)", "None require venting", "Only propane logs"],
    correct: 1,
    reasoning: "Vented gas log sets must be installed in a properly functioning, vented fireplace or approved venting system.",
    csaReference: "CSA B149.1-25, Clause 7.22 - Gas log requirements"
  },
  {
    id: 21007,
    unit: 21,
    unitName: "Space Heaters and Fireplaces",
    difficulty: "advanced",
    question: "What is the damper requirement for vented gas log installations?",
    options: ["Must be fully closed", "Must have a damper clamp preventing full closure", "No damper needed", "Damper removed entirely"],
    correct: 1,
    reasoning: "Vented gas logs require a damper clamp or stop to ensure the damper cannot be fully closed while the logs are in use.",
    csaReference: "CSA B149.1-25, Clause 7.22 - Damper requirements"
  },
  {
    id: 21008,
    unit: 21,
    unitName: "Space Heaters and Fireplaces",
    difficulty: "intermediate",
    question: "What is a gas fireplace insert?",
    options: ["A new fireplace", "A sealed gas appliance installed into an existing masonry fireplace", "Outdoor unit", "Log lighter"],
    correct: 1,
    reasoning: "Gas fireplace inserts are sealed combustion units designed to be installed into existing masonry fireplaces.",
    csaReference: "CSA B149.1-25, Clause 7.20 - Fireplace inserts"
  },
  {
    id: 21009,
    unit: 21,
    unitName: "Space Heaters and Fireplaces",
    difficulty: "basic",
    question: "What type of wall heater has visible glowing elements?",
    options: ["Blue flame heater", "Infrared (radiant) heater", "Catalytic heater", "Condensing heater"],
    correct: 1,
    reasoning: "Infrared (radiant) heaters have visible glowing ceramic or steel elements that radiate heat directly to objects and people.",
    csaReference: "CSA Unit 21 - Heater types"
  },
  {
    id: 21010,
    unit: 21,
    unitName: "Space Heaters and Fireplaces",
    difficulty: "intermediate",
    question: "What is a log lighter?",
    options: ["A match", "Gas burner installed in a wood-burning fireplace to help start wood fires", "Gas log set", "Pilot light"],
    correct: 1,
    reasoning: "A log lighter is a small gas burner installed in a wood-burning fireplace solely to assist in starting wood fires.",
    csaReference: "CSA B149.1-25, Clause 7.23 - Log lighters"
  },

  // ========================================
  // UNIT 22 - VENTING SYSTEMS (15 Questions)
  // ========================================
  {
    id: 22001,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "basic",
    question: "What is the purpose of a venting system?",
    options: ["Supply gas", "Safely remove combustion products (flue gases) to the outdoors", "Provide combustion air", "Heat the building"],
    correct: 1,
    reasoning: "Venting systems remove combustion products (CO2, CO, water vapor, NOx) safely to the outdoors.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 22002,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "basic",
    question: "What is Type B vent used for?",
    options: ["High-efficiency furnaces", "Category I gas appliances with draft hoods or fan-assisted combustion", "Oil appliances", "Direct vent only"],
    correct: 1,
    reasoning: "Type B vent is double-wall metal vent used for Category I natural draft and fan-assisted gas appliances.",
    csaReference: "CSA B149.1-25, Clause 8.5 - Type B vent"
  },
  {
    id: 22003,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What are the four appliance venting categories?",
    options: ["A, B, C, D", "I, II, III, IV based on pressure and condensing characteristics", "Low, Medium, High, Ultra", "1-4 by efficiency"],
    correct: 1,
    reasoning: "Categories I-IV are based on vent pressure (negative/positive) and flue gas temperature (condensing/non-condensing).",
    csaReference: "CSA B149.1-25, Section 8 - Venting categories"
  },
  {
    id: 22004,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What is Category I venting?",
    options: ["Positive pressure, condensing", "Negative pressure, non-condensing (natural or fan-assisted draft)", "Positive pressure, non-condensing", "Negative pressure, condensing"],
    correct: 1,
    reasoning: "Category I: negative vent pressure (natural or induced draft) with non-condensing flue gases above dewpoint.",
    csaReference: "CSA B149.1-25, Section 8 - Category I"
  },
  {
    id: 22005,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "advanced",
    question: "What is Category IV venting?",
    options: ["Natural draft", "Positive vent pressure with condensing flue gases", "Negative pressure, non-condensing", "B-vent only"],
    correct: 1,
    reasoning: "Category IV: positive vent pressure with condensing flue gases - requires special vent materials (PVC, CPVC, stainless).",
    csaReference: "CSA B149.1-25, Section 8 - Category IV"
  },
  {
    id: 22006,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "basic",
    question: "What is the minimum height for a vent termination above a roof?",
    options: ["6 inches", "12 inches (varies by type and roof pitch)", "24 inches", "36 inches"],
    correct: 1,
    reasoning: "Minimum is typically 12 inches above the roof surface, but increases with roof pitch per code tables.",
    csaReference: "CSA B149.1-25, Clause 8.14 - Vent termination height"
  },
  {
    id: 22007,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What causes condensation in a vent system?",
    options: ["Normal in all systems", "Flue gases cooling below dewpoint (around 130°F for natural gas)", "Gas pressure too high", "Too much draft"],
    correct: 1,
    reasoning: "Condensation occurs when flue gases cool below their dewpoint (approximately 130°F for natural gas), typically in oversized or cold vents.",
    csaReference: "CSA Unit 22 - Condensation issues"
  },
  {
    id: 22008,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "advanced",
    question: "What is the common venting rule for combining appliances?",
    options: ["Any appliances can combine", "Only Category I appliances can share a common vent, with specific sizing rules", "Never combine vents", "Only same-brand appliances"],
    correct: 1,
    reasoning: "Only Category I appliances can share common vents, with connector and common vent sized per code tables.",
    csaReference: "CSA B149.1-25, Clause 8.11 - Common venting"
  },
  {
    id: 22009,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "basic",
    question: "What is the maximum horizontal run for a natural draft vent connector?",
    options: ["50% of vertical height", "75% of vertical height (generally)", "100% of vertical height", "No limit"],
    correct: 1,
    reasoning: "Horizontal connector runs generally should not exceed 75% of the vertical vent height to maintain proper draft.",
    csaReference: "CSA B149.1-25, Clause 8.7 - Connector runs"
  },
  {
    id: 22010,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What slope is required for a natural draft horizontal vent connector?",
    options: ["Level is okay", "Minimum 1/4 inch per foot upward toward the vent", "1 inch per foot", "Downward slope"],
    correct: 1,
    reasoning: "Horizontal connectors must slope upward at least 1/4 inch per foot toward the vent for proper draft and condensate drainage.",
    csaReference: "CSA B149.1-25, Clause 8.7 - Connector slope"
  },
  {
    id: 22011,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "advanced",
    question: "What is an orphaned water heater?",
    options: ["Disconnected water heater", "Remaining Category I appliance in oversized vent after furnace upgrade", "New water heater", "Tankless unit"],
    correct: 1,
    reasoning: "An orphaned appliance is left in an oversized common vent after a higher-efficiency appliance is installed with separate venting.",
    csaReference: "CSA Unit 22 - Orphaned appliances"
  },
  {
    id: 22012,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "basic",
    question: "What clearance to combustibles is required for single-wall vent connector?",
    options: ["1 inch", "6 inches", "12 inches", "18 inches"],
    correct: 1,
    reasoning: "Single-wall vent connectors require minimum 6 inches clearance to combustibles (more in some applications).",
    csaReference: "CSA B149.1-25, Table 8.2 - Connector clearances"
  },
  {
    id: 22013,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What clearance to combustibles is required for Type B vent?",
    options: ["0 inches (can touch)", "1 inch", "6 inches", "12 inches"],
    correct: 1,
    reasoning: "Type B vent requires minimum 1 inch clearance to combustibles due to its double-wall, air-insulated construction.",
    csaReference: "CSA B149.1-25, Table 8.2 - Vent clearances"
  },
  {
    id: 22014,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "advanced",
    question: "What is the purpose of a vent damper?",
    options: ["Block rain", "Reduce off-cycle heat loss through the vent", "Increase draft", "Filter flue gases"],
    correct: 1,
    reasoning: "Vent dampers close when the appliance is off to reduce standby losses from warm air escaping up the vent.",
    csaReference: "CSA Unit 22 - Energy conservation"
  },
  {
    id: 22015,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "basic",
    question: "What must be installed where a vent passes through a combustible ceiling/floor?",
    options: ["Nothing", "Proper firestop spacer/thimble maintaining required clearance", "Tape", "Insulation"],
    correct: 1,
    reasoning: "A listed firestop spacer or thimble must be installed to maintain required clearance where vents penetrate combustible construction.",
    csaReference: "CSA B149.1-25, Clause 8.9 - Vent support and protection"
  },

  // ========================================
  // UNIT 23 - FORCED AIR ADD-ON DEVICES (10 Questions)
  // ========================================
  {
    id: 23001,
    unit: 23,
    unitName: "Forced Air Add-On Devices",
    difficulty: "basic",
    question: "What is a humidifier's function in an HVAC system?",
    options: ["Remove moisture", "Add moisture to conditioned air", "Filter air", "Cool air"],
    correct: 1,
    reasoning: "Humidifiers add moisture to heated air to maintain comfortable humidity levels, especially in winter.",
    csaReference: "CSA Unit 23 - Humidification"
  },
  {
    id: 23002,
    unit: 23,
    unitName: "Forced Air Add-On Devices",
    difficulty: "intermediate",
    question: "What type of humidifier uses a rotating drum or pad?",
    options: ["Steam humidifier", "Bypass/drum humidifier", "Ultrasonic humidifier", "Atomizing humidifier"],
    correct: 1,
    reasoning: "Bypass (drum or flow-through) humidifiers use a water-soaked pad or drum that supply air passes through.",
    csaReference: "CSA Unit 23 - Humidifier types"
  },
  {
    id: 23003,
    unit: 23,
    unitName: "Forced Air Add-On Devices",
    difficulty: "advanced",
    question: "What is the typical recommended relative humidity for heating season?",
    options: ["10-20%", "30-50%", "60-70%", "80%+"],
    correct: 1,
    reasoning: "30-50% relative humidity is typically recommended for comfort and to prevent condensation on windows.",
    csaReference: "CSA Unit 23 - Humidity control"
  },
  {
    id: 23004,
    unit: 23,
    unitName: "Forced Air Add-On Devices",
    difficulty: "basic",
    question: "What is an electronic air cleaner?",
    options: ["Standard filter", "Device using electric charge to capture particles", "UV light", "Carbon filter"],
    correct: 1,
    reasoning: "Electronic air cleaners use electrical charge (ionization/electrostatic precipitation) to capture airborne particles.",
    csaReference: "CSA Unit 23 - Air filtration"
  },
  {
    id: 23005,
    unit: 23,
    unitName: "Forced Air Add-On Devices",
    difficulty: "intermediate",
    question: "What is the function of a UV germicidal light in HVAC?",
    options: ["Heat air", "Kill or disable microorganisms (bacteria, mold, viruses)", "Humidify air", "Cool air"],
    correct: 1,
    reasoning: "UV-C germicidal lights disinfect air and surfaces by damaging DNA of microorganisms, reducing biological contaminants.",
    csaReference: "CSA Unit 23 - Air quality devices"
  },
  {
    id: 23006,
    unit: 23,
    unitName: "Forced Air Add-On Devices",
    difficulty: "basic",
    question: "What is an HRV (Heat Recovery Ventilator)?",
    options: ["High-efficiency furnace", "Device exchanging heat between exhaust and fresh air streams", "Humidifier", "Air conditioner"],
    correct: 1,
    reasoning: "HRVs recover heat from exhaust air to preheat incoming fresh air, providing ventilation with less energy loss.",
    csaReference: "CSA Unit 23 - Heat recovery"
  },
  {
    id: 23007,
    unit: 23,
    unitName: "Forced Air Add-On Devices",
    difficulty: "intermediate",
    question: "What is the difference between an HRV and ERV?",
    options: ["No difference", "ERV also transfers moisture between airstreams", "HRV is more efficient", "ERV is for cooling only"],
    correct: 1,
    reasoning: "ERV (Energy Recovery Ventilator) transfers both heat AND moisture, while HRV transfers only heat.",
    csaReference: "CSA Unit 23 - Ventilation systems"
  },
  {
    id: 23008,
    unit: 23,
    unitName: "Forced Air Add-On Devices",
    difficulty: "advanced",
    question: "What MERV rating indicates high-efficiency filtration?",
    options: ["MERV 1-4", "MERV 5-8", "MERV 13-16", "MERV ratings don't indicate efficiency"],
    correct: 2,
    reasoning: "MERV 13-16 indicates high-efficiency filtration suitable for capturing smaller particles including some bacteria.",
    csaReference: "CSA Unit 23 - Filter ratings"
  },
  {
    id: 23009,
    unit: 23,
    unitName: "Forced Air Add-On Devices",
    difficulty: "basic",
    question: "What is a duct-mounted air conditioning coil called?",
    options: ["Condenser coil", "Evaporator coil (A-coil or slab coil)", "Compressor", "Furnace heat exchanger"],
    correct: 1,
    reasoning: "The evaporator (indoor) coil is mounted in the ductwork, absorbing heat from air passing through it during cooling.",
    csaReference: "CSA Unit 23 - Add-on cooling"
  },
  {
    id: 23010,
    unit: 23,
    unitName: "Forced Air Add-On Devices",
    difficulty: "intermediate",
    question: "What must be considered when adding A/C to a gas furnace system?",
    options: ["Nothing special", "Airflow requirements, coil compatibility, condensate drainage", "Only duct size", "Only thermostat"],
    correct: 1,
    reasoning: "Adding A/C requires proper airflow (400 CFM/ton), compatible coil selection, and proper condensate drain installation.",
    csaReference: "CSA Unit 23 - System integration"
  },

  // ========================================
  // UNIT 24 - AIR HANDLING (10 Questions)
  // ========================================
  {
    id: 24001,
    unit: 24,
    unitName: "Air Handling",
    difficulty: "basic",
    question: "What is the recommended airflow for heating systems in CFM per 10,000 BTU/h?",
    options: ["50-75 CFM", "100-150 CFM", "200-250 CFM", "300+ CFM"],
    correct: 1,
    reasoning: "Typical heating airflow is 100-150 CFM per 10,000 BTU/h input, resulting in proper temperature rise.",
    csaReference: "CSA Unit 24 - Airflow requirements"
  },
  {
    id: 24002,
    unit: 24,
    unitName: "Air Handling",
    difficulty: "intermediate",
    question: "What happens if airflow across a furnace heat exchanger is too low?",
    options: ["Better efficiency", "High temperature rise, limit cycling, potential heat exchanger damage", "Cooler air delivery", "No effect"],
    correct: 1,
    reasoning: "Low airflow causes excessive temperature rise, which can trip the high limit and cause thermal stress on the heat exchanger.",
    csaReference: "CSA Unit 24 - Airflow effects"
  },
  {
    id: 24003,
    unit: 24,
    unitName: "Air Handling",
    difficulty: "basic",
    question: "What is static pressure in a duct system?",
    options: ["Air velocity", "Resistance to airflow, measured in inches water column", "Temperature", "Humidity"],
    correct: 1,
    reasoning: "Static pressure indicates system resistance - the pressure the blower must overcome to move air through the duct system.",
    csaReference: "CSA Unit 24 - Duct system basics"
  },
  {
    id: 24004,
    unit: 24,
    unitName: "Air Handling",
    difficulty: "intermediate",
    question: "What is the typical maximum external static pressure for residential furnaces?",
    options: ["0.2 in. w.c.", "0.5 in. w.c.", "1.0 in. w.c.", "2.0 in. w.c."],
    correct: 1,
    reasoning: "Most residential furnaces are rated for 0.5 inches water column external static pressure maximum.",
    csaReference: "CSA Unit 24 - Equipment ratings"
  },
  {
    id: 24005,
    unit: 24,
    unitName: "Air Handling",
    difficulty: "advanced",
    question: "What causes high static pressure in a duct system?",
    options: ["Oversized ducts", "Undersized ducts, dirty filters, closed dampers, blocked registers", "Too large a blower", "Low airflow"],
    correct: 1,
    reasoning: "High static results from restrictions: undersized ducts, dirty filters, closed dampers, kinked flex duct, or blocked registers.",
    csaReference: "CSA Unit 24 - Troubleshooting"
  },
  {
    id: 24006,
    unit: 24,
    unitName: "Air Handling",
    difficulty: "basic",
    question: "What is the purpose of return air in a forced air system?",
    options: ["Fresh air supply", "Return room air to the furnace for reconditioning", "Exhaust air", "Emergency ventilation"],
    correct: 1,
    reasoning: "Return air brings conditioned space air back to the furnace to be filtered, heated/cooled, and recirculated.",
    csaReference: "CSA Unit 24 - System components"
  },
  {
    id: 24007,
    unit: 24,
    unitName: "Air Handling",
    difficulty: "intermediate",
    question: "What is the rule of thumb for return air sizing?",
    options: ["1 sq. in. per 1 CFM", "1 sq. in. per 2 CFM (2 sq. in. per CFM is also used)", "1 sq. in. per 5 CFM", "No sizing rule exists"],
    correct: 1,
    reasoning: "Return grilles are typically sized at 1 square inch per 2 CFM, or 2 square inches per 1 CFM for quieter operation.",
    csaReference: "CSA Unit 24 - Duct sizing"
  },
  {
    id: 24008,
    unit: 24,
    unitName: "Air Handling",
    difficulty: "advanced",
    question: "What is an ECM blower motor?",
    options: ["Standard induction motor", "Electronically Commutated Motor - variable speed, high efficiency", "Single-speed motor", "Two-speed motor"],
    correct: 1,
    reasoning: "ECM (Electronically Commutated Motors) are brushless DC motors offering variable speed operation and higher efficiency.",
    csaReference: "CSA Unit 24 - Blower technology"
  },
  {
    id: 24009,
    unit: 24,
    unitName: "Air Handling",
    difficulty: "basic",
    question: "What is the function of a supply register?",
    options: ["Return air to furnace", "Deliver conditioned air to the room", "Filter air", "Measure airflow"],
    correct: 1,
    reasoning: "Supply registers deliver conditioned (heated or cooled) air from the duct system into the living spaces.",
    csaReference: "CSA Unit 24 - Distribution"
  },
  {
    id: 24010,
    unit: 24,
    unitName: "Air Handling",
    difficulty: "intermediate",
    question: "What is the effect of operating a furnace without a filter?",
    options: ["Better airflow", "Dirt accumulation on blower, coil, and heat exchanger; reduced efficiency and potential damage", "No effect", "Quieter operation"],
    correct: 1,
    reasoning: "Operating without a filter allows dirt to accumulate on components, reducing efficiency and potentially causing damage.",
    csaReference: "CSA Unit 24 - Maintenance"
  },
  // ========================================
  // UNIT 1 - SAFETY - NEW QUESTIONS (48 Questions)
  // ========================================
  {
    id: 24011,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "Who may refuse to grant the authorization or revoke, suspend, or refuse to renew an authorization, if the authorization holder is in contravention of this Act?",
    options: ["Minister of Consumer and Commercial Relations","TSSA Fuel Safety Director","TSSA Fuel Safety Inspector","Premier of Ontario"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, TSSA Fuel Safety Director is required for proper venting in Safety applications.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24012,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "Who may only use force to enter and inspect a place where there is an immediate threat to public safety and only such force that is reasonably necessary in the circumstances?",
    options: ["Gas Technician 2","TSSA Director","TSSA Inspector","Ministry of Labour Inspector"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, TSSA Inspector is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24013,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "A Notice of Proposal is not required to be provided by TSSA when?",
    options: ["When certification is being suspended due to negligence","When revoking a certification","When suspending a certification due to failure to pay certification fees","When certification is not granted"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, When suspending a certification due to failure to pay certification fees is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24014,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "A Technician not agreeing with a Directors ruling may?",
    options: ["Continue performing duties as a Gas Technician","Appeal to the Director of Fuels Safety at TSSA","Appeal to the Director of TSSA","Appeal to the Ontario Divisional Court"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Appeal to the Ontario Divisional Court is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24015,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "A person might be refused authorization where?",
    options: ["The person is not qualified","The person resides in another Province or Territory","The person resides in another country","The person is qualified in another Province or Territory"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, The person is not qualified is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24016,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "A Safety Order can be given?",
    options: ["In writing only","Orally or in Writing","Only after a hearing has taken place","Only after prior notice has been given"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Orally or in Writing is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24017,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "No person shall remove a seal affixed by an Inspector:",
    options: ["Without consent from the Director of Fuel Safety TSSA","Without the consent of the Distributor","Without the consent of the TSSA Fuel Safety Inspector who affixed the seal","Without consent from your Employer"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Without the consent of the TSSA Fuel Safety Inspector who affixed the seal is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24018,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What is a directive in the context of workplace safety legislation?",
    options: ["Gas Technician Certification Guide","Fuel Safety Manual","Directive focusing on specific safety areas under an act","Employee handbook"],
    correct: 2,
    reasoning: "Directive focusing on specific safety areas under an act is defined in CSA B149.1-25, Clause 4.1 - Safety Requirements as a fundamental principle in Safety.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24019,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What is one primary duty of a gas technician when finding a gas appliance in immediate hazard condition?",
    options: ["Tag the appliance and continue use","Shut off the gas supply and notify the user and distributor","Inform a co-worker and resume work","Wait for inspection approval"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Shut off the gas supply and notify the user and distributor is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24020,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "How soon must a gas technician provide written notice to the distributor about an immediate hazard?",
    options: ["7 days","30 days","Immediately","Within 14 days"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Within 14 days is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24021,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What should be done if an appliance is found in unacceptable condition but not an immediate hazard?",
    options: ["No action is required","Shut off gas and discard appliance","Notify distributor and user with written notice","Call emergency services"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Notify distributor and user with written notice is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24022,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What is one key component of hazard reporting procedures?",
    options: ["Ignore minor hazards","Only report to coworkers","Report hazards within a specific time frame","Keep a personal record for yourself"],
    correct: 2,
    reasoning: "Report hazards within a specific time frame is defined in CSA B149.1-25, Clause 4.1 - Safety Requirements as a fundamental principle in Safety.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24023,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "If a gas technician gives oral notice about a hazard, they must also:",
    options: ["Wait for a written confirmation","Write a notice to the user and distributor","Contact the insurance company","Inform the media"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Write a notice to the user and distributor is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24024,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "When must a gas technician notify the user about a hazardous condition?",
    options: ["At the next scheduled visit","Within 7 days","Immediately, in writing","Only if instructed by employer"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Immediately, in writing is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24025,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "The role of safety regulations under energy or fuel acts includes:",
    options: ["Advertising fuel products","Tracking sales","Ensuring safe installation and operation of gas equipment","Promoting energy drink use"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Ensuring safe installation and operation of gas equipment is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24026,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What system provides vital information about hazardous materials in the workplace?",
    options: ["WHMIS","MSDS","OHSA","GHS"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, WHMIS is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24027,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "WHMIS 2015 aligns with which international system?",
    options: ["ILO Safety Standard","Globally Harmonized System (GHS)","ISO 45001","United Nations Environmental Treaty"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Globally Harmonized System (GHS) is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24028,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What document replaced MSDS under WHMIS 2015?",
    options: ["Hazard Form","Product Information Sheet","Safety Data Sheet (SDS)","GHS Label Sheet"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Safety Data Sheet (SDS) is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24029,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "Under WHMIS 2015, what does the signal word \"Danger\" indicate?",
    options: ["A mild hazard","A cosmetic issue","A more severe hazard","A warning for environmental concerns"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, A more severe hazard is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24030,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What are the two main hazard groups under GHS?",
    options: ["Physical and Health","Mechanical and Electrical","Chemical and Biological","Flammable and Reactive"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Physical and Health is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24031,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What symbol indicates acute toxicity or a serious health hazard?",
    options: ["Flame","Exclamation mark","Skull and crossbones","Gas cylinder"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Skull and crossbones is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24032,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What PPE is recommended for inhalation hazards?",
    options: ["Safety boots","Hearing protection","Respirators","Safety vest"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Respirators is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24033,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What hazard is associated with cutting galvanized pipes?",
    options: ["Heat stroke","Toxic zinc or cadmium fumes","Slips and trips","Electric shock"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Toxic zinc or cadmium fumes is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24034,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What does the biohazard pictogram represent?",
    options: ["Fire","Electrical shock","Infectious materials","Radiation"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Infectious materials is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24035,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What is the most common fire hazard in HVAC work?",
    options: ["Electrical wiring","Water leaks","Broken thermostats","Dirty filters"],
    correct: 0,
    reasoning: "Electrical wiring is defined in CSA B149.1-25, Clause 4.1 - Safety Requirements as a fundamental principle in Safety.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24036,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "Which class of fire extinguisher is used for electrical fires?",
    options: ["Class A","Class B","Class C","Class D"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Class C is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24037,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What type of PPE is critical when soldering or brazing near flammable materials?",
    options: ["Hard hat","Safety sandals","Fire-resistant gloves and eye protection","Ear plugs"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Fire-resistant gloves and eye protection is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24038,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What is the minimum fire extinguisher rating recommended on an HVAC service truck?",
    options: ["1A","2A10BC","5A","10C"],
    correct: 1,
    reasoning: "2A10BC is defined in CSA B149.1-25, Clause 4.1 - Safety Requirements as a fundamental principle in Safety.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24039,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "When using torches, what safety check should be done first?",
    options: ["Temperature setting","Check refrigerant pressure","Inspect hoses and connections for leaks","Weigh the cylinder"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Inspect hoses and connections for leaks is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24040,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "Which standard outlines fire safety procedures for HVAC installations in Canada?",
    options: ["CSA B52","ASME 14.3","UL 508","IEEE 802"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, CSA B52 is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24041,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "In a parallel circuit which of the following remains constant?",
    options: ["Volts","Amps","Ohms","Capacitance"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Volts is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24042,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "How much pressure drop is allowed for a natural gas tubing system (using copper), when using 5 PSI supply pressure?",
    options: ["1 PSI","1.5 PSI","2 PSI","2.5PSI"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Clause 4.1 - Safety Requirements, 1 PSI is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24043,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What are the symptoms of Carbon Monoxide Poisoning?",
    options: ["Fever and chills","Headache, dizziness, fatigue, nausea and death","Skin rash and itching","Blurred vision"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Headache, dizziness, fatigue, nausea and death is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24044,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "How many PPM does it take to start noticing symptoms of carbon monoxide?",
    options: ["100 ppm","200 ppm in a couple hours","300 ppm","400 ppm"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, 200 ppm in a couple hours is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24045,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "Why is a neat, well-groomed appearance important when dealing with a customer?",
    options: ["It indicates to a customer that your work will reflect the same care and consideration","It indicates to a customer that you are a supervisor","It represents the values of the company to the customer"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, It indicates to a customer that your work will reflect the same care and consideration is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24046,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "When installed underground, which type of copper tubing does not require a protective coating?",
    options: ["Type G","Type K","Type GP"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Type K is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24047,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What is the colour code for Type K copper?",
    options: ["Blue","Green","Yellow"],
    correct: 1,
    reasoning: "Green is defined in CSA B149.1-25, Clause 4.1 - Safety Requirements as a fundamental principle in Safety.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24048,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "You cannot use type ________ copper tubing in gas systems, as its wall thickness is slightly less than that of type G tubing.",
    options: ["K","L","M"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, M is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24049,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "May a copper joint be made with brazing material that has a melting temperature exceeding 1000°F (537 °C)?",
    options: ["Yes","No"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Yes is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24050,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What are the minimum test requirements for all wrapped or factory-coated piping?",
    options: ["100 psig and 15 minutes","100 psig and 60 minutes","100 psig and within the time duration required of Table 6.3, Note 2"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, 100 psig and within the time duration required of Table 6.3, Note 2 is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24051,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "The approximate explosive limits of propane gas range from ________ to ________ propane in air.",
    options: ["5% to 15%","2% to 10%","7% to 10%","2% to 15%"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, 2% to 10% is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24052,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What type of burner is not equipped with a mechanical device for supplying combustion air?",
    options: ["Forced-draft burner","Fan-assisted burner","Natural-draft burner"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Natural-draft burner is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24053,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "May a vehicle that is being refuelled with natural gas have its engine running?",
    options: ["Yes, provided it is 25 feet from a building","No"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, No is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24054,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "Which regulation describes the legal requirements of employers and suppliers of hazardous materials?",
    options: ["Occupational Health and Safety Act","Occupational Health and Safety Code","WHMIS 2015","Provincial Safety Authority"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, WHMIS 2015 is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24055,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "What do the letters 'TSSA' stand for?",
    options: ["Technical Safety and Standards Authority","Technical Standards and Safety Association","Technical Standards and Safety Authority","Technical Safety and Standards Association"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Technical Standards and Safety Authority is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24056,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "Does TSSA have regulatory authority over the safety of both natural gas and propane?",
    options: ["Yes","No"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Yes is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24057,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "Is TSSA a part of the government?",
    options: ["Yes","No"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, No is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  {
    id: 24058,
    unit: 1,
    unitName: "Safety",
    difficulty: "intermediate",
    question: "Who does TSSA report to?",
    options: ["Ministry of Government and Consumer Services (MGCS)","Ministry of Energy (ME)","The Attorney General","Their shareholders"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Clause 4.1 - Safety Requirements, Ministry of Government and Consumer Services (MGCS) is the correct requirement in Safety to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 4.1 - Safety Requirements"
  },
  // ========================================
  // UNIT 2 - FASTENERS, TOOLS AND TESTING EQUIPMENT - NEW QUESTIONS (3 Questions)
  // ========================================
  {
    id: 24059,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "intermediate",
    question: "When using a gauge to perform pressure testing of a gas piping system, the gauge shall be:",
    options: ["2\" in diameter, maximum range of shall exceed the test pressure by at least 15% but not more than 300%.","3\" in diameter, maximum range of shall exceed the test pressure by at least 15% but not more than 300%","3\" in diameter, maximum range of test pressure shall not exceed the test pressure by at least 15% but not more than 200%","3\" in diameter, reading in 1 PSI increments."],
    correct: 1,
    reasoning: "Based on CSA Unit 2 - Tools and Equipment, 3\" in diameter, maximum range of shall exceed the test pressure by at least 15% but not more than 300% is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA Unit 2 - Tools and Equipment"
  },
  {
    id: 24060,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "intermediate",
    question: "Suppose an appliance requires a clearance of 24 inches. By how much can the clearance above the appliance be reduced if the surrounding surface is covered with 28 gauge sheet metal, spaced out 1 inch?",
    options: ["3 inches","6 inches","9 inches","12 inches"],
    correct: 2,
    reasoning: "According to CSA Unit 2 - Tools and Equipment, 9 inches is the correct requirement in Fasteners, Tools and Testing Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 2 - Tools and Equipment"
  },
  {
    id: 24061,
    unit: 2,
    unitName: "Fasteners, Tools and Testing Equipment",
    difficulty: "intermediate",
    question: "Suppose an appliance requires a clearance of 24 inches. By how much can the clearance at the sides and rear of the appliance be reduced if the surrounding surface is covered with 28 gauge sheet metal, spaced out 1 inch?",
    options: ["3 inches","6 inches","9 inches","12 inches"],
    correct: 3,
    reasoning: "According to CSA Unit 2 - Tools and Equipment, 12 inches is the correct requirement in Fasteners, Tools and Testing Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 2 - Tools and Equipment"
  },
  // ========================================
  // UNIT 3 - PROPERTIES OF NATURAL GAS AND FUELS SAFE HANDLING - NEW QUESTIONS (33 Questions)
  // ========================================
  {
    id: 24062,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is the specific gravity of Propane?",
    options: ["1.0","0.6","1.52","2.0"],
    correct: 2,
    reasoning: "1.52 is defined in CSA B149.1-25, Section 3 - Gas Properties as a fundamental principle in Properties of Natural Gas and Fuels Safe Handling.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24063,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is the space ratio for converting propane from liquid to gas?",
    options: ["100:1","200:1","270:1","300:1"],
    correct: 2,
    reasoning: "270:1 is defined in CSA B149.1-25, Section 3 - Gas Properties as a fundamental principle in Properties of Natural Gas and Fuels Safe Handling.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24064,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is the recommended method for transporting propane cylinders?",
    options: ["Horizontally","Upright and secured","In the passenger seat","With gasoline"],
    correct: 1,
    reasoning: "Upright and secured is defined in CSA B149.1-25, Section 3 - Gas Properties as a fundamental principle in Properties of Natural Gas and Fuels Safe Handling.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24065,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "Why is an odourant added to natural gas and propane?",
    options: ["To make it flammable","To help detect leaks","For colour coding","To meet taste regulations"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, To help detect leaks is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24066,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "The B149.1 Natural Gas and Propane Installation Code does not apply to:",
    options: ["Industrial gas piping installations","Appliances installed in a commercial building","Propane supply piping from the distributors tank to the second stage regulator","Utility pipeline distribution or transmission lines"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, Utility pipeline distribution or transmission lines is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24067,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "Which type of draft is produced by a device upstream of the appliance combustion zone?",
    options: ["Forced draft","Induced draft","Atmospheric draft","Gravity draft"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, Forced draft is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24068,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "Air supply for central furnaces 400,000 Btu/hr and below shall be provided in accordance with?",
    options: ["Clause 8.2, 8.3 of the B149.1 Code","Clause 8.4 of the B149.1 Code","Clause 8.13 of the B149.1 Code","Annex F of the B149.1 Code"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, Clause 8.2, 8.3 of the B149.1 Code is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24069,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "advanced",
    question: "What table would be used to calculate combustion air sizing for appliances having draft control devices, when the combined input is up to and including 400,000 Btu, and the structure does not comply with clause 8.2.1 (a) or (b).",
    options: ["Table 8.1","Table 8.2","Table 8.3","Table 8.4"],
    correct: 2,
    reasoning: "Table 8.3 is calculated according to the requirements in CSA B149.1-25, Section 3 - Gas Properties. This calculation ensures proper system sizing and safe operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24070,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What must be provided when a hose is used to transfer liquid propane from one container to another?",
    options: ["Shut off valve","Hydrostatic relief valve","Vapourizer","Excess flow valve"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, Hydrostatic relief valve is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24071,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is the ignition temperature of propane?",
    options: ["800-900°F","920-1020°F / 493-549°C","1100-1200°F","1300-1400°F"],
    correct: 1,
    reasoning: "920-1020°F / 493-549°C is defined in CSA B149.1-25, Section 3 - Gas Properties as a fundamental principle in Properties of Natural Gas and Fuels Safe Handling.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24072,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is the flame temperature of natural gas?",
    options: ["3200°F","3400°F","3600°F / 1927°C","3800°F"],
    correct: 2,
    reasoning: "3600°F / 1927°C is defined in CSA B149.1-25, Section 3 - Gas Properties as a fundamental principle in Properties of Natural Gas and Fuels Safe Handling.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24073,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "Natural gas has what % of methane?",
    options: ["75% - 80%","80% - 85%","85% - 90%","90% - 95%"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, 85% - 90% is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24074,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is the chemical structure of propane?",
    options: ["C2H6","C3H8","C4H10","CH4"],
    correct: 1,
    reasoning: "C3H8 is defined in CSA B149.1-25, Section 3 - Gas Properties as a fundamental principle in Properties of Natural Gas and Fuels Safe Handling.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24075,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "Most natural gas burners produce CO in what range?",
    options: ["0 -- 50 ppm","50 -- 100 ppm","100 -- 150 ppm","150 -- 200 ppm"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, 0 -- 50 ppm is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24076,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is the specific gravity of natural gas?",
    options: ["0.4","0.6","0.8","1.0"],
    correct: 1,
    reasoning: "0.6 is defined in CSA B149.1-25, Section 3 - Gas Properties as a fundamental principle in Properties of Natural Gas and Fuels Safe Handling.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24077,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is the maximum allowable pressure drop on a piping system that has a natural gas supply pressure of 7 in w.c. to 14 in w.c.?",
    options: ["0.5 Inch w.c.","1 inch w.c.","50%"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Section 3 - Gas Properties, 1 inch w.c. is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24078,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is the maximum pressure drop allowed on a piping system that has a natural gas supply pressure less than 7 in w.c.?",
    options: ["1 inch w.c.","0.5 inch w.c.","1.5 inches w.c","2 inches w.c"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Section 3 - Gas Properties, 0.5 inch w.c. is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24079,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "May plastic pipe be used on liquid propane system?",
    options: ["Yes","No"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, No is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24080,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is the required diameter of a dirt pocket used on propane systems?",
    options: ["The diameter shall be NPS 2 or equal to the diameter it serves whichever is the lesser","The diameter shall be NPS 2 or equal to the diameter it serves whichever is the greater"],
    correct: 0,
    reasoning: "The diameter shall be NPS 2 or equal to the diameter it serves whichever is the lesser is defined in CSA B149.1-25, Section 3 - Gas Properties as a fundamental principle in Properties of Natural Gas and Fuels Safe Handling.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24081,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "May a close nipple be used on a propane piping system?",
    options: ["Yes","No"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, No is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24082,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is the maximum interval that propane tubing can be run inside a residential occupancy without identification?",
    options: ["6 ft","12 ft","3 ft","24 ft"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, 3 ft is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24083,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "Is an individual shut-off valve required for all propane appliances on a recreational vehicle?",
    options: ["Yes","No"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, No is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24084,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What characteristics of propane differentiate propane purging from natural gas purging?",
    options: ["Smell, calorific value","Specific gravity, explosive limits"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, Specific gravity, explosive limits is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24085,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "The approximate explosive range of natural gas is ________ to ________ natural gas in air.",
    options: ["5% to 15%","10% to 20%","4% to 15%","15% to 20%"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, 4% to 15% is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24086,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "basic",
    question: "Natural gas is heavier than air.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, False is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24087,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "basic",
    question: "Air is lighter than propane.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, True is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24088,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is an appliance constructed so that all the combustion air is supplied directly from, and the products of combustion are vented directly to, the outdoors by independent enclosed passageways connected directly to the appliance?",
    options: ["Natural-vent appliance","Direct-vent appliance","Power-vent appliance","Sealed combustion appliance"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, Direct-vent appliance is required for proper venting in Properties of Natural Gas and Fuels Safe Handling applications.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24089,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "How far from a property line must a natural gas cylinder be stored if the aggregate capacity of the expanded gas exceeds 18,000 cubic feet (500,000 L)?",
    options: ["50 ft (7.5 m)","75 ft (11.25 m)","100 ft (15 m)","150 ft (22.5 m)"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, 100 ft (15 m) is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24090,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "Who may transfer propane from one container to another?",
    options: ["Anyone as long as they stay in attendance at the transfer point","The holder of a certificate recognized by the authority having jurisdiction","A person trained by the employer on the operation of the equipment"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, The holder of a certificate recognized by the authority having jurisdiction is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24091,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is the maximum permitted filling density of a propane cylinder?",
    options: ["65%","80%","90%","100%"],
    correct: 1,
    reasoning: "80% is defined in CSA B149.1-25, Section 3 - Gas Properties as a fundamental principle in Properties of Natural Gas and Fuels Safe Handling.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24092,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "May a building that has a propane vaporizer be permitted to have a drain to a sewer or a sump pit?",
    options: ["Yes, provided it has a removable cap","No"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, No is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24093,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "Propane-burning appliances installed in a mobile home must comply with which standard?",
    options: ["CSA Z240.4.1-09 (R2014)","CSA B149.2","CSA B149.3"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, CSA Z240.4.1-09 (R2014) is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  {
    id: 24094,
    unit: 3,
    unitName: "Properties of Natural Gas and Fuels Safe Handling",
    difficulty: "intermediate",
    question: "What is the title of the Code that deals with propane storage and handling that is currently accepted into law in Ontario?",
    options: ["CSA B149.2-15 Propane Storage and Handling Code","CSA B149.1-15 Natural Gas and Propane Installation Code","CAN/CSA-B149.3-15 Code for the Field Approval of Fuel-Related Components on Appliances and Equipment"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 3 - Gas Properties, CSA B149.2-15 Propane Storage and Handling Code is the correct requirement in Properties of Natural Gas and Fuels Safe Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 3 - Gas Properties"
  },
  // ========================================
  // UNIT 4 - CODE AND REGULATIONS - NEW QUESTIONS (18 Questions)
  // ========================================
  {
    id: 24095,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "What section of the code is for Venting?",
    options: ["Section 6","Section 7","Section 8","Section 9"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 1 - General Requirements, Section 8 is required for proper venting in Code and Regulations applications.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  {
    id: 24096,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "Every _______ shall take all reasonable precautions to ensure that they and their agents and employees comply with this Act, the regulations or a Ministers order",
    options: ["TSSA Director","TSSA Inspector","Employer","Supervisor"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 1 - General Requirements, Employer is the correct requirement in Code and Regulations to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  {
    id: 24097,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "Who is the 'authority having jurisdiction' referenced in the Code for Ontario",
    options: ["Ministry of Training, Colleges, Universities","TSSA","Ministry of Labour","Ministry of the Environment"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 1 - General Requirements, TSSA is the correct requirement in Code and Regulations to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  {
    id: 24098,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "The maximum fine for contravention of the Acts and Regulations for an individual is?",
    options: ["$5000","$10,000","$50,000","$100,000"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 1 - General Requirements, $50,000 is required for proper venting in Code and Regulations applications.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  {
    id: 24099,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "Why is it important to study local OH&S acts and regulations?",
    options: ["To fulfill exam requirements","To negotiate wages","To understand and comply with specific workplace safety requirements","To avoid doing hands-on work"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 1 - General Requirements, To understand and comply with specific workplace safety requirements is the correct requirement in Code and Regulations to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  {
    id: 24100,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "How does an act differ from a regulation?",
    options: ["Acts are informal rules","Acts are legal frameworks; regulations are specific directives under acts","Regulations are suggestions","Acts have no legal standing"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 1 - General Requirements, Acts are legal frameworks; regulations are specific directives under acts is the correct requirement in Code and Regulations to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  {
    id: 24101,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "What does the CSA encourage workers to do with their province's OH&S acts?",
    options: ["Memorize and recite","Modify them for better clarity","Obtain and study them","Ignore irrelevant sections"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 1 - General Requirements, Obtain and study them is the correct requirement in Code and Regulations to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  {
    id: 24102,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "What is one way to keep up to date with regulations?",
    options: ["Talk to clients","Check with regulators periodically","Rely solely on past training","Avoid complex documentation"],
    correct: 1,
    reasoning: "Check with regulators periodically is defined in CSA B149.1-25, Section 1 - General Requirements as a fundamental principle in Code and Regulations.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  {
    id: 24103,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "Which of the following are typical sections in a provincial OH&S act?",
    options: ["Political representation","Job interview guidelines","Duties of workers and employers, toxic substances, penalties","Grocery reimbursement policies"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 1 - General Requirements, Duties of workers and employers, toxic substances, penalties is the correct requirement in Code and Regulations to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  {
    id: 24104,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "What does SDS Section 1 provide?",
    options: ["Toxicity information","Physical appearance","Identification (product name, supplier, emergency number)","Environmental hazard"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 1 - General Requirements, Identification (product name, supplier, emergency number) is the correct requirement in Code and Regulations to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  {
    id: 24105,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "When installing gas burning appliances in a mobile home what Code applies?",
    options: ["CAN/CSA B149.1","CGA F566","CSA B837","CAN/CSA Z240.4.1"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 1 - General Requirements, CAN/CSA Z240.4.1 is the correct requirement in Code and Regulations to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  {
    id: 24106,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "What is the maximum gas pressure permitted inside one- and two-family dwellings and row housing?",
    options: ["1 psi (7 kPa)","2 psi (14 kPa)","5 psi (35 kPa)","10 psi (70 kPa)"],
    correct: 1,
    reasoning: "2 psi (14 kPa) is defined in CSA B149.1-25, Section 1 - General Requirements as a fundamental principle in Code and Regulations.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  {
    id: 24107,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "What is the maximum gas pressure permitted inside commercial buildings?",
    options: ["5 psig (35 kPa)","10 psig (70 kPa)","20 psig (140 kPa)","66 psig (450 kPa)"],
    correct: 2,
    reasoning: "20 psig (140 kPa) is defined in CSA B149.1-25, Section 1 - General Requirements as a fundamental principle in Code and Regulations.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  {
    id: 24108,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "If there is a conflict between the manufacturer's certified installation instructions and the Codebook, which requirements are to be followed?",
    options: ["The Code","The manufacturer's instructions","Either requirement can be followed"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 1 - General Requirements, The Code is the correct requirement in Code and Regulations to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  {
    id: 24109,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "basic",
    question: "True or False: If in compliance with procedures acceptable to the authority having jurisdiction, a defective heat exchanger of a commercial or industrial appliance can be repaired?",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 1 - General Requirements, True is the correct requirement in Code and Regulations to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  {
    id: 24110,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "Who publishes the standard Installation Requirements for Gas-burning Appliances in Manufactured Homes?",
    options: ["CSA Group","Provincial Safety Authority","UL Canada","Standards Council of Canada (SCC)"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 1 - General Requirements, CSA Group is the correct requirement in Code and Regulations to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  {
    id: 24111,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "What do Codes provide?",
    options: ["General principles, duties, and responsibilities, as well as define the administrative powers for monitoring, enforcing, and creating regulations","Specific information on materials or components that you can use and how you are to use and test them","General requirements and directions on what can be used and how to use it"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 1 - General Requirements, General requirements and directions on what can be used and how to use it is the correct requirement in Code and Regulations to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  {
    id: 24112,
    unit: 4,
    unitName: "Code and Regulations",
    difficulty: "intermediate",
    question: "What allows TSSA to accept and amend codes and standards without a regulatory change?",
    options: ["Technical Standards and Safety Act","Regulation 215/01 Fuel Industry Certificates","Regulation 223/01 Codes and Standards Adopted by Reference","Regulation 211/01 Propane Storage and Handling"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 1 - General Requirements, Regulation 223/01 Codes and Standards Adopted by Reference is the correct requirement in Code and Regulations to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 1 - General Requirements"
  },
  // ========================================
  // UNIT 5 - INTRODUCTION TO ELECTRICITY - NEW QUESTIONS (17 Questions)
  // ========================================
  {
    id: 24113,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "What do electrical drawings include?",
    options: ["Supply Voltage, Internal Wiring, Field Wiring, Location of controls","Only supply voltage","Only internal wiring","Only field wiring"],
    correct: 0,
    reasoning: "According to CSA Unit 5 - Electrical Fundamentals, Supply Voltage, Internal Wiring, Field Wiring, Location of controls is the correct requirement in Introduction to Electricity to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 5 - Electrical Fundamentals"
  },
  {
    id: 24114,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "What is the purpose of a fire damper in HVAC ductwork?",
    options: ["Increase airflow","Reduce noise","Stop the spread of fire and smoke","Filter dust"],
    correct: 2,
    reasoning: "Stop the spread of fire and smoke is defined in CSA Unit 5 - Electrical Fundamentals as a fundamental principle in Introduction to Electricity.",
    csaReference: "CSA Unit 5 - Electrical Fundamentals"
  },
  {
    id: 24115,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "What is the total resistance of a 3 resistors in parallel, one 20 ohm, one 30 ohm, one 40 ohm?",
    options: ["3.66 ohms","5.45 ohms","9.23 ohms","90 ohms"],
    correct: 2,
    reasoning: "9.23 ohms is defined in CSA Unit 5 - Electrical Fundamentals as a fundamental principle in Introduction to Electricity.",
    csaReference: "CSA Unit 5 - Electrical Fundamentals"
  },
  {
    id: 24116,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "What is the total resistance of a 3 resistors in series, one 10 ohm, one 15 ohm, one 20 ohm?",
    options: ["3.66 ohms","5.45 ohms","45 ohms","4.61 ohms"],
    correct: 2,
    reasoning: "45 ohms is defined in CSA Unit 5 - Electrical Fundamentals as a fundamental principle in Introduction to Electricity.",
    csaReference: "CSA Unit 5 - Electrical Fundamentals"
  },
  {
    id: 24117,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "If voltage remains constant and resistance doubles, what happens to the amperage?",
    options: ["Amperage goes down","Amperage goes up","Amperage remains the same","Amperage drops to zero"],
    correct: 0,
    reasoning: "According to CSA Unit 5 - Electrical Fundamentals, Amperage goes down is the correct requirement in Introduction to Electricity to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 5 - Electrical Fundamentals"
  },
  {
    id: 24118,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "If amperage remains constant and resistance doubles, what happens to the voltage?",
    options: ["voltage goes down","voltage goes up","voltage remains the same","voltage drops to zero"],
    correct: 1,
    reasoning: "According to CSA Unit 5 - Electrical Fundamentals, voltage goes up is the correct requirement in Introduction to Electricity to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 5 - Electrical Fundamentals"
  },
  {
    id: 24119,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "If resistance remains constant and voltage doubles, what happens to the amperage?",
    options: ["Amperage goes down","Amperage goes up","Amperage remains the same","Amperage drops to zero"],
    correct: 1,
    reasoning: "According to CSA Unit 5 - Electrical Fundamentals, Amperage goes up is the correct requirement in Introduction to Electricity to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 5 - Electrical Fundamentals"
  },
  {
    id: 24120,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "When the gauge number of the wire increases the resistance?",
    options: ["Increases","Decreases","Stays the same","Resistance drops to zero"],
    correct: 0,
    reasoning: "According to CSA Unit 5 - Electrical Fundamentals, Increases is the correct requirement in Introduction to Electricity to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 5 - Electrical Fundamentals"
  },
  {
    id: 24121,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "The highest amperage would flow through a",
    options: ["3 ohm resistor","8 ohm resistor","20 ohm resistor","50 ohm resistor"],
    correct: 0,
    reasoning: "According to CSA Unit 5 - Electrical Fundamentals, 3 ohm resistor is the correct requirement in Introduction to Electricity to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 5 - Electrical Fundamentals"
  },
  {
    id: 24122,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "Which of the following is not a good conductor?",
    options: ["Copper","Aluminum","Plastic","Metal"],
    correct: 2,
    reasoning: "According to CSA Unit 5 - Electrical Fundamentals, Plastic is the correct requirement in Introduction to Electricity to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 5 - Electrical Fundamentals"
  },
  {
    id: 24123,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "When is an atom considered to be electrically neutral?",
    options: ["when the number of electrons is equal to the number of protons","when the number of electrons is equal to the number of neutrons","when there are more electrons than protons","when there are more protons than electrons"],
    correct: 0,
    reasoning: "According to CSA Unit 5 - Electrical Fundamentals, when the number of electrons is equal to the number of protons is the correct requirement in Introduction to Electricity to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 5 - Electrical Fundamentals"
  },
  {
    id: 24124,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "In a series circuit which of the following remains constant?",
    options: ["Volts","Amps","Ohms","Capacitance"],
    correct: 1,
    reasoning: "According to CSA Unit 5 - Electrical Fundamentals, Amps is the correct requirement in Introduction to Electricity to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 5 - Electrical Fundamentals"
  },
  {
    id: 24125,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "What are the two types of current?",
    options: ["Alternating and electromotive","Alternating and direct","Resistive and conductive","All of the above"],
    correct: 1,
    reasoning: "According to CSA Unit 5 - Electrical Fundamentals, Alternating and direct is the correct requirement in Introduction to Electricity to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 5 - Electrical Fundamentals"
  },
  {
    id: 24126,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "What electrical appliance(s) should never be unplugged in order to obtain power?",
    options: ["Television","Washer or Dryer","Any appliance connected with an extension cord","Refrigerator or freezer"],
    correct: 3,
    reasoning: "According to CSA Unit 5 - Electrical Fundamentals, Refrigerator or freezer is the correct requirement in Introduction to Electricity to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 5 - Electrical Fundamentals"
  },
  {
    id: 24127,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "What is an example of the benefit of electrochemical action?",
    options: ["The light bulb","The dry cell battery","Corrosion"],
    correct: 1,
    reasoning: "The dry cell battery is defined in CSA Unit 5 - Electrical Fundamentals as a fundamental principle in Introduction to Electricity.",
    csaReference: "CSA Unit 5 - Electrical Fundamentals"
  },
  {
    id: 24128,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "In which direction will the electrical current flow if an electrolyte is placed between two metals of differing potential?",
    options: ["From the higher potential metal to a lower potential metal","From the lower potential metal to a higher potential metal"],
    correct: 0,
    reasoning: "According to CSA Unit 5 - Electrical Fundamentals, From the higher potential metal to a lower potential metal is the correct requirement in Introduction to Electricity to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 5 - Electrical Fundamentals"
  },
  {
    id: 24129,
    unit: 5,
    unitName: "Introduction to Electricity",
    difficulty: "intermediate",
    question: "What Code would you refer to for information on the electrical circuits of gas-fired equipment?",
    options: ["CSA B149.1","Canadian Electrical Code, Part I","CSA B149.3","National Energy Code of Canada for Buildings (NECB)"],
    correct: 1,
    reasoning: "According to CSA Unit 5 - Electrical Fundamentals, Canadian Electrical Code, Part I is the correct requirement in Introduction to Electricity to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 5 - Electrical Fundamentals"
  },
  // ========================================
  // UNIT 7 - CUSTOMER RELATIONS - NEW QUESTIONS (22 Questions)
  // ========================================
  {
    id: 24130,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "A moisture exhaust duct must terminate at least ____ feet from a service regulator",
    options: ["6'","3'","10'","1'"],
    correct: 1,
    reasoning: "According to CSA Unit 7 - Customer Service, 3' is the correct requirement in Customer Relations to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24131,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "What is the minimum distance a gas service regulator outlet must terminate from an appliance vent?",
    options: ["10'","6'","1'","3'"],
    correct: 3,
    reasoning: "3' is defined in CSA Unit 7 - Customer Service as a fundamental principle in Customer Relations.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24132,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "Which of the following methods is used to project a professional attitude?",
    options: ["Drive a clean vehicle","Give easily understood explanations of problems","Always carry a toolbox"],
    correct: 1,
    reasoning: "According to CSA Unit 7 - Customer Service, Give easily understood explanations of problems is the correct requirement in Customer Relations to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24133,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "What should be done before using water, power etc., in a customer's home?",
    options: ["Ask permission","Check the source for any safety issues and report","Advise the customer you cannot complete the work unless you have access to the utilities"],
    correct: 0,
    reasoning: "According to CSA Unit 7 - Customer Service, Ask permission is the correct requirement in Customer Relations to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24134,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "What should be done after hearing the customer's explanation of a problem or request?",
    options: ["Tell the customer you are the expert and you will figure it out for yourself","Advise the customer they should learn how to operate the equipment properly","Clarify by recapping or paraphrasing the customer's explanation to assure them that they have communicated it accurately to you"],
    correct: 2,
    reasoning: "According to CSA Unit 7 - Customer Service, Clarify by recapping or paraphrasing the customer's explanation to assure them that they have communicated it accurately to you is the correct requirement in Customer Relations to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24135,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "Why is asking the right question in the right way important when dealing with customer concerns?",
    options: ["It can shorten the time it takes to analyze the problem and will save them money","It can not only help to isolate the problem, but it can also make the customer feel he/she is part of the process","It can prevent you from having to go back to the vehicle to get extra tools"],
    correct: 1,
    reasoning: "According to CSA Unit 7 - Customer Service, It can not only help to isolate the problem, but it can also make the customer feel he/she is part of the process is the correct requirement in Customer Relations to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24136,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "After solving a service problem, what should be done to allay further concerns of the customer?",
    options: ["The customer should be advised how the last person who worked on the system was incompetent","The customer should be advised to read the instructions that came with the appliance and try and fix it first before calling","A brief explanation of the problem and its solution should be given to the customer"],
    correct: 2,
    reasoning: "According to CSA Unit 7 - Customer Service, A brief explanation of the problem and its solution should be given to the customer is the correct requirement in Customer Relations to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24137,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "What is a good way to ensure your footwear is clean and dry when entering a customer's home?",
    options: ["Bring an extra pair of shoes for inside","Wear overshoes","Wipe your shoes on the customers doormat"],
    correct: 1,
    reasoning: "Wear overshoes is defined in CSA Unit 7 - Customer Service as a fundamental principle in Customer Relations.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24138,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "Where should you park your service vehicle when arriving at a customer's location?",
    options: ["On the street","Customers driveway","Both the street and driveway are acceptable"],
    correct: 2,
    reasoning: "According to CSA Unit 7 - Customer Service, Both the street and driveway are acceptable is the correct requirement in Customer Relations to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24139,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "What should be done before moving an appliance into a customer's home?",
    options: ["Take measurements to ensure it can fit in the space provided","Ask the customer to leave and they will see the appliance after it is installed","Ask the customer if they know if the appliance will fit in the space provided"],
    correct: 0,
    reasoning: "According to CSA Unit 7 - Customer Service, Take measurements to ensure it can fit in the space provided is the correct requirement in Customer Relations to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24140,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "What should be done if a customer's property is damaged?",
    options: ["Assess the damage and touch up any small marks before the customer has an opportunity to see it","Immediately report all damage to the customer and your supervisor","Advise the customer the damage was there before you started"],
    correct: 1,
    reasoning: "According to CSA Unit 7 - Customer Service, Immediately report all damage to the customer and your supervisor is the correct requirement in Customer Relations to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24141,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "What should be done after a customer's problem has been solved and the work is complete?",
    options: ["Nothing","Produce an invoice for the work and demand payment","Perform a follow-up to ensure the customer is still satisfied"],
    correct: 2,
    reasoning: "According to CSA Unit 7 - Customer Service, Perform a follow-up to ensure the customer is still satisfied is the correct requirement in Customer Relations to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24142,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "Which of the following is a better choice of words than, \"I know how you feel,\" when responding to a customer's complaint?",
    options: ["You are overreacting","I can understand why you feel that way","It's not that bad"],
    correct: 1,
    reasoning: "According to CSA Unit 7 - Customer Service, I can understand why you feel that way is the correct requirement in Customer Relations to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24143,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "Which is the better choice of words than, \"You are not making any sense\" when responding to a customer's concerns?",
    options: ["That is definitely wrong","Maybe I am not understanding you correctly","You're way off base","Did you really say...."],
    correct: 1,
    reasoning: "According to CSA Unit 7 - Customer Service, Maybe I am not understanding you correctly is the correct requirement in Customer Relations to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24144,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "What is the best policy regarding arguments with a customer?",
    options: ["Listen, but make sure the customer agrees with you by the end","Advise the customer you are the expert","Avoiding arguments is the best policy"],
    correct: 2,
    reasoning: "Avoiding arguments is the best policy is defined in CSA Unit 7 - Customer Service as a fundamental principle in Customer Relations.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24145,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "Which of the following non-verbal communication techniques can be used to diffuse a customer's anger?",
    options: ["Facial expression (calm, sincere, concerned, interested expression)","Turn your back to the customer","Say nothing and leave without fixing the problem"],
    correct: 0,
    reasoning: "According to CSA Unit 7 - Customer Service, Facial expression (calm, sincere, concerned, interested expression) is the correct requirement in Customer Relations to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24146,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "What is an appropriate response to a customer who is demanding something unreasonable or impossible?",
    options: ["Calmly leave the location and mark it on the work order","Calmly and patiently tell them what you are able to do, not what you cannot do","Calmly leave without saying anything"],
    correct: 1,
    reasoning: "According to CSA Unit 7 - Customer Service, Calmly and patiently tell them what you are able to do, not what you cannot do is the correct requirement in Customer Relations to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24147,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "What is a poor response when dealing with a rude customer?",
    options: ["Do you want this fixed or not?","What would you like me to do to solve the problem you are having?","I am not meeting your expectations. What can I do?"],
    correct: 0,
    reasoning: "Do you want this fixed or not? is defined in CSA Unit 7 - Customer Service as a fundamental principle in Customer Relations.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24148,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "What is a good response to an abusive customer?",
    options: ["You are rude, and I do not have to take this abuse, I am leaving","Say nothing, turn around and leave","I am sorry, but if you cannot speak to me on a professional basis, I will have to leave"],
    correct: 2,
    reasoning: "I am sorry, but if you cannot speak to me on a professional basis, I will have to leave is defined in CSA Unit 7 - Customer Service as a fundamental principle in Customer Relations.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24149,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "What should you do when a customer becomes unruly or threatening?",
    options: ["Seek assistance. If violence is threatened, call the police","Shut off the fuel supply and mark the work order that the system has been tagged","Lock the meter or shut off the fuel supply and lock it"],
    correct: 0,
    reasoning: "According to CSA Unit 7 - Customer Service, Seek assistance. If violence is threatened, call the police is the correct requirement in Customer Relations to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24150,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "What is a possible alternative to speaking when you are trying to communicate with a customer who has heavily accented English?",
    options: ["Advise the customer someone else will attend","Have the customer try to write his/her request","Point and speak loudly"],
    correct: 1,
    reasoning: "According to CSA Unit 7 - Customer Service, Have the customer try to write his/her request is the correct requirement in Customer Relations to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  {
    id: 24151,
    unit: 7,
    unitName: "Customer Relations",
    difficulty: "intermediate",
    question: "In general, what is the minimum service clearance surrounding an appliance?",
    options: ["12 inches","18 inches","24 inches","36 inches"],
    correct: 2,
    reasoning: "24 inches is defined in CSA Unit 7 - Customer Service as a fundamental principle in Customer Relations.",
    csaReference: "CSA Unit 7 - Customer Service"
  },
  // ========================================
  // UNIT 8 - INTRO TO PIPING AND TUBING SYSTEMS - NEW QUESTIONS (35 Questions)
  // ========================================
  {
    id: 24152,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Welded gas piping must comply with?",
    options: ["Transport of Dangerous Goods Regulations","Hydrocarbon and Gasoline Pipeline Act","TIG and MIG Welding Act","Technical Standards and Safety Act"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, Technical Standards and Safety Act is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24153,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the proper test pressure and duration for a gas piping system with 150' longest measured run with a system supply pressure of 7\" water column?",
    options: ["15 psi for 60 minutes","20 psi for 30 minutes","15 psi for 15 minutes","50 psi for 60 minutes"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Section 6 - Piping Systems, 15 psi for 15 minutes is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24154,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Plastic piping and tubing may currently only be used for?",
    options: ["Low pressure propane lines","Gas supply piping inside a residence only","Outdoor, underground use","Supply piping to pool heaters"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, Outdoor, underground use is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24155,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Piping installed underground cannot be less than ____\" in diameter",
    options: ["3/8\"","½\"","¾\"","¼\""],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, ½\" is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24156,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which of the following fittings cannot be used on a gas piping system?",
    options: ["street elbow","reducing coupling","bushing","reducing elbow"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, reducing elbow is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24157,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Tubing installed in hollow walls or partitions must be protected from physical damage with # ____ GSG plates or sleeves",
    options: ["14","10","28","16"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, 16 is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24158,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When measuring pipe/piping you go by what?",
    options: ["O.D. Outer Diameter","I.D. Inner Diameter","Wall thickness","Total diameter"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, I.D. Inner Diameter is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24159,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When measuring tube/tubing you go by?",
    options: ["I.D. Inner Diameter","O.D. Outer Diameter","Wall thickness","Total diameter"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, O.D. Outer Diameter is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24160,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "basic",
    question: "Cement can have an adverse effect on gas piping and tubing.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, True is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24161,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How is an underground steel piping system isolated from the above-ground piping to which it is connected?",
    options: ["By the use of dielectric fittings","By unions","By plastic connectors","By brass connectors"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, By the use of dielectric fittings is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24162,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What are the three most common materials used for water distribution piping?",
    options: ["Cast iron, copper, plastic","Copper, galvanized steel, asbestos cement pipe","Galvanized steel, plastic, cast iron","Copper, galvanized steel, plastic"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, Copper, galvanized steel, plastic is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24163,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Are fitting allowances for a specific diameter and type of fitting the same for all manufacturers?",
    options: ["Yes","No"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, No is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24164,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which of the following piping materials cannot be used in gas piping systems?",
    options: ["Steel","Copper","Lead","Plastic"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, Lead is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24165,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "basic",
    question: "Steel or malleable iron fittings may be used with steel pipe.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, True is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24166,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How shall piping be sized?",
    options: ["To meet the volume and pressure requirements at the point of use","To meet the pressure requirements at the point of use","To meet the volume requirements at the point of use","According to the appliance manufacturers installation manual"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, To meet the volume and pressure requirements at the point of use is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24167,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How shall an extension of an existing piping or tubing system be sized?",
    options: ["Sized to meet the load demand of the extended piping system","Sized to meet the requirements of Clause 6.3 of CSA B149.1","Sized to meet the requirements of Clause 5.2 of CSA Z662"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, Sized to meet the requirements of Clause 6.3 of CSA B149.1 is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24168,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Must the ends of all piping be reamed?",
    options: ["Yes","No"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, Yes is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24169,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the maximum spacing of supports for 1 in horizontal piping?",
    options: ["12 ft","6 ft","8 ft","16 ft"],
    correct: 2,
    reasoning: "8 ft is defined in CSA B149.1-25, Section 6 - Piping Systems as a fundamental principle in Intro to Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24170,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What diameters of piping require welded joints?",
    options: ["Diameters NPS 2-1/2 and larger","Diameters NPS 4 and larger","Diameters NPS 2-1/4 and larger","Diameters NPS 4-1/2 and larger"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, Diameters NPS 2-1/2 and larger is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24171,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "During a period when a piping outlet to an appliance is not connected to the appliance, how shall it be made tight?",
    options: ["A piping outlet must always be connected to an appliance","By means of a plugged valve or either a cap or plug made of a material compatible with the piping or tubing system"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, By means of a plugged valve or either a cap or plug made of a material compatible with the piping or tubing system is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24172,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A ________ is an area in a piping system that collects condensate and from which you can remove the condensate.",
    options: ["Drip pocket","Dirt pocket","Collection pocket"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, Drip pocket is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24173,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the minimum diameter of piping that can be installed underground?",
    options: ["NPS 3/4","NPS 3/8","NPS 1/2"],
    correct: 2,
    reasoning: "NPS 1/2 is defined in CSA B149.1-25, Section 6 - Piping Systems as a fundamental principle in Intro to Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24174,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How shall the gas supply to an underground plastic pipe or tubing be controlled?",
    options: ["By a shut-off valve situated above ground","By a regulator"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, By a shut-off valve situated above ground is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24175,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "May rooftop piping be supported with treated wood blocks?",
    options: ["Yes","No"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, No is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24176,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When may piping less than NPS 1/2 be used indoors?",
    options: ["On a propane branch line not exceeding 15 ft in length","On a propane branch line not exceeding 25 ft in length","Piping less than NPS 1/2 cannot be used indoors"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, On a propane branch line not exceeding 25 ft in length is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24177,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "May propane piping or tubing be supported by other piping or tubing?",
    options: ["Yes, providing the piping is less than NPS ¾","No"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, No is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24178,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When tubing runs horizontally across studs notched to accommodate the tubing, it must be protected where it crosses each stud by a ________.",
    options: ["12-gauge (USG) steel plate","16-gauge (USG) steel plate","14-gauge (USG) steel plate","18-gauge (USG) steel plate"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, 16-gauge (USG) steel plate is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24179,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Where must the shut-off valves be placed if propane piping or tubing is extended from one building to another?",
    options: ["At the exit of the first building","At the point of entry to the second building","One at the exit of the first building and another at the point of entry to the second building"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, One at the exit of the first building and another at the point of entry to the second building is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24180,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When during a piping installation should pressure testing be carried out?",
    options: ["After all of the appliances have been installed and connected","Before any appliance is installed. A leak test is required after the appliance is installed","Before any appliances are installed"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Section 6 - Piping Systems, Before any appliance is installed. A leak test is required after the appliance is installed is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24181,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What two inert gases may be used to pressure-test gas piping systems?",
    options: ["Nitrogen and Hydrogen","Argon and Carbon dioxide","Carbon dioxide and Nitrogen","Hydrogen and Argon"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Section 6 - Piping Systems, Carbon dioxide and Nitrogen is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24182,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which appliance piping should be purged first?",
    options: ["The one with the largest input","The one farthest from the point of supply","The one with the smallest input"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, The one farthest from the point of supply is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24183,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What substance is used to purge the air out of a gas piping system that is 4 in diameter or larger?",
    options: ["An inert gas (carbon dioxide or nitrogen)","Compressed Air","Gas (Propane or natural gas)"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, An inert gas (carbon dioxide or nitrogen) is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24184,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "According to Table 6.1, what is the maximum allowable pressure drop when a natural gas piping and tubing system supply pressure is less than 7 inches w.c.?",
    options: ["1 inch w.c. (0.250 kPa)","There is no maximum allowable pressure drop","0.5 inches w.c. (0.125 kPa)"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Section 6 - Piping Systems, 0.5 inches w.c. (0.125 kPa) is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24185,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Can gas piping be passed under a building?",
    options: ["Yes, if it is at least 24 inches (610 mm) below the footings","Yes, if it is at least 15 inches (400 mm) below the footings","No"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, No is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  {
    id: 24186,
    unit: 8,
    unitName: "Intro to Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When piping is extended from one building to another, where must the shut-off valves be located?",
    options: ["At the point of exit of the first building and the point of entry of the second building","At the appliance","At the meter"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Piping Systems, At the point of exit of the first building and the point of entry of the second building is the correct requirement in Intro to Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Piping Systems"
  },
  // ========================================
  // UNIT 9 - INTRO TO GAS APPLIANCES - NEW QUESTIONS (136 Questions)
  // ========================================
  {
    id: 24187,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What type of pressure is a gas line when no movement is taking place?",
    options: ["Dynamic Pressure","Static Pressure","Working Pressure","System Pressure"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Section 7 - Appliances, Static Pressure is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24188,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is primary air?",
    options: ["Air around the appliance","The air that is mixed with gas prior to ignition","Air from outside","Combustion air"],
    correct: 1,
    reasoning: "The air that is mixed with gas prior to ignition is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24189,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Who shall order such investigation as he or she considers necessary on being notified of an accident or incident?",
    options: ["Employer of Gas Technician","TSSA Director","TSSA Inspector","Ministry of Labour Inspector"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, TSSA Director is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24190,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "An automatically controlled forced air furnace shall be equipped with a high temperature limit control, the maximum setting of the control shall be?",
    options: ["200 degrees F","250 degrees F","300 degrees F","350 degrees F"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, 300 degrees F is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24191,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the maximum gas pressure allowed in a building under construction (construction heater application)?",
    options: ["2 PSIG","20 PSIG","25 PSIG","50 PSIG"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Section 7 - Appliances, 2 PSIG is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24192,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Which certification agency listed is not certified for appliance approvals in Ontario?",
    options: ["Ministry of Transportation","Canadian Standards Association","Underwriters Laboratories Canada","Underwriters Laboratories International"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Ministry of Transportation is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24193,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "A Hydrocarbon is defined as?",
    options: ["Chemical compound of Hydro electricity and Water","Chemical compound of Hydrogen and Carbon Dioxide","Chemical compound of Hydrogen and Carbon Monoxide","Chemical compound of Hydrogen and Carbon"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Chemical compound of Hydrogen and Carbon is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24194,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Who has the responsibility under the Act of Inspecting and Accepting an Installation before supplying gas for the first time?",
    options: ["TSSA Fuel Safety Inspector","Municipality Plumbing Inspector","The Distributor","Ministry of Labour Inspector"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, The Distributor is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24195,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "No person shall operate a container refill center unless?",
    options: ["The operator of the refill center posts a personal bond of $500,000","The refill center is licensed","The refill center is located more than 0.5 kilometres from a residential area","The refill center is insured for $2,000,000 liability"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, The refill center is licensed is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24196,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "An 'indirect fired appliance' is defined as?",
    options: ["An appliance in which the flue gases are not mixed with the medium being heated","An appliance in which the flue gases are intermixed with the medium being heated","An appliance with all combustion air supplied directly from, and all combustion products directly vented to the outdoors by independent enclosed passageways connected directly to the appliance","An appliance with storage capability only, and where heat is transferred from one heating medium to another"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, An appliance in which the flue gases are not mixed with the medium being heated is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24197,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Which of the following is NOT typically found in OH&S acts?",
    options: ["Penalties for non-compliance","Company marketing plans","Worker rights","Duties of employers"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Company marketing plans is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24198,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "If unsure about reporting requirements, a worker should:",
    options: ["Do nothing","Call a family member","Ask the supervisor or consult the WCB","Research on social media"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Ask the supervisor or consult the WCB is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24199,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What does WCB stand for?",
    options: ["Workers' Clean Bureau","Workstation Control Board","Workers' Compensation Board","Workplace Cleanliness Booklet"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Workers' Compensation Board is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24200,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Which document must be filed when a worker is injured and misses work?",
    options: ["Payroll deduction form","Workers Compensation Board (WCB) report","Income tax return","Time-off request"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Workers Compensation Board (WCB) report is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24201,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Who fills out the WCB report form?",
    options: ["The worker's union","The employer","The government","The coworker"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, The employer is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24202,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What kind of condition requires immediate gas shutoff and notice?",
    options: ["Acceptable but old installation","Routine maintenance","Immediate hazard condition","New equipment check"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Immediate hazard condition is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24203,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Who is responsible for ensuring SDS are accessible at the workplace?",
    options: ["Workers","Manufacturer","Employer","Union representative"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Employer is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24204,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "A workplace label is required when:",
    options: ["Product is shipped directly from supplier","Product is diluted","Product is transferred to another container","Product is labeled in another language"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Product is transferred to another container is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24205,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Which of the following is not a route of entry for solvents?",
    options: ["Inhalation","Skin contact","Subliminal exposure","Ingestion"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Subliminal exposure is required for proper venting in Intro to Gas Appliances applications.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24206,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "How should solvent spills be cleaned?",
    options: ["Absorbed with sawdust and left out","Immediately cleaned and rags stored properly","Ignored unless large","With gasoline"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Immediately cleaned and rags stored properly is required for proper venting in Intro to Gas Appliances applications.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24207,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the purpose of grounding drums with flammable liquids?",
    options: ["Prevent leaks","Track usage","Prevent static sparks","Reduce evaporation"],
    correct: 2,
    reasoning: "Prevent static sparks is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24208,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is a proper precaution when using solvents?",
    options: ["Use in unventilated areas","Avoid eye and skin contact","Store near heat","Use gasoline to clean up"],
    correct: 1,
    reasoning: "Avoid eye and skin contact is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24209,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What material emits highly toxic fumes when burned?",
    options: ["Stainless steel","ABS/PVC","Copper","PEX"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, ABS/PVC is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24210,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Which form of chlorine is heavier than air and collects near the ground?",
    options: ["Liquid chlorine","Solid chlorine","Gaseous chlorine","Ozone"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Gaseous chlorine is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24211,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the first step if a chlorine leak is suspected?",
    options: ["Use fans","Evacuate area","Light a flare","Seal container"],
    correct: 1,
    reasoning: "Evacuate area is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24212,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What gas is heavier than air and collects at low points?",
    options: ["Natural gas","Oxygen","Propane","Helium"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Propane is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24213,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What colour is gaseous chlorine?",
    options: ["Blue","Greenish-yellow","Brown","Colourless"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Greenish-yellow is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24214,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What should you do if a container label becomes unreadable?",
    options: ["Discard the container","Ignore it","Apply a workplace label","Pour it into a clear bottle"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Apply a workplace label is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24215,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What toxic material is found in plastic venting glues?",
    options: ["Asbestos","Chlorine","Solvents","Sulphur"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Solvents is required for proper venting in Intro to Gas Appliances applications.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24216,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What gases are typically found in sewer gas?",
    options: ["CO₂ and helium","Ozone and radon","Hydrogen sulfide, methane, ammonia","Argon and krypton"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Hydrogen sulfide, methane, ammonia is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24217,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the safe response to suspected sewer gas in a manhole?",
    options: ["Enter and hold breath","Call a plumber","Test, ventilate, and wear PPE","Light a match"],
    correct: 2,
    reasoning: "Test, ventilate, and wear PPE is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24218,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What should be clearly labeled on solvent containers?",
    options: ["Color of liquid","Supervisor's name","Contents and emergency precautions","Expiry date"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Contents and emergency precautions is required for proper venting in Intro to Gas Appliances applications.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24219,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Asbestos must be:",
    options: ["Vacuumed away","Sprayed with water and bagged","Handled only after certified training and permission","Ignored if not airborne"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Handled only after certified training and permission is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24220,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the flammable range of gasoline vapours?",
    options: ["1–16%","2–10%","5–12%","0.5–5%"],
    correct: 0,
    reasoning: "1–16% is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24221,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Before working on an HVAC system, what should always be done first?",
    options: ["Turn on the fan","Check airflow","Lockout/tagout the power supply","Open all vents"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Lockout/tagout the power supply is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24222,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the fire triangle composed of?",
    options: ["Heat, fuel, pressure","Fuel, oxygen, ignition source","Gas, air, refrigerant","Pressure, flame, carbon"],
    correct: 1,
    reasoning: "Fuel, oxygen, ignition source is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24223,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the primary fire risk when handling refrigerants?",
    options: ["Toxic gas inhalation","Static discharge","Overheating compressor","Refrigerant combustion or explosion in confined space"],
    correct: 3,
    reasoning: "Refrigerant combustion or explosion in confined space is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24224,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "How should flammable solvents be stored?",
    options: ["In plastic containers near heat","On open shelving","In sealed, approved safety containers away from ignition sources","In cardboard boxes"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, In sealed, approved safety containers away from ignition sources is required for proper venting in Intro to Gas Appliances applications.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24225,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What should be used to test for gas leaks in a line?",
    options: ["Matchstick","Soapy water or approved gas detector","Open flame","Lighter"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Soapy water or approved gas detector is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24226,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Which HVAC process presents the greatest risk of igniting flammable vapors?",
    options: ["Vacuum testing","Charging refrigerant","Brazing or soldering","Checking thermostat"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Brazing or soldering is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24227,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Why should gas-fired equipment be properly vented?",
    options: ["To reduce fuel consumption","To enhance air conditioning","To remove combustion by-products and reduce fire risk","To improve humidity control"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, To remove combustion by-products and reduce fire risk is required for proper venting in Intro to Gas Appliances applications.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24228,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "If a fire starts in a ceiling space, what is the first thing an HVAC technician should do?",
    options: ["Open all doors","Run to the roof","Activate the nearest fire alarm and evacuate","Use water to extinguish it"],
    correct: 2,
    reasoning: "Activate the nearest fire alarm and evacuate is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24229,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is a key responsibility of an HVAC tech when working in areas with combustible dust?",
    options: ["Blow it into a corner","Spray it with water","Eliminate ignition sources and use spark-proof tools","Use a leaf blower to remove it"],
    correct: 2,
    reasoning: "Eliminate ignition sources and use spark-proof tools is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24230,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Combustible materials should be kept at least how far from ignition sources?",
    options: ["30 cm","1 meter","3 meters","5 meters"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, 1 meter is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24231,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What should be done with oily rags after use?",
    options: ["Discard in open trash","Store in regular toolbox","Store in a metal container with a self-closing lid","Hang to dry"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Store in a metal container with a self-closing lid is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24232,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What condition can create a backdraft when opening a furnace room door during a fire?",
    options: ["Cold air","Loss of gas pressure","Oxygen rushing into an oxygen-deprived fire","Noise pressure"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Oxygen rushing into an oxygen-deprived fire is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24233,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "After extinguishing a small HVAC-related fire, what should the technician do next?",
    options: ["Leave the area","Report the incident and inspect for hidden fires","Continue work","Reset the thermostat"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Report the incident and inspect for hidden fires is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24234,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Who may remove a lock used to lockout a piece of equipment?",
    options: ["Anyone","A co-worker","The technician that placed the lock or supervisor","Management"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, The technician that placed the lock or supervisor is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24235,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Of what three particles are atoms made?",
    options: ["Protons, electrons, ions","Neutrons, electron and protons","Nucleus, electrons and protons","Orbit, ions and neutrons"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Neutrons, electron and protons is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24236,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What are the laws of electric charge?",
    options: ["Unlike charges repel and like charges attract","Like charges attract and unlike charges attract","Like charges repel and unlike charges attract","Unlike charges repel and like charges repel"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Like charges repel and unlike charges attract is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24237,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What makes a good insulator?",
    options: ["materials that have the ability to allow current flow easily","materials that have the ability to resist current flow","rubber","plastic"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, materials that have the ability to resist current flow is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24238,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "When is an atom considered to be positively charged?",
    options: ["when the number of electrons is equal to the number of protons","when the number of electrons is equal to the number of neutrons","when there are more electrons than protons","when there are more protons than electrons"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, when there are more protons than electrons is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24239,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "When is an atom considered to be negatively charged?",
    options: ["when the number of electrons is equal to the number of protons","when the number of electrons is equal to the number of neutrons","when there are more electrons than protons","when there are more protons than electrons"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, when there are more electrons than protons is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24240,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "When an appliance is converted from one gas to another what must the installer do?",
    options: ["Call Ministry of Appliance Conversions","Mark the new type of gas being used on the rating plate","Notify the utility","Notify the appliance manufacturer"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Mark the new type of gas being used on the rating plate is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24241,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Which of the following appliances must have a dirt pocket installed on them?",
    options: ["Gas log","Range","Clothes dryer","Water heater"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Water heater is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24242,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "A Category 4 appliance is:",
    options: ["An appliance that operates with a positive vent static pressure, and with a flue loss less than 17%","An appliance that operates with a non-positive vent static pressure, and with a flue loss not less than 17%","An appliance that operates with a non-positive vent static pressure and with a flue loss less than 17%","An appliance that operates with a positive vent static pressure and with a flue loss not less than 17%"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, An appliance that operates with a positive vent static pressure, and with a flue loss less than 17% is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24243,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "A 'quick disconnect' device is?",
    options: ["An emergency shut off to control all gas supplied to the building","A solenoid that is fast closing","A flare nut type fitting on a gas line","A hand operated device providing connection and disconnection means for an appliance to the gas supply"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, A hand operated device providing connection and disconnection means for an appliance to the gas supply is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24244,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Where is the fan located in the 'forced draft burner' appliance?",
    options: ["Upstream of the combustion zone","Downstream of the combustion zone","In the heat exchanger","In the pulse combustion burner"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Upstream of the combustion zone is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24245,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Where is the fan located in the 'induced draft burner' appliance?",
    options: ["Upstream of the combustion zone","Downstream of the combustion zone","In the heat exchanger","In the pulse combustion burner"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Downstream of the combustion zone is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24246,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "The statement that best describes a continuous pilot is?",
    options: ["The pilot is lit each time there is a call for heat, and remains lit during the entire call for heat.","The pilot is lit each time there is a call for heat, and cuts off at the end of the main burner proving period.","The pilot is on all the time, on a call for heat the pilot expands in size to reliably light burner","The pilot is on all the time, and remains the same size"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, The pilot is on all the time, and remains the same size is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24247,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "The statement that best describes an intermittent pilot is?",
    options: ["The pilot is lit each time there is a call for heat, and remains lit during the entire call for heat.","The pilot is lit each time there is a call for heat, and cuts off at the end of the main burner proving period.","The pilot is on all the time, on a call for heat the pilot expands in size to reliably light the burner.","The pilot is on all the time and remains the same size."],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, The pilot is lit each time there is a call for heat, and remains lit during the entire call for heat. is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24248,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "The statement that best describes an interrupted pilot is?",
    options: ["The pilot is lit each time there is a call for heat, and remains lit during the entire call for heat.","The pilot is lit each time there is a call for heat, and cuts off at the end of the main burner proving period.","The pilot is on all the time, on a call for heat the pilot expands in size to reliably light the burner.","The pilot is on all the time and remains the same size"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, The pilot is lit each time there is a call for heat, and cuts off at the end of the main burner proving period. is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24249,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What must be done if a defective heat exchanger is found in a dwelling unit?",
    options: ["It may be welded, if welder is certified","It shall be replaced","If defects do not affect the flame, nothing has to be done","If carbon monoxide is not present nothing has to be done"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, It shall be replaced is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24250,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the maximum gas pressure allowed in a commercial building's central boiler room?",
    options: ["66 psi","5 psi","20 psi","25 psi"],
    correct: 2,
    reasoning: "20 psi is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24251,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What type of vent is to be used on a wall furnace when the vent is concealed?",
    options: ["Type BW","Type B","Type L","Special venting system"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Type BW is required for proper venting in Intro to Gas Appliances applications.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24252,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "When a unit heater is installed in a garage the minimum clearance of ____' shall be maintained between the base of the heater and the floor (when the heater has no guard)",
    options: ["4'","6'","10'","8'"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, 8' is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24253,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "If a furnace is installed in a repair garage, any component capable of igniting flammable vapour must be located _____\" above the floor",
    options: ["12\"","18\"","24\"","54\""],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, 54\" is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24254,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the maximum gas pressure allowed inside a one family dwelling?",
    options: ["2 psi","5 psi","1 psi","½ psi"],
    correct: 0,
    reasoning: "2 psi is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24255,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "A water heater installed in a bathroom shall be?",
    options: ["Direct vent type","Power vent type","Power burner type","Conventional vent type"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Direct vent type is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24256,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "A chimney shall not extend less than ____' above the highest point where it passes through the roof of a building",
    options: ["2'","4'","5'","3'"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, 3' is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24257,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "A room heater installed in a bathroom shall be?",
    options: ["Direct vent type","Power vent type","Power burner type","Conventional vent type"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Direct vent type is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24258,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "An air supply inlet to a building must be located at least ____\" above outside grade level",
    options: ["18\"","6\"","14\"","12\""],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, 12\" is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24259,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "A vent connector serving an appliance without flue gas dilution air must be made of # _____ GSG galvanized steel.",
    options: ["24","20","28","26"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, 24 is required for proper venting in Intro to Gas Appliances applications.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24260,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "When a common gas vent is used it shall be?",
    options: ["Type C vent","Type BW vent","Type B or L vent","Type BH vent"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Type B or L vent is required for proper venting in Intro to Gas Appliances applications.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24261,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "A pool heating appliance installed outdoors at grade level shall be placed on a base of poured concrete or reinforced concrete slab, extending at least?",
    options: ["6\" beyond all sides of the appliance","3\" beyond all sides of the appliance","1\" beyond all sides of the appliance","12\" beyond all sides of the appliance"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, 6\" beyond all sides of the appliance is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24262,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the minimum clearance to combustibles on a commercial type clothes dryer?",
    options: ["18\" above, 18\" back and sides, 18\" front","24\" above, 18\" back and sides, 36\" front","30\" above, 18\" back and sides, 24\" front","6\" above, 6\" back and sides, 24\" front"],
    correct: 0,
    reasoning: "18\" above, 18\" back and sides, 18\" front is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24263,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "A light used for searching for gas leakage shall be:",
    options: ["Class 1, group C","Class 2, group C","Class 1, group A","Class 1, group D"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Class 1, group D is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24264,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "When a vent connector from a category 1 appliance passes through an unheated space, what must be done to the vent connector?",
    options: ["It must be insulated","The connector must be Type C \"heavy wall\"","The connector must be Type B","The connector must be type BW"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, It must be insulated is required for proper venting in Intro to Gas Appliances applications.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24265,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Meter and service regulator installations shall be made in accordance with:",
    options: ["CSA standard Z662-99","CSA standard Z240.4.1","TSSA standard 5.77.5","CEC standard 3.6.7"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, CSA standard Z662-99 is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24266,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "An intermittent pilot is:",
    options: ["A pilot that is lit each time there is a call for heat and that burns during the entire period the main burner is firing","A pilot that is lit each time there is a call for heat and that is cut off automatically at the end of the trial for ignition period of the main burner.","A pilot that burns without turndown throughout the entire time the burner is in service, whether the main burner is firing or not","A pilot flame supervised by a primary safety control that senses the presence of the pilot prior to gas being admitted to the main burner"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, A pilot that is lit each time there is a call for heat and that burns during the entire period the main burner is firing is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24267,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Who is responsible for ensuring that the manufacturers installation instructions are left with the end user?",
    options: ["The appliance manufacturer","The distributor","The TSSA inspector","The installer"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, The installer is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24268,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is secondary air?",
    options: ["Air mixed before ignition","Air that is mixed and added at the point of combustion and surrounds the flame","Air from outside","Dilution air"],
    correct: 1,
    reasoning: "Air that is mixed and added at the point of combustion and surrounds the flame is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24269,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the composition of air?",
    options: ["21% oxygen, 79% nitrogen","20% oxygen, 80% nitrogen","18% oxygen, 82% nitrogen","22% oxygen, 78% nitrogen"],
    correct: 0,
    reasoning: "21% oxygen, 79% nitrogen is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24270,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the barometric pressure at sea level?",
    options: ["14.7 psia","14.73 psia","15.0 psia","15.5 psia"],
    correct: 1,
    reasoning: "14.73 psia is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24271,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "The rating of Gas appliances is in what units?",
    options: ["Watts","Btu's","Calories","Joules"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Btu's is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24272,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "When temperature of any substance increases, its pressure will?",
    options: ["Increase","Decrease","Stay the same","Become unstable"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Section 7 - Appliances, Increase is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24273,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Convert 35 degree Celsius to Fahrenheit:",
    options: ["90 degrees F","95 degrees F","100 degrees F","105 degrees F"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, 95 degrees F is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24274,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Which is the better way of communicating with a person who speaks little English?",
    options: ["Speaking slower","Speaking louder","Speaking louder and slower"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Speaking slower is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24275,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "How may cultural differences affect work schedules?",
    options: ["Someone who is of the same background would have to attend","Cultural differences don't affect work schedules","Work may have to be scheduled around religious or cultural practices"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Work may have to be scheduled around religious or cultural practices is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24276,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is necessary for corrosion to occur?",
    options: ["Cathode, Anode","Anode, Cathode, Conductive path","Anode, Cathode, Electrolyte, Conductive path","Electrolyte, Anode, Conductive path"],
    correct: 2,
    reasoning: "Anode, Cathode, Electrolyte, Conductive path is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24277,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Which is a better electrolyte?",
    options: ["Dry sandy soil","Moist loamy soil"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Moist loamy soil is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24278,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "May polybutylene be used on both hot and cold-water distribution lines?",
    options: ["Yes","No"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Yes is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24279,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the melting temperature of hard solders?",
    options: ["Above 1000°F","Above 750°F","Above 500°F","Above 250°F"],
    correct: 0,
    reasoning: "Above 1000°F is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24280,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Can the solvent cement specified for use with one type of plastic pipe be used with another type of plastic pipe?",
    options: ["Yes","Yes, as long as it has a complete bead","No"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, No is required for proper venting in Intro to Gas Appliances applications.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24281,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "basic",
    question: "One method of measuring pipe length is to measure the pipe from end to centre.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, True is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24282,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "How shall the gas pressure requirements for an appliance be determined?",
    options: ["Pipe sizing tables","Provincial regulations","Appliance rating plate or from the appliance manufacturer"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Section 7 - Appliances, Appliance rating plate or from the appliance manufacturer is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24283,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "How shall the volume of gas to an appliance be determined?",
    options: ["From either the rating plate or the appliance manufacturer","By the size of the piping system the appliance is connected to","According to provincial regulations"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, From either the rating plate or the appliance manufacturer is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24284,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "May a vented appliance be connected with a hose?",
    options: ["Yes","No"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, No is required for proper venting in Intro to Gas Appliances applications.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24285,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "May a connector be used to connect a mobile home?",
    options: ["Yes, where the mobile home is not on a permanent foundation","No"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Yes, where the mobile home is not on a permanent foundation is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24286,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What are the pressure test requirements for a 250 ft (76 m) natural gas piping system with a working pressure of 2 psig?",
    options: ["15 psig for 30 minutes","15 psig for 60 minutes","60 psig for 15 minutes"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Section 7 - Appliances, 15 psig for 60 minutes is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24287,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the required test pressure of a propane piping system 50 ft long with a working pressure of 10 psig?",
    options: ["50 psig for 60 minutes","50 psig for 180 minutes","15 psig for 180 minutes"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Section 7 - Appliances, 50 psig for 60 minutes is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24288,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the minimum diameter gauge that can be used for pressure testing?",
    options: ["3 inches (75 mm)","2 inches (50 mm)","4 inches (100 mm)"],
    correct: 0,
    reasoning: "3 inches (75 mm) is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24289,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What should be done immediately after opening the gas valve at the gas meter?",
    options: ["Listen for the gas flow to stop and monitor the gas meter test dial","Test fire the gas appliance and check the input","Ventilate by opening a window allowing any gas to escape during the purging process"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Listen for the gas flow to stop and monitor the gas meter test dial is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24290,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "How can a leak be located?",
    options: ["By providing a lit taper at each joint and looking for a small flame","By watching the meter for movement","By wiping each joint in the system with a leak detecting solution (i.e., soap and water)"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, By wiping each joint in the system with a leak detecting solution (i.e., soap and water) is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24291,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What personal information must the gas technician/fitter place on the test tag after testing is complete?",
    options: ["Name, certification number, and classification","Contractors registration and company name","Name, address and phone number of gas technician"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Name, certification number, and classification is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24292,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What type of gas cock must be placed within 5 ft of the purge point?",
    options: ["One with ¼ turn lever handle","One with a 'dead man' valve","A lubricated 1/4 turn valve"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, One with ¼ turn lever handle is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24293,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the maximum input of a propane appliance that may be purged at the pilot outlet of the appliance control valve?",
    options: ["125,000 Btu/h","45,000 Btu/h","400,000 Btu/h"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, 45,000 Btu/h is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24294,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is acceptable to the authority having jurisdiction?",
    options: ["Approved","Certified","Endorsed","Validated"],
    correct: 0,
    reasoning: "Approved is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24295,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is a primarily vertical shaft that encloses at least one flue for conducting flue gases outdoors?",
    options: ["Vent","Chimney","Stack","Flue"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Chimney is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24296,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is a device, either adjustable or non-adjustable, for controlling and maintaining, within acceptable limits, a uniform outlet pressure?",
    options: ["Flow regulator","Pressure regulator","Gas valve","Control valve"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Section 7 - Appliances, Pressure regulator is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24297,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "basic",
    question: "True or False: A venting system removes flue gases to the outdoors by means of a chimney, vent connector vent, or a natural or mechanical exhaust system.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, True is required for proper venting in Intro to Gas Appliances applications.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24298,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Which of the following describes a continuous pilot?",
    options: ["A pilot that is automatically lighted each time there is a call for heat, and that is cut off automatically at the end of the trial-for-ignition period of the main burner","A pilot that burns without turndown throughout the entire time the burner is in service, whether the main burner is firing or not","A pilot that is automatically lighted each time there is a call for heat, and that burns during the entire period that the main burner is firing"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, A pilot that burns without turndown throughout the entire time the burner is in service, whether the main burner is firing or not is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24299,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "basic",
    question: "True or False: An enclosed structure is the entire building in which an appliance is installed.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, False is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24300,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "advanced",
    question: "Where can you determine the volume of gas to be used for sizing pipe systems to an appliance?",
    options: ["The appliance rating plate or the appliance manufacturer","The back of the Codebook","In the Regulation"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Section 7 - Appliances, The appliance rating plate or the appliance manufacturer is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24301,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Can a gas pipe be supported by another gas pipe?",
    options: ["Yes, if it is a smaller diameter","Yes, if it is a larger diameter","No"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, No is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24302,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the minimum depth of cover required on an underground gas line for residential installations?",
    options: ["12 inches (300 mm)","15 inches (400 mm)","18 inches (450 mm)","24 inches (610 mm)"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, 15 inches (400 mm) is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24303,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the minimum depth of cover required on an underground gas line for commercial driveways?",
    options: ["15 inches (400 mm)","18 inches (450 mm)","24 inches (610 mm)","30 inches (760 mm)"],
    correct: 2,
    reasoning: "24 inches (610 mm) is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24304,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the minimum clearance required for each side of a commercial clothes dryer and the combustible material?",
    options: ["12 inches (300 mm)","18 inches (450 mm)","24 inches (610 mm)","48 inches (1200 mm)"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, 18 inches (450 mm) is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24305,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the minimum clearance required above a central furnace?",
    options: ["1 inch (25 mm)","6 inches (150 mm)","12 inches (300 mm)","24 inches (600 mm)"],
    correct: 0,
    reasoning: "1 inch (25 mm) is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24306,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the minimum clearance required at the front of a central furnace?",
    options: ["6 inches (150 mm)","12 inches (300 mm)","18 inches (450 mm)","24 inches (600 mm)"],
    correct: 3,
    reasoning: "24 inches (600 mm) is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24307,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What type of room heater is allowed in a bathroom?",
    options: ["Direct-vent type","Ventless","Electric only"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Direct-vent type is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24308,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the minimum clearance required at the front of a swimming pool heater?",
    options: ["18 inches (450 mm)","24 inches (610 mm)","36 inches (900 mm)","48 inches (1200 mm)"],
    correct: 3,
    reasoning: "48 inches (1200 mm) is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24309,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "In which tables of the Propane Storage and Handling Code can the maximum filling density of a propane tank be found?",
    options: ["Tables C2 and C3","Tables 7.1 and 7.2","Tables 7.3 and 7.4"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Tables 7.1 and 7.2 is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24310,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What are the installer's responsibilities towards the user before he or she leaves an installation?",
    options: ["Shall instruct the user in the safe and correct operation of all appliances or equipment installed","Shall advise the user the instructions have been left with the appliance","Shall instruct the user to read the manufacturers literature while the installation is being completed"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Shall instruct the user in the safe and correct operation of all appliances or equipment installed is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24311,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What Standard must meter and service regulator installations be in accordance with?",
    options: ["CSA Z662","CSA B149.1","CSA B149.2","CSA B149.3"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, CSA Z662 is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24312,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "basic",
    question: "True or False: A furnace or water heater needs to be certified specifically for use within a mobile home if the home has been placed in a permanent location.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, False is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24313,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Who is responsible for inspecting and determining whether a used appliance is suitable for continued use?",
    options: ["The installer","The homeowner","The manufacturer","The fuel supplier"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, The installer is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24314,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What are the minimum dimensions of an access opening to a space containing a gas appliance?",
    options: ["18 x 18 in (450 x 450 mm)","24 x 24 in (610 x 610 mm)","24 × 30 in (610 × 760 mm)","30 x 30 in (760 x 760 mm)"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, 24 × 30 in (610 × 760 mm) is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24315,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What is the minimum distance an appliance burner may be located from the floor of a repair garage?",
    options: ["18 inches (450 mm)","24 inches (610 mm)","36 inches (900 mm)","4.5 ft (1400 mm)"],
    correct: 3,
    reasoning: "4.5 ft (1400 mm) is defined in CSA B149.1-25, Section 7 - Appliances as a fundamental principle in Intro to Gas Appliances.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24316,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What must be done with a defective heat exchanger of a furnace?",
    options: ["It shall be replaced","It should be patched","It should be welded"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, It shall be replaced is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24317,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What are the controls necessary for two or more appliances with self-energizing pilots?",
    options: ["Each installed separately with separate thermostats","Installed with one thermostat to control all of the appliances"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Each installed separately with separate thermostats is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24318,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Where would you find requirements governing the construction of chimneys?",
    options: ["Applicable UL Canada Standard","Applicable CSA Group Standard","National Energy Code of Canada for Buildings (NECB)","National Building Code of Canada (NBCC)"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, National Building Code of Canada (NBCC) is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24319,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What legal document is the least specific but contains the most powerful set of rules?",
    options: ["A Regulation","An Act","A Code"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, An Act is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24320,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "What regulates Manufacturer's instructions?",
    options: ["The Act","Standards","Regulations","Codes"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Standards is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24321,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Are the appliance manufacturer's installation instructions legal documents?",
    options: ["Yes","No"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Yes is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  {
    id: 24322,
    unit: 9,
    unitName: "Intro to Gas Appliances",
    difficulty: "intermediate",
    question: "Which of the following best describes due diligence?",
    options: ["Knowing and Understanding all of the Regulations before working in the industry","Knowing who the local TSSA Inspector is and advising him/her of ongoing work","Actions that are reasonable in the circumstances expected from a reasonable person"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Appliances, Actions that are reasonable in the circumstances expected from a reasonable person is the correct requirement in Intro to Gas Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Appliances"
  },
  // ========================================
  // UNIT 10 - ADVANCED PIPING AND TUBING SYSTEMS - NEW QUESTIONS (460 Questions)
  // ========================================
  {
    id: 24323,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Only plastic pipe can be used for liquid propane.",
    options: ["True","False","Only if coated with oxide","PVC pipe only"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24324,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "What is the equivalent length in feet and inches of a four inch forged tee?",
    options: ["Two feet and one inch","Five feet and four inches","Fifteen feet one inch","Fifteen feet"],
    correct: 2,
    reasoning: "Fifteen feet one inch is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24325,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Schedule 80 piping is required on a C3H8 system?",
    options: ["For propane vapour under 125PSIG working pressure","Whenever two different types of material are to be connected together","When installed below grade","For propane vapour over 125 PSIG working pressure"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, For propane vapour over 125 PSIG working pressure is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24326,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "When sizing a branch line what is the maximum size of a job fabricated welded fitting that can be used on a ten inch supply header?",
    options: ["5\" NPT","½ \"NPT","¾ NPT","Any size can be used"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, 5\" NPT is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24327,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When is it necessary to purge a gas line?",
    options: ["Is it not necessary","Always","Only if the branch line is over 4\"NPT","Only if the working pressure is 7\"wc"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Always is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24328,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is a method of testing gas pipe?",
    options: ["A pressure test using air or inert gas","Radiographic","Liquid dye","A, B & C"],
    correct: 3,
    reasoning: "A, B & C is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24329,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What are two gases used by a welder for cutting steel pipe?",
    options: ["Oxygen & Acetylene","Oxygen & Nitrogen","Propane & Nitrogen","Oxygen & Propane"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Oxygen & Acetylene is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24330,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What type of valve is used on the Oxy-acetylene hoses to ensure the gas does not mix?",
    options: ["Ball Valves","Reverse single flow check valves","Reverse flow check valves","Forward flow check valves"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Reverse flow check valves is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24331,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When welding a fitting to a pipe, what is the first weld called?",
    options: ["First pass","Primary pass","Root pass","Preliminary pass"],
    correct: 2,
    reasoning: "Root pass is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24332,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "The electrical service supplied to a building is measured in what units?",
    options: ["Amps","Volts","Load requirements","Watts"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Amps is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24333,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which of the following is not part of an electrical distribution system?",
    options: ["A distribution panel","Wire conductors","An electric meter","Fuses or circuit breakers","Control relays"],
    correct: 4,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Control relays is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24334,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What effect would an increase in current flow through a conductor have on the magnetic field around a conductor?",
    options: ["No effect","The magnetic field decreases","The magnetic field increases"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, The magnetic field increases is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24335,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Of the following, which wire would have the smallest diameter?",
    options: ["AWG 10","AWG 12","AWG 18","AWG 14"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, AWG 18 is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24336,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Of the following, which wire would be rated to carry the most current?",
    options: ["AWG 10","AWG 12","AWG 18","AWG 14"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, AWG 10 is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24337,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which of the following wires is rated for use on a 15 amp circuit?",
    options: ["AWG 16","AWG 18","AWG 14","AWG 35"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, AWG 14 is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24338,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the unit of measurement for resistance?",
    options: ["The unit of measurement is the Ampere (A)","The unit of measurement is the Volt (V)","The unit of measurement is the Ohm (Ω)"],
    correct: 2,
    reasoning: "The unit of measurement is the Ohm (Ω) is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24339,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Where an appliance is located in an enclosure such as a furnace room with a door and is able to communicate through openings to a structure that is not air tight (neither constructed as described in Clause 8.2.1 (a) nor complies with 8.2.1 (b) what clause is used to size the openings?",
    options: ["8.2.6 (a) (b)","8.31","8.15","None of the above"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 8.2.6 (a) (b) is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24340,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "According to Clause 8.2.6, where an appliance is located in an enclosure such as a furnace room with a door and is able to communicate through openings to a structure that is not air tight (neither constructed as described in Clause 8.2.1 (a) nor complies with 8.2.1 (b) what size do the openings need to be?",
    options: ["1 sq in per 1000 Btuh of the total input of all appliances","10 sq in per 1000 Btuh of the total input of all appliances","1 sq in per 14,000 Btuh of the total input of all appliances","1 sq in per 7000 Btuh of the total input of all appliances"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 1 sq in per 1000 Btuh of the total input of all appliances is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24341,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "According to clause 8.2.1 what would be considered the maximum negative building pressure that a draft hood equipped appliance could be subjected to?",
    options: ["-10 Pa","-15 Pa","-20 Pa","-4 Pa"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, -10 Pa is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24342,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What would be the required size of air supply opening for a single 50,000 Btu/h water heater where there are no other appliances requiring an air supply?",
    options: ["7","0","4","40"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 0 is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24343,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A combination oil/gas fired appliance must be vented using:",
    options: ["Single wall vent connectors","Type B vent","Type BH vent","Type L vent"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Type L vent is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24344,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A manually operated flue damper in a residential dwelling:",
    options: ["Requires a proof of closure switch","Must be interlocked with the main gas valve","Requires an alarm circuit in the event of accidental closure","Cannot be used"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Cannot be used is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24345,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A fast closing valve is?",
    options: ["A pressure relief valve installed in a liquid propane line","A valve that is normally closed and allows flow in only one direction","An automatic valve that has a closing time of less than 5 seconds upon energizing","An automatic valve that has a closing time of less than 5 seconds upon being de-energized"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, An automatic valve that has a closing time of less than 5 seconds upon being de-energized is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24346,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "The pressure relief device on a boiler 400,000 Btu/hr or less shall have a discharge pipe of a size at least?",
    options: ["½\" in diameter","¾\" in diameter","1\" in diameter","At least the nominal size of the device outlet"],
    correct: 3,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, At least the nominal size of the device outlet is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24347,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "In a residential application, propane vapour pressure in either a piping or tubing system between the first-stage and second-stage regulator shall not be higher than what pressure?",
    options: ["2 psig (14 kpa)","10 psig (70 kpa)","5 psig (35 kpa)","20 psig (140 kpa)"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, 10 psig (70 kpa) is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24348,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When a pool heater is installed, it shall be the responsibility of the owner of the heater to provide maintenance for the heater in accordance with the manufacturer's instructions, but in no case less than _______ annually",
    options: ["Once","Twice","Bi-annually","Only when heater requires service"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Once is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24349,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "An appliance installed in a dwelling unit shall not be connected to a flue serving?",
    options: ["A liquid fueled appliance","Another gas fuelled appliance","A solid fueled appliance","Appliances are not allowed to be vented into a flue"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, A solid fueled appliance is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24350,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A draft hood shall not be used on an appliance with _______ draft",
    options: ["Exhaust","Negative over fire","Neutral over fire","Positive over fire"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Positive over fire is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24351,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When an existing indoor swimming gas fired pool heater is being replaced with a new gas heater, the new finned tube heater shall be?",
    options: ["Of the direct vent type","Of the natural draft type","Of the power vented type","New finned tube pool heaters are not allowed to be installed indoors"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, New finned tube pool heaters are not allowed to be installed indoors is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24352,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "The gas supply to underground plastic piping or tubing shall be controlled by?",
    options: ["A solenoid valve controlled by the gas utility","A control valve energized by the furnace","A shut off valve situated below grade","A shut off valve situated above ground"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, A shut off valve situated above ground is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24353,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "The minimum clearance between an appliance installed on a roof and the edge of the roof shall be?",
    options: ["3 feet","6 feet","10 feet","15 feet"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 6 feet is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24354,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When using a vertical piping chase around gas piping, the chase shall have an opening at the top and bottom, the opening shall have a minimum area equivalent to a round opening of _______ inch in diameter",
    options: ["1\"","1 ½\"","2\"","3\""],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 2\" is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24355,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A manually operated flue damper shall not be used with?",
    options: ["A residential appliance","A commercial appliance","An Industrial appliance","A power vented appliance"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, A residential appliance is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24356,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A Category 4 appliance is:",
    options: ["An appliance that operates with a positive vent static pressure, and with a flue loss less than 17%","An appliance that operates with a non-positive vent static pressure, and with a flue loss not less than 17%","An appliance that operates with a non-positive vent static pressure and with a flue loss less than 17%","An appliance that operates with a positive vent static pressure and with a flue loss not less than 17%"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, An appliance that operates with a positive vent static pressure, and with a flue loss less than 17% is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24357,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which type of draft is produced by a device upstream of the appliance combustion zone?",
    options: ["Forced draft","Induced draft","Atmospheric draft","Gravity draft"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Forced draft is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24358,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A 'quick disconnect' device is?",
    options: ["An emergency shut off to control all gas supplied to the building","A solenoid that is fast closing","A flare nut type fitting on a gas line","A hand operated device providing connection and disconnection means for an appliance to the gas supply"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, A hand operated device providing connection and disconnection means for an appliance to the gas supply is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24359,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Where is the fan located in the 'forced draft burner' appliance?",
    options: ["Upstream of the combustion zone","Downstream of the combustion zone","In the heat exchanger","In the pulse combustion burner"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Upstream of the combustion zone is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24360,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Where is the fan located in the 'induced draft burner' appliance?",
    options: ["Upstream of the combustion zone","Downstream of the combustion zone","In the heat exchanger","In the pulse combustion burner"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Downstream of the combustion zone is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24361,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "The statement that best describes a continuous pilot is?",
    options: ["The pilot is lit each time there is a call for heat, and remains lit during the entire call for heat.","The pilot is lit each time there is a call for heat, and cuts off at the end of the main burner proving period.","The pilot is on all the time, on a call for heat the pilot expands in size to reliably light burner","The pilot is on all the time, and remains the same size"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, The pilot is on all the time, and remains the same size is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24362,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "The statement that best describes an intermittent pilot is?",
    options: ["The pilot is lit each time there is a call for heat, and remains lit during the entire call for heat.","The pilot is lit each time there is a call for heat, and cuts off at the end of the main burner proving period.","The pilot is on all the time, on a call for heat the pilot expands in size to reliably light the burner.","The pilot is on all the time and remains the same size."],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, The pilot is lit each time there is a call for heat, and remains lit during the entire call for heat. is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24363,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "The statement that best describes an interrupted pilot is?",
    options: ["The pilot is lit each time there is a call for heat, and remains lit during the entire call for heat.","The pilot is lit each time there is a call for heat, and cuts off at the end of the main burner proving period.","The pilot is on all the time, on a call for heat the pilot expands in size to reliably light the burner.","The pilot is on all the time and remains the same size"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, The pilot is lit each time there is a call for heat, and cuts off at the end of the main burner proving period. is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24364,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the proper test pressure and duration for a gas piping system with 150' longest measured run with a system supply pressure of 7\" water column?",
    options: ["15 psi for 60 minutes","20 psi for 30 minutes","15 psi for 15 minutes","50 psi for 60 minutes"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, 15 psi for 15 minutes is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24365,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When an appliance is converted from one gas to another what must the installer do?",
    options: ["Call Ministry of Appliance Conversions","Mark the new type of gas being used on the rating plate","Notify the utility","Notify the appliance manufacturer"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Mark the new type of gas being used on the rating plate is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24366,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Plastic piping and tubing may currently only be used for?",
    options: ["Low pressure propane lines","Gas supply piping inside a residence only","Outdoor, underground use","Supply piping to pool heaters"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Outdoor, underground use is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24367,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which of the following appliances must have a dirt pocket installed on them?",
    options: ["Gas log","Range","Clothes dryer","Water heater"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Water heater is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24368,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Piping installed underground cannot be less than ____\" in diameter",
    options: ["3/8\"","½\"","¾\"","¼\""],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, ½\" is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24369,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which of the following fittings cannot be used on a gas piping system?",
    options: ["street elbow","reducing coupling","bushing","reducing elbow"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, reducing elbow is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24370,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "The B149.1 Natural Gas and Propane Installation Code does not apply to:",
    options: ["Industrial gas piping installations","Appliances installed in a commercial building","Propane supply piping from the distributors tank to the second stage regulator","Utility pipeline distribution or transmission lines"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Utility pipeline distribution or transmission lines is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24371,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When installing gas burning appliances in a mobile home what Code applies?",
    options: ["CAN/CSA B149.1","CGA F566","CSA B837","CAN/CSA Z240.4.1"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, CAN/CSA Z240.4.1 is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24372,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Tubing installed in hollow walls or partitions must be protected from physical damage with # ____ GSG plates or sleeves",
    options: ["14","10","28","16"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 16 is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24373,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A light used for searching for gas leakage shall be:",
    options: ["Class 1, group C","Class 2, group C","Class 1, group A","Class 1, group D"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Class 1, group D is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24374,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When using a gauge to perform pressure testing of a gas piping system, the gauge shall be:",
    options: ["2\" in diameter, maximum range of shall exceed the test pressure by at least 15% but not more than 300%.","3\" in diameter, maximum range of shall exceed the test pressure by at least 15% but not more than 300%","3\" in diameter, maximum range of test pressure shall not exceed the test pressure by at least 15% but not more than 200%","3\" in diameter, reading in 1 PSI increments."],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, 3\" in diameter, maximum range of shall exceed the test pressure by at least 15% but not more than 300% is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24375,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "What table would be used to calculate combustion air sizing for appliances having draft control devices, when the combined input is up to and including 400,000 Btu, and the structure does not comply with clause 8.2.1 (a) or (b).",
    options: ["Table 8.1","Table 8.2","Table 8.3","Table 8.4"],
    correct: 2,
    reasoning: "Table 8.3 is calculated according to the requirements in CSA B149.1-25, Section 6 - Advanced Piping. This calculation ensures proper system sizing and safe operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24376,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What must be provided when a hose is used to transfer liquid propane from one container to another?",
    options: ["Shut off valve","Hydrostatic relief valve","Vapourizer","Excess flow valve"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Hydrostatic relief valve is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24377,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the minimum distance a gas service regulator outlet must terminate from an appliance vent?",
    options: ["10'","6'","1'","3'"],
    correct: 3,
    reasoning: "3' is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24378,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How much pressure drop is allowed for a natural gas tubing system (using copper), when using 5 PSI supply pressure?",
    options: ["1 PSI","1.5 PSI","2 PSI","2.5PSI"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, 1 PSI is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24379,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "An intermittent pilot is:",
    options: ["A pilot that is lit each time there is a call for heat and that burns during the entire period the main burner is firing","A pilot that is lit each time there is a call for heat and that is cut off automatically at the end of the trial for ignition period of the main burner.","A pilot that burns without turndown throughout the entire time the burner is in service, whether the main burner is firing or not","A pilot flame supervised by a primary safety control that senses the presence of the pilot prior to gas being admitted to the main burner"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, A pilot that is lit each time there is a call for heat and that burns during the entire period the main burner is firing is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24380,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Who is responsible for ensuring that the manufacturers installation instructions are left with the end user?",
    options: ["The appliance manufacturer","The distributor","The TSSA inspector","The installer"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, The installer is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24381,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A room heater installed in a bathroom shall be?",
    options: ["Direct vent type","Power vent type","Power burner type","Conventional vent type"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Direct vent type is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24382,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the function of the dip tube?",
    options: ["To deliver incoming cold water to the bottom of the storage tank as hot water is being used.","To deliver hot water to the system as required.","To deliver incoming cold water to the top of the storage tank as hot water is being used.","To deliver cold water to be mixed with the hot water in the storage tank."],
    correct: 0,
    reasoning: "To deliver incoming cold water to the bottom of the storage tank as hot water is being used. is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24383,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Name the device that response to changes in water temperature?",
    options: ["Pressuretrol","Aquastat","Thermistor","Thermostat"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Aquastat is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24384,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A range burner with a control valve located at the rear of the range shall not be installed unless:",
    options: ["The valve is readily accessible","The valve is readily inaccessible","The valve is rated for excessive temperatures","The valve is of the lubricated plug type"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, The valve is readily accessible is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24385,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When a flexible metal connector is used to connect the domestic appliance to rigid piping, where shall a shutoff valve be installed in the piping system?",
    options: ["Immediately upstream of the flexible connector","Immediately downstream of the flexible connector","Immediately downstream of the appliance regulator","A shut off valve s not required when using a flexible connector"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Immediately upstream of the flexible connector is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24386,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Dryer exhaust ducts must not be screwed together.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24387,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Sections of moisture exhaust duct on a dryer are held together using:",
    options: ["Locking bands","Duct tape.","Metal screws.","Wire mesh."],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Duct tape. is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24388,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A moisture exhaust duct on a residential dryer and a service regulator must be a minimum distance of:",
    options: ["36 inches apart","12 inches apart","48 inches apart","24 inches apart"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 36 inches apart is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24389,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A pool heating appliance installed outdoors at grade level shall be placed on a base of poured concrete or reinforced concrete slab, extending at least?",
    options: ["6\" beyond all sides of the appliance","3\" beyond all sides of the appliance","1\" beyond all sides of the appliance","12\" beyond all sides of the appliance"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 6\" beyond all sides of the appliance is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24390,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A moisture exhaust duct must terminate at least ____ feet from a service regulator",
    options: ["6'","3'","10'","1'"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 3' is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24391,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Propane is a?",
    options: ["Manufactured gas","Hydrocarbon","Naptha fuel","Distillate fuel"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Hydrocarbon is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24392,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "True or False: A pressure test is performed after the appliance is installed.",
    options: ["True","False"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, False is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24393,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Before the appliances are connected, the system shall be pressure tested using:",
    options: ["Air or inert gas","Air or soap solution","Inert gas or soap solution"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, Air or inert gas is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24394,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When would you perform a soap test?",
    options: ["After every service call","When a leak is indicated by a drop in pressure","Any time the gas supply is turned on"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, When a leak is indicated by a drop in pressure is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24395,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What must be done to piping or tubing passing through concrete?",
    options: ["It must be sleeved, coated, or double-wrapped","It should be welded","It should be painted yellow"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, It must be sleeved, coated, or double-wrapped is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24396,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "May a sleeve installed in pavement to allow free movement of the pipe also serve as a vent pipe inspection point?",
    options: ["Yes","No"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, No is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24397,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What colour is used to identify gas piping or tubing?",
    options: ["Red","Blue","Yellow","Green"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Yellow is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24398,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When identifying piping or tubing with banding or labels marked 'gas' or 'propane', what is the maximum identification interval permitted?",
    options: ["30 ft","20 ft","35 ft","25 ft"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 20 ft is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24399,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A manual shut-off valve shall be of what type, and certified for its intended purpose?",
    options: ["Butterfly, eccentric, or ball type","Eccentric, plug, or butterfly type","Plug, ball, or eccentric type"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Plug, ball, or eccentric type is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24400,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How must multiple outlets that are installed in a laboratory (school or other) be protected from leaking gas into the area accidentally?",
    options: ["A clearly marked, readily accessible, master shut-off valve","A solenoid valve interlocked with a gas sensor","By a sign in the classroom identifying gas is present in the room"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, A clearly marked, readily accessible, master shut-off valve is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24401,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What are the requirements for joints in steel piping used in gas systems?",
    options: ["Compression fittings","Threaded, flanged or welded","Joints properly sealed with paint"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Threaded, flanged or welded is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24402,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which of the following is not an appropriate gasket material for gas applications?",
    options: ["Natural rubber","Neoprene","Nitrile"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Natural rubber is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24403,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which of the following is not a major welding hazard to workers in the vicinity of welding operations?",
    options: ["Physical","Chemical","Environmental","Ergonomic"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Ergonomic is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24404,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What type of radiation do x-rays and gamma rays produce?",
    options: ["Ionizing","Non-ionizing"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Ionizing is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24405,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What are the adverse effects from ultraviolet radiation produced by arc welding?",
    options: ["Hearing loss","Burns to eyes and skin from a reflection off bright objects","Burns to eyes and skin from hot metal and sparks"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Burns to eyes and skin from a reflection off bright objects is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24406,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "After welding is completed in an area where combustible material is present, how long should a 'fire watch' be maintained?",
    options: ["At least 30 minutes","4 hours","24 hours"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, At least 30 minutes is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24407,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What type of protective glove should be worn when performing welding work?",
    options: ["Knitwrist-type","Slip-on-type","Gauntlet-type","Safety cuff-type"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Gauntlet-type is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24408,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "True or False: Pants with cuffs should always be worn while performing welding work.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24409,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What should you never do while working with oxygen and acetylene?",
    options: ["Repair a faulty cylinder","Keep oxy-acetylene equipment away from oil or grease","Use the cylinder in a vertical position","Test for leaks using a soap test"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Repair a faulty cylinder is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24410,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What should be done if welding is taking place in a confined area?",
    options: ["Ensure adequate ventilation","Wear a mask","Wear gloves"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Ensure adequate ventilation is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24411,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How many air changes per hour are required in a welding shop?",
    options: ["One","Two","Four"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Four is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24412,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "With what are oxygen and acetylene cylinders fitted to minimize the possibility of explosion in case of fire?",
    options: ["Shut off valves","Fusible plugs","Regulators"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Fusible plugs is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24413,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "To what angle should pipe be beveled if it is to be welded?",
    options: ["Approximately 37 1/2°","Approximately 45°","Approximately 22 1/2°"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Approximately 37 1/2° is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24414,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When the pipe and fittings are set up for welding, how wide is the root gap?",
    options: ["1/8 inch to 1/4 inch","3/8 inch to 1/2 inch","1/16 inch to 1/8 inch"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 1/16 inch to 1/8 inch is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24415,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When plastic gas piping is used underground, what minimum gauge copper wire is taped along the piping for tracing purposes?",
    options: ["14 gauge","12 gauge","16 gauge","10 gauge"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 12 gauge is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24416,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Who is responsible for piping downstream of a gas utility meter?",
    options: ["Property or building owner","Fuel supplier","Installer"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Property or building owner is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24417,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Coatings on underground steel pipe are made of what material?",
    options: ["Fusion Bonded Epoxy","Polyethylene","Coal Tar Enamel","Asphalt Enamel"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Polyethylene is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24418,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What colour are the coatings on underground steel pipe?",
    options: ["Green or yellow","Blue or green","Yellow or blue"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Yellow or blue is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24419,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "True or False: Most non-utility gas piping and tubing operate aboveground.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24420,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which of the following is not one of the three options for identifying gas piping or tubing?",
    options: ["The entire piping or tubing system shall be painted yellow","The piping or tubing system shall be provided with yellow banding","The piping or tubing system shall be labelled or marked 'GAS' or 'PROPANE'","The piping or tubing system shall be provided with red banding"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, The piping or tubing system shall be provided with red banding is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24421,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "For supply piping systems carrying pressures _____ and over, you must identify and label the supply pressure.",
    options: ["2 psi","4 psi","6 psi","8 psi"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, 4 psi is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24422,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "True or False: The CSA B149.1 Gas Code does not require the identification of gas piping in a residence.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24423,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What are the final blueprint drawings used to locate and identify piping called?",
    options: ["As-built drawings","Ladder drawings","Installation drawings"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, As-built drawings is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24424,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the surest way to identify the contents of a sealed pipe?",
    options: ["Tap on it","Trace it back to its source","X-ray it"],
    correct: 1,
    reasoning: "Trace it back to its source is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24425,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "If there is a discrepancy between the specifications and the drawings, which one is taken to be correct?",
    options: ["Specifications","Drawings"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Specifications is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24426,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How much of the manufacturer's installation and service manual should you read?",
    options: ["Just the final startup and commissioning page","Should already know it","All of it"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, All of it is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24427,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Do the installation and service manuals supplied by the manufacturer always specify details of replacement parts?",
    options: ["Yes","No"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, No is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24428,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "The two ways that manual valves are joined to the gas piping systems are:",
    options: ["Threaded or flanged","Flanged or soldered","Soldered or threaded"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Threaded or flanged is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24429,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which of the following is not a function of an automatic valve?",
    options: ["Control the firing of the burner","Open or energize when the controller calls for the burner to 'ignite'","Act as a safety shut-off valve"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Open or energize when the controller calls for the burner to 'ignite' is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24430,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Describe the function of a solenoid valve.",
    options: ["Control the burner without anyone being present","Interlocks with a gas sensor to prevent gas leaks","Energize (open) on a call for heat and de-energize (close) when the heat demand is satisfied"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Energize (open) on a call for heat and de-energize (close) when the heat demand is satisfied is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24431,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "True or False: The reasons for having separate sizing tables for natural gas and propane fuels are because of the differing properties as gases.",
    options: ["True","False"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, True is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24432,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "With what would you purge a pipe sized 4 inches or over, if it has been tested with air?",
    options: ["Carbon dioxide or nitrogen or a mixture of both","Nitrogen or Radon or a mixture of both","Radon or carbon dioxide or a mixture of both"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Carbon dioxide or nitrogen or a mixture of both is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24433,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What can occur when purging is not carried out correctly?",
    options: ["The wrong gas could enter the pipe","The accidental explosion of a gas-air mixture outside and inside the pipe","There could be a blockage in the pipe that goes undetected"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, The accidental explosion of a gas-air mixture outside and inside the pipe is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24434,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Is it acceptable to purge a new gas line through the burner system into a combustion chamber?",
    options: ["Yes, if the building is vacant","No"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, No is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24435,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Why is it important to purge the air out of larger diameter pipes with an inert gas prior to the fuel gas being introduced into the pipe?",
    options: ["So there will be no air in the pipe to support combustion","To prevent the mercaptan from being washed out of the gas when introduced into the pipe for the first time","To ensure the gas will ignite properly when turned on for the first time"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, So there will be no air in the pipe to support combustion is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24436,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is an alternative to completely purging long, large pipes with nitrogen?",
    options: ["Air-purging","Slug-purging","Fuel gas to fuel gas purging"],
    correct: 1,
    reasoning: "Slug-purging is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24437,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Where can you find the requirements for safe rigging work practices in Canada?",
    options: ["B149.1 Natural gas and propane installation code","TSSA Guidelines","Provincial or Territorial OHS acts and regulations"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Provincial or Territorial OHS acts and regulations is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24438,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which of the following describes an asymmetrical load?",
    options: ["An object with a high center of gravity due to the object's long shape and/or composition","An object with an off-center center of gravity due to the object's irregular shape and/or composition","An object with a low center of gravity due to the object's long shape and/or composition"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, An object with an off-center center of gravity due to the object's irregular shape and/or composition is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24439,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which of the following describes a symmetrical load?",
    options: ["An object that, because of its uniform shape and composition, has its center of gravity located exactly in its middle","An object that, because of its odd shape and composition, has its center of gravity located off center"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, An object that, because of its uniform shape and composition, has its center of gravity located exactly in its middle is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24440,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the correct weight for a concrete block, 9 feet long x 3 feet wide x 5 feet high, at 150 lbs/cu ft?",
    options: ["Block weight = 120 cu ft x 150 lbs/cu ft = 18,000 lbs","Block weight = 130 cu ft x 150 lbs/cu ft = 19,500 lbs","Block weight = 135 cu ft x 150 lbs/cu ft = 20,250 lbs"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Block weight = 135 cu ft x 150 lbs/cu ft = 20,250 lbs is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24441,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "While performing Pre-Use Inspection you discover the wire rope sling shows signs of localized wear, abrasion or scraping. Is the sling safe to use and why?",
    options: ["Yes, as long as it appears to be strong enough to support the load - In order to stay on schedule with the project","No, it is not safe to use - Slings must be removed from service when any substandard conditions exist"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, No, it is not safe to use - Slings must be removed from service when any substandard conditions exist is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24442,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When a wire rope sling is used in a basket hitch, what is the ratio used to determine the loss of strength or efficiency?",
    options: ["D/d Ratio","R/d Ratio","D/r Ratio"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, D/d Ratio is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24443,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which type of sling can be used safely in explosive atmospheres?",
    options: ["Vinyl covered steel cable sling","Fabric sling","Synthetic sling"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Synthetic sling is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24444,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When using a chain for overhead lifting, what alloy grade is recommended?",
    options: ["Either grade 80 or 100 is recommended","Either grade 50 or 100 is recommended","Any chain that is heavy steel"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Either grade 80 or 100 is recommended is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24445,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How often should hooks be inspected?",
    options: ["Before and after each use","Before and frequently during use","Weekly","Annually"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Before and frequently during use is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24446,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What should you do if your inspection reveals a small gouge in the hook?",
    options: ["Inform your supervisor and use the hook","Repair the gouge","Nothing, a small gouge won't affect the hook","Remove from service"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Remove from service is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24447,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What are three common shackles used in rigging and hoisting operations?",
    options: ["Snap, wide body, and bolt type","Wide body, screw, and snap type","Bolt, screw, and snap type","Screw, wide body, and bolt type"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Screw, wide body, and bolt type is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24448,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "If a regulator is installed backwards in a piping system, what is the most likely result?",
    options: ["The regulator will open completely","The regulator will close completely","Pressure downstream will rise above set point","No difference. They are non-directional valves"],
    correct: 1,
    reasoning: "The regulator will close completely is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24449,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the purpose of a reference tube connected to the combination gas valve regulator vent?",
    options: ["Supply the pilot gas flow","Activate the combustion fan pressure switch","Vent the upper diaphragm chamber into the combustion chamber","Enable the regulator to automatically adjust for pressure changes in the burner enclosure"],
    correct: 3,
    reasoning: "Enable the regulator to automatically adjust for pressure changes in the burner enclosure is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24450,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the maximum allowed propane pressure in a single-family dwelling?",
    options: ["7\" WC","14\" WC","2 psig","5 psig"],
    correct: 2,
    reasoning: "2 psig is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24451,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "True or False: A zero governor is designed to deliver gas at zero pressure in proportion to the suction pressure created by mechanical air flow to a premix burner.",
    options: ["True","False"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, True is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24452,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What type of regulator arrangement is required in all permanent propane installations?",
    options: ["Two stage regulation","Proportioning regulation","Zero governor regulation","Balance diagram regulation"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Two stage regulation is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24453,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "True or False: Gas flow will be interrupted by changing a propane cylinder if an automatic changeover regulator is used on the installation.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24454,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Of commonly used overprotection methods which gives the least obvious failure warning?",
    options: ["Pressure limiting","Automatic shut-off","Internal relief valve","External relief valves"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Pressure limiting is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24455,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What would happen if a regulator vent became blocked while the regulator was in the open position?",
    options: ["Regulator would close","Regulator would remain open","Regulator would operate normally","Regulator setpoint would slowly drop"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Regulator would remain open is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24456,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What are the minimum and maximum allowed set pressures for a line relief device installed on a 2 psi piping system?",
    options: ["Minimum of 2 psi and a maximum of 4 psi","Minimum of 3 psi and a maximum of 4 psi","Minimum of 4 psi and a maximum of 6 psi","Minimum of 6 psi and a maximum of 10 psi"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, Minimum of 4 psi and a maximum of 6 psi is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24457,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When do you need to use a pressure correction factor when clocking an appliance?",
    options: ["Appliance input is over 400MBH","Meter pressure greater than 0.5 psig","Meter pressures greater than 2 psig","Meter pressures greater than 5psig"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, Meter pressure greater than 0.5 psig is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24458,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the temperature the gas heat values are based on?",
    options: ["-40°C","0°C","15°C","32°C"],
    correct: 2,
    reasoning: "15°C is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24459,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How long may a 100# propane cylinder be in use before it must be re-inspected and marked?",
    options: ["1 year","5 years","10 years","20 years"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 10 years is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24460,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "True or False: The level of liquid propane in the cylinder has no effect on the vaporization rate.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24461,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Assuming all of the propane cylinders are ¼ full which one will have the higher Btu/h vaporization rate?",
    options: ["20 #","40 #","200 #","300#"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 300# is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24462,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "The largest cylinder that is made has a capacity of 1000 lbs of water. What is the maximum allowable liquid propane capacity?",
    options: ["300 #","420 #","500 #","800#"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 420 # is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24463,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When calculating the effective load that an appliance will place on a propane container, which formula should be used?",
    options: ["Effective load = Btu/h of input","Effective load = input × load factor","Effective load = weight of propane × load factor","Effective load = gallons of liquid propane × 91,500"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Effective load = input × load factor is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24464,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "True or False: Cylinders have a lower vaporization rate at higher humidity.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24465,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When the demand of an appliance is too high for an average size container, what would be a practical solution?",
    options: ["Install an excess flow valve","Install a propane vapourizer","Install multiple smaller appliances","Install an auto change over manifold"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Install a propane vapourizer is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24466,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What units of measurement are used to rate the fuel consumption of propane-fired stationary engines?",
    options: ["Btu/h","kW","gal/hr","gpm"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, gal/hr is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24467,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What will happen to the vapour pressure in a cylinder when the temperature of liquid propane is increased?",
    options: ["Not change","Increase","Decrease","Decrease only if the liquid content is 80%"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, Increase is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24468,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What surfaces on a propane storage container transfer heat and affect the vaporization rate?",
    options: ["The entire wetted surface of the container","The entire surface including the top and bottom","The entire surface not including the top or bottom","Only the surface that directly faces the sun and receives direct radiation"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, The entire wetted surface of the container is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24469,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is indicated by a white fog or mist emitting from the liquid level gauge?",
    options: ["LP-gas is contaminated","Cylinder or tank is damaged","Liquid level gauge is defective","Maximum permitted filling level is reached"],
    correct: 3,
    reasoning: "Maximum permitted filling level is reached is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24470,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the relief valve setting of a propane cylinder?",
    options: ["250 psig","312 psig","375 psig","420 psig"],
    correct: 2,
    reasoning: "375 psig is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24471,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the purpose of an excess flow valve?",
    options: ["Prevent liquid withdrawal from a tank","Prevent the tank from being filled too quickly","Prevent the tank from being over pressurized","Prevent excessive discharge of vapour or liquid"],
    correct: 3,
    reasoning: "Prevent excessive discharge of vapour or liquid is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24472,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the purpose of a filler valve on a cylinder?",
    options: ["Used to fill a large stationary cylinder","Provide a large capacity relief opening","Act as a check valve to prevent excess flow","Prevent the cylinder or tank from rupturing"],
    correct: 0,
    reasoning: "Used to fill a large stationary cylinder is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24473,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "If a leak occurs in the propane line between the first stage regulator and the second-stage regulator, what is the first action that must be taken?",
    options: ["Close the excess flow valve","Open the fixed liquid level gauge","Shut off the propane container service valve","Decrease the pressure setting of the first stage regulator"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Shut off the propane container service valve is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24474,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "The electrical service supplied to a building is measured in what units?",
    options: ["Ohms","Volts","Amperes","Horsepower"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Volts is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24475,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What device would protect users of electrical equipment from shock hazards in damp conditions?",
    options: ["Arc Breaker","Overcurrent device","Arc fault circuit interrupter","Ground fault circuit interrupter (GFCI)"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Ground fault circuit interrupter (GFCI) is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24476,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Once a GFCI receptacle is tripped, how is it reset?",
    options: ["Push the button on the receptacle","Reset at the panel","Replace the fuse","Move handle off then back on"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Push the button on the receptacle is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24477,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "\"Permanently joining all non-current-carrying metal parts to ensure electrical continuity\" is a partial definition of:",
    options: ["Bonding","Jumping","Bridging","Grounding"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Bonding is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24478,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What minimum size conductor is required to bond gas piping systems to the building's electrical system grounding conductor?",
    options: ["#4 AWG","#6 AWG","#8 AWG","#12 AWG"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, #6 AWG is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24479,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the most common device for the protection of electrical systems in residential applications?",
    options: ["Fuses","Transformers","GFCI receptacle","Circuit Breakers"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Circuit Breakers is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24480,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Where would maximum ampacity values for overcurrent protection devices be specified?",
    options: ["Motor","Appliance","Canadian Gas Code","Canadian Electrical Code"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Canadian Electrical Code is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24481,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Overcurrent can occur when a motor starts up. What is the other most likely situation that causes overcurrent?",
    options: ["Short circuit","Octopus effect","Overworking equipment","Worn out motor bearings"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Short circuit is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24482,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "An electrical overload occurs very quickly.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24483,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What advantage do circuit breakers have over fuses?",
    options: ["They can be easily reset","They can be easily replaced","They have a lower failure rate than fuses","They can be temporarily bypassed by holding in the ON position"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, They can be easily reset is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24484,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Wire is the most common form of electrical conductor?",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24485,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "A stranded wire has nearly the same current carrying capacity as a single solid wire of the same gauge.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24486,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "The maximum current rating of a No. 10 AWG conductor is less than that of a No. 14 AWG conductor.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24487,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "For installations where steel studs and joists are used as framing members, what kind of cable must be used?",
    options: ["BX","NMSC","NMD","SOW"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, BX is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24488,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the interrupting capacity of a breaker?",
    options: ["Maximum amperage of the protected circuit","The amperage when the breaker begins to open","The amount of unbalanced current to break the circuit","The maximum supply amperage that the breaker is rated for."],
    correct: 3,
    reasoning: "The maximum supply amperage that the breaker is rated for. is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24489,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Low-voltage circuits operate at what voltage?",
    options: ["1000mV or less","1 V to 30 V","30V to 250V","31 V to 750 V"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 30V to 250V is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24490,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What type of armoured cable should be used for installations subject to adverse service conditions?",
    options: ["AC","ACL","ACWU","TECH"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, TECH is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24491,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the purpose of ladder and schematic diagrams?",
    options: ["To show how circuits work and the function of their components.","To show were components are physically located","To show wiring identification and rating","To show how the wires are actually connected to component terminals"],
    correct: 0,
    reasoning: "To show how circuits work and the function of their components. is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24492,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How are components represented on connection diagrams?",
    options: ["By symbols","Simple pictorials","By labelled blocks","Dots"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, By symbols is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24493,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Gas technicians/fitters should have a thorough understanding of electrical symbols. True or False?",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24494,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "The sequence of operation of a circuit can be determined from what kind of drawing?",
    options: ["Schematic diagram","Connection diagram","Block diagram","Pictorial diagram"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Schematic diagram is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24495,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What type of diagram is most helpful when trying to trace wires?",
    options: ["Connection diagram","Block diagram","Ladder diagram","Pictorial diagram"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Connection diagram is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24496,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "In which operating position will the switches and other devices in a circuit be shown on a wiring diagram drawn in the \"at rest\" state?",
    options: ["Normal position","Open position","Closed position","Energized position"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Normal position is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24497,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What type of diagram does not show the return path for the circuits?",
    options: ["Connection diagram","Block diagram","Ladder diagram","Pictorial diagram"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Block diagram is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24498,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "A schematic diagram shows the electrical relationship between components in a circuit, while a wiring diagram shows how components are actually wired.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24499,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "On a ladder diagram the source/hot line is drawn on the right.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24500,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A multimeter incorporates which basic electrical meters?",
    options: ["Voltmeter","Ammeter","Ohmmeter","All of the choices are correct"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, All of the choices are correct is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24501,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "An ammeter is connected in parallel with the circuit under test.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24502,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A continuity check is a measurement of what?",
    options: ["Resistance","Voltage","Amperage","Capacitance"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Resistance is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24503,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "An ohmmeter should always be connected to a live circuit?",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24504,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What function should the DMM be set at when testing a furnace fan circuit?",
    options: ["Voltage AC","Voltage DC","Amperage AC","Amperage DC"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Voltage AC is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24505,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How many volts are in 250 mV?",
    options: ["0.025 V","0.25 V","2.5 V","25"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 0.25 V is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24506,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When the probes are touched together in a resistance test, what should the meter read?",
    options: ["0","OL","Infinity","Nothing"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 0 is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24507,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How many ohms are in 2.125 kΩ",
    options: ["21.25 Ω","212.5 Ω","2125 Ω","21250 Ω"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 2125 Ω is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24508,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "If you measure voltage across a switch in an energized circuit, what state is it in?",
    options: ["Open","Closed"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Open is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24509,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "If you measure the correct voltage across a load, such as a fan, but the load doesn't work, what is wrong?",
    options: ["There is no power","There is no current","A switch is open","The load has failed"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, The load has failed is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24510,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "If one of the components in a series circuit is open, the voltage drop across the open component is:",
    options: ["Zero","Equal to the source voltage","Greater than the source voltage","A small percentage of the source voltage"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Equal to the source voltage is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24511,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Ampere is also known as:",
    options: ["Power","Current","Resistance","Electromotive force"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Current is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24512,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How many hot wires are contained in the service conductors to a residential distribution panel?",
    options: ["One","Two","Three","Four"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Two is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24513,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Where do branch circuits start?",
    options: ["At the wall switch","At the pole transformer","At the distribution panel","At the appliance transformer"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, At the distribution panel is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24514,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "All line voltage circuits have a continuous ground from the distribution panel to where?",
    options: ["Each receptacle","Each appliance","Each junction box","All choices are correct"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, All choices are correct is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24515,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "All electrical connections shall be made where?",
    options: ["In conduit","In outlet or junction boxes","In the appliance","In the distribution panel"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, In outlet or junction boxes is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24516,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Bonding conductors must be soldered.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24517,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Switches are always located in the hot leg of a circuit.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24518,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Switches must be in what position to conduct electrical current?",
    options: ["Open","Closed"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Closed is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24519,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Switches are operated by hand or by:",
    options: ["Pressure","Temperature","Fluid flow","All choice are correct"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, All choice are correct is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24520,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Despite their similarity in outward appearance to the contacts in a light switch, how are the contacts in a toggle motor starter different?",
    options: ["They are current rated","They are horsepower-rated","They are located on the neutral leg","They have solder only wiring connections"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, They are horsepower-rated is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24521,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is meant by the term \"gangable box\"?",
    options: ["Boxes that are used for switches only","Multiple boxes can be joined together","Boxes that are used for receptacles only","Octagonal type junction boxes designed for a large number of marrettes"],
    correct: 1,
    reasoning: "Multiple boxes can be joined together is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24522,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Crimp-on connectors are convenient to use as they do not require any special tools.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24523,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "The point at which the two dissimilar metals are joined on a thermocouple is known as what?",
    options: ["Anode","Hot junction","Cold junction","Galvanic junction"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Hot junction is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24524,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Thermocouples are used with which type of pilot?",
    options: ["Direct Pilot","Standing pilot","Interrupted pilot","Intermittent pilot"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Standing pilot is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24525,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What reading should an open circuit test on a thermocouple produce?",
    options: ["9 mV","17 mV","30 mV","250 or 750 mV"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 30 mV is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24526,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A thermocouple should be replaced if it cannot produce a closed circuit reading of more than.",
    options: ["2 mV","8 mV","20 mV","30 mV"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 8 mV is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24527,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What does a thermocouple power when it is being heated?",
    options: ["Fan","Safety coil","Thermostat","Main gas valve"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Safety coil is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24528,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What portion of the hot junction should be heated by the pilot flame?",
    options: ["Full length of thermocouple","½\" away from the top","First 0.375\" to 0.5\" thermocouple","Bottom/Base ½\" of thermocouple"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, First 0.375\" to 0.5\" thermocouple is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24529,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What should the temperature difference be between the hot and cold junctions?",
    options: ["Maximum 250°F (120°C)","Maximum 400°F (204°C)","Minimum 400°F(204°C)","Minimum 750°F(399°C)"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Minimum 400°F(204°C) is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24530,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "A thermopile contains approximately 10 to 30 thermocouples?",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24531,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How are multiple thermocouples electrically connected within a thermopile?",
    options: ["Series","Parallel"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Series is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24532,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What can cause to a very small, blue pilot flame?",
    options: ["Low gas pressure","Clogged pilot filter","Restricted pilot orifice","All choices are potential causes"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, All choices are potential causes is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24533,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "An external power source is required for a control circuit operating on a thermopile millivoltage.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24534,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What type of current do thermocouples and thermopiles produce?",
    options: ["AC","DC","3-phase","Magnetic"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, DC is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24535,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "A thermocouple must be under load to perform an open circuit test. True or False?",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24536,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What does a closed-circuit test show?",
    options: ["Pilot stat dropout millivolts","Millivolt output not under load","Millivolt output unheated thermocouple","Millivolt maintained under load"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Millivolt maintained under load is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24537,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "During a pilotstat coil test at what mV reading should the coil drop out?",
    options: ["Between 2-1 mV","Between 5-2 mV","Between 20-15 mV","Between 30-15 mV"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Between 5-2 mV is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24538,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "During a pilotstat coil test, at what point in time should the coil drop out?",
    options: ["After 3 minutes of the extinguished flame","After 90 seconds of the extinguished flame","Within 3 seconds of the extinguished flame","Within 90 seconds of the extinguished flame"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Within 90 seconds of the extinguished flame is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24539,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When do manufacturers use750 mV powerpiles as opposed to 250 or 500mV?",
    options: ["When two millivolt circuits are powered","When AC power is required","When 3 phase power is required","When a circulating fan is powered"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, When two millivolt circuits are powered is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24540,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Testing a 750 mV circuit is essentially the same as testing a 500 mV circuit, except for what?",
    options: ["Testing high limit","Testing pilotstat","Testing thermostat","Testing main gas valve"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Testing pilotstat is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24541,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the voltage rating of a dedicated millivolt thermostat?",
    options: ["120 VAC","20 -30 VAC","0-1.5 VDC","250-750 VDC"],
    correct: 2,
    reasoning: "0-1.5 VDC is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24542,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Total electrical resistance in a control system includes the heat anticipator in the thermostat. True or False?",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24543,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the recommended maximum length of wire, when using typical LVT No. 18 AWG, on a millivolt system?",
    options: ["5 ft (1.5 m)","30 ft (9 m)","50 ft (15 m)","80 ft (24 m)"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 30 ft (9 m) is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24544,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the maximum time allowed in the event of pilot outage for the thermocouple to cool down and stop the flow of gas to the burner?",
    options: ["45 seconds","60 seconds","90 seconds","120 seconds"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 90 seconds is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24545,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Where would you find the rated horsepower, the speed, full load amperage, and the date code of a motor?",
    options: ["Frame","Housing","Armature","Nameplate"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Nameplate is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24546,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What are the two main parts of an electric motor?",
    options: ["Stator and rotor","Stator and capacitor","Rotor and capacitor","Capacitor and centrifugal switch"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Stator and rotor is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24547,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "This start relay has a normally open set of start winding contacts that are closed by the relay coil in the run winding circuit. Once the motor is running the coil magnetic output is decreased and the contacts are released",
    options: ["Motor starter","Current relay","Potential relay","Solid-state relay"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Current relay is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24548,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "This type of start relay uses transistors, diodes and triacs to break the start windings circuit at the correct time.",
    options: ["Motor starter","Current relay","Potential relay","Solid-state relay"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Solid-state relay is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24549,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the purpose of an overload device?",
    options: ["To prevent motor slip","To prevent locked rotor","To synchronize the rotor","To protect the motor from overheating"],
    correct: 3,
    reasoning: "To protect the motor from overheating is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24550,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the primary cause of motor insulation failure?",
    options: ["Motor slip","Locked rotor","Motor overheating","Unsynchronized rotor"],
    correct: 2,
    reasoning: "Motor overheating is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24551,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "From which vantage point is the motor's direction of rotation viewed?",
    options: ["From the top of the motor","From the drive end of motor","From either end of the motor","From the non-drive end of motor"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, From the drive end of motor is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24552,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the easiest way to tell if motor bearings require lubrication?",
    options: ["Rating plate","Specifications","Motor power supply","Look for grease fittings"],
    correct: 3,
    reasoning: "Look for grease fittings is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24553,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How do you determine what wires are for which speed tap on a multispeed PSC direct drive motor?",
    options: ["Wiring schematic colour codes","Trial and error","Furnace specifications","Control board schematic"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Wiring schematic colour codes is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24554,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What best describes an ECM?",
    options: ["Split phase induction motor","A shaded pole induction motor","Permanent-split capacitor motor","A dc, three-phase motor with a permanent magnet rotor"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, A dc, three-phase motor with a permanent magnet rotor is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24555,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Mercury is used in capillary tubes suitable for high temperature operation.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24556,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Solenoids operate on which principle?",
    options: ["Electro-magnetism","Thermoelectric effect","Thermal expansion of solids","Thermal expansion of liquids"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Electro-magnetism is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24557,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Thermocouples and thermopiles operate on which principle?",
    options: ["Electro-magnetism","Thermoelectric effect","Thermal expansion of solids","Thermal expansion of liquids"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Thermoelectric effect is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24558,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Solid state electronic devices are made up of electro-mechanical components that move.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24559,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A semiconductor device used to switch or amplify signals.",
    options: ["Diode","Transistor","Thermistor","Thermocouple"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Transistor is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24560,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A semiconductor device used to allow the flow of current in only one direction.",
    options: ["Diode","Transistor","Thermistor","Thermocouple"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Diode is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24561,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A semiconductor device that changes its electrical resistance with a change in temperature.",
    options: ["Diode","Transistor","Thermistor","Thermocouple"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Thermistor is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24562,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "SCR, TRIAC, and DIAC are all what types of electronic devices?",
    options: ["Diode","Thyristor","Transistor","Thermistor"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Thyristor is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24563,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Low-water cutoff, gas-pressure switch, flow switch, all belong to what section of the control system?",
    options: ["Operating controllers","Ignition control module","Limit and safety controllers","Combustion safety controller"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, Limit and safety controllers is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24564,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is an operating aquastat?",
    options: ["It is a normally closed switch, that shuts off the gas supply when the temperature setpoint is reached","It is a normally open switch, that shuts of the gas supply when the temperature setpoint is reached","It is a normally closed switch, that turns on the gas supply when the temperature setpoint is reached","It is a normally open switch, that turns on the gas supply when the temperature setpoint is reached"],
    correct: 0,
    reasoning: "It is a normally closed switch, that shuts off the gas supply when the temperature setpoint is reached is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24565,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "A thermocouple is considered a combustion safety control.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24566,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Select the combustion safety controls that work on the principle of flame ionization.",
    options: ["Thermopile","Infrared flame sensor","Ultraviolet flame sensor","Flame rectifier (flame rod)"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Flame rectifier (flame rod) is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24567,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What device is used to sense combustion air or flue gas flow on any appliance that incorporates a fan or blower?",
    options: ["Flow switch","Pressuretrol","Gas pressure switch","Air proving switch"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Air proving switch is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24568,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "Non-integrated ignition control modules designed for intermittent pilot, direct spark, or hot surface ignition will also manage all of the other appliance activities such as humidistat, electronic filters, heating pumps or fans.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24569,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "On what type of gas appliance would a rod and Tube (Unitrol) valve typically be installed?",
    options: ["Gas range","Gas boiler","Gas Furnace","Gas water heater"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Gas water heater is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24570,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How is the field wiring identified on a wiring schematic for an IFC?",
    options: ["Solid lines","Highlighted","Dotted lines","Solid Bold lines"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Dotted lines is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24571,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is a DIP switch?",
    options: ["Direct ignition proving sensor","An air flow differential pressure switch","A double pole double throw automatic switch","A manual electric switch that is packaged with others in a group"],
    correct: 3,
    reasoning: "A manual electric switch that is packaged with others in a group is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24572,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Pilot operated solenoid valves use pressure differential to assist the plunger in opening and closing the main valve.",
    options: ["True","False"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, True is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24573,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "What is the name of the backup safety designed to shut off the burner if the temperature of the water in the heater exceeds 200°F?",
    options: ["T&P","ECO","Pilotstat","Aquastat"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, ECO is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24574,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What feature acts as extra protection on a redundant gas valve?",
    options: ["On-off switch","Pilot adjustment","Servo regulator","A second automatic shutoff valve"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, A second automatic shutoff valve is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24575,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How can multiple wireless temperature sensors that use short range protocols such as Z-Wave and Zigbee achieve a longer range?",
    options: ["Hard wire","AC adapters","Mesh network","Signal boosters"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Mesh network is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24576,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A 10K thermistor has a reference resistance of 10KΩ at what temperature.",
    options: ["-55°C","0°C","25°C","150°C"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 25°C is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24577,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "A PTC thermistor will decrease its resistance with a temperature increase.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24578,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "One advantage of a smart valve is that it uses a regular 110 VAC HIS.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24579,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How have redundant gas valves been adapted to give them modulating operation?",
    options: ["WiFi-enabled","Servo regulated","Electric Stepper motor","Electro hydraulic actuator"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Electric Stepper motor is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24580,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "On an electric oven safety valve, the HSI must warm up sufficiently before enough electricity can pass to open the gas valve.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24581,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "A seismic valve will reset automatically once the vibration stops.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24582,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Cable release fire suppression gas valves can only be activated manually.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24583,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "The left-hand side of the ladder diagram represents the incoming voltage.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24584,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which electrical drawing would be considered a map of an electrical circuit?",
    options: ["Block diagram","Ladder diagram","Wiring diagram","Pictorial diagram"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Wiring diagram is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24585,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which electrical drawing is best used to determine how current flows through the various parts of the circuit?",
    options: ["Block diagram","Schematic diagram","Wiring diagram","Pictorial diagram"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Schematic diagram is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24586,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A schematic diagram is also known as a _____________________.",
    options: ["P&C drawing","Ladder diagram","Component layout","Connection diagram"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Ladder diagram is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24587,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "For this relay connected to a 120 Volts circuit, what is the full load amp rating for the normally closed contacts?",
    options: ["8 amps","8.9 amps","13.68 amps","82.8 amps"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 13.68 amps is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24588,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "These sine waves represent primary and secondary transformer circuit that are in phase.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24589,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "For AC circuits, the difference between the hot, neutral wire to ground wire is described as what?",
    options: ["Phasing","Modulation","Sequencing","Polarization"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Phasing is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24590,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What voltage reading should you get between the 120 VAC hot and ungrounded side of the secondary, when checking for transformer phasing?",
    options: ["24 VAC","96 VAC","120 VAC","144 VAC"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 96 VAC is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24591,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the operation of a flame rollout switch",
    options: ["NC switch that opens on flame roll out","NO switch that breaks on flame roll out","NO switch that closed when the induced fan runs","NC switch that closed when the induced fan stops"],
    correct: 0,
    reasoning: "NC switch that opens on flame roll out is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24592,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "You can determine the sequence of operation for all components connected to an IFC from the wiring diagrams.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24593,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Use the DIP table shown here to interpret the HEAT \"OFF\" DELAY setting for the DIP switch configuration shown.",
    options: ["0 SEC","60 SEC","100 SEC","180 SEC"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 180 SEC is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24594,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "The troubleshooting procedure is broken down into a series of specific steps. What should be your first step?",
    options: ["Make a trial run","Test conclusions","Know the system","Replace the components"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Know the system is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24595,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What setting should the multimeter be on when testing the flame sensing circuit?",
    options: ["µAmps DC","µVolts AC","µAmps AC","µVolts DC"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, µAmps DC is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24596,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "All IFC will have a fault code retrieval push button on the module.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24597,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Using the fault code table in Illustration 4, what component, and its connections, should be tested if the IFC red light is flashing one short flash following by one long flash?",
    options: ["Ignitor","Blower","Gas valve","Flame sensor"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Gas valve is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24598,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "The \"upper ceiling, walls, windows, doors, basement walls, and basement floors\" are part of which component in the building system?",
    options: ["The building envelope","The building structure","The building externals","The building environment"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, The building envelope is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24599,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "The effects the occupants have on the building system are difficult to predict, so they can be neglected.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24600,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "The building envelop can and should completely separate the indoors from the outdoors",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24601,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the ideal relative humidity?",
    options: ["15% to 25%","25% to 35%","35% to 50%","45% to 65%"],
    correct: 2,
    reasoning: "35% to 50% is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24602,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Heat moves from cold to hot.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24603,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What term describes the process of air exiting a building?",
    options: ["Infiltration","Exfiltration","Stack effect","Distribution effect"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Exfiltration is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24604,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What term describes the process of air entering a building?",
    options: ["Infiltration","Exfiltration","Stack effect","Distribution effect"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Infiltration is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24605,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What condition does wind effect create on the leeward side of the building?",
    options: ["High humidity","Neutral pressure","Positive pressure","Negative pressure"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Negative pressure is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24606,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "The combustion air supply openings required by CSA B149.1 code are designed to replace the air exhausted by mechanical exhaust devices as well as the air used by gas appliances.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24607,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the typical thickness of the plastic vapour barrier?",
    options: ["2 mil","4 mil","6 mil","8 mil"],
    correct: 2,
    reasoning: "6 mil is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24608,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What will happen to relative humidity during winter in a house if the vapour barrier has not been made continuous?",
    options: ["Relative humidity in the house will increase","Relative humidity in the house will decrease","Relative humidity in the house will not be affected"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Relative humidity in the house will decrease is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24609,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Heat always travels upward.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24610,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "On an older home that has undergone some updates, where will the greatest heat loss occur?",
    options: ["Through walls","Through ceilings","Through windows","Unknown until an assessment of the existing building envelope is done"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Unknown until an assessment of the existing building envelope is done is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24611,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "An insufficient supply of makeup and combustion air can cause what to occur?",
    options: ["Positive pressure in a building","Negative pressure in a building","Increase draft and reduce efficiency","Decrease infiltration of contaminants from soil or walls"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Negative pressure in a building is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24612,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What method should be used to determine the proper size of the space heating equipment for a specific site?",
    options: ["Ask the customer","Room by room heat loss calculation","Rule of thumb based on square footage","Rule of thumb based on the type of house"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Room by room heat loss calculation is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24613,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What will be the likely effect on relative humidity of a growing number of occupants in a tightly constructed house?",
    options: ["Relative humidity in the house will increase","Relative humidity in the house will decrease","Relative humidity in the house will not be affected","None of the choices would likely occur"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Relative humidity in the house will increase is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24614,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "If a heat loss calculation determines that the heat loss for a building is 100 000 Btu/h, what is the minimum output rating for a new space heating appliance to be installed in the building?",
    options: ["80 000 Btu/h,","100 000 Btu/h,","120 000 Btu/h,","140 000 Btu/h,"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 100 000 Btu/h, is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24615,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "If a heat loss calculation determines that the heat loss for a building is 100 000 Btu/h, what is the maximum output ratings for a new space heating appliance to be installed in the building?",
    options: ["80 000 Btu/h,","100 000 Btu/h,","120 000 Btu/h,","140 000 Btu/h,"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 140 000 Btu/h, is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24616,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "If a heat loss calculation determines that the heat loss for a building is 100 000 Btu/h, what is the minimum input rating of a 90% efficient heating appliance that can be installed in the building?",
    options: ["80 000 Btu/h,","100 000 Btu/h,","111 100 Btu/h,","140 000 Btu/h"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 111 100 Btu/h, is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24617,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "In all cases, a heating system that is sized to meet the calculated heat loss of the building will operate more efficiently than one that is oversized",
    options: ["True","False"],
    correct: 0,
    reasoning: "True is calculated according to the requirements in CSA B149.1-25, Section 6 - Advanced Piping. This calculation ensures proper system sizing and safe operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24618,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "R value of each layer of material in the building envelope is added together to determine the total thermal resistance of the wall.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24619,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "What is the outside design temperature (ODT)?",
    options: ["Is the average coldest temperature in a region","The coldest day in recent history in a region","The average warmest winter temperature in a region","The hottest day on record in a region"],
    correct: 0,
    reasoning: "Is the average coldest temperature in a region is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24620,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is R Value?",
    options: ["Heat loss","Ratio value","Transmission loss","Resistance value"],
    correct: 3,
    reasoning: "Resistance value is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24621,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What equipment should be employed throughout a house depressurization test?",
    options: ["Draft gauge","CO detector","Incense stick","Smoke pencil"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, CO detector is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24622,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the best method of ensuring that negative building pressure never causes pressure-induced backdrafting in a gas appliance?",
    options: ["Install a direct-vent appliance","Perform a depressurization test","Revent the central vacuum system","Replace bathroom and kitchen fans with an HRV"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, Install a direct-vent appliance is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24623,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Wood smoke is a form of biological pollution.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24624,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the word used to define the circulation and purification of air in an enclosed space?",
    options: ["Ventilation","Substitution","Air Treatment","Humidification"],
    correct: 0,
    reasoning: "Ventilation is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24625,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the problem with supply-only systems in leaky structures?",
    options: ["Higher cost to ventilate","Excessive depressurization","Lead to a build up of pollutants","Can drive moist air into wall cavities"],
    correct: 3,
    reasoning: "Can drive moist air into wall cavities is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24626,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "The best way to remove odours from a house is by filtration.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24627,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What information found on the rating plate needed to determine the correct pipe size and check individual burner gas flow?",
    options: ["Input rating","Manifold pressure","Operating voltage","Minimum supply pressure"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Input rating is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24628,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How are gas ranges typically connected to the electrical power supply?",
    options: ["A three phase 4 wire cable","Hard wired into a junction box with armoured cable","A power supply cord with a 120 VAC three-prong grounded plug","A power supply cord with a 240 VAC three-prong grounded plug"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, A power supply cord with a 120 VAC three-prong grounded plug is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24629,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "The appliance regulator on a range is adjusted by changing the position of a simple converter fitting.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24630,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "To determine the required clearance to combustibles for a range, refer to the gas code over the manufacturer's instructions or the rating plate.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24631,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "If you have three certified metal flexible connectors of different lengths, they will all have the same gas flow capacity.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24632,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "How does a sealed gas burner design maintain clean burner ports?",
    options: ["Burner cap collects debris","Flash tube burns of debris.","Integrated drip pan gets removed and cleaned","Burner cap deflects debris away from the flame"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Burner cap deflects debris away from the flame is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24633,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "A properly adjusted burner flame should extend high enough so that the inner blue cone of the flame is above the burner ring or grate, and able to touch the cooking vessel.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24634,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What should be used to connect dryer moisture exhaust duct joints?",
    options: ["Foil duct tape","Electrical tape","Cloth mesh duct tape","Three evenly spaced sheet metal screws"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Three evenly spaced sheet metal screws is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24635,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What problem would a defective drum seal cause?",
    options: ["Dryer smokes","Clothes drying too slowly","Drum operates, but noisily","Main burner does not light"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Clothes drying too slowly is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24636,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Most barbecues can be used on Propane or natural gas without any modifications.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24637,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "A shut-off valve is not necessary when using a quick disconnect device?",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24638,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Barbecues equipped with a piezo ignition can be match-lit?",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24639,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Aftermarket spider guard can be installed onto burner tubes.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24640,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the maximum length of a barbeque connecting hose?",
    options: ["0.6 m","2 m","3 m","4.6 m"],
    correct: 3,
    reasoning: "4.6 m is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24641,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Soft mantles are more durable than hard mantles due to their flexibility.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24642,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "The purpose of the venturi assembly is to generate bright white light when heated by the flame.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24643,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Indoor gas lamps should only be used in well ventilated rooms.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24644,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Before starting any repairs, you should turn off the gas supply and allow the glass to cool.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24645,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How often should a gas lamp be cleaned?",
    options: ["Weekly","Monthly","Annually","Bi-annually"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Annually is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24646,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the purpose of thermal mastic?",
    options: ["A liquid absorber","A heat transfer compound","A heat insulation compound","To sense the flame temperature"],
    correct: 1,
    reasoning: "A heat transfer compound is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24647,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What percentage of liquid ammonia evaporates into the freezer compartment side of the evaporator?",
    options: ["10%","50%","90%","100%"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 90% is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24648,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "In order to increase the amount of cooling, the thermostatic gas valve will decrease the size of the flame.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24649,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Generally, the bypass screw is factory-adjusted and should not be modified.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24650,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How is a burner orifice cleaned?",
    options: ["With a small file","With a min hand drill set","With a stiff brass bristle brush","Soak it in non-oily solvents and then blow air through it."],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Soak it in non-oily solvents and then blow air through it. is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24651,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "The main function of the orifice housing is to provide a correct air-gas ratio.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24652,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Ammonia gas is corrosive and may be fatal if inhaled.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24653,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "An upper side vent is preferred over a top-mounted vent.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24654,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "To allow the condensation to flow out of the housing, the vent housing for a sealed combustion vent must be:",
    options: ["Less than 90° to the ground","More than 90° to the ground","Less than 45° to the ground","More than 45° to the ground"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Less than 90° to the ground is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24655,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "After the installation checks are complete, how long should the refrigerator run before the customer places any food in it?",
    options: ["10 minutes","30 minutes","6 to 8 hrs.","24 hrs."],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 6 to 8 hrs. is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24656,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "After you have cleaned all of the burner components, there is still a yellow, lazy flame what should be checked next?",
    options: ["Gas leak","Gas pressure","Evaporator leak","Thermocouple"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Gas pressure is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24657,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is wrong if you notice a yellow substance on the tubes?",
    options: ["Gas leak","Refrigerator not level","Flame contacts the tube","There is a leak in the absorption system"],
    correct: 3,
    reasoning: "There is a leak in the absorption system is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24658,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When adjusting the minimum heat input, what can happen if the setting is not low enough?",
    options: ["Flame lifting","Over-cooling","Undercooling","Incomplete combustion"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Over-cooling is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24659,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When adjusting the minimum heat input, what can happen if the setting is to low?",
    options: ["Over-cooling","Undercooling","Incomplete combustion","Flame can be blown out by drafts"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Flame can be blown out by drafts is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24660,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What tool is used to clean the condenser?",
    options: ["Scraper","Paintbrush","Dremel tool","Hand Wire brush"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Paintbrush is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24661,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Why is it important to keep the condenser and absorber fins clean?",
    options: ["To ensure good heat transfer","To reduce flame impingement","To ensure complete combustion","To stop them from being scorched or blistered"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, To ensure good heat transfer is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24662,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "If the boiler section is hot and the absorber section is warm, what does this indicate?",
    options: ["The evaporator is blocked","Thermocouple tip not in position","An internal leak in the evaporator","The hydrogen circuit has lost its charge"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, The hydrogen circuit has lost its charge is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24663,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "A conversion to natural gas will improve an improperly sized system?",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24664,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "What combustion chamber design is most suitable for conversion?",
    options: ["Pulse type","Updraft type","Revertible type","Semi-revertible"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Updraft type is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24665,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "A gas fired will have lower flue gas temperatures than the temperature of emissions from oil or solid-fuel appliances.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24666,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What must be done if there are no manufacturer's instructions for conversion of the appliance?",
    options: ["Hire an engineer","Do not attempt the conversion","Find a similar appliance with instructions","Seek approval of the authority having jurisdiction"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Seek approval of the authority having jurisdiction is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24667,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the purpose of a smoke test?",
    options: ["Check chimney for leaks","Check venting system for leaks","Check furnace combustion chamber for leaks","Check for proper operation of the venting system"],
    correct: 3,
    reasoning: "Check for proper operation of the venting system is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24668,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "After the appliance has been checked and repaired, what is done next?",
    options: ["Mount the burner","Select the proper orifice size","Select the proper burner air tube","Check the combustion air and venting system"],
    correct: 3,
    reasoning: "Check the combustion air and venting system is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24669,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Most masonry chimneys use for oil burners will be too large and should have a liner installed for the gas conversion.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24670,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "An adjustable barometric draft control device can be located in a separate room as the appliance.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24671,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the purpose of the fan or blower on a natural draft power conversion burner?",
    options: ["Provide pressurized combustion air","Overcome the resistance of the appliance","Force the flue gas through the venting system","Draw gas in from the zero governor regulator"],
    correct: 0,
    reasoning: "Provide pressurized combustion air is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24672,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "A conversion burner should be selected that has a 30% greater input than the previous oil burner to avoid flue gas condensation.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24673,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How many Btu are contained in one US gallon of No. 2 fuel oil?",
    options: ["1000 Btu's","3412 Btu's","140,000 Btu's","33,475 Btu's"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 140,000 Btu's is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24674,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Revertible appliances are not recommended for conversion?",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24675,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Are inshot burners accepted for use on a Type B combustion chamber? If so, under what conditions?",
    options: ["Yes always","Yes, if a revertible flue travel.","Yes, as long as the combustion chamber liner and insulation are installed.","No"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Yes, as long as the combustion chamber liner and insulation are installed. is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24676,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How should the burner air tube and mounting plate be sized?",
    options: ["It shall be 9.5\" long","End of the tube is flush with the inside of the combustion chamber.","End of the tube extends into the inside of the combustion chamber by at least ¼.\"","End of the tube is flush with the outside of the combustion chamber."],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, End of the tube is flush with the inside of the combustion chamber. is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24677,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the breeching pipe?",
    options: ["A flue gas exhaust pipe that penetrates the roof","A flue gas exhaust pipe that penetrates the chimney","A flue gas exhaust pipe that connects directly to the appliances","A flue gas exhaust pipe that connects downstream of the draft regulator"],
    correct: 2,
    reasoning: "A flue gas exhaust pipe that connects directly to the appliances is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24678,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the primary cause of incomplete combustion when the appliance is firing at the correct input?",
    options: ["lack of air","lack of gas","too much air","too much gas"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, lack of air is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24679,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Perfect combustion can be maintained in a combustion chamber?",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24680,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What are the products of complete combustion?",
    options: ["heat, carbon monoxide and water vapour","heat, carbon dioxide and carbon monoxide","heat, carbon dioxide, water vapour and nitrogen","heat, carbon dioxide, carbon monoxide and nitrogen"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, heat, carbon dioxide, water vapour and nitrogen is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24681,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How many cubic feet of combustion air is required for perfect combustion of one cubic foot of propane gas?",
    options: ["10 cubic feet (0.28 m³)","16 cubic feet (0.45 m³)","25 cubic feet (0.71 m³)","32 cubic feet (0.91 m³)"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 25 cubic feet (0.71 m³) is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24682,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which element of the flue gas analysis is the best indication of how much excess air is being introduced into the combustion chamber?",
    options: ["O²","N²","CO","CO²"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, O² is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24683,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "For a flue gas analysis of natural gas, a 7% reading for both CO² and O² would indicate approximately how much excess air?",
    options: ["10%","25%","50%","No excess air"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 50% is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24684,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What would be the temperature of the flue gas if an appliance was 100% efficient?",
    options: ["130°F (54°C)","325°F (205°C)","3550°F (1950°C)","Room temperature"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Room temperature is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24685,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "At what level must the level of carbon monoxide remain below (on an air-free basis)?",
    options: ["0 PPM","20 PPM","50 PPM","100 PPM"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 50 PPM is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24686,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Without sufficient air for combustion in a gas-fired appliance, which would you expect to find in the products of combustion?",
    options: ["Ethane","Oxygen","Hydrogen Sulfide","Carbon monoxide"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Carbon monoxide is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24687,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Approximately what pressure should the barometric damper be adjusted to, in order to achieve a neutral pressure point at the burner?",
    options: ["-.4 WC\"","0 WC\" to -.02 WC\"","-.02 WC\" to -.04 WC\"","-.04 WC\" to -.06 WC\""],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, -.02 WC\" to -.04 WC\" is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24688,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "During the combustion of natural gas, the combustion products in the vent are cooled down below 120F. Which of the following conditions will occur?",
    options: ["The flue products will condense and corrode the vent","The quantity of CO will increase","The quantity of carbon dioxide will increase","The carbon in the flue gas will condense and plug the vent with soot"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, The flue products will condense and corrode the vent is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24689,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which Code (other than the CSA B149.1) should be referenced to determine requirements for the installation of water heaters?",
    options: ["CSA B139","CSA B52","National Plumbing Code","Uniform Plumbing Code"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, National Plumbing Code is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24690,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What type of water heater is permitted to be installed in a bedroom?",
    options: ["Tankless","Direct-fired","Power-vent","Direct-vent"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Direct-vent is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24691,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the maximum distance of an indirect connection (air break) permitted for a relief valve's discharge pipe?",
    options: ["300 mm","600 mm","150 mm","25 mm"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 150 mm is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24692,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Referring to CSA B149.1, do the requirements of Clauses 8.2 to 8.5 apply to a direct-vent appliance?",
    options: ["Yes","No"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, No is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24693,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What heats the stored water heated in an indirect water heating system?",
    options: ["The gas flame's hot products of combustion","A secondary heat transfer fluid","An element immersed in the tank","Gas flames in contact with the tank"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, A secondary heat transfer fluid is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24694,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is used to remove the products of combustion from a power-vent water heater?",
    options: ["Motor-driven fan","Natural draft","Atmospheric pressure","circulator"],
    correct: 0,
    reasoning: "Motor-driven fan is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24695,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What type of pilot would be used with a power-vented water heater?",
    options: ["Intermittent pilot","Standing pilot","Constant pilot","Expanding pilot"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Intermittent pilot is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24696,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the minimum temperature that water should be stored to eliminate the growth of legionella bacteria?",
    options: ["140°F (60°C)","120°F (49°C)","180°F (82°C)","100°F (38°C)"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 140°F (60°C) is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24697,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How long could it take to suffer a third-degree burn if a person was exposed to water at 140°F (60°C)?",
    options: ["5 minutes","2 minutes","30 seconds","4 seconds"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 4 seconds is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24698,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Pumps used to circulate domestic (potable) water must be made from stainless steel or bronze.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24699,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When connecting to a water heater, what minimum length of metallic piping should be installed before connecting to plastic water distribution piping?",
    options: ["12\" (300 mm)","6\" (150 mm)","36\" (900 mm)","18\" (450 mm)"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 18\" (450 mm) is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24700,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "This term means \"water that is safe to drink\".",
    options: ["Sanitary","Drinkable","Potable","Portable"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Potable is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24701,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "All water contained in a combination system's heating piping and components must be circulated at least once every hrs.",
    options: ["48","24","12","2"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 24 is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24702,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the maximum permitted water velocity if the temperature of the heating system exceeds 140°F (60°C)?",
    options: ["3 feet per second (1 m/s)","4 feet per second (1.2 m/s)","5 feet per second (1.5 m/s)","6 feet per second (2 m/s)"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 3 feet per second (1 m/s) is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24703,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "The total length of supply and return piping from the water heating appliance to the terminal heating unit must not exceed what distance?",
    options: ["150 feet (45 m)","100 feet (30 m)","50 feet (15 m)","25 feet (7.5 m)"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 50 feet (15 m) is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24704,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "Calculate the velocity of water in ¾\" ID tubing if the flow rate required for the heating circuit is 5.5 USGPM.",
    options: ["2 ft/sec","4 ft/sec","3 ft/sec","5 ft/sec"],
    correct: 1,
    reasoning: "4 ft/sec is calculated according to the requirements in CSA B149.1-25, Section 6 - Advanced Piping. This calculation ensures proper system sizing and safe operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24705,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "An \"open system\" has no contact with the atmosphere at any point.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24706,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is installed to prevent reverse flow in a circuit?",
    options: ["Mixing valve","Relief valve","Check valve","Expansion tank"],
    correct: 2,
    reasoning: "Check valve is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24707,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is installed to accommodate the increased volume of fluid within a heating system?",
    options: ["Mixing valve","Relief valve","Check valve","Expansion tank"],
    correct: 3,
    reasoning: "Expansion tank is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24708,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "The heating output of an air handler should exceed the calculated space heating loss of the building it serves.",
    options: ["True","False"],
    correct: 1,
    reasoning: "False is calculated according to the requirements in CSA B149.1-25, Section 6 - Advanced Piping. This calculation ensures proper system sizing and safe operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24709,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How many USGPM are required to deliver 40,000 Btu/h?",
    options: ["2","4","3","5"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 4 is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24710,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the expected reading when performing a thermocouple's open circuit test?",
    options: ["5 mV","10 mV","30 mV","750 mV"],
    correct: 2,
    reasoning: "30 mV is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24711,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A thermocouple must de-energize the pilotstat coil within how many seconds?",
    options: ["5","30","60","90"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 90 is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24712,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A closed limit switch should have resistance.",
    options: ["High","Infinate","Variable","No"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, No is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24713,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "If the temperature of a NTC thermistor decreases, its resistance will .",
    options: ["Decrease","Increase","Not change","Reduce"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Increase is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24714,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is used to remove lime scale?",
    options: ["Pickle juice","Muriatic acid","Sodium chloride","Zinc salts"],
    correct: 1,
    reasoning: "Muriatic acid is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24715,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which category of furnace is a high-efficiency appliance?",
    options: ["Category I","Category II","Category III","Category IV"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Category IV is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24716,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Why is condensate considered corrosive?",
    options: ["It has a low pH and low acidity","It has a high pH and low acidity","It has a high pH and high acidity","It has a low pH and high acidity"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, It has a low pH and high acidity is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24717,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When upgrading to a high-efficiency furnace from a low-efficiency model how is the appliance input decided?",
    options: ["Complete a heat loss calculation","Replace the old furnace with the same input","Choose a model that has the same size supply air plenum","Choose a modulating furnace with a minimum output equal to 50% of the old furnace input"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Complete a heat loss calculation is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24718,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How is vent piping graded for a side-wall installation?",
    options: ["Perfectly horizontal","Toward the appliance","Away from the appliance","To a low point created mid-way in the system"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Toward the appliance is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24719,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When would a gas technician/fitter use an incline manometer?",
    options: ["To check the manifold pressure","To complete an external static pressure test","To confirm the operation of the high-limit switch","To set the outlet pressure of a line-pressure regulator"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, To complete an external static pressure test is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24720,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the purpose of a flame rollout switch?",
    options: ["Open in the event of spillage","Open when the combustion air is blocked","Protect the burner area from unusually high temperatures","Protect the heat exchanger area from unusually high temperatures"],
    correct: 2,
    reasoning: "Protect the burner area from unusually high temperatures is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24721,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the purpose of a diaphragm-style pressure switch on a condensing furnace?",
    options: ["To confirm the gas pressure is correct","To confirm induced draft fan is operating","To confirm the blower assembly is operating","To confirm the air supply differential pressure is within limitations"],
    correct: 1,
    reasoning: "To confirm induced draft fan is operating is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24722,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What material is recommended for condensate piping after connecting to the appliance?",
    options: ["Rigid PVC piping","Flexible PVC tubing","Any steel pipe material","Any plastic pipe material"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Rigid PVC piping is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24723,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What type of furnace would use a vent damper?",
    options: ["Mid-efficiency only","Low efficiency only","Low-efficiency and mid-efficiency","All types of furnaces use vent dampers in the ducting system"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Low-efficiency and mid-efficiency is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24724,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What tool should be used to clean the outside of a heat exchanger?",
    options: ["Soft brush","Wire brush","Sanding block","Never clean the outside of a heat exchanger"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Soft brush is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24725,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When is a condensate pump required?",
    options: ["All condensing appliance installation","When a condensate trap cannot be installed","When the condensate cannot drain by gravity to the DWV system","When the condensate drain needs to be graded more than ¼ inch per foot"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, When the condensate cannot drain by gravity to the DWV system is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24726,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Where does condensate form in a condensing appliance system?",
    options: ["Only in the primary heat exchanger","Only in the secondary heat exchanger","In the primary and secondary heat exchangers","In the secondary heat exchanger and the venting system"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, In the secondary heat exchanger and the venting system is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24727,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Where is a combustion analysis performed?",
    options: ["In the combustion chamber","Should be measured after any draft control devices","Should be measured before any draft control devices","At the area where the primary and secondary air enters the appliance"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Should be measured before any draft control devices is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24728,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Do all rollout switches have to be manually reset?",
    options: ["Yes","No"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, No is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24729,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "What component is designed to cause the burner to shut down if there is a blockage in the vent?",
    options: ["High-limit","Pressuretrol","Roll-out switch","Pressure switch"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Pressure switch is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24730,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What voltage does the IFC receive from the thermostat circuit on a call for heat?",
    options: ["24 VAC","24 VDC","120 VAC","120 VDC"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 24 VAC is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24731,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Why is it recommended to perform an ESP after retrofitting a furnace to existing ductwork?",
    options: ["To ensure the furnace is operating within the ESP limits","To ensure the furnace is operating within the temperature rise limits","To ensure the furnace is operating within the temperature rise limits and the ESP limits","To ensure the furnace is operating within the temperature rise limits, the ESP limits, and is not over-firing"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, To ensure the furnace is operating within the temperature rise limits and the ESP limits is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24732,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is used to connect multiple cast-iron boiler sections together into a boiler block assembly?",
    options: ["Soldered couplings","Threaded unions","Tapered push-nipples","Raised face flanges"],
    correct: 2,
    reasoning: "Tapered push-nipples is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24733,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the result if flue gas combustion products are cooled below their dew point?",
    options: ["Cavitation","Condensation","Stratification","Concentration"],
    correct: 1,
    reasoning: "Condensation is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24734,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "Steel water tube boilers are commonly used for the production of hot water or steam.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24735,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What does an automatic vent damper actuator have to control the boiler's burner?",
    options: ["Proving switch","Igniter","Transformer","Circulator"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Proving switch is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24736,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which two-pipe heating system is easiest to balance?",
    options: ["Reverse-return","Direct-return","Series loop","Monoflo"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Reverse-return is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24737,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which hydronic distribution system uses diverter tees to help direct main water flow through the heating unit?",
    options: ["Reverse-return","Direct-return","Series loop","Monoflo"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Monoflo is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24738,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Which type of valve is best suited for throttling flow?",
    options: ["Gate valve","Globe valve","Check valve","Relief valve"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Globe valve is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24739,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the purpose of a balancing valve?",
    options: ["Increase flow","Isolate flow","Equalize flow","Stop reverse flow"],
    correct: 2,
    reasoning: "Equalize flow is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24740,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is installed in a system to ensure continuous flow in the system, no matter how many zone valves are open or closed?",
    options: ["Four-way mixing point","Differential pressure bypass","Outdoor air sensor","Flo check valves"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Differential pressure bypass is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24741,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "This device is normally wired in series with an operating aquastat so that either one can shut off the burner.",
    options: ["Bypass limit","High limit","Low limit","No limit"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, High limit is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24742,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What can be used to sense problems in the flow of combustion products (like flue blockages)?",
    options: ["Rollout switch","Flow switch","Low water switch","Proving switch"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Rollout switch is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24743,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What valve is used to prevent reverse flow in a piping system?",
    options: ["Gate valve","Globe valve","Check valve","Relief valve"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Check valve is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24744,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the name for the point where the expansion tank is attached to the system piping?",
    options: ["Point of no point","Point of view","Point of no pressure change","Point of no return"],
    correct: 2,
    reasoning: "Point of no pressure change is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24745,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the rotating piece of a centrifugal pump called?",
    options: ["Impeller","Propeller","Volute","Rotor"],
    correct: 0,
    reasoning: "Impeller is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24746,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the effect when increasing the RPM of a centrifugal pump?",
    options: ["More pressure and more flow","Less flow","More flow","More pressure"],
    correct: 0,
    reasoning: "More pressure and more flow is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24747,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "How many USGPM would be required to supply 40,000 Btuh, if the design temperature drop for the system is 30°F?",
    options: ["3.75 USGPM","2.67 USGPM","5 USGPM","4 USGPM"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 2.67 USGPM is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24748,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the effect of installing two centrifugal pumps in series?",
    options: ["50% more pressure","Half the flow","Double the flow","Double the pressure"],
    correct: 3,
    reasoning: "Double the pressure is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24749,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "If a boiler's burner will not fire, which of the following should be checked first?",
    options: ["Aquastats","Water supply","Venting system","Air vents"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Aquastats is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24750,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the likely cause of incomplete combustion and high flue stack temperatures?",
    options: ["Air in the system","Low water condition","Over-firing the burner","High water pressure"],
    correct: 2,
    reasoning: "Over-firing the burner is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24751,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Air in the system can create what common problem?",
    options: ["Noise","High velocities","Condensation","High flue temperatures"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Noise is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24752,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "If the pressure in a hydronic system increases immediately after the burner comes on, what is the cause?",
    options: ["Expansion tank is water-logged","Relief valve is faulty","PRV is faulty","Gas pressure is too low"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Section 6 - Advanced Piping, Expansion tank is water-logged is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24753,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What happens if a zone valve's end switch fails to close?",
    options: ["Thermostat will open","Pump will not shut off","Burner will not fire","PRV will open"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Burner will not fire is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24754,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "A customer complains that there is no heat in the top floor of a hydronic heating system. What is the most likely cause?",
    options: ["Zone valve is stuck open","Air lock in system","Pump is oversized","Static pressure too high"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Air lock in system is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24755,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What should be observed to avoid pump cavitation?",
    options: ["Install straight piping upstream","Keep fluid temperature low as possible","Keep static pressure high as possible","All of the above"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, All of the above is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24756,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the purpose of the lint trap/strainer in a pool system?",
    options: ["Prevents reverse flow into the pool","Equalize flow in the system","To protect the pump","Heats the pool water"],
    correct: 2,
    reasoning: "To protect the pump is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24757,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the normal differential setting for a pool heater's pressure switch?",
    options: ["2 psig","14 psig","0.5 psig","10 psig"],
    correct: 0,
    reasoning: "2 psig is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24758,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the function of a pool heater's pressure switch?",
    options: ["Protects the boiler from damage","Helps to keep the water clean","Senses the water level in the pool","Turns on the make-up water system"],
    correct: 0,
    reasoning: "Protects the boiler from damage is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24759,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "When the flow rate through a pool system is greater than 125 USGPM, what is required between the heater's inlet and outlet pipes?",
    options: ["Manual bypass","Automatic compensator","Backup heater","Check valve"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Manual bypass is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24760,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Where shall chlorine be added to the pool's circulating system?",
    options: ["Upstream of the pump","Downstream of the skimmer","Downstream of the heater","Upstream of the filter"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Downstream of the heater is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24761,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How often should a space heater have a maintenance inspection?",
    options: ["Minimum monthly","Minimum annually","Minimum every 5 years","Never these unit are maintenance free"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Minimum annually is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24762,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "A baseboard heater's electrical supply may be plugged directly into a wall receptacle.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24763,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "There are 3 heaters, each with a 0.25 amp control circuit all being control by one thermostat. What should the amperage setting be for a thermostat with an anticipator?",
    options: ["0.25 amps","0.50 amps","0.75 amps","amps"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 0.75 amps is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24764,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What component directs the heat from a low-intensity infrared heater onto the floor?",
    options: ["Fan","Reflector","Ceramic mat","Radiant tube"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Reflector is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24765,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What temperature level may be reached with a high-intensity infrared heater?",
    options: ["650°C","980°C","1200°C","1800°C"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 1800°C is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24766,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "How are the outside surfaces of the reflector cleaned?",
    options: ["Steel wool","Damp cloth","Wire brush","Power washer"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Damp cloth is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24767,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "The combustion products of a construction heater are vented into the heated area.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24768,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What type of construction heater would be used for applications that call for clean air, free from moisture and contaminated fumes?",
    options: ["Blower","Radiant","Natural gas","Indirect fired"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Indirect fired is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24769,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "advanced",
    question: "What component is designed to stop the flow of gas when the heater is accidentally knocked over?",
    options: ["Piezo switch","Off-level switch","Tip-over switch","High-limit switch"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Tip-over switch is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24770,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What are the two categories of gas fireplaces identified by the Canadian Energy Efficiency Regulation?",
    options: ["Gas fireplace inserts and gas stoves","Zero-clearance gas fireplaces and gas logs","Decorative gas fireplaces and heating gas fireplaces","Vent free gas fireplace and decorative appliances"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Decorative gas fireplaces and heating gas fireplaces is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24771,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What must be done with the damper when installing a gas log set into a vented wood burning fireplace?",
    options: ["Throttled as needed","Locked in fully open position","Locked in fully closed position","Operating handle modified for accessibility"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Locked in fully open position is required for proper venting in Advanced Piping and Tubing Systems applications.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24772,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Besides lighting the main burner, what purpose does a standing pilot have?",
    options: ["Preheats the chimney flue","Energizes the millivolt control circuit","Completes the flame rod sensing circuit","Heats the bulb of the thermostatic switch"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Energizes the millivolt control circuit is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24773,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "Modern intermittent pilot fireplaces control circuits operate on what voltage?",
    options: ["6 VDC","24 VAC","120VAC","750 millivolts"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, 24 VAC is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24774,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is enthalpy?",
    options: ["Enthalpy is the dew point of a sample of air","Enthalpy is the total heat contained in a substance","Enthalpy is the latent heat contained in a substance","Enthalpy is the sensible heat contained in a substance"],
    correct: 1,
    reasoning: "Enthalpy is the total heat contained in a substance is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24775,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is dewpoint?",
    options: ["The temperature required to change the state of a substance","The temperature based on a 10year average for a specific location","The temperature below which moisture in the air begins to condense","The temperature above which moisture in the air begins to condense"],
    correct: 2,
    reasoning: "The temperature below which moisture in the air begins to condense is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24776,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the term that describes the percentage of moisture in the air compared to the amount it would hold if the air were saturated at the same temperature?",
    options: ["Dew point","Humidity ratio","Relative humidity","Wet bulb temperature"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Relative humidity is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24777,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the term that indicates the actual amount of moisture found in the air?",
    options: ["Dew point","Humidity ratio","Relative humidity","Wet bulb temperature"],
    correct: 1,
    reasoning: "Humidity ratio is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24778,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "When the temperature on two sides of a material is different, heat flows from the cooler side to the warmer side.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, False is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24779,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "What is the specific heat of air at standard conditions?",
    options: ["0.018 Btu/lb","0.2417 Btu/lb","1.01 Btu/lb","4.186 Btu/lb"],
    correct: 1,
    reasoning: "0.2417 Btu/lb is defined in CSA B149.1-25, Section 6 - Advanced Piping as a fundamental principle in Advanced Piping and Tubing Systems.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24780,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "On individual return air systems, what is usually done to ensure less resistance to air flow in the return system?",
    options: ["Undercut doors","Slightly larger return air ducts","Slightly smaller return air ducts","Include return air grilles in rooms without supply air"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Slightly larger return air ducts is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24781,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "intermediate",
    question: "If the flanges are closed on an adjustable motor pulley, what happens to the belt and pulley?",
    options: ["Belt is raised and pulley diameter gets larger","Belt is raised and pulley diameter gets smaller","Belt is lowered and pulley diameter gets larger","Belt is lowered and pulley diameter gets smaller"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, Belt is raised and pulley diameter gets larger is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  {
    id: 24782,
    unit: 10,
    unitName: "Advanced Piping and Tubing Systems",
    difficulty: "basic",
    question: "A PSC motor with multiple windings gets lower efficiency at lower speeds",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 6 - Advanced Piping, True is the correct requirement in Advanced Piping and Tubing Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 6 - Advanced Piping"
  },
  // ========================================
  // UNIT 11 - PRESSURE REGULATORS - NEW QUESTIONS (77 Questions)
  // ========================================
  {
    id: 24783,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "A pressure regulator provided in a gas supply line shall not be installed",
    options: ["Outdoors","Indoors","Under a deck","In a concealed location"],
    correct: 3,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, In a concealed location is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24784,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "A line pressure regulator shall have?",
    options: ["A screen installed in the over pressure protection device","A manual shut off valve located upstream of the regulator","A manual shut off valve located downstream of the regulator","A leak limiting valve installed immediately downstream of the regulator"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, A manual shut off valve located upstream of the regulator is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24785,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "The maximum gas pressure allowed in a commercial building's central boiler room?",
    options: ["66 psi","5 psi","20 psi","25 psi"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, 20 psi is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24786,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "The maximum gas pressure allowed inside a one family dwelling?",
    options: ["2 psi","5 psi","1 psi","½ psi"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, 2 psi is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24787,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "The maximum gas pressure allowed in an assembly building is:",
    options: ["2 psig","5psig","20 psig","66psig"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, 5psig is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24788,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "When may a system regulator be by-passed?",
    options: ["Only when downstream pressure is excessive","Only for regulator replacement or repair","Only for meter replacement or repair","It is not permitted by Code"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Clause 6.9 - Regulators, It is not permitted by Code is the correct requirement in Pressure Regulators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24789,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "Meter and service regulator installations shall be made in accordance with:",
    options: ["CSA standard Z662-99","CSA standard Z240.4.1","TSSA standard 5.77.5","CEC standard 3.6.7"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Clause 6.9 - Regulators, CSA standard Z662-99 is the correct requirement in Pressure Regulators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24790,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What is the temperature relief valve setting on a residential water heater?",
    options: ["60 deg. F","200 deg. F","210 deg. F","180 deg. F"],
    correct: 2,
    reasoning: "210 deg. F is defined in CSA B149.1-25, Clause 6.9 - Regulators as a fundamental principle in Pressure Regulators.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24791,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What is the pressure relief valve setting on a residential water heater?",
    options: ["100 PSIG","125 PSIG","30 PSIG","150 PSIG"],
    correct: 3,
    reasoning: "150 PSIG is defined in CSA B149.1-25, Clause 6.9 - Regulators as a fundamental principle in Pressure Regulators.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24792,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What is the purpose of a pressure relief valve on a boiler, pool heater or boiler?",
    options: ["To prevent damage to these systems in the event of over pressurization","To prevent damage to these systems in the event of over temperature","To bypass the appliance if return water is too cold","To bypass the appliance if return water is too cold"],
    correct: 0,
    reasoning: "To prevent damage to these systems in the event of over pressurization is defined in CSA B149.1-25, Clause 6.9 - Regulators as a fundamental principle in Pressure Regulators.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24793,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "Name the device that reduces the city main water pressure to a safe working pressure?",
    options: ["Circulating pump","Temperature and pressure relief valve","Pressure reducing valve","Pressuretrol"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Pressure reducing valve is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24794,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "Name the device that response to changes in boiler pressure?",
    options: ["Pressuretrol","Aquastat","Thermistor","Thermostat"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Pressuretrol is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24795,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "Is acetylene a very stable gas that is easily compressed to high pressures?",
    options: ["Yes","No"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, No is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24796,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "Should oxygen and acetylene regulators be oiled regularly?",
    options: ["Yes","No"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 6.9 - Regulators, No is the correct requirement in Pressure Regulators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24797,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What is the restricting element of a regulator?",
    options: ["Spring","Valve disc","Diaphragm","Atmospheric vent"],
    correct: 1,
    reasoning: "Valve disc is defined in CSA B149.1-25, Clause 6.9 - Regulators as a fundamental principle in Pressure Regulators.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24798,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What is the measuring element of a regulator?",
    options: ["Spring","Valve disc","Diaphragm","Atmospheric vent"],
    correct: 2,
    reasoning: "Diaphragm is defined in CSA B149.1-25, Clause 6.9 - Regulators as a fundamental principle in Pressure Regulators.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24799,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What is the loading element of a regulator?",
    options: ["Spring","Valve disc","Diaphragm","Atmospheric vent"],
    correct: 0,
    reasoning: "Spring is defined in CSA B149.1-25, Clause 6.9 - Regulators as a fundamental principle in Pressure Regulators.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24800,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What would cause an appliance regulator to have too low of an outlet pressure?",
    options: ["Vent port plugged","Ruptured diaphragm","Sensing hole blocked","Inlet pressure too low"],
    correct: 3,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Inlet pressure too low is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24801,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "The purpose of a gas pressure regulator is:",
    options: ["To keep the colour of the flame constant","To maintain even outlet heated air temperatures","To maintain a constant gas pressure at the gas valve inlet","To increase and maintain higher pressures as the load increases"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, To maintain a constant gas pressure at the gas valve inlet is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24802,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "In a gas pressure regulator, the closing force is created by:",
    options: ["Decreased flow velocity","The inlet pressure to the regulator","The pressure under the diaphragm","The adjustable spring above the diaphragm"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, The pressure under the diaphragm is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24803,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "In a gas pressure regulator, the opening force is created by:",
    options: ["Increased flow velocity","The inlet pressure to the regulator","The pressure under the diaphragm","The adjustable spring above the diaphragm"],
    correct: 3,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, The adjustable spring above the diaphragm is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24804,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "To increase downstream pressure of the regulator:",
    options: ["The orifice size is changed","The adjusting screw is screwed out","The adjusting screw is screwed down","Replace the restricting disc and the spring"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, The adjusting screw is screwed down is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24805,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "A pressure regulator is said to be in equilibrium when the:",
    options: ["Opening force of the diaphragm is equal to the closing force of the orifice","Opening force of the diaphragm is equal to the closing force of the spring","Opening force of the spring is equal to the closing force of the upstream pressure","Opening force of the spring is equal to the closing force of the downstream pressure"],
    correct: 3,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Opening force of the spring is equal to the closing force of the downstream pressure is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24806,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What term describes the condition when the outlet pressure is lower than set point pressure during flow conditions?",
    options: ["Rise","Boost","Droop","Lockup"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Droop is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24807,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "The purpose of a pitot tube in a regulator is to:",
    options: ["Provide mechanical advantage for positive shut-off","Relieve unwanted gases when overpressure occurs","Increase upstream pressure during static conditions","Keep downstream pressure closer to set point during flow conditions"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Clause 6.9 - Regulators, Keep downstream pressure closer to set point during flow conditions is the correct requirement in Pressure Regulators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24808,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "When flow rate increases through a regulator, what happens to the downstream pressure?",
    options: ["It increases","It decreases","It cycles/hunts","It stays the same"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, It decreases is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24809,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "A line pressure regulator operating at 2 psig or less shall be exempt from certain requirements when equipped with which of the following?",
    options: ["A vent leak-limiting system","An internal relief valve spring","A union on the downstream piping","A pitot tube and balancing diaphragm"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, A vent leak-limiting system is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24810,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "Which category of gas pressure regulators are used to reduce the service line pressure to building line pressure at the gas meter set?",
    options: ["Service regulators","Appliance regulators","First-stage regulators","Line pressure regulators"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Service regulators is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24811,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "An undersized vent pipe on a regulator may cause the:",
    options: ["Pilot safety to fail","Restricting element to stay fully open","Restricting element to stay fully closed","Regulator to go respond slow or sluggish"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Clause 6.9 - Regulators, Regulator to go respond slow or sluggish is required for proper venting in Pressure Regulators applications.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24812,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "When the inlet supply pressure to a line pressure regulator exceeds 1/2 psig, it shall:",
    options: ["Be bypassed","Have a leak-limiting orifice","Be of a positive shut-off type","Have a valve located immediately downstream"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Be of a positive shut-off type is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24813,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What is 'lockup pressure'?",
    options: ["The pressure downstream of a regulator under no flow conditions","The pressure downstream of a regulator under full flow conditions","The pressure downstream of a regulator during full relief conditions","The pressure downstream of a regulator which activates the internal relief valve"],
    correct: 0,
    reasoning: "The pressure downstream of a regulator under no flow conditions is defined in CSA B149.1-25, Clause 6.9 - Regulators as a fundamental principle in Pressure Regulators.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24814,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "Where is the hydrostatic relief valve used?",
    options: ["Propane gas systems","Liquid propane systems","High pressure natural gas","Natural gas service meter sets"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 6.9 - Regulators, Liquid propane systems is the correct requirement in Pressure Regulators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24815,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "basic",
    question: "True or False: An air/gas proportioning regulator delivers gas under pressure in proportion to the pressure created by mechanical air flow to a nozzle mix burner.",
    options: ["True","False"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, True is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24816,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What units are usually used to express the rate of flow for a regulator?",
    options: ["SCFH","BTUH","MBH","KWH"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Clause 6.9 - Regulators, SCFH is the correct requirement in Pressure Regulators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24817,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "You are selecting the line pressure regulator for a 2 psig natural gas system which had the pipe sized for the maximum allowable pressure drop. What operating inlet pressure would you use for the regulator capacity tables?",
    options: ["0.5 psi","1 psi","1.5 psi","2 psi"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, 1.5 psi is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24818,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "basic",
    question: "True or False: The arrow on a regulator body should point upstream.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 6.9 - Regulators, False is the correct requirement in Pressure Regulators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24819,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "advanced",
    question: "When sizing a propane regulator system what determines the lowest expected vapour inlet pressure?",
    options: ["Pipe size","Cylinder size","Regulator orifice size","Cylinder outside temperature"],
    correct: 3,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Cylinder outside temperature is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24820,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What is the maximum allowable pressure downstream of a pressure controlling device?",
    options: ["2 psig","5 psig","Lowest maximum pressure rating of any downstream components","Highest maximum pressure rating of any downstream components"],
    correct: 2,
    reasoning: "Lowest maximum pressure rating of any downstream components is defined in CSA B149.1-25, Clause 6.9 - Regulators as a fundamental principle in Pressure Regulators.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24821,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "basic",
    question: "True or False: A relief valve will decrease a regulator's capacity.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 6.9 - Regulators, False is the correct requirement in Pressure Regulators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24822,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What measures the system pressure when using a direct operated relief valve?",
    options: ["Pitot tube","Diaphragm","Loading spring","Restricting element"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Diaphragm is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24823,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What types of overpressure protection incorporate a restricting element?",
    options: ["Relief valves","Series regulation","Slam shut devices","Monitor regulation"],
    correct: 3,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Monitor regulation is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24824,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "basic",
    question: "True or False: An overpressure shut-off (OPSO) will automatically reset.",
    options: ["True","False"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, False is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24825,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "Which type of pressure limiting system has a regulator that is rarely exercised?",
    options: ["Pilot system","Series Regulation","Working monitors","Wide open monitoring"],
    correct: 3,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Wide open monitoring is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24826,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What is the most common type of meter used on residential installations?",
    options: ["Geared","Lobed","Orifice","Diaphragm"],
    correct: 3,
    reasoning: "Diaphragm is defined in CSA B149.1-25, Clause 6.9 - Regulators as a fundamental principle in Pressure Regulators.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24827,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "Which meter corrects for temperature and pressure?",
    options: ["Bellows","Mechanical Rotary","Electronic Volume Corrector","Electronic Temperature Compensating Index"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Electronic Volume Corrector is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24828,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "For what purpose does a gas fitter clock a meter?",
    options: ["Solely used as a gas leak check","To see how long it takes the test dial to go around","To determine how much gas an appliance consumes per hour","To check how much gas is consumed in a month for billing purpose"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 6.9 - Regulators, To determine how much gas an appliance consumes per hour is the correct requirement in Pressure Regulators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24829,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "If a natural gas meter with 7 inches water column pressure is used to clock an appliance and it takes 24 seconds for one revolution of a 2 cubic foot test dial, what is the input of the appliance being fired?",
    options: ["300 MBH","3,000 MBH","30,000 MBH","300,000 MBH"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, 300 MBH is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24830,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "If a natural gas meter at sea level with 5 psig pressure is used to clock an appliance and it takes 60 seconds for one revolution of a 5 cubic foot test dial, the CV of the gas is 1050btu/ft3, what is the input of the appliance being fired?",
    options: ["315,000 Btu/h","402,000 Btu/h","422,100 Btu/h","1,575,100 Btu/h"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, 422,100 Btu/h is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24831,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "An appliance is installed at a high elevation where the local atmospheric pressure is 85 kPa. If a natural gas meter with 14 kPa (2psi) pressure is used to clock the appliance and it takes 30 seconds for one revolution of a .05 m3 test dial, the CV of the gas is 10.35 kW/m3, what is the input of the appliance being fired?",
    options: ["60.67 kW","62.10 kW","70.79 kW","83.21 kW"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, 62.10 kW is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24832,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "basic",
    question: "True or False: Rotary meters are very effective for leak testing a gas system.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 6.9 - Regulators, False is the correct requirement in Pressure Regulators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24833,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What procedure should be used to identify if the test dial has possibly moved back to its original position when conducting a working pressure leak test using a diaphragm meter?",
    options: ["Turn off the gas","Mark both test dials","Mark the position of the smallest test dial","Mark two positions on the smallest test dial"],
    correct: 3,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Mark two positions on the smallest test dial is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24834,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "If the temperature of a gas trapped in a container is increased, what happens to the pressure?",
    options: ["Increases","Decrease","Stays the same","It depends on the type of gas"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Increases is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24835,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "If the temperature of a gas decreases in a flexible container (such as the bellows of a diaphragm meter), what happens to the volume?",
    options: ["Increases","Decrease","Stays the same","It depends on the type of gas"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Clause 6.9 - Regulators, Decrease is the correct requirement in Pressure Regulators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24836,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What is the pressure in the propane container directly related to?",
    options: ["Temperature of the liquid propane","Temperature of the propane gas","Volume of propane left in the cylinder","Size of the propane container"],
    correct: 0,
    reasoning: "Temperature of the liquid propane is defined in CSA B149.1-25, Clause 6.9 - Regulators as a fundamental principle in Pressure Regulators.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24837,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "basic",
    question: "True or False: A shut-off valve cannot be installed upstream of a relief valve to allow for the removal of the relief valve for servicing without emptying the contents of the tank.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Clause 6.9 - Regulators, True is the correct requirement in Pressure Regulators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24838,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "If the relief valve on a refillable propane container opens, what is the first action that must be taken?",
    options: ["Close the excess flow valve","Open the fixed liquid level gauge","Shut off the propane container service valve","Cool the tank with cold water to decrease the pressure"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Clause 6.9 - Regulators, Shut off the propane container service valve is the correct requirement in Pressure Regulators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24839,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What does the electric meter record?",
    options: ["Volts","Amperes","Horsepower","Kilowatt-hours"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Clause 6.9 - Regulators, Kilowatt-hours is the correct requirement in Pressure Regulators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24840,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "basic",
    question: "Control valves open and close in response to changes in temperature, pressure, humidity, or fluid flow.",
    options: ["True","False"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, True is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24841,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What is the purpose of an operating pressuretrol?",
    options: ["To stop the boiler if the steam pressure gets too high","To start the boiler when the steam pressure drops","To shut-off gas supply in the event of an overpressure condition in the burner valve train assembly","To shut-off gas supply in the event of an under pressure condition in the burner valve train assembly"],
    correct: 0,
    reasoning: "To stop the boiler if the steam pressure gets too high is defined in CSA B149.1-25, Clause 6.9 - Regulators as a fundamental principle in Pressure Regulators.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24842,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "The servo regulator built into a combination gas valve serves as which type of gas pressure regulator?",
    options: ["System regulator","Service regulator","Appliance regulator","Over pressure protection regulator"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Appliance regulator is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24843,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What type of mechanical ventilation system delivers fresh air under pressure and depends on exfiltration for the removal of stale air?",
    options: ["Balanced","Direct duct","Supply only","Exhaust only"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Supply only is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24844,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "basic",
    question: "An exhaust fan system in a dwelling causes a positive pressure due to suction force within the dwelling.",
    options: ["True","False"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, False is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24845,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "basic",
    question: "The appliance regulator is usually pre-adjusted for use with the type of gas specified on the rating plate and for a specific outlet pressure.",
    options: ["True","False"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, True is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24846,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "basic",
    question: "When checking the manifold pressure, there must be gas flowing to properly read and adjust pressures.",
    options: ["True","False"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, True is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24847,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "Two factors used to determine the selection of a properly sized pump for a hydronic system are pressure loss and .",
    options: ["System type","Pipe size","Flow rate","Tank capacity"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Flow rate is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24848,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What should be used to measure a water heater's manifold pressure?",
    options: ["Manometer","Multimeter","Flushometer","Frometer"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Manometer is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24849,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "How is manifold pressure measured on a residential furnace?",
    options: ["Upstream of the combination gas valve with the appliance shut off","Downstream of the combination gas valve with the appliance shut off","Upstream of the combination gas valve with the appliance operating","Downstream of the combination gas valve with the appliance operating"],
    correct: 3,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Downstream of the combination gas valve with the appliance operating is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24850,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "Which device within a hydronic heating system is required to release water during an unsafe condition caused by excessive pressures?",
    options: ["Expansion tank","Relief valve","Air separator","High limit aquastat"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Relief valve is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24851,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "Where is the area of lowest pressure within a centrifugal circulator?",
    options: ["Impeller eye","Volute","Outlet port","Pump body"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Impeller eye is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24852,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "\"The pressure difference a pump can produce between its inlet and outlet ports\" is a definition of which of the following?",
    options: ["Flow rate","Velocity","Head","Drift"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Head is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24853,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What should be checked first if the boiler's system pressure is higher than normal?",
    options: ["Expansion tank","Relief valve","LWCO","PRV"],
    correct: 3,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, PRV is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24854,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "How can a technician increase a hydronic system's static pressure setting?",
    options: ["Turn the PRV adjustment clockwise","Turn the PRV adjustment counter-clockwise","Open the relief valve","Open the boiler drain"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Turn the PRV adjustment clockwise is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24855,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "basic",
    question: "You tell if a differential pressure bypass valve is working correctly if the pressure at the discharge side of the pump does not increase when zone valves close.",
    options: ["True","False"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, True is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24856,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "What type of unit heater produces low pressure, high volume flow?",
    options: ["Blower type","Axial fan type","Counterflow type","Low intensity type"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Axial fan type is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24857,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "Select the statement that best defines velocity pressure.",
    options: ["Decrease in air pressure caused by friction","Pressure that is created by the air movement","Pressure against which the blower has to work","Air pressure in the duct at right angles to the direction of air flow"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, Pressure that is created by the air movement is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24858,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "intermediate",
    question: "Where is the lowest air pressure in the ductwork of a forced air heating system?",
    options: ["On the supply side after the cooling coil","On the return side upstream of the filter","On the return side between the furnace and the filter","On the supply side between the furnace and the cooling coil"],
    correct: 2,
    reasoning: "Based on CSA B149.1-25, Clause 6.9 - Regulators, On the return side between the furnace and the filter is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  {
    id: 24859,
    unit: 11,
    unitName: "Pressure Regulators",
    difficulty: "advanced",
    question: "Calculate the air velocity for a velocity pressure reading of 0.04 inches of w.c.",
    options: ["566 ft/min","801 ft/min","1132 ft/min","1602 ft/min"],
    correct: 1,
    reasoning: "801 ft/min is calculated according to the requirements in CSA B149.1-25, Clause 6.9 - Regulators. This calculation ensures proper system sizing and safe operation.",
    csaReference: "CSA B149.1-25, Clause 6.9 - Regulators"
  },
  // ========================================
  // UNIT 12 - BASIC ELECTRICITY FOR GAS FIRED EQUIPMENT - NEW QUESTIONS (42 Questions)
  // ========================================
  {
    id: 24860,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "Water heater gas controls are generally set to which of the following operating temperatures?",
    options: ["110 deg F","120 deg F","130 deg F","200 deg F"],
    correct: 2,
    reasoning: "According to CSA Unit 12 - Electrical Controls, 130 deg F is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24861,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "How are transformers rated?",
    options: ["By the voltage supply","By the connected circuit breaker","By the amount of power the secondary windings can handle","By the ampacity of the supply conductors"],
    correct: 2,
    reasoning: "According to CSA Unit 12 - Electrical Controls, By the amount of power the secondary windings can handle is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24862,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "Relays are magnetically operated according to which principle?",
    options: ["Microwave principle","Solenoid principle","Bernoulli's principle","Principles of plasma"],
    correct: 1,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Solenoid principle is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24863,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "basic",
    question: "Control relays are best suited for controlling single-phase pumps of any size. True or False?",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA Unit 12 - Electrical Controls, False is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24864,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "How does a contactor differ from a relay?",
    options: ["It is magnetically operated","Contacts are rated for light duty","It can have multiple sets of contacts","Contacts are rated for large currents"],
    correct: 3,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Contacts are rated for large currents is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24865,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "basic",
    question: "The manufacturer recommends maximum lengths of wiring runs for self-powered control systems.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA Unit 12 - Electrical Controls, True is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24866,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "What is the difference between a wound rotor motor and squirrel cage induction motor?",
    options: ["Wound rotor motor has insulated windings","Wound rotor motor has low starting torque","Squirrel cage induction motor has insulated windings","Squirrel cage induction motor has slip rings and brushes"],
    correct: 0,
    reasoning: "Wound rotor motor has insulated windings is defined in CSA Unit 12 - Electrical Controls as a fundamental principle in Basic Electricity for Gas Fired Equipment.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24867,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "What two ways can the stator phase coils in a three-phase induction motor be connected?",
    options: ["AC or DC","Delta or wye","In phase or out of phase","Synchronized or asynchronized"],
    correct: 1,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Delta or wye is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24868,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "advanced",
    question: "What is the biggest difference in design between a synchronous motor and an induction motor?",
    options: ["DC electromagnetic rotor","Squirrel cage rotor","Start capacitor","External start resistor"],
    correct: 0,
    reasoning: "DC electromagnetic rotor is defined in CSA Unit 12 - Electrical Controls as a fundamental principle in Basic Electricity for Gas Fired Equipment.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24869,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "This start relay has a normally closed set of start winding contacts that are opened by the relay coil after the motor has started.",
    options: ["Motor starter","Current relay","Potential relay","Solid-state relay"],
    correct: 2,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Potential relay is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24870,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "basic",
    question: "When removing or replacing a capacitor, you should always short out the terminals to drain any stored charge.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA Unit 12 - Electrical Controls, True is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24871,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "The temperature disc, bimetallic strip and rod and tube controls all operate on which principle?",
    options: ["Electro-magnetism","Thermoelectric effect","Thermal expansion of solids","Thermal expansion of liquids"],
    correct: 2,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Thermal expansion of solids is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24872,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "Sealed bellows controls operate on which principle?",
    options: ["Electro-magnetism","Thermoelectric effect","Thermal expansion of solids","Thermal expansion of liquids"],
    correct: 3,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Thermal expansion of liquids is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24873,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "What control components produce electricity when heated?",
    options: ["Transistor","Thermistor","Thermocouple","Bimetallic strip"],
    correct: 2,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Thermocouple is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24874,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "Thermostat, operating aquastat and operating pressuretrol all belong to what section of the control system?",
    options: ["Operating controllers","Ignition control module","Limit and safety controllers","Combustion safety controller"],
    correct: 0,
    reasoning: "Based on CSA Unit 12 - Electrical Controls, Operating controllers is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24875,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "basic",
    question: "Position and location are important factors for thermostat installation.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA Unit 12 - Electrical Controls, True is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24876,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "basic",
    question: "Thermostats should be placed in a room on an outside wall.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA Unit 12 - Electrical Controls, False is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24877,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "How do electronic thermostat control temperature swing overshoot?",
    options: ["Night setback","Millivolt anticipator","Cycles per hour method","Adjustable Heat anticipator"],
    correct: 2,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Cycles per hour method is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24878,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "What CPH setting do most electronic thermostats come pre-set at?",
    options: ["1-2","4-5","7-8","10-11"],
    correct: 1,
    reasoning: "According to CSA Unit 12 - Electrical Controls, 4-5 is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24879,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "Different types of multi-stage thermostats use a variety of methods to initiate furnace staging, select the method that employs algorithms to anticipate demand.",
    options: ["CPH staging","Setpoint staging","Time-based staging","Rate-of-change staging"],
    correct: 3,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Rate-of-change staging is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24880,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "What are the most common auxiliary devices found in control systems?",
    options: ["Relays","Switches","Contactors","Protective devices"],
    correct: 1,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Switches is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24881,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "basic",
    question: "Integrated electronic control boards have replaced most time delay relays.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA Unit 12 - Electrical Controls, True is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24882,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "What is matching the polarity of the primary and secondary sides of a transformer called?",
    options: ["Phasing","Modulating","Sequencing","Polarization"],
    correct: 0,
    reasoning: "Phasing is defined in CSA Unit 12 - Electrical Controls as a fundamental principle in Basic Electricity for Gas Fired Equipment.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24883,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "What is the purpose of the control modules safe start check?",
    options: ["To confirm the pilot flame","To confirm the main flame","To confirm the induced fan is running","To confirm there is not already an existing flame"],
    correct: 3,
    reasoning: "To confirm there is not already an existing flame is defined in CSA Unit 12 - Electrical Controls as a fundamental principle in Basic Electricity for Gas Fired Equipment.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24884,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "Suppose the furnace won't light, thermostat is calling for heat and you get a reading of 24 V across the thermostat connections.",
    options: ["Replace transformer","Replace the gas valve","Replace the fan switch","Replace the thermostat"],
    correct: 3,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Replace the thermostat is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24885,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "basic",
    question: "Thermostats are an example of a control that can be recalibrated or readjusted.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA Unit 12 - Electrical Controls, True is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24886,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "Vapour barriers are used to restrict the flow of moisture through the building envelope. What is used to control the moisture levels in the building?",
    options: ["Insulation","Range hoods","Mechanical ventilation equipment","Doors and windows"],
    correct: 2,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Mechanical ventilation equipment is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24887,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "How is the oven temperature recalibrated on mechanical style gas ovens that do not have adjustable thermostats?",
    options: ["Adjust the temperature setting knob","Change the gas orifices","Adjust the manifold pressure","Factory setting cannot be changed"],
    correct: 0,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Adjust the temperature setting knob is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24888,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "What is the maximum setting of a high-limit control on a forced-air furnace?",
    options: ["120°C (250°F)","100°C (212°F)","250°C (120°F)","200°C (392°F)"],
    correct: 0,
    reasoning: "120°C (250°F) is defined in CSA Unit 12 - Electrical Controls as a fundamental principle in Basic Electricity for Gas Fired Equipment.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24889,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "In reference to a thermostatic gas control, what is the typical differential temperature maintained by the rod and tube aquastat?",
    options: ["20°F to 25°F","10°F to 15°F","5°F to 10°F","15°F to 20°F"],
    correct: 3,
    reasoning: "According to CSA Unit 12 - Electrical Controls, 15°F to 20°F is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24890,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "In reference to a thermostatic gas control, what does ECO stand for?",
    options: ["Energy Contact Open","Energy Cut Off","Efficiency Contact Order","End Cycle Over"],
    correct: 1,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Energy Cut Off is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24891,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "On what type of furnace(s) could you see a combination high-limit/fan control?",
    options: ["Low-efficiency only","High-efficiency only","Low-efficiency and mid-efficiency","Mid-efficiency and high-efficiency"],
    correct: 2,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Low-efficiency and mid-efficiency is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24892,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "Referencing a combination control, what is the approximate normal differential setting of the fan control?",
    options: ["25°F (14°C)","35°F (19°C)","45°F (25°C)","55°F (30°C)"],
    correct: 0,
    reasoning: "According to CSA Unit 12 - Electrical Controls, 25°F (14°C) is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24893,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "On which types of furnaces would you find an auxiliary limit control?",
    options: ["Only central furnaces","Downflow furnaces only","Horizontal or downflow furnaces","Upflow, horizontal, and downflow furnaces"],
    correct: 2,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Horizontal or downflow furnaces is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24894,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "Which of the following would be considered part of a hydronic control system?",
    options: ["Boiler","Circulator","Radiator","Aquastat"],
    correct: 3,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Aquastat is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24895,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "basic",
    question: "A thermostatic radiator valve can be operated by mechanical or electric drive head.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA Unit 12 - Electrical Controls, True is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24896,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "For a millivolt control system, select the thermostat wire gauge that will enable the farthest distance between the thermostat and the heater?",
    options: ["14 GA","16 GA","18 GA","20 GA"],
    correct: 0,
    reasoning: "According to CSA Unit 12 - Electrical Controls, 14 GA is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24897,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "At approximately what distance from the floor should a thermostat be located?",
    options: ["100 cm","125 cm","150 cm","200cm"],
    correct: 2,
    reasoning: "According to CSA Unit 12 - Electrical Controls, 150 cm is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24898,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "Which type of control valve will provide an infinite number of firing rates between low fire and high fire?",
    options: ["Manual control valve","Two stage control valve","Modulating control valve","Single-stage control valve"],
    correct: 2,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Modulating control valve is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24899,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "What type of thermostat is required for a fully modulating unit heater?",
    options: ["Millivolt thermostat","Two stage thermostat","Modulating thermostat","Single stage thermostat"],
    correct: 2,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Modulating thermostat is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24900,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "intermediate",
    question: "How is the blower controlled in a gas fireplace?",
    options: ["Thermopile","Pressure switch","Wall thermostat","Temperature sensitive switch"],
    correct: 3,
    reasoning: "According to CSA Unit 12 - Electrical Controls, Temperature sensitive switch is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  {
    id: 24901,
    unit: 12,
    unitName: "Basic Electricity for Gas Fired Equipment",
    difficulty: "basic",
    question: "If multiple separately controlled and sequenced duct furnaces are installed in series within the same duct, the upstream duct furnaces must operate before the downstream duct furnaces.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA Unit 12 - Electrical Controls, True is the correct requirement in Basic Electricity for Gas Fired Equipment to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 12 - Electrical Controls"
  },
  // ========================================
  // UNIT 13 - CONTROLS - NEW QUESTIONS (4 Questions)
  // ========================================
  {
    id: 24902,
    unit: 13,
    unitName: "Controls",
    difficulty: "intermediate",
    question: "For units that are supplied with a CO sensor, how often should it be tested?",
    options: ["Daily","Weekly","Monthly","Annually"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7 - Control Systems, Weekly is the correct requirement in Controls to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Control Systems"
  },
  {
    id: 24903,
    unit: 13,
    unitName: "Controls",
    difficulty: "intermediate",
    question: "What should be measured to determine the integrity of a flammable vapour sensor?",
    options: ["Pressure","Magnitude","Resistance","Amperage"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7 - Control Systems, Resistance is the correct requirement in Controls to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Control Systems"
  },
  {
    id: 24904,
    unit: 13,
    unitName: "Controls",
    difficulty: "intermediate",
    question: "What side of a structure should an outdoor air temperature sensor be placed?",
    options: ["North","South","East","West"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7 - Control Systems, North is the correct requirement in Controls to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7 - Control Systems"
  },
  {
    id: 24905,
    unit: 13,
    unitName: "Controls",
    difficulty: "intermediate",
    question: "What is the maximum setting for a pool boiler's high limit aquastat?",
    options: ["100°F","140°F","160°F","180°F"],
    correct: 3,
    reasoning: "180°F is defined in CSA B149.1-25, Section 7 - Control Systems as a fundamental principle in Controls.",
    csaReference: "CSA B149.1-25, Section 7 - Control Systems"
  },
  // ========================================
  // UNIT 14 - BUILDING AS A SYSTEM - NEW QUESTIONS (17 Questions)
  // ========================================
  {
    id: 24906,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "If you have appliances with draft control devices and appliances without draft control devices in a structure or enclosure that is not air tight (neither constructed as described in Clause 8.2.1 (a) nor complies with 8.2.1 (b) what tables are used to size air supply openings to the outdoors?",
    options: ["8.1 using total input of only appliances having draft control or 8.2 using total input of all appliances","8.3 using total input of only appliances having draft control or 8.4 using total input of all appliances","Any of the above","None of the above"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 8 - Combustion Air, 8.3 using total input of only appliances having draft control or 8.4 using total input of all appliances is the correct requirement in Building as a System to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 8 - Combustion Air"
  },
  {
    id: 24907,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "advanced",
    question: "A draft hood installed on an atmospheric furnace is designed to:",
    options: ["Neutralize a negative pressure in the structure","Maintain a neutral over fire draft condition in the combustion chamber","Reverse a down draft condition in the common vent","Re-ignite the main flame when a down draft blows it out"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 8 - Combustion Air, Maintain a neutral over fire draft condition in the combustion chamber is the correct requirement in Building as a System to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 8 - Combustion Air"
  },
  {
    id: 24908,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "What is ventilation air?",
    options: ["The air required for satisfactory combustion of gas including excess air","The ambient air that is admitted to the venting system at the draft hood, draft diverter, or draft regulator","The portion of the combustion air that is supplied for the initial stages of the combustion process and is supplied upstream from the point of ignition","Air that is admitted to a space containing an appliance to replace air exhausted through a ventilation opening or by means of exfiltration"],
    correct: 3,
    reasoning: "Air that is admitted to a space containing an appliance to replace air exhausted through a ventilation opening or by means of exfiltration is defined in CSA B149.1-25, Section 8 - Combustion Air as a fundamental principle in Building as a System.",
    csaReference: "CSA B149.1-25, Section 8 - Combustion Air"
  },
  {
    id: 24909,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "An air supply inlet to a building must be located at least ____\" above outside grade level",
    options: ["18\"","6\"","14\"","12\""],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 8 - Combustion Air, 12\" is the correct requirement in Building as a System to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 8 - Combustion Air"
  },
  {
    id: 24910,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "What condition does stack effect create on the lower levels?",
    options: ["High humidity","Neutral pressure","Positive pressure","Negative pressure"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 8 - Combustion Air, Negative pressure is the correct requirement in Building as a System to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 8 - Combustion Air"
  },
  {
    id: 24911,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "basic",
    question: "Rooms with northern exposure are likely to have greater heat loss, air infiltration or window condensation problems than other rooms?",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Combustion Air, True is the correct requirement in Building as a System to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 8 - Combustion Air"
  },
  {
    id: 24912,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "What component of the building envelope protects the underlying layers of the building envelope from the driving forces of wind, rain, ground water, and sunlight?",
    options: ["Air barrier","Building skin","Insulation","Vapour barrier"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 8 - Combustion Air, Building skin is the correct requirement in Building as a System to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 8 - Combustion Air"
  },
  {
    id: 24913,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "Where is a vapour barrier installed in the building envelope?",
    options: ["Interior side of the insulation","Both sides of the insulation","Either side of the insulation","Exterior side of the insulation"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Combustion Air, Interior side of the insulation is the correct requirement in Building as a System to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 8 - Combustion Air"
  },
  {
    id: 24914,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "What type of mechanical ventilation system creates a negative or suction pressure and fresh air enters the building by infiltration?",
    options: ["Balanced","Direct duct","Supply only","Exhaust only"],
    correct: 3,
    reasoning: "Based on CSA B149.1-25, Section 8 - Combustion Air, Exhaust only is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 8 - Combustion Air"
  },
  {
    id: 24915,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "What is the minimum ventilation rate in a room with a master bedroom in a dwelling unit?",
    options: ["0.14 m2","0.28 m2","05 L/s","10 L/s"],
    correct: 1,
    reasoning: "0.28 m2 is defined in CSA B149.1-25, Section 8 - Combustion Air as a fundamental principle in Building as a System.",
    csaReference: "CSA B149.1-25, Section 8 - Combustion Air"
  },
  {
    id: 24916,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "If a room is mechanically cooled in summer, what is the ventilation rate required?",
    options: ["0.5 ACH","1 ACH","1.5 ACH","2 ACH"],
    correct: 0,
    reasoning: "0.5 ACH is defined in CSA B149.1-25, Section 8 - Combustion Air as a fundamental principle in Building as a System.",
    csaReference: "CSA B149.1-25, Section 8 - Combustion Air"
  },
  {
    id: 24917,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "What will be the effect on relative humidity of introducing ventilation air to the building during the heating season?",
    options: ["Increase relative humidity","Decreased relative humidity","No effect on relative humidity"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 8 - Combustion Air, Decreased relative humidity is required for proper venting in Building as a System applications.",
    csaReference: "CSA B149.1-25, Section 8 - Combustion Air"
  },
  {
    id: 24918,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "What is the danger of having too little ventilation in a dwelling?",
    options: ["Higher cost to ventilate","Excessive depressurization","Lead to a build up of pollutants","Can drive moist air into wall cavities"],
    correct: 2,
    reasoning: "Lead to a build up of pollutants is defined in CSA B149.1-25, Section 8 - Combustion Air as a fundamental principle in Building as a System.",
    csaReference: "CSA B149.1-25, Section 8 - Combustion Air"
  },
  {
    id: 24919,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "Where is the draft relief opening typically located on a room heater?",
    options: ["On top of the unit","On the side of the unit","At the lower front of the unit","Under the draft hood at the back of the unit"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 8 - Combustion Air, Under the draft hood at the back of the unit is the correct requirement in Building as a System to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 8 - Combustion Air"
  },
  {
    id: 24920,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "What is the purpose of a reversible draft diverter on a gas room heater?",
    options: ["To connect a power vent","To connect unit to a direct vent kit","Enable unit to be used as an unvented heater","To enable a horizontal vent connection to the unit"],
    correct: 3,
    reasoning: "To enable a horizontal vent connection to the unit is defined in CSA B149.1-25, Section 8 - Combustion Air as a fundamental principle in Building as a System.",
    csaReference: "CSA B149.1-25, Section 8 - Combustion Air"
  },
  {
    id: 24921,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "Which type of ventilation system can lead to problems with moisture laden air being driven onto the wall cavities?",
    options: ["Natural ventilation","Balanced ventilation","Supply fan ventilation","Exhaust fan ventilation"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 8 - Combustion Air, Supply fan ventilation is required for proper venting in Building as a System applications.",
    csaReference: "CSA B149.1-25, Section 8 - Combustion Air"
  },
  {
    id: 24922,
    unit: 14,
    unitName: "Building as a System",
    difficulty: "intermediate",
    question: "What is the danger of having too little ventilation in a dwelling?",
    options: ["Increased costs","Cool and Drafty","Positive building pressures","A buildup of pollutants within the dwelling"],
    correct: 3,
    reasoning: "A buildup of pollutants within the dwelling is defined in CSA B149.1-25, Section 8 - Combustion Air as a fundamental principle in Building as a System.",
    csaReference: "CSA B149.1-25, Section 8 - Combustion Air"
  },
  // ========================================
  // UNIT 15 - DOMESTIC APPLIANCES - NEW QUESTIONS (22 Questions)
  // ========================================
  {
    id: 24923,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "The minimum top clearance from combustibles for a domestic gas range is?",
    options: ["24 inches","30 inches","36 inches","48 inches"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, 30 inches is the correct requirement in Domestic Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24924,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "The maximum length of a corrugated metal connector for a gas range is:",
    options: ["5 feet","8 feet","6 feet","24 inches"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, 6 feet is the correct requirement in Domestic Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24925,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "A domestic gas dryer exhaust duct must be?",
    options: ["Made of non combustible material","Located 6'from a regulator vent","Located 10' from a regulator vent","Made secure using three sheet metal screws"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, Made of non combustible material is the correct requirement in Domestic Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24926,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "Gas dryers are required to be vented:",
    options: ["Through a hepa filter","To the outdoors","To a filtered container outdoors","To a heat recovery ventilation unit"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, To the outdoors is required for proper venting in Domestic Appliances applications.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24927,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "What is the minimum clearance to combustibles on a commercial type clothes dryer?",
    options: ["18\" above, 18\" back and sides, 18\" front","24\" above, 18\" back and sides, 36\" front","30\" above, 18\" back and sides, 24\" front","6\" above, 6\" back and sides, 24\" front"],
    correct: 0,
    reasoning: "18\" above, 18\" back and sides, 18\" front is defined in CSA B149.1-25, Section 7.3 - Domestic Appliances as a fundamental principle in Domestic Appliances.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24928,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "What is the minimum distance that a service regulator vent must be from a domestic dryer exhaust duct?",
    options: ["3ft","6ft","8 ft","10ft"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, 3ft is required for proper venting in Domestic Appliances applications.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24929,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "basic",
    question: "A clothes dryer is considered to be a part of the mechanical systems in a building.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, True is the correct requirement in Domestic Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24930,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "basic",
    question: "Clothes dryers can be vented inside to capture heat energy.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, False is required for proper venting in Domestic Appliances applications.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24931,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "How is the final connection to the gas supply manifold done to provide for movement of the gas range in order to clean behind it?",
    options: ["A maximum 0.6 m long flexible metal gas connector","A maximum 1.0 m long flexible metal gas connector","A maximum 2.0 m long flexible metal gas connector","A maximum 3.0 m long flexible metal gas connector"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, A maximum 2.0 m long flexible metal gas connector is the correct requirement in Domestic Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24932,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "What is the allowable clearance to combustibles for a range certified for zero clearance (without additional protection)?",
    options: ["600mm above, 25 mm at the back","750mm above, 25 mm at the back","600mm above, 150 mm at the back","750mm above, 150 mm at the back"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, 750mm above, 25 mm at the back is the correct requirement in Domestic Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24933,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "How long should a gas range operate before adjusting the oven temperature calibration?",
    options: ["1 minute","5 minutes","15 minutes","30 minutes"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, 15 minutes is the correct requirement in Domestic Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24934,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "If there are no manufacturer's rating plate clearances, what are the allowable code clearances to combustibles from the top, back and sides of a domestic gas dryer?",
    options: ["50 mm","150 mm","450 mm","600 mm"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, 150 mm is the correct requirement in Domestic Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24935,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "What is the maximum length of a metal connector used to connect a gas dryer?",
    options: ["A maximum 0.6 m long flexible metal gas connector","A maximum 1.0 m long flexible metal gas connector","A maximum 2.0 m long flexible metal gas connector","A maximum 3.0 m long flexible metal gas connector"],
    correct: 2,
    reasoning: "A maximum 2.0 m long flexible metal gas connector is defined in CSA B149.1-25, Section 7.3 - Domestic Appliances as a fundamental principle in Domestic Appliances.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24936,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "What will cause a gas dryer to keep running after its door is opened?",
    options: ["Faulty door switch","Faulty booster coil","Faulty holding coil","Defective centrifugal switch"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, Faulty door switch is the correct requirement in Domestic Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24937,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "What problem would be caused by the dryer not being level?",
    options: ["Dryer smokes","Clothes drying too slowly","Drum operates, but noisily","Main burner does not light"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, Drum operates, but noisily is the correct requirement in Domestic Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24938,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "basic",
    question: "During the lighting of a barbecue, the lid must be closed.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, False is the correct requirement in Domestic Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24939,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "advanced",
    question: "Combination systems are designed to provide a combination of domestic water heating and space heating.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, True is the correct requirement in Domestic Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24940,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "basic",
    question: "Any domestic water heater can be used for space heating applications.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, False is the correct requirement in Domestic Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24941,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "advanced",
    question: "Refer to Table 5 HUD-FHA Water Heater Capacities for One- and Two- Family Living Units in Figure 3-1 (Design worksheet). What size water heater is recommended for a house with 3 bathrooms and 4 bedrooms? (Consider the domestic demand only.)",
    options: ["50 USG","20 USG","30 USG","40 USG"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, 40 USG is the correct requirement in Domestic Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24942,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "What is the range of a typical modulating furnace?",
    options: ["Between 0% and 100% of input","Between 40% and 100% of input","Between 0% and 100% of capacity","Between 40% and 100% of capacity"],
    correct: 3,
    reasoning: "Between 40% and 100% of capacity is defined in CSA B149.1-25, Section 7.3 - Domestic Appliances as a fundamental principle in Domestic Appliances.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24943,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "intermediate",
    question: "Which type of boiler could be used to directly heat domestic water?",
    options: ["Steel water-tube","Copper fin-tube","Cast-iron sectional","Steel fire-tube"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, Copper fin-tube is the correct requirement in Domestic Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  {
    id: 24944,
    unit: 15,
    unitName: "Domestic Appliances",
    difficulty: "basic",
    question: "An ECM maintains an efficiency range between 60% and 80%for all speeds",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.3 - Domestic Appliances, True is the correct requirement in Domestic Appliances to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.3 - Domestic Appliances"
  },
  // ========================================
  // UNIT 16 - GAS FIRED REFRIGERATORS - NEW QUESTIONS (6 Questions)
  // ========================================
  {
    id: 24945,
    unit: 16,
    unitName: "Gas Fired Refrigerators",
    difficulty: "basic",
    question: "The condenser expels the heat removed from the refrigerator compartment into the ambient air.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.15 - Refrigerators, True is the correct requirement in Gas Fired Refrigerators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.15 - Refrigerators"
  },
  {
    id: 24946,
    unit: 16,
    unitName: "Gas Fired Refrigerators",
    difficulty: "basic",
    question: "Gas Absorption heat pumps have higher operating efficiencies than electric heat pumps.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.15 - Refrigerators, False is the correct requirement in Gas Fired Refrigerators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.15 - Refrigerators"
  },
  {
    id: 24947,
    unit: 16,
    unitName: "Gas Fired Refrigerators",
    difficulty: "basic",
    question: "An absorption refrigerator is noiseless.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.15 - Refrigerators, False is the correct requirement in Gas Fired Refrigerators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.15 - Refrigerators"
  },
  {
    id: 24948,
    unit: 16,
    unitName: "Gas Fired Refrigerators",
    difficulty: "intermediate",
    question: "Why does a gas-fired refrigerator have to be installed level?",
    options: ["So it drains properly","To ensure it vents properly","So the door will swing smoothly","It depends on gravity to move the liquids and gases inside"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7.15 - Refrigerators, It depends on gravity to move the liquids and gases inside is the correct requirement in Gas Fired Refrigerators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.15 - Refrigerators"
  },
  {
    id: 24949,
    unit: 16,
    unitName: "Gas Fired Refrigerators",
    difficulty: "intermediate",
    question: "How long does the refrigerator need to be operating before you can check whether it is operating properly?",
    options: ["10 minutes","30 minutes","6 to 8 hrs.","24 hrs."],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.15 - Refrigerators, 30 minutes is the correct requirement in Gas Fired Refrigerators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.15 - Refrigerators"
  },
  {
    id: 24950,
    unit: 16,
    unitName: "Gas Fired Refrigerators",
    difficulty: "basic",
    question: "Ice buildup on the fins of the evaporator does not reduce the efficiency of the refrigerator.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.15 - Refrigerators, False is the correct requirement in Gas Fired Refrigerators to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.15 - Refrigerators"
  },
  // ========================================
  // UNIT 17 - CONVERSION BURNERS - NEW QUESTIONS (1 Questions)
  // ========================================
  {
    id: 24951,
    unit: 17,
    unitName: "Conversion Burners",
    difficulty: "intermediate",
    question: "What is the purpose of a water test for conversion purposes?",
    options: ["Check chimney for condensing","Check boiler heat exchanger for leaks","Check furnace heat exchanger for leaks","Check the boiler make-up water supply quality"],
    correct: 1,
    reasoning: "Check boiler heat exchanger for leaks is defined in CSA B149.1-25, Section 7 - Conversion Equipment as a fundamental principle in Conversion Burners.",
    csaReference: "CSA B149.1-25, Section 7 - Conversion Equipment"
  },
  // ========================================
  // UNIT 18 - WATER HEATERS AND COMBINATION SYSTEMS - NEW QUESTIONS (21 Questions)
  // ========================================
  {
    id: 24952,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "A water heater installed in a bathroom shall be?",
    options: ["Direct vent type","Power vent type","Power burner type","Conventional vent type"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, Direct vent type is the correct requirement in Water Heaters and Combination Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24953,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "Can a water heater be used only for space heating purposes?",
    options: ["Yes","No"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, No is the correct requirement in Water Heaters and Combination Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24954,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What is the maximum distance from the floor that the discharge line from a T&P valve on a water heater must terminate?",
    options: ["6 inches.","12 inches.","18 inches.","24 inches."],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, 12 inches. is the correct requirement in Water Heaters and Combination Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24955,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What mixture drops down the return tube to the absorber tank?",
    options: ["Ammonia and air","Liquid ammonia and water","Ammonia and water vapour","Ammonia and hydrogen vapour"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, Ammonia and hydrogen vapour is the correct requirement in Water Heaters and Combination Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24956,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "When a tank may be subject to back siphonage, what must be installed?",
    options: ["Vacuum relief valve","Vacuum breaker","Check valve","Draft hood"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, Vacuum relief valve is the correct requirement in Water Heaters and Combination Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24957,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What is the minimum allowable clearance to combustible material for an underfired storage-type water heater?",
    options: ["150 mm","100 mm","50 mm","25 mm"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, 50 mm is the correct requirement in Water Heaters and Combination Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24958,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What type of water heater is most commonly used for residential and low-demand commercial installations?",
    options: ["Indirect-fired system","Direct-fired storage heaters","Tankless water heaters","Fin-tube water heaters"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, Direct-fired storage heaters is the correct requirement in Water Heaters and Combination Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24959,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What heats the stored water in a direct-fired storage heater?",
    options: ["The gas flame's hot products of combustion","A secondary heat transfer fluid","An element immersed in the tank","Gas flames in contact with the tank"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, The gas flame's hot products of combustion is the correct requirement in Water Heaters and Combination Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24960,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What is not a benefit of a tankless water heater?",
    options: ["Heats water on demand","Less space required","Lower firing rates","More efficient"],
    correct: 2,
    reasoning: "Lower firing rates is defined in CSA B149.1-25, Section 7.10 - Water Heaters as a fundamental principle in Water Heaters and Combination Systems.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24961,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What makes a direct-vent water heater different from other types of water heaters?",
    options: ["Combustion products are vented directly from the unit to outdoors","Combustion air is vented directly to the unit from outdoors","Drainage near the unit is required","No storage of water is available"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, Combustion air is vented directly to the unit from outdoors is required for proper venting in Water Heaters and Combination Systems applications.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24962,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "Condensing water heaters achieve high efficiencies by capturing heat.",
    options: ["Latent","Sensible","Specific","Practical"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, Latent is the correct requirement in Water Heaters and Combination Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24963,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "Residential storage-type gas water heaters have been made more resistant to accidents caused by mishandling or improper storage of gasoline or other flammable materials. What is the common name for this type of technology?",
    options: ["ULC","ECO","FVIR","T & P"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, FVIR is the correct requirement in Water Heaters and Combination Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24964,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "Certified combination storage-type or a certified tankless potable water heater is intended for space heating applications of not more than:",
    options: ["75,000 Btu/h (22 kW)","25,000 Btu/h (7.3 kW)","50,000 Btu/h (14.6 kW)","100,000 Btu/h (29.3 kW)"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, 75,000 Btu/h (22 kW) is the correct requirement in Water Heaters and Combination Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24965,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What type of chemicals may be added to a combination system?",
    options: ["Glycol","None","Phosphates","Bromide"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, None is the correct requirement in Water Heaters and Combination Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24966,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What is the minimum size of water heater recommended for a combination system?",
    options: ["60 USG","40 USG","48 USG","90 USG"],
    correct: 2,
    reasoning: "48 USG is defined in CSA B149.1-25, Section 7.10 - Water Heaters as a fundamental principle in Water Heaters and Combination Systems.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24967,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What is the recommended water heater capacity for an air handler rated for 1200 cfm?",
    options: ["60 USG","40 USG","48 USG","90 USG"],
    correct: 3,
    reasoning: "90 USG is defined in CSA B149.1-25, Section 7.10 - Water Heaters as a fundamental principle in Water Heaters and Combination Systems.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24968,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What is the most important step to consider when determining the correct size of a water heater for space heating applications?",
    options: ["Quote the job","Accurate heat loss calculation","Determine the location of the thermostat","Select the fan coil"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, Accurate heat loss calculation is the correct requirement in Water Heaters and Combination Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24969,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "A water heater equipped with an ECO will activate when the temperature of the water in the tank exceeds °F",
    options: ["200","250","100","140"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, 200 is the correct requirement in Water Heaters and Combination Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24970,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What do tankless water heaters use to ensure that there is an adequate (minimum) flow of water through the heat exchanger?",
    options: ["Low-water switch","Flow sensor","Check valve","Ohmmeter"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, Flow sensor is the correct requirement in Water Heaters and Combination Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24971,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "intermediate",
    question: "What contributes to the formation of lime scale in a water heater?",
    options: ["Sodium","Chlorine","Hardness","Low pH"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, Hardness is the correct requirement in Water Heaters and Combination Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  {
    id: 24972,
    unit: 18,
    unitName: "Water Heaters and Combination Systems",
    difficulty: "basic",
    question: "Immediately upstream of the expansion tank is the best place to install a primary circulating pump in a hydronic system.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.10 - Water Heaters, False is the correct requirement in Water Heaters and Combination Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.10 - Water Heaters"
  },
  // ========================================
  // UNIT 19 - FORCED WARM AIR HEATING SYSTEMS - NEW QUESTIONS (28 Questions)
  // ========================================
  {
    id: 24973,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "What type of vent is required when a recessed wall furnace is installed in a partition?",
    options: ["Type B vent","Type BH vent","Type BW vent","Type L vent"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, Type BW vent is required for proper venting in Forced Warm Air Heating Systems applications.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24974,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "The minimum clearances from combustible material for a forced air furnace converted to gas shall be?",
    options: ["Top (casing, bonnet or plenum) 1\", jacket sides and rear 6\", front 24\"","Top (casing, bonnet or plenum) 3\", jacket sides and rear 6\", front 30\"","Top (casing, bonnet or plenum) 2\", jacket sides and rear 4\", front 24\"","Top (casing, bonnet or plenum) 3\", jacket sides and rear 3\", front 30\""],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, Top (casing, bonnet or plenum) 1\", jacket sides and rear 6\", front 24\" is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24975,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "What must be done if a defective heat exchanger is found in a dwelling unit?",
    options: ["It may be welded, if welder is certified","It shall be replaced","If defects do not affect the flame, nothing has to be done","If carbon monoxide is not present nothing has to be done"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, It shall be replaced is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24976,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "Suppose that upon testing a furnace, the fan motor will not run. The burner is operating, the heat exchanger temperature is above the fan-on setpoint and the fan switch contacts are open. What should you do?",
    options: ["Replace the fan","Replace transformer","Replace the fan switch","Replace the thermostat"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, Replace the fan switch is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24977,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "basic",
    question: "Cool air can contain more water vapour than warm air?",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, False is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24978,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "If cracks are discovered in the heat exchanger of a furnace, what must be done?",
    options: ["They can be repaired by welding","They can be repaired with furnace cement","The heat exchanger of appliance must be replaced","They can be repaired with high temperature silicone"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, The heat exchanger of appliance must be replaced is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24979,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "How would an installer determine the existing ductwork is adequately sized for the new high-efficient furnace?",
    options: ["Complete a heat loss calculation","Check the blower motor amp draw","Perform an external static pressure test","Confirm the temperature rise is within the manufacturer's specifications"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, Perform an external static pressure test is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24980,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "If an HRV is used in conjunction with a furnace, where is the HRV's warm air supply connected to the furnace system?",
    options: ["On the return air ducting but at least 3 m from the furnace","On the supply air ducting but at least 3 m from the furnace","On the return air ducting but no more than 3 m from the furnace","On the supply air ducting but no more than 3 m from the furnace"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, On the return air ducting but at least 3 m from the furnace is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24981,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "If a furnace system has air-conditioning added, where does the cased coil go?",
    options: ["Downstream of the burner and downstream of the blower","Upstream of the burner and upstream of the blower","Downstream of the burner but upstream of the blower","Upstream of the burner but downstream of the blower"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, Downstream of the burner and downstream of the blower is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24982,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "In what position(s) can condensing furnaces be installed?",
    options: ["Up or horizontal left only","Up or horizontal left or horizontal right","Up, down, horizontal right and horizontal left","Only positions approved by the manufacturer"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, Only positions approved by the manufacturer is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24983,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "What is the AFUE rating of a high-efficiency (condensing) furnace?",
    options: ["83% or greater","Greater than 83%","90% or greater","Greater than 90%"],
    correct: 2,
    reasoning: "90% or greater is defined in CSA B149.1-25, Section 7.8 - Furnaces as a fundamental principle in Forced Warm Air Heating Systems.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24984,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "What type(s) of furnace(s) use an inducer fan?",
    options: ["Mid-efficiency only","High-efficiency only","Mid-efficiency and high-efficiency","Low-efficiency, mid-efficiency, and high-efficiency"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, Mid-efficiency and high-efficiency is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24985,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "Must a defective heat exchanger in a dwelling unit be replaced immediately?",
    options: ["Yes","No, it can be temporarily repaired","No, it can be permanently repaired No, only if the CO level is above the maximum acceptable for the appliance"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, Yes is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24986,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "A high efficiency furnace incorporates how many heat exchangers?",
    options: ["One","Two, a primary and a tertiary","Two, a primary and a secondary","Three"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, Two, a primary and a secondary is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24987,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "How is temperature rise determined?",
    options: ["The ambient temperature plus the room air temperature","Add the return air temperature to the supply air temperature","Subtract the supply air temperature from the return air temperature","Subtract the return air temperature from the supply air temperature"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, Subtract the return air temperature from the supply air temperature is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24988,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "Referencing a mid-efficiency furnace, what causes the fan to shut off under normal operating conditions?",
    options: ["The pressure switch circuit opens","The IFC Fan-OFF timer is activated","The fan control cools down enough to open the circuit.","The thermostat has reached setpoint temperature and opens the Fan-OFF circuit"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, The fan control cools down enough to open the circuit. is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24989,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "If the return air temperature is 70°F (21°C) and the temperature rise is 75°F (42°C), what is the supply temperature?",
    options: ["5°F (-15°C)","70°F (21°C)","75°F (24°C)","145°F (63°C)"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, 145°F (63°C) is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24990,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "What would be the required air flow if a furnace has a rated input of 60,000 Btuh, is 95% efficient, and the rating plate specifies a temperature rise of 40°- 60°F?",
    options: ["880 CFM","926 CFM","1056 CFM","1,111 CFM"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, 1056 CFM is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24991,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "How is the indoor blower circuit energized on a furnace incorporating an IFC?",
    options: ["The IFC uses electronic time delay","The IFC uses a temperature-activated switch","The furnace uses a separate fan control board","The Fan-ON switch closes in a combination high-limit/fan control"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, The IFC uses electronic time delay is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24992,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "What is used when attempting to chemically clean the inside surfaces of a pool boiler's heat exchanger tubes?",
    options: ["Soap and water","Muriatic acid","White vinegar","Soda-ash"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, Muriatic acid is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24993,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "Which type of wall furnace will reduce heat stratification in a room?",
    options: ["Blower type","Axial fan type","Counterflow type","Low intensity type"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, Counterflow type is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24994,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "Which type of vent is used in a conventional wall furnace?",
    options: ["B vent","C vent","BH vent","BW vent"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, BW vent is required for proper venting in Forced Warm Air Heating Systems applications.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24995,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "basic",
    question: "A wall furnace can be installed directly on a wood floor.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, False is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24996,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "What is the proper position of a gas fired duct furnace?",
    options: ["Upstream of air conditioning coil and air handling fan","Downstream of air conditioning coil and air handling fan","Upstream of air conditioning coil and downstream of air handling fan","Downstream of air conditioning coil and upstream of air handling fan"],
    correct: 2,
    reasoning: "Upstream of air conditioning coil and downstream of air handling fan is defined in CSA B149.1-25, Section 7.8 - Furnaces as a fundamental principle in Forced Warm Air Heating Systems.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24997,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "What would indicate internal blockages may be present with a duct furnace? cycling on and off due to the operation of the high temperature limit control or incorrect temperature rise across the heat exchanger.",
    options: ["Increased CFM","Decreased temperature rise","Increase motor current draw","Cycling on and off on high limit"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, Cycling on and off on high limit is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24998,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "If the motor pulley is increased to twice the original size, what would the blower speed be (in relation to the original blower speed)?",
    options: ["No change in blower speed","½ the original blower speed","Twice the original blower speed","Four times the original blower speed"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, Twice the original blower speed is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 24999,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "If a larger diameter blower pulley is installed, what will happen to air flow and to temperature rise across the heat exchanger?",
    options: ["Air flow would increase and temperature rise would decrease","Air flow would decrease and temperature rise would increase","Air flow would increase and temperature rise would increase","Air flow would decrease and temperature rise would decrease"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, Air flow would increase and temperature rise would decrease is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  {
    id: 25000,
    unit: 19,
    unitName: "Forced Warm Air Heating Systems",
    difficulty: "intermediate",
    question: "If the fan compartment door on a forced air furnace is left off, what is the effect the blower motor?",
    options: ["Less work done by motor so current decreases","Less work done by motor so current increases","More work done by motor so current increases","More work done by motor so current decreases"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.8 - Furnaces, Less work done by motor so current increases is the correct requirement in Forced Warm Air Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.8 - Furnaces"
  },
  // ========================================
  // UNIT 20 - HYDRONIC HEATING SYSTEMS - NEW QUESTIONS (14 Questions)
  // ========================================
  {
    id: 25001,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "basic",
    question: "All types of fin-tube type boilers are suitable for heating potable water.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.12 - Boilers, False is the correct requirement in Hydronic Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.12 - Boilers"
  },
  {
    id: 25002,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "intermediate",
    question: "What prevents the water in a hydronic heating system from boiling into steam when the system is operating above the atmospheric boiling temperature?",
    options: ["Natural convection","Make-up water is added","Pressurization of the system","Constant circulation"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.12 - Boilers, Pressurization of the system is required for proper venting in Hydronic Heating Systems applications.",
    csaReference: "CSA B149.1-25, Section 7.12 - Boilers"
  },
  {
    id: 25003,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "intermediate",
    question: "What is installed to protect potable water connections to a boiler (make up water connections) from cross-contamination with non-potable boiler water or toxic substances?",
    options: ["Backflow preventer","Relief valve","Aquastat","Low water cut off"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.12 - Boilers, Backflow preventer is the correct requirement in Hydronic Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.12 - Boilers"
  },
  {
    id: 25004,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "intermediate",
    question: "What is not an advantage of a hydronic heating system?",
    options: ["Fast reaction time","Quiet operation","Increased comfort","Less air stratification"],
    correct: 0,
    reasoning: "Fast reaction time is defined in CSA B149.1-25, Section 7.12 - Boilers as a fundamental principle in Hydronic Heating Systems.",
    csaReference: "CSA B149.1-25, Section 7.12 - Boilers"
  },
  {
    id: 25005,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "intermediate",
    question: "What input would require a low water cut off for a hot water boiler?",
    options: ["500 MBtu/h","300 MBtu/h","120 MBtu/h","75 MBtu/h"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.12 - Boilers, 500 MBtu/h is the correct requirement in Hydronic Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.12 - Boilers"
  },
  {
    id: 25006,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "intermediate",
    question: "To prevent thermal stress damage, this type of boiler requires constant water circulation during firing.",
    options: ["Steel fire-tube","Cast-iron sectional","Copper fin-tube","Steel water-tube"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7.12 - Boilers, Steel water-tube is required for proper venting in Hydronic Heating Systems applications.",
    csaReference: "CSA B149.1-25, Section 7.12 - Boilers"
  },
  {
    id: 25007,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "intermediate",
    question: "Condensing boiler are typically made from what material?",
    options: ["Cast-iron","Stainless steel","Copper","Carbon steel"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.12 - Boilers, Stainless steel is the correct requirement in Hydronic Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.12 - Boilers"
  },
  {
    id: 25008,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "intermediate",
    question: "What is the simplest type of hydronic distribution system?",
    options: ["Reverse-return","Direct-return","Series loop","Monoflo"],
    correct: 2,
    reasoning: "Series loop is defined in CSA B149.1-25, Section 7.12 - Boilers as a fundamental principle in Hydronic Heating Systems.",
    csaReference: "CSA B149.1-25, Section 7.12 - Boilers"
  },
  {
    id: 25009,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "intermediate",
    question: "Which hydronic distribution system is known as \"first-fed, first-return\"?",
    options: ["Reverse-return","Direct-return","Series loop","Monoflo"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.12 - Boilers, Direct-return is the correct requirement in Hydronic Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.12 - Boilers"
  },
  {
    id: 25010,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "intermediate",
    question: "What device within a closed hydronic system accommodates for the volumetric change of the system fluid under normal operating conditions?",
    options: ["Expansion tank","Relief valve","Air separator","High limit aquastat"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.12 - Boilers, Expansion tank is the correct requirement in Hydronic Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.12 - Boilers"
  },
  {
    id: 25011,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "intermediate",
    question: "What can be used to provide \"hydraulic separation\" in a primary/secondary hydronic distribution system?",
    options: ["Monoflo tees","Closely-spaced tees","Diversion tees","Oversized tees"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.12 - Boilers, Closely-spaced tees is the correct requirement in Hydronic Heating Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.12 - Boilers"
  },
  {
    id: 25012,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "intermediate",
    question: "What is the effect when a shut off valve is closed downstream of a centrifugal circulator?",
    options: ["Current draw decreases","Current draw increases","Voltage increases","Voltage decreases"],
    correct: 0,
    reasoning: "Current draw decreases is defined in CSA B149.1-25, Section 7.12 - Boilers as a fundamental principle in Hydronic Heating Systems.",
    csaReference: "CSA B149.1-25, Section 7.12 - Boilers"
  },
  {
    id: 25013,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "advanced",
    question: "What is the typical system design pressure for a residential hydronic boiler?",
    options: ["50 – 60 psig","20 – 28 psig","12 – 15 psig","32 – 45 psig"],
    correct: 2,
    reasoning: "12 – 15 psig is defined in CSA B149.1-25, Section 7.12 - Boilers as a fundamental principle in Hydronic Heating Systems.",
    csaReference: "CSA B149.1-25, Section 7.12 - Boilers"
  },
  {
    id: 25014,
    unit: 20,
    unitName: "Hydronic Heating Systems",
    difficulty: "intermediate",
    question: "What is the maximum setting for a pool boiler's operating aquastat?",
    options: ["100°F","140°F","160°F","180°F"],
    correct: 2,
    reasoning: "160°F is defined in CSA B149.1-25, Section 7.12 - Boilers as a fundamental principle in Hydronic Heating Systems.",
    csaReference: "CSA B149.1-25, Section 7.12 - Boilers"
  },
  // ========================================
  // UNIT 21 - SPACE HEATERS AND FIREPLACES - NEW QUESTIONS (7 Questions)
  // ========================================
  {
    id: 25015,
    unit: 21,
    unitName: "Space Heaters and Fireplaces",
    difficulty: "intermediate",
    question: "A free standing radiant type of room heater shall have what minimum clearance to combustible material (above)",
    options: ["24 inches","30 inches","36 inches","48 inches"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 7.6 - Space Heaters, 36 inches is the correct requirement in Space Heaters and Fireplaces to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.6 - Space Heaters"
  },
  {
    id: 25016,
    unit: 21,
    unitName: "Space Heaters and Fireplaces",
    difficulty: "basic",
    question: "Space heaters installed in a bathroom must be of the direct-vent type.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.6 - Space Heaters, True is required for proper venting in Space Heaters and Fireplaces applications.",
    csaReference: "CSA B149.1-25, Section 7.6 - Space Heaters"
  },
  {
    id: 25017,
    unit: 21,
    unitName: "Space Heaters and Fireplaces",
    difficulty: "intermediate",
    question: "What type of gas fireplace is used to convert an existing wood burning masonry chimney to gas?",
    options: ["Insert","Power vented","Free-standing","Zero-clearance"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 7.6 - Space Heaters, Insert is the correct requirement in Space Heaters and Fireplaces to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.6 - Space Heaters"
  },
  {
    id: 25018,
    unit: 21,
    unitName: "Space Heaters and Fireplaces",
    difficulty: "intermediate",
    question: "What type of gas fireplace is used on a new home installation and surrounded by framing?",
    options: ["Insert","Power vented","Free-standing","Zero-clearance"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 7.6 - Space Heaters, Zero-clearance is the correct requirement in Space Heaters and Fireplaces to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.6 - Space Heaters"
  },
  {
    id: 25019,
    unit: 21,
    unitName: "Space Heaters and Fireplaces",
    difficulty: "intermediate",
    question: "What is the minimum FE rating for heating gas fireplaces?",
    options: ["50%","75%","90%","There is no minimum efficiency requirement"],
    correct: 0,
    reasoning: "50% is defined in CSA B149.1-25, Section 7.6 - Space Heaters as a fundamental principle in Space Heaters and Fireplaces.",
    csaReference: "CSA B149.1-25, Section 7.6 - Space Heaters"
  },
  {
    id: 25020,
    unit: 21,
    unitName: "Space Heaters and Fireplaces",
    difficulty: "intermediate",
    question: "What type of glass is used on a gas fireplace?",
    options: ["Tinted","Ceramic","Annealed","Laminated"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.6 - Space Heaters, Ceramic is the correct requirement in Space Heaters and Fireplaces to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.6 - Space Heaters"
  },
  {
    id: 25021,
    unit: 21,
    unitName: "Space Heaters and Fireplaces",
    difficulty: "basic",
    question: "Air Duct kits may be installed onto any gas fireplace.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 7.6 - Space Heaters, False is the correct requirement in Space Heaters and Fireplaces to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 7.6 - Space Heaters"
  },
  // ========================================
  // UNIT 22 - VENTING SYSTEMS - NEW QUESTIONS (45 Questions)
  // ========================================
  {
    id: 25022,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "A single wall vent connector may?",
    options: ["Pass through a ceiling","Pass through a ceiling with a ventilated thimble","Pass through a roof with a ventilated thimble","Pass through a partition with a ventilated thimble"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, Pass through a partition with a ventilated thimble is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25023,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "When may a single wall vent connector be installed in an unheated space?",
    options: ["Never","Only if the horizontal run is less than 6 ft","Only if the common vent updraft is greater than 0.02\" wc","Is required on all Installation"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, Never is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25024,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "How is an appliance vent connector attached to the appliance draft hood or flue collar?",
    options: ["By using sheet metal screws","By using baling wire","By using high temperature duct tape","By soldering"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, By using sheet metal screws is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25025,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What function does a fire stop have when installed with a B vent system used as a common vent?",
    options: ["To prevent the starting of a fire in a dwelling","To prevent the movement of air between floors during a fire","To extinguish a small fire before it spreads","To set off smoke alarms in the building"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, To prevent the movement of air between floors during a fire is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25026,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "If type B vent is unavailable for the required installation it may be replaced by:",
    options: ["Single wall vent","Type BH vent","Type BW vent","Type L vent"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, Type L vent is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25027,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "A gas fired appliance and a liquid-fuelled fired appliance may be vented into a common chimney:",
    options: ["At the same level","Using a shop fabricated branch fitting","With the liquid fuel appliance vented above the gas vent","Cannot be vented into a common chimney"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, Cannot be vented into a common chimney is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25028,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What fitting is required when a vent connector enters a lined masonry chimney?",
    options: ["A sleeve","A galvanized steel plate","A fire stop spacer","A thimble"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, A sleeve is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25029,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "Type B vent may be used on furnaces:",
    options: ["Equipped with a barometric draft regulator","Equipped with a draft hood","Equipped for side wall venting","Equipped to have a vent outlet temperature above 485 deg F"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, Equipped with a draft hood is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25030,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "When an induced or forced draft device is used, provision shall be made to prevent?",
    options: ["Backdrafting into the dwelling","The flow of water through the water heater","Flow of gas to the burner on failure of the device","Exhaust all products of combustion into a canopy"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, Flow of gas to the burner on failure of the device is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25031,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "When a vent connector from a category 1 appliance passes through an unheated space, what must be done to the vent connector?",
    options: ["It must be insulated","The connector must be Type C \"heavy wall\"","The connector must be Type B","The connector must be type BW"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, It must be insulated is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25032,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "To prevent thermo siphoning in the heating loop of a combo system, which of the following is required?",
    options: ["T&P valve","Check valve","Dip tube","Mixing valve"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, Check valve is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25033,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "A chimney shall not extend less than ____' above the highest point where it passes through the roof of a building",
    options: ["2'","4'","5'","3'"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, 3' is the correct requirement in Venting Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25034,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "A vent connector serving an appliance without flue gas dilution air must be made of # _____ GSG galvanized steel.",
    options: ["24","20","28","26"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, 24 is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25035,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "When a common gas vent is used it shall be?",
    options: ["Type C vent","Type BW vent","Type B or L vent","Type BH vent"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, Type B or L vent is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25036,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What is the minimum distance above a flat roof that a vent must terminate?",
    options: ["18\"","24\"","36\"","48\""],
    correct: 1,
    reasoning: "24\" is defined in CSA B149.1-25, Section 8 - Venting as a fundamental principle in Venting Systems.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25037,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What is the purpose of the atmospheric vent?",
    options: ["Allow gas to escape","Sense downstream pressure","Allow air above diaphragm to escape or enter","Allow a connection for a secondary pilot"],
    correct: 2,
    reasoning: "Allow air above diaphragm to escape or enter is defined in CSA B149.1-25, Section 8 - Venting as a fundamental principle in Venting Systems.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25038,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "basic",
    question: "Pressure induced backdrafting is the reversal of the flow of flue gases out of the building caused by negative pressure in the building?",
    options: ["True","False"],
    correct: 0,
    reasoning: "Based on CSA B149.1-25, Section 8 - Venting, True is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25039,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What is the maximum house depressurization limit (HDL) that a natural draft vented appliance should be exposed to?",
    options: ["1 Pa (.004\" wc)","5 Pa (.02\" wc)","10 Pa (.04\" wc)","15 Pa (.06\" wc)"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, 5 Pa (.02\" wc) is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25040,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What type of mechanical ventilation system supplies and exhausts air?",
    options: ["Balanced","Supply only","Exhaust only","Through-the-wall"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, Balanced is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25041,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What is the maximum allowable pressure difference is in all conditions if any non-direct vent fuel fired, vented combustion appliances are present?",
    options: ["1 Pa","5 Pa","10 Pa","15 Pa"],
    correct: 1,
    reasoning: "Based on CSA B149.1-25, Section 8 - Venting, 5 Pa is the correct specification for this application to ensure safe and compliant system design.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25042,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "basic",
    question: "Backdrafting causing spillage of flue gases can cause carbon monoxide poisoning?",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, True is the correct requirement in Venting Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25043,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "basic",
    question: "A passive depressurization test uses only the exhaust equipment in the building.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, True is the correct requirement in Venting Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25044,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "basic",
    question: "The moisture exhaust duct can be connected to another gas appliance vent connector to create a common vent.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, False is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25045,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "How far above ground level should the exhaust hood terminate?",
    options: ["200 mm","300mm","500 mm","1000 mm"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, 300mm is the correct requirement in Venting Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25046,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What determines the maximum length of the exhaust system?",
    options: ["Type of exhaust hood","Type of vent material","Number of elbows","All of the choices"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, All of the choices is the correct requirement in Venting Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25047,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What is the minimum exhaust vent diameter for a gas dryer?",
    options: ["3 inch","4 inch","5 inch","6 inch"],
    correct: 1,
    reasoning: "4 inch is defined in CSA B149.1-25, Section 8 - Venting as a fundamental principle in Venting Systems.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25048,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "basic",
    question: "A refrigerator installed in an occupied area of a dwelling unit must be direct vented.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, True is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25049,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "basic",
    question: "Increasing the clearance at the back of the refrigerator will improve venting.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, False is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25050,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "Why is it important to keep the flue clean?",
    options: ["To reduce gas consumption","To improve the heat transfer","To avoid incomplete combustion","All of the choices are correct"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, All of the choices are correct is the correct requirement in Venting Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25051,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What could be the result of an oversized unlined chimney?",
    options: ["Sooting","Overheating","Flue gas condensing","Too much draft action"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, Flue gas condensing is the correct requirement in Venting Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25052,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "basic",
    question: "The flue outlet has to be plugged before a smoke test is performed.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, True is the correct requirement in Venting Systems to ensure safe and proper gas system operation.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25053,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What is the term used to describe the difference in temperature between the flue gas in the vent and the ambient air?",
    options: ["Net stack temperature","Gross stack temperature","Ultimate stack temperature","Theoretical stack temperature"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, Net stack temperature is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25054,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "Plastic venting material used to vent water heaters and other gas-fired appliances must meet what standard?",
    options: ["CSA B181","ULC S636","ULC S635","CSA B182"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, ULC S636 is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25055,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "If the venting on a high efficiency furnace runs through unheated spaces, what must be done?",
    options: ["It must be insulated","It must be protected from damage","It must be increased by one pipe size","Vents from condensing appliances can NOT go through unheated spaces"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, It must be insulated is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25056,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What is the draft pressure in the vent from a condensing furnace?",
    options: ["Neutral","Positive","Negative","Positive or negative depending on input"],
    correct: 1,
    reasoning: "Positive is defined in CSA B149.1-25, Section 8 - Venting as a fundamental principle in Venting Systems.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25057,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "How are Type BH vents sized?",
    options: ["Using the furnace manufacturer's literature","Using the vent pipe manufacturer's literature","Using the vent sizing tables in the CSA B149.1 Code","Using the outlet size of the vent on the appliance and increasing one size for every 50 feet"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, Using the furnace manufacturer's literature is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25058,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "Can the vent from a condensing appliance be connected to the B-vent of the appliance it replaces?",
    options: ["No, a new vent needs to be installed","Yes, if the existing vent is the correct size","Yes, if the existing B-vent is a side-wall termination","Yes, if an aluminum liner of the correct size is installed"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, No, a new vent needs to be installed is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25059,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "For atmospheric boilers, what is the term used to explain the result if there is no draft, a backdraft, or a blockage in the venting system beyond the draft hood?",
    options: ["Leakage","Spillage","Discharge","Emission"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, Spillage is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25060,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "Who can test a backflow preventer?",
    options: ["Certified tester","Gas technician","Homeowner","Plumber"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, Certified tester is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25061,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "basic",
    question: "Direct vent wall furnaces are only available as natural convection units.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, False is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25062,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "basic",
    question: "All infrared heaters are vented.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, False is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25063,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What type of direct vent uses to completely separate pipes?",
    options: ["Coaxial","Collinear","Power","Natural"],
    correct: 1,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, Collinear is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25064,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "What type of venting system enables units to be installed with longer horizontal vent runs?",
    options: ["Coaxial","Collinear","Power","Natural"],
    correct: 2,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, Power is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25065,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "intermediate",
    question: "Which type of ventilation system can cause problems with the venting action of fuel-fired appliances, creating combustion product spillage or back-drafting?",
    options: ["Natural ventilation","Balanced ventilation","Supply fan ventilation","Exhaust fan ventilation"],
    correct: 3,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, Exhaust fan ventilation is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  {
    id: 25066,
    unit: 22,
    unitName: "Venting Systems",
    difficulty: "basic",
    question: "Paint can make flexible duct connectors rigid and prevent them from absorbing vibration.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA B149.1-25, Section 8 - Venting, True is required for proper venting in Venting Systems applications.",
    csaReference: "CSA B149.1-25, Section 8 - Venting"
  },
  // ========================================
  // UNIT 23 - FORCED AIR ADD-ON DEVICES - NEW QUESTIONS (3 Questions)
  // ========================================
  {
    id: 25067,
    unit: 23,
    unitName: "Forced Air Add-On Devices",
    difficulty: "basic",
    question: "Of the two methods of measuring the effectiveness of a filter, the dust spot efficiency method is a better indicator for household dust particulate.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA Unit 23 - Accessories, True is the correct requirement in Forced Air Add-On Devices to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 23 - Accessories"
  },
  {
    id: 25068,
    unit: 23,
    unitName: "Forced Air Add-On Devices",
    difficulty: "intermediate",
    question: "What must be done to remove accumulated debris in a sand filter?",
    options: ["Nothing is done","The filter must be replaced","Change the sand","Backwashing"],
    correct: 3,
    reasoning: "According to CSA Unit 23 - Accessories, Backwashing is the correct requirement in Forced Air Add-On Devices to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 23 - Accessories"
  },
  {
    id: 25069,
    unit: 23,
    unitName: "Forced Air Add-On Devices",
    difficulty: "intermediate",
    question: "What is the recommended flow rate for \"high-rate sand\" that is used for a pool filter?",
    options: ["0.5 -1 USGPM","1 -2 USGPM","3 -5 USGPM","15 - 20 USGPM"],
    correct: 3,
    reasoning: "15 - 20 USGPM is defined in CSA Unit 23 - Accessories as a fundamental principle in Forced Air Add-On Devices.",
    csaReference: "CSA Unit 23 - Accessories"
  },
  // ========================================
  // UNIT 24 - AIR HANDLING - NEW QUESTIONS (4 Questions)
  // ========================================
  {
    id: 25070,
    unit: 24,
    unitName: "Air Handling",
    difficulty: "intermediate",
    question: "What is normal purge velocity for large pipes?",
    options: ["100 ft/min","150 ft/min","200 ft/min"],
    correct: 2,
    reasoning: "200 ft/min is defined in CSA Unit 24 - Air Distribution as a fundamental principle in Air Handling.",
    csaReference: "CSA Unit 24 - Air Distribution"
  },
  {
    id: 25071,
    unit: 24,
    unitName: "Air Handling",
    difficulty: "basic",
    question: "A thyristor is different from a transistor in that it only needs a pulse signal to make it conducting and thereafter, it remains conducting.",
    options: ["True","False"],
    correct: 0,
    reasoning: "According to CSA Unit 24 - Air Distribution, True is the correct requirement in Air Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 24 - Air Distribution"
  },
  {
    id: 25072,
    unit: 24,
    unitName: "Air Handling",
    difficulty: "basic",
    question: "A radial duct system can be used to increase headroom in a basement.",
    options: ["True","False"],
    correct: 1,
    reasoning: "According to CSA Unit 24 - Air Distribution, False is the correct requirement in Air Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 24 - Air Distribution"
  },
  {
    id: 25073,
    unit: 24,
    unitName: "Air Handling",
    difficulty: "intermediate",
    question: "If the blower in a forced-air distribution system moves 2100 cfm of air through a 24 inch x 18 inch duct?",
    options: ["58 ft/min","420 ft/min","700 ft/min","1000 ft/min"],
    correct: 2,
    reasoning: "According to CSA Unit 24 - Air Distribution, 700 ft/min is the correct requirement in Air Handling to ensure safe and proper gas system operation.",
    csaReference: "CSA Unit 24 - Air Distribution"
  },
];

// Function to get questions by unit
export function getQuestionsByUnit(unitNumber: number): Question[] {
  return questionBank.filter(q => q.unit === unitNumber);
}

// Function to get questions by difficulty
export function getQuestionsByDifficulty(difficulty: 'basic' | 'intermediate' | 'advanced'): Question[] {
  return questionBank.filter(q => q.difficulty === difficulty);
}

// Function to get random questions with balanced answer distribution
export function getRandomQuestions(count: number, unitNumbers?: number[], difficulty?: 'basic' | 'intermediate' | 'advanced'): Question[] {
  let filtered = [...questionBank];
  
  if (unitNumbers && unitNumbers.length > 0) {
    filtered = filtered.filter(q => unitNumbers.includes(q.unit));
  }
  
  if (difficulty) {
    filtered = filtered.filter(q => q.difficulty === difficulty);
  }
  
  // If we need fewer questions than available, use balanced selection
  if (count < filtered.length) {
    return getBalancedQuestions(filtered, count);
  }
  
  // If we need all or more questions than available, just shuffle and return
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }
  
  return filtered.slice(0, Math.min(count, filtered.length));
}

// Helper function to select questions with balanced answer distribution
function getBalancedQuestions(questions: Question[], count: number): Question[] {
  // Group questions by their correct answer (0=A, 1=B, 2=C, 3=D)
  const questionsByAnswer: Question[][] = [[], [], [], []];
  
  questions.forEach(question => {
    if (question.correct >= 0 && question.correct <= 3) {
      questionsByAnswer[question.correct].push(question);
    }
  });
  
  // Shuffle each group independently to avoid bias
  questionsByAnswer.forEach(group => {
    for (let i = group.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [group[i], group[j]] = [group[j], group[i]];
    }
  });
  
  const result: Question[] = [];
  
  // IMPROVED BALANCING ALGORITHM
  // Calculate ideal distribution (try to get as close to 25% each as possible)
  const idealPerAnswer = count / 4;
  const minPerAnswer = Math.floor(idealPerAnswer);
  const maxPerAnswer = Math.ceil(idealPerAnswer);
  
  // Count how many answer choices have enough questions
  const answerChoicesWithQuestions = questionsByAnswer.filter(group => group.length > 0).length;
  
  if (answerChoicesWithQuestions === 0) return []; // Safety check
  
  // Phase 1: Ensure minimum distribution
  const phase1Targets: number[] = [];
  let totalPhase1 = 0;
  
  for (let i = 0; i < 4; i++) {
    const available = questionsByAnswer[i].length;
    const target = Math.min(minPerAnswer, available);
    phase1Targets[i] = target;
    totalPhase1 += target;
    result.push(...questionsByAnswer[i].slice(0, target));
  }
  
  // Phase 2: Distribute remaining slots more fairly
  const remaining = count - totalPhase1;
  if (remaining > 0) {
    // Create a priority list of answer choices that can accept more questions
    const expandableChoices: Array<{index: number, capacity: number, current: number}> = [];
    
    for (let i = 0; i < 4; i++) {
      const current = phase1Targets[i];
      const capacity = questionsByAnswer[i].length - current;
      const currentRatio = result.filter(q => q.correct === i).length / count;
      const targetRatio = 0.25; // 25% target
      
      if (capacity > 0) {
        // Prioritize answer choices that are below target ratio
        expandableChoices.push({
          index: i,
          capacity,
          current: current + (targetRatio - currentRatio) * 100 // bias toward balancing
        });
      }
    }
    
    // Sort by priority (those furthest from 25% get priority)
    expandableChoices.sort((a, b) => a.current - b.current);
    
    // Distribute remaining questions
    let remainingToDistribute = remaining;
    let choiceIndex = 0;
    
    while (remainingToDistribute > 0 && choiceIndex < expandableChoices.length) {
      const choice = expandableChoices[choiceIndex];
      const canTake = Math.min(remainingToDistribute, choice.capacity);
      
      if (canTake > 0) {
        const startIndex = phase1Targets[choice.index];
        result.push(...questionsByAnswer[choice.index].slice(startIndex, startIndex + canTake));
        remainingToDistribute -= canTake;
      }
      
      choiceIndex = (choiceIndex + 1) % expandableChoices.length;
    }
  }
  
  // Final shuffle to randomize question order while preserving balance
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  
  return result.slice(0, count); // Safety: ensure exact count
}

// Get count of questions per unit
export function getQuestionCountByUnit(): Record<number, number> {
  const counts: Record<number, number> = {};
  for (let i = 1; i <= 24; i++) {
    counts[i] = questionBank.filter(q => q.unit === i).length;
  }
  return counts;
}

// Get total question count
export function getTotalQuestionCount(): number {
  return questionBank.length;
}

// Analyze answer distribution in a set of questions
export function analyzeAnswerDistribution(questions: Question[]): {
  total: number;
  distribution: { answer: string; count: number; percentage: number }[];
  isBalanced: boolean;
  balanceScore: number; // 0-100, 100 = perfectly balanced
} {
  if (questions.length === 0) {
    return { total: 0, distribution: [], isBalanced: true, balanceScore: 100 };
  }
  
  const counts = [0, 0, 0, 0]; // A, B, C, D
  questions.forEach(q => {
    if (q.correct >= 0 && q.correct <= 3) {
      counts[q.correct]++;
    }
  });
  
  const total = questions.length;
  const distribution = counts.map((count, index) => ({
    answer: String.fromCharCode(65 + index), // A, B, C, D
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0
  }));
  
  // Calculate balance score (how close to 25% each)
  const ideal = 25; // 25% for each answer
  const deviations = distribution.map(d => Math.abs(d.percentage - ideal));
  const totalDeviation = deviations.reduce((sum, dev) => sum + dev, 0);
  const balanceScore = Math.max(0, 100 - totalDeviation);
  
  // Consider "balanced" if each answer is within 10% of ideal (15%-35% range)
  const isBalanced = deviations.every(dev => dev <= 10);
  
  return { total, distribution, isBalanced, balanceScore };
}