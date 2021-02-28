let numOfDice = document.querySelector("#number-of-dice");
let diceButton = document.querySelector("#roll-the-dice-btn");
let diceSum = document.querySelector("#sum-para");
let displayDice = document.querySelector("#dice-para");
const ul = document.querySelector("ul")

const rollDice = () => {
    let diceStr = "";
    const numInput = Number(numOfDice.value);
    let sum = 0;
    for (let i = 0; i < numInput; i++) {
    let randomIdx = Math.floor(Math.random() * dice.length);
    diceStr += dice[randomIdx];
    sum += randomIdx + 1
    }
    diceSum.textContent = `Sum = ${diceStr} ${sum}`;

  const li = document.createElement("li");
//   li.textContent = `${diceStr} = ${sum}`;
  li.textContent = diceStr + "=" + sum;
  ul.appendChild(li);
};

diceButton.addEventListener("click", rollDice);
