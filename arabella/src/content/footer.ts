import type { FooterContent } from './types';

export const footer: FooterContent = {
  brandName: 'Arabella Dev',
  description:
    'Estúdio de desenvolvimento. Landing pages sob demanda e sistemas sob medida.',
  columns: [
    {
      title: 'Página',
      links: [
        { label: 'Planos', href: '#planos', targetId: 'planos' },
        { label: 'Como funciona', href: '#como-funciona', targetId: 'como-funciona' },
        { label: 'FAQ', href: '#faq', targetId: 'faq' },
      ],
    },
    {
      title: 'Outros serviços',
      links: [
        { label: 'Sistemas sob medida', href: '/sistemas' },
        { label: 'Parceiros', href: '/parceiros' },
      ],
    },
    {
      title: 'Contato',
      links: [
        { label: 'WhatsApp', href: 'https://wa.me/5584991926432' },
        { label: 'Instagram', href: 'https://www.instagram.com/arabella.dev' },
      ],
    },
  ],
  copyright: '© 2026 Arabella Dev. Todos os direitos reservados.',
};
