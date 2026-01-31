export default function TSSAResources() {
  const resources = {
    official: [
      { title: 'TSSA Official Website', url: 'https://www.tssa.org/', description: 'Technical Standards and Safety Authority main site' },
      { title: 'TSSA Fuels Dashboard', url: 'https://www.tssa.org/fuels-dashboard', description: 'Main hub for fuels safety, regulatory updates, CAD documents, bulletins, and FAQs' },
    ],
    safety: [
      { title: 'TSSA Incident Hotline', url: 'tel:1-877-682-8772', description: 'Report safety incidents: 1-877-682-8772 (Press 1)' },
    ],
    certification: [
      { title: 'Gas Technician Certification', url: 'https://www.tssa.org/fuels-industry-professional', description: 'Gas technician certification requirements and information' },
      { title: 'Accredited Training Programs', url: 'https://www.tssa.org/accredited-training', description: 'Find accredited training programs and requirements' },
    ],
  };

  const ResourceCard = ({ title, url, description }: { title: string; url: string; description: string }) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-brand-bg-secondary border border-brand-border rounded-lg p-6 hover:bg-brand-bg-hover transition group"
    >
      <h3 className="text-lg font-bold text-brand-text-primary mb-2 group-hover:text-brand-accent-orange transition flex items-center justify-between">
        {title}
        <svg className="w-5 h-5 text-brand-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </h3>
      <p className="text-brand-text-secondary text-sm">
        {description}
      </p>
    </a>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-accent-orange mb-4">
          TSSA Regulations & Resources
        </h1>
        <p className="text-xl text-brand-text-secondary mb-4">
          Technical Standards and Safety Authority regulations, bulletins, and certification information
        </p>
        <div className="inline-flex items-center space-x-2 bg-brand-accent-orange/10 text-brand-accent-orange px-4 py-2 rounded-lg text-sm">
          <span>Educational Resources by Mike Kapin</span>
        </div>
      </div>

      {/* Resource Sections */}
      <div className="space-y-12">
        {/* Official Sites */}
        <div>
          <h2 className="text-2xl font-bold text-brand-text-primary mb-6">🏢 Official Sites</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.official.map((resource) => (
              <ResourceCard key={resource.url} {...resource} />
            ))}
          </div>
        </div>

        {/* Safety & Compliance */}
        <div>
          <h2 className="text-2xl font-bold text-brand-text-primary mb-6">🛡️ Safety & Compliance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.safety.map((resource) => (
              <ResourceCard key={resource.url} {...resource} />
            ))}
          </div>
        </div>

        {/* Certification & Training */}
        <div>
          <h2 className="text-2xl font-bold text-brand-text-primary mb-6">🎓 Certification & Training</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.certification.map((resource) => (
              <ResourceCard key={resource.url} {...resource} />
            ))}
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 bg-brand-bg-secondary border border-brand-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-brand-text-primary mb-3">ℹ️ About TSSA</h3>
        <p className="text-brand-text-secondary text-sm leading-relaxed">
          The Technical Standards and Safety Authority (TSSA) is the regulatory body responsible for public safety 
          related to fuels, elevating devices, amusement devices, and upholstered and stuffed articles in Ontario. 
          For gas technicians, TSSA oversees certification requirements, safety standards, and regulatory compliance.
        </p>
      </div>
    </div>
  );
}