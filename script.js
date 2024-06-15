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

function playRound(computerChoice , humanChoice) {
    if (computerChoice === 'rock' && humanChoice === 'paper') {
        humanScore = ++humanScore;
        console.log('You win!');
    } else if (computerChoice === 'rock' && humanChoice === 'rock') {
        console.log('It\'s a tie! Play again');
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        computerScore = ++computerScore;
        console.log('You lose! Rock beats Scissors');
    } else if (computerChoice === 'paper' && humanChoice === 'paper') {
        console.log('It\'s a tie! Play again');
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        computerScore = ++computerScore;
        console.log('You lose! Paper beats Rock');
    } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
        humanScore = ++humanScore;
        console.log('You win!');
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        computerScore = ++computerScore;
        console.log('You lose! Scissors beats Paper');
    } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
        humanScore = ++humanScore;
        console.log('You win!');
    } else if (computerChoice === 'scissors' && humanChoice === 'scissors') {
        console.log('It\'s a tie! Play again');
    }

    return console.log(`Your score is ${humanScore} and the computer's score is ${computerScore}`);
}


let humanPaper = document.querySelector('.paper');
let humanScissors = document.querySelector('.scissors');

humanPaper.addEventListener('click', function() {
    playRound(getComputerChoice, 'paper');
});

humanScissors.addEventListener('click', function() {
    playRound(getComputerChoice, 'scissors');
});

// for(i = 0; i <= 5; i++){
// }

// if (humanScore>computerScore) {
//     console.log('Congrats, you win the game!')
// } else if (computerScore>humanScore) {
//     console.log('The computer is the winner :(')
// } else {
//     console.log('It\'s a tie! Try again')
// }