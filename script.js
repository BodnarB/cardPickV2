let deck = [];
const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
const values = '2,3,4,5,6,7,8,9,10,jack,queen,king,ace';
const deckLen = values.split(',').length * suits.length;
const randomCardHtml = document.querySelector(".js-random-card");
const cardBg = document.querySelector(".js-cardBack");
const cardImg = document.querySelector(".js-card-img");
const cardBtn = document.querySelector(".js-card-btn");
const resetBtn = document.querySelector(".js-reset-btn");
const playersDeck = document.querySelector(".js-yourdeck");
let playersHand = []


function createDeck() {
    deck = []
    for (let value of values.split(',')) {
        for (let suit of suits) {
            deck.push({ value, suit })
        }
    }
}

function printCard() {
    checkCards()
    const randomIndex = (Math.floor(Math.random() * deck.length))
    const newCard = deck[randomIndex];
    if (deck.length > 1) {
        if (newCard.suit === 'diamonds' || newCard.suit === 'hearts') {
            cardBg.innerHTML = `<img class="cardImg" src="./deckImgs/Card_back_01.svg" alt="">`;
        }
        else if (newCard.suit === 'spades' || newCard.suit === 'clubs') {
            cardBg.innerHTML = `<img class="cardImg" src="./deckImgs/Card_back_06.svg" alt="">`;
        };
    }
    randomCardHtml.innerHTML = `<p>Remaining cards: ${deck.length - 1}</p><p class="your-card">Your card is the:</p>
    <p class="card-name">${newCard.suit} ${newCard.value}</p>`
    cardImg.innerHTML = `<img class="cardImg" src="./deckImgs/English_pattern_${newCard.value}_of_${newCard.suit}.svg" alt="">`
    randomCard = deck.splice(randomIndex, 1)
    playersHand.push(randomCard[0])
    resetBtnDisable()
    showPlayersHand()
}

function checkCards() {
    if (deck.length === 1) {
        cardBg.innerHTML = ` `;
    }
    else if (deck.length === 0) {
        alert("Out of cards!");
        cardBtn.disabled = true;
    }
    else if (deck.length > 0) {
        cardBtn.disabled = false
    };
}

function resetBtnDisable() {
    if (deck.length < deckLen) {
        resetBtn.disabled = false;
    }
    else if (deck.length === deckLen) {
        resetBtn.disabled = true;
    };
}

function reset() {
    createDeck()
    randomCardHtml.innerHTML = `<p>Remaining cards: ${deck.length}</p>`
    playersDeck.innerHTML = ` `
    cardImg.innerHTML = ` `
    playersHand = []
    resetBtnDisable()
}

function showPlayersHand() {
    for (card of playersHand) {
        console.log(card.suit)
        console.log(card.value)

    }
    playersDeck.innerHTML += `<img class="playersCard-img" src="./deckImgs/English_pattern_${card.value}_of_${card.suit}.svg" alt="">`
}


addEventListener("load", reset)
addEventListener("load", createDeck)
cardBtn.addEventListener("click", printCard)
resetBtn.addEventListener("click", reset)



