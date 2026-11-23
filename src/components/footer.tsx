import stylefooter from "../styles/footer.module.css";

function Footer() {
  return (
    <footer className={stylefooter["footer"]}>
      <div className={stylefooter["footer-container"]}>
        <div className={stylefooter["footer-section brand"]}>
          <h3 className={stylefooter["footer-logo"]}>
            GrupoF<span>.</span>
          </h3>
          <p className={stylefooter["footer-description"]}>
            Desarrollamos soluciones digitales innovadoras y eficientes para
            impulsar tu proyecto al siguiente nivel.
          </p>
        </div>

        <div className={stylefooter["footer-section links"]}>
          <h4>Programadores</h4>

          <div className={stylefooter["social-links"]}>
            <p>Daniel Bello castro</p>
            <p>michael Moreno Acuna</p>
            <p>Hernan Dario FLorez Benitez</p>
          </div>
        </div>
        <div className={stylefooter["footer-section contact"]}>
          <h4>Contactos</h4>
          <div className={stylefooter["social-links"]}>
            <a
              className={stylefooter["links"]}
              href="https://github.com/danielsbeca-svg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a className={stylefooter["links"]} href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
          <div className={stylefooter["social-links"]}>
            <a
              className={stylefooter["links"]}
              href="https://github.com/lider-alcatraz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a className={stylefooter["links"]} href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
          <div className={stylefooter["social-links"]}>
            <a
              className={stylefooter["links"]}
              href="https://github.com/hernanDarioFlorezBenitez"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              className={stylefooter["links"]}
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className={stylefooter["footer-bottom"]}>
        <p>
          &copy; 2026 grupo F. ANALISIS Y DESARROLLO DE SOFTWARE. (3336149).
        </p>
      </div>
    </footer>
  );
}

export default Footer;
