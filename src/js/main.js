import { updateState, getCurrentTime, randomInt } from "./utils/index.js";
import { renderState } from "./ui/renderState";
import { PHRASES, DOM_IDS, INITIAL_STATE } from "./config/constants.js";
import { loadState, saveState } from "./utils/storage.js";

let state = loadState() || INITIAL_STATE;

const coffeeBtn = document.getElementById(DOM_IDS.button);
const cups = document.getElementById(DOM_IDS.todayCups);
const lastCup = document.getElementById(DOM_IDS.lastCup);
const totalCups = document.getElementById(DOM_IDS.totalCups);

renderState(cups, state.todayCups);
renderState(lastCup, state.lastDrink);
renderState(coffeeBtn, state.buttonName);
renderState(totalCups, state.totalCups);

coffeeBtn.addEventListener("click", () => {
  state = updateState(state, {
    buttonName: PHRASES[randomInt(0, PHRASES.length - 1)],
    todayCups: state.todayCups + 1,
    totalCups: state.totalCups + 1,
    lastDrink: getCurrentTime(),
  });

  saveState(state);

  renderState(cups, state.todayCups);
  renderState(lastCup, state.lastDrink);
  renderState(coffeeBtn, state.buttonName);
  renderState(totalCups, state.totalCups);
});
