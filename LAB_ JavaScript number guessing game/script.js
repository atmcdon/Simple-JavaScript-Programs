// Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guessesTaken = 0;
    let userGuess;
    let promptMessage = "Enter a number between 1 and 100.";

    while (guessesTaken < totalGuesses) {
        userGuess = prompt(promptMessage);
        if (userGuess === null) {
            return 0;
        }
        userGuess = Number(userGuess);

    
        if (isNaN(userGuess)) {
            promptMessage = "Please enter a number.";
            continue;
        }

        guessesTaken++;

        if (userGuess === numToGuess) {
            return guessesTaken;
        } else if (userGuess < numToGuess) {
            promptMessage = `${userGuess} is too small. Guess a larger number.`;
        } else {
            promptMessage = `${userGuess} is too large. Guess a smaller number.`;
        }
    }

    return 0; 
}
