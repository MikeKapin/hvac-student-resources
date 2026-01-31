export default function CSAResources() {
  const resources = {
    official: [
      { title: 'CSA Group Official Site', url: 'https://www.csagroup.org/', description: 'Main CSA Group website and information portal' },
      { title: 'CSA Standards Store', url: 'https://www.csagroup.org/store/', description: 'Purchase official CSA standards and codes' },
    ],
    standards: [
      { title: 'CSA B149.1:25 - Natural Gas Code', url: 'https://www.csagroup.org/store/natural-gas-and-propane-installation-code/', description: 'Natural gas and propane installation code (2025 Edition)' },
      { title: 'CSA B149.2:25 - Propane Storage', url: 'https://www.csagroup.org/store/product/CSA_B149.2:25/', description: 'Propane storage and handling code (2025 Edition)' },
    ],
    updates: [
      { title: 'CSA Standards Updates', url: 'https://www.csagroup.org/standards/', description: 'Browse all CSA standards and latest updates' },
    ],
    community: [
      { title: 'CSA Communities', url: 'https://community.csagroup.org/', description: 'Discussion forums and community support for gas professionals' },
    ],
    training: [
      { title: 'CSA Testing & Certification', url: 'https://www.csagroup.org/testing-certification/', description: 'CSA testing, training, and certification programs' },
    ],
  };

  const ResourceCard = ({ title, url, description }: { title: string; url: string; description: string }) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6 hover:bg-claude-bg-hover transition group"
    >
      <h3 className="text-lg font-bold text-claude-text-primary mb-2 group-hover:text-claude-accent-orange transition flex items-center justify-between">
        {title}
        <svg className="w-5 h-5 text-claude-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </h3>
      <p className="text-claude-text-secondary text-sm">
        {description}
      </p>
    </a>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-claude-accent-orange mb-4">
        CSA Standards & Resources
      </h1>
      <p className="text-xl text-claude-text-secondary mb-12">
        Official CSA codes, standards, updates, and community resources
      </p>

      {/* NEW: CSA Quick Reference Tool */}
      <div className="bg-gradient-to-r from-claude-accent-orange to-claude-accent-blue rounded-lg p-8 mb-8 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">⚡ CSA B149.1-25 Quick Reference</h2>
          <p className="text-lg mb-6 opacity-90">
            Instant access to key code sections, searchable by topic. Perfect for field work and studying.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="font-semibold mb-1">📱 Mobile Friendly</div>
              <div className="text-sm opacity-90">Access anywhere</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="font-semibold mb-1">🔍 Smart Search</div>
              <div className="text-sm opacity-90">Find sections fast</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="font-semibold mb-1">📌 Bookmarks</div>
              <div className="text-sm opacity-90">Save favorites</div>
            </div>
          </div>
          <a 
            href="/csa-reference" 
            className="bg-white text-claude-accent-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center space-x-2"
          >
            <span>📚</span>
            <span>Launch Quick Reference</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* CSA B149.1-25 Field Tech Guide */}
      <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-claude-text-primary mb-4">📚 CSA B149.1-25 (8th Edition) Field Tech Guide</h2>
        <p className="text-claude-text-secondary mb-6">
          Comprehensive field technician guide to the 8th Edition of CSA B149.1-25 (February 2025). 
          Covers key changes, practical applications, and real-world scenarios with interactive checklists and code references.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-start space-x-3">
            <span className="text-claude-accent-orange text-xl">✓</span>
            <div>
              <p className="text-claude-text-primary font-semibold">8th Edition Key Changes</p>
              <p className="text-claude-text-secondary text-sm">Major updates affecting daily field work</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-claude-accent-orange text-xl">✓</span>
            <div>
              <p className="text-claude-text-primary font-semibold">Practical Applications</p>
              <p className="text-claude-text-secondary text-sm">Real-world scenarios and field examples</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-claude-accent-orange text-xl">✓</span>
            <div>
              <p className="text-claude-text-primary font-semibold">Interactive Checklists</p>
              <p className="text-claude-text-secondary text-sm">Save progress and track compliance</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-claude-accent-orange text-xl">✓</span>
            <div>
              <p className="text-claude-text-primary font-semibold">Code References</p>
              <p className="text-claude-text-secondary text-sm">Direct links to relevant sections</p>
            </div>
          </div>
        </div>
        <a
          href="/csa-b149-quick-guide.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-claude-accent-orange hover:bg-claude-accent-orange-hover text-white font-semibold rounded-lg transition"
        >
          Launch CSA B149.1-25 Field Guide
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

      {/* Official Sites */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-claude-text-primary mb-6">🏢 Official Sites</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.official.map((resource) => (
            <ResourceCard key={resource.url} {...resource} />
          ))}
        </div>
      </div>

      {/* Standards */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-claude-text-primary mb-6">📖 Standards</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.standards.map((resource) => (
            <ResourceCard key={resource.url} {...resource} />
          ))}
        </div>
      </div>

      {/* Code Updates */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-claude-text-primary mb-6">🔄 Updates & Bulletins</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.updates.map((resource) => (
            <ResourceCard key={resource.url} {...resource} />
          ))}
        </div>
      </div>

      {/* Community */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-claude-text-primary mb-6">👥 Community</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.community.map((resource) => (
            <ResourceCard key={resource.url} {...resource} />
          ))}
        </div>
      </div>

      {/* Training */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-claude-text-primary mb-6">🎓 Training & Certification</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.training.map((resource) => (
            <ResourceCard key={resource.url} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
}
