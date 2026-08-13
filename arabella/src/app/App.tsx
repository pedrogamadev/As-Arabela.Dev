import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import StubPage from '../pages/StubPage';
import { partnersStub, systemsStub } from '../content/stubs';

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sistemas" element={<StubPage content={systemsStub} />} />
      <Route path="/parceiros" element={<StubPage content={partnersStub} />} />
      {/* Rotas do site anterior: preservam links externos já publicados. */}
      <Route path="/orcamentos" element={<Navigate to="/" replace />} />
      <Route path="/checkout" element={<Navigate to="/" replace />} />
      <Route path="/chekout" element={<Navigate to="/" replace />} />
      <Route path="/integracoes" element={<Navigate to="/" replace />} />
      {/* Endereço desconhecido: mostra o 404 em vez de redirecionar em silêncio. */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
