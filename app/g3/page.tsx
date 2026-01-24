import Link from 'next/link';

export default function G3Resources() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-claude-accent-orange mb-4">
        G3 Gas Technician Resources
      </h1>
      <p className="text-xl text-claude-text-secondary mb-12">
        Propane installation, service, and certification resources
      </p>

      {/* Placeholder for Future Tools */}
      <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-claude-text-primary mb-4">🚀 Study Tools Coming Soon</h2>
        <p className="text-claude-text-secondary mb-4">
          Interactive study tools and practice exams are currently being developed. Check back soon for:
        </p>
        <ul className="list-disc list-inside text-claude-text-secondary space-y-2 mb-4">
          <li>G3 Practice Exam Simulator</li>
          <li>Code Reference Quick Lookup</li>
          <li>Flashcards & Study Guides</li>
          <li>Propane System Scenarios</li>
        </ul>
      </div>

      {/* Official Resources */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/csa"
          className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6 hover:bg-claude-bg-hover transition group"
        >
          <h3 className="text-xl font-bold text-claude-text-primary mb-2 group-hover:text-claude-accent-orange transition">
            📖 CSA B149.2 - Propane Storage Code
          </h3>
          <p className="text-claude-text-secondary">
            Access official CSA standards, code updates, and technical bulletins for propane installations
          </p>
          <div className="mt-4 text-claude-accent-blue group-hover:text-claude-accent-blue-hover transition flex items-center">
            View CSA Resources
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        <Link
          href="/tssa"
          className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6 hover:bg-claude-bg-hover transition group"
        >
          <h3 className="text-xl font-bold text-claude-text-primary mb-2 group-hover:text-claude-accent-orange transition">
            🛡️ TSSA G3 Certification
          </h3>
          <p className="text-claude-text-secondary">
            TSSA regulations, safety bulletins, certification requirements, and exam information
          </p>
          <div className="mt-4 text-claude-accent-blue group-hover:text-claude-accent-blue-hover transition flex items-center">
            View TSSA Resources
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
