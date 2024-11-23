// Dice 1
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
var diceroll1 = Math.floor(randomNumber1) + 1;
console.log(diceroll1);
// Dice 2
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
var diceroll2 = Math.floor(randomNumber2) + 1;
console.log(diceroll2);

// Dice 1 mechanic
if (diceroll1 === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}
else if (diceroll1 === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}
else if (diceroll1 === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}
else if (diceroll1 === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}
else if (diceroll1 === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
} else {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

// Dice 2 mechanic
if (diceroll2 === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}
else if (diceroll2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}
else if (diceroll2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}
else if (diceroll2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}
else if (diceroll2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
} else {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

// Who wins
if (diceroll1 > diceroll2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if (diceroll1 < diceroll2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}