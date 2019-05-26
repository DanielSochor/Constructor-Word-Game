class Letter {
    constructor(character, guessed) {
        this.character = character;
        this.guessed = guessed;
        this.correctGuess = function () {
            if (guessed == true) {
                return this.character;
            } else {
                return "_";
            }
        }
        this.guess = function (guess) {
            if (guess == this.character) {
                this.guessed = true;
                this.correctGuess();
            }
        }
    }
    printStats() {
        console.log(this);
    }
}

console.log('letter');