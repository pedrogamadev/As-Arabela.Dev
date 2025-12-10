import { useEffect } from 'react';

const features = [
  {
    title: 'Venda de produtos',
    description: 'Landing pages para lojas virtuais e lançamentos de produtos com checkout otimizado.',
    icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.292.0/icons/shopping-cart.svg',
    alt: 'Ícone de carrinho representando vendas online',
  },
  {
    title: 'Escritórios',
    description:
      'Páginas institucionais para escritórios de advocacia, contabilidade, clínicas médicas e coworkings.',
    icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.292.0/icons/building-2.svg',
    alt: 'Ícone de prédio corporativo representando escritórios',
  },
  {
    title: 'Serviços',
    description:
      'Landing pages para prestadores de serviço como consultorias, academias, personal trainers e reparos.',
    icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.292.0/icons/zap.svg',
    alt: 'Ícone de raio simbolizando dinamismo nos serviços',
  },
  {
    title: 'Eventos e infoprodutos',
    description: 'Páginas para cursos online, webinars, eventos e e-books com foco em captação de leads.',
    icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.292.0/icons/calendar-check.svg',
    alt: 'Ícone de calendário com marcação representando eventos digitais',
  },
];

const FeatureGrid = () => {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.feature-card'));
    const section = document.getElementById('ferramentas');
    if (!cards.length || !section) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      cards.forEach(card => card.classList.add('is-visible'));
      return;
    }

    section.classList.add('is-ready');
    cards.forEach(card => card.classList.add('will-animate'));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    const observeCards = () => {
      cards.forEach(card => observer.observe(card));
    };

    const scheduleObservation = window.requestAnimationFrame
      ? () => window.requestAnimationFrame(observeCards)
      : () => window.setTimeout(observeCards, 40);

    scheduleObservation();

    return () => {
      observer.disconnect();
      section.classList.remove('is-ready');
    };
  }, []);

  // Duplicate features for infinite marquee effect on mobile
  const displayFeatures = [...features, ...features];

  return (
    <section id="ferramentas" className="features" aria-labelledby="features-title">
      <div className="container">
        <header className="section-heading">
          <p className="section-kicker">Ferramentas profissionais</p>
          <h2 id="features-title">Transformamos sua ideia em uma página que realmente converte</h2>
          <p>Pense. Inspire. Nós transformamos.</p>
        </header>
        <div className="features__marquee-window">
          <div className="features__grid">
            {displayFeatures.map((feature, index) => (
              <article 
                // Using index as key because of duplication
                key={`${feature.title}-${index}`} 
                className="feature-card" 
                style={index >= 4 ? { display: 'none' } : undefined} // Inline style to hide duplicates on desktop (overridden by mobile css if needed)
              >
                <div className="feature-card__icon">
                  <img src={feature.icon} alt={feature.alt} loading="lazy" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
            {/* Styles for mobile to show duplicates are handled in CSS via media queries on the class 'features__grid' children */}
            <style>{`
              @media (max-width: 768px) {
                .feature-card { display: flex !important; }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
