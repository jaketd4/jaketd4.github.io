// Step 1: Select the new quote button using querySelector
const Button = document.querySelector('#new-quote'); // Make sure your button has the id "new-quote"

// Step 2: Add event listener to check for click and run getQuote function
Button.addEventListener('click', getQuote);

// Step 3: Function declaration for getQuote
function getQuote() {
  console.log('Button was clicked!'); // For testing that it works
}

// Step 4: Create a variable for the API endpoint
const apiEndpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';
