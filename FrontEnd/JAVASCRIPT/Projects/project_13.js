let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice")
const messageContent = document.getElementById("msg-content")
const playerScoreDisplayer = document.getElementById("player-score")
const computerScoreDisplayer = document.getElementById("computer-score")



const drawGame = (playerChoice, computerChoice) => {
    playerScore++;
    computerScore++;
    playerScoreDisplayer.innerText = `${playerScore}`;
    computerScoreDisplayer.innerText = `${computerScore}`;
    messageContent.innerText = `DRAW!! You choose: ${playerChoice} & Computer choose: ${computerChoice}`
    messageContent.style.backgroundColor = "#081829"
}

// check winner after having selction of user and computer both
const checkWinner = (playerChoice, computerChoice) => {
    let playerWin = true;
    if (playerChoice === computerChoice) {
        drawGame(playerChoice, computerChoice);
        return
    } else {
        if(playerChoice === "rock") {
            playerWin = computerChoice === "paper" ? false : true;

        } else if(playerChoice == "paper") {
            playerWin = computerChoice === "scissor" ? false : true;
        } else {  // player choice will be scissor
            playerWin = computerChoice === "rock" ? false : true;
        }
    }
    if(playerWin) {
        playerScore++;
        playerScoreDisplayer.innerText = `${playerScore}`;
        messageContent.innerText = `YOU WIN!! You choose: ${playerChoice} & Computer choose: ${computerChoice}`
        messageContent.style.backgroundColor = "green"
    } else {
        computerScore++;
        computerScoreDisplayer.innerText = `${computerScore}`;
        messageContent.innerText = `YOU LOSE!! You choose: ${playerChoice} & Computer choose: ${computerChoice}`
        messageContent.style.backgroundColor = "red"
    }
}

const generateComChoice = () => {
    const options = ["rock", "paper", "scissor"];

    let computerChoice = Math.floor(Math.random() * 3);
    return options[computerChoice]
}

const playGame = (playerChoice) => {
    // generate computer choice
    const computerChoice = generateComChoice();
    checkWinner(playerChoice, computerChoice)
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const playerChoice = choice.getAttribute("id")
        playGame(playerChoice);
    })
})
