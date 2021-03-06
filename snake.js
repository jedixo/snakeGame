function snake(board) {
    this.colour = "#7070ff";
    this.blocks = [[15, 15], [15, 16], [15, 17]];
    this.hasGrown = false;

    board[15][15] = 1;
    board[15][16] = 1;
    board[15][17] = 1;

    this.grow = function () {
        this.blocks.push([this.blocks[this.blocks.length - 1][0], this.blocks[this.blocks.length - 1][1]]);
        //this.hasGrown = true;
    }

    this.move = function (direction) {
        board[this.blocks[this.blocks.length - 1][0]][this.blocks[this.blocks.length - 1][1]] = 0;
        this.blocks.pop();
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
        board[this.blocks[0][0]][this.blocks[0][1]] = 1;

    }

    this.draw = function (ctx) {
        ctx.fillStyle = this.colour;
        for (var i = 0; i < this.blocks.length; i++) {
            ctx.fillRect((this.blocks[i][0] * 20) - 20, (this.blocks[i][1] * 20) - 20, 19, 19);
        }
    }

    this.checkIfOverlap = function () {
        if (!this.hasGrown) {
            this.hasGrown = false;
            var sorted_arr = this.blocks.slice().sort();
            for (var i = 0; i < this.blocks.length - 1; i++) {
                if (sorted_arr[i + 1][0] === sorted_arr[i][0] && sorted_arr[i + 1][1] === sorted_arr[i][1]) {
                    console.log(i);
                    console.log(sorted_arr);
                    return true;
                }
            }
        }
        return false;
    }
}