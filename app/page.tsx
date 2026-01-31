import Link from 'next/link';

export default function Home() {
  const resources = [
    {
      title: 'G2 Gas Technician',
      description: 'Study tools, practice exams, and resources for G2 Natural Gas certification',
      href: '/g2',
      icon: '🔥',
    },
    {
      title: 'G3 Gas Technician',
      description: 'Study tools, practice exams, and resources for G3 Propane certification',
      href: '/g3',
      icon: '⚡',
    },
    {
      title: 'CSA Standards',
      description: 'Official CSA codes, updates, communities, and training resources',
      href: '/csa',
      icon: '📖',
    },
    {
      title: 'TSSA Regulations',
      description: 'TSSA safety bulletins, director orders, certification, and compliance',
      href: '/tssa',
      icon: '🛡️',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-claude-accent-orange mb-4">
          HVAC Student Resources
        </h1>
        <p className="text-xl text-claude-text-secondary max-w-3xl mx-auto mb-8">
          Free educational resources for Gas Technician students. Access study tools, official codes, regulations, and certification information.
        </p>
        
        {/* Featured Career Calculator CTA */}
        <div className="bg-gradient-to-r from-claude-accent-orange to-claude-accent-blue rounded-lg p-8 max-w-4xl mx-auto mb-12">
          <div className="text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🎯 Find Your Perfect HVAC Career Path
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Take our free assessment and get a personalized roadmap with certification requirements, timeline, and salary expectations.
            </p>
            <Link 
              href="/career-calculator" 
              className="bg-white text-claude-accent-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center space-x-2"
            >
              <span>📊</span>
              <span>Start Career Assessment</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Resource Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {resources.map((resource) => (
          <Link
            key={resource.href}
            href={resource.href}
            className="bg-claude-bg-secondary border border-claude-border rounded-lg p-8 hover:bg-claude-bg-hover transition group"
          >
            <div className="text-4xl mb-4">{resource.icon}</div>
            <h2 className="text-2xl font-bold text-claude-text-primary mb-2 group-hover:text-claude-accent-orange transition">
              {resource.title}
            </h2>
            <p className="text-claude-text-secondary">
              {resource.description}
            </p>
            <div className="mt-4 text-claude-accent-blue group-hover:text-claude-accent-blue-hover transition flex items-center">
              Explore Resources
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Disclaimer Section */}
      <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-claude-text-primary mb-3">📢 Disclaimer</h3>
        <p className="text-claude-text-secondary text-sm leading-relaxed">
          These resources are provided for educational purposes only. Always verify information with official sources (CSA, TSSA) and your instructors. While we strive for accuracy, regulations and codes may change. This site is not affiliated with any educational institution or business entity.
        </p>
      </div>
    </div>
  );
}
