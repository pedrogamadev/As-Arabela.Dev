import { useEffect, useState } from 'react';

const highlights = [
  {
    key: 'drag',
    title: 'Drag & drop',
    description: 'Monte blocos visuais e publique páginas responsivas em minutos.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2920/2920771.png',
    alt: 'Ícone representando blocos sendo arrastados',
  },
  {
    key: 'custom',
    title: 'Customização total',
    description: 'Paletas, tipografia e espaçamentos ajustados ao seu branding sem precisar de código.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828634.png',
    alt: 'Ícone de paleta de cores',
  },
  {
    key: 'integrations',
    title: 'Integrações e conversão',
    description: 'Dashboards em tempo real para acompanhar assinaturas, vendas e leads gerados.',
    icon: 'https://cdn-icons-png.flaticon.com/512/711/7117848.png',
    alt: 'Ícone de gráfico analítico',
  },
];

const Experience = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive(current => (current + 1) % highlights.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="automatize" className="experience" aria-labelledby="experience-title">
      <div className="container experience__container">
        <div className="experience__visual" aria-hidden>
          <div className="experience__window">
            <header className="experience__window-header">
              <span />
              <span />
              <span />
            </header>
            <div className="experience__screen">
              {highlights.map((item, index) => (
                <div
                  key={item.key}
                  className={`experience__screen-panel ${index === active ? 'is-active' : ''}`}
                >
                  {item.key === 'drag' && (
                    <div className="experience__screen-drag">
                      <div className="drag-block drag-block--hero" />
                      <div className="drag-block drag-block--content" />
                      <div className="drag-block drag-block--cta" />
                      <div className="drag-cursor" />
                    </div>
                  )}
                  {item.key === 'custom' && (
                    <div className="experience__screen-custom">
                      <div className="custom-palette">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="custom-sliders">
                        <div className="custom-slider">
                          <div className="custom-slider__track">
                            <div className="custom-slider__thumb" />
                          </div>
                          <span>Tipografia</span>
                        </div>
                        <div className="custom-slider">
                          <div className="custom-slider__track">
                            <div className="custom-slider__thumb custom-slider__thumb--alt" />
                          </div>
                          <span>Espaçamentos</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {item.key === 'integrations' && (
                    <div className="experience__screen-analytics">
                      <div className="analytics-chart">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="analytics-badges">
                        <strong>Conversões em tempo real</strong>
                        <p>+28% esta semana</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="experience__content">
          <p className="section-kicker">Automatize jornadas</p>
          <h2 id="experience-title">Automatize jornadas completas com visual intuitivo</h2>
          <p>
            Cuidamos de todo o ciclo de criação e personalização. Fornecemos frameworks para criar, testar e
            otimizar campanhas sem código, com colaboração em tempo real e resultados atualizados segundo a
            segundo para ajustar experiências rapidamente.
          </p>
          <div role="tablist" aria-label="Recursos avançados" className="experience__tabs">
            {highlights.map((item, index) => (
              <button
                key={item.key}
                role="tab"
                type="button"
                aria-selected={index === active}
                className={`experience__tab ${index === active ? 'is-active' : ''}`}
                onClick={() => setActive(index)}
              >
                <span className="experience__tab-icon">
                  <img src={item.icon} alt={item.alt} loading="lazy" />
                </span>
                <span className="experience__tab-content">
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
