import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { cta, faq, plans } from '../content';

const renderHome = () =>
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

describe('landing page', () => {
  it('renderiza as seções na ordem aprovada', () => {
    renderHome();

    const order = [
      'hero-title',
      'contraste-title',
      'processo-title',
      'inclusos-title',
      'case-title',
      'quem-constroi-title',
      'projetos-title',
      'planos-title',
      'garantia-title',
      'faq-title',
      'fechamento-title',
    ];

    const positions = order.map(id => {
      const element = document.getElementById(id);
      expect(element, `título ausente: ${id}`).not.toBeNull();
      return Array.prototype.indexOf.call(document.querySelectorAll('*'), element);
    });

    const sorted = [...positions].sort((a, b) => a - b);
    expect(positions).toEqual(sorted);
  });

  it('usa um único texto de CTA, idêntico em todos os pontos', () => {
    renderHome();

    // Busca por href em vez de role: a barra fixa mobile nasce
    // `aria-hidden`, então consultas por role a ignorariam.
    const ctaLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(`a[href="${cta.href}"]`),
    );

    // header + hero + 3 planos + fechamento + barra mobile
    expect(ctaLinks).toHaveLength(7);

    const labels = new Set(ctaLinks.map(link => link.textContent?.trim()));
    expect(labels).toEqual(new Set([cta.label]));
  });

  it('mostra os três planos com preço e prazo vindos dos dados', () => {
    renderHome();

    plans.plans.forEach(plan => {
      expect(screen.getByText(plan.price)).toBeInTheDocument();
      expect(screen.getByText(plan.deadline)).toBeInTheDocument();
    });

    expect(screen.getByText(plans.plans[1].badge as string)).toBeInTheDocument();
  });

  it('lista as nove perguntas e termina com a que direciona para /sistemas', () => {
    renderHome();

    expect(faq.entries).toHaveLength(9);
    expect(faq.entries[8].question).toBe('Vocês só fazem landing page?');
    expect(faq.entries[8].answer).toContain('/sistemas');
  });
});

describe('acordeão do FAQ', () => {
  it('é operável apenas com teclado e expõe aria-expanded e aria-controls', async () => {
    const user = userEvent.setup();
    renderHome();

    const firstQuestion = screen.getByRole('button', { name: faq.entries[0].question });

    expect(firstQuestion).toHaveAttribute('aria-expanded', 'false');
    expect(firstQuestion).toHaveAttribute('aria-controls');
    expect(screen.queryByText(faq.entries[0].answer)).not.toBeInTheDocument();

    firstQuestion.focus();
    expect(firstQuestion).toHaveFocus();

    await user.keyboard('{Enter}');
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'true');

    const panel = document.getElementById(firstQuestion.getAttribute('aria-controls') as string);
    expect(panel).not.toBeNull();
    expect(within(panel as HTMLElement).getByText(faq.entries[0].answer)).toBeInTheDocument();

    await user.keyboard(' ');
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'false');
  });

  it('mantém apenas um item aberto por vez', async () => {
    const user = userEvent.setup();
    renderHome();

    const first = screen.getByRole('button', { name: faq.entries[0].question });
    const second = screen.getByRole('button', { name: faq.entries[1].question });

    await user.click(first);
    expect(first).toHaveAttribute('aria-expanded', 'true');

    await user.click(second);
    expect(second).toHaveAttribute('aria-expanded', 'true');
    expect(first).toHaveAttribute('aria-expanded', 'false');
  });
});
