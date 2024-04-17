function getComputerChoice() {  // Generate computer choice and return the choice
    let result = Math.floor(Math.random() * 3);

    if (result == 0) {
        alert("Computer's choice is rock");

        return "rock";
    }

    else if (result == 1) {
        alert("Computer's choice is paper");

        return "paper";
    }

    else { 
        alert("Computer's choice is scissors");
        return "scissors";
    }
} 


function getUserChoice() { // Ask user to put their choice and return the choice
    let userInput = prompt("rock? paper? scissors? :D");

    return userInput.toLowerCase();
}


function  playRound(userSelection, computerSelection) { // Play one round based on computer's choice and user's choice
    if (userSelection == "rock") {
        switch (computerSelection) {
            case "paper" :
                console.log("you lose! " + computerSelection + " beats " + userSelection);
                break;
                
            case "scissors" :
                console.log("you win! " + userSelection + " beats " + computerSelection);
                break;
                
            default :
                console.log("tied!");
        }
    }

    else if (userSelection == "paper") {
        switch (computerSelection) {
            case "scissors" :
                console.log("you lose! " + computerSelection + " beats " + userSelection);
                break;
                
            case "rock" :
                console.log("you win! " + userSelection + " beats " + computerSelection);
                break;
                
            default :
                console.log("tied!");
        }
    }

    else {
        switch (computerSelection) {
            case "rock" :
                console.log("you lose! " + computerSelection + " beats " + userSelection);
                break;
                
            case "paper" :
                console.log("you win! " + userSelection + " beats " + computerSelection);
                break;
                
            default :
                console.log("tied!");
        }
    }       
}


function playGame() { // Play the game 5 times
    let selection1 = getUserChoice();
    let selection2 = getComputerChoice();

    playRound(selection1,selection2);
    
    for (let i = 0; i < 4; i++) {
        selection1 = getUserChoice();
        selection2 = getComputerChoice();
        playRound(selection1,selection2);
    }
}
