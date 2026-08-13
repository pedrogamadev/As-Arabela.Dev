/**
 * Ponto único de disparo de eventos.
 *
 * A implementação é neutra de propósito: empilha em `window.dataLayer` e
 * repassa para `window.umami` quando existir. Para ligar outro provedor,
 * altere apenas `track` — nenhum componente precisa mudar.
 */

export type AnalyticsEvent =
  /** Clique em qualquer CTA. `section` identifica a origem. */
  | { name: 'cta_click'; section: CtaSection }
  /** Clique no botão de um card de plano. */
  | { name: 'plan_click'; planId: string }
  /** Abertura de um item do FAQ (fechar não dispara). */
  | { name: 'faq_open'; question: string }
  /** Marco de profundidade de rolagem. */
  | { name: 'scroll_depth'; percent: 25 | 50 | 75 | 100 };

export type CtaSection = 'header' | 'hero' | 'plans' | 'final' | 'mobile_bar';

type EventPayload = Record<string, unknown>;

interface AnalyticsWindow extends Window {
  dataLayer?: EventPayload[];
  umami?: { track?: (name: string, data?: EventPayload) => void };
}

export const track = (event: AnalyticsEvent): void => {
  if (typeof window === 'undefined') {
    return;
  }

  const { name, ...payload } = event;
  const scope = window as AnalyticsWindow;

  scope.dataLayer = scope.dataLayer ?? [];
  scope.dataLayer.push({ event: name, ...payload });

  scope.umami?.track?.(name, payload);

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug('[analytics]', name, payload);
  }
};

export const trackCtaClick = (section: CtaSection) => track({ name: 'cta_click', section });
export const trackPlanClick = (planId: string) => track({ name: 'plan_click', planId });
export const trackFaqOpen = (question: string) => track({ name: 'faq_open', question });
