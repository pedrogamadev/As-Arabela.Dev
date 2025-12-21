const Footer = () => (
  <footer className="footer" aria-label="Rodapé">
    <div className="container footer__top">
      <div className="footer__brand">
        <span className="footer__logo">Arabella.dev</span>
        <p>Landing pages focadas em conversão.</p>
      </div>
      <a
        className="footer__instagram"
        href="https://www.instagram.com/arabella.dev"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram da Arabella.dev"
      >
        <span className="footer__instagram-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
            <path
              d="M16.5 7.5h.01M7.5 2.75h9A4.75 4.75 0 0 1 21.25 7.5v9A4.75 4.75 0 0 1 16.5 21.25h-9A4.75 4.75 0 0 1 2.75 16.5v-9A4.75 4.75 0 0 1 7.5 2.75Zm4.5 5.25a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>@arabella.dev</span>
      </a>
    </div>
    <div className="footer__bottom" id="footer">
      <small>© 2025 Arabella.dev. Todos os direitos reservados.</small>
      <div className="footer__legal">
        <a href="#footer">Política de Privacidade</a>
        <a href="#footer">Termos de Uso</a>
      </div>
    </div>
  </footer>
);

export default Footer;
