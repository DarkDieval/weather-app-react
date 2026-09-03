import { API_KEY, BASE_URL } from "./constants";

export const fetchWeather = async (city) => {
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`;
  const response = await fetch(url);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("No se encontró ninguna ciudad con ese nombre.");
    } else {
      throw new Error(
        "Error al obtener los datos. Intenta de nuevo más tarde.",
      );
    }
  }
  return response.json();
};
