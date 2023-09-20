import { fetchDailyData } from "./api/fetchData";
import { generateContent } from "./components/generateContent";
import { renderDailyData } from "./render/renderDailyData";
import { renderWeeklyData } from "./render/renderWeeklyData";

async function init() {
  generateContent();
  await renderDailyData("New York");
  await renderWeeklyData("New York");

  const container = document.querySelector(".today-forecast");
  container.classList.remove("not-visible");
}

export { init };
