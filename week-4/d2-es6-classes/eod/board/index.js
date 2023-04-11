const Square = require('../squares');
const {
    King,
    Piece
} = require('../pieces');

class Board {
    constructor() {
        this.board = this.generateBoard();
    }

    

    generateBoard() {
        const board = [];
        // for (let i = 0; i < 8; i++) {
        //     board.push([]);
        // }

        for (let i = 0; i < 8; i++) {
            board.push([]);
            for (let j = 0; j < 8; j++) {
                board[i][j] = new Square(i, j, null);
            }
        }

        return board;
    }
}

module.exports = Board;