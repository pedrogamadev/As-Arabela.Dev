import { Check, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
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

const noisePattern =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.25'/%3E%3C/svg%3E";

const splitPrice = (price: string) => {
  const [currency, ...rest] = price.split(' ');
  return { currency, amount: rest.join(' ') };
};

const PricingPlans = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setHasRevealed(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setHasRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-indigo-50/50 to-white py-20 sm:py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[url('/imagens/desing-gemini.png')] bg-cover bg-center opacity-70" />
        <div className="absolute -left-12 top-10 h-72 w-72 rounded-full bg-indigo-300/25 blur-[120px]" />
        <div className="absolute -right-16 top-32 h-64 w-64 rounded-full bg-purple-400/20 blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.09),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(124,58,237,0.1),transparent_40%)]" />
        <div
          className="absolute inset-0 opacity-[0.14] mix-blend-multiply"
          style={{ backgroundImage: `url(${noisePattern})` }}
        />
      </div>

      <div className="container relative space-y-12">
        <header
          className={`mx-auto max-w-3xl space-y-4 text-center transition duration-700 ease-out ${
            hasRevealed ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-indigo-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700 shadow-sm ring-1 ring-indigo-200/70">
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
          {plans.map((plan, index) => {
            const { currency, amount } = splitPrice(plan.price);

            return (
              <article
                key={plan.key}
                style={{ transitionDelay: hasRevealed ? `${index * 120}ms` : '0ms' }}
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white/80 p-6 shadow-xl backdrop-blur-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(79,70,229,0.12)] sm:p-7 ${
                  hasRevealed ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                } ${
                  plan.featured
                    ? 'border-indigo-200/80 ring-2 ring-indigo-400/70 shadow-[0_22px_70px_rgba(99,102,241,0.2)] bg-gradient-to-b from-white via-indigo-50/70 to-white'
                    : 'border-slate-100/80 shadow-[0_14px_50px_rgba(15,23,42,0.07)]'
                } hover:border-indigo-200/80 hover:ring-2 hover:ring-indigo-200/80`}
              >
                <div className="absolute inset-x-10 -top-4 flex justify-center">
                  <span
                    className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] shadow-md ring-1 ring-indigo-100/70 ${
                      plan.featured
                        ? 'bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white animate-[pulse_3.8s_ease-in-out_infinite]'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <div className="mt-7 space-y-5">
                  <div className="space-y-2 text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.12em] text-slate-500">{plan.badge}</p>
                    <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                    <div className="flex flex-col items-center gap-1">
                      <p className="flex items-end gap-1 text-slate-900">
                        <span className="text-lg font-semibold uppercase tracking-[0.14em] text-indigo-800/80">{currency}</span>
                        <span className="text-4xl font-black leading-none sm:text-[2.6rem]">{amount}</span>
                      </p>
                      <span className="text-xs uppercase tracking-[0.12em] text-indigo-700/70">pagamento único</span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-3.5">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-start gap-3.5 text-sm text-slate-700">
                        <span
                          className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded-full text-indigo-700 ${
                            plan.featured
                              ? 'bg-indigo-50 ring-1 ring-indigo-100'
                              : 'bg-slate-50 ring-1 ring-slate-200'
                          }`}
                          aria-hidden
                        >
                          <Check className="h-4 w-4" />
                        </span>
                        <span className="leading-relaxed">{feature}</span>
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
                      : 'bg-slate-900 text-white shadow-md shadow-slate-900/20 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-slate-900'
                  }`}
                >
                  {plan.cta}
                </Link>
              </article>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-indigo-100/80 bg-white/85 p-[1px] shadow-[0_12px_60px_rgba(99,102,241,0.12)] backdrop-blur">
          <div className="flex w-full flex-col items-center justify-between gap-4 rounded-[1rem] bg-white/95 px-6 py-6 sm:flex-row sm:px-8 sm:text-left">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-base font-semibold text-slate-900">Prefere algo totalmente personalizado?</p>
              <p className="text-sm text-slate-600">
                Podemos criar um orçamento sob medida e montar o escopo perfeito para o que você precisa.
              </p>
            </div>
            <Link
              to="/orcamentos"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              Fazer orçamento sob medida
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
