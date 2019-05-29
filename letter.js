class Letter {
    constructor(character) {
        this.character = character;
        this.guessed = false;
        // this.correctGuess = function () {
        //     if (guessed == true) {
        //         return this.character;
        //     } else {
        //         return "_";
        //     }
        // }
        // this.guess = function (guess) {
        //     if (guess == this.character) {
        //         this.guessed = true;
        //         this.correctGuess();
        //     }
        // }
        console.log('letter call works');
    }
}

//console.log('letter');

module.exports = {
    'letter': Letter,
}