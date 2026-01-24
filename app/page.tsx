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
        <p className="text-xl text-claude-text-secondary max-w-3xl mx-auto">
          Free educational resources for Gas Technician students. Access study tools, official codes, regulations, and certification information.
        </p>
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
