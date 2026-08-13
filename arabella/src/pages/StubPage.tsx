import { useEffect } from 'react';
import { cta, footer, header } from '../content';
import type { StubContent } from '../content/stubs';
import SiteHeader from '../components/sections/SiteHeader';
import SiteFooter from '../components/sections/SiteFooter';
import StubSection from '../components/sections/StubSection';

interface StubPageProps {
  content: StubContent;
}

/** Casca das rotas secundárias: header, bloco de placeholder e footer. */
const StubPage = ({ content }: StubPageProps) => {
  useEffect(() => {
    document.title = content.documentTitle;
  }, [content.documentTitle]);

  return (
    <>
      <SiteHeader content={header} cta={cta} anchorPrefix="/" />
      <main>
        <StubSection
          eyebrow={content.eyebrow}
          heading={content.heading}
          paragraph={content.paragraph}
          cta={cta}
        />
      </main>
      <SiteFooter content={footer} anchorPrefix="/" />
    </>
  );
};

export default StubPage;
