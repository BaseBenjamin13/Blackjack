
console.log("linked");

const hitBtn = document.querySelector("#hit-btn");


let cards = 0;


hitBtn.addEventListener('click', getCards);
function getCards(){
    cards++;
    console.log(cards);
}