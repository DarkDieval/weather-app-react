import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} ClimaCool - Desarrollado por Diego Valencia
      </p>
    </footer>
  );
}

export default Footer;
