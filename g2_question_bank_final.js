// TSSA G2 Comprehensive Question Bank - 155 Questions
// Organized by CSA Units 10-24
// Diagram-dependent pipe sizing questions removed

const rawQuestionBank = [

    // ========================================
    // CSA UNIT 10 - 6 Questions
    // ========================================
    {
        id: 5,
        unit: 10,
        question: "What size tubing is required to supply propane to a 225,000 Btuh input appliance when installing 95 feet of copper tubing which will operate at 2 psig with a pressure drop of 1.0 psig?",
        options: ["0.375\" (3/8\")", "0.500\" (1/2\")", "0.625\" (5/8\")", "0.750\" (3/4\")"],
        correct: 2,
        reasoning: "Using CSA B149.1 Annex D propane tubing sizing tables for 2 psig with 1.0 psig drop, 95 feet of tubing for 225,000 Btuh requires 5/8\" (0.625\") copper tubing.",
        csaReference: "CSA B149.1-25, Annex D - Propane tubing sizing tables"
    },
    {
        id: 6,
        unit: 10,
        question: "What is the required minimum distance a purge line may terminate from either a building or air intake when purging a piping or tubing system to the outdoors?",
        options: ["5 feet (1.5 m)", "10 feet (3 m)", "15 feet (4.5 m)", "20 feet (6 m)"],
        correct: 1,
        reasoning: "Purge lines must terminate at least 10 feet (3 m) from buildings or air intakes to ensure safety during purging operations.",
        csaReference: "CSA B149.1-25, Clause 6.23 - Purging requirements"
    },
    {
        id: 7,
        unit: 10,
        question: "What is the equivalent length of a 2-inch NPS Schedule 40, 90° threaded elbow?",
        options: ["2.06 feet (630 mm)", "2.41 feet (730 mm)", "5.17 feet (1.5 m)", "6.16 feet (2 m)"],
        correct: 2,
        reasoning: "According to fitting equivalent length tables, a 2-inch 90° threaded elbow has an equivalent length of 5.17 feet.",
        csaReference: "CSA B149.1-25, Annex C - Fitting equivalent lengths"
    },
    {
        id: 9,
        unit: 10,
        question: "What is the minimum time and pressure required to test a new welded 3\" NPS piping system that is 220 feet long with a supply pressure of 40 psig?",
        options: ["60 minutes at 50 psig (340 kPa)", "180 minutes at 60 psig (379 kPa)", "60 minutes at 55 psig (379 kPa)", "180 minutes at 50 psig (340kPa)"],
        correct: 1,
        reasoning: "For systems over 125 feet with supply pressure above 20 psig, test at 1.5 times working pressure (60 psig) for 180 minutes minimum.",
        csaReference: "CSA B149.1-25, Table 6.3 - Pressure test requirements"
    },
    {
        id: 53,
        unit: 10,
        question: "In a recently constructed building with close fitting windows and doors, vapour barrier and drywall, there is a single water heater with a draft diverter firing at 48,000 Btuh. In square inches, what size of supply opening from the outdoors is required?",
        options: ["0 square inches", "4 square inches", "7 square inches", "11 square inches"],
        correct: 2,
        reasoning: "Tight construction requires combustion air. Using Table 8.1: 48,000 Btuh requires 7 square inches.",
        csaReference: "CSA B149.1-25, Table 8.1 - Combustion air requirements"
    },
    {
        id: 126,
        unit: 10,
        question: "When can a certified hose be used to connect a construction heater to temporary piping?",
        options: ["Never.", "Always.", "Only when the hose is less than 15 feet (3.6 m) long.", "Only when a lever handle shut off valve is installed upstream of the hose."],
        correct: 3,
        reasoning: "Certified hoses may be used with construction heaters if a lever-handle shut-off is installed upstream.",
        csaReference: "CSA B149.1-25, Clause 7.31 - Construction heater requirements"
    },

    // ========================================
    // CSA UNIT 11 - 23 Questions
    // ========================================
    {
        id: 27,
        unit: 11,
        question: "When using an ohmmeter, the most important thing to remember is to:",
        options: ["zero the meter before using it.", "ensure the battery is good.", "power up the circuit prior to testing it.", "de-energize the circuit."],
        correct: 3,
        reasoning: "Circuits must be de-energized before resistance testing to prevent meter damage and ensure accurate readings.",
        csaReference: "CSA Unit 5 - Safe electrical testing procedures"
    },
    {
        id: 28,
        unit: 11,
        question: "With the power on to a furnace, when using a multimeter to test across an open switch on the primary side of a 24V transformer, what reading should be obtained?",
        options: ["0 volts ac", "24 volts ac", "120 volts ac", "220 volts ac"],
        correct: 2,
        reasoning: "An open switch on the primary side will show full line voltage (120V) across its contacts when power is on.",
        csaReference: "CSA Unit 5 - Voltage testing procedures"
    },
    {
        id: 63,
        unit: 11,
        question: "When the .01 cubic meter dial of a natural gas meter indicates movement, this means:",
        options: ["the working pressure is low.", "the piping is oversized.", "the static pressure is excessive.", "a leak is present."],
        correct: 3,
        reasoning: "Movement of the smallest test dial with all appliances off indicates a gas leak in the system.",
        csaReference: "CSA Unit 8 - Leak detection procedures"
    },
    {
        id: 64,
        unit: 11,
        question: "If the regulator vent became blocked with the regulator in the open position:",
        options: ["there would be excessive downstream gas pressure.", "there would be low downstream gas pressure.", "the downstream pressure would remain constant.", "there would be fluctuating downstream pressure."],
        correct: 0,
        reasoning: "A blocked vent prevents diaphragm movement, causing excessive downstream pressure (lock-up condition).",
        csaReference: "CSA Unit 8 - Regulator operation principles"
    },
    {
        id: 65,
        unit: 11,
        question: "A pressure regulator:",
        options: ["measures gas flow.", "controls outlet pressure.", "controls inlet pressure.", "boosts outlet pressure."],
        correct: 1,
        reasoning: "Regulators control and maintain constant outlet pressure regardless of inlet pressure variations.",
        csaReference: "CSA Unit 8 - Pressure regulator function"
    },
    {
        id: 66,
        unit: 11,
        question: "What is the name of the regulator that is usually found in a combination gas valve used to reduce the building line pressure to the correct burner working pressure?",
        options: ["service regulator", "pounds to inches", "appliance regulator", "burner regulator"],
        correct: 2,
        reasoning: "The appliance regulator in combination valves reduces line pressure to burner manifold pressure.",
        csaReference: "CSA Unit 13 - Gas valve components"
    },
    {
        id: 67,
        unit: 11,
        question: "A worn or dirty seat on a regulator assembly may produce:",
        options: ["low pressure upstream", "high pressure upstream", "low pressure downstream", "high pressure downstream"],
        correct: 3,
        reasoning: "A worn/dirty seat prevents proper closure, allowing excessive gas flow and high downstream pressure.",
        csaReference: "CSA Unit 8 - Regulator troubleshooting"
    },
    {
        id: 68,
        unit: 11,
        question: "A relief valve on a regulator operates when:",
        options: ["the system pressure falls below the regulator set point.", "it senses pressure at 4 times the regulator set point.", "there is excessive pressure in the supply piping.", "the gas pressure falls below set point."],
        correct: 1,
        reasoning: "Relief valves typically open at approximately 4 times the regulator's set pressure to protect downstream equipment.",
        csaReference: "CSA B149.1-25, Clause 6.17 - Relief valve settings"
    },
    {
        id: 69,
        unit: 11,
        question: "A second stage regulator located outdoors should be installed:",
        options: ["vertically with the vent at the bottom or facing down.", "vertically with the vent at the top or facing up.", "horizontally with the vent facing horizontally.", "horizontally with the vent facing up."],
        correct: 0,
        reasoning: "Outdoor regulators must have vents pointing down to prevent water/debris entry.",
        csaReference: "CSA B149.1-25, Clause 6.17 - Regulator installation"
    },
    {
        id: 70,
        unit: 11,
        question: "Which item is used as a regulator's restricting element?",
        options: ["the regulator spring", "the regulator valve", "the regulator diaphragm", "the regulator body"],
        correct: 1,
        reasoning: "The valve (disc and seat) is the restricting element that controls gas flow through the regulator.",
        csaReference: "CSA Unit 8 - Regulator components"
    },
    {
        id: 71,
        unit: 11,
        question: "Which of the following best describes a bellows type meter?",
        options: ["One which uses a spinning turbine to drive the index needle.", "One which uses pressure differential across an opening to indicate flow rate.", "One which uses the volume displaced through chambers divided by a flexible material to drive the register.", "One which is normally installed on loads over 2 million cfh."],
        correct: 2,
        reasoning: "Bellows meters use flexible diaphragms dividing chambers to measure volume displacement.",
        csaReference: "CSA Unit 8 - Meter types and operation"
    },
    {
        id: 72,
        unit: 11,
        question: "T  F  The primary function of a surge arrestor in the top of a regulator is to reduce the opening speed of the regulator.",
        options: ["True", "False"],
        correct: 0,
        reasoning: "True. Surge arrestors dampen rapid pressure changes to prevent regulator damage from quick opening.",
        csaReference: "CSA Unit 8 - Regulator protection devices"
    },
    {
        id: 73,
        unit: 11,
        question: "If a one cubic foot test dial on a meter makes one revolution every 54 seconds, approximately how much heat is being generated?",
        options: ["67,000 Btuh", "130,000 Btuh", "150,000 Btuh", "194,000 Btuh"],
        correct: 0,
        reasoning: "1 cu.ft./54 sec = 66.7 cu.ft./hr × 1000 BTU/cu.ft. = 67,000 Btuh approximately.",
        csaReference: "Gas flow and heat calculations"
    },
    {
        id: 74,
        unit: 11,
        question: "What is the largest propane cylinder manufactured?",
        options: ["240 lbs", "300 lbs", "420 lbs", "1000 lbs"],
        correct: 2,
        reasoning: "The largest standard propane cylinder is 420 lbs (100 gallons water capacity).",
        csaReference: "CSA B149.2 - Propane cylinder specifications"
    },
    {
        id: 75,
        unit: 11,
        question: "Pressure regulators must be located with the vents:",
        options: ["within 8 feet of a dryer vent.", "within 8 inches of grade.", "in a vertical position.", "at least 1 foot above grade."],
        correct: 3,
        reasoning: "Regulator vents must be at least 1 foot (12 inches) above grade to prevent obstruction.",
        csaReference: "CSA B149.1-25, Clause 6.17 - Regulator vent locations"
    },
    {
        id: 76,
        unit: 11,
        question: "Can a shut-off valve be installed upstream of a relief valve to allow for the removal of the relief valve for servicing without having to empty the contents of a tank?",
        options: ["No", "No, unless the tank is less than 1000 USWG (3780 L).", "Only if it is installed by a certified propane technician.", "Only with the permission of the propane company."],
        correct: 0,
        reasoning: "No shut-off valve can be installed between a tank and its relief valve - this is a critical safety requirement.",
        csaReference: "CSA B149.2 - Relief valve installation requirements"
    },
    {
        id: 77,
        unit: 11,
        question: "A relief valve on a regulator:",
        options: ["provides control over inlet pressure.", "provides automatic shut off before the regulator in the event of a rupture.", "maintains a constant system pressure upstream of the regulator.", "ensures that a system doesn't exceed its design pressure."],
        correct: 3,
        reasoning: "Relief valves protect the system from exceeding design pressure in case of regulator failure.",
        csaReference: "CSA B149.1-25, Clause 6.17 - Relief valve function"
    },
    {
        id: 79,
        unit: 11,
        question: "If a regulator's diaphragm ruptures, what is the maximum amount of gas that can leak from the opening of a regulator's vent that is equipped with a leak limiting device?",
        options: ["0.5 cubic foot per minute", "1.0 cubic foot per minute", "0.5 cubic foot per hour", "1.0 cubic foot per hour"],
        correct: 3,
        reasoning: "Leak limiting devices restrict flow to maximum 1.0 cubic foot per hour in case of diaphragm failure.",
        csaReference: "CSA B149.1-25, Clause 6.17 - Leak limiting devices"
    },
    {
        id: 80,
        unit: 11,
        question: "What is the maximum supply pressure allowed in a single family dwelling downstream of the utility termination?",
        options: ["1/2 psig   (3.5 kPa)", "2 psig    (14 kPa)", "5 psig    (35 kPa)", "20 psig   (140 kPa)"],
        correct: 1,
        reasoning: "Single family dwellings are limited to 2 psig maximum downstream of utility termination.",
        csaReference: "CSA B149.1-25, Clause 6.16 - Residential pressure limitations"
    },
    {
        id: 81,
        unit: 11,
        question: "The pressure relief valve on a propane tank is set at:",
        options: ["225 psi  (1551 kPa)", "250 psi  (1724 kPa)", "325 psi  (2240 kPa)", "375 psi  (2586 kPa)"],
        correct: 1,
        reasoning: "Propane tank relief valves are set at 250 psi (80% of tank design pressure of 312 psi).",
        csaReference: "CSA B149.2 - Propane tank relief valve settings"
    },
    {
        id: 93,
        unit: 11,
        question: "The most likely cause of a puddle of water at the side of a water heater where the drain cock and relief valve are located is that:",
        options: ["the drain cock is opening intermittently.", "the relief valve is opening periodically.", "it is caused by condensation created when cold water enters the heater.", "the Dip tube fitting is leaking and re-sealing itself."],
        correct: 1,
        reasoning: "Periodic relief valve opening due to thermal expansion is the most common cause of water puddles.",
        csaReference: "Water heater troubleshooting"
    },
    {
        id: 101,
        unit: 11,
        question: "The minimum allowable distance to be maintained from a 50,000 Btuh water heater flue outlet directly above a gas utility service regulator is:",
        options: ["1' (300 mm)", "3' (900 mm)", "10' (3 m)", "15' (4.5m)"],
        correct: 1,
        reasoning: "Appliance vents must be at least 3 feet from service regulator vents.",
        csaReference: "CSA B149.1-25, Clause 8.12 - Vent termination clearances"
    },
    {
        id: 116,
        unit: 11,
        question: "A pressure relief valve installed on a pool heater system to:",
        options: ["maintain the pool water level.", "prevent over pressurizing the filter.", "prevent damage to the system.", "relieve excess water pressure caused by solar gain."],
        correct: 2,
        reasoning: "Pressure relief valves protect the system from damage due to excessive pressure buildup.",
        csaReference: "CSA B149.1-25, Clause 7.28 - Pool heater safety devices"
    },

    // ========================================
    // CSA UNIT 12 - 23 Questions
    // ========================================
    {
        id: 16,
        unit: 12,
        question: "Usually, a blown fuse is caused by:",
        options: ["excessive amperage.", "excessive voltage.", "excessive resistance.", "excessive impedance."],
        correct: 0,
        reasoning: "Fuses blow when current (amperage) exceeds the fuse rating. This is typically caused by short circuits or overloads that draw excessive current.",
        csaReference: "CSA Unit 5 - Basic Electricity, electrical safety fundamentals"
    },
    {
        id: 17,
        unit: 12,
        question: "Glass plug type fuses must be replaced after blowing how many times?",
        options: ["Once", "Twice", "Five times", "Seven times"],
        correct: 0,
        reasoning: "Glass plug fuses are single-use devices and must be replaced after blowing once. They cannot be reset or reused.",
        csaReference: "Electrical Code requirements for fuse replacement"
    },
    {
        id: 18,
        unit: 12,
        question: "As the diameter of a wire increases, its resistance:",
        options: ["increases", "decreases.", "remains the same.", "fluctuates."],
        correct: 1,
        reasoning: "Resistance is inversely proportional to cross-sectional area. As wire diameter increases, resistance decreases.",
        csaReference: "CSA Unit 5 - Basic Electricity, Ohm's Law principles"
    },
    {
        id: 20,
        unit: 12,
        question: "The electrical component in Figure 1 identified as #2 is a:",
        options: ["gas valve", "door switch", "fan control", "fuse"],
        correct: 1,
        reasoning: "In standard furnace wiring diagrams, component #2 is typically the door safety switch in the control circuit.",
        csaReference: "CSA Unit 5 - Furnace electrical diagrams"
    },
    {
        id: 21,
        unit: 12,
        question: "The electrical component in Figure 1 identified as #3 is:",
        options: ["motor", "furnace switch", "limit", "fuse"],
        correct: 2,
        reasoning: "Component #3 in standard furnace diagrams is the high temperature limit switch for safety protection.",
        csaReference: "CSA Unit 5 - Furnace control circuits"
    },
    {
        id: 22,
        unit: 12,
        question: "The electrical component in Figure 1 identified as #4 is a:",
        options: ["gas valve", "door switch", "limit", "transformer"],
        correct: 3,
        reasoning: "Component #4 is the step-down transformer that provides 24V for control circuit operation.",
        csaReference: "CSA Unit 5 - Control transformers"
    },
    {
        id: 23,
        unit: 12,
        question: "The electrical component in Figure 1 identified as #5 is a:",
        options: ["gas valve", "door switch", "fuse", "transformer"],
        correct: 2,
        reasoning: "Component #5 is the control circuit fuse protecting the low voltage side.",
        csaReference: "CSA Unit 5 - Furnace protection devices"
    },
    {
        id: 24,
        unit: 12,
        question: "The electrical component in Figure 1 identified as #6 is a:",
        options: ["motor", "furnace switch", "limit", "gas valve"],
        correct: 3,
        reasoning: "Component #6 is the gas valve, controlled by the 24V circuit to regulate gas flow.",
        csaReference: "CSA Unit 5 - Gas valve controls"
    },
    {
        id: 25,
        unit: 12,
        question: "The electrical component in Figure 1 identified as #7 is a:",
        options: ["thermostat", "gas valve", "limit", "transformer"],
        correct: 0,
        reasoning: "Component #7 is the thermostat, which controls the heating cycle based on room temperature.",
        csaReference: "CSA Unit 5 - Thermostat controls"
    },
    {
        id: 26,
        unit: 12,
        question: "The electrical component in Figure 1 identified as #8 is:",
        options: ["gas valve", "fuse", "limit", "transformer"],
        correct: 0,
        reasoning: "Component #8 represents the gas valve in the control circuit diagram.",
        csaReference: "CSA Unit 5 - Control circuit components"
    },
    {
        id: 29,
        unit: 12,
        question: "Fuses serving motor circuits should be:",
        options: ["quick blow type.", "time delay type.", "oversized by 2.5%", "oversized by 3.5%"],
        correct: 1,
        reasoning: "Time delay fuses are required for motor circuits to handle the high inrush current during motor startup.",
        csaReference: "Electrical Code - Motor circuit protection"
    },
    {
        id: 30,
        unit: 12,
        question: "A 120-volt power supply for a residential electrical circuit is taken from the:",
        options: ["line side of one branch circuit breaker and a ground lug.", "load side of one main circuit breaker and the line side of a second breaker.", "load side of one main breaker and the load side of the second main breaker.", "load side of one branch circuit breaker and a neutral lug."],
        correct: 3,
        reasoning: "120V circuits are derived from one hot leg (through a branch breaker) and the neutral bus in the panel.",
        csaReference: "Electrical Code - Residential wiring"
    },
    {
        id: 32,
        unit: 12,
        question: "Thermostat heat anticipators are normally connected in:",
        options: ["series with the valve, and in parallel with the thermostat contacts.", "parallel with the valve, and in parallel with the thermostat contacts.", "series with the valve, and in series with the thermostat contacts.", "parallel with the valve and in series with the thermostat contacts."],
        correct: 0,
        reasoning: "Heat anticipators are wired in series with the gas valve circuit and parallel with the thermostat contacts to provide false heat.",
        csaReference: "CSA Unit 13 - Thermostat operation"
    },
    {
        id: 35,
        unit: 12,
        question: "How much of the appliance-rated gas is supplied to a burner using a two stage gas valve when the thermostat calls for the second stage of heat?",
        options: ["100%", "120%", "175%", "200%"],
        correct: 0,
        reasoning: "Second stage provides 100% of rated gas input. First stage typically provides 40-70% for modulation.",
        csaReference: "CSA Unit 13 - Two-stage heating controls"
    },
    {
        id: 38,
        unit: 12,
        question: "As the temperature rises, the resistance of a wire:",
        options: ["increases.", "decreases.", "remains the same.", "fluctuates."],
        correct: 0,
        reasoning: "Most conductors exhibit positive temperature coefficient - resistance increases with temperature.",
        csaReference: "CSA Unit 5 - Electrical properties of materials"
    },
    {
        id: 41,
        unit: 12,
        question: "Thermostats are selected and rated to switch:",
        options: ["line voltage loads.", "low voltage loads.", "millivolt loads.", "all of the above."],
        correct: 3,
        reasoning: "Thermostats are available for all voltage types: line (120/240V), low (24V), and millivolt systems.",
        csaReference: "CSA Unit 13 - Thermostat types and applications"
    },
    {
        id: 43,
        unit: 12,
        question: "To ensure the main burner cannot operate unless the dampers are in the fully open position, electrically operated automatic combustion air dampers shall be:",
        options: ["locked in the open position.", "locked in the closed position.", "interlocked with the burner control system.", "installed with a fixed minimum opening of 20%."],
        correct: 2,
        reasoning: "Automatic dampers must be interlocked with burner controls to prevent operation unless fully open.",
        csaReference: "CSA B149.1-25, Clause 8.3 - Combustion air damper requirements"
    },
    {
        id: 97,
        unit: 12,
        question: "Which of the hydronic controls listed below de-energizes the main burner if the thermostat fails in the closed position?",
        options: ["low limit control", "temperature and pressure relief valve", "high limit control", "flow switch"],
        correct: 2,
        reasoning: "The high limit control provides safety shut-off if temperature exceeds set point.",
        csaReference: "Hydronic safety controls"
    },
    {
        id: 109,
        unit: 12,
        question: "The high temperature limit switch in the circuitry of a conventional residential furnace is wired in series with the:",
        options: ["fan motor.", "manual fan switch.", "gas valve.", "summer/winter switch."],
        correct: 2,
        reasoning: "The high limit is wired in series with the gas valve to shut off gas on overtemperature.",
        csaReference: "Furnace safety controls"
    },
    {
        id: 110,
        unit: 12,
        question: "There is a \"no heat call\" for the system in the figure above. Using the information below, determine which component is open: Terminals L & N ................. Reading 120 volts, 3 & 4 ..................... 120 volts, 7 & 8 ..................... 0 volts, 5 & 6 ..................... 0 volts. The open circuit is in the:",
        options: ["door switch", "thermostat", "limit switch", "transformer"],
        correct: 3,
        reasoning: "No voltage on secondary (7&8, 5&6) with primary voltage present indicates open transformer.",
        csaReference: "Electrical troubleshooting"
    },
    {
        id: 111,
        unit: 12,
        question: "There is a \"no heat call\" for the system in the above figure. Using the information below, determine which component is open: Terminals L & N ................. Reading 120 volts, 11 & 12............... 120 volts, 1 & 2 ..................... 0 volts, 3 & 4 ..................... 0 volts. The open circuit is in the:",
        options: ["L & N", "fan control", "limit switch", "door switch"],
        correct: 3,
        reasoning: "Voltage at 11&12 but not at 1&2 indicates open door switch interrupting circuit.",
        csaReference: "Electrical troubleshooting"
    },
    {
        id: 113,
        unit: 12,
        question: "When does an electrically operated automatic vent damper open on a mid-efficiency furnace?",
        options: ["Before the ignition cycle.", "When the furnace is hot.", "At the same time as the gas comes on.", "When the main fan switch is turned on."],
        correct: 0,
        reasoning: "Automatic vent dampers must open before ignition cycle begins for safe venting.",
        csaReference: "Vent damper operation"
    },
    {
        id: 154,
        unit: 12,
        question: "What is the most common transformer required for a power humidifier?",
        options: ["120 - 24 volt", "240 - 24 volt", "120 - 240 volt", "240 - 120 volt"],
        correct: 0,
        reasoning: "Most power humidifiers use 120V to 24V transformers for control circuit.",
        csaReference: "Humidifier electrical requirements"
    },

    // ========================================
    // CSA UNIT 13 - 14 Questions
    // ========================================
    {
        id: 8,
        unit: 13,
        question: "Where shall a manual shut off valve be installed to control the supply of gas to a commercial or industrial type of appliance?",
        options: ["In either the drop or riser as close as possible to the valve train.", "Downstream of all controls on the valve train.", "As close to the outlet of the gas meter as possible.", "Downstream of the pilot take-off line."],
        correct: 0,
        reasoning: "Manual shut-off valves for commercial/industrial appliances must be installed in the drop or riser as close as possible to the valve train for accessibility and safety.",
        csaReference: "CSA B149.1-25, Clause 7.9 - Appliance shut-off valve requirements"
    },
    {
        id: 19,
        unit: 13,
        question: "A small blue pilot flame indicates:",
        options: ["the orifice is too small.", "there is a lack of air.", "there is excessive draft at the pilot location.", "high gas pressure."],
        correct: 1,
        reasoning: "A small blue pilot flame typically indicates insufficient primary air, causing incomplete combustion despite the blue color.",
        csaReference: "CSA Unit 13 - Burner and pilot troubleshooting"
    },
    {
        id: 31,
        unit: 13,
        question: "Flame rods (flame rectifiers) utilize:",
        options: ["milliamps.", "millivolts.", "microamps.", "microvolts."],
        correct: 2,
        reasoning: "Flame rectification systems operate on microamp current levels (typically 0.5-5 microamps) for flame sensing.",
        csaReference: "CSA Unit 14 - Flame safeguard controls"
    },
    {
        id: 33,
        unit: 13,
        question: "A combination gas valve contains a(n):",
        options: ["appliance regulator, an automatic gas safety shut off valve, a pilot turndown valve.", "manual shut off valve, an automatic gas valve, a pressure regulator.", "test firing valve, an automatic gas valve, an ignition control valve.", "minimum gas pressure safety switch, an automatic gas valve, apressure regulator."],
        correct: 1,
        reasoning: "Combination gas valves contain a manual shut-off, automatic valve, and pressure regulator in one unit.",
        csaReference: "CSA Unit 13 - Gas valve components"
    },
    {
        id: 34,
        unit: 13,
        question: "The point where two metals are joined in a thermocouple is called the:",
        options: ["cold junction.", "hot junction.", "fusion junction.", "connection junction."],
        correct: 1,
        reasoning: "The hot junction is the sensing point of the thermocouple exposed to the pilot flame.",
        csaReference: "CSA Unit 14 - Thermocouple operation"
    },
    {
        id: 36,
        unit: 13,
        question: "A thermopile or powerpile generates:",
        options: ["0 to 20 millivolts", "20 to 30 millivolts", "30 to 90 millivolts", "hundreds of millivolts"],
        correct: 3,
        reasoning: "Thermopiles generate 250-750 millivolts by connecting multiple thermocouples in series.",
        csaReference: "CSA Unit 14 - Thermopile systems"
    },
    {
        id: 37,
        unit: 13,
        question: "How many volts are required to properly operate a hot surface igniter?",
        options: ["24 to 30 mv", "24 to 30 vac", "115 - 125 vac", "190 - 240 vac"],
        correct: 2,
        reasoning: "Hot surface igniters operate on 115-125 VAC line voltage to heat the silicon carbide element.",
        csaReference: "CSA Unit 14 - Hot surface ignition systems"
    },
    {
        id: 39,
        unit: 13,
        question: "An operating aquastat is which type of control?",
        options: ["normally open", "normally closed", "pressure sensitive", "differential pressure"],
        correct: 0,
        reasoning: "Operating aquastats are normally open controls that close on temperature rise to maintain water temperature.",
        csaReference: "CSA Unit 13 - Hydronic controls"
    },
    {
        id: 40,
        unit: 13,
        question: "In a normal thermocouple application, the expected drop out reading is from:",
        options: ["2 - 4 millivolts", "2 - 4 microamps", "6 - 10 millivolts", "6 - 10 microamps"],
        correct: 0,
        reasoning: "Thermocouples typically drop out (close gas valve) when voltage falls to 2-4 millivolts.",
        csaReference: "CSA Unit 14 - Thermocouple specifications"
    },
    {
        id: 42,
        unit: 13,
        question: "An intermittent pilot is present:",
        options: ["only at the instant of the initial call for heat.", "only until the main burner is lit.", "only while the main burner is operating.", "from the time there is a call for heat until the call has ended."],
        correct: 3,
        reasoning: "Intermittent pilots light on call for heat and remain lit throughout the entire heating cycle until satisfied.",
        csaReference: "CSA B149.1-25, Definitions - Intermittent pilot"
    },
    {
        id: 59,
        unit: 13,
        question: "The bypass or minimum burner flame on a direct acting modulating oven control:",
        options: ["prevents the oven temperature from dropping too rapidly.", "prevents the oven temperature from fluctuating excessively.", "maintains a minimum oven temperature.", "acts as a low limit safety."],
        correct: 1,
        reasoning: "The bypass flame prevents excessive temperature fluctuations by maintaining stable combustion.",
        csaReference: "CSA Unit 13 - Oven controls"
    },
    {
        id: 107,
        unit: 13,
        question: "A customer complains of an unusual noise from the furnace. There is a 24 volt solenoid gas valve working properly, but humming. From the following list, what is the most probable cause?",
        options: ["low voltage", "coil burned out", "dirty contacts in the fan control", "reversed polarity at the gas valve"],
        correct: 3,
        reasoning: "Reversed polarity causes AC solenoids to hum due to incomplete magnetic field closure.",
        csaReference: "Electrical troubleshooting"
    },
    {
        id: 112,
        unit: 13,
        question: "Which control will shut the gas flow off in a high efficiency furnace if the inducer motor fails?",
        options: ["Air proving switch", "Roll out switch", "High limit switch", "Ignition switch"],
        correct: 0,
        reasoning: "The air proving switch verifies inducer operation before allowing gas valve to open.",
        csaReference: "High efficiency furnace controls"
    },
    {
        id: 163,
        unit: 13,
        question: "A combination fan-limit control:",
        options: ["brings on the burner and the blower.", "brings on the blower to prepurge, then brings on the burner.", "shuts off the burner and brings on the blower at the same time.", "controls the blower operation and shuts the burner off on overheating."],
        correct: 3,
        reasoning: "Fan-limit controls manage blower operation and provide high temperature safety shut-off.",
        csaReference: "Furnace control systems"
    },

    // ========================================
    // CSA UNIT 14 - 13 Questions
    // ========================================
    {
        id: 45,
        unit: 14,
        question: "The instrument used to perform a passive depressurization test is a:",
        options: ["draft gauge.", "air gauge.", "mercury gauge.", "magnehelic gauge."],
        correct: 3,
        reasoning: "Magnehelic gauges measure small pressure differentials accurately for depressurization testing.",
        csaReference: "CSA Unit 16 - Building pressure testing"
    },
    {
        id: 46,
        unit: 14,
        question: "Which of the following heating systems would be expected to cause problems due to the \"distribution effect\"?",
        options: ["A direct vent furnace.", "A conventional vent type boiler.", "A forced air furnace with no return air openings in the furnace room.", "A forced air furnace with a return air opening in the furnace room."],
        correct: 3,
        reasoning: "Return air in the furnace room creates negative pressure, potentially causing backdrafting (distribution effect).",
        csaReference: "CSA B149.1-25, Clause 8.2 - Building as a system"
    },
    {
        id: 47,
        unit: 14,
        question: "A poorly insulated building could result in:",
        options: ["insufficient building air supply.", "excessive moisture in the building.", "increased fuel consumption.", "decreased fuel costs."],
        correct: 2,
        reasoning: "Poor insulation increases heat loss, requiring more fuel consumption to maintain temperature.",
        csaReference: "Energy efficiency principles"
    },
    {
        id: 51,
        unit: 14,
        question: "To ensure that negative building pressure never causes pressure-induced backdrafting:",
        options: ["never operate the exhaust fans when the appliances are operating.", "open a window when the appliances are operating.", "use sealed combustion, direct vent appliances.", "use a draft inducer on all wood fireplaces."],
        correct: 2,
        reasoning: "Direct vent (sealed combustion) appliances are immune to building pressure effects.",
        csaReference: "CSA B149.1-25, Clause 8.2 - Pressure-induced backdrafting prevention"
    },
    {
        id: 52,
        unit: 14,
        question: "The key components of a building as a system are:",
        options: ["the building envelope and the occupants.", "the building envelope, mechanical systems, occupants, and the internal environment.", "the building envelope, external environment, mechanical systems, and the occupants.", "the building envelope, mechanical systems, external environment, and the building structure."],
        correct: 1,
        reasoning: "Building as a system includes envelope, mechanical systems, occupants, and internal environment interactions.",
        csaReference: "CSA Unit 16 - Building science principles"
    },
    {
        id: 54,
        unit: 14,
        question: "The \"stack effect\" is caused by:",
        options: ["wind.", "the heating appliance.", "the mechanical ventilation system.", "the difference in temperature and density of indoor air and outdoor air."],
        correct: 3,
        reasoning: "Stack effect results from temperature/density differences between indoor and outdoor air causing natural convection.",
        csaReference: "Building science - Stack effect principles"
    },
    {
        id: 78,
        unit: 14,
        question: "What is the maximum natural gas pressure which can be supplied to a mechanical room located on the roof of a commercial building?",
        options: ["2 psig    (35 kPa)", "5 psig    (14 kPa)", "20 psig   (140 kPa)", "65 psig   (450 kPa)"],
        correct: 2,
        reasoning: "Roof-mounted mechanical rooms in commercial buildings can have up to 20 psig supply pressure.",
        csaReference: "CSA B149.1-25, Clause 6.16 - Pressure limitations by location"
    },
    {
        id: 82,
        unit: 14,
        question: "How many cylinders, whether empty or full and not in use, may be stored inside a building under construction?",
        options: ["0", "2", "3", "5"],
        correct: 0,
        reasoning: "No cylinders may be stored inside buildings under construction for safety reasons.",
        csaReference: "CSA B149.2 - Cylinder storage requirements"
    },
    {
        id: 117,
        unit: 14,
        question: "A 250,000 Btuh outdoor pool heater vent shall terminate from a building opening not less than:",
        options: ["12 inches (300 mm)", "36 inches (900 mm)", "6 feet (1.8 m)", "10 feet (3 m)"],
        correct: 3,
        reasoning: "Appliances over 100,000 Btuh require 10 feet clearance from building openings.",
        csaReference: "CSA B149.1-25, Clause 8.12 - Vent termination clearances"
    },
    {
        id: 131,
        unit: 14,
        question: "In a particular installation, the required air supply opening is 50 square inches. When using a grill rated at 76% free area, what is the rough opening?",
        options: ["37.5 square inches", "40 square inches", "62.5 square inches", "66.6 square inches"],
        correct: 3,
        reasoning: "Required rough opening = 50 ÷ 0.76 = 65.8 square inches (rounded to 66.6).",
        csaReference: "CSA B149.1-25, Clause 8.3 - Air opening calculations"
    },
    {
        id: 135,
        unit: 14,
        question: "Ventilation air openings for gas appliances should be located:",
        options: ["at the lowest possible point communicating with outdoors.", "at the highest practical point communicating with outdoors.", "on the same horizontal plane as the combustion air opening.", "at or above the level of the burner."],
        correct: 1,
        reasoning: "Ventilation air openings should be high to allow natural convection and prevent gas accumulation.",
        csaReference: "CSA B149.1-25, Clause 8.3 - Ventilation air location"
    },
    {
        id: 141,
        unit: 14,
        question: "An appliance vent shall terminate from any building mechanical air inlet by at least:",
        options: ["1 foot (300 mm)", "3 feet (900 mm)", "6 feet (1800 mm)", "10 feet (3 m)"],
        correct: 2,
        reasoning: "Appliance vents must be at least 6 feet from mechanical air intakes.",
        csaReference: "CSA B149.1-25, Clause 8.12 - Vent termination clearances"
    },
    {
        id: 144,
        unit: 14,
        question: "T  F  The smallest dimension of a combustion air supply duct must not be less than 3 inches.",
        options: ["True", "False"],
        correct: 0,
        reasoning: "True. Combustion air ducts must have minimum 3-inch dimension to prevent restriction.",
        csaReference: "CSA B149.1-25, Clause 8.3 - Combustion air duct sizing"
    },

    // ========================================
    // CSA UNIT 15 - 9 Questions
    // ========================================
    {
        id: 55,
        unit: 15,
        question: "How far should a dryer moisture exhaust duct terminate from a service regulator with limited relief of 50 scfh or less?",
        options: ["1 ft (0.3 m)", "2 ft (0.6 m)", "3 ft (1 m)", "10 ft (3 m)"],
        correct: 2,
        reasoning: "Dryer exhaust must terminate at least 3 feet (1 m) from service regulators with limited relief.",
        csaReference: "CSA B149.1-25, Clause 7.21 - Dryer exhaust clearances"
    },
    {
        id: 56,
        unit: 15,
        question: "How long may a corrugated flexible connector be when installed on a range?",
        options: ["2 feet", "6 feet", "8 feet", "no maximum"],
        correct: 1,
        reasoning: "Corrugated flexible connectors for ranges are limited to 6 feet maximum length.",
        csaReference: "CSA B149.1-25, Clause 6.24 - Appliance connector requirements"
    },
    {
        id: 57,
        unit: 15,
        question: "What minimum clearance is required from the sides of a domestic clothes dryer to combustible material unless otherwise approved?",
        options: ["3 inches  (7.5 cm)", "6 inches  (15 cm)", "9 inches  (22.5 cm)", "12 inches  (30 cm)"],
        correct: 1,
        reasoning: "Domestic dryers require 6 inches (15 cm) minimum clearance from sides to combustibles.",
        csaReference: "CSA B149.1-25, Clause 7.21 - Dryer clearances"
    },
    {
        id: 58,
        unit: 15,
        question: "A therm-o-disc operating the door locking mechanism in a self-cleaning oven activates at:",
        options: ["400˚F  (204˚C)", "650˚F  (340˚C)", "800˚F  (425˚C)", "900˚F  (480˚C)"],
        correct: 1,
        reasoning: "Self-cleaning oven door locks activate around 650°F to prevent door opening during cleaning cycle.",
        csaReference: "Appliance safety controls"
    },
    {
        id: 60,
        unit: 15,
        question: "Moisture exhaust duct on a residential dryer shall be joined with:",
        options: ["wire.", "duct tape.", "glue.", "sheet metal screws."],
        correct: 1,
        reasoning: "Aluminum foil duct tape is the approved method for sealing dryer exhaust duct joints.",
        csaReference: "CSA B149.1-25, Clause 7.21 - Dryer duct connections"
    },
    {
        id: 61,
        unit: 15,
        question: "Which device shuts off the spark igniter in a spark ignition dryer after proper ignition?",
        options: ["spark sensor", "ignition sensor", "limit switch", "main burner switch"],
        correct: 0,
        reasoning: "The spark sensor (flame sensor) detects flame presence and stops the ignition spark.",
        csaReference: "Dryer ignition controls"
    },
    {
        id: 62,
        unit: 15,
        question: "When does a gas dryer have to be vented outdoors?",
        options: ["Always", "Never", "Only in retrofit situations", "Only when instructed by the manufacturer"],
        correct: 0,
        reasoning: "Gas dryers must always be vented outdoors to remove moisture and combustion products.",
        csaReference: "CSA B149.1-25, Clause 7.21 - Dryer venting requirements"
    },
    {
        id: 138,
        unit: 15,
        question: "A metal moisture exhaust duct from a commercial dryer shall not terminate outdoors less than what distance from a service regulator vent?",
        options: ["3 ft. (.9 m)", "5 ft. (1.5 m)", "6 ft. (1.8 m)", "10 ft. (3 m)"],
        correct: 3,
        reasoning: "Commercial dryer exhausts must terminate at least 10 feet from service regulator vents.",
        csaReference: "CSA B149.1-25, Clause 7.21 - Commercial dryer clearances"
    },
    {
        id: 148,
        unit: 15,
        question: "A humidistat is typically set at which of the following ranges during winter months?",
        options: ["5% – 15%", "20% – 30%", "40% – 50%", "60% – 80%"],
        correct: 1,
        reasoning: "Winter humidity should be 20-30% to prevent condensation while maintaining comfort.",
        csaReference: "Indoor air quality - Humidity control"
    },

    // ========================================
    // CSA UNIT 16 - 6 Questions
    // ========================================
    {
        id: 83,
        unit: 16,
        question: "T  F  A generator, evaporator, absorber and condenser are the main components of a gas-fired refrigerator.",
        options: ["True", "False"],
        correct: 0,
        reasoning: "True. Absorption refrigerators use these four main components in the refrigeration cycle.",
        csaReference: "Absorption refrigeration principles"
    },
    {
        id: 84,
        unit: 16,
        question: "What kind of propane refrigerator can be installed in a recreational vehicle?",
        options: ["An unvented type.", "An approved direct vent type or equivalent.", "An approved refrigerator connected with B vent.", "A new appliance only."],
        correct: 1,
        reasoning: "RV refrigerators must be approved direct vent type for safety in confined spaces.",
        csaReference: "CSA Z240 - RV appliance requirements"
    },
    {
        id: 85,
        unit: 16,
        question: "T  F  Ammonia and propane are used in an absorption refrigeration cycle.",
        options: ["True", "False"],
        correct: 0,
        reasoning: "True. Ammonia is the refrigerant, hydrogen is the carrier gas, and water is the absorbent in gas refrigerators.",
        csaReference: "Absorption refrigeration chemistry"
    },
    {
        id: 86,
        unit: 16,
        question: "How often should a refrigerator be serviced and cleaned?",
        options: ["once every three years", "once every 5 years", "at least once a year or as recommended by the manufacturer", "at least three times a year or as recommended by the manufacturer"],
        correct: 2,
        reasoning: "Refrigerators should be serviced annually or per manufacturer's recommendations for optimal operation.",
        csaReference: "Appliance maintenance requirements"
    },
    {
        id: 87,
        unit: 16,
        question: "When is it permissible to install a propane refrigerator in a dwelling unit?",
        options: ["Only if it is of the direct vent type.", "If adequate combustion air is provided from within the dwelling unit.", "Only if you have a CO alarm.", "If permitted by the manufacturer."],
        correct: 0,
        reasoning: "Propane refrigerators in dwellings must be direct vent type for safety.",
        csaReference: "CSA B149.1-25, Clause 7.24 - Refrigerator installation"
    },
    {
        id: 149,
        unit: 16,
        question: "What happens to the system in the heating mode if the evaporator coil gets plugged with dirt?",
        options: ["The fan motor cycles on overload.", "The burner shuts off on high limit.", "The house overheats.", "The heat anticipator burns out."],
        correct: 1,
        reasoning: "Restricted airflow causes furnace overheating and high limit cycling.",
        csaReference: "Furnace troubleshooting"
    },

    // ========================================
    // CSA UNIT 17 - 1 Questions
    // ========================================
    {
        id: 100,
        unit: 17,
        question: "If a water heater has black scorch marks on the front above the burner access opening, what should be done?",
        options: ["Decrease the amount of primary air and decrease the manifold pressure.", "Adjust the pilot flame and increase the manifold pressure.", "Adjust the burner flame and decrease the draft.", "Adjust the burner flame and check the flue baffle for soot or scale."],
        correct: 3,
        reasoning: "Scorch marks indicate flame rollout. Check burner adjustment and flue for blockages.",
        csaReference: "Water heater troubleshooting"
    },

    // ========================================
    // CSA UNIT 18 - 9 Questions
    // ========================================
    {
        id: 94,
        unit: 18,
        question: "What is the temperature and pressure relief valve settings for most residential type water heaters?",
        options: ["150° F (66° C), 75 psig (517 kPa)", "180° F (83° C), 100 psig (690 kPa)", "210° F (99° C), 150 psig (1034 kPa)", "240° F (116° C), 210 psig (1380 kPa)"],
        correct: 2,
        reasoning: "Standard T&P valves are set at 210°F and 150 psig for residential water heaters.",
        csaReference: "CSA B149.1-25, Clause 7.26 - T&P valve requirements"
    },
    {
        id: 95,
        unit: 18,
        question: "Which of the following is required to determine the size of a circulator pump to be used on a combination heating system employing a water heater?",
        options: ["The temperature of the water and the amount of lift in the system.", "The required water flow rate and the head pressure in the complete heating loop.", "The diameter and length of straight piping in the entire system.", "The temperature and the velocity of the water in both the domestic plumbing system and heating system."],
        correct: 1,
        reasoning: "Pump sizing requires flow rate (GPM) and total head pressure (feet) calculations.",
        csaReference: "Hydronic system design principles"
    },
    {
        id: 96,
        unit: 18,
        question: "What must be done to ensure equal water flow through two water heaters when they are paired together?",
        options: ["Install flow balancing cocks.", "Ensure they are installed on the same vertical plane.", "Ensure the inlet and outlet piping are equivalent lengths.", "Install a mixing valve and two water regulators."],
        correct: 2,
        reasoning: "Equal piping lengths ensure balanced flow through parallel water heaters.",
        csaReference: "Parallel water heater installation"
    },
    {
        id: 98,
        unit: 18,
        question: "The discharge piping from the temperature and pressure relief valve on a water heater shall terminate not more than what distance from the floor?",
        options: ["3 inches (7.5 cm)", "6 inches (15 cm)", "12 inches (30 cm)", "18 inches (45 cm)"],
        correct: 2,
        reasoning: "T&P discharge must terminate 6-12 inches from floor to prevent scalding while allowing visibility.",
        csaReference: "CSA B149.1-25, Clause 7.26 - T&P discharge requirements"
    },
    {
        id: 99,
        unit: 18,
        question: "As the outlet temperature decreases from a water heater to the heating loop in a combination heating system, the:",
        options: ["heating output from the air handler decreases.", "heating output from the air handler increases.", "rate of heat transfer from the water to the air increases.", "greater the temperature drop through the heating loop."],
        correct: 0,
        reasoning: "Lower water temperature reduces heat transfer capacity and heating output.",
        csaReference: "Heat transfer principles"
    },
    {
        id: 102,
        unit: 18,
        question: "The lower the return air temperature to the air handler on a combination heating system, the:",
        options: ["higher the heating output from the air handler.", "lower the heating output from the air handler.", "lower the rate of heat transfer from the water to the air.", "lower the temperature drop through the air handler."],
        correct: 0,
        reasoning: "Lower return air temperature increases temperature differential, improving heat transfer.",
        csaReference: "Heat transfer principles"
    },
    {
        id: 103,
        unit: 18,
        question: "The faster the flow of water through the heating loop of a combination heating system:",
        options: ["the greater the heat transfer to the heated medium.", "the lower the water temperature drop through the heating loop.", "the higher the noise level from the pump and piping system.", "All of the above choices are correct."],
        correct: 3,
        reasoning: "Faster flow increases heat transfer, reduces temperature drop, but may increase noise.",
        csaReference: "Hydronic system principles"
    },
    {
        id: 104,
        unit: 18,
        question: "What is the most effective way to prevent lime deposits in a water heater?",
        options: ["Install a charcoal filter upstream of the water heater.", "Install a water softening system.", "Install a cartridge filter upstream of the water heater.", "Install an air mixing anode."],
        correct: 1,
        reasoning: "Water softeners remove calcium and magnesium that cause lime scale buildup.",
        csaReference: "Water treatment systems"
    },
    {
        id: 105,
        unit: 18,
        question: "Which of the following components used in a combination heating system employing a water heater is required to prevent thermo siphoning from the heating loop?",
        options: ["mixing valve", "balancing valve", "check valve", "expansion tank"],
        correct: 2,
        reasoning: "Check valves prevent reverse flow and thermosiphoning in heating loops.",
        csaReference: "Hydronic system components"
    },

    // ========================================
    // CSA UNIT 19 - 9 Questions
    // ========================================
    {
        id: 48,
        unit: 19,
        question: "Which of the following forms of heat transfer does a forced air furnace use to heat a home?",
        options: ["radiant", "conductive", "convective", "thermal"],
        correct: 2,
        reasoning: "Forced air furnaces primarily use convection - moving heated air throughout the space.",
        csaReference: "HVAC principles - Heat transfer methods"
    },
    {
        id: 89,
        unit: 19,
        question: "A high limit is tested on a forced warm air furnace by:",
        options: ["disconnecting the air circulating blower.", "disconnecting the wire to the limit control.", "disconnecting one wire on the thermostat when the furnace is warm.", "shutting off the gas control so that the furnace will cool down."],
        correct: 0,
        reasoning: "Disconnecting the blower causes temperature rise to test high limit operation.",
        csaReference: "Furnace testing procedures"
    },
    {
        id: 106,
        unit: 19,
        question: "In a storage garage, an appliance shall be installed so that a component capable of igniting a flammable vapour is located at least:",
        options: ["18 inches above the floor", "24 inches above the floor", "54 inches above the floor", "4.5 feet above the floor"],
        correct: 0,
        reasoning: "Ignition sources must be at least 18 inches above garage floors where vapors may accumulate.",
        csaReference: "CSA B149.1-25, Clause 7.4 - Garage installation requirements"
    },
    {
        id: 108,
        unit: 19,
        question: "A furnace is found to be cycling on the high limit. The fan rotation, belt, filter and the clocked input is according to the rating plate. What is the most likely problem?",
        options: ["The thermostat heat anticipator is set too high.", "The return air volume is too high.", "The thermostat heat anticipator is set too low.", "The return air volume is too low."],
        correct: 3,
        reasoning: "Insufficient return air causes overheating and high limit cycling despite proper setup.",
        csaReference: "Furnace troubleshooting"
    },
    {
        id: 114,
        unit: 19,
        question: "Which type of appliance is an 85% efficient furnace that has non-positive pressure?",
        options: ["Category I", "Category II", "Category III", "Category IV"],
        correct: 1,
        reasoning: "Category II: Non-positive vent pressure with flue loss >17% (mid-efficiency, condensing potential).",
        csaReference: "CSA B149.1-25, Appliance categories"
    },
    {
        id: 115,
        unit: 19,
        question: "Which of the following is the best procedure to increase the furnace blower speed?",
        options: ["Close up the motor pulley.", "Open up the motor pulley.", "Increase the size of the return air duct.", "Install a higher horsepower fan motor."],
        correct: 0,
        reasoning: "Closing (decreasing diameter) of motor pulley increases belt speed and blower RPM.",
        csaReference: "Belt drive adjustments"
    },
    {
        id: 146,
        unit: 19,
        question: "What happens to the system in the cooling mode if the filter gets plugged with dirt?",
        options: ["The fan motor cycles on overload.", "The cooling coil frosts.", "The furnace shuts off on high limit.", "The air cleaner freezes up."],
        correct: 1,
        reasoning: "Restricted airflow causes the evaporator coil to freeze due to insufficient heat absorption.",
        csaReference: "HVAC troubleshooting - Cooling system problems"
    },
    {
        id: 150,
        unit: 19,
        question: "What will happen in a furnace if the cooling coil gets too dirty?",
        options: ["The return air temperature will rise.", "The return air flow will increase.", "The bonnet temperature will decrease.", "The supply air flow will decrease."],
        correct: 3,
        reasoning: "Dirty coil restricts airflow, reducing supply air volume through the system.",
        csaReference: "HVAC maintenance and troubleshooting"
    },
    {
        id: 165,
        unit: 19,
        question: "If the fan compartment door of a belted fan motor is left off, the motor:",
        options: ["voltage will decrease.", "voltage will increase.", "current will decrease.", "current will increase."],
        correct: 3,
        reasoning: "Missing door reduces air resistance, causing motor to work harder and draw more current.",
        csaReference: "Motor operation and loading"
    },

    // ========================================
    // CSA UNIT 20 - 10 Questions
    // ========================================
    {
        id: 88,
        unit: 20,
        question: "What is the minimum vertical service clearance of a boiler?",
        options: ["18\"  (450 mm)", "24\"  (600 mm)", "36\"  (900 mm)", "48\"  (1200 mm)"],
        correct: 1,
        reasoning: "Boilers require minimum 24 inches (600 mm) vertical service clearance for maintenance.",
        csaReference: "CSA B149.1-25, Clause 7.27 - Boiler clearances"
    },
    {
        id: 90,
        unit: 20,
        question: "What is the minimum clearance to combustible material from the sides of a boiler?",
        options: ["3\"   (75 mm)", "6\"   (150 mm)", "12\"  (300 mm)", "18\"  (450 mm)"],
        correct: 1,
        reasoning: "Boilers require minimum 6 inches (150 mm) clearance from sides to combustibles.",
        csaReference: "CSA B149.1-25, Clause 7.27 - Boiler clearances"
    },
    {
        id: 118,
        unit: 20,
        question: "T  F  The external bypass valve in a pool heater is set by determining the temperature rise across the appliance.",
        options: ["True", "False"],
        correct: 0,
        reasoning: "True. The bypass valve is adjusted to achieve proper temperature rise (typically 10-15°F) across the heater.",
        csaReference: "Pool heater installation and adjustment"
    },
    {
        id: 119,
        unit: 20,
        question: "What safety control protects a steam boiler if the condensate pump fails to return water to the boiler?",
        options: ["low water cut-off", "flame safeguard control", "low pressure limit control", "high pressure limit control"],
        correct: 0,
        reasoning: "Low water cut-off prevents dry firing by shutting off burner when water level drops.",
        csaReference: "Steam boiler safety controls"
    },
    {
        id: 120,
        unit: 20,
        question: "When an indoor gas-fired pool heater is being replaced, the new finned tube type heater shall be:",
        options: ["in accordance with the manufacturer's installation instructions.", "direct vent type.", "natural draft type.", "power vented."],
        correct: 1,
        reasoning: "Indoor pool heaters must be direct vent type to prevent moisture and combustion product issues.",
        csaReference: "CSA B149.1-25, Clause 7.28 - Indoor pool heater requirements"
    },
    {
        id: 121,
        unit: 20,
        question: "A fire tube boiler has:",
        options: ["water outside the tubes and flue gases outside.", "water inside the tubes and flue gases outside.", "water inside the tubes and water outside.", "water outside the tubes and flue gases inside."],
        correct: 3,
        reasoning: "Fire tube boilers have hot combustion gases inside tubes surrounded by water.",
        csaReference: "Boiler design principles"
    },
    {
        id: 122,
        unit: 20,
        question: "The most important valve in a hot water system is a:",
        options: ["gate valve.", "globe valve.", "blowdown valve.", "relief valve."],
        correct: 3,
        reasoning: "The relief valve is the most critical safety device preventing system overpressure.",
        csaReference: "Hydronic system safety"
    },
    {
        id: 123,
        unit: 20,
        question: "A backflow preventer used in a boiler system should be located in the:",
        options: ["over flow line connected to the drain.", "return line close to the boiler.", "3/4 inch line connecting the boiler and cushion tank.", "make up water line to the system."],
        correct: 3,
        reasoning: "Backflow preventers are installed in makeup water lines to protect potable water supply.",
        csaReference: "Cross-connection control"
    },
    {
        id: 124,
        unit: 20,
        question: "A \"back flow preventer\" in a hydronic heating system is used to:",
        options: ["keep the hot water from entering the cold water system.", "hold the pressure on the system during a temporary shut-down to prevent the entry of air.", "prevent the heating water from circulating the wrong way in the system.", "keep non-potable water from entering the drinking water system."],
        correct: 3,
        reasoning: "Backflow preventers protect potable water from contamination by heating system water.",
        csaReference: "Plumbing code - Cross-connection control"
    },
    {
        id: 125,
        unit: 20,
        question: "T  F  Technicians are responsible for ensuring that automatic chlorinators are installed upstream of the heater.",
        options: ["True", "False"],
        correct: 1,
        reasoning: "False. Chlorinators must be installed downstream of the heater to prevent corrosion damage.",
        csaReference: "Pool equipment installation sequence"
    },

    // ========================================
    // CSA UNIT 21 - 4 Questions
    // ========================================
    {
        id: 127,
        unit: 21,
        question: "An unvented infra-red heater cannot be installed in which of the following applications?",
        options: ["residential", "care building", "detention occupancy", "All of the available choices"],
        correct: 3,
        reasoning: "Unvented infrared heaters are prohibited in all these occupancies for safety reasons.",
        csaReference: "CSA B149.1-25, Clause 7.29 - Unvented appliance restrictions"
    },
    {
        id: 128,
        unit: 21,
        question: "When can a natural draft decorative appliance be installed in a bedroom?",
        options: ["Never.", "Always.", "Only when certified for installation in bedrooms.", "Only when under 50,000 Btuh input."],
        correct: 2,
        reasoning: "Decorative appliances may only be installed in bedrooms if specifically certified for that use.",
        csaReference: "CSA B149.1-25, Clause 7.30 - Decorative appliance restrictions"
    },
    {
        id: 129,
        unit: 21,
        question: "What is the required clearance from combustibles above a free standing radiant room heater?",
        options: ["18\" (450 mm)", "24\" (600 mm)", "36\" (900 mm)", "48\" (1200 mm)"],
        correct: 2,
        reasoning: "Radiant room heaters require 36 inches clearance above to combustibles.",
        csaReference: "CSA B149.1-25, Clause 7.7 - Room heater clearances"
    },
    {
        id: 130,
        unit: 21,
        question: "Dirt pockets are required on:",
        options: ["decorative appliances.", "gas logs.", "room heaters.", "none of the available choices"],
        correct: 3,
        reasoning: "Dirt pockets (sediment traps) are not required on these specific appliance types.",
        csaReference: "CSA B149.1-25, Clause 7.9 - Sediment trap exemptions"
    },

    // ========================================
    // CSA UNIT 22 - 14 Questions
    // ========================================
    {
        id: 44,
        unit: 22,
        question: "After a direct vent radiant heating system has been installed, the customer complains that the walls and windows are wet. What is the most reasonable response?",
        options: ["After confirming that the heat exchanger is not cracked, advise the customer to call someone else.", "Recommend that a window be left open a bit.", "Advise the customer that the problem will disappear when the building dries out.", "Recommend the installation of a mechanical ventilation system."],
        correct: 3,
        reasoning: "Excessive moisture indicates inadequate ventilation. A mechanical ventilation system (HRV/ERV) is the proper solution.",
        csaReference: "Building science - Indoor air quality and ventilation"
    },
    {
        id: 50,
        unit: 22,
        question: "Determine the minimum required size of the combustion air opening from outdoors given the following information: There are two appliances in a 10 ft. x 10 ft. x 30 ft. structure which has an equivalent leakage area greater than 0.05 m2 . A furnace has a draft hood and an input of 100,000 Btuh. The second appliance has an input of 50,000 Btuh, and does not have a draft hood. The required combustion air opening size is:",
        options: ["0 square inches    (0 mm2)", "11 square inches    (4500 mm2)", "14 square inches    (5800 mm2)", "22 square inches    (7000 mm2)"],
        correct: 0,
        reasoning: "With equivalent leakage area > 0.05 m² and total input ≤ 400,000 Btuh, no additional combustion air opening required.",
        csaReference: "CSA B149.1-25, Clause 8.2.1 - Natural infiltration"
    },
    {
        id: 91,
        unit: 22,
        question: "What materials are approved for joining single wall vent connectors?",
        options: ["Duct tape.", "Pop rivets.", "Sheet metal screws.", "Silicone or adhesive."],
        correct: 2,
        reasoning: "Sheet metal screws are the approved method for joining vent connectors.",
        csaReference: "CSA B149.1-25, Clause 8.14 - Vent connector joining methods"
    },
    {
        id: 92,
        unit: 22,
        question: "How often must your combustion analyzer be recalibrated?",
        options: ["Weekly", "Monthly", "As per the manufacturer's specifications", "As required by industry"],
        correct: 2,
        reasoning: "Combustion analyzers must be calibrated according to manufacturer's specifications for accuracy.",
        csaReference: "Equipment maintenance standards"
    },
    {
        id: 132,
        unit: 22,
        question: "What requirements must be met when a power venter is used in place of a natural draft vent?",
        options: ["The appliance must be located within 10 feet (3 m) of the chimney.", "The vent connector must be larger than 8 inches (203 mm) in diameter.", "A device must be provided to prevent the flow of gas to the main burner in the event of exhaust system failure.", "The chimney must be of the prefabricated metal type."],
        correct: 2,
        reasoning: "Power venters require interlocks to prevent gas flow if the venter fails.",
        csaReference: "CSA B149.1-25, Clause 7.16 - Power venter safety requirements"
    },
    {
        id: 133,
        unit: 22,
        question: "Who is responsible at the time of appliance installation for ensuring proper and adequate venting and air supply?",
        options: ["The gas distributor.", "The installer.", "The owner of the appliances.", "The local building inspector."],
        correct: 1,
        reasoning: "The installer is responsible for ensuring proper venting and air supply at installation.",
        csaReference: "CSA B149.1-25, Clause 7.2 - Installer responsibilities"
    },
    {
        id: 134,
        unit: 22,
        question: "When a vent connector is required to be reduced in size to that of either the flue collar or the draft hood outlet, where shall the change in size take place?",
        options: ["At the barometric opening or at the chimney.", "At the chimney opening or at the draft hood outlet.", "At the appliance flue collar or at the barometric opening.", "At the appliance flue collar or draft hood outlet."],
        correct: 3,
        reasoning: "Size reductions must occur at the appliance connection point, not in the run.",
        csaReference: "CSA B149.1-25, Clause 8.14 - Vent connector sizing"
    },
    {
        id: 136,
        unit: 22,
        question: "When is a draft hood not permitted to be used on an appliance?",
        options: ["When the appliance is equipped with an electronic flame safeguard device.", "When there is zero fire draft.", "When the flue gas temperature is in excess of 550⁰ F (288⁰C).", "When there is zero over fire draft."],
        correct: 2,
        reasoning: "Draft hoods cannot handle flue gas temperatures above 550°F without damage.",
        csaReference: "CSA B149.1-25, Clause 8.10 - Draft hood temperature limitations"
    },
    {
        id: 137,
        unit: 22,
        question: "What is the minimum clearance required from combustible material when a single wall vent connector is used to vent a warm air furnace?",
        options: ["1 inch (25 mm)", "3 inches (75 mm)", "6 inches (150 mm)", "8 inches (200 mm)"],
        correct: 2,
        reasoning: "Single wall vent connectors require 6 inches minimum clearance from combustibles.",
        csaReference: "CSA B149.1-25, Clause 8.14 - Vent connector clearances"
    },
    {
        id: 139,
        unit: 22,
        question: "A direct vent propane appliance shall not terminate:",
        options: ["within 2 ft. (600 mm) of property line.", "less than 3 ft. (900 mm) from a gas service regulator.", "within 3 ft. (900 mm) of a mechanical air supply inlet to a building.", "within 6 ft. (1.8 m) of a mechanical air supply inlet to a building."],
        correct: 3,
        reasoning: "Direct vent terminals must be at least 6 feet from mechanical air intakes.",
        csaReference: "CSA B149.1-25, Clause 8.17 - Direct vent termination clearances"
    },
    {
        id: 140,
        unit: 22,
        question: "\"Spillage\" of flue gases at the appliance draft diverter would indicate that:",
        options: ["an updraft condition is present in the venting system of the appliance.", "there is excessive draft at the appliance.", "the appliance is under fired.", "the venting system of the appliance is obstructed."],
        correct: 3,
        reasoning: "Spillage at draft hood indicates blocked vent preventing proper flow of combustion products.",
        csaReference: "Venting troubleshooting"
    },
    {
        id: 142,
        unit: 22,
        question: "When the required minimum clearance for a vent connector is 9\" (225 mm) to combustible material with no protection, what is the acceptable method to reduce the clearance to 3\" (75 mm)?",
        options: ["By using 0.25 inch (6 mm) rigid insulation spaced out 1 inch (25 mm) with a non-combustible spacer.", "By using 0.25 inch (6 mm) insulating millboard spaced out 1 inch (25 mm) with a spacer.", "By using 22 gauge sheet metal attached to the combustible material.", "By using 22 gauge sheet metal spaced out 1 inch (25 mm) from the combustible material."],
        correct: 3,
        reasoning: "Sheet metal with 1-inch air gap provides 66% clearance reduction (9\" to 3\").",
        csaReference: "CSA B149.1-25, Table 7.1 - Clearance reduction methods"
    },
    {
        id: 143,
        unit: 22,
        question: "When is it necessary to use a sleeve at the point the connector enters the chimney when a vent connector is being used to connect an appliance to a masonry chimney?",
        options: ["Always", "Never", "Only when the vent connector is larger than 6 inches (150mm) in diameter.", "Only when the appliance is equipped with a draft hood."],
        correct: 0,
        reasoning: "A sleeve is always required when vent connectors enter masonry chimneys for proper sealing.",
        csaReference: "CSA B149.1-25, Clause 8.14 - Chimney connection requirements"
    },
    {
        id: 145,
        unit: 22,
        question: "A water heater with a draft diverter is to be connected to a type B vent stack by itself. The height (H) is determined to be 11'-0\" (3.3 m) and the input is 50,000 Btuh. The stack is connected directly to the water heater without a lateral run. Determine the vent size and maximum input of the vent if the house is new, and has a dryer, bathroom fan and range hood. (DO NOT USE INTERPOLATION)",
        options: ["3\", 53 cfh", "3\", 50 cfh", "3\", 58 cfh", "4\", 79 cfh"],
        correct: 2,
        reasoning: "Using vent sizing tables for 11 feet height, 3\" vent handles up to 58,000 Btuh for single appliance.",
        csaReference: "CSA B149.1-25, Annex B - Vent sizing tables"
    },

    // ========================================
    // CSA UNIT 23 - 7 Questions
    // ========================================
    {
        id: 147,
        unit: 23,
        question: "What are the main components of an electronic air cleaner?",
        options: ["Ionizing wires, high voltage transformer, and collector plates.", "Humidistat, ionizing wires, and collector plates.", "Thermostat, high voltage transformer, and ionizing wires.", "Ionizing wires, collector plates, and fan control switch."],
        correct: 0,
        reasoning: "Electronic air cleaners use ionizing wires, high voltage power supply, and collector plates.",
        csaReference: "Indoor air quality equipment"
    },
    {
        id: 151,
        unit: 23,
        question: "What happens when the humidistat for a power humidifier closes?",
        options: ["The humidifier solenoid valve opens.", "The humidifier motor starts to turn.", "The furnace fan starts, then the humidifier starts.", "The gas valve opens then the humidifier starts."],
        correct: 0,
        reasoning: "Humidistat closure energizes the solenoid valve allowing water flow to the humidifier.",
        csaReference: "Humidifier control operation"
    },
    {
        id: 152,
        unit: 23,
        question: "How many duct openings are required for a bypass humidifier?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        reasoning: "Bypass humidifiers require 2 openings: one from supply plenum, one to return plenum.",
        csaReference: "Humidifier installation requirements"
    },
    {
        id: 153,
        unit: 23,
        question: "What must be ensured before electronic cells are removed for cleaning?",
        options: ["Air proving switch must be open.", "Pre-filter must be removed.", "Cells must be de-energized and discharged.", "Fan switch must be in the automatic position."],
        correct: 2,
        reasoning: "Electronic cells must be de-energized and discharged to prevent electrical shock.",
        csaReference: "Electronic air cleaner safety"
    },
    {
        id: 155,
        unit: 23,
        question: "When a furnace mounted humidifier is used, shorter furnace blower \"on\" cycles result in:",
        options: ["inadequate humidity levels.", "ideal humidity levels.", "excessive humidity swings.", "uncontrolled humidity swings."],
        correct: 0,
        reasoning: "Short blower cycles don't provide enough time for adequate moisture distribution.",
        csaReference: "Humidifier operation principles"
    },
    {
        id: 156,
        unit: 23,
        question: "Air filtration devices are generally located in the:",
        options: ["supply air plenum.", "fresh air plenum.", "return air plenum.", "exhaust air plenum."],
        correct: 2,
        reasoning: "Filters are installed in return air to clean air before it enters the equipment.",
        csaReference: "HVAC system design"
    },
    {
        id: 164,
        unit: 23,
        question: "If condensation occurs on windows when the outdoor temperature drops, the humidistat setting should be:",
        options: ["increased.", "decreased.", "set to zero.", "set to 100%."],
        correct: 1,
        reasoning: "Lower humidity prevents condensation on cold surfaces like windows.",
        csaReference: "Humidity control principles"
    },

    // ========================================
    // CSA UNIT 24 - 7 Questions
    // ========================================
    {
        id: 49,
        unit: 24,
        question: "A proper heat loss calculation has been performed for a house which requires a furnace replacement. The numbers indicate the heat loss is 97,650 Btu/h. Which of the following furnaces should be selected for the installation?",
        options: ["A 100,000 Btu/h input furnace with an AFUE rating of 93%", "A 105,000 Btu/h input furnace with an AFUE rating of 93%", "A furnace with the same input as the one being replaced.", "A furnace with 1.5 times the input as the one being replaced."],
        correct: 1,
        reasoning: "105,000 × 0.93 = 97,650 Btu/h output exactly matches the heat loss requirement.",
        csaReference: "CSA Unit 17 - Furnace sizing calculations"
    },
    {
        id: 157,
        unit: 24,
        question: "In domestic heat pump applications, what is the minimum volume of supply air (cfm) per ton of cooling required?",
        options: ["250", "300", "400", "450"],
        correct: 2,
        reasoning: "Heat pumps require 400 CFM per ton for proper operation in both heating and cooling modes.",
        csaReference: "Heat pump design specifications"
    },
    {
        id: 158,
        unit: 24,
        question: "Convection is:",
        options: ["heat transfer through solid objects.", "heat transfer through fluids.", "a wave form of heat transfer.", "a form of latent heat transfer."],
        correct: 1,
        reasoning: "Convection is heat transfer through movement of fluids (liquids or gases).",
        csaReference: "Heat transfer principles"
    },
    {
        id: 159,
        unit: 24,
        question: "A British Thermal Unit is the amount of heat required to:",
        options: ["raise the temperature of one pound of water by one degree Fahrenheit.", "raise the temperature of one pound of a substance by one degree Fahrenheit.", "change one pound of a substance from a liquid to a vapour.", "change one pound of ice to water at 32 degrees Fahrenheit."],
        correct: 0,
        reasoning: "1 BTU = heat to raise 1 pound of water by 1°F.",
        csaReference: "HVAC fundamentals - Heat measurement"
    },
    {
        id: 160,
        unit: 24,
        question: "In domestic air conditioning applications, what is the minimum volume of supply air (cfm) per ton of cooling required?",
        options: ["250", "300", "400", "450"],
        correct: 2,
        reasoning: "Air conditioning systems require 400 CFM per ton for proper heat removal.",
        csaReference: "Air conditioning design standards"
    },
    {
        id: 161,
        unit: 24,
        question: "Heat which when added to or removed from a substance causes a change of temperature is:",
        options: ["superheat.", "specific heat.", "latent heat.", "sensible heat."],
        correct: 3,
        reasoning: "Sensible heat causes temperature change without phase change.",
        csaReference: "Thermodynamics - Types of heat"
    },
    {
        id: 162,
        unit: 24,
        question: "A pressure reading of 14.7 psia is equivalent to:",
        options: ["0 psig", "2.31\" w.c.", "24.7 psig", "27.78\" w.c."],
        correct: 0,
        reasoning: "14.7 psia (absolute) equals 0 psig (gauge) at sea level atmospheric pressure.",
        csaReference: "Pressure measurement fundamentals"
    }
];

// Question bank statistics
const QUESTION_BANK_STATS = {
    totalQuestions: 155,
    questionsByUnit: {
        10: 6,
        11: 23,
        12: 23,
        13: 14,
        14: 13,
        15: 9,
        16: 6,
        17: 1,
        18: 9,
        19: 9,
        20: 10,
        21: 4,
        22: 14,
        23: 7,
        24: 7,
    }
};