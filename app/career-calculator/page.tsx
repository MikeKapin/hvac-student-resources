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
          <h1 className="text-3xl font-bold text-claude-accent-orange mb-4">
            Your Recommended Career Path
          </h1>
          <p className="text-claude-text-secondary">
            Based on your responses, here's the best path forward for your HVAC career.
          </p>
        </div>

        <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-claude-text-primary mb-4">
            🎯 {recommendedPath.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-claude-text-primary mb-2">Required Certifications</h3>
              <ul className="text-claude-text-secondary">
                {recommendedPath.certifications.map((cert, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-claude-accent-orange">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-claude-text-primary mb-2">Timeline</h3>
              <p className="text-claude-text-secondary">{recommendedPath.timeline}</p>
              
              <h3 className="font-semibold text-claude-text-primary mb-2 mt-4">Expected Salary Range</h3>
              <p className="text-claude-accent-orange font-semibold">{recommendedPath.averageSalary}</p>
            </div>
          </div>
          
          <p className="text-claude-text-secondary mb-6">{recommendedPath.description}</p>
          
          <h3 className="font-semibold text-claude-text-primary mb-4">Your Next Steps</h3>
          <div className="space-y-3">
            {recommendedPath.nextSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="bg-claude-accent-orange text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-0.5">
                  {index + 1}
                </span>
                <p className="text-claude-text-secondary">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-claude-accent-orange to-claude-accent-blue rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="mb-6 opacity-90">
            Get access to our comprehensive study materials, practice exams, and career guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/g2" 
              className="bg-white text-claude-accent-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start G2 Practice Exams
            </Link>
            <Link 
              href="/csa" 
              className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition"
            >
              Study CSA Codes
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <button 
            onClick={() => setShowResults(false)}
            className="text-claude-accent-blue hover:text-claude-accent-blue-hover transition"
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
        <h1 className="text-4xl font-bold text-claude-accent-orange mb-4">
          HVAC Career Path Calculator
        </h1>
        <p className="text-xl text-claude-text-secondary max-w-3xl mx-auto">
          Find your ideal path in the HVAC industry. Get personalized certification recommendations, 
          timeline estimates, and salary projections based on your goals and experience.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Experience Level */}
        <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
          <h2 className="text-xl font-semibold text-claude-text-primary mb-4">
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
                  className="text-claude-accent-orange"
                  required
                />
                <span className="text-claude-text-primary">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
          <h2 className="text-xl font-semibold text-claude-text-primary mb-4">
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
                  className="text-claude-accent-orange"
                />
                <span className="text-claude-text-primary">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
          <h2 className="text-xl font-semibold text-claude-text-primary mb-4">
            Where are you located?
          </h2>
          <select
            value={formData.location}
            onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
            className="w-full md:w-1/2 px-3 py-2 border border-claude-border rounded-lg bg-claude-bg-primary text-claude-text-primary"
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
        <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
          <h2 className="text-xl font-semibold text-claude-text-primary mb-4">
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
                  className="text-claude-accent-orange"
                  required
                />
                <span className="text-claude-text-primary">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Email for Results */}
        <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
          <h2 className="text-xl font-semibold text-claude-text-primary mb-4">
            Get your personalized career plan
          </h2>
          <p className="text-claude-text-secondary mb-4">
            Enter your email to receive your detailed career roadmap and exclusive HVAC resources.
          </p>
          <input
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full md:w-1/2 px-3 py-2 border border-claude-border rounded-lg bg-claude-bg-primary text-claude-text-primary"
            required
          />
          <p className="text-xs text-claude-text-secondary mt-2">
            We'll only send you helpful HVAC career content. No spam, unsubscribe anytime.
          </p>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-claude-accent-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Get My Career Path Recommendation
          </button>
        </div>
      </form>

      {/* Trust Indicators */}
      <div className="mt-16 text-center">
        <p className="text-claude-text-secondary mb-4">Trusted by HVAC students across Canada</p>
        <div className="flex justify-center items-center space-x-8 text-claude-text-secondary">
          <span className="flex items-center space-x-2">
            <span className="text-claude-accent-orange">✓</span>
            <span>CSA Compliant Content</span>
          </span>
          <span className="flex items-center space-x-2">
            <span className="text-claude-accent-orange">✓</span>
            <span>TSSA Approved Methods</span>
          </span>
          <span className="flex items-center space-x-2">
            <span className="text-claude-accent-orange">✓</span>
            <span>Industry Expert Created</span>
          </span>
        </div>
      </div>
    </div>
  );
}