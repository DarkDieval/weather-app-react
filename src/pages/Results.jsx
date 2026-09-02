import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchWeather } from "../utils/api";
import WeatherCard from "../components/WeatherCard/WeatherCard";

function Results() {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city") || "Bogotá";
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchWeather(city);
        setWeatherData(data);
        localStorage.setItem("lastCity", city);
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getWeather();
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
      <div className="error__container">
        <p>❌ Error: {error}</p>
        <button onClick={() => window.history.back()}>Volver</button>
      </div>
    );
  }

  if (!weatherData) return null;

  return (
    <div className="results__container">
      <button onClick={() => window.history.back()} className="back-button">
        ← Volver
      </button>
      <WeatherCard data={weatherData} />
    </div>
  );
}

export default Results;
