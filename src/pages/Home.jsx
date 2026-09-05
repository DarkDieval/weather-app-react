import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [city, setCity] = useState(() => {
    return localStorage.getItem("lastCity") || "";
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedCity = city.trim();
    if (trimmedCity === "") {
      setError("Por favor, escribe el nombre de una ciudad.");
      return;
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(trimmedCity)) {
      setError("Por favor, escribe solo letras y espacios.");
      return;
    }
    setError("");
    navigate(`/results?city=${encodeURIComponent(trimmedCity)}`);
  };

  return (
    <div className="home__container">
      <h1>⛅ ClimaCool</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Ej. Bogotá, Madrid, Lima"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button type="submit">Buscar</button>
      </form>
      {error && <p className="home__error">{error}</p>}
    </div>
  );
}

export default Home;
