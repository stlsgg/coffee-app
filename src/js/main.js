import { updateState, getCurrentTime, randomInt } from "./utils/index.js";
import { renderState } from "./ui/renderState";
import { PHRASES, DOM_IDS, INITIAL_STATE } from "./config/constants.js";
import { loadState, saveState } from "./utils/storage.js";

let coffeeState = loadState() || INITIAL_STATE;

const coffeeBtn = document.getElementById(DOM_IDS.button);
const cups = document.getElementById(DOM_IDS.todayCups);
const lastCup = document.getElementById(DOM_IDS.lastCup);
const totalCups = document.getElementById(DOM_IDS.totalCups);

renderState(cups, coffeeState.todayCups);
renderState(lastCup, coffeeState.lastDrink);
renderState(coffeeBtn, coffeeState.buttonName);
renderState(totalCups, coffeeState.totalCups);

coffeeBtn.addEventListener("click", () => {
  coffeeState = updateState(coffeeState, {
    buttonName: PHRASES[randomInt(0, PHRASES.length - 1)],
    todayCups: coffeeState.todayCups + 1,
    totalCups: coffeeState.totalCups + 1,
    lastDrink: getCurrentTime(),
  });

  saveState(coffeeState);

  renderState(cups, coffeeState.todayCups);
  renderState(lastCup, coffeeState.lastDrink);
  renderState(coffeeBtn, coffeeState.buttonName);
  renderState(totalCups, coffeeState.totalCups);
});
