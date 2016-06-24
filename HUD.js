//Heads Up Display class
/**
 * A calss that controls the information displayed to the player
 * 
 * @param width is the width of the canvas
 * @param height is the height of the canvas
 */
function HUD(width, height) {
    this.colour = "#ffffff";
    this.size = { x: width, y: height };


    /**
     * draws the HUD
     * 
     * @param ctx canvas context for drawing HUD
     */
    this.draw = function (ctx) {
        ctx.strokeStyle = this.colour;
        for (var i = 0; i < canvas.width; i += 20) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
            ctx.lineWidth = .2;
            ctx.moveTo(0, i);
            ctx.lineTo(canvas.width, i);
            ctx.lineWidth = .2;
            ctx.stroke();
        }
    };
};