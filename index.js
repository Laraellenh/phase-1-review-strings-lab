// Write your code in this file!
let currentUser = "not empty"

let welcomeMessage = "Welcome to Flatbook, " + currentUser + "!"
const upperCaseCurrentUser = currentUser.toUpperCase();
const excitedWelcomeMessage = "WELCOME TO FLATBOOK, " + upperCaseCurrentUser + "!"

const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);
let shortGreeting = `Welcome, ${currentUser[0]}!`