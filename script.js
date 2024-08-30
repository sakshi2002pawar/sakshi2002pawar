let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrong = document.getElementById('wrong');
let guesses = document.getElementById('guesses');
let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer); // For debugging, shows the correct answer in the console
let numGuesses = 0;

btn.addEventListener('click', guessesNumber);

function guessesNumber() {
    let userGuess = parseInt(input.value); // Convert input value to an integer

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        wrong.innerHTML = "Please enter a number between 1 and 100.";
    } else {
        numGuesses++;
        guesses.innerHTML = "No of Guesses: " + numGuesses;

        if (userGuess > answer) {
            wrong.innerHTML = "You guessed too high!";
            input.value = "";
        } else if (userGuess < answer) {
            wrong.innerHTML = "You guessed too low!";
            input.value = "";
        } else {
            wrong.innerHTML = "Congratulations! You guessed the correct answer!";
            setTimeout(resetGame, 5000);
        }
    }
}

function resetGame() {
    numGuesses = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    input.value = "";
    wrong.innerHTML = "";
    guesses.innerHTML = "No of Guesses: 0";
    console.log(answer); // For debugging, shows the new correct answer
}
