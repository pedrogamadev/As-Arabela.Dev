import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WhatsappFloatingButton from '../components/WhatsappFloatingButton';
import ScrollToTop from '../components/ScrollToTop';
import HomePage from '../pages/HomePage';
import OrcamentosPage from '../pages/OrcamentosPage';
import CheckoutPage from '../pages/CheckoutPage';
import IntegrationsPage from '../pages/IntegrationsPage';

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <div className="app-shell">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/integracoes" element={<IntegrationsPage />} />
          <Route path="/orcamentos" element={<OrcamentosPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/chekout" element={<CheckoutPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsappFloatingButton />
    </div>
  </BrowserRouter>
);

export default App;
