import Nav from '../components/Nav';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonial';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';

const App = () => {
  const navItems = [
    { label: 'Recursos', href: '#features' },
    { label: 'Preços', href: '#roadmap' },
    { label: 'Blog', href: '#experience' },
    { label: 'Casos', href: '#testimonials' },
  ];

  return (
    <div className="app-shell">
      <Nav navItems={navItems} />
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
};

export default App;
