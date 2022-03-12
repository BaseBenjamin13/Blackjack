



//learned how to use module on youtube from Web Dev Simplifield.
import changeBet, {betInput} from "/js/betting.js";

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

let walletNum = 5000;
let usersCardsTotalValue = 0;
let dealersCardsTotalValue = 0;
let aceInput;


let addMoneyInput;
let userWon;


//add or subtract from wallet function.
export default function changeWallet(addNum, subNum) {
    console.log({walletNumEl, walletNum});
    walletNum -= subNum;
    walletNum += addNum;
    walletNumEl.innerText = walletNum;
    console.log({walletNumEl, walletNum});
}


//Making a bet.
betBtn.addEventListener('click', changeBet);


let usersCards = 0;

//hit button, adding cards to users deck
hitBtn.addEventListener('click', getCards);
export function getCards(){
    //makes it so if theres no bet, hit button won't work
    if (parseInt(betInput) >= 50 && parseInt(betInput) <= 500) {

        usersCards++;
        console.log({usersCards});
        let randomCard = deckOfCards[Math.floor(Math.random() * deckOfCards.length)];
        if (randomCard.name === 'Ace') {
            aceInput = prompt("You got an Ace, how do you want to use it. \n\n             11 or 1");
            //found parseInt on stackoverflow.
            aceInput = parseInt(aceInput);
            randomCard.num = aceInput;
            // let num = aceInput + usersCards;
            // console.log(num);
        }
        //adding total value of cards the html El.
        usersCardsTotalValue += randomCard.num;
        console.log(usersCardsTotalValue);
        usersCardsTotalValueEl.innerText = usersCardsTotalValue;
        console.log(randomCard);
        usersMostRecentCardEl.innerText = ` ${randomCard.name} of ${randomCard.suit}`;
        console.log({usersMostRecentCardEl});
        //changing color of total cards value.
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
            alert("You Lose! Sorry, but your a loser 🥲.")
            let userWon = false;
            currentBetEl.innerText = '0';
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
    while (dealersCardsTotalValue < usersCardsTotalValue && dealersCardsTotalValue < 22 
        || dealersCardsTotalValue === 21){


            if (dealersCardsTotalValue < 11) {
                // dealersDeckOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
                dealersDeckOfCards = dealersDeckOfCards11;
            } 
            if (dealersCardsTotalValue > 10) {
                // dealersDeckOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1];
                dealersDeckOfCards = dealersDeckOfCards1;
            }
        
        let randomCard = dealersDeckOfCards[Math.floor(Math.random() * dealersDeckOfCards.length)];
        console.log(randomCard.num);
        console.log(randomCard);
        console.log({dealersCardsTotalValue});
        dealersCardsTotalValue += randomCard.num;
        dealersCardsTotalValueEl.innerText = dealersCardsTotalValue;
        dealersMostRecentCardEl.innerText = ` ${randomCard.name} of ${randomCard.suit}`;

    } if (dealersCardsTotalValue > 21 && usersCardsTotalValue < 22){
        alert("you WON!");
        userWon = true;
        // this is not prefered, upgrade this change wallet
        changeWallet(parseInt(currentBetEl.innerText), 0);
        return currentBetEl.innerText = '0';
    } else if (dealersCardsTotalValue === usersCardsTotalValue && usersCardsTotalValue < 22){
        alert("It's a TIE!");
        userWon = true;
        changeWallet(parseInt(currentBetEl.innerText * 0.5), 0);
        return currentBetEl.innerText = '0';
    }else {
        alert("You Lose! Sorry, but your a loser 🥲.");
        userWon = false;

        return currentBetEl.innerText = '0';
    }
    
    
}



export function resetCards() {
    usersCardsTotalValue = 0;
    usersCardsTotalValueEl.innerText = usersCardsTotalValue;
    dealersCardsTotalValue = 0;
    dealersCardsTotalValueEl.innerText = dealersCardsTotalValue;
}







