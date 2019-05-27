var inquirer = require("inquirer");

//randomly selects a word and use the word constructor to store it
//prompts the user for each guess and keeps track of the user's remaining guesses

//construct letter to guess


var wordArray = ['Jurrasic Park', 'Lost World'];
var wordtoGuess = wordArray[Math.floor(Math.random() * wordArray.length)];
var guessedLetters = [];

game();

//adjust this to accept only a single letter and handle undefined case

function game() {
    inquirer.prompt([{
        name: "guessedLetter",
        type: 'input',
        message: "please guess a letter"
    }])
        .then(response => {

            if (response.guessedLetter == undefined) {
                console.log('Please enter a letter');
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
                        game();
                    }
                }
            }
        })
}




// class Player{
//     constructor(name, position, offense, defense){
//         this.name = name;
//         this.position = position;
//         this.offense = offense;
//         this.defense = defense;
//     }
//     printStats(){
//         console.log(this);
//     }
// }

// function validate(value){
//     if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
//         return true;
//     }
//         return false;
// }

// function draftPlayers(team){
//     inquirer.prompt([
//         {
//             name: "name",
//             message: "Player's Name: "
//         },
//         {
//             name: "position",
//             message: "Player's position: "
//         },
//         {
//             name: "offense",
//             message: "Player's Offensive Ability: ",
//             validate: validate
//         },
//         {
//             name: "defense",
//             message: "Player's Defensive Ability: ",
//             validate: validate
//         }
//     ]).then(function(answers) {
//         var player = new Player(
//             answers.name,
//             answers.position,
//             parseInt(answers.offense),
//             parseInt(answers.defense)
//         );
//         if (team.starters.length < 2) {
//             team.starters.push(player);
//             console.log(player.name +  ' added to the starters');
//         } else {
//             team.subs.push(player);
//             console.log(player.name +  ' added to the subs');
//         }
//         setUpGame();
//     });
// }
// function addStats(team){
//     stats = 0;
//     for (var i = 0; i < team.starters.length; i++) {
//         stats += team.starters[i].offense;
//     }
//     return stats;
// }
// function playBall(home, away){
//     console.log('inning: ' + inning);
//     if (inning < 5){
//         inning++;
//         var randomPlay = Math.floor(Math.random() * 20);
//         console.log('random play: ' + randomPlay);
//         var homeStats = addStats(home);
//         var awayStats = addStats(away);

//         console.log('home stats: ' + homeStats);
//         console.log('away stats: ' + awayStats);
//         var homeCloseness = Math.abs(randomPlay - homeStats);
//         var awayCloseness = Math.abs(randomPlay - awayStats);

//         if (homeCloseness > awayCloseness){
//             console.log('CUBS win inning');
//             away.points++;
//         } else if (homeCloseness < awayCloseness){
//             console.log('SOX win inning');
//             home.points++;
//         } else {
//             console.log('inning TIED');
//             away.points++;
//             home.points++;
//         }
//         setUpGame();
//     } else {
//         if (home.points > away.points){
//             console.log('SOX WIN!!!');
//         } else if (home.points < away.points){
//             console.log('CUBS WIN!!!');
//         } else {
//             console.log('THEY TIED!!!');
//         }
//     }
// }
// function setUpGame(){
//     if (sox.starters.length + sox.subs.length < 3){
//         console.log('DRAFT SOX PLAYERS:');
//         draftPlayers(sox);
//     } else if (cubs.starters.length + cubs.subs.length < 3){
//         console.log('DRAFT CUBS PLAYERS:');
//         draftPlayers(cubs);
//     } else {
//         console.log('PLAY BALL!!!');
//         playBall(sox, cubs);
//     }
// }
// var sox = {
//     'starters': [],
//     'subs': [],
//     'points': 0
// };
// var cubs = {
//     'starters': [],
//     'subs': [],
//     'points': 0
// };
// var inning = 0;
// setUpGame();