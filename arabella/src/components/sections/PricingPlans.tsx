import { CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

type Plan = {
  key: 'essencial' | 'profissional' | 'pro';
  badge: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  note: string;
  cta: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    key: 'essencial',
    badge: 'Entrada',
    name: 'Landing Page Essencial',
    price: 'R$ 490,90',
    description: 'Ideal para quem precisa marcar presença online de forma rápida.',
    features: [
      'Landing page com até 3 seções',
      'Estrutura flexível (ex: Home, Sobre, seção à escolha)',
      'Design moderno e responsivo',
      'Domínio incluso',
      'Hospedagem inclusa',
      'Site publicado e funcional',
    ],
    note: '50% de sinal não reembolsável após início do serviço.',
    cta: 'Contratar plano Essencial',
  },
  {
    key: 'profissional',
    badge: 'Mais vendido',
    name: 'Landing Page Profissional',
    price: 'R$ 690,90',
    description: 'O equilíbrio ideal entre conteúdo, design e conversão.',
    features: [
      'Landing page com até 5 seções',
      'Estrutura personalizada conforme o negócio',
      'Design profissional focado em conversão',
      'Domínio incluso',
      'Hospedagem inclusa',
      'Publicação e configuração completas',
    ],
    note: '50% de sinal não reembolsável após início do serviço.',
    cta: 'Escolher plano Profissional',
    featured: true,
  },
  {
    key: 'pro',
    badge: 'Completo',
    name: 'Landing Page + Página Extra',
    price: 'R$ 1.290,90',
    description: 'Para projetos que precisam ir além de uma única página.',
    features: [
      'Landing page com até 6 seções',
      'Página adicional (nova rota) com até 3 seções',
      'Estrutura avançada e organizada',
      'Design premium',
      'Domínio incluso',
      'Hospedagem inclusa',
      'Suporte pós-publicação',
    ],
    note: '50% de sinal não reembolsável após início do serviço.',
    cta: 'Contratar plano Pro',
  },
];

const buildPlanLink = (planKey: Plan['key']) => ({
  pathname: '/orcamentos',
  search: `?plano=${planKey}`,
});

const PricingPlans = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/60 to-white py-20 sm:py-24" aria-labelledby="pricing-heading">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-indigo-300/30 blur-[100px]" />
      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-purple-300/25 blur-[120px]" />
    </div>

    <div className="container relative space-y-12">
      <header className="mx-auto max-w-3xl text-center space-y-4">
        <p className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          Planos prontos
        </p>
        <div className="space-y-3">
          <h2 id="pricing-heading" className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Escolha o plano ideal para seu projeto
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Pacotes prontos que reduzem a fricção na compra e facilitam sua decisão. Todos incluem domínio e hospedagem.
          </p>
        </div>
      </header>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map(plan => (
          <article
            key={plan.key}
            className={`relative flex h-full flex-col rounded-3xl border bg-white/90 p-6 shadow-xl backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:shadow-2xl sm:p-7 ${
              plan.featured
                ? 'border-indigo-200/90 ring-2 ring-indigo-400/70 shadow-[0_18px_60px_rgba(99,102,241,0.22)]'
                : 'border-slate-100/90 shadow-[0_14px_40px_rgba(15,23,42,0.06)]'
            }`}
          >
            <div className="absolute inset-x-10 -top-4 flex justify-center">
              <span
                className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] shadow-md ${
                  plan.featured
                    ? 'bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                {plan.badge}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="space-y-1 text-center">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-slate-500">{plan.badge}</p>
                <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                <p className="text-3xl font-bold text-slate-900">{plan.price}</p>
                <p className="text-sm leading-relaxed text-slate-600">{plan.description}</p>
              </div>

              <ul className="space-y-3">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                    <span
                      className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border text-indigo-600 ${
                        plan.featured ? 'border-indigo-200 bg-indigo-50' : 'border-slate-200 bg-slate-50'
                      }`}
                      aria-hidden
                    >
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-center text-xs italic text-slate-500">{plan.note}</p>
            </div>

            <Link
              to={buildPlanLink(plan.key)}
              className={`mt-auto inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                plan.featured
                  ? 'bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-400/30 hover:brightness-105 focus-visible:outline-indigo-500'
                  : 'bg-slate-900 text-white hover:bg-slate-800 focus-visible:outline-slate-900'
              }`}
            >
              {plan.cta}
            </Link>
          </article>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-indigo-100 bg-white/90 px-6 py-6 text-center shadow-[0_10px_40px_rgba(99,102,241,0.08)] backdrop-blur sm:flex-row sm:px-8 sm:text-left">
        <div className="space-y-1">
          <p className="text-base font-semibold text-slate-900">Prefere algo totalmente personalizado?</p>
          <p className="text-sm text-slate-600">
            Podemos criar um orçamento sob medida e montar o escopo perfeito para o que você precisa.
          </p>
        </div>
        <Link
          to="/orcamentos"
          className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          Fazer orçamento sob medida
        </Link>
      </div>
    </div>
  </section>
);

export default PricingPlans;
