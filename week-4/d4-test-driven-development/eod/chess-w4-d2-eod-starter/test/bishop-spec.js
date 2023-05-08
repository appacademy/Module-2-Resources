const { expect } = require('chai');

const Board = require('../board');

const {
    Bishop
} = require('../pieces');

const Square = require('../squares');

describe('The Bishop class', () => {
    let b1;
    let b2;
    let board;

    beforeEach(() => {
        b1 = new Bishop(true);
        b2 = new Bishop;
        board = new Board();
    });

    describe('the canMove() method', () => {
        it('should allow a bishop to move any distance in an up-left trajectory', () => {

            const testB = board.generateBoard();
            testB[4][3] = new Square(4, 3, b1);
    
            /*
                [
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','B','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ]
            */
    
            expect(b1.canMove(testB, testB[4][3], testB[1][0])).to.be.true;

        });

        it('should allow a bishop to move any distance in an up-right trajectory', () => {

            const testB = board.generateBoard();
            testB[4][3] = new Square(4, 3, b1);
    
            /*
                [
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','B','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ]
            */
    
            expect(b1.canMove(testB, testB[4][3], testB[0][7])).to.be.true;

        });

        it('should allow a bishop to move any distance in an down-left trajectory', () => {

            const testB = board.generateBoard();
            testB[4][3] = new Square(4, 3, b1);
    
            /*
                [
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','B','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ]
            */
    
            expect(b1.canMove(testB, testB[4][3], testB[7][0])).to.be.true;

        });

        it('should allow a bishop to move any distance in an down-right trajectory', () => {

            const testB = board.generateBoard();
            testB[4][3] = new Square(4, 3, b1);
    
            /*
                [
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','B','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ]
            */
    
            expect(b1.canMove(testB, testB[4][3], testB[7][6])).to.be.true;

        });

        it('should not allow a bishop to move any direction other than diagonally', () => {

            const testB = board.generateBoard();
            testB[4][3] = new Square(4, 3, b1);

    
            /*
                [
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','B','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ]
            */
    
            expect(b1.canMove(testB, testB[4][3], testB[7][5])).to.be.false;
            expect(b1.canMove(testB, testB[4][3], testB[4][2])).to.be.false;
            expect(b1.canMove(testB, testB[4][3], testB[3][3])).to.be.false;
            expect(b1.canMove(testB, testB[4][3], testB[5][3])).to.be.false;
            expect(b1.canMove(testB, testB[4][3], testB[4][4])).to.be.false;

        });

        it('should not allow a bishop to move beyond an occupied space', () => {

            const testB = board.generateBoard();
            testB[4][3] = new Square(4, 3, b1);
            testB[2][1] = new Square(2, 1, b2);
            testB[1][6] = new Square(1, 6, b2);
            testB[6][5] = new Square(6, 5, b2);
            testB[6][1] = new Square(6, 1, b2);

    
            /*
                [
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','B','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ]
            */
    
                expect(b1.canMove(testB, testB[4][3], testB[1][0])).to.be.false;
                expect(b1.canMove(testB, testB[4][3], testB[0][7])).to.be.false;
                expect(b1.canMove(testB, testB[4][3], testB[7][0])).to.be.false;
                expect(b1.canMove(testB, testB[4][3], testB[7][6])).to.be.false;

        });
        
    });
});