import { useEffect, useState } from 'react';
import { useTheme } from '../app/providers';
import { brand } from '../lib/brand';
import logo from '../assets/logo-arabella.svg';

interface NavItem {
  id: string;
  label: string;
}

interface NavProps {
  navItems: NavItem[];
  ctaLabel: string;
}

const Nav = ({ navItems, ctaLabel }: NavProps) => {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState<string>('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map(item => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target) {
          setActive(visible.target.id);
        }
      },
      { threshold: [0.35, 0.55] },
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [navItems]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="nav" role="banner">
      <div className="nav__inner">
        <button
          className="nav__brand"
          onClick={() => scrollToSection('hero')}
          type="button"
          aria-label="Voltar ao início"
        >
          <span className="nav__logo" aria-hidden>
            <img src={logo} alt="Logo Arabella.dev" />
          </span>
          <span className="nav__name">Arabella.dev</span>
        </button>

        <nav className="nav__links" aria-label="Principal">
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
          <ul
            id="menu-principal"
            className={`nav__list ${open ? 'nav__list--open' : ''}`}
          >
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  className={`nav__link ${active === item.id ? 'is-active' : ''}`}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="nav__cta">
              <button
                type="button"
                className="button button--primary"
                onClick={() => scrollToSection('estimator')}
              >
                {ctaLabel}
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav__theme"
                onClick={toggleTheme}
                aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav__glow" style={{ background: brand.gradient }} aria-hidden />
    </header>
  );
};

export default Nav;
