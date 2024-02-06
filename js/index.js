import { hideSpinner, showSpinner } from "./spinner.js";
import { getForecast, getGeolocation } from "./apiRequest.js";
import {
  renderWeather,
  switchUnits,
  removeCookie,
  deleteCards,
  searchByLocation,
} from "./rendering.js";
import { closeError, renderError } from "./error.js";
//Global variable
const cardContainer = document.querySelector(".card-container");

//Get the location based on the current geolocation.
//request to weather api and UI rendering.
const getLocation = async () => {
  try {
    if ("geolocation" in navigator) {
      const position = await getGeolocation();
      const data = await getForecast({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
      hideSpinner();
      renderWeather(data.location, data.forecast.forecastday, cardContainer);
    } else {
      renderError(
        "Could not get current location. Please enter city manually."
      );
    }
  } catch (error) {
    renderError(error.message);
  }
};

//get forecast based on city name
const getForecastByName = async (city) => {
  try {
    showSpinner();
    const data = await getForecast({ city });
    if (data.error) throw data.error;
    deleteCards(cardContainer);
    hideSpinner();
    renderWeather(data.location, data.forecast.forecastday, cardContainer);
  } catch (error) {
    hideSpinner();
    renderError(error.message);
    closeError();
  }
};

function init() {
  getLocation();
  switchUnits();
  searchByLocation(getForecastByName);
  removeCookie();
}

init();
