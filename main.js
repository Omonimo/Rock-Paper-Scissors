function getComputerChoice(){
    //randomly return scissors paper or rock
    const weapons = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * weapons.length);
    var computerChoice = weapons[randomIndex];
    return computerChoice;

}

function playRound(playerSelection, computerSelection){

    //make player seleciton case insensitive
    var playerSelection2 = playerSelection.toLowerCase();

    //determine winner
    //It's a tie
    if (computerSelection == playerSelection2){
        return "It's a tie";
    } //player is the winner
    else if(computerSelection=="rock" && playerSelection2 == "paper"){
        return "You win! Paper beats Rock";
    }
    else if(computerSelection=="paper" && playerSelection2 == "scissors"){
        return "You win! Scissors beats Paper";
    }
    else if(computerSelection=="scissors" && playerSelection2 == "rock"){
        return "You win! Rock beats Scissors";
    }
    //player loses game
    else {
        return(`You lose ${computerSelection} beats ${playerSelection2}`);
    }
//return string with the winner of the game

}

function game(){
    //play 5 times with a loop
}


/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/