import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Monitor,
  Rocket,
  UserCheck,
  Utensils,
  Sparkles,
  TrendingUp,
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  Zap,
} from 'lucide-react';

/**
 * Definição dos cartões com visual de mini-sites/aplicações web.
 */
interface MiniSiteCard {
  id: string;
  category: string;
  title: string;
  badge: string;
  badgeColor: string;
  metric: string;
  icon: React.ReactNode;
  bgGradient: string;
  borderColor: string;
  miniUI: React.ReactNode;
}

const CARDS_DATA: MiniSiteCard[] = [
  {
    id: 'loja-virtual',
    category: 'E-commerce',
    title: 'Loja Virtual High-Scale',
    badge: 'Checkout Ativo',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    metric: 'R$ 48.200 /mês',
    icon: <ShoppingBag className="w-4 h-4 text-amber-600" />,
    bgGradient: 'from-amber-500/5 via-orange-500/5 to-transparent',
    borderColor: 'border-amber-500/30',
    miniUI: (
      <div className="flex flex-col gap-1.5 mt-2 bg-surface/80 p-2 rounded border border-hairline text-[10px]">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-ink">Coleção Verão</span>
          <span className="text-emerald-600 font-bold">R$ 189,90</span>
        </div>
        <div className="w-full bg-stone-200 rounded-full h-1.5 overflow-hidden">
          <div className="bg-amber-500 h-full w-4/5 rounded-full" />
        </div>
        <div className="flex items-center justify-between text-[9px] text-ink-muted">
          <span>84% em estoque</span>
          <span className="flex items-center gap-0.5 text-positive"><TrendingUp className="w-2.5 h-2.5" /> +24% hoje</span>
        </div>
      </div>
    ),
  },
  {
    id: 'sistema-saas',
    category: 'Sistema Web',
    title: 'SaaS & Gestão Sob Medida',
    badge: '99.9% Uptime',
    badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    metric: '1.4k Usuários Ativos',
    icon: <Monitor className="w-4 h-4 text-blue-600" />,
    bgGradient: 'from-blue-500/5 via-indigo-500/5 to-transparent',
    borderColor: 'border-blue-500/30',
    miniUI: (
      <div className="flex flex-col gap-1.5 mt-2 bg-surface/80 p-2 rounded border border-hairline text-[10px]">
        <div className="flex items-center justify-between">
          <span className="text-ink-muted">Processamento</span>
          <span className="font-mono text-ink">14ms</span>
        </div>
        <div className="flex items-end gap-1 h-6 pt-1">
          {[40, 65, 30, 85, 95, 60, 75, 100].map((height, i) => (
            <div
              key={i}
              style={{ height: `${height}%` }}
              className="flex-1 bg-blue-500/70 rounded-t-sm"
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'landing-page',
    category: 'Landing Page',
    title: 'Página de Alta Conversão',
    badge: '+340% Leads',
    badgeColor: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    metric: 'Conversão 18.4%',
    icon: <Rocket className="w-4 h-4 text-amber-600" />,
    bgGradient: 'from-amber-500/10 via-yellow-500/5 to-transparent',
    borderColor: 'border-amber-500/40',
    miniUI: (
      <div className="flex flex-col gap-1 mt-2 bg-surface/80 p-2 rounded border border-hairline text-[10px]">
        <div className="flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
          <span className="font-semibold text-ink">Hero Vendedor</span>
        </div>
        <div className="h-2 w-full bg-accent/20 rounded mt-1 overflow-hidden">
          <div className="h-full bg-accent w-2/3" />
        </div>
        <div className="flex justify-between items-center text-[9px] text-ink-muted mt-1">
          <span>Tempo de Carga</span>
          <span className="text-emerald-600 font-medium">0.4s Ultra-rápido</span>
        </div>
      </div>
    ),
  },
  {
    id: 'curriculo-pro',
    category: 'Portfólio & Curriculo',
    title: 'Presença Profissional',
    badge: 'Verificado',
    badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    metric: 'Destaque no Mercado',
    icon: <UserCheck className="w-4 h-4 text-purple-600" />,
    bgGradient: 'from-purple-500/5 via-pink-500/5 to-transparent',
    borderColor: 'border-purple-500/30',
    miniUI: (
      <div className="flex items-center gap-2 mt-2 bg-surface/80 p-2 rounded border border-hairline text-[10px]">
        <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-700 text-xs shrink-0">
          AD
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="font-medium text-ink truncate">Alexandre Dev</span>
          <span className="text-[9px] text-ink-muted truncate">Full-stack & Design</span>
        </div>
      </div>
    ),
  },
  {
    id: 'restaurante-app',
    category: 'Gastronomia',
    title: 'Cardápio Digital & Pedidos',
    badge: 'QR Code Live',
    badgeColor: 'bg-red-500/10 text-red-600 border-red-500/20',
    metric: 'Pedidos Imediatos',
    icon: <Utensils className="w-4 h-4 text-red-600" />,
    bgGradient: 'from-red-500/5 via-orange-500/5 to-transparent',
    borderColor: 'border-red-500/30',
    miniUI: (
      <div className="flex flex-col gap-1.5 mt-2 bg-surface/80 p-2 rounded border border-hairline text-[10px]">
        <div className="flex justify-between items-center">
          <span className="font-medium text-ink">Mesa #12</span>
          <span className="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded text-[8px]">Preparando</span>
        </div>
        <p className="text-[9px] text-ink-muted truncate">1x Risotto ao Funghi + 2x Drinks</p>
      </div>
    ),
  },
  {
    id: 'agencia-hub',
    category: 'Agência Digital',
    title: 'Hub de Serviços Corporativo',
    badge: 'B2B Escalável',
    badgeColor: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
    metric: 'Leads Qualificados',
    icon: <Sparkles className="w-4 h-4 text-teal-600" />,
    bgGradient: 'from-teal-500/5 via-emerald-500/5 to-transparent',
    borderColor: 'border-teal-500/30',
    miniUI: (
      <div className="flex items-center justify-between mt-2 bg-surface/80 p-2 rounded border border-hairline text-[10px]">
        <div className="flex items-center gap-1 text-teal-600">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span className="font-semibold text-ink">Contrato Assinado</span>
        </div>
        <span className="font-mono text-ink-muted text-[9px]">WhatsApp Sync</span>
      </div>
    ),
  },
];

// Posições espalhadas no contêiner com variação 3D suave (x, y, rotate, scale, zIndex)
const SLOTS = [
  { x: 0, y: -20, rotate: -3, scale: 1.05, zIndex: 30 },
  { x: 210, y: -100, rotate: 4, scale: 0.95, zIndex: 20 },
  { x: 220, y: 100, rotate: -4, scale: 0.92, zIndex: 15 },
  { x: -180, y: -110, rotate: 5, scale: 0.94, zIndex: 22 },
  { x: -190, y: 90, rotate: -5, scale: 0.96, zIndex: 25 },
  { x: 20, y: 150, rotate: 2, scale: 0.9, zIndex: 10 },
];

const FloatingCards = () => {
  const [positions, setPositions] = useState<number[]>([0, 1, 2, 3, 4, 5]);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Função para fazer o shuffle (troca de posições)
  const shufflePositions = useCallback(() => {
    setPositions(prev => {
      const next = [...prev];
      const last = next.pop()!;
      next.unshift(last);
      return next;
    });
  }, []);

  // Intervalo para trocar posições a cada 4.2 segundos se o usuário não estiver com mouse por cima
  useEffect(() => {
    if (hoveredCardId) return;

    const timer = setInterval(() => {
      shufflePositions();
    }, 4200);

    return () => clearInterval(timer);
  }, [hoveredCardId, shufflePositions]);

  return (
    <div className="relative w-full h-[520px] flex items-center justify-center select-none overflow-visible">
      {/* Botão de controle de Animação Interativa */}
      <div className="absolute -top-6 right-0 z-40 flex items-center gap-2">
        <button
          onClick={shufflePositions}
          type="button"
          className="flex items-center gap-1.5 text-[11px] font-medium text-ink-muted hover:text-ink bg-surface-raised/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-hairline shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Alternar posições dos cards"
        >
          <RefreshCw className="w-3.5 h-3.5 text-accent" />
          <span>Trocar Posições</span>
        </button>
      </div>

      {/* Grid de Cards Flutuantes */}
      <div className="relative w-full h-full flex items-center justify-center">
        {CARDS_DATA.map((card, cardIndex) => {
          const slotIndex = positions[cardIndex];
          const slot = SLOTS[slotIndex];
          const isHovered = hoveredCardId === card.id;

          return (
            <motion.div
              key={card.id}
              layout
              initial={false}
              animate={{
                x: isHovered ? slot.x * 0.8 : slot.x,
                y: isHovered ? slot.y * 0.8 - 8 : slot.y,
                rotate: isHovered ? 0 : slot.rotate,
                scale: isHovered ? 1.12 : slot.scale,
                zIndex: isHovered ? 50 : slot.zIndex,
              }}
              transition={{
                layout: { type: 'spring', stiffness: 90, damping: 16 },
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
              onHoverStart={() => setHoveredCardId(card.id)}
              onHoverEnd={() => setHoveredCardId(null)}
              className="absolute cursor-pointer"
              style={{
                width: '230px',
              }}
            >
              {/* Animação contínua de flutuação vertical */}
              <motion.div
                animate={{
                  y: isHovered ? [0, -4, 0] : [0, -10, 0],
                }}
                transition={{
                  duration: 3 + (cardIndex % 3),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: cardIndex * 0.4,
                }}
                className={`group relative rounded-xl border ${card.borderColor} bg-surface-raised/95 backdrop-blur-md p-3.5 shadow-md transition-all duration-300 hover:shadow-xl hover:border-accent/60`}
                style={{
                  boxShadow: isHovered
                    ? '0 20px 40px -15px rgba(232, 163, 23, 0.25), 0 10px 20px -10px rgba(0,0,0,0.1)'
                    : '0 10px 30px -12px rgba(0, 0, 0, 0.08), 0 4px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
              >
                {/* Background com degradê sutil do card */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${card.bgGradient} opacity-60 pointer-events-none`} />

                {/* Topo do Card - Estilo Mini Window / Browser */}
                <div className="relative z-10 flex items-center justify-between pb-2 border-b border-hairline/60">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-400/80" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[9px] font-semibold tracking-wider text-ink-muted uppercase flex items-center gap-1">
                    {card.category}
                  </span>
                </div>

                {/* Conteúdo Principal */}
                <div className="relative z-10 pt-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-surface border border-hairline shadow-2xs shrink-0">
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-ink leading-snug group-hover:text-accent transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-[10px] text-ink-muted font-medium">
                          {card.metric}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Badge de status */}
                  <div className="mt-2 flex items-center justify-between">
                    <span className={`text-[9px] font-medium px-2 py-0.5 rounded-full border ${card.badgeColor}`}>
                      ● {card.badge}
                    </span>
                    <ExternalLink className="w-3 h-3 text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Mini-UI simulando o site/sistema em ação */}
                  {card.miniUI}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingCards;
