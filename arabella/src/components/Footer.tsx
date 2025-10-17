const Footer = () => (
  <footer className="footer" aria-label="Rodapé">
    <div className="container footer__container">
      <div className="footer__brand">
        <span className="footer__logo">Arabella.dev</span>
        <p>
          Estúdio especializado em experiências web rápidas, acessíveis e pensadas para gerar
          resultado no Brasil.
        </p>
        <a href="mailto:oi@arabella.dev" className="footer__link">
          oi@arabella.dev
        </a>
        <a className="footer__link" href="https://wa.me/5511999990000" target="_blank" rel="noreferrer">
          WhatsApp comercial
        </a>
      </div>

      <div className="footer__links">
        <strong>Social</strong>
        <ul>
          <li>
            <a href="https://www.linkedin.com/company/arabella-dev" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/arabella.dev" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">
              Dribbble
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__links">
        <strong>Legal</strong>
        <ul>
          <li>
            <a href="#privacidade">Política de Privacidade</a>
          </li>
          <li>
            <a href="#termos">Termos de Uso</a>
          </li>
        </ul>
        <span className="footer__cnpj">CNPJ 12.345.678/0001-99</span>
      </div>
    </div>
    <div className="footer__bottom">
      <small>© {new Date().getFullYear()} Arabella.dev. Todos os direitos reservados.</small>
    </div>
  </footer>
);

export default Footer;
