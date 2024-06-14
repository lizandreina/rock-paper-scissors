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
let humanPaper = document.querySelector('.paper');
let humanScissors = document.querySelector('.scissors');

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(computerChoice, humanChoice) {
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
    }

    humanRock.addEventListener('click', function() {
        playRound(getComputerChoice, 'rock');
        return console.log(`Your score is ${humanScore} and the computer's score is ${computerScore}`);
    });

    humanPaper.addEventListener('click', ()=>playRound(getComputerChoice, 'paper'));
    humanScissors.addEventListener('click', ()=>playRound(getComputerChoice, 'scissors'));
    
    // // Round 1
    // let computerAnswerOne = getComputerChoice();
    // let humanAnswerOne = getHumanChoice().toLowerCase();
    // playRound(computerAnswerOne, humanAnswerOne);
    // console.log(computerScore);
    // console.log(humanScore);
    // // Round 2
    // let computerAnswerTwo = getComputerChoice();
    // let humanAnswerTwo = getHumanChoice().toLowerCase();
    // playRound(computerAnswerTwo, humanAnswerTwo);
    // console.log(computerScore);
    // console.log(humanScore);
    // // Round 3
    // let computerAnswerThree = getComputerChoice();
    // let humanAnswerThree = getHumanChoice().toLowerCase();
    // playRound(computerAnswerThree, humanAnswerThree);
    // console.log(computerScore);
    // console.log(humanScore);
    // // Round 4
    // let computerAnswerFour = getComputerChoice();
    // let humanAnswerFour = getHumanChoice().toLowerCase();
    // playRound(computerAnswerFour, humanAnswerFour);
    // console.log(computerScore);
    // console.log(humanScore);
    // // Round 5
    // let computerAnswerFive = getComputerChoice();
    // let humanAnswerFive = getHumanChoice().toLowerCase();
    // playRound(computerAnswerFive, humanAnswerFive);
    // console.log(computerScore);
    // console.log(humanScore);

    if (humanScore>computerScore) {
        console.log('Congrats, you win the game!')
    } else if (computerScore>humanScore) {
        console.log('The computer is the winner :(')
    } else {
        console.log('It\'s a tie! Try again')
    }
}

playGame();