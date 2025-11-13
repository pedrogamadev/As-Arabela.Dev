import { useEffect, useMemo, useState } from 'react';
import {
  CheckCircle2,
  ClipboardCheck,
  Globe,
  Headphones,
  Info,
  Palette,
  ReceiptText,
  Rocket,
  Send,
  Share2,
  Timer,
} from 'lucide-react';
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

const StepThreePanel = ({ isActive }: { isActive: boolean }) => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const domain = {
    url: 'https://estudioaria.com.br',
    goLive: 'Publicado às 08h12',
    status: 'SSL ativo',
  } as const;
  const shareLinks = [
    {
      label: 'Instagram Bio',
      url: 'https://estudioaria.com.br?utm_source=instagram&utm_medium=bio&utm_campaign=lancamento',
    },
    {
      label: 'Lista VIP',
      url: 'https://estudioaria.com.br?utm_source=email&utm_medium=crm&utm_campaign=go-live',
    },
  ] as const;
  const kitItems = [
    { label: 'Stories animados', format: 'MP4', size: '4.1 MB' },
    { label: 'Card feed + copy', format: 'PNG + DOC', size: '3.6 MB' },
  ] as const;

  useEffect(() => {
    if (!isActive && copiedLink) {
      setCopiedLink(null);
    }
  }, [copiedLink, isActive]);

  useEffect(() => {
    if (!copiedLink) {
      return;
    }
    const timeout = window.setTimeout(() => setCopiedLink(null), 2400);
    return () => window.clearTimeout(timeout);
  }, [copiedLink]);

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard?.writeText(value);
    } catch (error) {
      console.error(error);
    } finally {
      setCopiedLink(value);
    }
  };

  return (
    <div className="flex h-full flex-col gap-4 text-slate-100 sm:gap-5">
      <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/40 p-4 shadow-inner shadow-black/40">
        <header className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-200">
              <Globe className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-white">Go-live do domínio</h3>
              <p className="text-xs text-slate-300">{domain.goLive}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
            Online
          </span>
        </header>
        <div className="mt-4 space-y-3 text-sm">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-[0.32em] text-slate-400">Domínio</span>
            <span className="truncate rounded-xl border border-white/10 bg-white/5 px-3 py-2 font-mono text-sm text-slate-50">
              {domain.url}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-indigo-200">
              {domain.status}
            </span>
            <button
              type="button"
              onClick={() => handleCopy(domain.url)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition hover:border-white/40"
            >
              Copiar link
            </button>
          </div>
        </div>
      </article>

      <div className="space-y-2 rounded-2xl bg-transparent p-1 text-sm text-slate-200">
        <p className="font-semibold text-white">
          Seu site está 100% pronto para receber visitantes, gerar oportunidades e dar vida ao seu negócio.
        </p>
        <p className="text-slate-300">
          Agora ele trabalha por você 24h por dia: atraindo, convertendo e fortalecendo a sua marca.
        </p>
      </div>

      <article className="flex flex-1 flex-col rounded-2xl border border-white/10 bg-white/5 p-4">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-white">Kit de divulgação</h3>
            <p className="text-xs text-slate-300">Links com UTM e materiais prontos.</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-200">
            Kit pronto
          </span>
        </header>
        <div className="mt-4 space-y-3">
          <div className="space-y-2">
            {shareLinks.map(link => (
              <div
                key={link.label}
                className="rounded-2xl border border-white/10 bg-[#05060f]/50 p-3 text-xs text-slate-200"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-semibold text-white">{link.label}</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(link.url)}
                    className="inline-flex items-center gap-1 rounded-full border border-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-white transition hover:border-white/40"
                  >
                    Copiar link
                  </button>
                </div>
                <p className="mt-1 break-all font-mono text-[11px] text-slate-300">{link.url}</p>
                {copiedLink === link.url && (
                  <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-200">
                    <Share2 className="h-3.5 w-3.5" aria-hidden /> Link copiado
                  </span>
                )}
              </div>
            ))}
          </div>
          <ul className="space-y-2 text-xs text-slate-200">
            {kitItems.map(item => (
              <li key={item.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <span className="font-medium text-white">{item.label}</span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                  {item.format} · {item.size}
                </span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-sky-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition hover:brightness-110"
          >
            <Send className="h-4 w-4" aria-hidden />
            Enviar kit
          </button>
        </div>
      </article>
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
    panel: ({ isActive }) => <StepThreePanel isActive={isActive} />,
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


