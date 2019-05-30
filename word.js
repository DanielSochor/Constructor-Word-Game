var letter = require('./letter');

class Word {
    constructor(word, guessed) {
        //console.log('passed in word is: ' + word)
        this.arrayOfLetterObjects = [];
        this.displayWord = '';
        //array of `new` Letter objects representing the letters of the underlying word
        //console.log('word to guess is: ' + word);

        this.wordString = function (word) {
            //console.log('passed in word is: ' + word)
            for (var i = 0; i < word.length; i++) {
                var character = new letter.letter(word[i]);
                this.arrayOfLetterObjects.push(character);
            }
            //console.log(this.arrayOfLetterObjects);
            this.displayWordToGuess();
        }
        //call the function on each letter object that displays letter or _ and concats
        this.guessOnEachLetter = function (character) {
            //takes a character and compares it to the objects


            console.log('guessOnEachLetter called');
            //letter.correctGuess(character);
        }
        //takes a character can calls guess function on each letter object

        this.displayWordToGuess = function () {
            this.displayWord = [];
            var remainingUnguessedLetters = 0;
            for (var i = 0; i < this.arrayOfLetterObjects.length; i++) {
                if (this.arrayOfLetterObjects[i].guessed == false) {
                    this.displayWord += '_ ';
                    remainingUnguessedLetters += 1;
                } else {
                    this.displayWord += (this.arrayOfLetterObjects[i].character + ' ');
                }
            }
            if (remainingUnguessedLetters > 0) {
                console.log(' ');
                console.log('Guess this word!:');
                console.log(this.displayWord);
                console.log(' ');
            } else {
                console.log(' ');
                console.log(this.displayWord);
                console.log(' ');
                console.log('You have guessed all the letters! Good job!');
                return true;
            }
        }
        this.wordString(word);
    }
}

module.exports = {
    'word': Word
    //export the Word class constructor function as word
}