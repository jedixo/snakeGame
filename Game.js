
var canvas = document.getElementById("snakeCanvas");

var hud;
var snake;
var fruit;
var board;

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
     
    window.onkeyup = function (e) {
        if (player === 1 || player == 2) {
            var key = e.keyCode ? e.keyCode : e.which;
            if (key === 80 && play === true) { //80 = p
                hud.message = "paused";
                hud.timer = 55;
                hud.draw(ctx);
                socket.emit("hud", hud);
                play = false;
                socket.emit("pause", play);
            } else if (key === 80 && play === false) {
                play = true;
                socket.emit("pause", play);
            }
        }
    }*/

    /**
     * Main game loop
     * 
     * this function is called every frame
     */
    function game() {

        //clears canvas
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        hud.draw(ctx);
        requestAnimationFrame(game);
    }
    game();
}

/**
 * resets the game
 */
function reset() {
    hud = new HUD(canvas.width, canvas.height);

}