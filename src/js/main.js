import { updateState } from "./utils/updateState";
import { renderState } from "./ui/renderState";

let state = { cups: 0, lastDrink: "never" };

const coffeeBtn = document.getElementById("coffee-btn");
const cups = document.getElementById("today-cups");
const lastCup = document.getElementById("last-dranked");

renderState(cups, state.cups);
renderState(lastCup, state.lastDrink);

coffeeBtn.addEventListener("click", () => {
  const now = new Date();

  state = updateState(state, { cups: state.cups + 1 });
  renderState(cups, state.cups);

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  state = updateState(state, { lastDrink: time });
  renderState(lastCup, state.lastDrink);
});
