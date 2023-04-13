const { expect } = require('chai');

const Square = require('../squares');
const Board = require('../board');
const {
    Piece,
    King
} = require('../pieces');

describe('The King class', () => {

    let k1;
    let k2;

    beforeEach(() => {
        k1 = new King();
        k2 = new King(true);
    });

    describe('the constructor function', () => {

        it('should be a child of the Piece class', () => {

            expect(k1 instanceof King).to.be.true;
            expect(k1 instanceof Piece).to.be.true;

            expect(k2 instanceof King).to.be.true;
            expect(k2 instanceof Piece).to.be.true;

        });

        it('should have a castlingDone property that defaults to false', () => {

            expect(k1).to.have.property('castlingDone');
            expect(k1.castlingDone).to.be.false;

        });

    });

    describe('the isCastlingDone() method', () => {

        it('should return the value of the castlingDone property', () => {
            expect(k1.isCastlingDone()).to.be.false;
            k2.castlingDone = true;
            expect(k2.isCastlingDone()).to.be.true;
        });
    });

    describe('the setCastlingDone() method', () => {
        it('should reverse the value of the "castlingDone" property', () => {
            expect(k1.isCastlingDone()).to.be.false;
            k1.setCastlingDone(true);
            expect(k1.isCastlingDone()).to.be.true;
        });
    });

    describe('the canMove() method', () => {

        it('should allow king to move one Square in any direction including diagonals', () => {
            
            const b = new Board();
            // create a new board for testing
            const testB = b.generateBoard();
            // add pieces to the desired location
            testB[3][4] = new Square(3,4,k1);

            /*
               [
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','K','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
               ]
            */
           expect(k1.canMove(testB, testB[3][4], testB[2][4])).to.be.true;
           expect(k1.canMove(testB, testB[3][4], testB[2][5])).to.be.true;
           expect(k1.canMove(testB, testB[3][4], testB[3][5])).to.be.true;
           expect(k1.canMove(testB, testB[3][4], testB[4][5])).to.be.true;
           expect(k1.canMove(testB, testB[3][4], testB[4][4])).to.be.true;
           expect(k1.canMove(testB, testB[3][4], testB[4][3])).to.be.true;
           expect(k1.canMove(testB, testB[3][4], testB[3][3])).to.be.true;
           expect(k1.canMove(testB, testB[3][4], testB[2][3])).to.be.true;
   
        });

        it('should not allow the king to move more than a single space', () => {
            const b = new Board();
            // create a new board for testing
            const testB = b.generateBoard();
            // add pieces to the desired location
            testB[3][4] = new Square(3,4,k1);
            /*
               [
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','K','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
               ]
            */
            expect(k1.canMove(testB, testB[3][4], testB[1][4])).to.be.false;
            expect(k1.canMove(testB, testB[3][4], testB[2][7])).to.be.false;
            expect(k1.canMove(testB, testB[3][4], testB[3][0])).to.be.false;
            expect(k1.canMove(testB, testB[3][4], testB[1][5])).to.be.false;
            expect(k1.canMove(testB, testB[3][4], testB[0][4])).to.be.false;
            expect(k1.canMove(testB, testB[3][4], testB[4][7])).to.be.false;
            expect(k1.canMove(testB, testB[3][4], testB[3][6])).to.be.false;
            expect(k1.canMove(testB, testB[3][4], testB[2][0])).to.be.false;

        });

        it('should not allow the king to move to a space occupied by a piece of the same color', () => {
            let p = new Piece();
            const b = new Board();
            // create a new board for testing
            const testB = b.generateBoard();
            // add pieces to the desired location
            testB[3][4] = new Square(3,4,k1);
            testB[3][5] = new Square(3,5,p);
            testB[2][4] = new Square(2,4,p)
            /*
               [
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','p','.','.','.'],
                ['.','.','.','.','K','p','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
                ['.','.','.','.','.','.','.','.'],
               ]
            */
               expect(k1.canMove(testB, testB[3][4], testB[3][5])).to.be.false;
               expect(k1.canMove(testB, testB[3][4], testB[2][4])).to.be.false;
        });
    });


});