import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Star, ShoppingCart, ShieldCheck, CheckCircle2, Search, ArrowUpRight } from 'lucide-react';

interface CardItem {
  id: string;
  headerTitle: string;
  urlPath: string;
  cardWidth?: string;
  badge?: string;
  badgeColor?: string;
  renderContent: () => React.ReactNode;
}

const CARDS: CardItem[] = [
  {
    id: 'loja-virtual',
    headerTitle: 'Loja Virtual',
    urlPath: 'loja.arabella.dev/fones-pro',
    cardWidth: '275px',
    badge: 'E-COMMERCE',
    badgeColor: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    renderContent: () => (
      <div className="p-3 text-ink">
        <div className="flex items-center justify-between bg-stone-100/80 px-2 py-1 rounded-md mb-2.5 text-[9px] text-stone-500 border border-stone-200/60">
          <div className="flex items-center gap-1">
            <Search className="w-3 h-3 text-stone-400" />
            <span>Fones Wireless Pro...</span>
          </div>
          <div className="flex items-center gap-1 font-bold text-amber-600 bg-amber-100/80 px-1.5 py-0.5 rounded">
            <ShoppingCart className="w-2.5 h-2.5" /> 3
          </div>
        </div>

        <div className="flex gap-2.5 items-center">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=200&q=80"
            alt="Fone de Ouvido"
            className="w-16 h-16 object-cover rounded-lg border border-stone-200 shadow-xs shrink-0"
          />
          <div className="flex-1">
            <div className="flex items-center gap-1 text-amber-500 text-[9px] mb-0.5">
              <Star className="w-2.5 h-2.5 fill-amber-400" />
              <span className="font-bold">4.9</span>
              <span className="text-stone-400">(128 avaliações)</span>
            </div>
            <h4 className="text-xs font-bold text-stone-900 leading-tight">Headphone Noise Cancel</h4>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="text-xs font-extrabold text-emerald-600">R$ 289,90</span>
              <span className="text-[9px] text-stone-400 line-through">R$ 349,00</span>
            </div>
          </div>
        </div>

        <button type="button" className="w-full mt-2.5 py-1.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg text-[10px] shadow-xs transition-colors flex items-center justify-center gap-1">
          <span>Comprar com 1-Click</span>
          <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>
    ),
  },
  {
    id: 'landing-page',
    headerTitle: 'Landing Page High-Scale',
    urlPath: 'landing.arabella.dev/oferta-vip',
    cardWidth: '275px',
    badge: '+340% LEADS',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    renderContent: () => (
      <div className="p-3 text-ink">
        <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent p-2 rounded-lg border border-emerald-500/20 mb-2">
          <span className="text-[8px] font-bold uppercase tracking-wider text-emerald-700 block">Alta Conversão</span>
          <h4 className="text-xs font-extrabold text-stone-900 leading-snug">
            Transformamos Ideias em Sites que Vendem.
          </h4>
        </div>

        <p className="text-[9px] text-stone-600 leading-relaxed mb-2.5">
          Design estratégico com WhatsApp e checkout de alta velocidade integrados.
        </p>

        <div className="flex items-center gap-2">
          <button type="button" className="flex-1 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-[10px] shadow-xs text-center">
            Garantir Minha Vaga
          </button>
          <div className="flex items-center gap-1 text-[8px] font-semibold text-stone-500 bg-stone-100 px-2 py-1 rounded border border-stone-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>0.4s Carga</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'agencia-digital',
    headerTitle: 'Agência Digital',
    urlPath: 'agencia.arabella.dev',
    cardWidth: '260px',
    badge: 'ESTRATÉGIA B2B',
    badgeColor: 'bg-purple-500/10 text-purple-700 border-purple-500/20',
    renderContent: () => (
      <div className="p-3 bg-gradient-to-br from-purple-50 via-purple-100/40 to-indigo-50 rounded-b-xl text-ink">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] font-bold text-purple-700 uppercase tracking-wider">Design & Dev</span>
          <span className="text-[8px] bg-purple-200/80 text-purple-900 px-1.5 py-0.5 rounded font-mono font-semibold">Branding 3D</span>
        </div>
        <h4 className="text-xs font-bold text-purple-950 leading-tight mb-1">
          Estratégia, Design & Alta Performance.
        </h4>
        <p className="text-[9px] text-purple-800/80 mb-2.5 leading-snug">
          Criamos marcas memoráveis que dominam o mercado digital.
        </p>
        <button type="button" className="w-full py-1.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-md text-[10px] shadow-xs transition-colors">
          Solicitar Orçamento
        </button>
      </div>
    ),
  },
  {
    id: 'restaurante',
    headerTitle: 'Restaurante & Gastronomia',
    urlPath: 'menu.arabella.dev/bistro',
    cardWidth: '265px',
    badge: 'CARDÁPIO DIGITAL',
    badgeColor: 'bg-orange-500/10 text-orange-700 border-orange-500/20',
    renderContent: () => (
      <div className="p-3 text-ink">
        <div className="flex items-center gap-2.5">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80"
            alt="Prato Gourmet"
            className="w-16 h-16 object-cover rounded-lg border border-stone-200 shadow-xs shrink-0"
          />
          <div className="flex-1">
            <div className="flex items-center gap-1 text-orange-500 text-[9px] font-bold">
              <Star className="w-2.5 h-2.5 fill-orange-400" />
              <span>5.0 (482 pedidos)</span>
            </div>
            <h4 className="text-xs font-bold text-stone-900 leading-tight">Bistrô Sabor & Arte</h4>
            <p className="text-[9px] text-stone-500 mt-0.5">Risotto de Cogumelos + Drink</p>
            <span className="text-xs font-extrabold text-orange-600 mt-1 block">R$ 54,90</span>
          </div>
        </div>
        <button type="button" className="w-full mt-2.5 py-1.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg text-[10px] shadow-xs transition-colors">
          Fazer Pedido no WhatsApp
        </button>
      </div>
    ),
  },
  {
    id: 'curriculo-web',
    headerTitle: 'Currículo & Portfólio Pro',
    urlPath: 'lucas.arabella.dev',
    cardWidth: '260px',
    badge: 'PORTFÓLIO WEB',
    badgeColor: 'bg-sky-500/10 text-sky-700 border-sky-500/20',
    renderContent: () => (
      <div className="p-3 text-ink">
        <div className="flex items-center gap-2.5 mb-2">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
            alt="Lucas Almeida"
            className="w-12 h-12 object-cover rounded-full border-2 border-sky-400 shadow-xs shrink-0"
          />
          <div>
            <div className="flex items-center gap-1">
              <h4 className="text-xs font-bold text-stone-900">Lucas Almeida</h4>
              <ShieldCheck className="w-3 h-3 text-sky-500" />
            </div>
            <p className="text-[9px] font-medium text-stone-500">Desenvolvedor Full-Stack</p>
            <div className="flex gap-1 mt-1">
              <span className="text-[8px] bg-sky-100 text-sky-700 px-1 py-0.5 rounded font-mono">React</span>
              <span className="text-[8px] bg-stone-100 text-stone-600 px-1 py-0.5 rounded font-mono">Node.js</span>
            </div>
          </div>
        </div>
        <button type="button" className="w-full py-1.5 border border-sky-500 text-sky-600 hover:bg-sky-50 font-bold rounded-md text-[10px] transition-colors">
          Ver Portfólio Completo
        </button>
      </div>
    ),
  },
  {
    id: 'empresa',
    headerTitle: 'Empresa & Corporativo',
    urlPath: 'empresa.arabella.dev',
    cardWidth: '265px',
    badge: 'B2B INSTANTÂNEO',
    badgeColor: 'bg-stone-500/10 text-stone-700 border-stone-500/20',
    renderContent: () => (
      <div className="p-3 text-ink">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div>
            <h4 className="text-xs font-bold text-stone-900">Soluções Corporativas</h4>
            <p className="text-[9px] text-stone-500 leading-tight">Impulsione seu negócio com tecnologia sob medida.</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80"
            alt="Empresa"
            className="w-12 h-12 object-cover rounded-md border border-stone-200 shrink-0"
          />
        </div>
        <div className="flex items-center justify-between pt-1 border-t border-stone-100">
          <span className="text-[9px] font-bold text-stone-600">+500 Clientes Atendidos</span>
          <button type="button" className="py-1 px-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded text-[9px] font-bold">
            Conhecer Soluções
          </button>
        </div>
      </div>
    ),
  },
];

