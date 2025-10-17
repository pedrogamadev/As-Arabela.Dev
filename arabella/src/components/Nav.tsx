import { useEffect, useMemo, useState } from 'react'
import { useTheme } from '../app/providers'
import { brand } from '../lib/brand'
import logo from '../assets/logo-arabella.png'
import { useScrollspy } from '../hooks/useScrollspy'

interface NavItem {
  id: string
  label: string
}

interface NavProps {
  navItems: NavItem[]
  ctaLabel: string
}

const Nav = ({ navItems, ctaLabel }: NavProps) => {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const ids = useMemo(() => navItems.map(item => item.id), [navItems])
  const active = useScrollspy(ids)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgb(var(--bg))/0.65] backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          className="flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold text-white transition hover:text-white/80"
          onClick={() => scrollToSection('hero')}
          type="button"
          aria-label="Voltar ao início"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
            <img src={logo} alt="Logo Arabella.dev" className="h-6 w-6" />
          </span>
          Arabella.dev
        </button>

        <nav className="flex items-center" aria-label="Principal">
          <button
            className="mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white shadow-soft md:hidden"
            type="button"
            onClick={() => setOpen(prev => !prev)}
            aria-expanded={open}
            aria-controls="menu-principal"
          >
            <span className="sr-only">Alternar menu</span>
            <span aria-hidden>{open ? '×' : '☰'}</span>
          </button>
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  className={`text-sm font-medium transition ${
                    active === item.id ? 'text-white' : 'text-white/50 hover:text-white'
                  }`}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="pill bg-blue-500 text-sm font-medium text-white shadow-soft transition hover:bg-blue-400"
                onClick={() => scrollToSection('estimator')}
              >
                {ctaLabel}
              </button>
            </li>
            <li>
              <button
                type="button"
                className="pill glass text-sm font-medium text-white/70 hover:text-white"
                onClick={toggleTheme}
                aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </li>
          </ul>
        </nav>

        {open && (
          <div
            id="menu-principal"
            className="absolute right-4 top-[calc(100%+1rem)] w-56 space-y-3 rounded-2xl border border-white/10 bg-[rgb(var(--card))]/95 p-4 shadow-soft md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    className={`w-full text-left text-sm font-medium transition ${
                      active === item.id ? 'text-white' : 'text-white/60 hover:text-white'
                    }`}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="pill bg-blue-500 text-sm font-medium text-white shadow-soft transition hover:bg-blue-400"
                onClick={() => scrollToSection('estimator')}
              >
                {ctaLabel}
              </button>
              <button
                type="button"
                className="pill glass text-sm font-medium text-white/70 hover:text-white"
                onClick={toggleTheme}
                aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
              >
                Tema {theme === 'light' ? 'escuro' : 'claro'}
              </button>
            </div>
          </div>
        )}

        <div
          className="pointer-events-none absolute inset-x-0 top-full h-[1px] opacity-70"
          style={{ backgroundImage: brand.gradient }}
          aria-hidden
        />
      </div>
    </header>
  )
}

export default Nav
