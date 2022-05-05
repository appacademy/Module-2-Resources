const { expect } = require('chai');

const TTT = require("../class/ttt.js");

describe ('Tic Tac Toe', function () {

  let grid;

  it('records empty grid as no winner', function () {

    grid = [[' ',' ',' '],
            [' ',' ',' '],
            [' ',' ',' ']]

    expect(TTT.checkWin(grid)).to.be.false;

  });

  it('recognizes horizontal wins', function () {

    grid = [['X','X','X'],
            [' ',' ',' '],
            [' ',' ',' ']]

    expect(TTT.checkWin(grid)).to.equal('X');

    grid = [[' ',' ',' '],
            ['O','O','O'],
            [' ',' ',' ']]

    expect(TTT.checkWin(grid)).to.equal('O');


    grid = [[' ',' ',' '],
            [' ',' ',' '],
            ['X','X','X']]

    expect(TTT.checkWin(grid)).to.equal('X');

  });

  it('recognizes vertical wins', function () {

    grid = [['X',' ',' '],
            ['X',' ',' '],
            ['X',' ',' ']]

    expect(TTT.checkWin(grid)).to.equal('X');

    grid = [[' ','O',' '],
            [' ','O',' '],
            [' ','O',' ']]

    expect(TTT.checkWin(grid)).to.equal('O');


    grid = [[' ',' ','X'],
            [' ',' ','X'],
            [' ',' ','X']]

    expect(TTT.checkWin(grid)).to.equal('X');

  });


  it('recognizes diagonal wins', function () {

    grid = [['X',' ',' '],
            [' ','X',' '],
            [' ',' ','X']]

    expect(TTT.checkWin(grid)).to.equal('X');

    grid = [[' ',' ','O'],
            [' ','O',' '],
            ['O',' ',' ']]

    expect(TTT.checkWin(grid)).to.equal('O');

  });

  it('recognizes ties', function () {

    grid = [['X','O','X'],
            ['X','O','O'],
            ['O','X','O']]

    expect(TTT.checkWin(grid)).to.equal('T');

  });

  it('recognizes if there is no win yet', function () {

    grid = [['X','X',' '],
            ['X','O','O'],
            ['O','X','O']]

    expect(TTT.checkWin(grid)).to.be.false;

  });


});

