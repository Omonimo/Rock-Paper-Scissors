 function getComputerChoice(){
    //randomly return scissors paper or rock
    const weapons = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * weapons.length);
    var computerChoice = weapons[randomIndex];
    return computerChoice;

}
result.innerText = "Choose: Rock, Paper or Scissors";

let playerSelection;
let computerSelection;

let currentGame = 0;
let playerScore = 0;
let computerScore = 0;

const weapons = document.querySelectorAll(".selection")

//get user choice


//


weapons.forEach(weapon => {
    weapon.addEventListener('click', () => {

        //
        if (computerScore === 5 || playerScore === 5){
            if(computerScore > playerScore){
                result.innerText += "Computer wins";
            }
            else if (playerScore > computerScore){
                result.innerText += "You win!";
            }
            resetGame();
        }
        //

        playerSelection = weapon.id;
        computerSelection = getComputerChoice();

        if (computerSelection == playerSelection){
            result.append = "It's a tie";
            currentGame++;
        } //player is the winner
        else if(computerSelection=="rock" && playerSelection == "paper"){
            playerScore++;
            result.innerText = "You win! Paper beats Rock";
            currentGame++;
        }
        else if(computerSelection=="paper" && playerSelection == "scissors"){
            playerScore++;
            result.innerText = "You win! Scissors beats Paper";
            currentGame++;
        }
        else if(computerSelection=="scissors" && playerSelection == "rock"){
            playerScore++;
            result.innerText = "You win! Rock beats Scissors";
        }
        //player loses game
        else {
            computerScore++;
            result.innerText =(`You lose ${computerSelection} beats ${playerSelection}`);
            currentGame++;
        } 

        document.getElementById("player-choice").textContent = playerSelection;
        document.getElementById("computer-choice").textContent = computerSelection;
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;
        document.getElementById("current-game").textContent = currentGame;
        
    })
});



const restartButton = document.getElementById("restart-game").addEventListener("click", resetGame);
function resetGame() {
    currentGame = 0;
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-choice").textContent = "";
    document.getElementById("computer-choice").textContent = "";
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("current-game").textContent = currentGame;
    result.innerText = "Choose: Rock, Paper or Scissors";
};
