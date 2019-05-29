class Letter {
    constructor(character, guessCharacter) {
        console.log('letter is: '+character);
        this.character = character;
        this.guessed = false;
        this.uncoverCharacter = function () {
            if (this.guessed == true) {
                return this.character;
            }
        }
        this.correctGuess = function () {
            if (!guessCharacter == '') {
                if (guessCharacter == character) {
                    this.guessed = true;
                }
            }
        }
    }
}

module.exports = {
    'letter': Letter,
    //export the Letter class constructor function as letter
}