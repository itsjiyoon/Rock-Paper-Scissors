let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let userInput;

function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);

    if (result == 0) {
        console.log(rock);
    }

    else if (result == 1) {
        console.log(paper);
    }

    else { 
        console.log(scissors);
    }

    function getUserChoice() {
        userInput = toLowerCase(prompt("rock? paper? scissors? :D"));
    }

    function  playRound(playerSelection, computerSelection) {
        if (playerSelection === "rock") {
            switch (computerSelection) {
                case "paper" :
                    console.log("you lose! " + computerSelection + " beats " + playerSelection);
                    break;
                
                case "scissors" :
                    console.log("you win! " + playerSelection + " beats " + computerSelection);
                    break;
                
                default :
                    console.log("tied!");
                    break;
            }
        }

        else if (playerSelection === "paper") {
            switch (computerSelection) {
                case "scissors" :
                    console.log("you lose! " + computerSelection + " beats " + playerSelection);
                    break;
                
                case "rock" :
                    console.log("you win! " + playerSelection + " beats " + computerSelection);
                    break;
                
                default :
                    console.log("tied! ");
                    break;
            }
        }

        else {
            switch (computerSelection) {
                case "rock" :
                    console.log("you lose! " + computerSelection + " beats " + playerSelection);
                    break;
                
                case "paper" :
                    console.log("you win! " + playerSelection + " beats " + computerSelection);
                    break;
                
                default :
                    console.log("tied!");
                    break;
            }
        }       
    }
}