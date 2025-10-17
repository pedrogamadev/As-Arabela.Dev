import { useEffect } from 'react';
import type { HeroContent, HeroCta, LogoItem } from '../content/hero';
import { applyOpenGraphMeta } from '../lib/seo';
import { brand } from '../lib/brand';

interface HeroProps {
  id: string;
  content: HeroContent;
  ctas: HeroCta[];
  logos: LogoItem[];
}

const Hero = ({ id, content, ctas, logos }: HeroProps) => {
  useEffect(() => {
    applyOpenGraphMeta({
      title: `${content.title} | Arabella.dev`,
      description: content.subtitle,
      image: 'https://www.arabella.dev/og-image.png',
      url: 'https://www.arabella.dev',
      siteName: 'Arabella.dev',
    });
  }, [content]);

  const handleCta = (cta: HeroCta) => {
    if (cta.action === 'scroll') {
      const target = document.getElementById(cta.target);
      target?.scrollIntoView({ behavior: 'smooth' });
    }

    if (cta.action === 'modal') {
      document.dispatchEvent(new CustomEvent('scheduler:open'));
    }
  };

  return (
    <section id={id} className="hero" aria-labelledby="hero-title">
      <div className="hero__background" aria-hidden>
        <div className="hero__glow" style={{ background: brand.gradient }} />
      </div>
      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__kicker">{content.kicker}</p>
          <h1 id="hero-title" className="hero__title">
            {content.title}
          </h1>
          <p className="hero__subtitle">{content.subtitle}</p>
          <div className="hero__actions">
            {ctas.map(cta => (
              <button
                key={cta.label}
                type="button"
                className={`button ${cta.action === 'scroll' ? 'button--primary' : 'button--ghost'}`}
                onClick={() => handleCta(cta)}
              >
                {cta.label}
              </button>
            ))}
          </div>
          <div className="hero__logos" aria-label="Clientes atendidos">
            {logos.map(logo => (
              <img
                key={logo.name}
                src={logo.src}
                alt={`Logo ${logo.name}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
