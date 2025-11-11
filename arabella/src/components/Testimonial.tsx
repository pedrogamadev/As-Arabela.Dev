const testimonials = [
  {
    quote: '“Triplicamos nossa taxa de conversão em 30 dias com a nova landing page da Arabella.dev.”',
    name: 'Sofia Martins',
    role: 'Head de Marketing, TechCorp',
    avatar: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
  },
  {
    quote: '“Publicamos páginas promocionais 4x mais rápido sem perder o cuidado com o design.”',
    name: 'Ricardo Santos',
    role: 'Product Manager, InnovateLab',
    avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  },
  {
    quote: '“Reduzimos o custo por lead em 28% e conseguimos testes A/B semanais.”',
    name: 'Ana Costa',
    role: 'Growth Lead, DigitalFlow',
    avatar: 'https://cdn-icons-png.flaticon.com/512/921/921345.png',
  },
  {
    quote: '“O time montou uma landing para nosso coworking em dias, com integrações prontas.”',
    name: 'Carlos Lima',
    role: 'COO, NextWork Hub',
    avatar: 'https://cdn-icons-png.flaticon.com/512/921/921071.png',
  },
];

const Testimonials = () => (
  <section id="resultados" className="testimonials" aria-labelledby="testimonials-title">
    <div className="container">
      <header className="section-heading">
        <p className="section-kicker">Confiado por equipes de alto desempenho</p>
        <h2 id="testimonials-title">Resultados reais de quem vive de performance</h2>
      </header>
      <div className="testimonials__grid">
        {testimonials.map(item => (
          <article key={item.name} className="testimonial-card">
            <p className="testimonial-card__quote">{item.quote}</p>
            <footer>
              <div className="testimonial-card__avatar">
                <img src={item.avatar} alt={`Foto de ${item.name}`} loading="lazy" />
              </div>
              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
