import type { CaseContent } from './types';

/**
 * TODO(conteúdo): PLACEHOLDER — trocar por um case real antes de publicar.
 *
 * Nome de cliente, contexto e métricas abaixo são fictícios e existem apenas
 * para dar forma ao layout. Publicar resultados não verificados como se
 * fossem reais é propaganda enganosa: substitua tudo antes do deploy.
 */
export const caseStudy: CaseContent = {
  eyebrow: 'Case de Sucesso em Destaque',
  client: 'Fones Pro Wireless & Áudio',
  context:
    'Reformulação completa da landing page e fluxo de checkout para e-commerce de eletrônicos de alto padrão, reduzindo o tempo de carregamento e eliminando fricção na decisão de compra.',
  metrics: [
    { value: '+340%', label: 'Aumento nas vendas relâmpago' },
    { value: '42%', label: 'Taxa de conversão de leads' },
    { value: '0,38s', label: 'Tempo total de carregamento' },
  ],
};
