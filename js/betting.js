

import changeWallet, {getCards, resetCards}from "../js/game.js";


const currentBetEl = document.getElementById("bet-num");

let minBet = 50;
let maxBet = 500;
export let betInput;




export default function changeBet(){
    resetCards();
    betInput = prompt("make a bet between $50-$500");
    console.log(betInput);
    if (betInput >= minBet && betInput <= maxBet) {
        changeWallet(0, betInput);
        currentBetEl.innerText = betInput;
        // starts the game off by dealing too cards
        for (let i = 0; i < 2; i++) {
            getCards();
            console.log("got card");
        }
    } else if (betInput < minBet) {
        alert("You'r bet is too low. \n\n\n Try Again!");
    } else if (betInput > maxBet) {
        alert("You'r bet is too high. \n\n\n Try Again!");
    }
    
}
