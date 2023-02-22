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






// Two event listeners to start the game
//Mouse click to start the game
document.querySelector('#start-button').addEventListener('click', start);
//Space bar to start the game
document.addEventListener('keydown', function (event) {
    console.log(event.code);
    if (event.code === 'Space') {
        start();
    }
});



//start the game
function start() {
    let playerScore = 0;
    document.querySelector('#crazy-fun').textContent = 'GET READY TO PLAY!';
    document.querySelector('#crazy-fun').style.color = 'yellow';
    document.querySelector('#start-button').style.visibility = 'hidden';

    // array to hold random numbers
    const randomNumbers = [];
    let numberOfRandomNumbers = 3;

    for (let i = 0; i < numberOfRandomNumbers; i++) {
        randomNumbers.push(Math.floor(Math.random() * 3) + 1);
    }

    // sequence the buttons
    let i = 0;
    function sequence() {
        document.querySelector('#crazy-fun').textContent = randomNumbers[i];
    if (i < numberOfRandomNumbers) {
        if (randomNumbers[i] === 1) {
            
            document.querySelector('#red').style.backgroundColor = 'white';
            setTimeout(() => {
                document.querySelector('#red').style.backgroundColor = 'red';
                setTimeout(() => {
                    i++;
                    sequence();
                },320)
            }, 870);
        } else if (randomNumbers[i] === 2) {
            
            document.querySelector('#yellow').style.backgroundColor = 'white'
            setTimeout(() => {
                document.querySelector('#yellow').style.backgroundColor = 'yellow';
                setTimeout(() => {
                    i++;
                    sequence();
                },320)
            }, 870);
        } else if (randomNumbers[i] === 3) {
            
            document.querySelector('#blue').style.backgroundColor = 'white';
            setTimeout(() => {
                document.querySelector('#blue').style.backgroundColor = 'blue';
                setTimeout(() => {
                    i++;
                    sequence();
                },320)
            }, 870);
        }
    }

    }
    sequence();
}




// function show() {
//     document.querySelector('#crazy-fun').style.visibility = 'visible';
//     document.querySelector('#start-button').style.fontSize = 'x-large';

// }

// function showColors() {
//     document.querySelector('#red').style.backgroundColor = 'red';
//     document.querySelector('#yellow').style.backgroundColor = 'yellow';
//     document.querySelector('#blue').style.backgroundColor = 'blue';
// }

// function hideCOlors() {
//     document.querySelector('#red').style.backgroundColor = 'blue';
//     document.querySelector('#yellow').style.backgroundColor = 'red';
//     document.querySelector('#blue').style.backgroundColor = 'yellow';
// }

// function hide() {
//     document.querySelector('#crazy-fun').style.visibility = 'hidden';
//     document.querySelector('#start-button').style.fontSize = 'large';

// }

// function vanish(){
//     document.querySelector('#crazy-fun').style.display = 'none';
// }