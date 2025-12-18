import { useEffect } from 'react';

const features = [
  {
    title: 'Venda de produtos',
    description: 'Landing pages para lojas virtuais e lançamentos de produtos com checkout.',
    icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.292.0/icons/shopping-cart.svg',
    alt: 'Ícone de carrinho representando vendas online',
  },
  {
    title: 'Escritórios',
    description: 'Páginas institucionais para escritórios de advocacia, contabilidade e áreas afins.',
    icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.292.0/icons/building-2.svg',
    alt: 'Ícone de prédio corporativo representando escritórios',
  },
  {
    title: 'Serviços',
    description: 'Landing pages para prestadores de serviço e consultorias.',
    icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.292.0/icons/briefcase.svg',
    alt: 'Ícone de pasta profissional representando prestação de serviços',
  },
  {
    title: 'Eventos e infoprodutos',
    description: 'Páginas para cursos online, webinars e eventos.',
    icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.292.0/icons/calendar-check.svg',
    alt: 'Ícone de calendário com marcação representando eventos digitais',
  },
  {
    title: 'Portfólios profissionais',
    description: 'Landing pages pessoais para profissionais liberais, freelancers e criativos.',
    icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.292.0/icons/id-card.svg',
    alt: 'Ícone de crachá simbolizando portfólios profissionais',
  },
  {
    title: 'Landing pages de vendas',
    description: 'Páginas estratégicas focadas em conversão de produtos ou serviços.',
    icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.292.0/icons/trending-up.svg',
    alt: 'Ícone de gráfico indicando aumento de vendas',
  },
  {
    title: 'Checkout integrado (Mercado Pago)',
    description: 'Landing pages com pagamento integrado via Pix, cartão e boleto.',
    icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.292.0/icons/credit-card.svg',
    alt: 'Ícone de cartão representando checkout integrado',
  },
  {
    title: 'Captação de leads',
    description: 'Páginas para coleta de contatos e geração de oportunidades.',
    icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.292.0/icons/inbox.svg',
    alt: 'Ícone de caixa de entrada simbolizando captação de leads',
  },
  {
    title: 'Lançamentos digitais',
    description: 'Landing pages para pré-vendas, lançamentos e campanhas temporárias.',
    icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.292.0/icons/rocket.svg',
    alt: 'Ícone de foguete representando lançamentos digitais',
  },
  {
    title: 'Páginas para tráfego pago',
    description: 'Landing pages rápidas e otimizadas para anúncios.',
    icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.292.0/icons/megaphone.svg',
    alt: 'Ícone de megafone representando campanhas de tráfego pago',
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

  // Duplicate features for a seamless marquee effect across viewports
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
              >
                <div className="feature-card__icon">
                  <img src={feature.icon} alt={feature.alt} loading="lazy" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
