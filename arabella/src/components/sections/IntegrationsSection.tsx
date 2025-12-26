import { Link } from 'react-router-dom';
import {
  Megaphone,
  MessageCircle,
  MessageSquareText,
  PhoneCall,
  MapPin,
  Youtube,
  ShoppingCart,
} from 'lucide-react';

const journey = [
  {
    title: 'Descoberta',
    description: 'Conteúdo',
    icons: [{ Icon: Megaphone, label: 'Conteúdo' }],
  },
  {
    title: 'Contato',
    description: 'WhatsApp • Mensagem pronta • Ligação',
    icons: [
      { Icon: MessageCircle, label: 'WhatsApp' },
      { Icon: MessageSquareText, label: 'Mensagem pronta' },
      { Icon: PhoneCall, label: 'Ligação' },
    ],
  },
  {
    title: 'Confiança',
    description: 'Google Maps • YouTube',
    icons: [
      { Icon: MapPin, label: 'Google Maps' },
      { Icon: Youtube, label: 'YouTube' },
    ],
  },
  {
    title: 'Venda',
    description: 'Pedido via WhatsApp',
    icons: [{ Icon: ShoppingCart, label: 'Pedido via WhatsApp' }],
  },
] as const;

const IntegrationsSection = () => (
  <section
    id="integracoes-preview"
    className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/40 to-white py-20 sm:py-24"
    aria-labelledby="integracoes-heading"
  >
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-8 top-16 h-56 w-56 rounded-full bg-indigo-300/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-fuchsia-200/25 blur-[120px]" />
    </div>

    <div className="container relative space-y-12">
      <header className="section-heading text-center space-y-4">
        <p className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 shadow-sm ring-1 ring-emerald-200/70">
          Integrar pra converter
        </p>
        <div className="space-y-3">
          <h2 id="integracoes-heading">Integrações prontas para conversão</h2>
          <p className="text-base leading-relaxed text-slate-600">A jornada do seu cliente:</p>
        </div>
      </header>

      <div className="relative">
        <div className="group relative overflow-hidden rounded-[2.2rem] border border-indigo-100/60 bg-white/80 px-6 py-10 shadow-[0_18px_60px_rgba(79,70,229,0.12)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(79,70,229,0.18)] sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] bg-gradient-to-br from-white/60 via-indigo-50/35 to-white/40 opacity-90" />

          {/* Desktop timeline */}
          <div className="relative hidden md:grid md:grid-cols-4 md:gap-10">
            <div className="pointer-events-none absolute top-[3.6rem] left-[5%] right-[5%] h-px border-t border-dashed border-indigo-200/80" />
            {journey.map(({ title, description, icons }, index) => (
              <div key={title} className="relative flex flex-col items-center gap-4 text-center">
                <span
                  className="flex h-4 w-4 items-center justify-center rounded-full border border-indigo-300 bg-white text-xs text-indigo-500 shadow-sm transition duration-300 group-hover:bg-indigo-500 group-hover:text-white"
                  aria-hidden
                >
                  •
                </span>
                <div className="flex flex-wrap items-center justify-center gap-3 text-indigo-600">
                  {icons.map(({ Icon, label }) => (
                    <span
                      key={label}
                      className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
                    >
                      <Icon className="h-5 w-5" aria-hidden />
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
                    {icons.map(({ Icon, label }) => (
                      <span
                        key={label}
                        className="flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
                      >
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4 text-center">
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
      </div>
    </div>
  </section>
);

export default IntegrationsSection;

