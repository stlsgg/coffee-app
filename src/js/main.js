import { updateState, getCurrentTime } from "./utils/index.js";
import { renderState } from "./ui/renderState";

let state = {
  cups: 0,
  lastDrink: "never",
};

const coffeeBtn = document.getElementById("coffee-btn");
const cups = document.getElementById("today-cups");
const lastCup = document.getElementById("last-dranked");

renderState(cups, state.cups);
renderState(lastCup, state.lastDrink);

coffeeBtn.addEventListener("click", () => {
  state = updateState(state, {
    cups: state.cups + 1,
    lastDrink: getCurrentTime(),
  });

  renderState(cups, state.cups);
  renderState(lastCup, state.lastDrink);
});
