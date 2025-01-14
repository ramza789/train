const random = Math.floor(Math.random() * 20000) + 1;
let tries = 0;
const timeout = 20 * 60 * 1000;
let guesses = [];
const startTime = Date.now();
const input = document.getElementById("guess-input");
const button = document.getElementById("guess-button");
const message = document.getElementById("message");
const status = document.getElementById("status");
const results = document.createElement("div");

document.getElementById("game").appendChild(results);

button.addEventListener("click", askGuess);

function askGuess() {
  const roundStart = Date.now();
  tries++;

  let guess = parseInt(input.value);

  if (isNaN(guess)) {
    message.textContent = "Please enter an integer";
    tries--;
    return;
  }

  const roundStop = Date.now();
  const roundDuration = Math.round((roundStop - roundStart) / 1000);
  const elapsedTime = Date.now() - startTime;
  const remainingTime = Math.round((timeout - elapsedTime) / 60000);

  let resultMessage;
  if (guess > random) {
    resultMessage = `# ${guess} - Too high, time taken ${roundDuration} s, remaining ${remainingTime} m`;
  } else if (guess < random) {
    resultMessage = `# ${guess} - Too low, time taken ${roundDuration} s, remaining ${remainingTime} m.`;
  } else {
    resultMessage = `Guess: ${guess} - Congratulations. You guessed it!`;
    status.textContent = `Tries: ${tries}, total time: ${Math.round(
      elapsedTime / 60000
    )} m`;
    button.disabled = true;
  }

  guesses.unshift(resultMessage); // Add the latest guess to the start of the array
  displayResults(); // Update the display

  if (elapsedTime >= timeout) {
    message.textContent = "Time's up.";
    button.disabled = true;
    return;
  }

  if (resultMessage.includes("Congratulations")) {
    return;
  }

  input.value = "";
}

function displayResults() {
  results.innerHTML = ""; // Clear previous results
  guesses.forEach((guess) => {
    const guessElem = document.createElement("p");
    guessElem.textContent = guess;
    results.appendChild(guessElem);
  });
}
