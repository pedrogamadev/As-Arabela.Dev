import { useState } from 'react';

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav glass-liquid" role="banner">
      <div className="container nav__inner">
        <a className="nav__brand" href="#construa" onClick={() => setOpen(false)}>
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
            <a
              className="button button--primary"
              href="https://wa.me/84991926432?text=olá,+gostaria+de+fazer+um+orçamento"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Fazer orçamento
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
