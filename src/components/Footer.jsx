import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Tênis Store</h3>

        <p>
          📱 WhatsApp:{" "}
          <a
            href="https://wa.me/5537999999999"
            target="_blank"
            rel="noreferrer"
          >
            (37) 99999-9999
          </a>
        </p>

        <p>
          📸 Instagram:{" "}
          <a
            href="https://instagram.com/tenisstore"
            target="_blank"
            rel="noreferrer"
          >
            @tenisstore
          </a>
        </p>

        <span>© 2026 — Todos os direitos reservados</span>
      </div>
    </footer>
  );
}

export default Footer;
