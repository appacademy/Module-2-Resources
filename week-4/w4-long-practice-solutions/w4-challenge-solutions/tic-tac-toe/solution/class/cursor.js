const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  setRow(newRow) {
    this.resetBackgroundColor();
    this.row = Math.max(0, Math.min(this.numRows - 1, newRow));
    this.setBackgroundColor();
    Screen.render();
  }

  setCol(newCol) {
    this.resetBackgroundColor();
    this.col = Math.max(0, Math.min(this.numCols - 1, newCol));
    this.setBackgroundColor();
    Screen.render();
  }

  up() {
    this.setRow(this.row - 1);
  }

  down() {
    this.setRow(this.row + 1);
  }

  left() {
    this.setCol(this.col - 1);
  }

  right() {
    this.setCol(this.col + 1);
  }

  position() {
    return {row: this.row, col: this.col};
  }

}


module.exports = Cursor;
