import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY, BASE_URL } from "../utils/constants";
import WeatherCard from "../components/WeatherCard/WeatherCard";

function Results() {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city") || "Bogotá";
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`;
        console.log("Fetching URL:", url);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Ciudad no encontrada");
        }
        const data = await response.json();
        setWeatherData(data);
        localStorage.setItem("lastCity", city);
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]);

  if (loading) {
    return (
      <div className="preloader">
        <div className="spinner"></div>
        <p>Buscando el clima...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>❌ Error: {error}</p>
        <button onClick={() => window.history.back()}>Volver</button>
      </div>
    );
  }

  if (!weatherData) return null;

  return (
    <div className="results">
      <button onClick={() => window.history.back()} className="back-button">
        ← Volver
      </button>
      <WeatherCard data={weatherData} />
    </div>
  );
}

export default Results;
