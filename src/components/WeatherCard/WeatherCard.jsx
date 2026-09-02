function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

  return (
    <div className="weather-card__container">
      <h2 className="weather-card__city">{name}</h2>
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
