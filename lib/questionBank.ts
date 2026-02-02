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
  }
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