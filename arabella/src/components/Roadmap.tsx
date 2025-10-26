const roadmapItems = [
  'Gestão completa de campanhas multi-canal',
  'Integrações com principais plataformas',
  'Colaboração em tempo real',
  'Automations avançadas de marketing',
  'Insights potenciados com IA',
  'Suporte prioritário 24/7',
];

const Roadmap = () => (
  <section id="roadmap" className="roadmap" aria-labelledby="roadmap-title">
    <div className="container roadmap__container">
      <div className="roadmap__content">
        <span className="roadmap__status">Em desenvolvimento</span>
        <h2 id="roadmap-title">Prepare-se para nossa plataforma SaaS completa</h2>
        <p>
          Em breve lançaremos uma solução completa para gerenciar todo o ciclo de vida das suas campanhas
          digitais. Seja um dos primeiros a ter acesso e acompanhe cada etapa da evolução do produto.
        </p>
        <ul className="roadmap__list">
          {roadmapItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a className="button button--ghost" href="#hero">
          Inscreva-se para o acesso antecipado
        </a>
      </div>
      <div className="roadmap__glow" aria-hidden />
    </div>
  </section>
);

export default Roadmap;
