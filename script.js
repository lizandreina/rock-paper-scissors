function getComputerChoice(result) {
    result = Math.round(Math.random() * (2 - 0) + 0);
    if (result === 0) {
        return 'Rock';
    } else if (result === 1) {
        return 'Paper';
    } else {
        return 'Scissors'
    }
}

let computerAnswer = getComputerChoice().toLowerCase();

function getHumanChoice() {
    return prompt("Your turn!", "Rock, Paper, or Scissors");
}

let humanAnswer = getHumanChoice().toLowerCase();

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    if (computerChoice === 'rock' && humanChoice === 'paper') {
        humanScore = (humanScore + 1);
        console.log('Congratulations! You win!');
    } else if (computerChoice === 'rock' && humanChoice === 'rock') {
        console.log('It\'s a tie! Play again');
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        computerScore = (computerScore + 1);
        console.log('You lose! Rock beats Scissors');
    } else if (computerChoice === 'paper' && humanChoice === 'paper') {
        console.log('It\'s a tie! Play again');
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        computerScore = (computerScore + 1);
        console.log('You lose! Paper beats Rock');
    } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
        humanScore = (humanScore + 1);
        console.log('Congratulations! You win!');
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        computerScore = (computerScore + 1);
        console.log('You lose! Scissors beats Paper');
    } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
        humanScore = (humanScore + 1);
        console.log('Congratulations! You win!');
    } else if (computerChoice === 'scissors' && humanChoice === 'scissors') {
        console.log('It\'s a tie! Play again');
    }
}

playRound(computerAnswer, humanAnswer);
console.log(computerScore);
console.log(humanScore);