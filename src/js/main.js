import { updateState, getCurrentTime, randomInt } from "./utils/index.js";
import { renderState } from "./ui/renderState";

let state = {
  buttonName: "Coffee up!",
  cups: 0,
  lastDrink: "never",
};

const phrases = [
  "Cheer up!",
  "Drink strong coffee!",
  "Turn on!",
  "Coffee up!",
  "Raise adrenaline!",
  "Squeeze out the grains!",
];

const coffeeBtn = document.getElementById("coffee-btn");
const cups = document.getElementById("today-cups");
const lastCup = document.getElementById("last-dranked");

renderState(cups, state.cups);
renderState(lastCup, state.lastDrink);

coffeeBtn.addEventListener("click", () => {
  state = updateState(state, {
    buttonName: phrases[randomInt(0, phrases.length - 1)],
    cups: state.cups + 1,
    lastDrink: getCurrentTime(),
  });

  renderState(cups, state.cups);
  renderState(lastCup, state.lastDrink);
  renderState(coffeeBtn, state.buttonName);
});
