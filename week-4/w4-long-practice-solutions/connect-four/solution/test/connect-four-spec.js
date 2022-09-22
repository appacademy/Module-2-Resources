const { expect } = require('chai');

const ConnectFour = require("../class/connect-four.js");

describe ('Connect Four', function () {

  let grid;

  it('records empty grid as no winner', function () {

    grid = [[' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' ']]

    expect(ConnectFour.checkWin(grid)).to.be.false;

  });

  it('recognizes horizontal wins', function () {

    grid = [[' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' '],
            [' ','X','X','X','X',' ',' '],
            [' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' ']]

    expect(ConnectFour.checkWin(grid)).to.equal('X');

    grid = [[' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' '],
            ['O','O','O','O',' ',' ',' ']]

    expect(ConnectFour.checkWin(grid)).to.equal('O');

  });

  it('recognizes vertical wins', function () {

    grid = [[' ',' ',' ',' ',' ',' ','X'],
            [' ',' ',' ',' ',' ',' ','X'],
            [' ',' ',' ',' ',' ',' ','X'],
            [' ',' ',' ',' ',' ',' ','X'],
            [' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' ']]

    expect(ConnectFour.checkWin(grid)).to.equal('X');

    grid = [[' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' '],
            ['O',' ',' ',' ',' ',' ',' '],
            ['O',' ',' ',' ',' ',' ',' '],
            ['O',' ',' ',' ',' ',' ',' '],
            ['O',' ',' ',' ',' ',' ',' ']]

    expect(ConnectFour.checkWin(grid)).to.equal('O');

  });


  it('recognizes diagonal downward wins', function () {

    grid = [[' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' '],
            [' ',' ','X',' ',' ',' ',' '],
            [' ',' ',' ','X',' ',' ',' '],
            [' ',' ',' ',' ','X',' ',' '],
            [' ',' ',' ',' ',' ','X',' ']]

    expect(ConnectFour.checkWin(grid)).to.equal('X');

  });

  it('recognizes diagonal upward wins', function () {

    grid = [[' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ','O'],
            [' ',' ',' ',' ',' ','O',' '],
            [' ',' ',' ',' ','O',' ',' '],
            [' ',' ',' ','O',' ',' ',' ']]

    expect(ConnectFour.checkWin(grid)).to.equal('O');

  });

  it('recognizes ties', function () {


    grid = [['X','O','X','O','X','O','X'],
            ['X','O','X','O','X','O','X'],
            ['O','X','O','X','O','X','O'],
            ['O','X','O','X','O','X','O'],
            ['O','X','O','X','O','X','O'],
            ['X','O','X','O','X','O','X']]

    expect(ConnectFour.checkWin(grid)).to.equal('T');


  });

  it('recognizes if there is no win yet', function () {

    grid = [['X','O','X',' ','X','X','X'],
            ['X','O','X','O','X','O','X'],
            ['O','X','O','X','O','X','O'],
            ['O','X','O','X','O','X','O'],
            ['O','X','O','X','O','X','O'],
            ['X','O','X','O','X','O','X']]

    expect(ConnectFour.checkWin(grid)).to.be.false;

  });


});

