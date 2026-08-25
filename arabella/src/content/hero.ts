import type { HeroContent } from './types';

export const hero: HeroContent = {
  eyebrow: 'Landing pages sob demanda',
  titleLead: 'Landing page pronta ',
  titleHighlight: 'em até 7 dias.',
  titleTrail: '',
  subtitle: 'Com WhatsApp e checkout integrados.',
  secondaryLink: { label: 'Ver planos e preços', targetId: 'planos' },
  mockupCard: {
    label: 'Primeira entrega',
    value: '7 dias',
  },
  showcase: {
    brandInitial: 'A',
    nav: ['Início', 'Serviços', 'Sobre', 'Contato'],
    headline: 'Soluções digitais que impulsionam seu negócio.',
    paragraph: 'Sites rápidos, modernos e focados em conversão.',
    buttonLabel: 'Falar no WhatsApp',
  },
  highlights: [
    {
      icon: 'target',
      title: 'Focado em conversão',
      description: 'Design estratégico para gerar mais resultados',
    },
    {
      icon: 'rocket',
      title: 'Entrega rápida',
      description: 'Sua landing page pronta em até 7 dias',
    },
    {
      icon: 'whatsapp',
      title: 'WhatsApp integrado',
      description: 'Atendimento e conversão direto no WhatsApp',
    },
    {
      icon: 'shield',
      title: 'Código sob medida',
      description: 'Performance, segurança e escalabilidade',
    },
    {
      icon: 'seo',
      title: 'SEO otimizado',
      description: 'Páginas rápidas e otimizadas para Google',
    },
  ],
};
