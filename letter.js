class Letter {
    constructor(character) {
        this.character = character;
        this.guessed = false;
        if (character == ' '){
            this.guessed = true;
        }
        // if (this.guessed == false) {
        //     //console.log('letter passed is: '+character)
        //     console.log('_ ')
        //     return 'a_ ';
        // }
        this.uncoverCharacter = function () {
            if (this.guessed == true) {
                return this.character;
            }
        }
        this.guess = function (value){
            if(value == this.character){
                this.guessed = true;
                this.uncoverCharacter;
            }
        }
        // this.correctGuess = function () {
        //     if (!guessCharacter == '') {
        //         if (guessCharacter == character) {
        //             this.guessed = true;
        //         }
        //     }
        // }
    }
}

module.exports = {
    'letter': Letter,
    //export the Letter class constructor function as letter
}