import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

interface CardItem {
  id: string;
  headerTitle: string;
  isDark?: boolean;
  cardWidth?: string;
  renderContent: () => React.ReactNode;
}

const CARDS: CardItem[] = [
  {
    id: 'loja-virtual',
    headerTitle: 'Loja Virtual',
    renderContent: () => (
      <div className="p-3 text-ink">
        <h4 className="text-xs font-bold text-sky-600 mb-2">Loja Virtual</h4>
        <div className="grid grid-cols-3 gap-1.5 mb-2.5">
          {[
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=150&q=80',
            'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=150&q=80',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=150&q=80',
          ].map((img, i) => (
            <div key={i} className="bg-stone-100 p-1 rounded border border-stone-200 text-center flex flex-col items-center">
              <img src={img} alt="Product" className="w-10 h-10 object-cover rounded mb-1" />
              <span className="text-[8px] font-bold text-stone-700">R$ 189,90</span>
            </div>
          ))}
        </div>
        <button type="button" className="text-[9px] font-medium bg-amber-500 hover:bg-amber-600 text-white px-2.5 py-1 rounded shadow-xs">
          Saiba mais
        </button>
      </div>
    ),
  },
  {
    id: 'empresa',
    headerTitle: 'Empresa',
    renderContent: () => (
      <div className="p-3 flex items-center justify-between gap-3 text-ink">
        <div className="flex-1">
          <h4 className="text-xs font-bold text-stone-800 mb-1">Empresa</h4>
          <p className="text-[10px] text-stone-600 leading-snug mb-2 font-medium">
            Soluções que impulsionam seu negócio.
          </p>
          <button type="button" className="text-[9px] font-medium bg-sky-500 hover:bg-sky-600 text-white px-2.5 py-1 rounded shadow-xs">
            Saiba mais
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80"
          alt="Building"
          className="w-16 h-16 object-cover rounded-md shadow-xs border border-stone-200"
        />
      </div>
    ),
  },
  {
    id: 'curriculo-web',
    headerTitle: 'Currículo Web',
    renderContent: () => (
      <div className="p-3 flex items-center gap-3 text-ink">
        <div className="flex-1">
          <h4 className="text-[10px] font-bold text-sky-600 mb-0.5">Currículo Web</h4>
          <h5 className="text-xs font-bold text-stone-900">Lucas Almeida</h5>
          <p className="text-[9px] text-stone-500 mb-2">Desenvolvedor Full Stack</p>
          <button type="button" className="text-[9px] font-medium border border-sky-500 text-sky-600 hover:bg-sky-50 px-2 py-0.5 rounded">
            Ver projetos
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
          alt="Developer"
          className="w-14 h-16 object-cover rounded-md border border-stone-200"
        />
      </div>
    ),
  },
  {
    id: 'sistema-medida',
    headerTitle: 'Sistema Sob Medida',
    isDark: true,
    cardWidth: '280px',
    renderContent: () => (
      <div className="p-3 text-white flex gap-3">
        <div className="flex-1">
          <h4 className="text-xs font-bold mb-1 text-slate-100">Sistema Sob Medida</h4>
          <p className="text-[10px] text-slate-300 leading-snug mb-3">
            Gestão completa para o seu negócio.
          </p>
          <button type="button" className="text-[9px] font-medium bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 px-2.5 py-1 rounded">
            Acessar painel
          </button>
        </div>
        <div className="w-32 bg-slate-950 p-2 rounded border border-slate-800 text-[8px] text-slate-300">
          <span className="text-[7px] text-slate-500 uppercase tracking-wider block">Dashboard</span>
          <div className="flex justify-between items-center my-1">
            <span>Vendas</span>
            <span className="text-emerald-400 font-bold text-[9px]">R$ 24.780,00</span>
          </div>
          {/* Mini SVG Line Chart */}
          <svg className="w-full h-7 text-cyan-400 my-1" viewBox="0 0 100 40">
            <path d="M0,35 Q20,10 40,25 T80,5 T100,20" fill="none" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </div>
      </div>
    ),
  },
  {
    id: 'agencia-digital',
    headerTitle: 'Agência Digital',
    renderContent: () => (
      <div className="p-3 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100/50 rounded-b-xl text-ink">
        <h4 className="text-xs font-bold text-purple-900 mb-1">Agência Digital</h4>
        <p className="text-[10px] text-purple-800 font-medium leading-snug mb-2.5 max-w-[130px]">
          Estratégia, design e performance.
        </p>
        <button type="button" className="text-[9px] font-medium bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded shadow-xs">
          Conheça
        </button>
      </div>
    ),
  },
  {
    id: 'restaurante',
    headerTitle: 'Restaurante',
    renderContent: () => (
      <div className="p-3 flex items-center justify-between gap-3 text-ink">
        <div className="flex-1">
          <h4 className="text-xs font-bold text-stone-800 mb-1">Restaurante</h4>
          <p className="text-[10px] text-stone-600 font-medium leading-snug mb-2">
            Sabor que conecta.
          </p>
          <button type="button" className="text-[9px] font-medium bg-amber-500 hover:bg-amber-600 text-white px-2.5 py-1 rounded shadow-xs">
            Fazer pedido
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80"
          alt="Restaurante"
          className="w-14 h-14 object-cover rounded-lg border border-stone-200 shadow-xs"
        />
      </div>
    ),
  },
  {
    id: 'landing-page',
    headerTitle: 'Landing Page',
    renderContent: () => (
      <div className="p-3 text-ink">
        <h4 className="text-xs font-bold text-emerald-700 mb-1">Landing Page</h4>
        <p className="text-[10px] text-stone-700 font-medium leading-snug mb-2 max-w-[140px]">
          Transformamos ideias em sites que vendem.
        </p>
        <div className="flex items-center gap-2">
          <button type="button" className="text-[9px] font-medium bg-emerald-500 hover:bg-emerald-600 text-white px-2.5 py-1 rounded shadow-xs">
            Quero meu site
          </button>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-emerald-100 rounded-sm" />
            <div className="w-3 h-3 bg-emerald-100 rounded-sm" />
          </div>
        </div>
      </div>
    ),
  },
];

