import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../app/providers';

interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  highlight: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 'atlas',
    quote:
      'A Arabella entrou como parceira estratégica. Em 6 semanas tínhamos um site novo, integrações com CRM e dashboards de performance prontos.',
    name: 'Marina Lopes',
    role: 'Head de Marketing, Atlas Educação',
    highlight: '+42% leads orgânicos',
  },
  {
    id: 'verde',
    quote:
      'O processo foi transparente do início ao fim. Crescemos a taxa de conversão mobile e ganhamos autonomia para testar novas campanhas.',
    name: 'Eduardo Viana',
    role: 'Growth Manager, Verde Labs',
    highlight: '-35% custo por aquisição',
  },
  {
    id: 'faro',
    quote:
      'Finalmente temos uma stack rápida, com SEO técnico impecável e time disponível para evoluir continuamente.',
    name: 'Juliana Mota',
    role: 'CMO, Faro Digital',
    highlight: 'NPS 78',
  },
];

const Testimonials = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || paused) {
      return;
    }

    const id = window.setInterval(() => {
      setActive(current => (current + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(id);
  }, [paused, prefersReducedMotion]);

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="testimonials-title">Clientes que escalaram com a Arabella.dev</h2>
          <p>Feedback direto de quem apostou em performance digital centrada no usuário.</p>
        </div>
        <div
          className="testimonials__carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {testimonials.map((item, index) => (
            <article
              key={item.id}
              id={`testimonial-${item.id}`}
              className={`testimonial ${index === active ? 'is-active' : ''}`}
              aria-hidden={index !== active}
            >
              <p className="testimonial__highlight">{item.highlight}</p>
              <blockquote>
                <p>“{item.quote}”</p>
              </blockquote>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </footer>
            </article>
          ))}
          <div className="testimonials__controls" role="tablist" aria-label="Depoimentos">
            {testimonials.map((item, index) => (
              <button
                type="button"
                key={item.id}
                role="tab"
                aria-selected={index === active}
                aria-controls={`testimonial-${item.id}`}
                className={index === active ? 'is-active' : ''}
                onClick={() => setActive(index)}
              >
                <span className="sr-only">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
