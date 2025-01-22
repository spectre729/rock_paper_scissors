function getComputerChoice(){
    let val = Math.random
    if (val > 0.66){
        return "rock"
    }
    else if(val > 0.33){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function getHumanChoice(){
    let val = prompt("rock, paper, or scissors: ")
    return val
}


const rock = document.querySelector(".rock button");
const paper = document.querySelector(".paper button");
const scissors = document.querySelector(".scissors button");

rock.addEventListener("click", () => {
    console.log("Rock button clicked");
});
paper.addEventListener("click", () => {
    console.log("Paper button clicked");
});
scissors.addEventListener("click", () => {
    console.log("Scissors button clicked");
});



let humanScore, computerScore = 0


function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock"){
        if (computerChoice == "paper"){
            console.log("You lose! Paper beats Rock.")
            computerScore++
        }
        else if (computerChoice == "scissors"){
            console.log("You win! Rock beats scissors.")
            humanScore++
        }
        else[
            console.log("Tie game! You both picked rock.")
        ]
    }
    else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            console.log("You win! Paper beats Rock.")
            humanScore++
        }
        else if (computerChoice == "scissors"){
            console.log("You lose! Scissors beats rock.")
            computerScore++
        }
        else[
            console.log("Tie game! You both picked paper.")
        ]

    }
    else{
        if (computerChoice == "rock"){
            console.log("You lose! Rock beats scissors.")
            computerScore++
        }
        else if (computerChoice == "paper"){
            console.log("You win! Scissors beats rock.")
            humanScore++
        }
        else[
            console.log("Tie game! You both picked scissors.")
        ]

    }
}



function playGame(){
}



playGame()