// Posições no grid do Hero com variação 3D e inclinação agradável
const SLOTS = [
  { x: -30, y: -130, rotate: -4, scale: 0.98, zIndex: 25 },
  { x: 160, y: -100, rotate: 3, scale: 0.95, zIndex: 20 },
  { x: 190, y: 10, rotate: -3, scale: 0.92, zIndex: 18 },
  { x: 10, y: -10, rotate: 2, scale: 1.05, zIndex: 35 }, // Slot central em destaque (Sistema Sob Medida Dark)
  { x: -140, y: 80, rotate: 5, scale: 0.96, zIndex: 22 },
  { x: 90, y: 130, rotate: -4, scale: 0.94, zIndex: 24 },
  { x: -160, y: -40, rotate: -2, scale: 0.90, zIndex: 15 },
];

const FloatingCards = () => {
  const [positions, setPositions] = useState<number[]>([0, 1, 2, 3, 4, 5, 6]);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const shufflePositions = useCallback(() => {
    setPositions(prev => {
      const next = [...prev];
      const last = next.pop()!;
      next.unshift(last);
      return next;
    });
  }, []);

  useEffect(() => {
    if (hoveredCardId) return;

    const timer = setInterval(() => {
      shufflePositions();
    }, 2400);

    return () => clearInterval(timer);
  }, [hoveredCardId, shufflePositions]);

  return (
    <div className="relative w-full h-[520px] flex items-center justify-center select-none overflow-visible">
      {/* Botão de controle de Animação */}
      <div className="absolute -top-7 right-0 z-40 flex items-center gap-2">
        <button
          onClick={shufflePositions}
          type="button"
          className="flex items-center gap-1.5 text-[11px] font-medium text-ink-muted hover:text-ink bg-surface-raised/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-hairline shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Alternar posições dos cards"
        >
          <RefreshCw className="w-3.5 h-3.5 text-amber-500" />
          <span>Trocar Posições</span>
        </button>
      </div>

      {/* Grid de Cards Flutuantes */}
      <div className="relative w-full h-full flex items-center justify-center">
        {CARDS.map((card, cardIndex) => {
          const slotIndex = positions[cardIndex];
          const slot = SLOTS[slotIndex];
          const isHovered = hoveredCardId === card.id;

          return (
            <motion.div
              key={card.id}
              layout
              initial={false}
              animate={{
                x: isHovered ? slot.x * 0.85 : slot.x,
                y: isHovered ? slot.y * 0.85 - 8 : slot.y,
                rotate: isHovered ? 0 : slot.rotate,
                scale: isHovered ? 1.14 : slot.scale,
                zIndex: isHovered ? 50 : slot.zIndex,
              }}
              transition={{
                layout: { type: 'spring', stiffness: 100, damping: 14 },
                type: 'spring',
                stiffness: 110,
                damping: 14,
              }}
              onHoverStart={() => setHoveredCardId(card.id)}
              onHoverEnd={() => setHoveredCardId(null)}
              className="absolute cursor-pointer"
              style={{
                width: card.cardWidth || '240px',
              }}
            >
              {/* Animação contínua de flutuação suave */}
              <motion.div
                animate={{
                  y: isHovered ? [0, -4, 0] : [0, -8, 0],
                }}
                transition={{
                  duration: 3.5 + (cardIndex % 3),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: cardIndex * 0.3,
                }}
                className={`group relative rounded-xl border ${
                  card.isDark
                    ? 'border-slate-800 bg-slate-900 shadow-2xl'
                    : 'border-stone-200/90 bg-white/95 backdrop-blur-md shadow-lg hover:border-amber-400/60'
                } transition-all duration-300 hover:shadow-2xl`}
                style={{
                  boxShadow: isHovered
                    ? '0 22px 45px -12px rgba(0, 0, 0, 0.22), 0 8px 16px -6px rgba(0, 0, 0, 0.08)'
                    : card.isDark
                    ? '0 16px 36px -10px rgba(15, 23, 42, 0.5)'
                    : '0 12px 30px -10px rgba(0, 0, 0, 0.09)',
                }}
              >
                {/* Cabeçalho Estilo Janela de Navegador */}
                <div
                  className={`flex items-center justify-between px-3 py-1.5 rounded-t-xl border-b ${
                    card.isDark
                      ? 'bg-slate-950/90 border-slate-800 text-slate-400'
                      : 'bg-stone-50/90 border-stone-100 text-stone-400'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400/90" />
                    <div className="w-2 h-2 rounded-full bg-amber-400/90" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400/90" />
                  </div>
                  <span className="text-[9px] font-semibold text-stone-500 uppercase tracking-wider">
                    {card.headerTitle}
                  </span>
                </div>

                {/* Conteúdo Customizado do Card */}
                {card.renderContent()}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingCards;
