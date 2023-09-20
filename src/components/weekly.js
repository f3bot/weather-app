import { renderCard } from "../render/renderCard";

const generateWeekly = (parent) => {
  const container = document.createElement("div");
  container.classList.add("weekly-forecast");

  for (let i = 0; i < 7; i++) {
    const card = document.createElement("div");
    card.classList.add("weekly-card");
    card.setAttribute("id", i);

    const dayOfWeek = document.createElement("span");
    dayOfWeek.classList.add("dayOfWeek");

    const container_ = document.createElement("div");
    container_.classList.add("weekly-info-container");

    const tempContainer = document.createElement("div");
    tempContainer.classList.add("temp-container");

    const realTemp = document.createElement("span");
    realTemp.classList.add("realTemp");

    const appTemp = document.createElement("span");
    appTemp.classList.add("apparent-temp");

    const ico = document.createElement("img");
    ico.classList.add("weekly-ico");

    tempContainer.appendChild(realTemp);
    tempContainer.appendChild(appTemp);

    card.appendChild(dayOfWeek);
    container_.appendChild(tempContainer);
    container_.appendChild(ico);
    card.appendChild(container_);

    container.appendChild(card);
  }

  parent.appendChild(container);
};

export { generateWeekly };
