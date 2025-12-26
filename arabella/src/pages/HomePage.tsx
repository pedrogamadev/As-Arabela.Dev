import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import ResponsiveEverywhereSection from '../components/sections/ResponsiveEverywhereSection';
import IntegrationsSection from '../components/sections/IntegrationsSection';
import PricingPlans from '../components/sections/PricingPlans';
import Faq from '../components/Faq';

const HomePage = () => (
  <>
    <Hero />
    <FeatureGrid />
    <ResponsiveEverywhereSection />
    <IntegrationsSection />
    <PricingPlans />
    <Faq />
  </>
);

export default HomePage;
