
function fruit(board) {
    this.colour = "#ff0000";
    this.position = {x: rand(0,30,1), y: rand(0,30,1)};
    
    function rand(min, max, interval) {
        if (typeof (interval) === 'undefined') interval = 1;
        var r = Math.floor(Math.random() * (max - min + interval) / interval);
        return r * interval + min;
    }

    while (board[this.position.x,this.position.y] == 1) {
        this.position = {x: rand(0,30,1), y: rand(0,30,1)};
    }
    board[this.position.x,this.position.y] = 2;

    return board;

};