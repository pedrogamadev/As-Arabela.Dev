import { useEffect, useState } from 'react';
import type { ServiceItem } from '../content/services';

interface ServicesProps {
  id: string;
  services: ServiceItem[];
}

const Services = ({ id, services }: ServicesProps) => (
  <section id={id} className="services" aria-labelledby="services-title">
    <div className="container">
      <div className="section-heading">
        <h2 id="services-title">Serviços sob medida para acelerar seu crescimento</h2>
        <p>
          Projetamos cada pacote para equilibrar velocidade, autonomia e governança. Nada de
          templates genéricos.
        </p>
      </div>
      <div className="services__grid">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  </section>
);

const ServiceCard = ({ service }: { service: ServiceItem }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty('overflow');
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.body.style.setProperty('overflow', 'hidden');
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.removeProperty('overflow');
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const Icon = () => {
    switch (service.icon) {
      case 'landing':
        return (
          <svg viewBox="0 0 48 48" aria-hidden>
            <rect x="4" y="8" width="40" height="28" rx="6" />
            <rect x="10" y="14" width="28" height="4" rx="2" />
            <rect x="10" y="22" width="16" height="4" rx="2" />
            <rect x="10" y="30" width="20" height="4" rx="2" />
          </svg>
        );
      case 'ecommerce':
        return (
          <svg viewBox="0 0 48 48" aria-hidden>
            <path d="M10 10h28l-2.5 18H12.5L10 10Z" />
            <circle cx="19" cy="36" r="3" />
            <circle cx="29" cy="36" r="3" />
          </svg>
        );
      case 'ongoing':
      default:
        return (
          <svg viewBox="0 0 48 48" aria-hidden>
            <path d="M24 8a16 16 0 1 0 11.32 27.32l-4.24-4.24" />
            <path d="M24 8v10l7 3" />
          </svg>
        );
    }
  };

  return (
    <article className="service-card">
      <div className="service-card__icon">
        <Icon />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul>
        {service.bullets.map(point => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <button
        type="button"
        className="service-card__modal"
        onClick={() => setOpen(true)}
      >
        O que está incluso?
      </button>
      {open && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={`Inclusões de ${service.title}`}>
          <div className="modal__backdrop" onClick={() => setOpen(false)} />
          <div className="modal__content">
            <div className="modal__header">
              <h4>O que está incluso</h4>
              <button type="button" onClick={() => setOpen(false)} aria-label="Fechar modal">
                ✕
              </button>
            </div>
            <ul className="modal__list">
              {service.whatsIncluded.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button type="button" className="button button--primary" onClick={() => setOpen(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

export default Services;
