import type { CallToAction } from './types';

/**
 * A página inteira tem UMA ação de conversão.
 *
 * Este objeto é a origem do texto e do destino em header, hero, cards de
 * plano, fechamento e barra fixa mobile. Não crie variações: o critério de
 * aceite exige que o texto seja idêntico em todos os pontos.
 */
export const cta: CallToAction = {
  label: 'Falar no WhatsApp',
  href: 'https://wa.me/5584991926432?text=Ol%C3%A1%21%20Quero%20uma%20landing%20page%20com%20a%20Arabella%20Dev.',
};
