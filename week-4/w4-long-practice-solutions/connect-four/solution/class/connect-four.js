const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ']]

    this.colHeights = new Array(7).fill(0);

    this.cursor = new Cursor(6, 7);

    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    Screen.setMessage(`Player ${this.playerTurn}'s turn`);

    Screen.addCommand('left', 'move the cursor left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('right', 'move the cursor right', this.cursor.right.bind(this.cursor));

    Screen.addCommand('return', 'select your move', this.select.bind(this));

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  select() {

    let col = this.cursor.col;
    let row = this.grid.length - 1 - this.colHeights[col];

    if (row < 0 || this.grid[row][col] !== ' ') {
      Screen.setMessage("You cannot move there");
      Screen.render();
    } else {
      this.doMove(row, col);
      this.colHeights[col]++;
    }
  }

  doMove(row, col) {
    this.grid[row][col] = this.playerTurn;
    Screen.setGrid(row, col, this.playerTurn);

    let winner = ConnectFour.checkWin(this.grid);
    if (winner) ConnectFour.endGame(winner);

    this.playerTurn = this.playerTurn === 'X' ? 'O' : 'X';
    Screen.setMessage(`Player ${this.playerTurn}'s turn`);
    Screen.render();
  }

  static checkWin(grid) {
    // Check horizontals
    for (let row = 0 ; row < 6 ; row++) {
      let lastChar = ' '
      let count = 0;
      for (let col = 0 ; col < 7 ; col++) {
        let char = grid[row][col];
        if (char === ' ') {
          lastChar = ' ';
          count = 0;
        } else if (char !== lastChar) {
          lastChar = char;
          count = 1;
        } else {
          count++;
          if (count >= 4) {
            return char;
          }
        }
      }
    }

    // Check verticals
    for (let col = 0 ; col < 7 ; col++) {
      let lastChar = ' '
      let count = 0;
      for (let row = 0 ; row < 6 ; row++) {
        let char = grid[row][col];
        if (char === ' ') {
          lastChar = ' ';
          count = 0;
        } else if (char !== lastChar) {
          lastChar = char;
          count = 1;
        } else {
          count++;
          if (count >= 4) {
            return char;
          }
        }
      }
    }


    // Check diagonals (downward slope)
    for (let row = 0 ; row < 3 ; row++) {
      for (let col = 0 ; col < 4 ; col++) {
        let char = grid[row][col];
        if (char === ' ') {
          continue;
        } else if (char === grid[row+1][col+1] &&
                   char === grid[row+2][col+2] &&
                   char === grid[row+3][col+3]) {
          return char;
        }
      }
    }

    // Check diagonals (upward slope)
    for (let row = 0 ; row < 3 ; row++) {
      for (let col = 3 ; col < 7 ; col++) {
        let char = grid[row][col];
        if (char === ' ') {
          continue;
        } else if (char === grid[row+1][col-1] &&
                   char === grid[row+2][col-2] &&
                   char === grid[row+3][col-3]) {
          return char;
        }
      }
    }

    // Check if any moves are possible
    for (let row = 0 ; row < 6 ; row++) {
      for (let col = 0 ; col < 7 ; col++) {
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

module.exports = ConnectFour;
