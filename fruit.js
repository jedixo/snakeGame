
function fruit(board) {
    this.colour = "#ff0070";
    this.position = { x: rand(1, 30, 1), y: rand(1, 30, 1) };

    function rand(min, max, interval) {
        if (typeof (interval) === 'undefined') interval = 1;
        var r = Math.floor(Math.random() * (max - min + interval) / interval);
        return r * interval + min;
    }

    if (board != null) {
        while (board[this.position.x, this.position.y] == 1) {
            this.position = { x: rand(1, 30, 1), y: rand(1, 30, 1) };
        }
        board[this.position.x][this.position.y] = 2;
    }

    this.draw = function (ctx) {
        ctx.fillStyle = this.colour;
        ctx.fillRect((this.position.x * 20) - 20, (this.position.y * 20) - 20, 20, 20);
    }

    this.newFruit = function (board) {
        if (board != null) {
            this.position = { x: rand(1, 30, 1), y: rand(1, 30, 1) };
            while (board[this.position.x, this.position.y] == 1) {
                this.position = { x: rand(1, 30, 1), y: rand(1, 30, 1) };
            }

            board[this.position.x][this.position.y] = 2;
        }
    }

};