

import changeWallet from "../js/game.js";

let minBet = 50;
let maxBet = 500;
let aceInput;


export default function changeBet(){
    let betInput = prompt("make a bet between $50-$500");
    if (betInput >= minBet && betInput <= maxBet) {
        changeWallet(0, betInput);
    } else if (betInput < minBet) {
        alert("You'r bet is too low. \n\n\n Try Again!");
    } else if (betInput > maxBet) {
        alert("You'r bet is too high. \n\n\n Try Again!");
    }
}