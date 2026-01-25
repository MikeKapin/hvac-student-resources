import Link from 'next/link';

export default function G2Resources() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-claude-accent-orange mb-4">
        G2 Gas Technician Resources
      </h1>
      <p className="text-xl text-claude-text-secondary mb-12">
        Natural Gas installation, service, and certification resources
      </p>

      {/* Practice Exam Simulator */}
      <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-claude-text-primary mb-4">📝 TSSA G2 Practice Exam Simulator</h2>
        <p className="text-claude-text-secondary mb-6">
          Comprehensive practice exam simulator with over 700 TSSA sample questions covering all G2 Natural Gas certification topics.
          Free and fully accessible - no paywalls or restrictions.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-start space-x-3">
            <span className="text-claude-accent-orange text-xl">✓</span>
            <div>
              <p className="text-claude-text-primary font-semibold">700+ Practice Questions</p>
              <p className="text-claude-text-secondary text-sm">Full coverage of G2 exam topics</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-claude-accent-orange text-xl">✓</span>
            <div>
              <p className="text-claude-text-primary font-semibold">Instant Feedback</p>
              <p className="text-claude-text-secondary text-sm">Detailed explanations for each answer</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-claude-accent-orange text-xl">✓</span>
            <div>
              <p className="text-claude-text-primary font-semibold">Progress Tracking</p>
              <p className="text-claude-text-secondary text-sm">Monitor your performance over time</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-claude-accent-orange text-xl">✓</span>
            <div>
              <p className="text-claude-text-primary font-semibold">Mobile Friendly</p>
              <p className="text-claude-text-secondary text-sm">Study anywhere, anytime</p>
            </div>
          </div>
        </div>
        <a
          href="/g2-exam-simulator.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-claude-accent-orange hover:bg-claude-accent-orange-hover text-white font-semibold rounded-lg transition"
        >
          Launch G2 Practice Exam Simulator
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      {/* Gas Tech AI Tutor */}
      <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-claude-text-primary mb-4">🤖 Gas Tech AI Tutor</h2>
        <p className="text-claude-text-secondary mb-6">
          Interactive AI-powered tutor for G3 and G2 certification preparation. Chat with an expert AI assistant that understands Canadian gas codes,
          safety procedures, and exam requirements. Covers all 9 core modules with personalized learning.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-start space-x-3">
            <span className="text-claude-accent-orange text-xl">✓</span>
            <div>
              <p className="text-claude-text-primary font-semibold">AI-Powered Learning</p>
              <p className="text-claude-text-secondary text-sm">Get instant answers to your questions</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-claude-accent-orange text-xl">✓</span>
            <div>
              <p className="text-claude-text-primary font-semibold">9 Core Modules</p>
              <p className="text-claude-text-secondary text-sm">Safety, Tools, Gas Properties, Codes & more</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-claude-accent-orange text-xl">✓</span>
            <div>
              <p className="text-claude-text-primary font-semibold">Conversation Mode</p>
              <p className="text-claude-text-secondary text-sm">Natural chat interface for interactive learning</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-claude-accent-orange text-xl">✓</span>
            <div>
              <p className="text-claude-text-primary font-semibold">Completely Free</p>
              <p className="text-claude-text-secondary text-sm">No paywalls or subscriptions required</p>
            </div>
          </div>
        </div>
        <a
          href="https://gas-tech-tutor.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-claude-accent-orange hover:bg-claude-accent-orange-hover text-white font-semibold rounded-lg transition"
        >
          Launch Gas Tech AI Tutor
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      {/* Study Guide */}
      <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-claude-text-primary mb-4">📚 TSSA G2 Study Guide</h2>
        <p className="text-claude-text-secondary mb-6">
          Comprehensive study guide with detailed exam preparation strategies, study tips, and complete unit coverage for your G2 certification.
        </p>
        <a
          href="/g2-study-guide.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-claude-accent-orange hover:bg-claude-accent-orange-hover text-white font-semibold rounded-lg transition"
        >
          View G2 Study Guide
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      {/* CSA Code Search Tool */}
      <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-claude-text-primary mb-4">🔍 CSA Code Search Tool</h2>
        <p className="text-claude-text-secondary mb-6">
          Fast, powerful search tool for CSA B149.1-25 (Natural Gas), B149.2-25 (Propane), and regulatory requirements.
          Includes AI-powered explanations to help you understand complex code sections.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-start space-x-3">
            <span className="text-claude-accent-orange text-xl">✓</span>
            <div>
              <p className="text-claude-text-primary font-semibold">Search All CSA Codes</p>
              <p className="text-claude-text-secondary text-sm">B149.1-25, B149.2-25, and regulations</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-claude-accent-orange text-xl">✓</span>
            <div>
              <p className="text-claude-text-primary font-semibold">AI Explanations</p>
              <p className="text-claude-text-secondary text-sm">Get instant AI-powered code interpretations</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-claude-accent-orange text-xl">✓</span>
            <div>
              <p className="text-claude-text-primary font-semibold">Always Free</p>
              <p className="text-claude-text-secondary text-sm">No paywalls or access restrictions</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-claude-accent-orange text-xl">✓</span>
            <div>
              <p className="text-claude-text-primary font-semibold">Fast & Accurate</p>
              <p className="text-claude-text-secondary text-sm">Find what you need in seconds</p>
            </div>
          </div>
        </div>
        <a
          href="/csa-code-search/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-claude-accent-orange hover:bg-claude-accent-orange-hover text-white font-semibold rounded-lg transition"
        >
          Launch CSA Code Search
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      {/* Official Resources */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/csa"
          className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6 hover:bg-claude-bg-hover transition group"
        >
          <h3 className="text-xl font-bold text-claude-text-primary mb-2 group-hover:text-claude-accent-orange transition">
            📖 CSA B149.1 - Natural Gas Code
          </h3>
          <p className="text-claude-text-secondary">
            Access official CSA standards, code updates, and technical bulletins for natural gas installations
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
            🛡️ TSSA G2 Certification
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
