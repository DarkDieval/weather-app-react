function WeatherCard({ data }) {
  const { main, weather, wind, dt_txt } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

  const date = new Date(dt_txt);
  const formattedDate = date.toLocaleDateString("es-ES", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  const formattedTime = date.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="weather-card__container">
      <h2 className="weather-card__city">{formattedDate}</h2>
      <p className="weather-card__time">{formattedTime}</p>
      <img
        className="weather-card__icon"
        src={iconUrl}
        alt={weather[0].description}
      />
      <p className="weather-card__temp">{Math.round(main.temp)}°C</p>
      <p className="weather-card__desc">{weather[0].description}</p>
      <div className="weather-card__details">
        <p>💧 Humedad: {main.humidity}%</p>
        <p>💨 Viento: {wind.speed} m/s</p>
        <p>🌡️ Sensación térmica: {Math.round(main.feels_like)}°C</p>
      </div>
    </div>
  );
}

export default WeatherCard;
