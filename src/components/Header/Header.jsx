import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <span className="header__logo-icon">🌦️</span>
        <span>Mi Clima</span>
      </Link>
      <nav className="header__nav">
        <Link to="/" className="header__link">
          Inicio
        </Link>
      </nav>
    </header>
  );
}

export default Header;
