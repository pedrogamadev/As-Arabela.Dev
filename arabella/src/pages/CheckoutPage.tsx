import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import arabellaLogo from '../assets/logo-arabella.svg';
import atlasLogo from '../assets/logo-atlas.svg';
import faroLogo from '../assets/logo-faro.svg';
import orbeLogo from '../assets/logo-orbe.svg';
import '../checkout.css';

type PlanKey = 'essencial' | 'profissional' | 'pro';
type CartItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  type: 'plan' | 'addon';
};

const PLANS: Record<PlanKey, CartItem> = {
  essencial: {
    id: 'plan-essencial',
    name: 'Landing Page Essencial',
    description: 'Entrada',
    price: 490.9,
    image: arabellaLogo,
    type: 'plan',
  },
  profissional: {
    id: 'plan-profissional',
    name: 'Landing Page Profissional',
    description: 'Mais vendido',
    price: 690.9,
    image: atlasLogo,
    type: 'plan',
  },
  pro: {
    id: 'plan-pro',
    name: 'Landing Page + Página Extra',
    description: 'Completo',
    price: 1290.9,
    image: orbeLogo,
    type: 'plan',
  },
};

const SUGGESTIONS: CartItem[] = [
  {
    id: 'seo-basico',
    name: 'SEO básico',
    description: 'Otimização essencial para buscadores',
    price: 90,
    image: faroLogo,
    type: 'addon',
  },
  {
    id: 'seo-avancado',
    name: 'SEO avançado',
    description: 'Estratégia completa de ranqueamento',
    price: 170,
    image: atlasLogo,
    type: 'addon',
  },
  {
    id: 'logo',
    name: 'Logo',
    description: 'Criação de logotipo profissional',
    price: 50,
    image: orbeLogo,
    type: 'addon',
  },
];

const STEPS = [
  { id: 'brief', title: 'Briefing rápido' },
  { id: 'conteudo', title: 'Conteúdo' },
  { id: 'entrega', title: 'Entrega' },
  { id: 'pagamento', title: 'Pagamento' },
];

const CHECKOUT_LABELS = {
  ideiaPronta: {
    sim: 'Sim',
    'mais ou menos': 'Mais ou menos',
    'preciso de ajuda': 'Preciso de ajuda',
  },
  objetivo: {
    vendas: 'Vender mais rapidamente',
    autoridade: 'Transmitir autoridade',
    captacao: 'Captar leads qualificados',
  },
  identidadeVisual: {
    sim: 'Sim',
    nao: 'Não',
    'em criacao': 'Em criação',
  },
  conteudoPronto: {
    sim: 'Sim',
    parcial: 'Parcial',
    nao: 'Não',
  },
  contato: {
    whatsapp: 'WhatsApp',
    email: 'E-mail',
    call: 'Reunião rápida',
  },
  pagamento: {
    pix: 'Pix',
    cartao: 'Cartão',
    boleto: 'Boleto',
  },
} as const;

