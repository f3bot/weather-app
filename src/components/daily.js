import { fetchDailyData } from "../api/fetchData";
import { renderDailyData } from "../render/renderDailyData";
import { renderWeeklyData } from "../render/renderWeeklyData";

const generateTodayContent = (parent) => {
  const container = document.createElement("div");
  container.classList.add("today-forecast");
  container.classList.add("not-visible");

  generateLeft(container);
  generateRight(container);

  parent.appendChild(container);
};

const generateLeft = (parent) => {
  const leftContainer = document.createElement("div");
  leftContainer.classList.add("today-forecast-left");

  const weather_code_span = document.createElement("span");
  weather_code_span.classList.add("weather-code-span");

  const city = document.createElement("span");
  city.classList.add("city-span");
  const dateTimeDiv = document.createElement("div");
  dateTimeDiv.classList.add("date-time-div");

  const date = document.createElement("span");
  date.classList.add("date-span");
  const time = document.createElement("span");
  time.classList.add("time-span");

  dateTimeDiv.appendChild(date);
  dateTimeDiv.appendChild(time);

  const temperature = document.createElement("span");
  temperature.classList.add("today-temperature");

  const changeUnitsButton = document.createElement("div");
  changeUnitsButton.classList.add("change-units-btn");
  changeUnitsButton.textContent = "Display °F";

  const weather_code_icon = document.createElement("img");
  weather_code_icon.classList.add("weather-code-icon");

  const inputDiv = document.createElement("div");
  inputDiv.classList.add("input-div");

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Search Location...";

  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error-span");

  addInputListener(input);
  inputDiv.appendChild(input);

  leftContainer.appendChild(weather_code_span);
  leftContainer.appendChild(city);
  leftContainer.appendChild(dateTimeDiv);
  leftContainer.appendChild(temperature);
  leftContainer.appendChild(changeUnitsButton);
  leftContainer.appendChild(weather_code_icon);
  leftContainer.appendChild(inputDiv);
  leftContainer.appendChild(errorSpan);

  parent.appendChild(leftContainer);
};

const generateRight = (parent) => {
  const parentContainer = document.createElement("div");
  parentContainer.classList.add("today-forecast-right");

  const text = ["Feels like", "Humidity", "Chance of Rain", "Wind Speed"];
  const icons = [
    "./../src/assets/right/feelslike.svg",
    "./../src/assets/right/moisture.svg",
    "./../src/assets/right/rain.svg",
    "./../src/assets/right/WIND.svg",
  ];

  const classLists = [
    "today-apparent",
    "today-humidity",
    "today-rain",
    "today-wind",
  ];

  for (let i = 0; i < text.length; i++) {
    const container = document.createElement("div");
    container.classList.add("today-right-container");

    const ico = document.createElement("img");
    ico.src = icons[i];

    const leftDiv = document.createElement("div");
    const title = document.createElement("p");

    title.textContent = text[i];
    const value = document.createElement("span");
    value.classList.add(classLists[i]);

    leftDiv.appendChild(title);
    leftDiv.appendChild(value);

    container.appendChild(ico);
    container.appendChild(leftDiv);

    parentContainer.appendChild(container);
  }

  parent.appendChild(parentContainer);
};

const addInputListener = (item) => {
  item.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      if (item.value != "") {
        renderDailyData(item.value);
        renderWeeklyData(item.value);
        //Render7DayData

        item.value = "";
      }
    }
  });
};

const changeUnitsListener = (item) => {
  const todayTemp = document.querySelector(".today-temperature");
  const todayTempApp = document.querySelector(".today-apparent");
  const wind = document.querySelector(".today-wind");
  const weeklyReal = document.querySelectorAll(".realTemp");
  const weeklyApp = document.querySelectorAll(".apparent-temp");

  let farenheit = false;

  item.addEventListener("click", (e) => {
    console.log(todayTemp);

    if (!farenheit) {
      todayTemp.textContent = changeToF(todayTemp);
      todayTempApp.textContent = changeToF(todayTempApp);
      wind.textContent = changeToMph(wind);
      for (let i = 0; i < weeklyReal.length; i++) {
        weeklyReal[i].textContent = changeToF(weeklyReal[i]);
        weeklyApp[i].textContent = changeToF(weeklyApp[i]);
      }

      farenheit = true;
    } else {
      todayTemp.textContent = changeToC(todayTemp);
      todayTempApp.textContent = changeToC(todayTempApp);
      wind.textContent = changeTokmh(wind);
      for (let i = 0; i < weeklyReal.length; i++) {
        weeklyApp[i].textContent = changeToC(weeklyApp[i]);
        weeklyReal[i].textContent = changeToC(weeklyReal[i]);
      }

      farenheit = false;
    }
  });
};

const changeToF = (item) => {
  let tempCelsius = parseInt(item.textContent);

  return `${Math.round(32 + (9 / 5) * tempCelsius)} °F`;
};

const changeToMph = (item) => {
  const windSpeedkmh = parseInt(item.textContent);

  return `${Math.round(windSpeedkmh / 1.609344)} mph`;
};

const changeToC = (item) => {
  let tempF = parseInt(item.textContent);

  return `${Math.round((5 / 9) * (tempF - 32))} °C`;
};

const changeTokmh = (item) => {
  const windSpeedMph = parseInt(item.textContent);

  return `${Math.round(windSpeedMph * 1.60934)} km/h`;
};

export { generateTodayContent, changeUnitsListener };
