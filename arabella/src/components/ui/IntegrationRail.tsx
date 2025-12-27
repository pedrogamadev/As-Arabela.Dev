import { useMemo, useState } from 'react';

const integrations = [
  { name: 'WhatsApp', src: '/imagens/icons/whatsapp.png', href: '#' },
  { name: 'Google Maps', src: '/imagens/icons/maps.png', href: '#' },
  { name: 'YouTube', src: '/imagens/icons/youtube.png', href: '#' },
  { name: 'Hotmart', src: '/imagens/icons/hotmart.png', href: '#' },
  { name: 'Email', src: '/imagens/icons/email.png', href: '#' },
  { name: 'Instagram', src: '/imagens/icons/instagram.png', href: '#' },
] as const;

const IntegrationRail = () => {
  const [failedIcons, setFailedIcons] = useState<Set<string>>(() => new Set());

  const groups = useMemo(() => [0, 1], []);

  const handleIconError = (name: string) => {
    setFailedIcons(prev => {
      if (prev.has(name)) {
        return prev;
      }
      const next = new Set(prev);
      next.add(name);
      return next;
    });
  };

  return (
    <div className="integration-rail" aria-label="Integrações">
      <span className="integration-rail__line" aria-hidden="true" />
      <div className="integration-rail__window">
        <div className="integration-rail__track">
          {groups.map(groupIndex => (
            <div
              key={groupIndex}
              className="integration-rail__group"
              aria-hidden={groupIndex === 1}
            >
              {integrations.map(integration => {
                const showFallback = failedIcons.has(integration.name) || !integration.src;

                return (
                  <a
                    key={`${groupIndex}-${integration.name}`}
                    href={integration.href}
                    className="integration-rail__pill"
                    aria-label={integration.name}
                  >
                    {showFallback ? (
                      <span className="integration-rail__fallback" aria-hidden="true">
                        {integration.name.slice(0, 1)}
                      </span>
                    ) : (
                      <img
                        src={integration.src}
                        alt={integration.name}
                        loading="lazy"
                        onError={() => handleIconError(integration.name)}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationRail;
