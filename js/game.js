



//learned how to use module on youtube from Web Dev Simplifield.
import changeBet, {betInput} from "../js/betting.js";

import { deckOfCards, dealersDeckOfCards1, dealersDeckOfCards11 } from "../js/cards.js";

const hitBtn = document.querySelector("#hit-btn");
let walletNumEl = document.getElementById("wallet-num");
const betBtn = document.querySelector("#bet-btn");
let usersCardsTotalValueEl = document.getElementById("cards-num");
const addMoneyBtn = document.querySelector("#add-money-btn");
const passBtn = document.querySelector("#pass-btn");
let dealersCardsTotalValueEl = document.getElementById("dealer-num");
let currentBetEl = document.getElementById("bet-num");
let usersMostRecentCardEl = document.getElementById("users-recent-card");
let dealersMostRecentCardEl = document.getElementById("dealers-recent-card");

//users cards divs
let rightCard = document.getElementById("right-card");
let rightRightCard = document.getElementById("right-right-card");
let right3 = document.getElementById("right-3");
let right4 = document.getElementById("right-4");
let right5 = document.getElementById("right-5");
let right6 = document.getElementById("right-6");
let right7 = document.getElementById("right-7");
let right8 = document.getElementById("right-8");
let right9 = document.getElementById("right-9");
let right10 = document.getElementById("right-10");

//dealers cards divs
let leftCard = document.getElementById("left-card");
let leftLeftCard = document.getElementById("left-left-card");
let left3 = document.getElementById("left-3");
let left4 = document.getElementById("left-4");
let left5 = document.getElementById("left-5");
let left6 = document.getElementById("left-6");
let left7 = document.getElementById("left-7");
let left8 = document.getElementById("left-8");
let left9 = document.getElementById("left-9");
let left10 = document.getElementById("left-10");



export let walletNum = 500;
let usersCardsTotalValue = 0;
let dealersCardsTotalValue = 0;
let aceInput;

let usersRoundIndicater = 0;
let dealersRoundIndicater = 0;

let addMoneyInput;
let userWon;

//add or subtract from wallet function.
export default function changeWallet(addNum, subNum) {
    walletNum -= subNum;
    walletNum += addNum;
    walletNumEl.innerText = walletNum;
}

//Making a bet.
if(walletNum >= 50) {betBtn.addEventListener('click', changeBet)};

let usersCards = 0;

//hit button, adding cards to users deck
hitBtn.addEventListener('click', getCards);
export function getCards(){
    usersRoundIndicater++;
    //makes it so if theres no bet, hit button won't work
    if (parseInt(betInput) >= 50 && parseInt(betInput) <= 500 ) {
        if (walletNum >= 0){

            passBtn.disabled = false;
            hitBtn.disabled = false;

            usersCards++;
            let randomCard = deckOfCards[Math.floor(Math.random() * deckOfCards.length)];
            if (randomCard.name === 'Ace') {
                aceInput = prompt("You got an Ace, how do you want to use it. \n\n   11 or 1");
                aceInput = parseInt(aceInput);
                randomCard.num = aceInput;
            }
            usersCardsTotalValue += randomCard.num;
            usersCardsTotalValueEl.innerText = usersCardsTotalValue;
            
            if (usersCardsTotalValue > 10 && usersCardsTotalValue < 17) {
                usersCardsTotalValueEl.style.color = 'yellow';
                passBtn.style.color = 'yellow';
                hitBtn.style.color = 'yellow';
            } else if (usersCardsTotalValue >= 17 && usersCardsTotalValue < 22) {
                usersCardsTotalValueEl.style.color = 'rgb(0, 220, 0)';
                passBtn.style.color = 'rgb(0, 220, 0)';
                hitBtn.style.color = 'red';
            } else {
                usersCardsTotalValueEl.style.color = 'red';
                passBtn.style.color = 'red';
                hitBtn.style.color = 'rgb(0, 220, 0)';
            }
            //user goes over 21:
            if (usersCardsTotalValue > 21) {
                alert("You Lost!")
                let userWon = false;
                currentBetEl.innerText = '0';
            }

            if (usersRoundIndicater === 1) {
                rightRightCard.style.backgroundImage = `url(${randomCard.img})`;
            } else if (usersRoundIndicater === 2) {
                rightCard.style.backgroundImage = `url(${randomCard.img})`;
            }else if (usersRoundIndicater === 3) {
                right3.style.backgroundImage = `url(${randomCard.img})`;
            }else if (usersRoundIndicater === 4) {
                right4.style.backgroundImage = `url(${randomCard.img})`;
            }else if (usersRoundIndicater === 5) {
                right5.style.backgroundImage = `url(${randomCard.img})`;
            }else if (usersRoundIndicater === 6) {
                right6.style.backgroundImage = `url(${randomCard.img})`;
            }else if (usersRoundIndicater === 7) {
                right7.style.backgroundImage = `url(${randomCard.img})`;
            }else if (usersRoundIndicater === 8) {
                right8.style.backgroundImage = `url(${randomCard.img})`;
            }else if (usersRoundIndicater === 9) {
                right9.style.backgroundImage = `url(${randomCard.img})`;
            }else if (usersRoundIndicater === 10) {
                right10.style.backgroundImage = `url(${randomCard.img})`;
            }

        }else{
            alert("You ran out of money. Add more money to keep playing");
        }
    }
}


