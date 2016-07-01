
var canvas = document.getElementById("snakeCanvas");
// board goes 1-31 not 0-30 as 0 is off screen
var hud;
var snake;
var fruit;
var board = [];
var boardLength = canvas.width / 20 + 1;

for (var i = 0; i < boardLength; ++i) {
    board[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

var currentFrame = 0;
var speed = 60; //decrease this number to incrase speed
var direction = 'n';

/**
 * main game function
 * 
 * waits for the everything to load before running 
 */
window.onload = function () {
    ctx = canvas.getContext("2d");
    reset();
    hud.draw(ctx);


    /**
     * an event listener for the keyboard
     *
     * can be used to add shortcuts to the game
     * currently controls the pause function
     * left = 37
    up = 38
    right = 39
    down = 40*/

    window.onkeyup = function (e) {
        var key = e.keyCode ? e.keyCode : e.which;
        if (key === 37) {
            direction = 'w';
        } else if (key === 38) {
            direction = 'n';
        } else if (key === 39) {
            direction = 'e';
        } else if (key === 40) {
            direction = 's';
        }
    }

    /**
     * Main game loop
     * 
     * this function is called every frame
     */
    function game() {

        if (currentFrame == speed) {
            //clears canvas
            snake.move(direction);
            currentFrame = 0;
        } else {
            currentFrame++;
        }


        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        hud.draw(ctx);
        fruit.draw(ctx);
        snake.draw(ctx);
        requestAnimationFrame(game);
    }
    game();
}

/**
 * resets the game
 */
function reset() {
    hud = new HUD(canvas.width, canvas.height);
    snake = new snake(board);
    fruit = new fruit(board);
}