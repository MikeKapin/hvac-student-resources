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
      title: 'Career Path Calculator',
      description: 'Plan your HVAC career journey: certifications, salaries, employers, and job market insights',
      href: '/career',
      icon: '🚀',
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
        <h1 className="text-4xl md:text-5xl font-bold text-brand-accent-orange mb-4">
          HVAC Student Resources
        </h1>
        <p className="text-xl text-brand-text-secondary max-w-3xl mx-auto mb-6">
          Professional educational resources for Gas Technician students. Access study tools, official codes, regulations, and certification information.
        </p>
        <div className="inline-flex items-center space-x-2 bg-brand-accent-orange/10 text-brand-accent-orange px-4 py-2 rounded-lg">
          <span className="font-semibold">Created by Mike Kapin</span>
          <span className="text-sm">| HVAC Educator</span>
        </div>
      </div>

      {/* Resource Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {resources.map((resource) => (
          <Link
            key={resource.href}
            href={resource.href}
            className="bg-brand-bg-secondary border border-brand-border rounded-lg p-8 hover:bg-brand-bg-hover transition group"
          >
            <div className="text-4xl mb-4">{resource.icon}</div>
            <h2 className="text-2xl font-bold text-brand-text-primary mb-2 group-hover:text-brand-accent-orange transition">
              {resource.title}
            </h2>
            <p className="text-brand-text-secondary">
              {resource.description}
            </p>
            <div className="mt-4 text-brand-accent-blue group-hover:text-brand-accent-blue-hover transition flex items-center">
              Explore Resources
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* About Section */}
      <div className="bg-brand-bg-secondary border border-brand-border rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-brand-text-primary mb-3">🎓 About These Resources</h3>
        <p className="text-brand-text-secondary text-sm leading-relaxed">
          These educational resources were developed by <strong>Mike Kapin</strong>, an HVAC educator dedicated to supporting Gas Technician students across Canada. All content is designed to supplement your formal education and help you succeed in your certification journey.
        </p>
      </div>

      {/* Disclaimer Section */}
      <div className="bg-brand-bg-secondary border border-brand-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-brand-text-primary mb-3">📢 Important Notice</h3>
        <p className="text-brand-text-secondary text-sm leading-relaxed">
          These resources are provided for educational purposes only. Always verify information with official sources (CSA, TSSA) and your instructors. While we strive for accuracy, regulations and codes may change. These materials supplement but do not replace proper training and certification programs.
        </p>
      </div>
    </div>
  );
}
