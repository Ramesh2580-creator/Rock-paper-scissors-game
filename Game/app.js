let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
const options = ["rock","paper","scissors"];
const randIdx = Math.floor(Math.random() * 3);
return options[randIdx];
};

const drawGame  =() => {
    console.log("game was draw");
    msg.innerText = "game was Draw. play again";
    msg.style.backgroundColor = "black"
}

const showWinner = (userWin,userChoice,computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `you win! your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log("you lose!");
        msg.innerText = `you lose. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice)
    // Generate computer choice
    const computerChoice = genComputerChoice();
    console.log("computer choice = ",computerChoice);

    if (userChoice === computerChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            // rock,scissors
            computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            // rock,scissors
            userWin = computerChoice === "scissors" ? false : true;
        } else{
            // rock,paper
            computerChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
};
choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
     playGame(userChoice);
    });
});