import { generateTodayContent } from "./daily";
import { generateWeekly } from "./weekly";

const generateContent = () => {
  const main = document.createElement("main");

  generateTodayContent(main);
  generateWeekly(main);

  document.body.appendChild(main);
};

export { generateContent };
