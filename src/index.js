
import "../src/stylesheet.css";
import { init } from "./init";
import { changeUnitsListener } from "./components/daily";

init();

changeUnitsListener(document.querySelector(".change-units-btn"));

