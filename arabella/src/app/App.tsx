import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import OrcamentosPage from '../pages/OrcamentosPage';

const App = () => (
  <BrowserRouter>
    <div className="app-shell">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/orcamentos" element={<OrcamentosPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
