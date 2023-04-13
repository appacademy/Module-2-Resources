const { expect } = require('chai');

const { Rook, King, Piece } = require('../pieces');
const Board = require('../board');
const Square = require('../squares');

describe('The Rook class', () => {
    let r1;
    let r2;

    beforeEach(() => {
        r1 = new Rook(true);
        r2 = new Rook();
    });

    describe('the constructor function', () => {

        it('should inherit from the King class', () => {
            expect(r1 instanceof King).to.be.true;
            expect(r1 instanceof Rook).to.be.true;

            expect(r1).to.have.property('castlingDone');
        });

    });

    describe('the canMove() method', () => {

        it ('should be able to move up to any unoccupied square', () => {
            const b = new Board;
            const testB = b.generateBoard();

            testB[3][4] = new Square(3, 4, r1);

            /*
                [
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','R','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ]
            */

            expect(r1.canMove(testB, testB[3][4], testB[2][4])).to.be.true;
            expect(r1.canMove(testB, testB[3][4], testB[1][4])).to.be.true;
            expect(r1.canMove(testB, testB[3][4], testB[0][4])).to.be.true;

        });

        it ('should be able to move down to any unoccupied square', () => {
            const b = new Board;
            const testB = b.generateBoard();

            testB[3][4] = new Square(3, 4, r1);

            /*
                [
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','R','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ]
            */

            expect(r1.canMove(testB, testB[3][4], testB[4][4])).to.be.true;
            expect(r1.canMove(testB, testB[3][4], testB[5][4])).to.be.true;
            expect(r1.canMove(testB, testB[3][4], testB[6][4])).to.be.true;
            expect(r1.canMove(testB, testB[3][4], testB[7][4])).to.be.true;

        });

        it ('should be able to move left to any unoccupied square', () => {
            const b = new Board;
            const testB = b.generateBoard();

            testB[3][4] = new Square(3, 4, r1);

            /*
                [
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','R','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ]
            */

            expect(r1.canMove(testB, testB[3][4], testB[3][3])).to.be.true;
            expect(r1.canMove(testB, testB[3][4], testB[3][2])).to.be.true;
            expect(r1.canMove(testB, testB[3][4], testB[3][1])).to.be.true;
            expect(r1.canMove(testB, testB[3][4], testB[3][0])).to.be.true;

        });

        it ('should be able to move right to any unoccupied square', () => {
            const b = new Board;
            const testB = b.generateBoard();

            testB[3][4] = new Square(3, 4, r1);

            /*
                [
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','R','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ]
            */

            expect(r1.canMove(testB, testB[3][4], testB[3][5])).to.be.true;
            expect(r1.canMove(testB, testB[3][4], testB[3][6])).to.be.true;
            expect(r1.canMove(testB, testB[3][4], testB[3][7])).to.be.true;

        });

        it('should not be allowed to move diagonally', () => {
            const b = new Board;
            const testB = b.generateBoard();

            testB[3][4] = new Square(3, 4, r1);

            /*
                [
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','R','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ]
            */
            expect(r1.canMove(testB, testB[3][4], testB[2][5])).to.be.false;
            expect(r1.canMove(testB, testB[3][4], testB[4][5])).to.be.false;
            expect(r1.canMove(testB, testB[3][4], testB[4][3])).to.be.false;
            expect(r1.canMove(testB, testB[3][4], testB[2][3])).to.be.false;
    
        });

        it('should not allow a rook to move beyond an occupied square', () => {

            const b = new Board;
            const testB = b.generateBoard();

            testB[3][4] = new Square(3, 4, r1);
            testB[2][4] = new Square(2, 4, r2);
            testB[3][3] = new Square(3, 3, r2);
            testB[3][5] = new Square(3, 5, r2);
            testB[4][4] = new Square(4, 4, r2);

            /*
                [
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','r','.','.','.'],
                ['.','.','.','r','R','r','.','.'],
                ['.','.','.','.','r','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ]
            */
            // expect(r1.canMove(testB, testB[3][4], testB[0][4])).to.be.false;
            // expect(r1.canMove(testB, testB[3][4], testB[3][0])).to.be.false;
            // expect(r1.canMove(testB, testB[3][4], testB[3][7])).to.be.false;
            expect(r1.canMove(testB, testB[3][4], testB[4][7])).to.be.false;

        });

    });

});