import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import ResponsiveEverywhereSection from '../components/sections/ResponsiveEverywhereSection';
import IntegrationsSection from '../components/sections/IntegrationsSection';
import PricingPlans from '../components/sections/PricingPlans';
import SystemsSection from '../components/sections/SystemsSection';
import Faq from '../components/Faq';

const HomePage = () => (
  <>
    <Hero />
    <FeatureGrid />
    <ResponsiveEverywhereSection />
    <IntegrationsSection />
    <PricingPlans />
    <SystemsSection />
    <Faq />
  </>
);

export default HomePage;
