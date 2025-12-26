import { Link } from 'react-router-dom';
import WhatsAppLinkBuilder from '../components/integrations/WhatsAppLinkBuilder';
import WhatsAppCartDemo from '../components/integrations/WhatsAppCartDemo';

const IntegrationsPage = () => (
  <div className="bg-gradient-to-b from-white via-indigo-50/40 to-white pb-16">
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-12 top-8 h-64 w-64 rounded-full bg-indigo-200/40 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-200/30 blur-[160px]" />
      </div>
      <div className="container relative space-y-6 text-center">
        <p className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700 shadow-sm ring-1 ring-indigo-200/80">
          Stack pronta para conversão
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Integrações que aceleram a conversa e geram confiança
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
          Veja demos reais de como usamos WhatsApp, botão de ligação, mapas, conteúdo e carrinho simplificado para reduzir
          fricção e fazer seu visitante agir imediatamente.
        </p>
        <div className="flex justify-center">
          <Link to="/orcamentos" className="button button--primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em]">
            pedir orçamento
          </Link>
        </div>
      </div>
    </section>

    <section className="container space-y-10 pb-20">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Contato imediato</h2>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">
          Links que levam direto para uma conversa com sua equipe, sem enrolação.
        </p>
        <WhatsAppLinkBuilder />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Localização e confiança</h2>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">
          Mostre onde você está e facilite o contato presencial ou por telefone.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex h-full flex-col rounded-2xl border border-indigo-100 bg-white/90 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Botão de ligação</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Uma âncora simples com `tel:` permite chamadas instantâneas a partir do celular. Use em CTAs fixos ou no
              rodapé do site.
            </p>
            <a
              href="tel:84991926432"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Ligar agora
            </a>
          </div>
          <div className="rounded-2xl border border-indigo-100 bg-white/90 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Google Maps integrado</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Embeds responsivos ajudam o visitante a encontrar sua empresa rapidamente. Substitua o link abaixo pelo
              mapa do seu endereço.
            </p>V
            <div className="mt-4 overflow-hidden rounded-xl">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  title="Mapa Arabella"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.167512968271!2d-43.2107079227951!3d-22.914167040170053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ff56f41383f%3A0x1b57b36ad0f5bd53!2sCristo%20Redentor!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Conteúdo</h2>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">
          Vídeos e provas sociais incorporados para aumentar a credibilidade do seu negócio.
        </p>
        <div className="rounded-2xl border border-indigo-100 bg-white/90 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">YouTube embed responsivo</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Use iframes com `aspect-ratio` para comportar vídeos em qualquer tela sem cortes.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                title="YouTube video player"
                src="https://www.youtube.com/embed/HZUIdx3_3yU?si=A733WDRaQTNXuk9w"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                frameBorder={0}
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Vendas sem fricção</h2>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">
          Combine carrinho simplificado com mensagem pronta para fechar a venda no WhatsApp.
        </p>
        <WhatsAppCartDemo />
      </div>
    </section>

    <section className="container pb-20">
      <div className="rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-500 to-fuchsia-500 p-[1px] shadow-[0_25px_80px_rgba(79,70,229,0.18)]">
        <div className="rounded-[calc(24px-1px)] bg-white/95 px-8 py-10 text-center shadow-sm sm:px-12">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Vamos colocar essas integrações em prática?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Peça um orçamento rápido ou escolha um plano pronto para implementar essas integrações com a nossa equipe.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/orcamentos" className="button button--primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em]">
              pedir orçamento
            </Link>
            <Link to="/#planos" className="button button--secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em]">
              ver planos
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default IntegrationsPage;
