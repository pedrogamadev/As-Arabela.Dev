const Footer = () => (
  <footer className="border-t border-white/10 bg-[rgb(var(--card))]/40 py-12 text-sm text-white/60" aria-label="Rodapé">
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
      <div className="max-w-sm space-y-4">
        <span className="text-lg font-semibold text-white">Arabella.dev</span>
        <p>
          Estúdio especializado em experiências web rápidas, acessíveis e pensadas para gerar resultado no Brasil.
        </p>
        <a href="mailto:oi@arabella.dev" className="text-white transition hover:text-blue-300">
          oi@arabella.dev
        </a>
        <div>
          <a
            className="text-white transition hover:text-blue-300"
            href="https://wa.me/5511999990000"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp comercial
          </a>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <strong className="text-white">Social</strong>
          <ul className="space-y-2">
            <li>
              <a href="https://www.linkedin.com/company/arabella-dev" target="_blank" rel="noreferrer" className="hover:text-white">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/arabella.dev" target="_blank" rel="noreferrer" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-white">
                Dribbble
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <strong className="text-white">Legal</strong>
          <ul className="space-y-2">
            <li>
              <a href="#privacidade" className="hover:text-white">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#termos" className="hover:text-white">
                Termos de Uso
              </a>
            </li>
          </ul>
          <span className="text-xs text-white/40">CNPJ 12.345.678/0001-99</span>
        </div>
      </div>
    </div>
    <div className="mt-12 text-center text-xs text-white/40">
      <small>© {new Date().getFullYear()} Arabella.dev. Todos os direitos reservados.</small>
    </div>
  </footer>
)

export default Footer
