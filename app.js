let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
const messageEl = document.getElementById('message-el');
const cardsEl = document.getElementById('cards-el');
const sumEl = document.querySelector('.sum-el');



function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum === 1) {
        return 11;
    }
    else if (randomNum >= 11) {
        return 10;
    }
    else {
        return randomNum;
    }

}
function startGame() {
    isAlive = true;
    hasBlackjack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

const renderGame = () => {
    cardsEl.textContent = `Cards: `;

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = `Sum: ${sum}`;
    if (sum === 21) {
        message = 'Wohoo! Sen Blackjack Qazandin!';
        hasBlackjack = true;
    }
    else if (sum < 21) {
        message = "Yeni Kart cekin:";
    }
    else {
        message = "Siz uduzduz, Bextinizi birde sinayin!";
        isAlive = false;
    }
    messageEl.textContent = message;
    
}


const newCard = () => {
    
    if (isAlive && !hasBlackjack){
        let newcard = getRandomCard();
        cards.push(newcard);
        sum += newcard;
        renderGame();
    }
}