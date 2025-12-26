import { Link } from 'react-router-dom';
import {
  MessageCircle,
  MessageSquareText,
  PhoneCall,
  MapPin,
  Youtube,
  ShoppingCart,
} from 'lucide-react';

const integrations = [
  {
    title: 'WhatsApp',
    description: 'Clique para conversar imediatamente com sua equipe.',
    Icon: MessageCircle,
  },
  {
    title: 'Mensagem pronta',
    description: 'Envie textos pré-preenchidos com link wa.me + CTA.',
    Icon: MessageSquareText,
  },
  {
    title: 'Botão de ligação',
    description: 'Permita chamadas diretas com um toque no celular.',
    Icon: PhoneCall,
  },
  {
    title: 'Google Maps',
    description: 'Mostre localização e gere confiança rapidamente.',
    Icon: MapPin,
  },
  {
    title: 'YouTube',
    description: 'Embeds responsivos para vídeos e depoimentos.',
    Icon: Youtube,
  },
  {
    title: 'Pedido via WhatsApp',
    description: 'Carrinho simples que envia o pedido completo.',
    Icon: ShoppingCart,
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
      <header className="section-heading text-center">
        <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 shadow-sm ring-1 ring-emerald-200/70">
          Integrar pra converter
        </p>
        <h2 id="integracoes-heading">Integrações prontas para conversão</h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
          Conecte contatos, conteúdo e vendas usando integrações rápidas que deixam seu visitante a um clique de falar com você.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {integrations.map(({ title, description, Icon }) => (
          <article
            key={title}
            className="group flex h-full flex-col rounded-2xl border border-white/60 bg-white/90 p-6 shadow-[0_18px_55px_rgba(79,70,229,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(79,70,229,0.15)]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 ring-1 ring-indigo-200">
              <Icon className="h-6 w-6" aria-hidden />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
          </article>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          to="/integracoes"
          className="button button--primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em]"
        >
          Ver integrações
        </Link>
      </div>
    </div>
  </section>
);

export default IntegrationsSection;

