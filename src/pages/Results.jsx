import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchForecast } from "../utils/api";
import WeatherCard from "../components/WeatherCard/WeatherCard";

function Results() {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city") || "Bogotá";
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
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
  }, [city]);

  if (loading) {
    return (
      <div className="preloader__container">
        <div className="spinner"></div>
        <p>Buscando el clima...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="results__container">
        <p className="error__message">{error}</p>
        <button onClick={() => window.history.back()} className="back-button">
          ← Volver
        </button>
      </div>
    );
  }

  if (!forecastData.length) return null;

  const visibleResults = forecastData.slice(0, visibleCount);
  const hasMore = visibleCount < forecastData.length;

  return (
    <div className="results__container">
      <button onClick={() => window.history.back()} className="back-button">
        ← Volver
      </button>
      {visibleResults.map((item, index) => (
        <WeatherCard key={index} data={item} />
      ))}
      {hasMore && (
        <button onClick={() => setVisibleCount(visibleCount + 3)}>
          Mostrar más
        </button>
      )}
    </div>
  );
}

export default Results;
