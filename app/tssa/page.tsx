export default function TSSAResources() {
  const resources = {
    official: [
      { title: 'TSSA Official Website', url: 'https://www.tssa.org/', description: 'Technical Standards and Safety Authority main site' },
      { title: 'TSSA Fuels Safety Program', url: 'https://www.tssa.org/en/fuels/index.aspx', description: 'Fuels safety program information and resources' },
    ],
    regulations: [
      { title: "TSSA Director's Orders", url: 'https://www.tssa.org/en/fuels/resources/directors-orders.aspx', description: 'Official director orders and compliance requirements' },
      { title: 'TSSA Code Adoption Documents', url: 'https://www.tssa.org/en/fuels/resources/code-adoption-documents.aspx', description: 'Code adoption and implementation documents' },
    ],
    safety: [
      { title: 'TSSA Safety Bulletins', url: 'https://www.tssa.org/en/fuels/resources/safety-bulletins.aspx', description: 'Important safety bulletins and notices' },
      { title: 'TSSA Advisory Notices', url: 'https://www.tssa.org/en/fuels/resources/advisory-notices.aspx', description: 'Advisory notices and alerts' },
      { title: 'TSSA Incident Reporting', url: 'https://www.tssa.org/en/fuels/report-an-incident.aspx', description: 'How to report safety incidents' },
    ],
    certification: [
      { title: 'Gas Technician Certification', url: 'https://www.tssa.org/en/fuels/gas-technicians/index.aspx', description: 'Gas technician certification requirements and process' },
      { title: 'TSSA Training Requirements', url: 'https://www.tssa.org/en/fuels/gas-technicians/training-requirements.aspx', description: 'Training and continuing education requirements' },
    ],
    resources: [
      { title: 'TSSA Forms & Applications', url: 'https://www.tssa.org/en/fuels/Forms-and-Publications/index.aspx', description: 'Download forms and applications' },
      { title: 'TSSA FAQs', url: 'https://www.tssa.org/en/fuels/faqs.aspx', description: 'Frequently asked questions' },
      { title: 'TSSA Contact Information', url: 'https://www.tssa.org/en/about-tssa/contact-us.aspx', description: 'Contact TSSA for support' },
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
        TSSA Regulations & Resources
      </h1>
      <p className="text-xl text-claude-text-secondary mb-12">
        Technical Standards and Safety Authority regulations, bulletins, and certification information
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

      {/* Regulations */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-claude-text-primary mb-6">📋 Regulations & Orders</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.regulations.map((resource) => (
            <ResourceCard key={resource.url} {...resource} />
          ))}
        </div>
      </div>

      {/* Safety */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-claude-text-primary mb-6">🛡️ Safety & Compliance</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.safety.map((resource) => (
            <ResourceCard key={resource.url} {...resource} />
          ))}
        </div>
      </div>

      {/* Certification */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-claude-text-primary mb-6">🎓 Certification & Training</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.certification.map((resource) => (
            <ResourceCard key={resource.url} {...resource} />
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-claude-text-primary mb-6">📁 Forms & Support</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.resources.map((resource) => (
            <ResourceCard key={resource.url} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
}
