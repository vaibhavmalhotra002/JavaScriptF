// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
let firstCard = 1

let secondCard = 20
let cards = [ firstCard , secondCard]

let sum = firstCard + secondCard

let hasblackjack = false
let isAlive =true

let message =""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById('cards-el')

console.log(messageEl)
function StartGame()
{
    renderGame() 
}

function renderGame() {
    cardsEl.textContent ="Cards: " + cards[0] + "  " + cards[1];
sumEl.textContent ="Sum:" + sum;

if (sum <=20){
    message="Do you want to draw another card: 🫡"
     
} else if (sum === 21){
    message="Wooho You've got BlackJack!!🥳"
    hasblackjack=true
} else {
    message="You're out of the game😟"
    isAlive =false
}
messageEl.textContent=message;
}
 function newCard() {
    console.log("Do you want to darw a new card")
    let card = 7
    sum += card
    renderGame()
 }








//Practice sets

// let age = 21

// if (age<=21){
//     console.log("You are not allowed to enter the NightClub")}
//     else{
//         console.log("You're allowed to enter the NightClub")
//     }

// let age =100
//  if(age<100){
//     console.log("You are not eligible")
//  }
//  else if(age ===100){
//     console.log("Here is your birthday card from the king!")
//  }
//  else{
//     console.log("Not Eligible you have already gotten one")
//  }