

import changeWallet, {getCards, resetCards, walletNum}from "../js/game.js";
// import {  dealersRoundIndicater, usersRoundIndicater } from "../js/cards.js";


const currentBetEl = document.getElementById("bet-num");


let minBet = 50;
let maxBet = 500;
export let betInput;


export default function changeBet(){

    resetCards();
    if(walletNum <= 50){
        return alert("Not enough money. \n\n Add money to wallet and try again.")
    }
    betInput = prompt("Make a bet between $50-$500");
    // let promptInput = prompt("make a bet between $50-$500");
    // betInput = parseInt(promptInput, 10)
    if(isNaN(betInput)){
        alert("Please enter a valid input. \n\n Input needs to be a number. \n Make a bet between $50-$500.")
    }else {
        if (betInput >= minBet && betInput <= maxBet) {
            changeWallet(0, betInput);
            currentBetEl.innerText = betInput;
            for (let i = 0; i < 2; i++) {
                getCards();
            }
        } else if (betInput < minBet) {
            alert("The bet is too low. \n\n\n Try Again!");
        } else if (betInput > maxBet) {
            alert("The bet is too high. \n\n\n Try Again!");
        }
    }
    
}
