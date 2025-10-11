import { updateState, getCurrentTime, randomInt } from "./utils/index.js";
import { renderState } from "./ui/renderState";
import { PHRASES, DOM_IDS, INITIAL_STATE } from "./config/constants.js";

let state = INITIAL_STATE;

const coffeeBtn = document.getElementById(DOM_IDS.button);
const cups = document.getElementById(DOM_IDS.cups);
const lastCup = document.getElementById(DOM_IDS.lastCup);

renderState(cups, state.cups);
renderState(lastCup, state.lastDrink);
renderState(coffeeBtn, state.buttonName);

coffeeBtn.addEventListener("click", () => {
  state = updateState(state, {
    buttonName: PHRASES[randomInt(0, PHRASES.length - 1)],
    cups: state.cups + 1,
    lastDrink: getCurrentTime(),
  });

  renderState(cups, state.cups);
  renderState(lastCup, state.lastDrink);
  renderState(coffeeBtn, state.buttonName);
});
