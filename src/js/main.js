import { updateState, getCurrentTime, randomInt } from "./utils/index.js";
import { renderState } from "./ui/renderState";

const phrases = [
  "Cheer up!",
  "Drink strong coffee!",
  "Turn on!",
  "Coffee up!",
  "Raise adrenaline!",
  "Squeeze out the grains!",
];

let state = {
  buttonName: phrases[randomInt(0, phrases.length - 1)],
  cups: 0,
  lastDrink: "never",
};

const coffeeBtn = document.getElementById("coffee-btn");
const cups = document.getElementById("today-cups");
const lastCup = document.getElementById("last-dranked");

renderState(cups, state.cups);
renderState(lastCup, state.lastDrink);
renderState(coffeeBtn, state.buttonName);

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
