

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
// user can only "Hit" if min bet is met; ✅

// Mar 10th
// start game by dealing 2 cards, probably want to do it in the bet function; ✅
// deck of cards into an array of objects so i can grab name and suit; ✅
// reset cards after win/lose for dealer and user; ✅

//put all deck of cards and resetCards into new cards.js file;
// display what cards you got;



//learned how to use module on youtube from Web Dev Simplifield.
import changeBet, {betInput} from "/js/betting.js";


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
// let deckOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, aceInput];
let deckOfCards = [
    //2's
    {name: '2', suit: 'Hearts', num: 2},
    {name: '2', suit: 'Clubs', num: 2},
    {name: '2', suit: 'Diamonds', num: 2},
    {name: '2', suit: 'Spades', num: 2},
    //3's
    {name: '3', suit: 'Hearts', num: 3},
    {name: '3', suit: 'Clubs', num: 3},
    {name: '3', suit: 'Diamonds', num: 3},
    {name: '3', suit: 'Spades', num: 3},
    //4's
    {name: '4', suit: 'Hearts', num: 4},
    {name: '4', suit: 'Clubs', num: 4},
    {name: '4', suit: 'Diamonds', num: 4},
    {name: '4', suit: 'Spades', num: 4},
    //5's
    {name: '5', suit: 'Hearts', num: 5},
    {name: '5', suit: 'Clubs', num: 5},
    {name: '5', suit: 'Diamonds', num: 5},
    {name: '5', suit: 'Spades', num: 5},
    //6's
    {name: '6', suit: 'Hearts', num: 6},
    {name: '6', suit: 'Clubs', num: 6},
    {name: '6', suit: 'Diamonds', num: 6},
    {name: '6', suit: 'Spades', num: 6},
    //7's
    {name: '7', suit: 'Hearts', num: 7},
    {name: '7', suit: 'Clubs', num: 7},
    {name: '7', suit: 'Diamonds', num: 7},
    {name: '7', suit: 'Spades', num: 7},
    //8's
    {name: '8', suit: 'Hearts', num: 8},
    {name: '8', suit: 'Clubs', num: 8},
    {name: '8', suit: 'Diamonds', num: 8},
    {name: '8', suit: 'Spades', num: 8},
    //9's
    {name: '9', suit: 'Hearts', num: 9},
    {name: '9', suit: 'Clubs', num: 9},
    {name: '9', suit: 'Diamonds', num: 9},
    {name: '9', suit: 'Spades', num: 9},
    //10's
    {name: '10', suit: 'Hearts', num: 10}, 
    {name: '10', suit: 'Clubs', num: 10},
    {name: '10', suit: 'Diamonds', num: 10},
    {name: '10', suit: 'Spades', num: 10},
    //jack's
    {name: 'Jack', suit: 'Hearts', num: 10},
    {name: 'Jack', suit: 'Clubs', num: 10},
    {name: 'Jack', suit: 'Diamonds', num: 10},
    {name: 'Jack', suit: 'Spades', num: 10},
    //Queen's
    {name: 'Queen', suit: 'Hearts', num: 10},
    {name: 'Queen', suit: 'Clubs', num: 10},
    {name: 'Queen', suit: 'Diamonds', num: 10},
    {name: 'Queen', suit: 'Spades', num: 10},
    //King's
    {name: 'King', suit: 'Hearts', num: 10},
    {name: 'King', suit: 'Hearts', num: 10},
    {name: 'King', suit: 'Hearts', num: 10},
    {name: 'King', suit: 'Hearts', num: 10},
    //ace's
    {name: 'Ace', suit: 'Hearts', num: aceInput},
    {name: 'Ace', suit: 'Clubs', num: aceInput},
    {name: 'Ace', suit: 'Diamonds', num: aceInput},
    {name: 'Ace', suit: 'Spades', num: aceInput},
];

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
                dealersDeckOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
                
            } 
            if (dealersCardsTotalValue > 10) {
                dealersDeckOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1];
                
            }
        
        let randomCard = dealersDeckOfCards[Math.floor(Math.random() * dealersDeckOfCards.length)];
        console.log({randomCard});
        console.log({dealersCardsTotalValue});
        dealersCardsTotalValue += randomCard;
        dealersCardsTotalValueEl.innerText = dealersCardsTotalValue;

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







