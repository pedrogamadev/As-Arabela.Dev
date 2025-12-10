import Nav from '../components/Nav';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import HeroSection from '../components/HeroSection';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

const App = () => (
  <div className="app-shell">
    <Nav />
    <main>
      <Hero />
      <FeatureGrid />
      <HeroSection />
      <Faq />
    </main>
    <Footer />
  </div>
);

export default App;
