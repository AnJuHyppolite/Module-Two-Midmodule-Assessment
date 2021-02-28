let numOfDice = document.querySelector("#number-of-dice");
let diceButton = document.querySelector("#roll-the-dice-btn");
let displayDice = document.querySelector("#display-dice")
let diceSum = document.querySelector("#sum-para")
let diceHistory = document.querySelector("#dice-para")

const rollDice = () => {
    let diceStr = ""
    let sum = 0;
    const numInput = Number(numOfDice.value);
    for (let i = 0; i < numInput; i++) {
        let randomIdx = Math.floor(Math.random() * dice.length)
        sum += randomIdx
    }
    diceSum.innerText = `Sum = ${sum}`
    // displayDice.innerText = dice[randomIdx]
    const li = document.createElement("li");
    li.textContent = `${sum}`
    diceHistory.appendChild(li);
};    

debugger

diceButton.addEventListener("click", rollDice)
