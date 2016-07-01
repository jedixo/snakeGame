function snake(board) {
    this.colour = "#7070ff";
    this.blocks = [[15, 15], [15, 16]];

    board[15][15] = 1;
    board[15][16] = 1;

    this.grow = function () {
        this.blocks.push([this.blocks[this.blocks.length - 1][0], this.blocks[this.blocks.length - 1][1]]);
    }

    this.move = function (direction) {
        board[this.blocks[this.blocks.length - 1][0]][this.blocks[this.blocks.length - 1][1]] = 0;
        this.blocks.pop(); //takes of the first elelent
        switch (direction) {
            case 'n':
                //up
                this.blocks.unshift([this.blocks[0][0], this.blocks[0][1] - 1]);
                break;
            case 'e':
                //right
                this.blocks.unshift([this.blocks[0][0] + 1, this.blocks[0][1]]);
                break;
            case 's':
                //down
                this.blocks.unshift([this.blocks[0][0], this.blocks[0][1] + 1]);
                break;
            case 'w':
                //left
                this.blocks.unshift([this.blocks[0][0] - 1, this.blocks[0][1]]);
                break;
            default:
        }
        console.log("test");
        board[this.blocks[0][0]][this.blocks[0][1]] = 1;

    }

    this.draw = function (ctx) {
        ctx.fillStyle = this.colour;
        for (var i = 0; i < this.blocks.length; i++) {
            ctx.fillRect((this.blocks[i][0] * 20) - 20, (this.blocks[i][1] * 20) - 20, 19, 19);
        }
    }
}