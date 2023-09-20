const weatherCodes = {
  0: "Clear Sky",
  1: "Mostly Clear",
  2: "Partly Cloudy",
  3: "Cloudy",
  45: "Fog",
  48: "Fog",
  51: "Drizzle",
  53: "Drizzle",
  55: "Drizzle",
  56: "Drizzle",
  57: "Drizzle",
  61: "Slight Rain",
  63: "Moderate Rain",
  65: "Heavy Rain",
  66: "Light Rain",
  67: "Heavy Rain",
  71: "Light Snow",
  73: "Moderate Snow",
  75: "Heavy Snow",
  77: "Snowing",
  80: "Light Showers",
  81: "Moderate Showers",
  82: "Heavy Showers",
  85: "Light Snow Showers",
  86: "Heavy Snow Showers",
};
const findMatch = (value) => {
  for (const code in weatherCodes) {
    if (parseInt(code) === value) {
      return weatherCodes[code];
    }
  }
};
const processCodesIcons = (icon, code) => {
  switch (code) {
    case 0:
      icon.src = "../src/assets/codeIcons/ClearSky.svg";
      break;
    case 1:
      icon.src = "../src/assets/codeIcons/Mostly Clear.svg";
      break;
    case 2:
      icon.src = "../src/assets/codeIcons/Partly Cloudy.svg";
      break;
    case 3:
      icon.src = "../src/assets/codeIcons/Cloudy.svg";
      break;
    case 45:
    case 48:
      icon.src = "../src/assets/codeIcons/Fog.svg";
      break;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      icon.src = "../src/assets/codeIcons/Drizzle.svg";
      break;
    case 61:
    case 63:
    case 66:
      icon.src = "../src/assets/codeIcons/Light Rain.svg";
      break;
    case 65:
    case 67:
      icon.src = "../src/assets/codeIcons/Heavy Rain.svg";
      break;
    case 71:
    case 73:
    case 75:
    case 77:
      icon.src = "../src/assets/codeIcons/Light Snow.svg";
      break;
    case 80:
    case 81:
    case 82:
      icon.src = "../src/assets/codeIcons/Light Rain.svg";
      break;
    case 85:
    case 86:
      icon.src = "../src/assets/codeIcons/Light Snow Showers.svg";
  }
};

export { weatherCodes, findMatch, processCodesIcons };
