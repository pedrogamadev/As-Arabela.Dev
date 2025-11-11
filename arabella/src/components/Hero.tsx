const Hero = () => (
  <section id="construa" className="hero" aria-labelledby="hero-title">
    <div className="hero__background" aria-hidden>
      <div className="hero__gradient" />
      <div className="hero__glow hero__glow--left" />
      <div className="hero__glow hero__glow--right" />
    </div>
    <div className="container hero__container">
      <div className="hero__content">
        <span className="hero__badge">Startup especializada em landing pages sob medida</span>
        <h1 id="hero-title">Construa landing pages impressionantes com velocidade e precisão</h1>
        <p>
          Somos a Arabella.dev, uma startup que planeja, prototipa e desenvolve páginas de alta conversão para
          qualquer segmento: e-commerce, escritórios e prestadores de serviços como restaurantes, academias,
          consultorias e muito mais.
        </p>
        <p className="hero__description">
          Utilizamos tecnologia moderna e práticas recomendadas de lead capture, como destaca a Mailjet, para
          transformar visitas em vendas e maximizar a geração de leads.
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
          <div className="hero__window-body">
            <div className="hero__icon hero__icon--sales">
              <img src="https://cdn-icons-png.flaticon.com/512/1829/1829130.png" alt="" />
              <span>Vendas em alta</span>
            </div>
            <div className="hero__icon hero__icon--conversion">
              <img src="https://cdn-icons-png.flaticon.com/512/7490/7490803.png" alt="" />
              <span>Conversões otimizadas</span>
            </div>
            <div className="hero__icon hero__icon--portfolio">
              <img src="https://cdn-icons-png.flaticon.com/512/6095/6095036.png" alt="" />
              <span>Portfólio web dinâmico</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
