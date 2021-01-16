/* eslint-disable no-plusplus */

// TODO: eliminate global variables

// computer makes random selection

function computerPlay() {
  const computerChoice = [Math.floor(Math.random() * 3)];
  if (computerChoice == 0) {
    return 'rock';
  } if (computerChoice == 1) {
    return 'paper';
  }
  return 'scissors';
}

function recordScore(playerScore, computerScore, tie) {
  document.getElementById('compScore').innerHTML = computerScore;
  document.getElementById('playerScore').innerHTML = playerScore;
  document.getElementById('tieScore').innerHTML = tie;
  // if (playerScore + computerScore + tie === playRounds) {
  //   whoWins(playerScore, computerScore, tie);
  // } else {
  //   console.log(playerScore);
  // }
}

// check computer selection against player selection to determine the winner

function playRound(player, computer, playerScore, computerScore, tie) {
  const content = document.getElementById('content');
  if (computer === 'rock' && player === 'rock') {
    content.textContent = "It's a tie. Two rocks.";
    tie++;
  } if (computer === 'rock' && player === 'paper') {
    content.textContent = 'Paper covers rock. You win!';
    playerScore++;
  } if (computer === 'rock' && player === 'scissors') {
    content.textContent = 'Rock breaks scissors. You lose.';
    computerScore++;
  } if (computer === 'paper' && player === 'rock') {
    content.textContent = 'Paper covers rock. You lose.';
    computerScore++;
  } if (computer === 'paper' && player === 'paper') {
    content.textContent = 'Two papers. You tie.';
    tie++;
  } if (computer === 'paper' && player === 'scissors') {
    content.textContent = 'Scissors cut paper. You win!';
    playerScore++;
  } if (computer === 'scissors' && player === 'rock') {
    content.textContent = 'Rock breaks scissors. You win!';
    playerScore++;
  } if (computer === 'scissors' && player === 'paper') {
    content.textContent = 'Scissors cut paper. You lose.';
    computerScore++;
  } if (computer === 'scissors' && player === 'scissors') {
    content.textContent = 'Two scissors. You tie.';
    tie++;
  }
  console.log(playerScore, computerScore, tie);
  recordScore(playerScore, computerScore, tie);
}

// display grand champion once all rounds have been played

function whoWins(playerScore, computerScore, tie) {
  const content = document.getElementById('content');
  if (computerScore > playerScore) {
    content.textContent = `COMPUTER WINS! ${computerScore} to ${playerScore}`;
  } else if (playerScore > computerScore) {
    content.textContent = `YOU WIN! ${playerScore} to ${computerScore}`;
  } else {
    content.textContent = 'TIE GAME!';
  }
}

// TODO: check playRounds to see when all rounds have been completed to end the game

function selectRock(playRounds, playerScore, computerScore, tie) {
  playRound('rock', computerPlay(), playerScore, computerScore, tie);
}

function selectPaper(playRounds, playerScore, computerScore, tie) {
  playRound('paper', computerPlay(), playerScore, computerScore, tie);
  document.getElementById('compScore').innerHTML = computerScore;
  document.getElementById('playerScore').innerHTML = playerScore;
  document.getElementById('tieScore').innerHTML = tie;
  if (playerScore + computerScore + tie === playRounds) {
    whoWins(playerScore, computerScore, tie);
  } else {
    console.log(playerScore);
  }
}

function selectScissors(playRounds, playerScore, computerScore, tie) {
  playRound('scissors', computerPlay(), playerScore, computerScore, tie);
  document.getElementById('compScore').innerHTML = computerScore;
  document.getElementById('playerScore').innerHTML = playerScore;
  document.getElementById('tieScore').innerHTML = tie;
  if (playerScore + computerScore + tie === playRounds) {
    whoWins(playerScore, computerScore, tie);
  } else {
    console.log(playerScore);
  }
}

// submit player choice when selected

function playGame(playRounds, playerScore, computerScore, tie) {
  const rock = document.getElementById('rock');
  rock.addEventListener('click', () => {
    selectRock(playRounds, playerScore, computerScore, tie);
  });

  const paper = document.getElementById('paper');
  paper.addEventListener('click', () => {
    selectPaper(playRounds, playerScore, computerScore, tie);
  });

  const scissors = document.getElementById('scissors');
  scissors.addEventListener('click', () => {
    selectScissors(playRounds, playerScore, computerScore, tie);
  });
}

// provide instructions to player

function beginGame() {
  const playRounds = document.getElementById('numberOfRounds').value;
  const content = document.getElementById('content');
  content.textContent = 'Select rock, paper, or scissors.';
  const playerScore = 0;
  const computerScore = 0;
  const tie = 0;
  playGame(playRounds, playerScore, computerScore, tie);
}

// create starting prompts

function selectRounds() {
  // prompt user to enter number of rounds

  const content = document.getElementById('content');
  content.classList.add('box');
  content.textContent = 'How many rounds would you like to play?';

  // create input box form

  const enterNumber = document.createElement('input');
  enterNumber.setAttribute('type', 'number');
  enterNumber.setAttribute('value', '3');
  enterNumber.setAttribute('id', 'numberOfRounds');
  content.appendChild(enterNumber);

  // create clickable submit button

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'button');
  submitButton.setAttribute('id', 'submit');
  submitButton.innerHTML = 'Submit';
  content.appendChild(submitButton);
  submitButton.addEventListener('click', beginGame);
}

selectRounds();
