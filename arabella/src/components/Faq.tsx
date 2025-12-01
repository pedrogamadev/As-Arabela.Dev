import { faqItems } from '../content/faq';

const Faq = () => (
  <section id="faq" className="faq" aria-labelledby="faq-title">
    <div className="container">
      <header className="section-heading">
        <p className="section-kicker">Dúvidas frequentes</p>
        <h2 id="faq-title">FAQ</h2>
      </header>

      <div className="faq__grid" role="list">
        {faqItems.map((item, index) => (
          <details key={item.question} className="faq-item" role="listitem" open={index === 0}>
            <summary>
              <div className="faq-item__question">
                <span className="faq-item__badge" aria-hidden="true">?</span>
                <span>{item.question}</span>
              </div>
              <span className="faq-item__icon" aria-hidden="true" />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
