 function getComputerChoice(){
    //randomly return scissors paper or rock
    const weapons = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * weapons.length);
    var computerChoice = weapons[randomIndex];
    return computerChoice;

}

let playerSelection;
let computerSelection;

const weapons = document.querySelectorAll(".selection")

//get user choice
weapons.forEach(weapon => {
    weapon.addEventListener('click', () => {

        let currentGame = 0;
        let playerScore = 0;
        let computerScore = 0;

        playerSelection = weapon.id;
        computerSelection = getComputerChoice();

        if (computerSelection == playerSelection){
            result.innerText = "It's a tie";
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

