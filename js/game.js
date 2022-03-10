

//put in money/start out with money  ✅
//add wallet text   ✅
//grab it from the dom ✅
//have the number be a number so i can subtract it when beting ✅

//Bet
//make bet button ✅
//add button to js ✅
// make function for button that ✅
// in functions call changeWallet ✅
// add userinput for bet button ✅
// use input as parameters in changeWallet ✅ 
// make minimum and maximum bet ✅
// error message if min or max is not met ✅

//deck of cards will be an array  ✅
//use math.random to get random index/card in deck ✅
//const deckOfCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, userInput for ace, 11 or 1]; ✅
//if user gets ace then ask for user input to pick 11 or 1 ✅ 
// make ace Input a number not a string which it is now, ✅
// Number. does not work on aceInput or im using it wrong, used parseInt found on stackoverflow ✅

//users cards total value. ✅
// make totalvalue var. ✅
// make html el and put it in js. ✅
// when hit button is clicked add random card to totalvalue. ✅
// when total cards is below 10 then color red, above 10 color yellow, above 17 green over 21 red. ✅

// add money ✅
// create button to add money ✅
// button takes in input from user ✅
// add input to wallet using changeWallet() ✅

// add pass button. ✅
// add dealers total vaule. ✅
// pass,hit button changes color with users cards. ✅
// use while loop, dealer gets cards until it wins or goes over 21. ✅
// users loses if dealers cards are above users cards and below 22. ✅

//dealer geting cards when pass button is clicked ✅
//dealer gets cards if value of cards is below users value of cards ✅
//dealer does NOT get cards if value is above users value or dealers cards are >= 21 ✅

//display Bet; ✅
// if user wins add bet back into wallet; ✅

// if user wins or loses bet = 0; ✅
// fix ace when dealer gets it, right now its just a NaN or unkown; ✅
// if users cards go over 21 user loses; ✅
// make userWon boolean with if statements making it true or false,
// use userWon in functions instead of long if statements;

// start game by dealing 2 cards, probably want to do it in the bet function;
// deck of cards into an array of objects so i can grab name and suit;
// reset cards after win/lose for dealer and user;



//learned how to use module on youtube from Web Dev Simplifield.
import changeBet from "/js/betting.js";

const hitBtn = document.querySelector("#hit-btn");
let walletNumEl = document.getElementById("wallet-num");
const betBtn = document.querySelector("#bet-btn");
const usersCardsTotalValueEl = document.getElementById("cards-num");
const addMoneyBtn = document.querySelector("#add-money-btn");
const passBtn = document.querySelector("#pass-btn");
const dealersCardsTotalValueEl = document.getElementById("dealer-num");
let currentBetEl = document.getElementById("bet-num");


let walletNum = 5000;
let usersCardsTotalValue = 0;
let dealersCardsTotalValue = 0;
let aceInput;
let deckOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, aceInput];
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
function getCards(){
    usersCards++;
    console.log({usersCards});
    let randomCard = deckOfCards[Math.floor(Math.random() * deckOfCards.length)];
    if (randomCard == deckOfCards[12]) {
        aceInput = prompt("You got an Ace, how do you want to use it. \n\n             11 or 1");
        //found parseInt on stackoverflow.
        aceInput = parseInt(aceInput);
        randomCard = aceInput;
        // let num = aceInput + usersCards;
        // console.log(num);
    }
    //adding total value of cards the html El.
    usersCardsTotalValue += randomCard;
    console.log(usersCardsTotalValue);
    usersCardsTotalValueEl.innerText = usersCardsTotalValue;
    console.log(randomCard);
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

    while (dealersCardsTotalValue < usersCardsTotalValue && dealersCardsTotalValue < 22 
        || dealersCardsTotalValue === 21){


            if (dealersCardsTotalValue < 11) {
                deckOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
                
            } 
            if (dealersCardsTotalValue > 10) {
                deckOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1];
                
            }
        
        let randomCard = deckOfCards[Math.floor(Math.random() * deckOfCards.length)];
        console.log({randomCard});
        console.log({dealersCardsTotalValue});
        dealersCardsTotalValue += randomCard;
        dealersCardsTotalValueEl.innerText = dealersCardsTotalValue;

    } if (dealersCardsTotalValue > 21 && usersCardsTotalValue < 22){
        alert("you WON!");
        userWon = true;
        // this is not prefered, upgrade this change wallet
        changeWallet(parseInt(currentBetEl.innerText), 0)
        return currentBetEl.innerText = '0';
    } else if (dealersCardsTotalValue === usersCardsTotalValue && usersCardsTotalValue < 22){
        alert("It's a TIE!");
        userWon = true;
        changeWallet(parseInt(currentBetEl.innerText * 0.5), 0)
        return currentBetEl.innerText = '0';
    }else {
        alert("You Lose! Sorry, but your a loser 🥲.")
        userWon = false;
        return currentBetEl.innerText = '0';
    }
    
}








