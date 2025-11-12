import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import HeroSection from '../HeroSection';

const hexToRgb = (hex: string) => {
  const normalized = hex.replace('#', '');
  const bigint = parseInt(normalized, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
};

const luminance = ({ r, g, b }: { r: number; g: number; b: number }) => {
  const transform = (value: number) => {
    const channel = value / 255;
    return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  };

  const [rLin, gLin, bLin] = [r, g, b].map(transform);
  return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
};

const contrastRatio = (foregroundHex: string, backgroundHex: string) => {
  const foregroundLum = luminance(hexToRgb(foregroundHex));
  const backgroundLum = luminance(hexToRgb(backgroundHex));
  const lighter = Math.max(foregroundLum, backgroundLum);
  const darker = Math.min(foregroundLum, backgroundLum);
  return (lighter + 0.05) / (darker + 0.05);
};

describe('HeroSection', () => {
  it('permite navegação por teclado entre os cartões de passo', () => {
    render(<HeroSection />);

    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(3);
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');

    fireEvent.keyDown(tabs[0], { key: 'ArrowRight' });
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');

    fireEvent.keyDown(tabs[1], { key: 'ArrowLeft' });
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
  });

  it('renderiza conteúdo previsto para cada passo e mantém consistência visual', async () => {
    const { asFragment } = render(<HeroSection />);

    const heroHeadings = screen.getAllByRole('heading', { level: 1, name: 'Seu site em 3 passos.' });
    expect(heroHeadings.length).toBeGreaterThan(0);
    expect(screen.getAllByText('Orçamento na hora + design gratuito').length).toBeGreaterThan(0);
    expect(asFragment()).toMatchSnapshot();

    const transparencyTabs = screen.getAllByRole('tab', { name: /Transparência total de custos/i });
    expect(transparencyTabs.length).toBeGreaterThan(0);
    fireEvent.click(transparencyTabs[0]);
    await waitFor(() => {
      expect(screen.getByText('Domínio')).toBeInTheDocument();
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('garante contraste mínimo AA entre texto e fundo na janela interativa', () => {
    const baseBackground = '#020617'; // slate-950
    const primaryText = '#f1f5f9'; // slate-100
    const secondaryText = '#e2e8f0'; // slate-200

    expect(contrastRatio(primaryText, baseBackground)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(secondaryText, baseBackground)).toBeGreaterThanOrEqual(4.5);
  });
});

