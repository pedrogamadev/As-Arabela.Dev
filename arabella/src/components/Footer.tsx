const Footer = () => (
  <footer className="footer" aria-label="Rodapé">
    <div className="container footer__top">
      <div className="footer__brand">
        <span className="footer__logo">arabela.dev</span>
        <p>
          A plataforma definitiva para criar landing pages de alta conversão. Em breve, uma solução SaaS
          completa para o seu time de marketing.
        </p>
      </div>
      <div className="footer__columns">
        <div>
          <h3>Produto</h3>
          <ul>
            <li>
              <a href="#features">Recursos</a>
            </li>
            <li>
              <a href="#roadmap">Preços</a>
            </li>
            <li>
              <a href="#experience">Casos de uso</a>
            </li>
            <li>
              <a href="#roadmap">Integrações</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Empresa</h3>
          <ul>
            <li>
              <a href="#hero">Sobre</a>
            </li>
            <li>
              <a href="#roadmap">Blog</a>
            </li>
            <li>
              <a href="#testimonials">Carreiras</a>
            </li>
            <li>
              <a href="#roadmap">Imprensa</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Recursos</h3>
          <ul>
            <li>
              <a href="#roadmap">Documentação</a>
            </li>
            <li>
              <a href="#roadmap">Guias</a>
            </li>
            <li>
              <a href="#roadmap">API Reference</a>
            </li>
            <li>
              <a href="#roadmap">Status</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="#footer">Privacidade</a>
            </li>
            <li>
              <a href="#footer">Termos</a>
            </li>
            <li>
              <a href="#footer">Cookies</a>
            </li>
            <li>
              <a href="#footer">Licenças</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer__bottom" id="footer">
      <small>© {new Date().getFullYear()} arabela.dev. Todos os direitos reservados.</small>
      <div className="footer__legal">
        <a href="#footer">Política de Privacidade</a>
        <a href="#footer">Termos de Uso</a>
        <a href="#footer">Cookies</a>
      </div>
    </div>
  </footer>
);

export default Footer;
