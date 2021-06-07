//Create a way to get a random int for the computer to use
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Create an array of choices that the computer may pick from
let choiceArray = ['Rock', 'Papper', 'Scissors'];

const playerSelection="Scissors";
const computerSelection=computerplay();

//Read in players input.  Will use a const of rock for testing
    // function userPrompt() {
    //     playerSelection =  window.prompt(`Please select one of the following moves: ${choiceArray}`)
    //     if (playerSelection != "Rock" || "Paper" || "Scissor")
    // {
    //     console.log("Invalid input: Please select either rock paper or scissor.") 
    // }
    //     else{
    //         console.log(`You have selected ${playerSelection}`);
    //         return playerSelection;
    //     }
    // }
//Accept only an input of rock, paper or scissors

//have the computer randomly pick a value of rock paper or scissor
function computerplay() {
    //use the random number to select a choice from the array for the computer. Return the choice.
    return choiceArray[getRandomInt(3)];
}

//Compare player value against computer value
function playRound(playerSelection, computerSelection) {
    if (playerSelection=="Rock") {
        if (computerSelection==playerSelection) {
           return(`You both selected ${playerSelection}. This round is a tie.`)
        }
        else if (computerSelection=="Scissors") {
            return(`${playerSelection} beats ${computerSelection}. You win!`)
        }
        else
            return(`${computerSelection} beats ${playerSelection}. You lose.`)
    }
    if (playerSelection=="Papper") {
        if (computerSelection==playerSelection) {
            return(`You both selected ${playerSelection}. This round is a tie.`)
        }
        else if (computerSelection=="Rock") {
            return(`${playerSelection} beats ${computerSelection}. You win!`)
        }
        else
        return(`${computerSelection} beats ${playerSelection}. You lose.`)
    }
    if (playerSelection=="Scissors") {
        if (computerSelection==playerSelection) {
            return(`You both selected ${playerSelection}. This round is a tie.`)
        }
        else if (computerSelection=="Papper") {
            return(`${playerSelection} beats ${computerSelection}. You win!`)
        }
        else
            return(`${computerSelection} beats ${playerSelection}. You lose.`)
    }
}

//declare the winner
console.log(playRound(playerSelection,computerSelection));