//your code here
// Get references to the elements
const appDiv = document.getElementById("app");
const swapButton = document.getElementById("swap");

// Function to toggle the theme
function swapTheme() {
    // Toggle the 'day' and 'night' classes on the appDiv
    appDiv.classList.toggle("day");
    appDiv.classList.toggle("night");

    // Toggle the text and class on the swapButton
    if (appDiv.classList.contains("night")) {
        swapButton.textContent = "Switch to Light Theme";
        swapButton.classList.remove("button_day");
        swapButton.classList.add("button_night");
    } else {
        swapButton.textContent = "Switch to Dark Theme";
        swapButton.classList.remove("button_night");
        swapButton.classList.add("button_day");
    }
}

// Add a click event listener to the button
swapButton.addEventListener("click", swapTheme);


