

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

//dealer geting cards when pass button is clicked
//dealer gets cards if value of cards is below users value of cards
//dealer does NOT get cards if value is above users value or dealers cards are >= 21 



//learned how to use module on youtube from Web Dev Simplifield.
import changeBet from "/js/betting.js";

const hitBtn = document.querySelector("#hit-btn");
let walletNumEl = document.getElementById("wallet-num");
const betBtn = document.querySelector("#bet-btn");
const usersCardsTotalValueEl = document.getElementById("cards-num");

let walletNum = 5000;
let usersCardsTotalValue = 0;
let aceInput;
let deckOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, aceInput];


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
    } else if (usersCardsTotalValue >= 17 && usersCardsTotalValue < 22) {
        usersCardsTotalValueEl.style.color = 'green';
    } else {
        usersCardsTotalValueEl.style.color = 'red';
    }
}

