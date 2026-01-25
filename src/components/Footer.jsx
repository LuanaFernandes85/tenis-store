import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>NextStep</h3>

        <p>Moda urbana, tênis e acessórios</p>

        <div className="footer-links">
          <a
            href="https://wa.me/5537991241329"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>

        <small>
          © {new Date().getFullYear()} NextStep. Todos os direitos reservados.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
