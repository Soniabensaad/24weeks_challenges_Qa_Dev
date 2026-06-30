const testbutton = document.getElementById("btn");
const titleTest = document.getElementById("title");

testbutton.addEventListener("click", function () {
    // Fixed: changed syntax from () to = 
    titleTest.textContent = 'Welcome to JavaScript';
});

