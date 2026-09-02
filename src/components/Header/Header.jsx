import { Link } from "react-router-dom";
import "./Header.css";
import weatherIcon from "../assets/weather-icon.png";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img
          src={weatherIcon}
          alt="Icono del clima"
          className="header__logo-icon"
        />
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
