function getComputerChoice() {  // Generate computer choice and return the choice
    let gameResult = Math.floor(Math.random() * 3);

    if (gameResult == 0) {
        para3.textContent = "Computer's choice is rock";

        return "rock";
    }

    else if (gameResult == 1) {
        para3.textContent = "Computer's choice is paper";

        return "paper";
    }

    else { 
        para3.textContent = "Computer's choice is scissors";
        return "scissors";
    }
} 


// function getUserChoice() { // Ask user to put their choice and return the choice
//     let userInput = prompt("rock? paper? scissors? :D");

//     return userInput.toLowerCase();
// }


function  playRound(userSelection, computerSelection) { // Play one round based on computer's choice and user's choice
    if (userSelection == "rock") {
        switch (computerSelection) {
            case "paper" :
                para4.textContent = `You lose! ${computerSelection} beats ${userSelection}`;
                gameResult("lose");
                break;
                
            case "scissors" :
                para4.textContent = `You win! ${userSelection} beats ${computerSelection}`;
                gameResult("win");
                break;
                
            default :
                para4.textContent = "Tied!";
                gameResult("tie");
        }
    }

    else if (userSelection == "paper") {
        switch (computerSelection) {
            case "scissors" :
                para4.textContent = `You lose! ${computerSelection} beats ${userSelection}`;
                gameResult("lose");
                break;
                
            case "rock" :
                para4.textContent = `You win! ${userSelection} beats ${computerSelection}`;
                gameResult("win");
                break;
                
            default :
                para4.textContent = "Tied!";
                gameResult("tie");
        }
    }

    else {
        switch (computerSelection) {
            case "rock" :
                para4.textContent = `You lose! ${computerSelection} beats ${userSelection}`;
                gameResult("lose");
                break;
                
            case "paper" :
                para4.textContent = `You win! ${userSelection} beats ${computerSelection}`;
                gameResult("win");
                break;
                
            default :
                para4.textContent = "Tied!";
                gameResult("tie");
        }
    }       
}

let userCount = 0;
let computerCount = 0;

function gameResult (result) {
    if (userCount === 0 && computerCount === 0) {
        para5.textContent = " ";
    }

    if (result === "win") {
        userCount++;
        score.textContent = `You ${userCount}  :  ${computerCount} Computer`;
    }

    else if (result === "lose") {
        computerCount++;
        score.textContent = `You ${userCount}  :  ${computerCount} Computer`;
    }

    else { 
        score.textContent = `You ${userCount}  :  ${computerCount} Computer`;
    }

    if (userCount === 5 || computerCount === 5) {
        if (userCount === 5) {
            para5.textContent = "You're the winner! Hope you had fun :)";
        }

        else { 
            para5.textContent = "Computer is the winner! Play again to win next time!";
        }

        userCount = 0;
        computerCount = 0;
    }
}


//Create elements
const container = document.querySelector("body");
const divForTitle = document.createElement("div");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const divForBtns = document.createElement("div");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const para3 = document.createElement("p");
const para4 = document.createElement("p");
const score = document.createElement("p");
const para5 = document.createElement("p");



//Add classes
para1.classList.add("title");
para2.classList.add("undertitle");
divForBtns.classList.add("buttons");
para3.classList.add("computerchoice");
para4.classList.add("result");
score.classList.add("score");
para5.classList.add("endgamewords");


//Add text
para1.textContent = "Rock Paper Scissors!";
para2.textContent = "Choose your move :)";
btn1.textContent = "ROCK";
btn2.textContent = "PAPER";
btn3.textContent = "SCISSORS";


//Actually push the elements to html
container.append(divForTitle);
container.append(divForBtns);
divForTitle.append(para1);
divForTitle.append(para2);
divForBtns.append(btn1);
divForBtns.append(btn2);
divForBtns.append(btn3);
container.append(para3);
container.append(para4);
container.append(score);
container.append(para5);


//Button events
btn1.addEventListener("click", event => playRound("rock", getComputerChoice()));
btn2.addEventListener("click", event => playRound("paper", getComputerChoice()));
btn3.addEventListener("click", event => playRound("scissors", getComputerChoice()));
