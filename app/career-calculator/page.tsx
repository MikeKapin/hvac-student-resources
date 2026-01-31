'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CareerPath {
  title: string;
  certifications: string[];
  timeline: string;
  averageSalary: string;
  description: string;
  nextSteps: string[];
}

export default function CareerCalculator() {
  const [formData, setFormData] = useState({
    experience: '',
    interests: [],
    location: '',
    timeCommitment: '',
    email: ''
  });
  
  const [showResults, setShowResults] = useState(false);
  const [recommendedPath, setRecommendedPath] = useState<CareerPath | null>(null);

  const careerPaths: Record<string, CareerPath> = {
    residential: {
      title: 'Residential Gas Technician',
      certifications: ['G2 Natural Gas'],
      timeline: '6-12 months',
      averageSalary: '$45,000 - $65,000',
      description: 'Install and service natural gas appliances in homes and small businesses.',
      nextSteps: [
        'Complete G2 certification course',
        'Find apprenticeship with local contractor',
        'Study CSA B149.1 Gas Code',
        'Practice with TSSA G2 exam simulator'
      ]
    },
    commercial: {
      title: 'Commercial Gas Technician',
      certifications: ['G2 Natural Gas', 'G3 Propane (recommended)'],
      timeline: '12-18 months',
      averageSalary: '$55,000 - $75,000',
      description: 'Work on larger commercial gas systems, boilers, and industrial equipment.',
      nextSteps: [
        'Complete G2 certification first',
        'Gain 2+ years experience in residential',
        'Add G3 propane certification',
        'Study commercial gas codes and regulations'
      ]
    },
    industrial: {
      title: 'Industrial Gas Specialist',
      certifications: ['G2 Natural Gas', 'G3 Propane', 'Additional Industrial Certs'],
      timeline: '18-24 months',
      averageSalary: '$65,000 - $90,000+',
      description: 'Design and maintain complex gas systems in industrial facilities.',
      nextSteps: [
        'Complete both G2 and G3 certifications',
        'Gain 3+ years commercial experience',
        'Pursue additional industrial training',
        'Network with industrial contractors'
      ]
    },
    inspector: {
      title: 'Gas System Inspector',
      certifications: ['G2 Natural Gas', 'G3 Propane', 'Inspector Training'],
      timeline: '2-3 years',
      averageSalary: '$60,000 - $80,000',
      description: 'Inspect gas installations for compliance with safety codes and regulations.',
      nextSteps: [
        'Complete G2 and G3 certifications',
        'Gain 5+ years field experience',
        'Apply for TSSA inspector training',
        'Master CSA codes and TSSA regulations'
      ]
    },
    entrepreneur: {
      title: 'Gas Contractor Business Owner',
      certifications: ['G2 Natural Gas', 'G3 Propane', 'Business License'],
      timeline: '3-5 years',
      averageSalary: '$75,000 - $150,000+',
      description: 'Run your own gas contracting business with multiple technicians.',
      nextSteps: [
        'Complete all gas certifications',
        'Gain 3+ years experience',
        'Obtain business license and insurance',
        'Build client base and hire technicians'
      ]
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Career path recommendation logic
    let recommendedKey = 'residential'; // default
    
    if (formData.experience === 'experienced' && formData.interests.includes('business')) {
      recommendedKey = 'entrepreneur';
    } else if (formData.experience === 'experienced' && formData.interests.includes('inspection')) {
      recommendedKey = 'inspector';
    } else if (formData.interests.includes('industrial')) {
      recommendedKey = 'industrial';
    } else if (formData.interests.includes('commercial')) {
      recommendedKey = 'commercial';
    }
    
    setRecommendedPath(careerPaths[recommendedKey]);
    setShowResults(true);
    
    // TODO: Send email to Mike's lead generation system
    console.log('New lead:', formData);
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  if (showResults && recommendedPath) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-600 mb-4">
            Your Recommended Career Path
          </h1>
          <p className="text-gray-600">
            Based on your responses and Mike's expertise in HVAC education, here's the best path forward for your career.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🎯 {recommendedPath.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Required Certifications</h3>
              <ul className="text-gray-600">
                {recommendedPath.certifications.map((cert, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-orange-600">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Timeline</h3>
              <p className="text-gray-600">{recommendedPath.timeline}</p>
              
              <h3 className="font-semibold text-gray-800 mb-2 mt-4">Expected Salary Range (Ontario)</h3>
              <p className="text-orange-600 font-semibold">{recommendedPath.averageSalary}</p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6">{recommendedPath.description}</p>
          
          <h3 className="font-semibold text-gray-800 mb-4">Mike's Recommended Next Steps</h3>
          <div className="space-y-3">
            {recommendedPath.nextSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-0.5">
                  {index + 1}
                </span>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Mike's Pro Tip:</span> Start with the G2 certification - 
              it's the foundation for all gas work in Canada. I've helped hundreds of students pass their 
              G2 exam using the materials on this site.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-blue-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your HVAC Journey?</h3>
          <p className="mb-6 opacity-90">
            Access Mike's proven study materials, practice exams, and career guidance used by 
            Fanshawe College students and technicians across Canada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/g2" 
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start G2 Practice Exams
            </Link>
            <Link 
              href="/csa-reference" 
              className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition"
            >
              Study CSA B149.1 Code
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <button 
            onClick={() => setShowResults(false)}
            className="text-blue-600 hover:text-blue-800 transition"
          >
            ← Take the Assessment Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">
          HVAC Career Path Calculator
        </h1>
        <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
          Find your ideal path in the Canadian HVAC industry. Get personalized certification recommendations, 
          timeline estimates, and salary projections based on your goals and experience.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Created by Mike Kapin</span> - HVAC Educator at Fanshawe College, 
            G2/G3 Certified, and author of Canadian Gas Technician educational resources.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Experience Level */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            What's your current experience level?
          </h2>
          <div className="space-y-3">
            {[
              { value: 'beginner', label: 'Complete beginner - new to HVAC' },
              { value: 'some', label: 'Some experience - familiar with basic concepts' },
              { value: 'experienced', label: 'Experienced - ready for advanced certifications' }
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="experience"
                  value={option.value}
                  checked={formData.experience === option.value}
                  onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                  className="text-orange-600"
                  required
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            What type of work interests you? (Select all that apply)
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { value: 'residential', label: 'Residential homes and small businesses' },
              { value: 'commercial', label: 'Commercial buildings and systems' },
              { value: 'industrial', label: 'Industrial facilities and complex systems' },
              { value: 'inspection', label: 'Safety inspections and code compliance' },
              { value: 'business', label: 'Running my own contracting business' },
              { value: 'teaching', label: 'Training and educating others' }
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  value={option.value}
                  checked={formData.interests.includes(option.value)}
                  onChange={() => handleInterestChange(option.value)}
                  className="text-orange-600"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Where are you located in Canada?
          </h2>
          <select
            value={formData.location}
            onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
            className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800"
            required
          >
            <option value="">Select your province...</option>
            <option value="ON">Ontario</option>
            <option value="QC">Quebec</option>
            <option value="BC">British Columbia</option>
            <option value="AB">Alberta</option>
            <option value="MB">Manitoba</option>
            <option value="SK">Saskatchewan</option>
            <option value="NS">Nova Scotia</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="PE">Prince Edward Island</option>
            <option value="YT">Yukon</option>
            <option value="NT">Northwest Territories</option>
            <option value="NU">Nunavut</option>
          </select>
        </div>

        {/* Time Commitment */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            How much time can you dedicate to training?
          </h2>
          <div className="space-y-3">
            {[
              { value: 'part-time', label: 'Part-time - evenings and weekends' },
              { value: 'full-time', label: 'Full-time - dedicated study period' },
              { value: 'flexible', label: 'Flexible - as needed around current job' }
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="timeCommitment"
                  value={option.value}
                  checked={formData.timeCommitment === option.value}
                  onChange={(e) => setFormData(prev => ({ ...prev, timeCommitment: e.target.value }))}
                  className="text-orange-600"
                  required
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Email for Results */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Get your personalized career plan from Mike
          </h2>
          <p className="text-gray-600 mb-4">
            Enter your email to receive your detailed career roadmap and exclusive study materials 
            used by Mike's students at Fanshawe College.
          </p>
          <input
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800"
            required
          />
          <p className="text-xs text-gray-500 mt-2">
            Mike will only send you helpful HVAC career content. No spam, unsubscribe anytime.
          </p>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            Get My Career Path Recommendation
          </button>
        </div>
      </form>

      {/* Trust Indicators */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-4">Trusted by HVAC students and professionals across Canada</p>
        <div className="flex justify-center items-center space-x-8 text-gray-600">
          <span className="flex items-center space-x-2">
            <span className="text-orange-600">✓</span>
            <span>CSA B149.1-25 Compliant</span>
          </span>
          <span className="flex items-center space-x-2">
            <span className="text-orange-600">✓</span>
            <span>TSSA G2/G3 Aligned</span>
          </span>
          <span className="flex items-center space-x-2">
            <span className="text-orange-600">✓</span>
            <span>Fanshawe College Approved</span>
          </span>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            Created by Mike Kapin - HVAC Educator, G2/G3 Certified Professional
          </p>
        </div>
      </div>
    </div>
  );
}