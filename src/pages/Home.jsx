import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) setCity(lastCity);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      setError("Por favor, escribe una ciudad.");
      return;
    }
    setError("");
    navigate(`/results?city=${city.trim()}`);
  };

  return (
    <div className="home__container">
      <h1>🌤️ App del Clima</h1>
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
