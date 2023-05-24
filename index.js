// Computer Choice function
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerChoice = "ROCK";
  } else if (computerChoice === 1) {
    computerChoice = "PAPER";
  } else if (computerChoice === 2) {
    computerChoice = "SCISSORS";
  }
  return computerChoice;
}

//1 Round of Rock Raper Scissors
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  console.log(`You Chose: ${playerSelection}`);
  console.log(`Computer Chose: ${computerSelection}`);
  if (computerSelection === playerSelection) {
    return `${computerSelection} - ${playerSelection} => It's a draw!`;
  } else if (
    computerSelection === "ROCK" &&
    playerSelection === "PAPER"
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    computerSelection === "ROCK" &&
    playerSelection === "SCISSORS"
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (
    computerSelection === "PAPER" &&
    playerSelection === "ROCK"
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (
    computerSelection === "PAPER" &&
    playerSelection === "SCISSORS"
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    computerSelection === "SCISSORS" &&
    playerSelection === "PAPER"
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (
    computerSelection === "SCISSORS" &&
    playerSelection === "ROCK"
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

// Game function
function game() {
  for (let i = 1; i <= 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt(
      "Choose Rock, Paper or Scissors!"
    ).toUpperCase();
    if (
      playerSelection === "ROCK" ||
      playerSelection === "PAPER" ||
      playerSelection === "SCISSORS"
    ) {
      console.log(playRound(playerSelection, computerSelection));
      console.log(" ");
    } else {
      alert("ERROR! Please type 'Rock', 'Paper' or 'Scissors'!");
      i--;
    }
  }
}

game();