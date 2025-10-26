const highlights = [
  {
    title: 'Drag & drop',
    description: 'Crie páginas responsivas em minutos com uma interface visual completa.',
  },
  {
    title: 'Customização total',
    description: 'Controle pixel a pixel com estilos avançados e variáveis compartilhadas.',
  },
  {
    title: 'Conversão em tempo real',
    description: 'Monitore resultados com dashboards conectados a toda a sua stack.',
  },
];

const Experience = () => (
  <section id="experience" className="experience" aria-labelledby="experience-title">
    <div className="container experience__container">
      <div className="experience__media" aria-hidden>
        <div className="experience__card">
          <header>
            <span />
            <span />
            <span />
          </header>
          <div className="experience__content">
            <div className="experience__graph" />
            <div className="experience__panel">
              <div className="experience__badge">Drag & drop</div>
              <div className="experience__badge">Customização total</div>
              <div className="experience__badge">Conversão em tempo real</div>
            </div>
          </div>
        </div>
      </div>

      <div className="experience__text">
        <p className="section-kicker">Crie experiências que convertem</p>
        <h2 id="experience-title">Automatize jornadas completas com visual intuitivo</h2>
        <p>
          Nossa plataforma oferece todos os frameworks necessários para criar, testar e otimizar campanhas sem
          depender de código. Com recursos de colaboração em tempo real, seu time acompanha resultados e ajusta
          experiências em segundos.
        </p>
        <ul className="experience__list">
          {highlights.map(item => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
