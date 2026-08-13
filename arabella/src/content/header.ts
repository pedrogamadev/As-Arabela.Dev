import type { HeaderContent } from './types';

export const header: HeaderContent = {
  brandName: 'Arabella Dev',
  logoSrc: '/imagens/logo-as-arabela-dev.png',
  navLabel: 'Principal',
  nav: [
    { label: 'Planos', targetId: 'planos' },
    { label: 'Como funciona', targetId: 'como-funciona' },
    { label: 'FAQ', targetId: 'faq' },
  ],
  // Configurável por dado: atualize conforme a agenda real do mês.
  availability: '2 vagas para setembro',
};
