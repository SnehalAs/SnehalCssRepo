document.addEventListener('DOMContentLoaded', () => {
    const counterHeading = document.getElementById('counter-heading');
    const counterValue = document.getElementById('counter-value');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');

    let count = 0;

    function updateCounter() {
        counterValue.textContent = count;
        if (count > 0) {
            counterHeading.style.color = 'green';
        } else if (count < 0) {
            counterHeading.style.color = 'red';
        } else {
            counterHeading.style.color = 'black';
        }
    }

    incrementBtn.addEventListener('click', () => {
        count++;
        updateCounter();
    });

    decrementBtn.addEventListener('click', () => {
        count--;
        updateCounter();
    });

    resetBtn.addEventListener('click', () => {
        count = 0;
        updateCounter();
    });

    updateCounter(); // Initialize the counter display
});
