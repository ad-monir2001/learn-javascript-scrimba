// let age = 18;

// if (age >= 18 ){
//     console.log("You are allowed to go!!")
// } else{
//     console.log("You are not allowed.")
// }

// ! Problem

// Check if the person is elegible for a birthday card from the King! (100)

let age = -8;

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

// ** Solve:

if (age < 100) {
  console.log('Not elegible');
} else if (age === 100) {
  console.log('Here is your birthday card from the King!');
} else {
  console.log('Not eligeble , you have already gotten one');
}

// ! PROBLEM

let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

// ** solve:

if (sum <= 20) {
  console.log('Do you want to draw a new card? 🙂');
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
  hasBlackJack = true;
} else {
  console.log("You're out of the game! 😭");
  isAlive = false;
}

console.log(isAlive);
console.log(hasBlackJack);