// 6 Posições bem distribuídas no grid do Hero
const SLOTS = [
  { x: 30, y: -70, rotate: -2, scale: 1.04, zIndex: 30 },
  { x: -190, y: -130, rotate: -4, scale: 0.96, zIndex: 25 },
  { x: 210, y: -110, rotate: 3, scale: 0.94, zIndex: 22 },
  { x: 220, y: 55, rotate: -3, scale: 0.95, zIndex: 28 },
  { x: 100, y: 160, rotate: 4, scale: 0.93, zIndex: 20 },
  { x: -140, y: 120, rotate: -3, scale: 0.95, zIndex: 24 },
];

const FloatingCards = () => {
  const [positions, setPositions] = useState<number[]>([0, 1, 2, 3, 4, 5]);
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
    <div className="relative w-full h-[540px] flex items-center justify-center select-none overflow-visible">
      {/* Botão de controle de Animação */}
      <div className="absolute -top-8 right-0 z-40 flex items-center gap-2">
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
                width: card.cardWidth || '260px',
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
                className="group relative rounded-xl border border-stone-200/90 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-amber-400/60"
                style={{
                  boxShadow: isHovered
                    ? '0 24px 48px -12px rgba(0, 0, 0, 0.22), 0 8px 16px -6px rgba(0, 0, 0, 0.08)'
                    : '0 12px 32px -10px rgba(0, 0, 0, 0.09)',
                }}
              >
                {/* Cabeçalho Estilo Janela de Navegador com URL */}
                <div className="flex items-center justify-between px-3 py-1.5 rounded-t-xl border-b bg-stone-50/90 border-stone-100 text-stone-400">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400/90" />
                    <div className="w-2 h-2 rounded-full bg-amber-400/90" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400/90" />
                  </div>
                  
                  {/* Endereço de URL simulado */}
                  <span className="text-[8px] font-mono font-medium px-2 py-0.5 rounded truncate max-w-[140px] bg-white text-stone-400 border border-stone-200/60">
                    {card.urlPath}
                  </span>

                  {card.badge && (
                    <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded border ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                  )}
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
