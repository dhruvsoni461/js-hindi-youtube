// ----------- Number Guessing Game (JavaScript only) -----------

// Select all required HTML elements
const guessInput = document.getElementById("guessInput");       // Input box
const submitBtn = document.getElementById("submitBtn");         // Submit button
const message = document.getElementById("message");             // Message display
const chancesLeft = document.getElementById("chancesLeft");     // Remaining chances span
const guessedNumbersDisplay = document.getElementById("guessedNumbers"); // Previous guesses span
const newGameBtn = document.getElementById("newGameBtn");       // New game button

// ----------- Game Variables -----------
let randomNumber;     // Random number between 1–100
let attempts;         // Remaining attempts
let guessedNumbers;   // Store guessed numbers

// ----------- Function: Start a New Game -----------
function startGame() {
  // Generate random number
  randomNumber = Math.floor(Math.random() * 100) + 1;

  // Reset variables
  attempts = 10;
  guessedNumbers = [];

  // Reset UI
  guessInput.disabled = false;
  submitBtn.disabled = false;
  newGameBtn.style.display = "none";
  message.textContent = "Start guessing the number!";
  chancesLeft.textContent = attempts;
  guessedNumbersDisplay.textContent = "None";

  console.log("Cheat code (for testing):", randomNumber); // Remove later
}

// ----------- Function: Check the User's Guess -----------
function checkGuess() {
  const userGuess = Number(guessInput.value);

  // Validation
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "⚠️ Please enter a number between 1 and 100.";
    return;
  }

  // Store guess
  guessedNumbers.push(userGuess);
  guessedNumbersDisplay.textContent = guessedNumbers.join(", ");

  // Decrease attempts
  attempts--;
  chancesLeft.textContent = attempts;

  // Check result
  if (userGuess === randomNumber) {
    message.textContent = `🎉 Congratulations! You guessed it right: ${randomNumber}`;
    endGame();
  } else if (attempts === 0) {
    message.textContent = `😞 Game Over! The correct number was ${randomNumber}`;
    endGame();
  } else if (userGuess < randomNumber) {
    message.textContent = "📉 Too low! Try again.";
  } else {
    message.textContent = "📈 Too high! Try again.";
  }

  // Clear input
  guessInput.value = "";
}

// ----------- Function: End the Game -----------
function endGame() {
  guessInput.disabled = true;
  submitBtn.disabled = true;
  newGameBtn.style.display = "inline-block"; // Show restart button
}

// ----------- Event Listeners -----------
submitBtn.addEventListener("click", checkGuess);
newGameBtn.addEventListener("click", startGame);

// Start the game first time
startGame();
