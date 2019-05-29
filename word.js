var letter = require('./letter');

class Word {
    constructor(word, guessed) {
        //console.log('passed in word is: ' + word)
        this.word = [];
        //array of `new` Letter objects representing the letters of the underlying word
        this.wordString = function (word) {
            //console.log('passed in word is: ' + word)
            for (var i = 0; i < word.length; i++){
                var character = new letter.letter(word[i]);
                //console.log(word[i]);
            }
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