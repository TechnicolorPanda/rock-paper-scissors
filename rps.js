/* eslint-disable no-plusplus */
const playRounds = prompt('How many rounds would you like to play?');
let playerScore = 0;
let computerScore = 0;
let tie = 0;

function computerPlay() {
  let computerChoice = [Math.floor(Math.random() * 3)];
  if (computerChoice == 0) {
    return 'rock';
  } else if (computerChoice == 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(player, computer) {
  const content = document.getElementById('content');
  if (computer === 'rock' && player === 'rock') {
    content.textContent = "It's a tie. Two rocks.";
    return tie++;
  } if (computer === 'rock' && player === 'paper') {
    content.textContent = 'Paper covers rock. You win!';
    return playerScore++;
  } if (computer === 'rock' && player === 'scissors') {
    content.textContent = 'Rock breaks scissors. You lose.';
    return computerScore++;
  } if (computer === 'paper' && player === 'rock') {
    content.textContent = 'Paper covers rock. You lose.';
    return computerScore++;
  } if (computer === 'paper' && player === 'paper') {
    content.textContent = 'Two papers. You tie.';
    return tie++;
  } if (computer === 'paper' && player === 'scissors') {
    content.textContent = 'Scissors cut paper. You win!';
    return playerScore++;
  } if (computer === 'scissors' && player === 'rock') {
    content.textContent = 'Rock breaks scissors. You win!';
    return playerScore++;
  } if (computer === 'scissors' && player === 'paper') {
    content.textContent = 'Scissors cut paper. You lose.';
    return computerScore++;
  } if (computer === 'scissors' && player === 'scissors') {
    content.textContent = 'Two scissors. You tie.';
    return tie++;
  }
  content.textContent = 'You need to type rock, paper, or scissors. Try again.';
}

function whoWins() {
  const content = document.getElementById('content');
  if (computerScore > playerScore) {
    content.textContent = `COMPUTER WINS! ${computerScore} to ${playerScore}`;
  } else if (playerScore > computerScore) {
    content.textContent = `YOU WIN! ${playerScore} to ${computerScore}`;
  } else {
    content.textContent = 'TIE GAME!';
  }
}

function selectRock() {
  playRound('rock', computerPlay());
  document.getElementById('compScore').innerHTML = computerScore;
  document.getElementById('playerScore').innerHTML = playerScore;
  document.getElementById('tieScore').innerHTML = tie;
  if (playerScore + computerScore + tie === playRounds) {
    whoWins();
  } else {
    console.log(playerScore);
  }
}

function selectPaper() {
  playRound('paper', computerPlay());
  document.getElementById('compScore').innerHTML = computerScore;
  document.getElementById('playerScore').innerHTML = playerScore;
  document.getElementById('tieScore').innerHTML = tie;
  if (playerScore + computerScore + tie === playRounds) {
    whoWins();
  } else {
    console.log(playerScore);
  }
}

function selectScissors() {
  playRound('scissors', computerPlay());
  document.getElementById('compScore').innerHTML = computerScore;
  document.getElementById('playerScore').innerHTML = playerScore;
  document.getElementById('tieScore').innerHTML = tie;
  if (playerScore + computerScore + tie === playRounds) {
    whoWins();
  } else {
    console.log(playerScore);
  }
}

function playGame() {
  const rock = document.getElementById('rock');
  rock.addEventListener('click', selectRock);

  const paper = document.getElementById('paper');
  paper.addEventListener('click', selectPaper);

  const scissors = document.getElementById('scissors');
  scissors.addEventListener('click', selectScissors);
}

function selectRounds() {
  const content = document.getElementById('content');
  content.classList.add('box');
  content.textContent = 'Select rock, paper, or scissors.';

  playGame();
}

selectRounds();
