export default function TSSAResources() {
  const resources = {
    official: [
      { title: 'TSSA Official Website', url: 'https://www.tssa.org/', description: 'Technical Standards and Safety Authority main site' },
      { title: 'TSSA Fuels Dashboard', url: 'https://www.tssa.org/fuels-dashboard', description: 'Main hub for fuels safety program information and resources' },
    ],
    regulations: [
      { title: 'TSSA Regulatory Updates', url: 'https://www.tssa.org/taxonomy/term/31', description: 'Safety bulletins, advisory notices, and regulatory updates' },
      { title: 'TSSA Code Adoption Documents', url: 'https://www.tssa.org/cad-amendment-gaseous-fuels-code', description: 'Code adoption and implementation documents (CAD)' },
    ],
    safety: [
      { title: 'TSSA Incident Hotline', url: 'tel:1-877-682-8772', description: 'Report safety incidents: 1-877-682-8772 (Press 1)' },
      { title: 'Incident Reporting Criteria', url: 'https://www.tssa.org/sites/default/files/2024-04/FS-Incident-Report-Criteria-for-Hydrocarbon-Fuels-Industry-Advisory-Apr-29-2024.pdf', description: 'Incident reporting criteria for fuels industry' },
    ],
    certification: [
      { title: 'Gas Technician Certification', url: 'https://www.tssa.org/fuels-industry-professional', description: 'Gas technician certification requirements and information' },
      { title: 'Exam Registration', url: 'https://www.tssa.org/register-exam', description: 'Register for gas technician certification exams' },
      { title: 'Accredited Training Programs', url: 'https://www.tssa.org/accredited-training', description: 'Find accredited training programs and requirements' },
    ],
    resources: [
      { title: 'Fuels FAQs', url: 'https://www.tssa.org/fuels-faqs', description: 'Frequently asked questions about fuels safety' },
      { title: 'Storage Tanks FAQs', url: 'https://www.tssa.org/faqs-storage-tanks', description: 'Storage tank requirements and questions' },
      { title: 'TSSA Contact Information', url: 'https://www.tssa.org/contact-us', description: 'Contact TSSA for support and inquiries' },
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
