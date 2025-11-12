import { useMemo, useState } from 'react';
import {
  Info,
  ReceiptText,
  Rocket,
  Share2,
  Timer,
} from 'lucide-react';
import AppleWindow from './AppleWindow';
import ThreeSteps from './ThreeSteps';
import type { Step } from './three-steps.types';

const StepOnePanel = () => (
  <div className="relative flex flex-col gap-6 text-slate-100">
    <div className="grid grid-cols-4 gap-3">
      <span className="aspect-square rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-400/80 shadow-inner shadow-black/30" />
      <span className="aspect-square rounded-xl bg-gradient-to-br from-blue-500 to-sky-400/80 shadow-inner shadow-black/30" />
      <span className="aspect-square rounded-xl bg-gradient-to-br from-emerald-400 to-teal-300 shadow-inner shadow-black/30" />
      <span className="aspect-square rounded-xl bg-gradient-to-br from-slate-200 to-slate-50 shadow-inner shadow-black/20" />
    </div>

    <div className="space-y-3">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
          <span>Tipografia</span>
          <span>Serif</span>
        </div>
        <div className="relative h-2 rounded-full bg-white/20">
          <span className="absolute left-[45%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_6px_18px_rgba(15,23,42,0.35)]" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
          <span>Espaçamentos</span>
          <span>Comfort</span>
        </div>
        <div className="relative h-2 rounded-full bg-white/20">
          <span className="absolute left-[70%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_6px_18px_rgba(15,23,42,0.35)]" />
        </div>
      </div>
    </div>

    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(15,23,42,0.35)]">
        Orçamento estimado: R$ 2.500–5.000
      </span>
      <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-200">
        3 inspirações grátis
      </span>
    </div>
  </div>
);

const StepTwoPanel = () => (
  <div className="flex flex-col gap-5 text-slate-100">
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-3 px-5 py-4 text-sm sm:px-6 sm:py-5">
        {[
          { label: 'Domínio', price: 'R$ 120/ano' },
          { label: 'Hospedagem', price: 'R$ 35/mês' },
          { label: 'Desenvolvimento', price: 'R$ 3.200' },
          { label: 'Suporte/Manutenção', price: 'R$ 220/mês' },
        ].map(item => (
          <div key={item.label} className="contents">
            <Info className="h-4 w-4 text-indigo-200" aria-hidden />
            <span className="text-slate-100">{item.label}</span>
            <span className="justify-self-end font-semibold text-slate-50">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
    <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
      Valores ajustados pelo seu quiz. Nada escondido.
    </p>
  </div>
);

const StepThreePanel = () => (
  <div className="grid gap-6 text-slate-100">
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_24px_60px_rgba(56,116,255,0.32)] transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      >
        Publicar
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        <Share2 className="h-4 w-4" aria-hidden />
        Compartilhar link
      </button>
    </div>

    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/8 p-4 shadow-inner shadow-black/30">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 text-white">
          A'
        </span>
        <div>
          <p className="font-semibold text-white">Arabella.Dev — Landing page moderna</p>
          <p className="text-sm text-slate-200/80">Design aprovado, pronto para divulgar.</p>
        </div>
      </div>
      <div className="mt-4 h-20 rounded-xl bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-indigo-900/20" />
    </div>
  </div>
);

const STEPS: Step[] = [
  {
    id: 'orcamento-design',
    title: 'Orçamento na hora + design gratuito',
    description:
      'Responda um quiz e receba uma média de valor agora. Enviamos até 3 inspirações de layout grátis para validar sua ideia.',
    note: 'Sem compromisso. Você só avança se gostar.',
    icon: Timer,
    panel: () => <StepOnePanel />,
  },
  {
    id: 'transparencia-total',
    title: 'Transparência total de custos',
    description:
      'Mostramos quanto é domínio, hospedagem, desenvolvimento e manutenção — item a item, sem letras miúdas.',
    icon: ReceiptText,
    panel: () => <StepTwoPanel />,
  },
  {
    id: 'publicacao-compartilhamento',
    title: 'Publicação e compartilhamento',
    description:
      'Site pronto para indexação e com links de compartilhamento. Você sai preparado para divulgar.',
    icon: Rocket,
    panel: ({ isActive }) => <StepThreePanel key={isActive ? 'active' : 'inactive'} />,
  },
];

const HeroSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const getTabId = (id: string) => `${id}-tab`;
  const getPanelId = (id: string) => `${id}-panel`;
  const step = useMemo(() => STEPS[activeStep], [activeStep]);

  return (
    <section
      id="automatize"
      aria-labelledby="automatize-hero-title"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-24 sm:py-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.22),transparent_60%)]" />
        <div className="absolute -top-32 right-16 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 left-12 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" aria-hidden />
      </div>

      <div className="container relative">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <header className="order-1 max-w-xl lg:col-start-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
              Landing pages sob medida
            </span>
            <h1 id="automatize-hero-title" className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Seu site em 3 passos.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Orçamento na hora, design gratuito para validar e publicação rápida — tudo com preços 100% transparentes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_24px_60px_rgba(56,116,255,0.26)] transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-500"
                href="https://wa.me/84991926432?text=olá,+gostaria+de+fazer+um+orçamento"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fazer orçamento agora
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-indigo-500/30 bg-white/80 px-6 py-3 text-sm font-semibold text-indigo-600 shadow-[0_18px_38px_rgba(79,70,229,0.12)] transition-all hover:border-indigo-500/50 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                href="#cases"
              >
                Ver exemplos de design
              </a>
            </div>
          </header>

          <AppleWindow
            className="order-2 lg:col-start-1 lg:row-span-2"
            step={step}
            tabId={getTabId(step.id)}
            panelId={getPanelId(step.id)}
          />

          <ThreeSteps
            className="order-3 lg:col-start-2 lg:row-start-2"
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


