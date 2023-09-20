import { fetchWeeklyData } from "../api/fetchData";
import { formatDay } from "../changeChar";
import { processCodesIcons } from "../weatherCodes";

async function renderWeeklyData(value) {
  let arr = await fetchWeeklyData(value);

  if (arr == false) {
    console.log("W chuj nie wyszlo");
  } else {
    console.log(arr);
    const dayOfWeekSpan = document.querySelectorAll(".dayOfWeek");
    const appTemp = document.querySelectorAll(".apparent-temp");
    const RealTemp = document.querySelectorAll(".realTemp");
    const ico = document.querySelectorAll(".weekly-ico");
    for (let i = 0; i < dayOfWeekSpan.length; i++) {
      dayOfWeekSpan[i].textContent = formatDay(arr.daily.time[i]);
      RealTemp[i].textContent = `${Math.round(
        (arr.daily.temperature_2m_max[i] + arr.daily.temperature_2m_min[i]) / 2
      )} °C`;
      appTemp[i].textContent = `${Math.round(
        arr.daily.apparent_temperature_min[i]
      )} °C`;
      processCodesIcons(ico[i], arr.daily.weathercode[i]);
    }
  }
}

export { renderWeeklyData };
