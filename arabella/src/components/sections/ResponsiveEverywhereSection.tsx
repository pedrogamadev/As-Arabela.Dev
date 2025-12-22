import type { MouseEvent } from 'react';
import { Check } from 'lucide-react';

const bulletItems = [
  'Mobile-first (prioridade total no celular)',
  'Experiência fluida no desktop',
  'Carregamento rápido em qualquer tela',
];

const ResponsiveEverywhereSection = () => {
  const handleScroll = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="responsivo"
      className="relative overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-white py-20 sm:py-24"
      aria-labelledby="responsive-section-title"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-8 top-16 h-56 w-56 rounded-full bg-indigo-200/40 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-fuchsia-200/30 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(129,140,248,0.12),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(196,181,253,0.16),transparent_45%)]" />
      </div>

      <div className="container relative">
        <header className="section-heading">
          <p className="section-kicker">Seu site em qualquer lugar</p>
          <h2 id="responsive-section-title">Seu site em qualquer lugar</h2>
          <p>Perfeito no celular, tablet e computador — sem perder qualidade, velocidade ou clareza.</p>
        </header>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative mx-auto w-full max-w-xl" aria-hidden>
            <div className="absolute -top-6 right-6 h-24 w-24 rounded-full bg-indigo-300/40 blur-3xl" />
            <div className="absolute -bottom-10 left-6 h-32 w-32 rounded-full bg-sky-200/40 blur-3xl" />

            <div className="relative min-h-[320px] sm:min-h-[360px]">
              <div className="absolute left-0 top-12 z-10 w-[78%] rounded-[2rem] border border-white/80 bg-white/85 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.18)] backdrop-blur">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/70 via-transparent to-indigo-100/50" />
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-300" />
                    <span className="h-2 w-2 rounded-full bg-amber-300" />
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-20 rounded-2xl bg-indigo-100/80" />
                      <div className="h-20 rounded-2xl bg-slate-100" />
                      <div className="h-20 rounded-2xl bg-fuchsia-100/70" />
                    </div>
                    <div className="h-3 w-4/5 rounded-full bg-slate-200" />
                    <div className="h-3 w-3/5 rounded-full bg-slate-200" />
                  </div>
                </div>
              </div>

              <div className="absolute right-4 top-0 z-20 w-[48%] rounded-[1.8rem] border border-white/80 bg-white/85 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.16)] backdrop-blur">
                <div className="absolute inset-0 rounded-[1.8rem] bg-gradient-to-br from-white/70 via-transparent to-indigo-100/40" />
                <div className="relative">
                  <div className="mx-auto h-2 w-14 rounded-full bg-slate-200" />
                  <div className="mt-3 space-y-2">
                    <div className="h-20 rounded-2xl bg-indigo-100/80" />
                    <div className="h-3 w-4/5 rounded-full bg-slate-200" />
                    <div className="h-3 w-3/5 rounded-full bg-slate-200" />
                    <div className="h-10 rounded-2xl bg-slate-100" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-10 z-30 w-[26%] rounded-[1.5rem] border border-white/80 bg-white/90 p-2 shadow-[0_18px_45px_rgba(15,23,42,0.2)] backdrop-blur">
                <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-white/80 via-transparent to-indigo-100/50" />
                <div className="relative">
                  <div className="mx-auto h-2 w-10 rounded-full bg-slate-200" />
                  <div className="mt-3 space-y-2">
                    <div className="h-16 rounded-2xl bg-indigo-100/80" />
                    <div className="h-3 w-4/5 rounded-full bg-slate-200" />
                    <div className="h-3 w-3/5 rounded-full bg-slate-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                Seu site funciona perfeitamente em qualquer tela
              </h3>
              <p className="text-base leading-relaxed text-slate-600">
                Seu cliente pode acessar pelo celular, tablet ou computador sem perder qualidade, velocidade ou clareza
                da mensagem. Cada layout é pensado para converter bem em qualquer dispositivo.
              </p>
            </div>

            <ul className="space-y-3">
              {bulletItems.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#planos"
              onClick={handleScroll}
              className="button button--secondary"
              aria-label="Ver exemplos de layout"
            >
              Ver exemplos de layout
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveEverywhereSection;
