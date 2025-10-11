import { updateState } from "./utils/updateState";
import { renderState } from "./ui/renderState";
import { getCurrentTime } from "./utils/getCurrentTime";

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
