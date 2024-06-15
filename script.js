let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    result = Math.round(Math.random() * (2 - 0) + 0);
    if (result === 0) {
        return 'rock';
    } else if (result === 1) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

let humanRock = document.querySelector('.rock');
humanRock.addEventListener('click', () => {
    playRound(getComputerChoice(), 'rock');
});

let humanPaper = document.querySelector('.paper');
humanPaper.addEventListener('click', () => {
    playRound(getComputerChoice(), 'paper');
});

let humanScissors = document.querySelector('.scissors');
humanScissors.addEventListener('click', () => {
    playRound(getComputerChoice(), 'scissors');
});

function playRound(computerChoice, humanChoice) {
let points = document.querySelector('.points');
    if (computerChoice === 'rock' && humanChoice === 'paper') {
        humanScore = ++humanScore;
        points.textContent = 'You win!';
    } else if (computerChoice === 'rock' && humanChoice === 'rock') {
        points.textContent = 'It\'s a tie! Play again';
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        computerScore = ++computerScore;
        points.textContent = 'You lose! Rock beats Scissors';
    } else if (computerChoice === 'paper' && humanChoice === 'paper') {
        points.textContent = 'It\'s a tie! Play again';
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        computerScore = ++computerScore;
        points.textContent = 'You lose! Paper beats Rock';
    } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
        humanScore = ++humanScore;
        points.textContent = 'You win!';
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        computerScore = ++computerScore;
        points.textContent = 'You lose! Scissors beats Paper';
    } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
        humanScore = ++humanScore;
        points.textContent = 'You win!';
    } else if (computerChoice === 'scissors' && humanChoice === 'scissors') {
        points.textContent = 'It\'s a tie! Play again';
    }

let result = document.querySelector('.result');
result.textContent = `Your score is ${humanScore} and the computer's score is ${computerScore}`;
}

// if (humanScore>computerScore) {
//     console.log('Congrats, you win the game!')
// } else if (computerScore>humanScore) {
//     console.log('The computer is the winner :(')
// } else {
//     console.log('It\'s a tie! Try again')
// }