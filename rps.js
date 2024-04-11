function getComputerChoice() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";

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
}