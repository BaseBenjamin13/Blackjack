const hitBtn = document.querySelector("#hit-btn");
const betBtn = document.querySelector("#bet-btn");
const passBtn = document.querySelector("#pass-btn");

export function disableHitAndPassButton() {
    passBtn.disabled = true;
    hitBtn.disabled = true;
    passBtn.style.color = 'gray';
    hitBtn.style.color = 'gray';
}

export function enableBetButton() {
    betBtn.disabled = false;
    betBtn.style.color = 'red';
}