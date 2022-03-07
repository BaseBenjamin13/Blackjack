


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

//deck of cards will be an array 
//use math.random to get random index/card in deck
//const deckOfCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, userInput for ace, 11 or 1];

//dealer geting cards when pass button is clicked
//dealer gets cards if value of cards is below users value of cards
//dealer does NOT get cards if value is above users value or dealers cards are >= 21 



//console.log("linked");

const hitBtn = document.querySelector("#hit-btn");
let walletNumEl = document.getElementById("wallet-num");
const betBtn = document.querySelector("#bet-btn");

let walletNum = 5000;
let minBet = 50;
let maxBet = 500;

//add or subtract from wallet function.
function changeWallet(addNum, subNum) {
    console.log({walletNumEl, walletNum});
    walletNum -= subNum;
    walletNum += addNum;
    walletNumEl.innerText = walletNum;
    console.log({walletNumEl, walletNum});
}


//Making a bet.
betBtn.addEventListener('click', changeBet);
function changeBet(){
    let betInput = prompt("make a bet between $50-$500");
    if (betInput >= minBet && betInput <= maxBet) {
        changeWallet(0, betInput);
    } else if (betInput < minBet) {
        alert("You'r bet is too low. \n\n\n Try Again!");
    } else if (betInput > maxBet) {
        alert("You'r bet is too high. \n\n\n Try Again!");
    }
}




let usersCards = 0;

//hit button, adding cards to users deck
hitBtn.addEventListener('click', getCards);
function getCards(){
    usersCards++;
    console.log({usersCards});
}