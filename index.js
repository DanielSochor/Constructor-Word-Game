var inquirer = require("inquirer");
var word = require('./word');

//randomly selects a word and use the word constructor to store it
//prompts the user for each guess and keeps track of the user's remaining guesses

var guessedLetters = [];
var wordArray = ['Jurrasic Park', 'Lost World','Contact','Armageddon'];
//var wordArray = ['Contact'];
var wordtoGuessObject;

function startGame() {
    var wordtoGuess = wordArray[Math.floor(Math.random() * wordArray.length)];
    var position = wordArray.indexOf(wordtoGuess);
    if (wordArray.length == 0) {
        console.log('No more words to guess, you have won!','\n');
        return
    }
    wordArray.splice(position, 1);
    wordtoGuessObject = new word.word(wordtoGuess);
    game();
}

startGame();

function game() {
    //console.log('game is called');
    inquirer.prompt([{
        name: "guessedLetter",
        type: 'input',
        message: "Please guess a letter"
    }])
        .then(response => {
            if (response.guessedLetter === '') {
                //console.log(' ');
                console.log('Please enter a letter');
                console.log(' ');
                game();
            } else {
                if (response.guessedLetter.length > 1) {
                    //console.log(' ');
                    console.log('Please enter only a single letter');
                    console.log(' ');
                    game();
                } else {
                    if (!response.guessedLetter.match(/^[A-Za-z]+$/)) {
                        //console.log(' ');
                        console.log('Please enter only letters');
                        console.log(' ');
                        game();
                    } else {
                        var letterInput = response.guessedLetter.toLowerCase();
                        if (guessedLetters.includes(letterInput)) {
                            //console.log(' ');
                            console.log("This letter has already been guessed");
                            console.log(' ');
                            game();
                        } else {
                            guessedLetters.push(letterInput);
                            var doesGuessMatchAnyLetter = 0;
                            for (var i = 0; i < wordtoGuessObject.arrayOfLetterObjects.length; i++) {
                                if (wordtoGuessObject.arrayOfLetterObjects[i].character == letterInput || wordtoGuessObject.arrayOfLetterObjects[i].character == letterInput.toUpperCase()) {
                                    wordtoGuessObject.arrayOfLetterObjects[i].guessed = true;
                                    doesGuessMatchAnyLetter += 1;
                                }
                            }
                            if (doesGuessMatchAnyLetter > 0) {
                                console.log('You are correct!');
                            } else {
                                console.log('no match');
                            }
                            if (wordtoGuessObject.displayWordToGuess() === true) {
                                //console.log('game is done');
                                guessedLetters = [];
                                startGame();
                                return
                            }
                            //wordtoGuessObject.displayWordToGuess();
                            game()
                        }
                    }
                }
            }
        })
}

