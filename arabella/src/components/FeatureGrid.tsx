const features = [
  {
    title: 'Componentes pré-construídos',
    description:
      'Biblioteca completa de componentes otimizados e prontos para uso em qualquer campanha.',
  },
  {
    title: 'Editor intuitivo',
    description:
      'Interface drag-and-drop que acelera a criação sem abrir mão da personalização.',
  },
  {
    title: 'SEO otimizado',
    description:
      'Configurações avançadas para mecanismos de busca desde o início.',
  },
  {
    title: 'Preparado para SaaS',
    description:
      'Infraestrutura escalável para crescer junto com o seu negócio.',
  },
];

const FeatureGrid = () => (
  <section id="features" className="features" aria-labelledby="features-title">
    <div className="container">
      <header className="section-heading">
        <p className="section-kicker">Tudo que você precisa para criar páginas excepcionais</p>
        <h2 id="features-title">Ferramentas profissionais para ideias que convertem</h2>
        <p>
          Monte experiências digitais com a mesma facilidade de um construtor visual e o desempenho de uma
          equipe sênior.
        </p>
      </header>
      <div className="features__grid">
        {features.map(feature => (
          <article key={feature.title} className="feature-card">
            <span className="feature-card__icon" aria-hidden>
              <span />
            </span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureGrid;
