import { config } from "dotenv";
config();
//GLOBAL VARIABLE
const apiKey = process.env.API_KEY;

//Request to WEATHER API
export async function getForecast(params) {
  let { lat, lon, city } = params;
  let url;
  if (!city) {
    url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey} &q=${lat},${lon}&days=4&aqi=no&alerts=no`;
  } else {
    url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey} &q=${city}&days=4&aqi=no&alerts=no`;
  }

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

//Request to Geolocation API
export async function getGeolocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (err) => reject(err)
    );
  });
}
