let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = document.getElementById("guessInput").value;
    let message = document.getElementById("message");
    let attemptText = document.getElementById("attempts");

    attempts++;

    if (userGuess == randomNumber) {
        message.innerText = "🎉 Correct! You guessed it!";
        message.style.color = "lightgreen";
    } 
    else if (userGuess > randomNumber) {
        message.innerText = "📉 Too High!";
        message.style.color = "yellow";
    } 
    else {
        message.innerText = "📈 Too Low!";
        message.style.color = "orange";
    }

    attemptText.innerText = "Attempts: " + attempts;
}