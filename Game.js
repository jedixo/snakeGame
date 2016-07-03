
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
var speed = 30; //decrease this number to incrase speed
var direction = 'n';

/**
 * main game function
 * 
 * waits for the everything to load before running 
 */
window.onload = function () {
    ctx = canvas.getContext("2d");
    hud = new HUD(canvas.width, canvas.height);
    snake = new snake(board);
    fruit = new fruit(board);
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
           
            //control border detection
            if (snake.blocks[0][0] + 1 === 31 && direction === 'e' || snake.blocks[0][0] - 1 === 0 && direction === 'w') {
                //hit left or right wall
                reset();
            } else if (snake.blocks[0][1] + 1 === 31 && direction === 's' || snake.blocks[0][1] - 1 === 0 && direction === 'n') {
                //hit top or bottom wall
                reset();
            } else {
                snake.move(direction);
                 if (snake.checkIfOverlap()) {
                console.log(snake.checkIfOverlap());
                reset();
            }
            snake.hasGrown = false;
                //controls fruit collection
                if (snake.blocks[0][0] == fruit.position.x && snake.blocks[0][1] == fruit.position.y) {
                    fruit.newFruit(board);
                    snake.grow();
                    snake.hasGrown = true;
                    if (speed !== 0) {
                        speed--;
                    }
                }
            }
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
    snake.blocks = [[15, 15], [15, 16], [15, 17]];
    snake.hasGrown = false;
    direction = 'n';
    speed = 30;
    fruit.newFruit(board);
}