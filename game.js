

function getComputerChoice(){
   let randNum = Math.floor(Math.random() * 3) + 1;

   switch (randNum) {
    case 1:
        return 'rock';
    case 2:
        return 'paper';
    case 3:
        return 'scissor';
   }

}

function getHumanChoice(){
    let choice = prompt("Choose 1) rock 2) paper 3) scissor :");

    choice = Number(choice);

    switch (choice) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissor';
        default:
            console.log('Please enter a valid value!');
            getHumanChoice();
       }

}

function returnWinner(humanChoice,computerChoice){
    // 1 for win, 0 for tie, -1 for lose
    if (humanChoice === 'rock') {
        if (computerChoice === 'scissor') return 1;
        else if (computerChoice === 'paper') return -1;
    }

    else if (humanChoice === 'scissor') {
        if (computerChoice === 'paper') return 1;
        else if (computerChoice === 'rock') return -1;
    }

    else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') return 1;
        else if (computerChoice === 'scissor') return -1;
    }

    else return 0;

}

function playRound(humanChoice,computerChoice){
    console.log(`You:${humanChoice}\tComputer:${computerChoice}`);

    let winner = returnWinner(humanChoice,computerChoice);

    if (winner === 1){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }

    else if (winner === -1){
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    else console.log("That's a tie!");
}

function playGame(){
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}:\tYou: ${humanScore}  Computer: ${computerScore}`);

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice()
        playRound(humanChoice,computerChoice);
        console.log();
    }

    (humanScore > computerScore)? console.log('You win!') : console.log('You lose!');
}

let humanScore = 0;
let computerScore = 0;


playGame();
