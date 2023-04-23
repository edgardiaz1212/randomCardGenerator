/* eslint-disable */
import "bootstrap";
import "./style.css";

let body = document.body;
body.style.background = "green";

let parentdiv = document.querySelector("div");
parentdiv.id = "principal";

let cardBody = document.createElement("div");
cardBody.id = "card";
cardBody.style.background = "white";
cardBody.style.height = "400px";
cardBody.style.width = "250px";
cardBody.style.padding = "20px";
cardBody.style.borderRadius = "10px";
cardBody.style.border = "1px solid";
cardBody.style.margin = "2% auto";
cardBody.style.display = "inline-block";
cardBody.style.position = "relative";
parentdiv.appendChild(cardBody);

let cardTop = document.createElement("span");
cardTop.id = "top";
cardTop.style.top = "20px";
cardTop.style.left = "20px";
cardTop.style.fontSize = "70px";
cardTop.style.position = "absolute";

cardTop.style.color = "black";
cardBody.appendChild(cardTop);

let cardBottom = document.createElement("span");
cardBottom.id = "bottom";
cardBottom.style.bottom = "20px";
cardBottom.style.right = "20px";
cardBottom.style.fontSize = "70px";
cardBottom.style.position = "absolute";

cardBody.appendChild(cardBottom);

let cardNumber = document.createElement("span");
cardNumber.id = "number";
cardNumber.style.top = "50%";
cardNumber.style.left = "50%";
cardNumber.style.position = "absolute";
cardNumber.style.margin = "-25px 0 0 -25px";
cardNumber.style.fontSize = "60px";

cardBody.appendChild(cardNumber);

let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let palos = ["♦", "♥", "♠", "♣"];

let generateRandomCard = () => {
  let randomValue = Math.floor(Math.random() * 13);
  cardNumber.innerHTML = values[randomValue];

  let randomPalos = Math.floor(Math.random() * 4);
  cardBottom.innerHTML = palos[randomPalos];
  cardTop.innerHTML = palos[randomPalos];

  if (cardTop.textContent === "♦" || cardBottom.textContent === "♥") {
    cardTop.style.color = "red";
    cardBottom.style.color = "red";
  } else {
    cardTop.style.color = "black";
    cardBottom.style.color = "black";
  }
};

window.onload = () => {
  generateRandomCard();
};

let space = document.createElement("br");
parentdiv.appendChild(space);

let button1 = document.createElement("button");
button1.id = "button";
button1.textContent = "Random Card";
parentdiv.appendChild(button1);

button1.onclick = function() {
  generateRandomCard();
};
// input1.addEventListener("click", alert("hola"));
