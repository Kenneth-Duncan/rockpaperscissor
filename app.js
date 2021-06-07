//Create a way to get a random int for the computer to use
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Create an array of choices that the computer may pick from
let choiceArray = ['Rock', 'Papper', 'Scissors'];

// // declare a variable equal to the selecton for the player
// const playerSelection = userPrompt();
// // declare a variable equal to the selection of the computer
// const computerSelection = computerplay();

//Set the starting score for computer and player
playerScore = 0;
computerScore = 0;


//function to read in users input and insure it is valid
function userPrompt() {
    //Loop to ask for the users response until a valid response is given
    while (true) {
        let playerInput = window.prompt(`Please select one of the following moves: ${choiceArray}`)
        //Remove any unnecessary trailing and leading spaces and tabs from the user input
        playerInput = playerInput.trim()
        // Strip the first letter can captilize it and covert the rest of the input to lowercase
        playerInput = playerInput.charAt(0).toUpperCase() + playerInput.toLocaleLowerCase().slice(1);
        //Accept only an input of Rock Paper or Scissor
        if (playerInput != "Rock" && playerInput != "Papper" && playerInput != "Scissors") {
            console.log(`Invalid input: Please select either Rock Paper or Scissors`);
            continue;
        }
        else
            console.log(`You have selected ${playerInput}`);
        return playerInput;
    }
}
//have the computer randomly pick a value of rock paper or scissor
function computerplay() {
    //use the random number to select a choice from the array for the computer. Return the choice.
    return choiceArray[getRandomInt(3)];
}

//Compare player value against computer value and add a point to the winner
function playRound(playerSelection, computerSelection) {
    //if the player choices rock
    if (playerSelection == "Rock") {
        if (computerSelection == playerSelection) {
            return (`You both selected ${playerSelection}. This round is a tie.`)
        }
        else if (computerSelection == "Scissors") {
            playerScore++;
            return (`${playerSelection} beats ${computerSelection}. You win!`)
        }
        else
            computerScore++;
        return (`${computerSelection} beats ${playerSelection}. You lose.`)
    }
    //if the player selects papper
    if (playerSelection == "Papper") {
        if (computerSelection == playerSelection) {
            return (`You both selected ${playerSelection}. This round is a tie.`)
        }
        else if (computerSelection == "Rock") {
            playerScore++;
            return (`${playerSelection} beats ${computerSelection}. You win!`)
        }
        else
            computerScore++;
        return (`${computerSelection} beats ${playerSelection}. You lose.`)
    }
    //if the player choices scissors
    if (playerSelection == "Scissors") {
        if (computerSelection == playerSelection) {
            return (`You both selected ${playerSelection}. This round is a tie.`)
        }
        else if (computerSelection == "Papper") {
            playerScore++;
            return (`${playerSelection} beats ${computerSelection}. You win!`)
        }
        else
            computerScore++;
        return (`${computerSelection} beats ${playerSelection}. You lose.`)
    }
}



//create a function to loop the code 5 times
function game() {
    for (let i = 0; i < 5; i++) {

        // declare a variable equal to the selecton for the player
        const playerSelection = userPrompt();
        // declare a variable equal to the selection of the computer
        const computerSelection = computerplay();
        //Declare a winner
        console.log(playRound(playerSelection, computerSelection));
        // Display the current score
        console.log(`The current score is: Player ${playerScore} vs Computer ${computerScore}`)
    }
    // report a winner or loser at the end.
    if (playerScore > computerScore) {
        console.log(`You win, ${playerScore} to ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lose, ${computerScore} to ${playerScore}`);
    }
}

game();
