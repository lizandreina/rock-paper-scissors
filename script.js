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

function getHumanChoice() {
    return prompt("Your turn!", "Rock, Paper, or Scissors");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(computerChoice, humanChoice) {
        if (computerChoice === 'rock' && humanChoice === 'paper') {
            humanScore = (humanScore + 1);
            console.log('You win!');
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
            console.log('You win!');
        } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
            computerScore = (computerScore + 1);
            console.log('You lose! Scissors beats Paper');
        } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
            humanScore = (humanScore + 1);
            console.log('You win!');
        } else if (computerChoice === 'scissors' && humanChoice === 'scissors') {
            console.log('It\'s a tie! Play again');
        }
    }

    // Round 1
    let computerAnswerOne = getComputerChoice().toLowerCase();
    let humanAnswerOne = getHumanChoice().toLowerCase();
    playRound(computerAnswerOne, humanAnswerOne);
    console.log(computerScore);
    console.log(humanScore);
    // Round 2
    let computerAnswerTwo = getComputerChoice().toLowerCase();
    let humanAnswerTwo = getHumanChoice().toLowerCase();
    playRound(computerAnswerTwo, humanAnswerTwo);
    console.log(computerScore);
    console.log(humanScore);
    // Round 3
    let computerAnswerThree = getComputerChoice().toLowerCase();
    let humanAnswerThree = getHumanChoice().toLowerCase();
    playRound(computerAnswerThree, humanAnswerThree);
    console.log(computerScore);
    console.log(humanScore);
    // Round 4
    let computerAnswerFour = getComputerChoice().toLowerCase();
    let humanAnswerFour = getHumanChoice().toLowerCase();
    playRound(computerAnswerFour, humanAnswerFour);
    console.log(computerScore);
    console.log(humanScore);
    // Round 5
    let computerAnswerFive = getComputerChoice().toLowerCase();
    let humanAnswerFive = getHumanChoice().toLowerCase();
    playRound(computerAnswerFive, humanAnswerFive);
    console.log(computerScore);
    console.log(humanScore);

    if (humanScore>computerScore) {
        console.log('Congrats, you win the game!')
    } else if (computerScore>humanScore) {
        console.log('The computer is the winner :(')
    } else {
        console.log('It\'s a tie! Try again')
    }
}

playGame();