 let playerScore = 0;
 let computerScore = 0;
 let tie = 0;

 const container = document.querySelector("#container");
 const content = document.createElement("div");
 content.classList.add("box");
 content.textContent = "Select rock, paper, or scissors.";
 container.appendChild(content);

 let playRounds = prompt("How many rounds would you like to play?");

    playGame();

        function computerPlay() {
            var computerChoice = [Math.floor(Math.random() * 3)];
            if (computerChoice == 0) {
                var computerAnswer = "rock";
            } else if (computerChoice == 1) {
                var computerAnswer = "paper";
            } else {
                var computerAnswer = "scissors";
            }
            return computerAnswer;
        }

        function playRound(player, computer) {
            if (computer == "rock" && player == "rock") {
                content.textContent = "It's a tie. Two rocks.";
                return tie++;
            } else if (computer == "rock" && player == "paper") {
                content.textContent = "Paper covers rock. You win!";
                return playerScore++;
            } else if (computer == "rock" && player == "scissors") {
                content.textContent = "Rock breaks scissors. You lose.";
                return computerScore++;
            } else if (computer == "paper" && player == "rock") {
                content.textContent = "Paper covers rock. You lose.";
                return computerScore++;
            } else if (computer == "paper" && player == "paper") {
                content.textContent = "Two papers. You tie.";
                return tie ++;
            } else if (computer == "paper" && player == "scissors") {
                content.textContent = "Scissors cut paper. You win!";
                return playerScore++;
            } else if (computer == "scissors" && player == "rock") {
                content.textContent = "Rock breaks scissors. You win!";
                return playerScore++;
            } else if (computer == "scissors" && player == "paper") {
                content.textContent = "Scissors cut paper. You lose.";
                return computerScore++;
            } else if (computer == "scissors" && player == "scissors") {
                content.textContent = "Two scissors. You tie.";
                return tie++;
            } else {
                content.textContent = "You need to type rock, paper, or scissors. Try again.";
            }
        }

        function playGame() {
            
            const rock = document.getElementById("rock");
            rock.addEventListener("click", selectRock);

            function selectRock() {
                playRound("rock", computerPlay());
                    document.getElementById("compScore").innerHTML = computerScore;
                    document.getElementById("playerScore").innerHTML = playerScore;
                    document.getElementById("tieScore").innerHTML = tie;
                if (playerScore + computerScore + tie == playRounds) {
                    whoWins();
                } else {
                    console.log(playerScore);
                } 
            }

            const paper = document.getElementById("paper");
            paper.addEventListener("click", selectPaper);

            function selectPaper() {
                playRound("paper", computerPlay());
                document.getElementById("compScore").innerHTML = computerScore;
                document.getElementById("playerScore").innerHTML = playerScore;
                document.getElementById("tieScore").innerHTML = tie;
                if (playerScore + computerScore + tie == playRounds) {
                   whoWins();
                } else {
                    console.log(playerScore);
                } 
            }

            const scissors = document.getElementById("scissors");
            scissors.addEventListener("click", selectScissors);

            function selectScissors() {
                playRound("scissors", computerPlay());
                    document.getElementById("compScore").innerHTML = computerScore;
                    document.getElementById("playerScore").innerHTML = playerScore;
                    document.getElementById("tieScore").innerHTML = tie;
                if (playerScore + computerScore + tie == playRounds) {
                    whoWins();
                } else {
                    console.log(playerScore);
                }
            }        

            function whoWins() {
            if (computerScore > playerScore) {
                content.textContent = "COMPUTER WINS! " + computerScore + " to " + playerScore;
            } else if (playerScore > computerScore) {
                content.textContent = "YOU WIN! " + playerScore + " to " + computerScore;
            } else {
                content.textContent = "TIE GAME!";
            }
            }
        }