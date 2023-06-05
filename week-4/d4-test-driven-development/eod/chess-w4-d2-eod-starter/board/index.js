const Square = require("../squares");

class Board {
  constructor() {
    this.board = this.generateBoard();
  }

  generateBoard() {
    const board = [];
    for (let i = 0; i < 8; i++) {
      board.push([]);
    }

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        board[i][j] = new Square(i, j, null);
      }
    }

    return board;
  }
}

const board = new Board();

console.log(board.board);

module.exports = Board;
