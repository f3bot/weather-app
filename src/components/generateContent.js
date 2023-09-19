import { generateTodayContent } from "./daily";

const generateContent = () => {
  const main = document.createElement("main");

  generateTodayContent(main);

  document.body.appendChild(main);
};

export { generateContent };
