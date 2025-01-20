

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

    let winner = returnWinner(humanChoice,computerChoice);

    if (winner === 1){
        humanScore++;
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }

    else if (winner === -1){
        computerScore++;
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    else result.textContent = "That's a tie!";

    score.textContent = `You: ${humanScore}  Computer: ${computerScore}`;
}



let humanScore = 0;
let computerScore = 0;

let body = document.querySelector('body');

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');

let score = document.querySelector('#score');
score.textContent = `You: ${humanScore}\tComputer: ${computerScore}`;


let result = document.createElement('div');
body.appendChild(result);



function handleEvent (event){
    let computerChoice = getComputerChoice()
    let target = event.target;
    switch (target.id) {
        case 'rock':
            playRound('rock',computerChoice);
        break;

        case 'paper':
            playRound('paper',computerChoice);

        break;

        case 'scissor':
            playRound('scissor',computerChoice);

        break;
    }

    if(humanScore === 5 || computerScore === 5){
        let endGame = document.createElement('div');
        endGame.setAttribute('style','font-weight:700; font-size:100px;')
        endGame.textContent = (humanScore > computerScore)?  'You win!' : 'You lose!';
        body.appendChild(endGame);
        body.removeEventListener('click',handleEvent);
    }

} // END function

body.addEventListener('click',handleEvent);
