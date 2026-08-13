import { useEffect } from 'react';
import { cta, footer, header, notFound } from '../content';
import SiteHeader from '../components/sections/SiteHeader';
import SiteFooter from '../components/sections/SiteFooter';
import NotFoundSection from '../components/sections/NotFoundSection';

/**
 * Rota curinga: qualquer endereço que não exista cai aqui.
 *
 * A hospedagem devolve 200 para todo caminho (SPA), então o `noindex`
 * é o que impede o buscador de indexar endereços quebrados como se
 * fossem páginas reais. Ele sai do `head` ao deixar a rota.
 */
const NotFoundPage = () => {
  useEffect(() => {
    document.title = notFound.documentTitle;

    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, follow';
    document.head.appendChild(robots);

    return () => robots.remove();
  }, []);

  return (
    <>
      <SiteHeader content={header} cta={cta} anchorPrefix="/" />
      <main>
        <NotFoundSection content={notFound} cta={cta} />
      </main>
      <SiteFooter content={footer} anchorPrefix="/" />
    </>
  );
};

export default NotFoundPage;
