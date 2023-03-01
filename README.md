Memory Game

A small arcade style game written in JavaScript, HTML, and CSS. The game randomly sequences 3 colored lights on the screen.  The player has to try and remember the sequence and play it back.

The score increases if the player gets it right.
When the player wins the level of difficulty increases by making the sequence longer.

The game is very easy in the beginning but rapidly becomes more difficult as the player wins.

![Getting Started](./assets/images/memorygui.PNG)

 **March 28, 2023**

 ## Game Deployment
 The game is deployed and hosted on Github. You can play it here:
 https://rod-vadar.github.io/memory/

 Game controls
 The game is designed "Arcade Style", for the desktop with keyboard controls.  The mouse does not interact with the game.
 The game does not play a mobile device.

 The game controls consist of a single button to start the game using the space bar.

 Left Arrow activates the red light.
 Down arrow activates the yellow light.
 Right Arrow activates the blue light.
 F5 restarts the game.

 ## Game Wireframe
 ![Game Wireframe](./assets/images/memorywireframe.PNG)

 ## Game Flow Chart
 ![Game Flow Chart](./assets/images/memoryflowchart.PNG)

## Color Scheme

![Color Scheme](./assets/images/memorycolor.PNG)

## Typography

I used Google Fonts Press Start 2P to create the 80s Arcade style font. This font is perfect for what I am doing.

## HTML Validation
![HTML Validation](./assets/images/memoryhtmlcheck.PNG)

## CSS Validation
![CSS Validation](./assets/images/memorycssvalid.PNG)

## Audio
For the audio I used Howler.JS
https://github.com/goldfire/howler.js#documentation

howler.js is an audio library for the modern web. It defaults to Web Audio API and falls back to HTML5 Audio. This makes working with audio in JavaScript easy and reliable across all platforms.

Additional information, live demos and a user showcase are available at howlerjs.com.

Follow on Twitter for howler.js and development-related discussion: @GoldFireStudios.

## Bugs
There is an annoying problem with the player selection audio levels which occurs after one cycle of the game.
I am unsure why this occurs as I have the volume level hard-coded in the howler.js function call.
I have not been able to find information yet to solve this problem.

## Integrity
I checked the HTML integrity on https://validator.w3.org/
I checked the CSS integrity on https://jigsaw.w3.org/css-validator/validator
I checked the JavaScript integrity on https://jshint.com/


## Technology
Html, JavaScript, and CSS are used to create the game.
Howler.js is used to play audio files for the game.
Github is used to store all the code for the game.
Gitpod and VSCode are used to write the code.
The game is deployed and hosted on Github.
