import { useMemo, useState } from 'react';
import arabellaLogo from '../assets/logo-arabella.svg';
import atlasLogo from '../assets/logo-atlas.svg';
import faroLogo from '../assets/logo-faro.svg';
import orbeLogo from '../assets/logo-orbe.svg';
import '../checkout.css';

const ORDER_ITEMS = [
  {
    id: 1,
    name: 'Landing Page Profissional',
    description: 'Pacote Premium',
    price: 2990,
    image: arabellaLogo,
  },
  {
    id: 2,
    name: 'SEO Boost + Copy Pro',
    description: 'Complemento estratégico',
    price: 980,
    image: atlasLogo,
  },
];

const SUGGESTIONS = [
  {
    id: 1,
    name: 'Gestão de tráfego',
    description: 'Escala anúncios com especialistas',
    image: faroLogo,
  },
  {
    id: 2,
    name: 'Identidade visual',
    description: 'Logotipo e guia de marca',
    image: orbeLogo,
  },
];

const STEPS = [
  { id: 'brief', title: 'Briefing rápido' },
  { id: 'conteudo', title: 'Conteúdo' },
  { id: 'entrega', title: 'Entrega' },
  { id: 'pagamento', title: 'Pagamento' },
];

const CheckoutPage = () => {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({
    ideiaPronta: 'sim',
    objetivo: 'vendas',
    identidadeVisual: 'sim',
    conteudoPronto: 'parcial',
    precisaCopy: false,
    integraWhats: true,
    referencias: '',
    prazo: '15',
    contato: 'whatsapp',
    observacoes: '',
    pagamento: 'pix',
  });

  const total = useMemo(() => ORDER_ITEMS.reduce((acc, item) => acc + item.price, 0), []);
  const entrada = total * 0.5;

  const handleNext = () => {
    if (step < STEPS.length - 1) setStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(prev => prev - 1);
  };

  return (
    <div className="checkout-page">
      <section className="hero" style={{ paddingBottom: '3rem' }}>
        <div className="hero__background" aria-hidden>
          <div className="hero__gradient" />
          <div className="hero__glow hero__glow--left" />
          <div className="hero__glow hero__glow--right" />
        </div>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '0 auto 1rem' }}>
            Checkout do seu pacote pronto
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', color: 'rgba(12, 18, 56, 0.7)' }}>
            Garanta a sua vaga com 50% do valor agora e finalize com um atendimento rápido e guiado.
          </p>
        </div>
      </section>

      <section className="container checkout-grid">
        <div className="checkout-left">
          <aside className="checkout-summary">
            <header className="checkout-summary__header">
              <h2>Resumo do pedido</h2>
              <span className="checkout-summary__badge">Entrada 50%</span>
            </header>

            <div className="checkout-summary__items">
              {ORDER_ITEMS.map(item => (
                <article key={item.id} className="checkout-summary__item">
                  <img src={item.image} alt="" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <strong>R$ {item.price.toLocaleString('pt-BR')}</strong>
                  </div>
                </article>
              ))}
            </div>

            <div className="checkout-summary__totals">
              <div>
                <span>Subtotal</span>
                <strong>R$ {total.toLocaleString('pt-BR')}</strong>
              </div>
              <div>
                <span>Pagamento inicial (50%)</span>
                <strong>R$ {entrada.toLocaleString('pt-BR')}</strong>
              </div>
              <div className="checkout-summary__highlight">
                <span>Saldo na entrega</span>
                <strong>R$ {entrada.toLocaleString('pt-BR')}</strong>
              </div>
            </div>
          </aside>

          <aside className="checkout-suggestions">
            <h3>Você também pode gostar de</h3>
            <div className="checkout-suggestions__grid">
              {SUGGESTIONS.map(item => (
                <article key={item.id} className="checkout-suggestion">
                  <img src={item.image} alt="" />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.description}</span>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>

        <div className="checkout-wizard">
          <div className="checkout-wizard__stepper">
            {STEPS.map((wizardStep, index) => (
              <div key={wizardStep.id} className={`checkout-wizard__step ${index <= step ? 'is-active' : ''}`}>
                <span>{index + 1}</span>
                <small>{wizardStep.title}</small>
              </div>
            ))}
          </div>

          <div className="checkout-wizard__panel">
            <h2>{STEPS[step].title}</h2>

            {step === 0 && (
              <div className="checkout-form">
                <div>
                  <label>Você já tem ideia do que precisa?</label>
                  <div className="checkout-options">
                    {['sim', 'mais ou menos', 'preciso de ajuda'].map(option => (
                      <label key={option}>
                        <input
                          type="radio"
                          name="ideiaPronta"
                          checked={values.ideiaPronta === option}
                          onChange={() => setValues(prev => ({ ...prev, ideiaPronta: option }))}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label>Objetivo principal do pacote</label>
                  <select
                    value={values.objetivo}
                    onChange={event => setValues(prev => ({ ...prev, objetivo: event.target.value }))}
                  >
                    <option value="vendas">Vender mais rapidamente</option>
                    <option value="autoridade">Transmitir autoridade</option>
                    <option value="captacao">Captar leads qualificados</option>
                  </select>
                </div>

                <div>
                  <label>Você já possui identidade visual?</label>
                  <div className="checkout-options">
                    {['sim', 'nao', 'em criacao'].map(option => (
                      <label key={option}>
                        <input
                          type="radio"
                          name="identidadeVisual"
                          checked={values.identidadeVisual === option}
                          onChange={() => setValues(prev => ({ ...prev, identidadeVisual: option }))}
                        />
                        {option === 'nao' ? 'não' : option}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="checkout-form">
                <div>
                  <label>Você já possui textos e imagens?</label>
                  <div className="checkout-options">
                    {['sim', 'parcial', 'nao'].map(option => (
                      <label key={option}>
                        <input
                          type="radio"
                          name="conteudoPronto"
                          checked={values.conteudoPronto === option}
                          onChange={() => setValues(prev => ({ ...prev, conteudoPronto: option }))}
                        />
                        {option === 'nao' ? 'não' : option}
                      </label>
                    ))}
                  </div>
                </div>

                <label className="checkout-checkbox">
                  <input
                    type="checkbox"
                    checked={values.precisaCopy}
                    onChange={event => setValues(prev => ({ ...prev, precisaCopy: event.target.checked }))}
                  />
                  Quero ajuda com copywriting e estruturação do texto.
                </label>

                <label className="checkout-checkbox">
                  <input
                    type="checkbox"
                    checked={values.integraWhats}
                    onChange={event => setValues(prev => ({ ...prev, integraWhats: event.target.checked }))}
                  />
                  Preciso de integração com WhatsApp e formulários.
                </label>

                <div>
                  <label>Links de referência</label>
                  <textarea
                    rows={4}
                    placeholder="Cole links de sites que você gosta..."
                    value={values.referencias}
                    onChange={event => setValues(prev => ({ ...prev, referencias: event.target.value }))}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="checkout-form">
                <div>
                  <label>Prazo desejado para entrega</label>
                  <select
                    value={values.prazo}
                    onChange={event => setValues(prev => ({ ...prev, prazo: event.target.value }))}
                  >
                    <option value="7">7 dias</option>
                    <option value="15">15 dias</option>
                    <option value="30">30 dias</option>
                  </select>
                </div>

                <div>
                  <label>Como prefere receber as atualizações?</label>
                  <select
                    value={values.contato}
                    onChange={event => setValues(prev => ({ ...prev, contato: event.target.value }))}
                  >
                    <option value="whatsapp">WhatsApp</option>
                    <option value="email">E-mail</option>
                    <option value="call">Reunião rápida</option>
                  </select>
                </div>

                <div>
                  <label>Observações adicionais</label>
                  <textarea
                    rows={4}
                    placeholder="Deixe detalhes importantes para o time..."
                    value={values.observacoes}
                    onChange={event => setValues(prev => ({ ...prev, observacoes: event.target.value }))}
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="checkout-form">
                <div className="checkout-payment-summary">
                  <h3>Pagamento inicial</h3>
                  <p>Para iniciar o projeto, cobramos 50% do valor total.</p>
                  <strong>R$ {entrada.toLocaleString('pt-BR')}</strong>
                </div>

                <div>
                  <label>Forma de pagamento</label>
                  <div className="checkout-options">
                    {['pix', 'cartao', 'boleto'].map(option => (
                      <label key={option}>
                        <input
                          type="radio"
                          name="pagamento"
                          checked={values.pagamento === option}
                          onChange={() => setValues(prev => ({ ...prev, pagamento: option }))}
                        />
                        {option === 'cartao' ? 'cartão' : option}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="checkout-payment-note">
                  O restante do pagamento acontece após a entrega e aprovação do layout.
                </div>
              </div>
            )}

            <div className="checkout-wizard__actions">
              {step > 0 && (
                <button type="button" className="button button--ghost" onClick={handleBack}>
                  Voltar
                </button>
              )}
              {step < STEPS.length - 1 ? (
                <button type="button" className="button button--primary" onClick={handleNext}>
                  Próximo
                </button>
              ) : (
                <button type="button" className="button button--primary">
                  Pagar entrada de 50%
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
