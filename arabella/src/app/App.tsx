import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WhatsappFloatingButton from '../components/WhatsappFloatingButton';
import HomePage from '../pages/HomePage';
import OrcamentosPage from '../pages/OrcamentosPage';
import CheckoutPage from '../pages/CheckoutPage';

const App = () => (
  <BrowserRouter>
    <div className="app-shell">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
