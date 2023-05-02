function getComputerChoice(){
    //randomly return scissors paper or rock
    const weapons = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * weapons.length);
    var computerChoice = weapons[randomIndex];
    return computerChoice;

}

let currentGame = 0;
let playerScore = 0;
let computerScore = 0;

let displayedPlayerScore = document.getElementById("player-score");
let displayedComputerScore = document.getElementById("computer-score");
let displayedGame = document.getElementById("current-game");

//get user choice
function getplayerChoice(){
    let choice = document.querySelector(`.selection`);
    let choiceId = choice.id;
    return choiceId;

}

//display scores
document.getElementById("player-score").innerHTML = playerScore;
document.getElementById("computer-score").innerHTML = computerScore;
document.getElementById("current-game").innerHTML = computerScore;

console.log(getplayerChoice());