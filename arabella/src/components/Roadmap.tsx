const Roadmap = () => (
  <section id="saas" className="roadmap" aria-labelledby="roadmap-title">
    <div className="container roadmap__container">
      <div className="roadmap__card">
        <span className="roadmap__status">Em desenvolvimento</span>
        <h2 id="roadmap-title">Prepare-se para nossa plataforma SaaS completa</h2>
        <p>
          Estamos construindo uma experiência SaaS para criar, publicar e escalar landing pages em um só lugar.
          Cadastre-se para ser um dos primeiros a testar a versão beta e receber novidades exclusivas.
        </p>
        <form className="roadmap__form" aria-label="Cadastro para novidades">
          <label className="sr-only" htmlFor="saas-email">
            Digite seu e-mail
          </label>
          <input id="saas-email" type="email" name="email" placeholder="Seu e-mail profissional" required />
          <button type="submit">Quero receber novidades</button>
        </form>
      </div>
    </div>
  </section>
);

export default Roadmap;
