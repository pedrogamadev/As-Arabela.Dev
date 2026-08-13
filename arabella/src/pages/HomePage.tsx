import {
  builder,
  caseStudy,
  contrast,
  cta,
  faq,
  finalCta,
  footer,
  guarantee,
  header,
  hero,
  included,
  plans,
  process,
  projects,
  socialProof,
} from '../content';
import { useScrollDepth } from '../hooks/useScrollDepth';
import MobileCtaBar from '../components/MobileCtaBar';
import SiteHeader from '../components/sections/SiteHeader';
import HeroSection from '../components/sections/HeroSection';
import SocialProofBar from '../components/sections/SocialProofBar';
import ContrastSection from '../components/sections/ContrastSection';
import ProcessSection from '../components/sections/ProcessSection';
import IncludedSection from '../components/sections/IncludedSection';
import CaseSection from '../components/sections/CaseSection';
import BuilderSection from '../components/sections/BuilderSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import PlansSection from '../components/sections/PlansSection';
import GuaranteeSection from '../components/sections/GuaranteeSection';
import FaqSection from '../components/sections/FaqSection';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import SiteFooter from '../components/sections/SiteFooter';

/**
 * Composição da landing page.
 *
 * Este é o único lugar que conhece a camada de conteúdo. As seções são
 * componentes puros de apresentação e recebem tudo por props. A ordem
 * abaixo é a ordem aprovada — não reordene.
 */
const HomePage = () => {
  useScrollDepth();

  return (
    <>
      <SiteHeader content={header} cta={cta} />
      <main>
        <HeroSection content={hero} cta={cta} />
        <SocialProofBar metrics={socialProof} />
        <ContrastSection content={contrast} />
        <ProcessSection content={process} />
        <IncludedSection content={included} />
        <CaseSection content={caseStudy} />
        <BuilderSection content={builder} />
        <ProjectsSection content={projects} />
        <PlansSection content={plans} cta={cta} />
        <GuaranteeSection content={guarantee} />
        <FaqSection content={faq} />
        <FinalCtaSection content={finalCta} cta={cta} />
      </main>
      <SiteFooter content={footer} />
      <MobileCtaBar cta={cta} revealAfterId="topo" hideOverId="site-footer" />
    </>
  );
};

export default HomePage;
