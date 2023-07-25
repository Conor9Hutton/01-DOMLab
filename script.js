"use strict";

// #1

let total = 0;
const totalParagraph = document.querySelector("#challenge1 p");
const cola = document.querySelector("#cola");
const peanuts = document.querySelector("#peanuts");
const chocolate = document.querySelector("#chocolate");
const fruit = document.querySelector("#fruit");

const form = document.querySelector("form");
let coinContainer = document.querySelector("#coin-container");
let myCoins = [];

const onButton = document.querySelector("#on");
const bulb = document.querySelector("#bulb");
const toggleButton = document.querySelector("#toggle");
const offButton = document.querySelector("#off");
const endButton = document.querySelector("#end");
const lightButtons = document.querySelectorAll("challenge3 button");

cola.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `$${total}.00`;
});
peanuts.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `$${total}.00`;
});

chocolate.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `$${total}.00`;
});

fruit.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `$${total}.00`;
});

// #2

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const howMany = document.querySelector("#howMany");
  const whichCoin = document.querySelector("#whichCoin");
  for (let i = 0; i < parseInt(howMany.value); i++) {
    const coin = document.createElement("li");
    coin.textContent = whichCoin.value;
    coin.classList.add("coin", whichCoin.value);
    coin.addEventListener("click", () => {
      coin.remove();
    });
    coinContainer.append(coin);
  }
  howMany.value = "";
  whichCoin.value = "";
});

// coinForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const amount = document.querySelector("#amount");
//   const type = document.querySelector("#type");
//   for (let i = 0; i < parseInt(amount.value); i++) {
//     const newCoin = document.createElement("li");
//     newCoin.textContent = type.value;
//     newCoin.classList.add("coin", type.value);
//     newCoin.addEventListener("click", () => {
//       newCoin.remove();
//     });
//     // <li></li>
//     coinContainer.append(newCoin);
//   }
// });

// #3

onButton.addEventListener("click", () => {
  bulb.classList.add("activated");
});

offButton.addEventListener("click", () => {
  bulb.classList.remove("activated");
});

toggleButton.addEventListener("click", () => {
  bulb.classList.toggle("activated");
});

endButton.addEventListener("click", () => {
  bulb.remove("");
  lightButtons.forEach((item) => {
    item.disabled.true;
  });
});
