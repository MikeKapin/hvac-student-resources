export default function TSSAResources() {
  const resources = [
    {
      title: 'TSSA Official Website',
      url: 'www.tssa.org',
      description: 'Technical Standards and Safety Authority main site',
      icon: '🏢'
    },
    {
      title: 'TSSA Fuels Dashboard',
      url: 'www.tssa.org/fuels-dashboard',
      description: 'Main hub for fuels safety, regulatory updates, CAD documents, bulletins, and FAQs',
      icon: '📊'
    },
    {
      title: 'Gas Technician Certification',
      url: 'www.tssa.org/fuels-industry-professional',
      description: 'Gas technician certification requirements and information',
      icon: '🎓'
    },
    {
      title: 'Accredited Training Programs',
      url: 'www.tssa.org/accredited-training',
      description: 'Find accredited training programs and requirements',
      icon: '📚'
    },
    {
      title: 'TSSA Incident Hotline',
      url: '1-877-682-8772',
      description: 'Report safety incidents (Press 1 for incident hotline)',
      icon: '🛡️',
      isPhone: true
    },
  ];

  const InfoCard = ({ title, url, description, icon, isPhone }: {
    title: string;
    url: string;
    description: string;
    icon: string;
    isPhone?: boolean;
  }) => (
    <div className="bg-claude-bg-secondary border border-claude-border rounded-lg p-6">
      <div className="flex items-start space-x-4">
        <div className="text-4xl">{icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-claude-text-primary mb-2">
            {title}
          </h3>
          <p className="text-claude-text-secondary text-sm mb-3">
            {description}
          </p>
          {isPhone ? (
            <a
              href={`tel:${url}`}
              className="inline-flex items-center text-mike-orange hover:text-mike-orange/80 font-mono text-sm"
            >
              📞 {url}
            </a>
          ) : (
            <div className="bg-claude-dark-bg border border-claude-dark-border rounded px-3 py-2">
              <p className="text-claude-text-secondary font-mono text-xs">
                {url}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-claude-accent-orange mb-4">
        TSSA Regulations & Resources
      </h1>
      <p className="text-xl text-claude-text-secondary mb-6">
        Technical Standards and Safety Authority regulations, bulletins, and certification information
      </p>

      {/* Notice about TSSA website */}
      <div className="bg-claude-bg-secondary border-l-4 border-mike-orange rounded-lg p-6 mb-12">
        <div className="flex items-start space-x-3">
          <span className="text-2xl">ℹ️</span>
          <div>
            <h3 className="text-lg font-semibold text-claude-text-primary mb-2">About TSSA Website Access</h3>
            <p className="text-claude-text-secondary text-sm leading-relaxed">
              The TSSA website has security protections that may block automated access.
              To visit TSSA resources, manually type or copy the URLs shown below into your browser's address bar.
            </p>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource) => (
          <InfoCard key={resource.url} {...resource} />
        ))}
      </div>
    </div>
  );
}
