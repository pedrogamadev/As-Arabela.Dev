import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import PricingPlans from '../sections/PricingPlans';

const renderComponent = () => render(<PricingPlans />, { wrapper: MemoryRouter });

describe('PricingPlans', () => {
  it('exibe título e subtítulo descritivos', () => {
    renderComponent();

    expect(screen.getByRole('heading', { level: 2, name: 'Escolha o plano ideal para seu projeto' })).toBeInTheDocument();
    expect(
      screen.getByText(
        'Pacotes prontos que reduzem a fricção na compra e facilitam sua decisão. Todos incluem domínio e hospedagem.'
      )
    ).toBeInTheDocument();
  });

  it('renderiza três planos com CTAs direcionando ao orçamento com query de plano', () => {
    renderComponent();

    expect(screen.getAllByRole('heading', { level: 3, name: 'Landing Page Essencial' }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('heading', { level: 3, name: 'Landing Page Profissional' }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('heading', { level: 3, name: 'Landing Page + Página Extra' }).length).toBeGreaterThan(0);

    const [essentialCta] = screen.getAllByRole('link', { name: 'Contratar plano Essencial' });
    const [professionalCta] = screen.getAllByRole('link', { name: 'Escolher plano Profissional' });
    const [proCta] = screen.getAllByRole('link', { name: 'Contratar plano Pro' });

    expect(essentialCta).toHaveAttribute('href', '/orcamentos?plano=essencial');
    expect(professionalCta).toHaveAttribute('href', '/orcamentos?plano=profissional');
    expect(proCta).toHaveAttribute('href', '/orcamentos?plano=pro');
  });

  it('dá destaque visual ao plano profissional e mantém CTA secundário para orçamento sob medida', () => {
    renderComponent();

    const featuredHeading = screen.getAllByRole('heading', { level: 3, name: 'Landing Page Profissional' })[0];
    const featuredCard = featuredHeading?.closest('article');
    expect(featuredCard?.className).toMatch(/ring-2/);

    const [customBudgetCta] = screen.getAllByRole('link', { name: 'Fazer orçamento sob medida' });
    expect(customBudgetCta).toHaveAttribute('href', '/orcamentos');
  });
});
