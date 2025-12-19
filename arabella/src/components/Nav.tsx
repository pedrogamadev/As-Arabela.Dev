import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../nav-overrides.css';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isOrcamento = location.pathname === '/orcamentos';

  return (
    <header className={`nav glass-liquid ${isOrcamento ? 'nav--static' : ''}`} role="banner">
      <div className="container nav__inner">
        <a className="nav__brand" href="/#construa" onClick={() => setOpen(false)}>
          <img src="\imagens\logo-as-arabela-dev.png" alt="Arabella.dev" />
        </a>

        <button
          className="nav__mobile-toggle"
          type="button"
          onClick={() => setOpen(prev => !prev)}
          aria-expanded={open}
          aria-controls="menu-principal"
        >
          <span className="sr-only">Abrir menu</span>
          <span className="nav__hamburger" aria-hidden />
        </button>

        <nav id="menu-principal" className={`nav__menu ${open ? 'is-open' : ''}`} aria-label="Principal">
          <ul />
          <div className="nav__actions">
            <Link
              className="button button--primary"
              to="/orcamentos"
              onClick={() => setOpen(false)}
            >
              Fazer orçamento
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
