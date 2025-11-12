import Nav from '../components/Nav';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonial';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';

const App = () => (
  <div className="app-shell">
    <Nav />
    <main>
      <Hero />
      <FeatureGrid />
      <Experience />
      <Testimonials />
      <Roadmap />
    </main>
    <Footer />
  </div>
);

export default App;
