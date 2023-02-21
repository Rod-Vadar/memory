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


function show(){
    document.querySelector('#crazy-fun').style.visibility = 'visible';
    // document.querySelector('.game-start').style.visibility = 'visible';
}

function hide(){
    document.querySelector('#crazy-fun').style.visibility = 'hidden';
    // document.querySelector('.game-start').style.visibility = 'hidden';
}

for(var i=1800; i < 9000000; i=i+1800)
{
	setTimeout("hide()",i);
	setTimeout("show()",i+900);
}