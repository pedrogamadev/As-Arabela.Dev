const features = [
  {
    title: 'Venda de produtos',
    description: 'Landing pages para lojas virtuais e lançamentos de produtos com checkout otimizado.',
    icon: 'https://cdn-icons-png.flaticon.com/512/711/711897.png',
    alt: 'Ícone de sacola representando vendas',
  },
  {
    title: 'Escritórios',
    description:
      'Páginas institucionais para escritórios de advocacia, contabilidade, clínicas médicas e coworkings.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1829/1829305.png',
    alt: 'Ícone de maleta corporativa',
  },
  {
    title: 'Serviços',
    description:
      'Landing pages para prestadores de serviço como consultorias, academias, personal trainers e reparos.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2099/2099056.png',
    alt: 'Ícone de engrenagem simbolizando serviços',
  },
  {
    title: 'Eventos e infoprodutos',
    description: 'Páginas para cursos online, webinars, eventos e e-books com foco em captação de leads.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2838/2838766.png',
    alt: 'Ícone de calendário representando eventos',
  },
];

const FeatureGrid = () => (
  <section id="ferramentas" className="features" aria-labelledby="features-title">
    <div className="container">
      <header className="section-heading">
        <p className="section-kicker">Ferramentas profissionais</p>
        <h2 id="features-title">Ferramentas profissionais para ideias que convertem</h2>
        <p>
          Oferecemos recursos prontos e personalizáveis para montar landing pages de vendas, capturar leads,
          marcar consultas e exibir portfólios com performance de ponta. Inspirados na variedade de formatos
          citada pela Mailjet — como capture, squeeze e click-through pages — entregamos opções que se adaptam
          a cada objetivo.
        </p>
      </header>
      <div className="features__grid">
        {features.map(feature => (
          <article key={feature.title} className="feature-card">
            <div className="feature-card__icon">
              <img src={feature.icon} alt={feature.alt} loading="lazy" />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureGrid;
