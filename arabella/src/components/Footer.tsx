const Footer = () => (
  <footer className="footer" aria-label="Rodapé">
    <div className="container footer__top">
      <div className="footer__brand">
        <span className="footer__logo">Arabella.dev</span>
        <p>A plataforma definitiva para criar landing pages de alta conversão.</p>
        <div className="footer__social" aria-label="Redes sociais">
          <a
            href="https://wa.me/84991926432"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" alt="" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
            <img src="https://cdn-icons-png.flaticon.com/512/889/889147.png" alt="" />
          </a>
        </div>
      </div>
      <div className="footer__columns">
        <div>
          <h3>Produto</h3>
          <ul>
            <li>
              <a href="#ferramentas">Recursos</a>
            </li>
            <li>
              <a href="#faq">Preços</a>
            </li>
            <li>
              <a href="#resultados">Casos de uso</a>
            </li>
            <li>
              <a href="#automatize">Integrações</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Empresa</h3>
          <ul>
            <li>
              <a href="#construa">Sobre</a>
            </li>
            <li>
              <a href="#ferramentas">Blog</a>
            </li>
            <li>
              <a href="#resultados">Carreiras</a>
            </li>
            <li>
              <a href="#faq">Imprensa</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Recursos</h3>
          <ul>
            <li>
              <a href="#automatize">Documentação</a>
            </li>
            <li>
              <a href="#ferramentas">Guias</a>
            </li>
            <li>
              <a href="#automatize">API Reference</a>
            </li>
            <li>
              <a href="#faq">Status</a>
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
              <a href="#footer">Termos de Uso</a>
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
      <small>© {new Date().getFullYear()} Arabella.dev. Todos os direitos reservados.</small>
      <div className="footer__legal">
        <a href="#footer">Política de Privacidade</a>
        <a href="#footer">Termos de Uso</a>
        <a href="#footer">Cookies</a>
      </div>
    </div>
  </footer>
);

export default Footer;
