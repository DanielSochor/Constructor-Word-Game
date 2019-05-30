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
                if (character.guessed == false) {
                    this.displayWord += '_ ';
                } else {
                    this.displayWord += (character.character + ' ');
                }
            }
            console.log(this.arrayOfLetterObjects);
            console.log(' ');
            console.log('Guess this word!:');
            console.log(this.displayWord);
            console.log(' ');
        }
        //call the function on each letter object that displays letter or _ and concats
        this.guessOnEachLetter = function (character) {
            console.log('guessOnEachLetter called');
            //letter.correctGuess(character);
        }
        //takes a character can calls guess function on each letter object
        this.wordString(word);
    }
}

module.exports = {
    'word': Word
    //export the Word class constructor function as word
}