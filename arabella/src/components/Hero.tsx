const Hero = () => (
  <section id="hero" className="hero" aria-labelledby="hero-title">
    <div className="hero__bg" aria-hidden>
      <div className="hero__glow" />
    </div>
    <div className="container hero__container">
      <div className="hero__content">
        <span className="hero__badge">Lançamento do SaaS em breve</span>
        <h1 id="hero-title">Construa landing pages impressionantes com velocidade e precisão.</h1>
        <p>
          A plataforma definitiva para criar, otimizar e gerenciar landing pages de alta conversão. Em breve,
          uma solução SaaS completa para transformar suas campanhas.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#roadmap">
            Experimente agora
          </a>
          <a className="button button--ghost" href="#features">
            Assista a demo
          </a>
        </div>
        <dl className="hero__metrics">
          <div>
            <dt>99,9%</dt>
            <dd>Uptime garantido</dd>
          </div>
          <div>
            <dt>50ms</dt>
            <dd>Tempo de resposta</dd>
          </div>
          <div>
            <dt>10x</dt>
            <dd>Mais testes por trimestre</dd>
          </div>
        </dl>
      </div>

      <div className="hero__preview" aria-hidden>
        <div className="hero__window">
          <header>
            <span />
            <span />
            <span />
          </header>
          <div className="hero__window-body">
            <div className="hero__dropzone">
              <div className="hero__element">arabella.dev/editor</div>
            </div>
            <div className="hero__annotation hero__annotation--primary">Drag & drop</div>
            <div className="hero__annotation hero__annotation--secondary">Analytics integrados</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
