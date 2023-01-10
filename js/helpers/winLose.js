import changeWallet from '../game.js';
import { disableHitAndPassButton, enableBetButton } from './buttons.js';

const statusText = document.getElementById("status-text");
let currentBetEl = document.getElementById("bet-num");


export function userWon(){
    setTimeout(() => {alert("you WON!")}, 100);
    changeWallet(parseInt(currentBetEl.innerText) * 2, 0);
    currentBetEl.innerText = '0';
    disableHitAndPassButton()
    enableBetButton()
    statusText.innerText = "Place bet to start playing!"
}
export function userLost(){
    setTimeout(() => {alert("You Lost!")}, 100);
    currentBetEl.innerText = '0';
    disableHitAndPassButton()
    enableBetButton()
    statusText.innerText = "Place bet to start playing!"
}
export function tieGame(){
    setTimeout(() => {alert("It's a TIE!")}, 100);
    changeWallet(parseInt(currentBetEl.innerText), 0);
    currentBetEl.innerText = '0';
    disableHitAndPassButton()
    enableBetButton()
    statusText.innerText = "Place bet to start playing!"
}