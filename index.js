let player = {
    name: "Dhruv",
    chips: 150
}
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent= player.name + " $" + player.chips;

function getRandomCard(){
    let tempNum =  Math.floor(Math.random()* 13);
    if(tempNum == 1) return 11;
    else if( tempNum > 10) return 10;
    else return tempNum;
}

function startGame(){
    isAlive = true;
    let firstCard= getRandomCard();
    let secondCard= getRandomCard();
    sum = firstCard + secondCard;
    cards.push(firstCard);
    cards.push(secondCard);
    play();
}

function play(){
    cardsEl.textContent =  "Cards: " 
    for( let i =0; i < cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    };
    sumEl.innerText = "Sum: " + sum;
    if( sum < 21){
        message = "Do you want to draw a card?";
    }else if ( sum == 21){
        message = "Woohoo! you won ";
        hasBlackjack = true;
    }else{
        message = "You are out";
        isAlive = false;
    }
    messageEl.innerText = message;
}

function newCard(){
    if( isAlive && !hasBlackjack){
        let card = getRandomCard();
        cards.push(card);
        sum += card;

        play()
    }
}
