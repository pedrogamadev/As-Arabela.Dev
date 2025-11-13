import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Calculator,
  CheckCircle2,
  Coins,
  Globe2,
  Info,
  PiggyBank,
  ReceiptText,
  Rocket,
  Share2,
  Sparkles,
  Timer,
  TrendingUp,
} from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { cn } from '../lib/utils';
import AppleWindow from './AppleWindow';
import ThreeSteps from './ThreeSteps';
import type { Step } from './three-steps.types';

const randomBetween = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

type ProgressItem = {
  label: string;
  tag: string;
  value: number;
};

const StepOnePanel = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [estimate, setEstimate] = useState(() => randomBetween(3200, 5600));
  const [progressValues, setProgressValues] = useState<ProgressItem[]>([
    { label: 'Tipografia', tag: 'Serif', value: 48 },
    { label: 'Espaçamentos', tag: 'Comfort', value: 72 },
  ]);
  const intervalRef = useRef<number | undefined>();
  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 0,
      }),
    [],
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const tick = () => {
      setEstimate(randomBetween(3050, 5850));
      setProgressValues(prev =>
        prev.map(item => ({
          ...item,
          value: clamp(item.value + randomBetween(-14, 18), 28, 92),
        })),
      );
    };

    tick();
    intervalRef.current = window.setInterval(tick, 2600);

    return () => window.clearInterval(intervalRef.current);
  }, [prefersReducedMotion]);

  const budgetIcons = [
    { icon: PiggyBank, label: 'Economia' },
    { icon: Calculator, label: 'Cálculo' },
    { icon: Coins, label: 'Investimento' },
    { icon: TrendingUp, label: 'Performance' },
  ] as const;

  return (
    <div className="relative flex h-full flex-col justify-between gap-5 text-slate-100">
      <div className="grid grid-cols-4 gap-3">
        {budgetIcons.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/80 via-indigo-400/70 to-sky-400/80 text-white shadow-[0_18px_38px_rgba(15,23,42,0.45)]"
            aria-hidden
          >
            <Icon className="h-5 w-5" />
          </span>
        ))}
      </div>

      <div className="space-y-3">
        {progressValues.map(item => (
          <div key={item.label} className="space-y-2">
            <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.25em] text-slate-300">
              <span>{item.label}</span>
              <span>{item.tag}</span>
            </div>
            <div className="relative h-2.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-400 transition-[width] duration-700 ease-out"
                style={{ width: `${item.value}%` }}
              />
              <span
                className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-white/60 bg-white/90 shadow-[0_8px_22px_rgba(14,22,45,0.35)] transition-[left] duration-700 ease-out"
                style={{ left: `${item.value}%`, transform: 'translate(-50%, -50%)' }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/92 px-4 py-1.5 text-sm font-semibold text-slate-900 shadow-[0_18px_38px_rgba(15,23,42,0.35)]">
          <Sparkles className="h-3.5 w-3.5 text-indigo-500" aria-hidden />
          Orçamento estimado
          <strong className="font-semibold text-slate-950">{currencyFormatter.format(estimate)}</strong>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-slate-200">
          <Timer className="h-3 w-3" aria-hidden />
          Atualizando
        </span>
      </div>
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

const StepThreePanel = () => {
  const checklistItems = [
    {
      label: 'Domínio conectado',
      description: 'SSL ativo, DNS propagado e domínio verificado.',
      icon: Globe2,
      done: true,
    },
    {
      label: 'SEO & pixels configurados',
      description: 'Meta tags, Analytics e Meta Pixel funcionando.',
      icon: Sparkles,
      done: true,
    },
    {
      label: 'Testes de captura',
      description: 'Formulários, automações e follow-up validado.',
      icon: CheckCircle2,
      done: true,
    },
    {
      label: 'Links de divulgação',
      description: 'Prévia otimizada para redes, e-mail e anúncios.',
      icon: Share2,
      done: false,
    },
  ] as const;

  const completed = checklistItems.filter(item => item.done).length;
  const progress = Math.round((completed / checklistItems.length) * 100);

  return (
    <div className="flex h-full flex-col gap-4 text-slate-100">
      <div className="rounded-2xl border border-white/12 bg-gradient-to-br from-slate-900/85 via-indigo-950/75 to-blue-900/70 p-4 shadow-[0_24px_60px_rgba(9,12,32,0.62)]">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-300">Checklist de publicação</p>
            <h3 className="mt-2 text-lg font-semibold text-white">Pronto para lançar?</h3>
          </div>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100">
            {completed}/{checklistItems.length} concluídos
          </span>
        </header>

        <div className="mt-4 flex items-center gap-3 text-xs text-slate-300">
          <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/10">
            <span
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-semibold text-indigo-200">{progress}%</span>
        </div>

        <div className="mt-4 space-y-2.5">
          {checklistItems.map(({ label, description, icon: Icon, done }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5 shadow-inner shadow-black/30"
            >
              <span
                className={cn(
                  'mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/30 via-indigo-500/20 to-sky-400/40 text-white shadow-[0_10px_22px_rgba(15,23,42,0.35)]',
                  done ? 'opacity-100' : 'opacity-70',
                )}
              >
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <span
                    className={cn(
                      'text-xs font-semibold uppercase tracking-[0.26em]',
                      done ? 'text-emerald-300' : 'text-slate-400',
                    )}
                  >
                    {done ? 'feito' : 'pendente'}
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/8 p-4 text-slate-100 shadow-inner shadow-black/40">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-300">Próximo passo</p>
            <p className="mt-1 text-sm font-semibold text-white">Finalizar kit de divulgação</p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 px-4 py-2 text-xs font-semibold text-white shadow-[0_18px_40px_rgba(56,116,255,0.26)] transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <Rocket className="h-4 w-4" aria-hidden />
            Go live
          </button>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-slate-200">
          Ajuste a prévia social, gere o link curto e programe os disparos. Todos os itens ficam salvos neste checklist.
        </div>
      </div>
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
            <h1 id="automatize-hero-title" className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Seu site em 3 passos.
            </h1>
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