const CheckoutPage = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
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

  const planKey = useMemo(() => {
    const plan = searchParams.get('plano');
    if (plan === 'essencial' || plan === 'profissional' || plan === 'pro') {
      return plan;
    }
    return 'profissional';
  }, [searchParams]);

  const orderItems = useMemo(() => {
    const planItem = PLANS[planKey];
    const addons = SUGGESTIONS.filter(item => selectedAddons.includes(item.id));
    return [planItem, ...addons];
  }, [planKey, selectedAddons]);

  const total = useMemo(() => orderItems.reduce((acc, item) => acc + item.price, 0), [orderItems]);
  const entrada = total * 0.5;

  const formatCurrency = (value: number) =>
    value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => (prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]));
  };

  const handleNext = () => {
    if (step < STEPS.length - 1) setStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(prev => prev - 1);
  };

  const whatsAppMessage = useMemo(() => {
    const plan = orderItems.find(item => item.type === 'plan');
    const addons = orderItems.filter(item => item.type === 'addon');
    const addonsText = addons.length
      ? addons.map(item => `- ${item.name}: R$ ${formatCurrency(item.price)}`).join('\n')
      : 'Nenhum adicional selecionado';

    const referenciasText = values.referencias.trim() || 'Não informado';
    const observacoesText = values.observacoes.trim() || 'Sem observações';

    return `*CHECKOUT ARABELLA*
*Resumo do pedido*
*Plano:* ${plan?.name ?? 'Plano selecionado'}
*Adicionais:*
${addonsText}
*Subtotal:* R$ ${formatCurrency(total)}
*Entrada (50%):* R$ ${formatCurrency(entrada)}
*Saldo na entrega:* R$ ${formatCurrency(entrada)}

*Briefing*
*Ideia pronta:* ${CHECKOUT_LABELS.ideiaPronta[values.ideiaPronta as keyof typeof CHECKOUT_LABELS.ideiaPronta]}
*Objetivo:* ${CHECKOUT_LABELS.objetivo[values.objetivo as keyof typeof CHECKOUT_LABELS.objetivo]}
*Identidade visual:* ${CHECKOUT_LABELS.identidadeVisual[values.identidadeVisual as keyof typeof CHECKOUT_LABELS.identidadeVisual]}
*Conteúdo pronto:* ${CHECKOUT_LABELS.conteudoPronto[values.conteudoPronto as keyof typeof CHECKOUT_LABELS.conteudoPronto]}
*Copywriting:* ${values.precisaCopy ? 'Sim' : 'Não'}
*Integração WhatsApp/Form:* ${values.integraWhats ? 'Sim' : 'Não'}
*Referências:* ${referenciasText}

*Entrega e contato*
*Prazo:* ${values.prazo} dias
*Canal de atualização:* ${CHECKOUT_LABELS.contato[values.contato as keyof typeof CHECKOUT_LABELS.contato]}

*Pagamento*
*Forma:* ${CHECKOUT_LABELS.pagamento[values.pagamento as keyof typeof CHECKOUT_LABELS.pagamento]}

*Observações*
_${observacoesText}_`;
  }, [orderItems, values, total, entrada]);

  const whatsAppUrl = useMemo(
    () => `https://wa.me/5584991926432?text=${encodeURIComponent(whatsAppMessage)}`,
    [whatsAppMessage]
  );

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
              {orderItems.map(item => (
                <article key={item.id} className="checkout-summary__item">
                  <img src={item.image} alt="" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="checkout-summary__item-footer">
                      <strong>R$ {formatCurrency(item.price)}</strong>
                      {item.type === 'addon' && (
                        <button
                          type="button"
                          className="checkout-item-action"
                          onClick={() => toggleAddon(item.id)}
                        >
                          Remover
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="checkout-summary__totals">
              <div>
                <span>Subtotal</span>
                <strong>R$ {formatCurrency(total)}</strong>
              </div>
              <div>
                <span>Pagamento inicial (50%)</span>
                <strong>R$ {formatCurrency(entrada)}</strong>
              </div>
              <div className="checkout-summary__highlight">
                <span>Saldo na entrega</span>
                <strong>R$ {formatCurrency(entrada)}</strong>
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
                  <div className="checkout-suggestion__actions">
                    <span className="checkout-suggestion__price">R$ {formatCurrency(item.price)}</span>
                    <button
                      type="button"
                      className={`checkout-suggestion__button ${
                        selectedAddons.includes(item.id) ? 'is-selected' : ''
                      }`}
                      onClick={() => toggleAddon(item.id)}
                    >
                      {selectedAddons.includes(item.id) ? 'Remover' : 'Adicionar'}
                    </button>
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
                  <strong>R$ {formatCurrency(entrada)}</strong>
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
                <a
                  className="button button--primary"
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Continuar no WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
