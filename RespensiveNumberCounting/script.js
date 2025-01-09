let valuesDisplays = document.querySelectorAll('.num');
valuesDisplays.forEach((num) => {
    let valueNum = num.getAttribute('data-value');  // Target value
    let currentValue = 0;  // Start counting from 0
    let duration = 2000;   // Total duration for counting (in milliseconds)
    let incrementTime = Math.floor(duration / valueNum); // Time between increments

    let counter = setInterval(() => {
        currentValue++;
        num.innerText = currentValue;

        if (currentValue >= valueNum) {
            clearInterval(counter); // Stop once we reach the target number
        }
    }, incrementTime);  // Update every 'incrementTime' milliseconds
});