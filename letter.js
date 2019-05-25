//Contains a constructor, Letter. This constructor should be able to 
//either display an underlying character or a blank placeholder 
//(such as an underscore), depending on whether or not the user 
//has guessed the letter. That means the constructor should define:

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

console.log('test');