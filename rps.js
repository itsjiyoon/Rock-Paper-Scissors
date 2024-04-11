function getComputerChoice() {  // Generate computer choice and return the choice
    let result = Math.floor(Math.random() * 3);

    if (result == 0) {
        console.log("rock");

        return "rock";
    }

    else if (result == 1) {
        console.log("paper");

        return "paper";
    }

    else { 
        console.log("scissors");

        return "scissors";
    }
} 


function getUserChoice() { // Ask user to put their choice and return the choice
    let userInput = toLowerCase(prompt("rock? paper? scissors? :D"));

    return userInput;
}


function  playRound(playerSelection, computerSelection) { // Play one round based on computer's choice and user's choice
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
