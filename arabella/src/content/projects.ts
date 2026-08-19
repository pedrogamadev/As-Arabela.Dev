import type { ProjectsContent } from './types';

/**
 * TODO(conteúdo): PLACEHOLDER — trocar pelos projetos reais no ar.
 * Nomes e status abaixo são fictícios e servem só para dar forma à lista.
 */
export const projects: ProjectsContent = {
  heading: 'Portfólio de Projetos & Casos Práticos',
  projects: [
    {
      name: 'Fones Pro E-commerce',
      description: 'Loja virtual de alta conversão com checkout rápido em 1-Click e integração PIX/Cartão.',
      status: 'No ar',
      category: 'e-commerce',
      technologies: ['React', 'TailwindCSS', 'Node.js', 'Stripe', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      fullDescription: 'Desenvolvimento completo de loja virtual focada em experiência mobile-first, carregamento em menos de 0.5s e funil otimizado para alta conversão.',
      liveUrl: 'https://loja.arabella.dev/fones-pro',
      results: '+340% de vendas nos primeiros 30 dias',
    },
    {
      name: 'Nexus SaaS Dashboard',
      description: 'Sistema web de gestão analítica com gráficos em tempo real e relatórios exportáveis.',
      status: 'No ar',
      category: 'sistema',
      technologies: ['TypeScript', 'React', 'TailwindCSS', 'Recharts', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      fullDescription: 'Plataforma administrativa corporativa desenvolvida sob medida para automação de relatórios gerenciais e controle de métricas chave.',
      liveUrl: 'https://sistema.arabella.dev',
      results: 'Economia de 15 horas/semana na equipe de operações',
    },
    {
      name: 'Bistrô Sabor & Arte',
      description: 'Cardápio digital interativo com recebimento direto de pedidos via WhatsApp.',
      status: 'No ar',
      category: 'landing-page',
      technologies: ['React', 'Vite', 'TailwindCSS', 'WhatsApp API'],
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
      fullDescription: 'Cardápio web fluido com sistema de categorias, fotos em alta resolução de pratos e integração direta ao WhatsApp do restaurante.',
      liveUrl: 'https://menu.arabella.dev/bistro',
      results: 'Aumento de 85% nos pedidos delivery diretos',
    },
    {
      name: 'Lucas Almeida - Portfólio Pro',
      description: 'Website de apresentação profissional para especialista em desenvolvimento full-stack.',
      status: 'No ar',
      category: 'branding',
      technologies: ['React', 'Framer Motion', 'TailwindCSS', 'Vite'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      fullDescription: 'Portfólio interativo com design minimalista, animações suaves e área de projetos em destaque.',
      liveUrl: 'https://lucas.arabella.dev',
      results: 'Contratação por empresa internacional em 2 semanas',
    },
    {
      name: 'Oferta VIP - Lançamento Digital',
      description: 'Landing Page ultra otimizada para captação de leads em campanhas de tráfego pago.',
      status: 'No ar',
      category: 'landing-page',
      technologies: ['React', 'TailwindCSS', 'Meta Pixel', 'Google Tag Manager'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      fullDescription: 'Página de vendas de alta performance testada A/B para maximizar taxas de conversão de anúncios do Instagram e Meta Ads.',
      liveUrl: 'https://landing.arabella.dev/oferta-vip',
      results: 'Taxa de conversão de leads superior a 42%',
    },
    {
      name: 'Vanguard Corporativo',
      description: 'Portal institucional de grupo corporativo B2B com apresentação de serviços e orçamentos.',
      status: 'Em desenvolvimento',
      category: 'branding',
      technologies: ['TypeScript', 'React', 'TailwindCSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      fullDescription: 'Site institucional corporativo com design elegante em glassmorphism e formulário de orçamento corporativo sob medida.',
      liveUrl: 'https://empresa.arabella.dev',
      results: 'Pré-lançamento com +50 propostas agendadas',
    },
  ],
  footnote: {
    lead: 'Também desenvolvemos sistemas sob medida. ',
    linkLabel: 'Ver o que construímos além de landing pages',
    href: '/sistemas',
    trail: '.',
  },
};
