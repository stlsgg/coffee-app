const coffeeBtn = document.getElementById("coffee-btn");
const cups = document.getElementById("today-cups");
const lastCup = document.getElementById("last-dranked");
let counter = 0;

cups.innerText = counter;

coffeeBtn.addEventListener("click", () => {
	const now = new Date();

	++counter;
	cups.innerText = counter;

	const time = now.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});

	lastCup.innerText = time;
});
