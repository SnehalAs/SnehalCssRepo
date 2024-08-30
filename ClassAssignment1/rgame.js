let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let resetCount = 0;

document.getElementById('resultButton').addEventListener('click', guessNumber);
document.getElementById('resetButton').addEventListener('click', resetGame);

function guessNumber() {
    const guess = document.getElementById('guessInput').value;
    attempts++;
    let result = '';

    if (guess == randomNumber) {
        result = `Congratulations! You guessed the number in ${attempts} attempts.`;
    } else if (guess < randomNumber) {
        result = 'Too low! Try again.';
    } else {
        result = 'Too high! Try again.';
    }

    document.getElementById('result').textContent = result;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;

    console.log(`Attempt ${attempts}: guessed ${guess}`);
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    resetCount++;
    
    document.getElementById('guessInput').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('resetCount').textContent = `Reset Count: ${resetCount}`;

    console.log(`Game reset. Reset count: ${resetCount}`);
}
