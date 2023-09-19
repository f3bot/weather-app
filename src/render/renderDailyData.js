import { fetchDailyData } from "../api/fetchData";
import { formatDate, formatTime } from "../changeChar";
import { findMatch, processCodesIcons } from "../weatherCodes";

async function renderDailyData(value) {
  let arr = await fetchDailyData(value);

  if (arr == false) {
    console.log("w chuj nie wyszlo");
  } else {
    console.log(arr);

    const weatherCodeSpan = document.querySelector(".weather-code-span");
    const city_span = document.querySelector(".city-span");
    const date_span = document.querySelector(".date-span");
    const time_span = document.querySelector(".time-span");
    const today_temp = document.querySelector(".today-temperature");
    const weather_code_icon = document.querySelector(".weather-code-icon");
    const apparent = document.querySelector(".today-apparent");
    const humidity = document.querySelector(".today-humidity");
    const rain = document.querySelector(".today-rain");
    const wind = document.querySelector(".today-wind");

    let weatherCodeValue = findMatch(arr.weathercode);

    weatherCodeSpan.textContent = weatherCodeValue;
    city_span.textContent = `${arr[1]} , ${arr[0]}`;
    date_span.textContent = formatDate(arr.time);
    time_span.textContent = formatTime(arr.time);
    today_temp.textContent = `${arr.temperature} °C`
    processCodesIcons(weather_code_icon, arr.weathercode);
  }
}

export { renderDailyData };
