import { useEffect, useMemo, useState } from 'react';

const HERO_ITEMS = [
  {
    title: 'Venda mais seu produto',
    icon: 'https://cdn-icons-png.flaticon.com/512/3082/3082364.png',
    alt: 'Ícone de caixa aberta representando venda de produto',
  },
  {
    title: 'Atraia clientes para seu serviço',
    icon: 'https://cdn-icons-png.flaticon.com/512/1127/1127810.png',
    alt: 'Ícone de consultor com engrenagem representando serviço',
  },
  {
    title: 'Transmita confiança profissional',
    icon: 'https://cdn-icons-png.flaticon.com/512/4021/4021663.png',
    alt: 'Ícone de balança de justiça representando confiança profissional',
  },
  {
    title: 'Fortaleça a presença da sua empresa',
    icon: 'https://cdn-icons-png.flaticon.com/512/3063/3063325.png',
    alt: 'Ícone de edifício corporativo representando presença empresarial',
  },
  {
    title: 'Venda cursos e treinamentos',
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
    alt: 'Ícone de foguete representando lançamentos e treinamentos',
  },
  {
    title: 'Lote seu evento com facilidade',
    icon: 'https://cdn-icons-png.flaticon.com/512/747/747310.png',
    alt: 'Ícone de calendário com relógio representando eventos',
  },
  {
    title: 'Capte leads qualificados',
    icon: 'https://cdn-icons-png.flaticon.com/512/2098/2098316.png',
    alt: 'Ícone de formulário com envelope representando captura de leads',
  },
  {
    title: 'Mostre seu portfólio com impacto',
    icon: 'https://cdn-icons-png.flaticon.com/512/1903/1903162.png',
    alt: 'Ícone de troféu representando portfólio de sucesso',
  },
  {
    title: 'Converta mais no e-commerce',
    icon: 'https://cdn-icons-png.flaticon.com/512/1041/1041880.png',
    alt: 'Ícone de carrinho de compras representando e-commerce',
  },
] as const;

const ITEMS_PER_VIEW = 3;
const ROTATION_INTERVAL = 4200;

const Hero = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setStartIndex(prev => (prev + 1) % HERO_ITEMS.length);
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, []);

  const visibleItems = useMemo(
    () =>
      Array.from({ length: ITEMS_PER_VIEW }, (_, offset) => HERO_ITEMS[(startIndex + offset) % HERO_ITEMS.length]),
    [startIndex]
  );

  return (
    <section id="construa" className="hero" aria-labelledby="hero-title">
      <div className="hero__background" aria-hidden>
        <div className="hero__gradient" />
        <div className="hero__glow hero__glow--left" />
        <div className="hero__glow hero__glow--right" />
      </div>
      <div className="container hero__container">
        <div className="hero__content">
          <h1 id="hero-title">Entregamos sua landing page rápida, moderna e totalmente alinhada à sua necessidade.</h1>
          <p>
            Somos a Arabella.dev, uma startup que planeja, prototipa e desenvolve páginas de alta conversão para qualquer
            segmento: e-commerce, escritórios e prestadores de serviços como restaurantes, academias, consultorias e muito
            mais.
          </p>
          <div className="hero__actions">
            <a
              className="button button--primary"
              href="https://wa.me/84991926432?text=olá,+gostaria+de+fazer+um+orçamento"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazer orçamento agora
            </a>
            <a className="button button--secondary" href="#ferramentas">
              Saiba mais
            </a>
          </div>
        </div>
        <div className="hero__visual" aria-hidden>
          <div className="hero__window">
            <header className="hero__window-header">
              <span />
              <span />
              <span />
            </header>
            <div className="hero__window-body" aria-live="polite">
              <div className="hero__slider">
                {[startIndex].map(key => (
                  <div className="hero__slide" key={key}>
                    {visibleItems.map(item => (
                      <div className="hero__item" key={item.title}>
                        <img src={item.icon} alt={item.alt} />
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
