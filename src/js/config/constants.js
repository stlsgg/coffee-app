// configuration for project
import { randomInt } from "../utils/randomInt.js";

export const PHRASES = [
  "Cheer up!",
  "Drink strong coffee!",
  "Turn on!",
  "Coffee up!",
  "Raise adrenaline!",
  "Squeeze out the grains!",
];

export const DOM_IDS = {
  button: "coffee-btn",
  todayCups: "today-cups",
  lastCup: "last-dranked",
  totalCups: "total-cups",
};

export const INITIAL_STATE = {
  buttonText: PHRASES[randomInt(0, PHRASES.length - 1)],
  todayCups: 0,
  totalCups: 0,
  lastDrink: "never",
};

export const LOCAL_STORAGE_KEY = "coffeeApp";
