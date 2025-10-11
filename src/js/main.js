import { updateState } from "./utils/updateState";

const coffeeBtn = document.getElementById("coffee-btn");
const cups = document.getElementById("today-cups");
const lastCup = document.getElementById("last-dranked");
let counter = 0;

updateState(cups, counter);

coffeeBtn.addEventListener("click", () => {
  const now = new Date();

  updateState(cups, ++counter);

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  updateState(lastCup, time);
});
