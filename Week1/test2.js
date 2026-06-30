// --- 1. Cleaned Clock Functionality ---

/**
 * Updates the content of an element with the current UTC time string.
 * This assumes you have an HTML element: <p id="currentTime"></p>
 */
function showTime() {
    // Check if the element exists before trying to update it
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        timeElement.innerHTML = new Date().toUTCString();
    }
}

// Start the clock immediately and set the update interval
showTime();
setInterval(showTime, 1000); // Calls showTime every 1 second (1000ms)


// --- 2. Button Color Cycling Functionality ---

// Find all buttons with the class 'btn-cool'
const buttons = document.querySelectorAll('.btn-cool');

// Define the colors array
const colors = ['red', 'brown', 'green', 'purple', 'orange'];

// Initialize a variable to track the current color index, shared by ALL buttons.
let currentColorIndex = 0; 

buttons.forEach((button) => {
    button.addEventListener('click', function() {
        // Calculate the next color index using the modulo operator for circular cycling.
        const colorIndex = currentColorIndex % colors.length;
        
        // Apply the color to the clicked button ('this').
        this.style.background = colors[colorIndex];
        
        // Optional: Run the functionality of the unused myFunction()
        this.innerHTML = "Hello you!"; 
        
        // Increment the index so the *next* click uses the *next* color in the array.
        currentColorIndex++;
    });
});
