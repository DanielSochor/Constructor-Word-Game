var inquirer = require("inquirer");
var letter = require('./letter');
var word = require('./word');

//randomly selects a word and use the word constructor to store it
//prompts the user for each guess and keeps track of the user's remaining guesses

var wordArray = ['Jurrasic Park', 'Lost World'];
var wordtoGuess = wordArray[Math.floor(Math.random() * wordArray.length)];
var guessedLetters = [];

game();

function game() {
    inquirer.prompt([{
        name: "guessedLetter",
        type: 'input',
        message: "Please guess a letter"
    }])
        .then(response => {
            if (response.guessedLetter === '') {
                console.log('Please enter a letter');
                game();
            } else {
                if (response.guessedLetter.length > 1) {
                    console.log('Please enter only a single letter')
                    game();
                } else {
                    if (!response.guessedLetter.match(/^[A-Za-z]+$/)) {
                        console.log('Please enter only letters')
                        game();
                    } else {
                        var letterInput = response.guessedLetter.toLowerCase();
                        if (guessedLetters.includes(letterInput)) {
                            console.log("This letter has already been guessed")
                            game();
                        } else {
                            guessedLetters.push(letterInput);
                            console.log('guessed letter array is: ' + guessedLetters)
                            var test = new letter.letter(response.guessedLetter);
                            game()
                        }
                    }
                }
            }
        })
}
