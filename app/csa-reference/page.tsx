'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CodeSection {
  id: string;
  section: string;
  title: string;
  summary: string;
  details: string[];
  tags: string[];
  category: string;
}

export default function CSAReference() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookmarkedSections, setBookmarkedSections] = useState<string[]>([]);
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [accessLevel, setAccessLevel] = useState('basic');
  const [email, setEmail] = useState('');

  // Sample CSA B149.1-25 sections (real content would need legal verification)
  const codeSections: CodeSection[] = [
    {
      id: 'scope',
      section: '1.0',
      title: 'Scope of Application',
      summary: 'Defines the scope and application of CSA B149.1 Gas Code',
      details: [
        'Applies to gas installations in buildings',
        'Covers piping, appliances, and venting systems',
        'Sets safety requirements for natural gas systems'
      ],
      tags: ['scope', 'application', 'safety'],
      category: 'general'
    },
    {
      id: 'definitions',
      section: '1.4',
      title: 'Definitions',
      summary: 'Key terms and definitions used throughout the code',
      details: [
        'Appliance: A device that uses gas as fuel',
        'Gas fitting: A person qualified to install gas piping',
        'Vent connector: Connects appliance to vent system'
      ],
      tags: ['definitions', 'terminology'],
      category: 'general'
    },
    {
      id: 'pipe-sizing',
      section: '6.0',
      title: 'Pipe Sizing and Installation',
      summary: 'Requirements for gas pipe sizing and installation methods',
      details: [
        'Pipe size based on gas demand and length',
        'Minimum pipe size requirements',
        'Installation depth and protection requirements'
      ],
      tags: ['piping', 'sizing', 'installation'],
      category: 'piping'
    },
    {
      id: 'appliance-install',
      section: '7.0',
      title: 'Appliance Installation',
      summary: 'General requirements for gas appliance installation',
      details: [
        'Clearance requirements from combustible materials',
        'Ventilation requirements for appliance rooms',
        'Access requirements for service and maintenance'
      ],
      tags: ['appliances', 'installation', 'clearances'],
      category: 'appliances'
    },
    {
      id: 'venting',
      section: '8.0',
      title: 'Venting of Appliances',
      summary: 'Requirements for proper venting of gas appliances',
      details: [
        'Natural draft vs. mechanical draft requirements',
        'Vent connector specifications',
        'Clearance to combustible materials'
      ],
      tags: ['venting', 'chimneys', 'draft'],
      category: 'venting'
    },
    {
      id: 'testing',
      section: '9.0',
      title: 'Testing and Commissioning',
      summary: 'Required testing procedures for gas installations',
      details: [
        'Pressure testing requirements',
        'Leak testing procedures',
        'Documentation and certification requirements'
      ],
      tags: ['testing', 'commissioning', 'certification'],
      category: 'testing'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Sections' },
    { value: 'general', label: 'General Requirements' },
    { value: 'piping', label: 'Piping Systems' },
    { value: 'appliances', label: 'Appliances' },
    { value: 'venting', label: 'Venting Systems' },
    { value: 'testing', label: 'Testing & Commissioning' }
  ];

  const filteredSections = codeSections.filter(section => {
    const matchesSearch = section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         section.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         section.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || section.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleBookmark = (sectionId: string) => {
    if (bookmarkedSections.length >= 3 && accessLevel === 'basic') {
      setShowEmailGate(true);
      return;
    }
    
    setBookmarkedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send email to Mike's lead system
    console.log('Premium access requested:', email);
    setAccessLevel('premium');
    setShowEmailGate(false);
  };

  useEffect(() => {
    // Load bookmarks from localStorage
    const saved = localStorage.getItem('csa-bookmarks');
    if (saved) {
      setBookmarkedSections(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    // Save bookmarks to localStorage
    localStorage.setItem('csa-bookmarks', JSON.stringify(bookmarkedSections));
  }, [bookmarkedSections]);

  if (showEmailGate) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <div className="text-6xl mb-4">🔓</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Access Mike's Premium Study Tools
          </h2>
          <p className="text-gray-600 mb-6">
            Get unlimited bookmarks, offline access, and exclusive HVAC study materials 
            used by Mike's students at Fanshawe College.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800"
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              Get Premium Access Free
            </button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            Free forever. Mike will only send you helpful HVAC career content.
          </p>
          
          <button 
            onClick={() => setShowEmailGate(false)}
            className="mt-4 text-blue-600 hover:text-blue-800 transition"
          >
            ← Back to Reference
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">
          CSA B149.1-25 Quick Reference
        </h1>
        <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
          Fast access to key sections of the Canadian Gas Code. Perfect for students, technicians, and installers.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto mb-4">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Created by Mike Kapin</span> - Gas Technician educator at Fanshawe College. 
            G2/G3 certified professional with years of CSA code expertise.
          </p>
        </div>
        {accessLevel === 'premium' && (
          <div className="inline-flex items-center space-x-2 mt-4 bg-orange-100 text-orange-700 px-4 py-2 rounded-lg">
            <span>⭐</span>
            <span className="font-semibold">Premium Access Activated</span>
          </div>
        )}
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Search Sections
            </label>
            <input
              type="text"
              placeholder="Search by title, content, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {bookmarkedSections.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-300">
            <p className="text-sm text-gray-800 mb-2">
              📌 Bookmarked: {bookmarkedSections.length} section(s)
            </p>
            <div className="flex flex-wrap gap-2">
              {bookmarkedSections.map(id => {
                const section = codeSections.find(s => s.id === id);
                return section ? (
                  <span key={id} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                    {section.section}
                  </span>
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>

      {/* Code Sections */}
      <div className="space-y-6">
        {filteredSections.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-gray-600">No sections found matching your search.</p>
          </div>
        ) : (
          filteredSections.map((section) => (
            <div key={section.id} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Section {section.section}
                    </span>
                    <h2 className="text-xl font-bold text-gray-800">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {section.summary}
                  </p>
                </div>
                
                <button
                  onClick={() => toggleBookmark(section.id)}
                  className={`ml-4 p-2 rounded-lg transition ${
                    bookmarkedSections.includes(section.id)
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-200 text-gray-500 hover:text-gray-700'
                  }`}
                  title={bookmarkedSections.includes(section.id) ? 'Remove bookmark' : 'Add bookmark'}
                >
                  📌
                </button>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800">Key Requirements:</h3>
                <ul className="space-y-2">
                  {section.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-orange-600 text-sm mt-1">✓</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {section.tags.map(tag => (
                      <span 
                        key={tag}
                        className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <span className="text-sm text-gray-500">
                    Category: {categories.find(c => c.value === section.category)?.label}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-orange-600 to-blue-600 rounded-lg p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Master the CSA Gas Code with Mike's Materials</h3>
        <p className="mb-6 opacity-90">
          Access comprehensive practice exams and study guides used by Mike's students 
          at Fanshawe College to pass their G2/G3 certifications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/g2" 
            className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            G2 Practice Exams
          </Link>
          <Link 
            href="/career-calculator" 
            className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition"
          >
            📊 HVAC Career Assessment
          </Link>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">⚠️ Important Disclaimer</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          This quick reference is for educational purposes only. Always consult the official CSA B149.1-25 Gas Code 
          for complete and current requirements. Code sections may be updated or revised. This content is not a 
          substitute for proper training and certification.
        </p>
        <div className="pt-4 border-t border-gray-300">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">About the Creator:</span> Mike Kapin is a certified Gas Technician (G2/G3) 
            and HVAC educator at Fanshawe College. He has trained hundreds of students in CSA code compliance 
            and gas system safety across Ontario.
          </p>
        </div>
      </div>
    </div>
  );
}