import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from '../app/App';
import NotFoundPage from '../pages/NotFoundPage';
import { cta, notFound } from '../content';

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/" element={<p>home</p>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MemoryRouter>,
  );

describe('página 404', () => {
  it('responde em qualquer endereço desconhecido, com h1 e código do erro', () => {
    renderAt('/endereco-que-nao-existe');

    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent(notFound.titleHighlight);
    expect(screen.getByText(notFound.eyebrow)).toBeInTheDocument();
    expect(document.title).toBe(notFound.documentTitle);
  });

  it('marca a rota como noindex enquanto está montada', () => {
    const { unmount } = renderAt('/sumiu');

    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, follow',
    );

    unmount();
    expect(document.querySelector('meta[name="robots"]')).toBeNull();
  });

  it('oferece saída: CTA único, volta para o início e destinos internos', () => {
    renderAt('/sumiu');

    const ctaLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(`a[href="${cta.href}"]`),
    );
    // header + corpo do erro
    expect(ctaLinks).toHaveLength(2);
    expect(new Set(ctaLinks.map(link => link.textContent?.trim()))).toEqual(
      new Set([cta.label]),
    );

    expect(screen.getByRole('link', { name: notFound.homeLink.label })).toHaveAttribute(
      'href',
      notFound.homeLink.href,
    );

    notFound.suggestions.forEach(suggestion => {
      expect(
        document.querySelector(`a[href="${suggestion.href}"]`),
        `destino ausente: ${suggestion.href}`,
      ).not.toBeNull();
    });
  });

  it('mantém os redirecionamentos das rotas antigas fora do 404', () => {
    // `App` monta o próprio BrowserRouter: o endereço vem do histórico.
    window.history.pushState({}, '', '/orcamentos');
    render(<App />);

    expect(window.location.pathname).toBe('/');
    expect(screen.queryByText(notFound.eyebrow)).not.toBeInTheDocument();
  });
});
