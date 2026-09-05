import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchForecast } from "../utils/api";
import WeatherCard from "../components/WeatherCard/WeatherCard";

function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function Results() {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city") || "Bogotá";
  const formattedCity = capitalizeWords(city);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(() => {
    const saved = localStorage.getItem("visibleCount");
    return saved ? parseInt(saved, 10) : 3;
  });

  useEffect(() => {
    document.title = `ClimaCool - Pronóstico para ${formattedCity}`;
    const getForecast = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchForecast(city);
        setForecastData(data);
        localStorage.setItem("lastCity", city);
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
        setForecastData([]);
      } finally {
        setLoading(false);
      }
    };
    getForecast();
  }, [city, formattedCity]);

  useEffect(() => {
    localStorage.setItem("visibleCount", visibleCount.toString());
  }, [visibleCount]);

  if (loading) {
    return (
      <div className="preloader__container">
        <div className="spinner"></div>
        <p>🔍 Buscando el clima en {formattedCity}...</p>
      </div>
    );
  }

  if (error) {
    const isNotFound =
      error === "No se encontró ninguna ciudad con ese nombre.";
    return (
      <div className="error__container">
        <span className="error__icon">{isNotFound ? "🔍" : "⚠️"}</span>
        <h2 className="error__title">
          {isNotFound ? "Ciudad no encontrada" : "Algo salió mal"}
        </h2>
        <p className="error__message">{error}</p>
        <button onClick={() => window.history.back()} className="error__button">
          ← Volver a buscar
        </button>
      </div>
    );
  }

  if (!forecastData.length) return null;

  const visibleResults = forecastData.slice(0, visibleCount);
  const hasMore = visibleCount < forecastData.length;

  return (
    <div className="results__container">
      <div className="results__brand">
        <span className="results__brand-icon">⛅</span>
        <span className="results__brand-name">ClimaCool</span>
      </div>
      <button onClick={() => window.history.back()} className="back-button">
        <span className="back-button__icon">←</span> Volver
      </button>
      <h2 className="results__city">🌤️ Pronóstico para {formattedCity}</h2>
      {visibleResults.map((item, index) => (
        <WeatherCard key={index} data={item} />
      ))}
      {hasMore ? (
        <button onClick={() => setVisibleCount(visibleCount + 3)}>
          Mostrar más
        </button>
      ) : (
        forecastData.length > 3 && (
          <p className="no-more-results">
            📌 No hay más resultados disponibles
          </p>
        )
      )}
    </div>
  );
}

export default Results;
