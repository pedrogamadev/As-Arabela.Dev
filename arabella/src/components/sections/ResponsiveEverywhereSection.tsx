import { useRef } from 'react';
import type { MouseEvent } from 'react';
import { Check } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const bulletItems = [
  'Mobile-first (prioridade total no celular)',
  'Experiência fluida no desktop',
  'Carregamento rápido em qualquer tela',
];

const ResponsiveEverywhereSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const handleScroll = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Parallax transforms
  const notebookY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const tabletY = useTransform(scrollYProgress, [0, 1], [80, -60]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [1, -100]);

  return (
    <section
      id="responsivo"
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-white py-20 sm:py-24"
      aria-labelledby="responsive-section-title"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-8 top-16 h-56 w-56 rounded-full bg-indigo-200/40 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-fuchsia-200/30 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(129,140,248,0.12),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(196,181,253,0.16),transparent_45%)]" />
      </div>

      <div className="container relative">
        <header className="section-heading mb-12 lg:mb-0">
          <p className="section-kicker">Seu site em qualquer lugar</p>
          <h2 id="responsive-section-title">Seu site em qualquer lugar</h2>
          <p>Perfeito no celular, tablet e computador — sem perder qualidade, velocidade ou clareza.</p>
        </header>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Animated Devices Container */}
          <div className="relative mx-auto h-[500px] w-full max-w-2xl lg:h-[600px]" aria-hidden>
             {/* Background Glows */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl filter" />
            </div>

            {/* Notebook (Base Layer) */}
            <motion.div 
              style={{ y: notebookY }}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute left-0 top-12 z-10 w-[85%] rounded-[1.5rem] border border-white/60 bg-white/40 shadow-glass-soft backdrop-blur-md sm:w-[80%]"
            >
              {/* Notebook Visuals */}
              <div className="relative overflow-hidden rounded-[1.5rem] bg-white/90 pb-4">
                {/* Header Apple Style */}
                <div className="mb-4 flex items-center gap-2 border-b border-slate-900/5 bg-[#0f172a] px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="mx-auto flex h-5 w-1/2 items-center justify-center rounded-md bg-slate-800/50 text-[10px] text-slate-400/80">
                    arabella.dev
                  </div>
                </div>

                {/* Notebook Content */}
                <div className="px-4 space-y-4 opacity-90">
                  <div className="flex justify-between items-center">
                    <div className="h-3 w-1/3 rounded bg-indigo-100" />
                    <div className="flex gap-2">
                        <div className="h-2 w-10 rounded bg-slate-100" />
                        <div className="h-2 w-10 rounded bg-slate-100" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <div className="h-6 w-3/4 rounded bg-slate-800/10" />
                        <div className="h-2 w-full rounded bg-slate-100" />
                        <div className="h-2 w-5/6 rounded bg-slate-100" />
                        <div className="mt-2 h-8 w-24 rounded bg-indigo-500/20" />
                    </div>
                    <div className="rounded-lg bg-indigo-50/50 p-2">
                         <div className="h-full w-full rounded bg-white/60" />
                    </div>
                  </div>
                  <div className="flex gap-3">
                     <div className="h-20 flex-1 rounded-xl bg-slate-50 border border-slate-100 p-2">
                        <div className="h-6 w-6 rounded-full bg-emerald-100 mb-2" />
                        <div className="h-2 w-2/3 rounded bg-slate-200" />
                     </div>
                     <div className="h-20 flex-1 rounded-xl bg-slate-50 border border-slate-100 p-2">
                        <div className="h-6 w-6 rounded-full bg-blue-100 mb-2" />
                        <div className="h-2 w-2/3 rounded bg-slate-200" />
                     </div>
                  </div>
                </div>
                {/* Floating Badge */}
                 <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-4 top-1/2 flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-3 py-1.5 shadow-lg backdrop-blur-sm"
                 >
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-xs font-medium text-slate-600">Mobile-first</span>
                 </motion.div>
              </div>
            </motion.div>

            {/* Tablet (Middle Layer) */}
            <motion.div 
              style={{ y: tabletY }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute right-0 top-6 z-20 w-[42%] aspect-[3/4] sm:aspect-[4/3] rounded-[1.5rem] border border-white/60 bg-white/80 shadow-xl backdrop-blur-md sm:right-4 sm:w-[38%]"
            >
               <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-white/95 p-4">
                 <div className="mb-4 flex justify-center">
                   <div className="h-1 w-10 rounded-full bg-slate-200" />
                 </div>
                 {/* Tablet Content */}
                 <div className="flex h-full flex-col gap-4">
                   <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                     <div className="mb-2 flex items-center justify-between">
                       <div className="h-2 w-16 rounded bg-slate-200" />
                       <div className="h-2 w-10 rounded bg-slate-100" />
                     </div>
                     <div className="space-y-1.5">
                       <div className="h-1.5 w-full rounded bg-slate-200" />
                       <div className="h-1.5 w-4/5 rounded bg-slate-200" />
                     </div>
                   </div>
                   <div className="grid flex-1 grid-cols-2 gap-3">
                     <div className="rounded-xl border border-slate-100 bg-white p-3">
                       <div className="h-3 w-3 rounded-full bg-indigo-100 mb-2" />
                       <div className="h-1.5 w-4/5 rounded bg-slate-200" />
                       <div className="mt-1.5 h-1.5 w-3/5 rounded bg-slate-100" />
                     </div>
                     <div className="rounded-xl border border-slate-100 bg-white p-3">
                       <div className="h-3 w-3 rounded-full bg-slate-100 mb-2" />
                       <div className="h-1.5 w-4/5 rounded bg-slate-200" />
                       <div className="mt-1.5 h-1.5 w-2/3 rounded bg-slate-100" />
                     </div>
                   </div>
                   <div className="rounded-xl border border-slate-100 bg-white p-3">
                     <div className="h-2 w-24 rounded bg-slate-200" />
                     <div className="mt-2 h-1.5 w-full rounded bg-slate-100" />
                   </div>
                 </div>
               </div>
            </motion.div>

            {/* Smartphone (Front Layer) - Taller Aspect Ratio */}
            <motion.div 
               style={{ y: phoneY }}
               initial={{ opacity: 0, y: 100 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
               viewport={{ once: true }}
               className="absolute bottom-4 left-6 z-30 w-[28%] sm:w-[24%] aspect-[9/19.5] rounded-[2.5rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl"
            >
               <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-white">
                  {/* Notch */}
                  <div className="absolute left-1/2 top-0 h-5 w-20 -translate-x-1/2 rounded-b-[1rem] bg-slate-900 z-40" />
                  
                  {/* Phone Content */}
                  <div className="relative h-full bg-slate-50 pt-8 flex flex-col">
                     {/* Top Bar */}
                    <div className="px-4">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="h-2 w-12 rounded bg-slate-200" />
                        <div className="h-2 w-8 rounded bg-slate-100" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-4/5 rounded bg-slate-200" />
                        <div className="h-2 w-2/3 rounded bg-slate-200" />
                      </div>
                    </div>
                    
                    {/* Body */}
                    <div className="p-4 space-y-4 flex-1">
                      <div className="rounded-xl border border-slate-100 bg-white p-3">
                        <div className="h-2 w-1/2 rounded bg-slate-200 mb-2" />
                        <div className="space-y-1.5">
                          <div className="h-1.5 w-full rounded bg-slate-100" />
                          <div className="h-1.5 w-4/5 rounded bg-slate-100" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-lg border border-slate-100 bg-white p-2">
                          <div className="h-3 w-3 rounded-full bg-indigo-100 mb-2" />
                          <div className="h-1.5 w-4/5 rounded bg-slate-200" />
                        </div>
                        <div className="rounded-lg border border-slate-100 bg-white p-2">
                          <div className="h-3 w-3 rounded-full bg-slate-100 mb-2" />
                          <div className="h-1.5 w-4/5 rounded bg-slate-200" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-1.5 w-full rounded bg-slate-200" />
                        <div className="h-1.5 w-2/3 rounded bg-slate-200" />
                      </div>
                    </div>
                  </div>
               </div>
            </motion.div>

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
