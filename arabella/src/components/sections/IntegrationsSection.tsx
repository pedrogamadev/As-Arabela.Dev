import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { Megaphone, MessageSquareText, PhoneCall, ShoppingCart } from 'lucide-react';
import Reveal from '../motion/Reveal';

type JourneyIcon =
  | {
      kind: 'icon';
      label: string;
      Icon: LucideIcon;
    }
  | {
      kind: 'image';
      label: string;
      src: string;
    };

type JourneyStep = {
  title: string;
  description: string;
  icons: JourneyIcon[];
};

const journey: JourneyStep[] = [
  {
    title: 'Descoberta',
    description: 'Conteúdo',
    icons: [{ kind: 'icon', Icon: Megaphone, label: 'Conteúdo' }],
  },
  {
    title: 'Contato',
    description: 'WhatsApp • Mensagem pronta • Ligação',
    icons: [
      { kind: 'image', src: '/imagens/icons/whatsapp.png', label: 'WhatsApp' },
      { kind: 'icon', Icon: MessageSquareText, label: 'Mensagem pronta' },
      { kind: 'icon', Icon: PhoneCall, label: 'Ligação' },
    ],
  },
  {
    title: 'Confiança',
    description: 'Google Maps • YouTube',
    icons: [
      { kind: 'image', src: '/imagens/icons/maps.png', label: 'Google Maps' },
      { kind: 'image', src: '/imagens/icons/youtube.png', label: 'YouTube' },
    ],
  },
  {
    title: 'Venda',
    description: 'Pedido feito em diferentes plataformas',
    icons: [
      { kind: 'icon', Icon: ShoppingCart, label: 'Carrinho' },
      { kind: 'image', src: '/imagens/icons/hotmart.png', label: 'Hotmart' },
      { kind: 'image', src: '/imagens/icons/kiwify.png', label: 'Kiwify' },
    ],
  },
];

const IntegrationsSection = () => (
  <section
    id="integracoes-preview"
    className="relative overflow-hidden bg-[url('/imagens/fundo-integracoes.png')] bg-cover bg-center bg-no-repeat py-20 sm:py-24"
    aria-labelledby="integracoes-heading"
  >
    <div className="container relative space-y-12">
      <Reveal>
        <header className="section-heading text-center space-y-4">
          <p className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 shadow-sm ring-1 ring-emerald-200/70">
            Integrar pra converter
          </p>
          <div className="space-y-3">
            <h2 id="integracoes-heading">Integrações prontas para conversão</h2>
            <p className="text-base leading-relaxed text-slate-600">A jornada do seu cliente:</p>
          </div>
        </header>
      </Reveal>

      <Reveal className="relative" delay={0.1} scale={0.98}>
        <div className="group relative overflow-hidden rounded-[2.2rem] border border-indigo-100/60 bg-white/80 px-6 py-10 shadow-[0_18px_60px_rgba(79,70,229,0.12)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(79,70,229,0.18)] sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] bg-gradient-to-br from-white/60 via-indigo-50/35 to-white/40 opacity-90" />

          {/* Desktop timeline */}
          <div className="relative hidden md:grid md:grid-cols-4 md:gap-10">
            <div className="pointer-events-none absolute top-[3.6rem] left-[5%] right-[5%] h-px border-t border-dashed border-indigo-200/80" />
            {journey.map(({ title, description, icons }, index) => (
              <Reveal key={title} delay={index * 0.12} distance={24}>
                <div className="relative flex flex-col items-center gap-4 text-center">
                  <span
                    className="flex h-4 w-4 items-center justify-center rounded-full border border-indigo-300 bg-white text-xs text-indigo-500 shadow-sm transition duration-300 group-hover:bg-indigo-500 group-hover:text-white"
                    aria-hidden
                  >
                    •
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-indigo-600">
                    {icons.map(icon => (
                      <span
                        key={icon.label}
                        className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100 transition duration-300 hover:-translate-y-1 hover:bg-indigo-100"
                      >
                        {icon.kind === 'icon' ? (
                          <icon.Icon className="h-5 w-5" aria-hidden />
                        ) : (
                          <img className="h-5 w-5 object-contain" src={icon.src} alt={icon.label} />
                        )}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{title}</p>
                    <p className="text-sm text-slate-600">{description}</p>
                  </div>
                  {index !== journey.length - 1 && (
                    <div className="pointer-events-none absolute top-[3.8rem] right-[-1.25rem] hidden h-px w-[calc(100%+2.5rem)] border-t border-dashed border-indigo-200/80 md:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Mobile timeline */}
          <div className="relative space-y-6 md:hidden">
            <div className="pointer-events-none absolute left-5 top-1 bottom-1 border-l border-dashed border-indigo-200/80" />
            {journey.map(({ title, description, icons }) => (
              <div key={title} className="relative flex items-start gap-4">
                <span
                  className="relative mt-2 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-indigo-300 bg-white text-xs text-indigo-600 shadow-sm transition duration-300 group-hover:bg-indigo-500 group-hover:text-white"
                  aria-hidden
                >
                  •
                </span>
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{title}</p>
                  <div className="flex flex-wrap items-center gap-3 text-indigo-600">
                    {icons.map(icon => (
                      <span
                        key={icon.label}
                        className="flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
                      >
                        {icon.kind === 'icon' ? (
                          <icon.Icon className="h-4 w-4" aria-hidden />
                        ) : (
                          <img className="h-4 w-4 object-contain" src={icon.src} alt={icon.label} />
                        )}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="space-y-4 text-center" delay={0.1}>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
          Veja todas as integrações disponíveis
        </p>
        <div className="flex justify-center">
          <Link
            to="/integracoes"
            className="button button--primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] shadow-[0_22px_70px_rgba(79,70,229,0.22)] transition hover:shadow-[0_28px_80px_rgba(79,70,229,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Ver integrações
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default IntegrationsSection;
