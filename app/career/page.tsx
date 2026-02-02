'use client';

import { useState, useEffect } from 'react';

export default function Career() {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [selectedCertification, setSelectedCertification] = useState('none');
  const [targetRole, setTargetRole] = useState('');
  const [timeline, setTimeline] = useState(12);
  const [selectedRegion, setSelectedRegion] = useState('ontario');
  const [searchLocation, setSearchLocation] = useState('');

  // Certification pathway data
  const certificationLevels = {
    none: { name: 'No Certification', salary: '$35,000 - $45,000', time: 0 },
    g3: { name: 'G3 Propane Technician', salary: '$45,000 - $58,000', time: 3 },
    g2: { name: 'G2 Natural Gas Technician', salary: '$52,000 - $68,000', time: 6 },
    g2_commercial: { name: 'G2 + Commercial Experience', salary: '$58,000 - $75,000', time: 12 },
    g2_industrial: { name: 'G2 + Industrial Specialization', salary: '$65,000 - $85,000', time: 18 },
    master: { name: 'Master Gas Technician', salary: '$70,000 - $95,000', time: 36 }
  };

  // Ontario employer data by region
  const employers = [
    {
      name: 'Reliance Home Comfort',
      location: 'Toronto',
      region: 'GTA',
      type: 'Residential',
      certifications: ['G2', 'G3'],
      hiring: 'High',
      website: 'reliancecomfort.com'
    },
    {
      name: 'Direct Energy',
      location: 'Mississauga',
      region: 'GTA',
      type: 'Residential/Commercial',
      certifications: ['G2', 'G3'],
      hiring: 'Medium',
      website: 'directenergy.ca'
    },
    {
      name: 'Enbridge Gas',
      location: 'Multiple Locations',
      region: 'Province-wide',
      type: 'Utility/Industrial',
      certifications: ['G2'],
      hiring: 'Medium',
      website: 'enbridgegas.com'
    },
    {
      name: 'Ontario Power Generation',
      location: 'Bruce County',
      region: 'Central Ontario',
      type: 'Industrial/Power',
      certifications: ['G2', 'Industrial'],
      hiring: 'Low',
      website: 'opg.com'
    },
    {
      name: 'Enercare',
      location: 'Toronto',
      region: 'GTA',
      type: 'Residential',
      certifications: ['G2', 'G3'],
      hiring: 'High',
      website: 'enercare.ca'
    },
    {
      name: 'Union Gas (Enbridge)',
      location: 'Chatham-Kent',
      region: 'Southwestern Ontario',
      type: 'Commercial/Industrial',
      certifications: ['G2'],
      hiring: 'Medium',
      website: 'uniongas.com'
    },
    {
      name: 'Lennox National',
      location: 'Ottawa',
      region: 'Eastern Ontario',
      type: 'Commercial/Residential',
      certifications: ['G2', 'G3'],
      hiring: 'Medium',
      website: 'lennox.ca'
    },
    {
      name: 'Provincial HVAC Services',
      location: 'London',
      region: 'Southwestern Ontario',
      type: 'Commercial',
      certifications: ['G2'],
      hiring: 'High',
      website: 'provincialhvac.com'
    }
  ];

  // Market insights by region
  const marketInsights = {
    'GTA': {
      demand: 'Very High',
      trends: ['High residential construction', 'Energy efficiency retrofits', 'Smart home integration'],
      avgSalary: '$65,000',
      topSkills: ['G2 certification', 'Smart thermostat installation', 'Heat pump systems']
    },
    'Ottawa': {
      demand: 'High',
      trends: ['Government building modernization', 'Green building initiatives', 'Federal contracts'],
      avgSalary: '$62,000',
      topSkills: ['G2 certification', 'Building automation', 'Energy auditing']
    },
    'London': {
      demand: 'Medium-High',
      trends: ['Industrial expansion', 'Healthcare facility upgrades', 'University contracts'],
      avgSalary: '$58,000',
      topSkills: ['G2 certification', 'Industrial systems', 'Medical gas systems']
    },
    'Hamilton': {
      demand: 'High',
      trends: ['Steel industry support', 'Port facility maintenance', 'Manufacturing growth'],
      avgSalary: '$60,000',
      topSkills: ['G2 certification', 'Industrial maintenance', 'Process heating']
    }
  };

  const filteredEmployers = searchLocation 
    ? employers.filter(emp => 
        emp.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
        emp.region.toLowerCase().includes(searchLocation.toLowerCase())
      )
    : employers;

  // Timeline calculator
  const calculatePath = (current: string, target: string, months: number) => {
    const currentLevel = Object.keys(certificationLevels).indexOf(current);
    const targetLevel = Object.keys(certificationLevels).indexOf(target);
    
    if (targetLevel <= currentLevel) return [];
    
    const steps = [];
    const levelKeys = Object.keys(certificationLevels);
    
    for (let i = currentLevel + 1; i <= targetLevel; i++) {
      const level = levelKeys[i];
      const timeNeeded = certificationLevels[level as keyof typeof certificationLevels].time;
      steps.push({
        certification: level,
        name: certificationLevels[level as keyof typeof certificationLevels].name,
        timeNeeded: timeNeeded,
        salary: certificationLevels[level as keyof typeof certificationLevels].salary
      });
    }
    
    return steps;
  };

  const pathSteps = calculatePath(selectedCertification, targetRole, timeline);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-claude-accent-orange mb-4">
          Career Path Calculator
        </h1>
        <p className="text-xl text-claude-text-secondary max-w-3xl mx-auto">
          Plan your HVAC career journey from student to professional. Discover certification paths, employers, and earnings potential.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-claude-border">
        {[
          { id: 'roadmap', name: 'Certification Roadmap', icon: '🗺️' },
          { id: 'timeline', name: 'Timeline Planner', icon: '⏰' },
          { id: 'employers', name: 'Employer Directory', icon: '🏢' },
          { id: 'salary', name: 'Salary Guide', icon: '💰' },
          { id: 'skills', name: 'Skills Analysis', icon: '📊' },
          { id: 'market', name: 'Job Market Insights', icon: '📈' },
          { id: 'interview', name: 'Interview Prep', icon: '🎯' },
          { id: 'portfolio', name: 'Portfolio Builder', icon: '📁' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={activeTab === tab.id ? {
              backgroundColor: '#FF8500',
              color: '#FFFFFF',
              borderBottom: '2px solid #FF8500'
            } : {}}
            className={`px-4 py-2 rounded-t-lg transition-colors ${
              activeTab === tab.id
                ? 'font-semibold'
                : 'bg-claude-bg-secondary text-claude-text-primary hover:bg-claude-bg-hover'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Certification Roadmap */}
      {activeTab === 'roadmap' && (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-claude-text-primary mb-6">🗺️ Certification Roadmap</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(certificationLevels).map(([key, cert], index) => (
              <div
                key={key}
                className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6 relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-claude-text-primary">{cert.name}</h3>
                  <span className="bg-claude-accent-blue text-white px-2 py-1 rounded text-sm">
                    {cert.time}mo
                  </span>
                </div>
                
                <p className="text-claude-accent-orange font-semibold mb-4">{cert.salary}</p>
                
                {/* Progress Arrow */}
                {index < Object.keys(certificationLevels).length - 1 && (
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-claude-accent-blue text-2xl">
                    →
                  </div>
                )}
                
                {/* Requirements based on certification level */}
                <div className="text-sm text-claude-text-secondary">
                  {key === 'g3' && (
                    <ul className="list-disc list-inside space-y-1">
                      <li>Complete G3 training course</li>
                      <li>Pass TSSA G3 exam</li>
                      <li>Apply for G3 license</li>
                    </ul>
                  )}
                  {key === 'g2' && (
                    <ul className="list-disc list-inside space-y-1">
                      <li>Hold G3 certification</li>
                      <li>Complete G2 training course</li>
                      <li>Pass TSSA G2 exam</li>
                      <li>2+ years field experience</li>
                    </ul>
                  )}
                  {key === 'g2_commercial' && (
                    <ul className="list-disc list-inside space-y-1">
                      <li>Hold G2 certification</li>
                      <li>Commercial installation experience</li>
                      <li>Building code knowledge</li>
                      <li>Project management skills</li>
                    </ul>
                  )}
                  {key === 'g2_industrial' && (
                    <ul className="list-disc list-inside space-y-1">
                      <li>Hold G2 certification</li>
                      <li>Industrial systems training</li>
                      <li>Safety certifications</li>
                      <li>Process control knowledge</li>
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Timeline Planner */}
      {activeTab === 'timeline' && (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-claude-text-primary mb-6">⏰ Career Timeline Planner</h2>
          
          <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-claude-text-primary mb-2">
                  Current Certification Level
                </label>
                <select
                  value={selectedCertification}
                  onChange={(e) => setSelectedCertification(e.target.value)}
                  className="w-full p-3 border border-claude-border rounded-lg bg-white text-claude-text-primary"
                >
                  {Object.entries(certificationLevels).map(([key, cert]) => (
                    <option key={key} value={key}>{cert.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-claude-text-primary mb-2">
                  Target Career Level
                </label>
                <select
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  className="w-full p-3 border border-claude-border rounded-lg bg-white text-claude-text-primary"
                >
                  <option value="">Select target...</option>
                  {Object.entries(certificationLevels).map(([key, cert]) => (
                    <option key={key} value={key}>{cert.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-claude-text-primary mb-2">
                  Desired Timeline (months)
                </label>
                <input
                  type="number"
                  value={timeline}
                  onChange={(e) => setTimeline(parseInt(e.target.value))}
                  className="w-full p-3 border border-claude-border rounded-lg bg-white text-claude-text-primary"
                  min="6"
                  max="60"
                />
              </div>
            </div>
            
            {pathSteps.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-claude-text-primary mb-4">Your Career Path:</h3>
                <div className="space-y-4">
                  {pathSteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg border">
                      <div className="bg-claude-accent-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-claude-text-primary">{step.name}</h4>
                        <p className="text-claude-text-primary opacity-75 text-sm">
                          Estimated time: {step.timeNeeded} months | Salary range: {step.salary}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Employer Directory */}
      {activeTab === 'employers' && (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-claude-text-primary mb-6">🏢 Ontario Employer Directory</h2>
          
          <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
            <div className="mb-6">
              <label className="block text-sm font-medium text-claude-text-primary mb-2">
                Search by Location or Region
              </label>
              <input
                type="text"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                placeholder="Enter city, region, or company name..."
                className="w-full p-3 border border-claude-border rounded-lg bg-white text-claude-text-primary"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {filteredEmployers.map((employer, index) => (
                <div key={index} className="bg-white border border-claude-border rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-claude-text-primary">{employer.name}</h3>
                      <p className="text-claude-text-primary opacity-75">{employer.location} • {employer.region}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      employer.hiring === 'High' ? 'bg-green-100 text-green-800' :
                      employer.hiring === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {employer.hiring} Demand
                    </span>
                  </div>
                  
                  <p className="text-claude-text-primary font-medium mb-2">Type: {employer.type}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {employer.certifications.map((cert, certIndex) => (
                      <span
                        key={certIndex}
                        className="bg-claude-accent-blue text-white px-2 py-1 rounded text-sm"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={`https://${employer.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-claude-accent-blue hover:underline"
                  >
                    Visit Website →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Salary Guide */}
      {activeTab === 'salary' && (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-claude-text-primary mb-6">💰 Salary & Earnings Guide</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-claude-text-primary mb-4">By Certification Level</h3>
              <div className="space-y-4">
                {Object.entries(certificationLevels).map(([key, cert]) => (
                  <div key={key} className="flex justify-between items-center p-3 bg-white rounded border">
                    <span className="font-medium text-claude-text-primary">{cert.name}</span>
                    <span className="text-claude-accent-orange font-bold">{cert.salary}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-claude-text-primary mb-4">By Work Type</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded border">
                  <span className="font-medium text-claude-text-primary">Residential Service</span>
                  <span className="text-claude-accent-orange font-bold">$45K - $65K</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded border">
                  <span className="font-medium text-claude-text-primary">Commercial Installation</span>
                  <span className="text-claude-accent-orange font-bold">$55K - $75K</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded border">
                  <span className="font-medium text-claude-text-primary">Industrial Maintenance</span>
                  <span className="text-claude-accent-orange font-bold">$65K - $85K</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded border">
                  <span className="font-medium text-claude-text-primary">Supervisory/Lead Tech</span>
                  <span className="text-claude-accent-orange font-bold">$70K - $95K</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded border">
                  <span className="font-medium text-claude-text-primary">Self-Employed/Contractor</span>
                  <span className="text-claude-accent-orange font-bold">$60K - $120K+</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-claude-text-primary mb-4">💡 Salary Factors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-claude-text-primary mb-2">Factors That Increase Pay:</h4>
                <ul className="list-disc list-inside space-y-1 text-claude-text-primary opacity-80">
                  <li>Additional certifications (G2 + refrigeration)</li>
                  <li>Specialized skills (boilers, chillers, controls)</li>
                  <li>Emergency/on-call availability</li>
                  <li>Union membership</li>
                  <li>Geographic location (GTA premium)</li>
                  <li>Company vehicle/tool allowance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-claude-text-primary mb-2">Career Progression Tips:</h4>
                <ul className="list-disc list-inside space-y-1 text-claude-text-primary opacity-80">
                  <li>Start with residential to build experience</li>
                  <li>Move to commercial for higher pay</li>
                  <li>Specialize in high-demand areas</li>
                  <li>Consider supervisory roles after 5+ years</li>
                  <li>Network with contractors and suppliers</li>
                  <li>Keep certifications current</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Gap Analysis */}
      {activeTab === 'skills' && (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-claude-text-primary mb-6">📊 Skills Gap Analysis</h2>
          
          <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-claude-text-primary mb-4">Select Your Current Skills:</h3>
            <p className="text-claude-text-secondary mb-6">Check off the skills you currently have to see what you need for different career paths.</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Foundation Skills */}
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-claude-text-primary mb-3">🔧 Foundation Skills</h4>
                <div className="space-y-2">
                  {[
                    'G3 Propane Certification',
                    'G2 Natural Gas Certification', 
                    'CSA B149.1 Code Knowledge',
                    'CSA B149.2 Code Knowledge',
                    'TSSA Regulations',
                    'Basic Electrical (ELEC-1015)',
                    'Piping & Tubing (MACH-1020)',
                    'Safety Procedures & PPE'
                  ].map((skill, index) => (
                    <label key={index} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-claude-text-secondary">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-claude-text-primary mb-3">⚙️ Technical Skills</h4>
                <div className="space-y-2">
                  {[
                    'Appliance Installation',
                    'System Commissioning',
                    'Leak Detection & Repair',
                    'Pressure Testing',
                    'Venting Systems',
                    'Control Systems',
                    'Troubleshooting',
                    'Preventive Maintenance'
                  ].map((skill, index) => (
                    <label key={index} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-claude-text-secondary">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Advanced Skills */}
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-claude-text-primary mb-3">🎓 Advanced Skills</h4>
                <div className="space-y-2">
                  {[
                    'Project Management',
                    'Team Leadership',
                    'Customer Service',
                    'Blueprint Reading',
                    'Energy Efficiency Analysis',
                    'Smart System Integration',
                    'Business Operations',
                    'Training & Mentoring'
                  ].map((skill, index) => (
                    <label key={index} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-claude-text-secondary">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">💡 Skills Development Recommendations:</h4>
              <p className="text-yellow-700 text-sm">
                Based on industry trends, focus on: Smart home integration, energy efficiency, heat pump technology, 
                and building automation systems. These skills are in high demand and command premium wages.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Job Market Insights */}
      {activeTab === 'market' && (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-claude-text-primary mb-6">📈 Job Market Insights</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(marketInsights).map(([region, data]) => (
              <div key={region} className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-claude-text-primary">{region}</h3>
                  <span className={`px-3 py-1 rounded font-medium text-sm ${
                    data.demand === 'Very High' ? 'bg-green-100 text-green-800' :
                    data.demand === 'High' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {data.demand} Demand
                  </span>
                </div>
                
                <p className="text-claude-accent-orange font-semibold text-lg mb-4">
                  Average Salary: {data.avgSalary}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-claude-text-primary mb-2">🔥 Market Trends:</h4>
                  <ul className="list-disc list-inside space-y-1 text-claude-text-secondary text-sm">
                    {data.trends.map((trend, index) => (
                      <li key={index}>{trend}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-claude-text-primary mb-2">🎯 Top Skills in Demand:</h4>
                  <div className="flex flex-wrap gap-2">
                    {data.topSkills.map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-claude-accent-blue text-white px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-claude-text-primary mb-4">🌟 Industry Outlook 2026-2030</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">+15%</div>
                <p className="font-semibold text-claude-text-primary">Job Growth Expected</p>
                <p className="text-sm text-claude-text-secondary">Above national average</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">12,000+</div>
                <p className="font-semibold text-claude-text-primary">New Positions</p>
                <p className="text-sm text-claude-text-secondary">Ontario by 2030</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">$75K</div>
                <p className="font-semibold text-claude-text-primary">Projected Avg. Salary</p>
                <p className="text-sm text-claude-text-secondary">With experience</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interview Prep */}
      {activeTab === 'interview' && (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-claude-text-primary mb-6">🎯 Interview Preparation</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-claude-text-primary mb-4">🔧 Technical Questions</h3>
              <div className="space-y-4">
                {[
                  {
                    q: "What's the maximum pressure for a G2 natural gas system?",
                    a: "2 kPa (0.3 psi) according to CSA B149.1"
                  },
                  {
                    q: "How do you perform a leak test on a gas line?",
                    a: "Use approved leak detection solution, pressurize to 1.5x operating pressure, check all joints and connections"
                  },
                  {
                    q: "What are the venting requirements for a Category I appliance?",
                    a: "Type B venting, vertical termination preferred, minimum 3 feet above highest point within 10 feet"
                  },
                  {
                    q: "Explain the gas train components in a commercial unit.",
                    a: "Manual shutoff, union, dirt leg, main gas valve, pilot valve (if applicable), pressure regulator"
                  }
                ].map((qa, index) => (
                  <details key={index} className="bg-white p-4 rounded border">
                    <summary className="font-medium text-claude-text-primary cursor-pointer mb-2">
                      {qa.q}
                    </summary>
                    <p className="text-claude-text-primary opacity-75 text-sm pl-4 border-l-2 border-claude-accent-blue">
                      {qa.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
            
            <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-claude-text-primary mb-4">💼 Behavioral Questions</h3>
              <div className="space-y-4">
                {[
                  {
                    q: "Tell me about a time you had to troubleshoot a difficult problem.",
                    tip: "Use STAR method: Situation, Task, Action, Result. Focus on systematic approach and safety."
                  },
                  {
                    q: "How do you handle working with difficult customers?",
                    tip: "Emphasize professionalism, clear communication, and focusing on solutions."
                  },
                  {
                    q: "Describe a time you had to learn something new quickly.",
                    tip: "Show adaptability and commitment to continuous learning in evolving technology."
                  },
                  {
                    q: "Why did you choose the gas technician field?",
                    tip: "Mention job security, helping people, working with your hands, and technical challenges."
                  }
                ].map((qa, index) => (
                  <div key={index} className="bg-white p-4 rounded border">
                    <h4 className="font-medium text-claude-text-primary mb-2">{qa.q}</h4>
                    <p className="text-claude-text-primary opacity-75 text-sm pl-4 border-l-2 border-claude-accent-orange">
                      💡 {qa.tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-claude-text-primary mb-4">📋 Interview Checklist</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-claude-text-primary mb-2">Documents to Bring:</h4>
                <ul className="list-disc list-inside space-y-1 text-claude-text-primary opacity-80 text-sm">
                  <li>G2/G3 certification cards</li>
                  <li>Updated resume</li>
                  <li>References (3 professional)</li>
                  <li>Portfolio of work photos</li>
                  <li>Clean driving record</li>
                  <li>Safety certifications</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-claude-text-primary mb-2">Questions to Ask Them:</h4>
                <ul className="list-disc list-inside space-y-1 text-claude-text-primary opacity-80 text-sm">
                  <li>"What does a typical day look like?"</li>
                  <li>"What training opportunities are available?"</li>
                  <li>"How do you handle emergency calls?"</li>
                  <li>"What's the company culture like?"</li>
                  <li>"What are the advancement opportunities?"</li>
                  <li>"What tools/vehicle are provided?"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Portfolio Builder */}
      {activeTab === 'portfolio' && (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-claude-text-primary mb-6">📁 Portfolio Builder</h2>
          
          <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-claude-text-primary mb-4">📸 Work Documentation Template</h3>
            <p className="text-claude-text-primary opacity-80 mb-6">
              Document your work to build a professional portfolio. Take before/after photos and keep detailed records.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-claude-text-primary mb-3">Installation Projects</h4>
                <div className="space-y-3">
                  {[
                    'Residential furnace installation',
                    'Water heater replacement', 
                    'Gas fireplace installation',
                    'Commercial unit installation',
                    'Piping system upgrade',
                    'Venting system installation'
                  ].map((project, index) => (
                    <div key={index} className="bg-white p-3 rounded border">
                      <div className="font-medium text-claude-text-primary mb-1">{project}</div>
                      <div className="text-xs text-claude-text-primary opacity-70 grid grid-cols-3 gap-2">
                        <span>📅 Date: _____</span>
                        <span>⏱️ Time: _____</span>
                        <span>💰 Value: $_____</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-claude-text-primary mb-3">Service & Maintenance</h4>
                <div className="space-y-3">
                  {[
                    'Annual furnace maintenance',
                    'Gas leak repair',
                    'Thermostat troubleshooting',
                    'Ignition system repair',
                    'Pressure testing',
                    'Safety inspection'
                  ].map((service, index) => (
                    <div key={index} className="bg-white p-3 rounded border">
                      <div className="font-medium text-claude-text-primary mb-1">{service}</div>
                      <div className="text-xs text-claude-text-primary opacity-70 grid grid-cols-3 gap-2">
                        <span>📅 Date: _____</span>
                        <span>⏱️ Time: _____</span>
                        <span>🔧 Issue: _____</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-claude-text-primary mb-4">🏆 Certifications & Training Log</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-claude-text-primary mb-3">Required Certifications</h4>
                <div className="space-y-2">
                  {[
                    'G3 Propane Technician',
                    'G2 Natural Gas Technician',
                    'First Aid/CPR',
                    'WHMIS Training'
                  ].map((cert, index) => (
                    <label key={index} className="flex items-center text-sm">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-claude-text-secondary">{cert}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-claude-text-primary mb-3">Additional Training</h4>
                <div className="space-y-2">
                  {[
                    'Boiler Technician',
                    'Refrigeration Basics',
                    'Heat Pump Installation',
                    'Smart Controls Training'
                  ].map((training, index) => (
                    <label key={index} className="flex items-center text-sm">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-claude-text-secondary">{training}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-claude-text-primary mb-3">Safety Certifications</h4>
                <div className="space-y-2">
                  {[
                    'Fall Protection',
                    'Confined Space',
                    'H2S Alive',
                    'Lockout/Tagout'
                  ].map((safety, index) => (
                    <label key={index} className="flex items-center text-sm">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-claude-text-secondary">{safety}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-claude-text-primary mb-4">📝 Professional References</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((ref) => (
                <div key={ref} className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-claude-text-primary mb-3">Reference {ref}</h4>
                  <div className="space-y-2 text-sm">
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full p-2 border rounded text-claude-text-primary"
                    />
                    <input 
                      type="text" 
                      placeholder="Company" 
                      className="w-full p-2 border rounded text-claude-text-primary"
                    />
                    <input 
                      type="text" 
                      placeholder="Position" 
                      className="w-full p-2 border rounded text-claude-text-primary"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone" 
                      className="w-full p-2 border rounded text-claude-text-primary"
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full p-2 border rounded text-claude-text-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Call to Action */}
      <div className="mt-16 text-center bg-claude-bg-secondary border border-claude-border rounded-lg p-8">
        <h3 className="text-2xl font-bold text-claude-text-primary mb-4">Ready to Advance Your Career?</h3>
        <p className="text-claude-text-secondary mb-6 max-w-2xl mx-auto">
          Use these tools to plan your path from student to professional gas technician. 
          Remember to keep your certifications current and continue learning new technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="/g2" 
            className="bg-claude-accent-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Practice G2 Exam
          </a>
          <a 
            href="/g3" 
            className="bg-claude-accent-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition"
          >
            Practice G3 Exam
          </a>
          <a 
            href="/csa" 
            className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition"
          >
            Study CSA Codes
          </a>
        </div>
      </div>
    </div>
  );
}