import { API_KEY, BASE_URL } from "./constants";

export const fetchForecast = async (city) => {
  const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=es`;
  const response = await fetch(url);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("No se encontró ninguna ciudad con ese nombre.");
    } else {
      throw new Error(
        "No pudimos conectar con el servidor del clima. Revisa tu conexión a internet y vuelve a intentarlo.",
      );
    }
  }
  const data = await response.json();
  return data.list;
};
