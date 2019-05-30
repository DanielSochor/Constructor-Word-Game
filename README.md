# Constructor-Word-Game
This is a command line interface (CLI) word guess game. Here is how the game works:
•	The game randomly selects a movie title from a premade list
•	The player is given a string of underscores that match the characters in the movie title
•	The player guesses each letter sequentially until they’ve won the game
•	The player then has the opportunity to guess another word
•	What fun!

This is the functionality behind the game:
•	The game utilizes Node.js which is a JavaScript run-environment that allows the execution of JavaScript code outside the browser 
•	NPM which is the default package manager for node. 
•	From NPM the game utilizes inquirer.js to provide a smooth user interface for interacting with the game
•	The game consists of the three JavaScript files entitled letter.js, word.js, and index.js
•	The JS files utilize the require() method and 

The letter.js file provides a constructor for each letter that provides:
•	A string value to store the underlying character for the letter
•	A boolean value that stores whether that letter has been guessed yet
•	A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
•	A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
•	using module.exports the letter.js file provides a reference to its constructor for use by other js files

The word.js file provides a constructor for each word that provides:
•	An array of `new` Letter objects representing the letters of the underlying word
•	A function that returns a string representing the word. This should call the function on each letter object
•	A function that takes a character as an argument and calls the guess function on each letter object 
•	Using module.exports the word.js file provides a reference to its constructor for use by other js files
•	The word.js file relies on the letter.js file

The index.js file provides the logic for the game and relies only on word.js, not letter.js

Please enjoy this wonderful game!
