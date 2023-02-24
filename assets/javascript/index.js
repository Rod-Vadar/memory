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

if player loses 3 times, the game is over

*/







//Space bar to start the game
document.addEventListener('keydown', function (event) {
    console.log(event.code);
    if (event.code === 'Space') {
        start();
    }
});



//start the game
let playerScore = 0;
let numberOfRandomNumbers = 3;

function start() {

    document.querySelector('#crazy-fun').textContent = 'GET READY TO PLAY!';
    document.querySelector('#crazy-fun').style.color = 'yellow';
    document.querySelector('#start-button').textContent = 'Play Again';

    // array to hold random numbers
    const randomNumbers = [];
    randomNumbers.length = numberOfRandomNumbers;
    console.log(randomNumbers.length);
    

    for (let i = 0; i < numberOfRandomNumbers; i++) {
        // randomNumbers.push(Math.floor(Math.random() * 3) + 1);
        randomNumbers[i] = Math.floor(Math.random() * 3) + 1;
    }

    
    

    // Flash the buttons that the computer chooses
    let i = 0;
    function sequence() {
        // document.querySelector('#crazy-fun').textContent = randomNumbers[i];
        if (i < numberOfRandomNumbers) {
            if (randomNumbers[i] === 1) {

                document.querySelector('#red').style.backgroundColor = 'white';
                setTimeout(() => {
                    document.querySelector('#red').style.backgroundColor = 'red';
                    setTimeout(() => {
                        i++;
                        sequence();
                    }, 320)
                }, 870);
            } else if (randomNumbers[i] === 2) {

                document.querySelector('#yellow').style.backgroundColor = 'white'
                setTimeout(() => {
                    document.querySelector('#yellow').style.backgroundColor = 'yellow';
                    setTimeout(() => {
                        i++;
                        sequence();
                    }, 320)
                }, 870);
            } else if (randomNumbers[i] === 3) {

                document.querySelector('#blue').style.backgroundColor = 'white';
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
            setTimeout(() => {
                document.querySelector('#red').style.backgroundColor = 'red';
            }, 270)
            playerInputs.push(1);
            if (playerInputs.length === randomNumbers.length) {
                comparePlayerInputs()
            }

        } else if (event.key === 'ArrowDown') {
            document.querySelector('#yellow').style.backgroundColor = 'white';
            setTimeout(() => {
                document.querySelector('#yellow').style.backgroundColor = 'yellow';
            }, 270)
            playerInputs.push(2);
            if (playerInputs.length === randomNumbers.length) {
                comparePlayerInputs()
            }

        } else if (event.key === 'ArrowRight') {
            document.querySelector('#blue').style.backgroundColor = 'white';
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
                numberOfRandomNumbers +=1;//this needs fixed because it runs 3 times
            } else if (playerInputs[i] != randomNumbers[i]) {
                document.querySelector('#crazy-fun').style.color = 'red';
                document.querySelector('#crazy-fun').textContent = 'YOU LOSE!';
            }
        }

    }




}

