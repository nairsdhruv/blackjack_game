let firstCard=3;
let secondCard= 6;
let sum = firstCard+ secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";


function play(){
    if( sum < 21){
        message = "Do you want to drae a next card?";
    }else if ( sum == 21){
        message = "woohoo! you won ";
        hasBlackjack = true;
    }else{
        message = "You are out";
        isAlive = true;
    }
}
