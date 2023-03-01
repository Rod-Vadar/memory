/*
boolean player
generate an array to hold random numbers
Make a function to generate a random number between 1 and 3
store random number in the array

trigger the light buttons from the value of the random number from the array

get the player to try to copy the sequence.
store player's inputs in an array.

compare the player's inputs to the random numbers in the array.
if they are the same, the player wins.

generate a larger array to hold random numbers
trigger the light buttons from the value of the random number from the larger array

compare the player's inputs to the random numbers in the larger array.
if they are the same, the player wins.
if they are not the same, the player loses.

increment the player's score by 10 for each time the correct light button is pressed

if player loses, the game is over

*/







// add event listener to the play button to force user to use spacebar to start the game
const playButton = document.getElementById('start-button');
playButton.addEventListener('click', function (event) {
    document.querySelector('#crazy-fun').textContent = 'Press Spacebar to Start';
});



//Space bar to start the game
document.addEventListener('keydown', function (event) {
    console.log(event.code);
    if (event.code === 'Space') {
        document.querySelector('#crazy-fun').textContent = 'GET READY TO PLAY!';
        document.querySelector('#crazy-fun').style.color = 'yellow';
        setTimeout(start, 1000);

    }
});



//start the game
let playerScore = 0;
let numberOfRandomNumbers = 3; // Global variables as start() is called from itself and the changes would be reset.

function start() {

    // sounds
    const introSound = new Howl({
        src: ['./assets/sounds/intro.wav'],
        volume: 0.5
    });

    introSound.play();
    var count = 3;

    function anim() {
        if (count > 0) {
            console.log(count);
            document.querySelector('#crazy-fun').style.color = 'yellow';
            document.querySelector('#crazy-fun').textContent = count;
            count--;
            setTimeout(anim, 1000);
        } else {
            document.querySelector('#crazy-fun').textContent = `Level ${numberOfRandomNumbers}`;
            run();

        }
    }
    anim();

    function run() {
        Howler.volume(0.5);
        const loserSound = new Howl({
            src: ['./assets/sounds/loser.wav'],
            volume: 0.5
        });

        const playSound = new Howl({
            src: ['./assets/sounds/play.wav'],
            volume: 0.4
        })

        const winSound = new Howl({
            src: ['./assets/sounds/win.wav'],
            volume: 0.1
        })
        let didWin = false;



        document.querySelector('#start-button').textContent = 'Play Again';



        // array to hold random numbers
        const randomNumbers = [];
        randomNumbers.length = numberOfRandomNumbers;
        console.log('number of random numbers = ' + randomNumbers.length);


        for (let i = 0; i < numberOfRandomNumbers; i++) {
            randomNumbers[i] = Math.floor(Math.random() * 3) + 1;
        }




        // Flash the buttons that the computer chooses
        let i = 0;

        function sequence() {

            // document.querySelector('#crazy-fun').textContent = randomNumbers[i];
            if (i < numberOfRandomNumbers) {
                if (randomNumbers[i] === 1) {

                    document.querySelector('#red').style.backgroundColor = 'white';
                    playSound.play();
                    setTimeout(() => {
                        document.querySelector('#red').style.backgroundColor = 'red';
                        setTimeout(() => {
                            i++;
                            sequence();
                        }, 320)
                    }, 870);
                } else if (randomNumbers[i] === 2) {

                    document.querySelector('#yellow').style.backgroundColor = 'white'
                    playSound.play();
                    setTimeout(() => {
                        document.querySelector('#yellow').style.backgroundColor = 'yellow';
                        setTimeout(() => {
                            i++;
                            sequence();
                        }, 320)
                    }, 870);
                } else if (randomNumbers[i] === 3) {

                    document.querySelector('#blue').style.backgroundColor = 'white';
                    playSound.play();
                    setTimeout(() => {
                        document.querySelector('#blue').style.backgroundColor = 'blue';
                        setTimeout(() => {
                            i++;
                            sequence();
                        }, 320)
                    }, 870);
                }
            }

        }
        sequence();

        // get the player's inputs
        // make an array to hold the player's inputs
        let playerInputs = [];

        //addEventListener for player inputs for left arrow, right arrow, and up arrow
        document.addEventListener('keydown', function (event) {

            if (event.key === 'ArrowLeft') {
                document.querySelector('#red').style.backgroundColor = 'white';
                playSound.play();
                setTimeout(() => {
                    document.querySelector('#red').style.backgroundColor = 'red';
                }, 270)
                playerInputs.push(1);
                if (playerInputs.length === randomNumbers.length) {
                    comparePlayerInputs()
                }

            } else if (event.key === 'ArrowDown') {
                document.querySelector('#yellow').style.backgroundColor = 'white';
                playSound.play();
                setTimeout(() => {
                    document.querySelector('#yellow').style.backgroundColor = 'yellow';
                }, 270)
                playerInputs.push(2);
                if (playerInputs.length === randomNumbers.length) {
                    comparePlayerInputs()
                }

            } else if (event.key === 'ArrowRight') {
                document.querySelector('#blue').style.backgroundColor = 'white';
                playSound.play();
                setTimeout(() => {
                    document.querySelector('#blue').style.backgroundColor = 'blue';
                }, 270)
                playerInputs.push(3);
                if (playerInputs.length === randomNumbers.length) {
                    comparePlayerInputs()
                }
            }
        });


        // compare the player's inputs to the random numbers in the array
        function comparePlayerInputs() {
            console.log(playerInputs);
            console.log(randomNumbers);
            console.log(playerInputs == randomNumbers);
            for (let i = 0; i < playerInputs.length; i++) {
                if (playerInputs[i] === randomNumbers[i]) {
                    playerScore += 130;
                    document.querySelector('#player-score').textContent = playerScore;
                    document.querySelector('#crazy-fun').style.color = 'green';
                    document.querySelector('#crazy-fun').textContent = 'YOU WIN!';
                    winSound.play();
                    didWin = true;

                } else if (playerInputs[i] != randomNumbers[i]) {

                    document.querySelector('#crazy-fun').style.color = 'red';
                    document.querySelector('#crazy-fun').textContent = 'YOU LOSE!';
                    didWin = false;
                    loserSound.play();
                }
            }
            if (didWin) {
                numberOfRandomNumbers += 1;
            } else {

                setTimeout(start, 2000);
            }
        }

    }


}