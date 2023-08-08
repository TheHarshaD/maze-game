let maze = document.querySelector(".maze");
let ctx = maze.getContext("2d");



class Maze{
    constructor(size, rows, cols){
        this.size = size;
        this.rows = rows;
        this.cols = cols;
        this.grid = [];
        this.stack = [];
    }
}

class Cell{
    constructor(rowN, colN, parentGrid){
        
    }
}