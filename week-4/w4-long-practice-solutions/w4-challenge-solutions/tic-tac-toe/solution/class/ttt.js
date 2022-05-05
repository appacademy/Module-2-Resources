const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    Screen.setMessage(`Player ${this.playerTurn}'s turn`);

    Screen.addCommand('up', 'move the cursor up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('down', 'move the cursor down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('left', 'move the cursor left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('right', 'move the cursor right', this.cursor.right.bind(this.cursor));

    Screen.addCommand('return', 'select your move', this.select.bind(this));

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  select() {

    let row = this.cursor.row;
    let col = this.cursor.col;

    if (this.grid[row][col] !== ' ') {
      Screen.setMessage("You cannot move there");
      Screen.render();
    } else {
      this.doMove(row, col);
    }
  }

  doMove(row, col) {
    this.grid[row][col] = this.playerTurn;
    Screen.setGrid(row, col, this.playerTurn);

    let winner = TTT.checkWin(this.grid);
    if (winner) TTT.endGame(winner);

    this.playerTurn = this.playerTurn === 'X' ? 'O' : 'X';
    Screen.setMessage(`Player ${this.playerTurn}'s turn`);
    Screen.render();
  }

  static checkWin(grid) {
    // Check horizontals
    for (let row = 0 ; row < 3 ; row++) {
      if (grid[row][0] !== ' ' &&
          grid[row][0] === grid[row][1] &&
          grid[row][0] === grid[row][2])
      {
        return grid[row][0];
      }
    }

    // Check verticals
    for (let col = 0 ; col < 3 ; col++) {
      if (grid[0][col] !== ' ' &&
          grid[0][col] === grid[1][col] &&
          grid[0][col] === grid[2][col])
      {
        return grid[0][col];
      }
    }

    // Check diagonals
    if (grid[1][1] !== ' ' &&
        ((grid[1][1] === grid[0][0] &&
          grid[1][1] === grid[2][2]) ||
         (grid[1][1] === grid[0][2] &&
          grid[1][1] === grid[2][0])))
    {
        return grid[1][1];
    }

    // Check if any moves are possible
    for (let row = 0 ; row < 3 ; row++) {
      for (let col = 0 ; col < 3 ; col++) {
        if (grid[row][col] === ' ') return false;
      }
    }

    return 'T';

  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
