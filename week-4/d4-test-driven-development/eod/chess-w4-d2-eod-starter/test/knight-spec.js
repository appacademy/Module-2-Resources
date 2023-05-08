const { expect } = require('chai');

const Board = require('../board');

const {
    Knight,
    Piece
} = require('../pieces');

const Square = require('../squares');

describe('The Knight class', () => {
    let k1;
    let k2;
    let board

    beforeEach(() => {
        k1 = new Knight(true);
        k2 = new Knight();
        board = new Board;
    });

    describe('the canMove() method', () => {
        it ('should only be able to move in an L shape.', () => {
            const testB = board.generateBoard();
            testB[4][3] = new Square(4, 3, k1);
    
            /*
                [
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','K','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ]
            */
    
            expect(k1.canMove(testB, testB[4][3], testB[2][4])).to.be.true;
            expect(k1.canMove(testB, testB[4][3], testB[2][2])).to.be.true;
            expect(k1.canMove(testB, testB[4][3], testB[3][1])).to.be.true;
            expect(k1.canMove(testB, testB[4][3], testB[5][1])).to.be.true;
            expect(k1.canMove(testB, testB[4][3], testB[6][2])).to.be.true;
            expect(k1.canMove(testB, testB[4][3], testB[6][4])).to.be.true;
            expect(k1.canMove(testB, testB[4][3], testB[5][5])).to.be.true;
            expect(k1.canMove(testB, testB[4][3], testB[3][5])).to.be.true;


            expect(k1.canMove(testB, testB[4][3], testB[4][5])).to.be.false;
            expect(k1.canMove(testB, testB[4][3], testB[6][1])).to.be.false;

        });
    });
});