const numOfDice = document.querySelector("#number-of-dice");
const diceButton = document.querySelector("#roll-the-dice-btn");
const diceHistory = document.querySelector("#dice-para")
const diceSum = document.querySelector("#sum-para")


const rollDice = () => {
    let sum = 0;
    const numInput = Number(numOfDice.value);
    for (let i = 0; i < numInput; i++) {
        let randomRoll = Math.floor(Math.random() * dice)
        sum += randomRoll
    }
    diceSum.innerText = `Sum: ${sum}`
};    

debugger

diceButton.addEventListener("click", rollDice)