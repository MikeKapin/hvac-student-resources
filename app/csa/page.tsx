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
      { title: 'CSA Research & Resources', url: 'https://www.csagroup.org/article/research-resources/', description: 'Technical research, bulletins, and resources' },
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
