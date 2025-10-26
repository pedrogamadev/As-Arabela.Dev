import { useState } from 'react';
import logo from '../assets/logo-arabella.svg';

interface NavItem {
  label: string;
  href: string;
}

interface NavProps {
  navItems: NavItem[];
}

const Nav = ({ navItems }: NavProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav" role="banner">
      <div className="container nav__inner">
        <a className="nav__brand" href="#hero">
          <img src={logo} alt="Arabella.dev" />
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
          <ul>
            {navItems.map(item => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav__actions">
            <a className="nav__signin" href="#hero">
              Entrar
            </a>
            <a className="button button--primary" href="#hero">
              Experimente grátis
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
