import { updateState, getCurrentTime, randomInt } from "./utils/index.js";
import { renderState } from "./ui/renderState";
import { PHRASES, DOM_IDS, INITIAL_STATE } from "./config/constants.js";
import { loadState, saveState } from "./utils/storage.js";

let coffeeState = loadState() || INITIAL_STATE;

const coffeeBtn = document.getElementById(DOM_IDS.button);
const todayCupsElement = document.getElementById(DOM_IDS.todayCups);
const lastCupElement = document.getElementById(DOM_IDS.lastCup);
const totalCupsElement = document.getElementById(DOM_IDS.totalCups);

renderState(todayCupsElement, coffeeState.todayCups);
renderState(lastCupElement, coffeeState.lastDrink);
renderState(coffeeBtn, coffeeState.buttonText);
renderState(totalCupsElement, coffeeState.totalCups);

coffeeBtn.addEventListener("click", () => {
  coffeeState = updateState(coffeeState, {
    buttonText: PHRASES[randomInt(0, PHRASES.length - 1)],
    todayCups: coffeeState.todayCups + 1,
    totalCups: coffeeState.totalCups + 1,
    lastDrink: getCurrentTime(),
  });

  saveState(coffeeState);

  renderState(todayCupsElement, coffeeState.todayCups);
  renderState(lastCupElement, coffeeState.lastDrink);
  renderState(coffeeBtn, coffeeState.buttonText);
  renderState(totalCupsElement, coffeeState.totalCups);
});