//Adding money
addMoneyBtn.addEventListener("click", addMoney) 
function addMoney() {
    addMoneyInput = prompt("How much money would you like to add \n Just enter a number");
    addMoneyInput = parseInt(addMoneyInput);
    changeWallet(addMoneyInput, 0);
}

// pass Button, dealer gets cards
passBtn.addEventListener('click', passToDealer);
function passToDealer(){
    console.log("pass");
    let dealersDeckOfCards;
    while (dealersCardsTotalValue <= usersCardsTotalValue && dealersCardsTotalValue < 22 
        && dealersCardsTotalValue !== 21){
            dealersRoundIndicater++;


            if (dealersCardsTotalValue < 11) {
                dealersDeckOfCards = dealersDeckOfCards11;
            } 
            if (dealersCardsTotalValue > 10) {
                dealersDeckOfCards = dealersDeckOfCards1;
            }
        //updating card and displaying card
        let randomCard = dealersDeckOfCards[Math.floor(Math.random() * dealersDeckOfCards.length)];

        dealersCardsTotalValue += randomCard.num;
        dealersCardsTotalValueEl.innerText = dealersCardsTotalValue;

        if (dealersRoundIndicater === 1) {
            leftLeftCard.style.backgroundImage = `url(${randomCard.img})`;
        } else if (dealersRoundIndicater === 2) {
            leftCard.style.backgroundImage = `url(${randomCard.img})`;
        }else if (dealersRoundIndicater === 3) {
            left3.style.backgroundImage = `url(${randomCard.img})`;
        }else if (dealersRoundIndicater === 4) {
            left4.style.backgroundImage = `url(${randomCard.img})`;
        }else if (dealersRoundIndicater === 5) {
            left5.style.backgroundImage = `url(${randomCard.img})`;
        }else if (dealersRoundIndicater === 6) {
            left6.style.backgroundImage = `url(${randomCard.img})`;
        }else if (dealersRoundIndicater === 7) {
            left7.style.backgroundImage = `url(${randomCard.img})`;
        }else if (dealersRoundIndicater === 8) {
            left8.style.backgroundImage = `url(${randomCard.img})`;
        }else if (dealersRoundIndicater === 9) {
            left9.style.backgroundImage = `url(${randomCard.img})`;
        }else if (dealersRoundIndicater === 10) {
            left10.style.backgroundImage = `url(${randomCard.img})`;
        }

    } if (dealersCardsTotalValue > 21 && usersCardsTotalValue < 22){
        alert("you WON!");
        userWon = true;
        // this is not prefered, upgrade this change wallet
        changeWallet(parseInt(currentBetEl.innerText) * 2, 0);
        currentBetEl.innerText = '0';
        disableHitAndPassButton()
    } else if (dealersCardsTotalValue === usersCardsTotalValue && usersCardsTotalValue < 22){
        alert("It's a TIE!");
        userWon = true;
        changeWallet(parseInt(currentBetEl.innerText) * 0.5, 0);
        currentBetEl.innerText = '0';
        disableHitAndPassButton()
    }else {
        alert("You Lost!");
        userWon = false;
        setTimeout(resetCards, 3000)
        currentBetEl.innerText = '0';
        disableHitAndPassButton()
    }
}

let rightCards = document.querySelectorAll(".right-cards");
let leftCards = document.querySelectorAll(".left");

function disableHitAndPassButton() {
    passBtn.disabled = true;
    hitBtn.disabled = true;
    passBtn.style.color = 'gray';
    hitBtn.style.color = 'gray';
}

export function resetCards() {
    usersCardsTotalValue = 0;
    usersCardsTotalValueEl.innerText = usersCardsTotalValue;
    dealersCardsTotalValue = 0;
    dealersCardsTotalValueEl.innerText = dealersCardsTotalValue;
    rightCards.forEach((card) => card.style.backgroundImage = 'none');
    leftCards.forEach((card) => card.style.backgroundImage = 'none');
    usersRoundIndicater = 0;
    dealersRoundIndicater = 0;
}


