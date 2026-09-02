import { API_KEY, BASE_URL } from "./constants";

export const fetchWeather = async (city) => {
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Ciudad no encontrada");
  }
  return response.json();
};
