function getComputerChoice(){
    //randomly return scissors paper or rock
    const weapons = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * weapons.length);
    var computerChoice = weapons[randomIndex];
    return computerChoice;

}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){

    //make player seleciton case insensitive
    //var playerSelection2 = playerSelection.toLowerCase();

    //determine winner
    //It's a tie
    if (computerSelection == playerSelection){
        return "It's a tie";
    } //player is the winner
    else if(computerSelection=="rock" && playerSelection == "paper"){
        playerScore++;
        return "You win! Paper beats Rock";
    }
    else if(computerSelection=="paper" && playerSelection == "scissors"){
        playerScore++;
        return "You win! Scissors beats Paper";
    }
    else if(computerSelection=="scissors" && playerSelection == "rock"){
        playerScore++;
        return "You win! Rock beats Scissors";
    }
    //player loses game
    else {
        computerScore++;
        return(`You lose ${computerSelection} beats ${playerSelection}`);
    }
//return string with the winner of the game

}

function getPlayerChoice(){
    let getPlayerPrompt;
    do {
    getPlayerPrompt = prompt("Rock, paper, scissors").toLowerCase();
    } while (getPlayerPrompt != "rock" && getPlayerPrompt != "paper" && getPlayerPrompt != "scissors");
    return getPlayerPrompt;
    
}

function game(){
    //play 5 times with a loop
    for (let i = 1; i <= 5; i++){
        var playerSelection = getPlayerChoice();
        var computerSelection =  getComputerChoice();
        console.log ("Match: " + i)
        console.log(playRound(playerSelection, computerSelection));
        console.log("Computer: " + computerSelection);
        console.log("Player: " + playerSelection);
        console.log("-----------------------")
    }

    if (playerScore > computerScore){
        return "You are the winner!";
    }
    else if (computerScore > playerScore){
        return "The computer wins!";
    }
    else {
        return "Game tied!"
    }
}

/*

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/
console.log(game());