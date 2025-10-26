const testimonials = [
  {
    quote:
      '“A Arabella.dev transformou completamente nosso funnel de criação de landing pages. A velocidade e a qualidade são imbatíveis.”',
    name: 'Sofia Martins',
    role: 'Head de Marketing, TechCorp',
  },
  {
    quote:
      '“Interface intuitiva, performance excepcional e suporte incrível. Exatamente o que precisávamos para escalar.”',
    name: 'Ricardo Santos',
    role: 'Product Manager, InnovateLab',
  },
  {
    quote:
      '“Conseguimos aumentar nossa taxa de conversão em 40% nas primeiras semanas. Ferramenta indispensável.”',
    name: 'Ana Costa',
    role: 'Growth Lead, DigitalFlow',
  },
];

const Testimonials = () => (
  <section id="testimonials" className="testimonials" aria-labelledby="testimonials-title">
    <div className="container">
      <header className="section-heading">
        <p className="section-kicker">Confiado por equipes de alto desempenho</p>
        <h2 id="testimonials-title">Resultados reais em empresas que vivem de performance</h2>
      </header>
      <div className="testimonials__grid">
        {testimonials.map(item => (
          <article key={item.name} className="testimonial-card">
            <p className="testimonial-card__quote">{item.quote}</p>
            <footer>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </footer>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
