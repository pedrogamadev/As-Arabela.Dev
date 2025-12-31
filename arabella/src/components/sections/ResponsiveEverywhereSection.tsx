import { useRef } from 'react';
import { Check } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const bulletItems = [
  'Prioridade total no celular (mobile-first)',
  'Layout claro e funcional no desktop',
  'Carregamento rápido em qualquer dispositivo',
];

const ResponsiveEverywhereSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax transforms
  const devicesY = useTransform(scrollYProgress, [0, 1], [50, -50]);

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
          <h2 id="responsive-section-title">Seu site em qualquer lugar</h2>
          <p>Perfeito no celular, tablet e computador — sem perder qualidade, velocidade ou clareza.</p>
        </header>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Animated Devices Container */}
          <div
            className="relative mx-auto h-[290px] w-full max-w-2xl overflow-hidden sm:h-[640px] lg:mx-0 lg:h-[400px] lg:max-w-3xl"
            aria-hidden
          >
             {/* Background Glows */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl filter" />
            </div>

            {/* Combined Devices */}
            <motion.div
              style={{ y: devicesY }}
              initial={{ opacity: 0, scale: 0.96, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative z-10 flex h-full w-full items-center justify-center"
            >
              <img
                src="/imagens/dispositivos/dispositivos.png"
                alt="Dispositivos com layout responsivo"
                className="max-h-full w-full object-contain"
                loading="lazy"
              />
            </motion.div>

          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                Seu site funciona perfeitamente em qualquer tela.
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

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveEverywhereSection;
