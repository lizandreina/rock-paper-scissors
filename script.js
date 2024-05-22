function getComputerChoice(result) {
    result = Math.round(Math.random() * (2 - 0) + 0);
    if (result === 0) {
        computerAnswer = 'rock';
        return 'Rock';
    } else if (result === 1) {
        computerAnswer = 'paper';
        return 'Paper';
    } else {
        computerAnswer = 'scissors';
        return 'Scissors'
    }
}

let computerAnswer;

function getHumanChoice() {
    humanAnswer = prompt("Your turn!", "Rock, Paper, or Scissors").toLowerCase();
    return humanAnswer;
}

let humanAnswer;

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    computerChoice = computerAnswer;
    humanChoice = human;
    if (computerChoice === 'rock') {
}