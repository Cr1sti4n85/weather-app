let arrC = [];
let arrF = [];
let select = document.querySelector("select");

export function renderWeather(location, forecastArr, cardContainer) {
  const cityHeader = document.querySelector(".city-name");
  const region = document.querySelector(".city-region");
  cityHeader.innerText = location.name;
  region.innerText = `${location.region}, ${location.country}`;
  let html = "";
  select.value = "Show temperature";
  if (arrC.length !== 0) {
    arrC = [];
    arrF = [];
  }
  forecastArr.forEach((forecast, i) => {
    forecast.day.condition.icon = forecast.day.condition.icon.replace(
      "64x64",
      "128x128"
    );
    let day = new Date(`${forecast.date}T00:00:00Z`).toLocaleDateString(
      "en-US",
      { timeZone: "UTC", weekday: "long" }
    );

    let card = `
                  <div class="dia col-12 col-md-6 col-lg-3 text-center">
                      <div class="card">
                          <h3 class="card-header">${
                            i === 0 ? "Today" : day
                          }</h3>
                          <div class="card-body">
                              <img class="m-auto img-fluid rounded-circle" src="${
                                forecast.day.condition.icon
                              }">
                              <p class="mt-3 fs-5">${
                                forecast.day.condition.text
                              }</p>
  
                          </div>
                          <div class="temperaturas card-footer d-flex justify-content-around">
                              <span class="max temp" id="temp2">${
                                forecast.day.maxtemp_c
                              }</span>
                              <span class="min temp" id="temp3">${
                                forecast.day.mintemp_c
                              }</span>
                          </div>
                      </div>
                  </div>`;

    html = html + card;
    arrC.push(forecast.day.maxtemp_c, forecast.day.mintemp_c);
    arrF.push(forecast.day.maxtemp_f, forecast.day.mintemp_f);
  });

  cardContainer.insertAdjacentHTML("afterbegin", html);
}

export function switchUnits() {
  select.addEventListener("change", async () => {
    const temperatures = document.querySelectorAll(".temp");

    if (select.value === "C") {
      temperatures.forEach((temp, i) => {
        temp.innerText = arrC[i];
      });
    } else if (select.value === "F") {
      temperatures.forEach((temp, i) => {
        temp.innerText = arrF[i];
      });
    }
  });
}

export async function searchByLocation(handler) {
  const btnSearch = document.querySelector(".search-form");
  btnSearch.addEventListener("submit", async (e) => {
    e.preventDefault();
    let city = document.getElementById("input-city").value;
    handler(city);
  });
}

export function deleteCards(cardContainer) {
  let childrenEl = cardContainer.querySelectorAll(".dia");
  childrenEl.forEach((element) => {
    element.remove();
  });
}

export function removeCookie() {
  document.querySelector(".btn-cookie").addEventListener("click", () => {
    let cookie = document.querySelector(".remove-cookie");
    cookie.remove();
  });
}
