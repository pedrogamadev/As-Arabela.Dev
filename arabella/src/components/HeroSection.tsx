import { useMemo, useState } from 'react';
import { CheckCircle2, ClipboardCheck, Headphones, Info, Palette, ReceiptText, Rocket, Timer } from 'lucide-react';
import AppleWindow from './AppleWindow';
import ThreeSteps from './ThreeSteps';
import type { Step } from './three-steps.types';

const StepOnePanel = () => {
  const cards = [
    {
      icon: ClipboardCheck,
      title: '1° - Checklist rápido',
      description: 'Responda às perguntas e veja uma faixa de preço na hora.',
    },
    {
      icon: Headphones,
      title: '2° - Alinhamento conosco',
      description: 'Falamos com você no mesmo dia para ajustar tudo.',
    },
    {
      icon: Palette,
      title: '3° - 3 ideias de layout',
      description: 'Você recebe até 3 propostas de design sem pagar nada.',
    },
    {
      icon: CheckCircle2,
      title: '4° - Aprovação',
      description: 'Só segue se você gostar.\nNada é cobrado até aqui.',
    },
  ] as const;

  return (
    <div className="flex h-full flex-col text-slate-100">
      <section aria-label="Passo a passo gratuito" className="flex h-full w-full">
        <div className="grid h-full w-full grid-cols-1 grid-rows-4 gap-2.5 sm:grid-cols-2 sm:grid-rows-2 sm:gap-3">
          {cards.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group flex h-[150px] flex-col gap-1.5 rounded-2xl border border-white/10 bg-white/5 px-3 pb-3 pt-3.5 text-left shadow-[0_15px_38px_rgba(2,6,23,0.5)] transition hover:border-indigo-300/60 hover:bg-white/10 sm:px-3.5 sm:pb-3.5 sm:pt-4"
            >
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/50 via-blue-500/40 to-sky-400/40 text-white sm:h-10 sm:w-10"
                role="img"
                aria-label={title}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
              </span>
              <h3 className="text-sm font-semibold text-white sm:text-base">{title}</h3>
              <p className="whitespace-pre-line text-[11px] leading-relaxed text-slate-200 sm:text-xs sm:leading-relaxed md:text-sm md:leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

const StepTwoPanel = () => {
  const lineItems = [
    { label: 'Domínio', price: 'R$ 120/ano', ratio: 24 },
    { label: 'Hospedagem', price: 'R$ 35/mês', ratio: 18 },
    { label: 'Desenvolvimento', price: 'R$ 3.200', ratio: 82 },
    { label: 'Suporte', price: 'R$ 220/mês', ratio: 40 },
  ];

  return (
    <div className="flex h-full flex-col justify-between gap-5 text-slate-100">
      <div className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow-inner shadow-black/40 backdrop-blur-sm">
        <header className="flex items-center justify-between pb-3">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
            <ReceiptText className="h-4 w-4 text-indigo-200" aria-hidden />
            Breakdown transparente
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-indigo-200">
            Quiz ativo
          </span>
        </header>
        <div className="space-y-3">
          {lineItems.map(item => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 via-indigo-500/30 to-sky-400/40 text-indigo-200">
                <Info className="h-4 w-4" aria-hidden />
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between text-sm font-medium">
                  <span className="text-slate-100">{item.label}</span>
                  <span className="text-slate-50">{item.price}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/12">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-blue-400 to-sky-300"
                    style={{ width: `${item.ratio}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[11px] uppercase tracking-[0.32em] text-slate-300">
        Valores ajustados pelo quiz — nada escondido.
      </p>
    </div>
  );
};

const STEPS: Step[] = [
  {
    id: 'orcamento-design',
    title: 'Orçamento instantâneo + design',
    description: 'Quiz rápido gera média imediata e 3 ideias visuais para validar.',
    note: 'Avance só quando curtir o resultado.',
    icon: Timer,
    panel: () => <StepOnePanel />,
  },
  {
    id: 'transparencia-total',
    title: 'Custos transparentes',
    description: 'Visualize domínio, hospedagem, desenvolvimento e suporte separados.',
    icon: ReceiptText,
    panel: () => <StepTwoPanel />,
  },
  {
    id: 'publicacao-compartilhamento',
    title: 'Publicação e divulgação',
    description: 'Checklist guiado garante domínio, performance e links prontos.',
    icon: Rocket,
    panel: () => null,
  },
];

const HeroSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const getTabId = (id: string) => `${id}-tab`;
  const getPanelId = (id: string) => `${id}-panel`;
  const step = useMemo(() => STEPS[activeStep], [activeStep]);
  const headingId = 'automatize-hero-title';

  return (
    <section
      id="automatize"
      aria-labelledby={headingId}
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-24 sm:py-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.22),transparent_60%)]" />
        <div className="absolute -top-32 right-16 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 left-12 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" aria-hidden />
      </div>

      <div className="container relative">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <AppleWindow
            className="order-1 place-self-center lg:col-start-1 lg:row-span-2 lg:place-self-center"
            step={step}
            tabId={getTabId(step.id)}
            panelId={getPanelId(step.id)}
          />

          <ThreeSteps
            title="Seu site em 3 passos"
            description="Veja como é simples:"
            titleId={headingId}
            className="order-2 lg:col-start-2 lg:row-span-2"
            steps={STEPS}
            activeStep={activeStep}
            onStepChange={setActiveStep}
            getTabId={getTabId}
            getPanelId={getPanelId}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


