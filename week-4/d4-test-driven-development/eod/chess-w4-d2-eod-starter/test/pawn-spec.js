const { expect } = require('chai');

const Board = require('../board');
const {
    Pawn,
    Piece
} = require('../pieces');
const Square = require('../squares');

describe('The Pawn class', () => {

    let p1;
    let p2;
    let piece;
    let b;

    beforeEach(() => {

        p1 = new Pawn(true);
        p2 = new Pawn();
        p2.firstMove = false;
        piece = new Piece();
        b = new Board();

    });

    describe('the constructor function', () => {

        it('should be a child of the Piece class', () => {

            expect(p1 instanceof Piece).to.be.true;
            expect(p2 instanceof Piece).to.be.true;

            expect(p1 instanceof Pawn).to.be.true;
            expect(p2 instanceof Pawn).to.be.true;
            expect(piece instanceof Pawn).to.be.false;

        });

        it('should have a "firstMove" property that defaults to true', () => {

            expect(p1).to.have.property('firstMove');
            expect(p2).to.have.property('firstMove');

            expect(p1.firstMove).to.be.true;
            expect(p2.firstMove).to.be.false;

        });

    });

    describe('the getFirstMove() method', () => {

        it('should return the value of the "firstMove" property', () => {

            expect(p1.getFirstMove()).to.be.true;
            expect(p2.getFirstMove()).to.be.false;

        });

    });

    describe('the setFirstMove() method', () => {

        it('should reverse the value of the "firstMove" property', () => {

            expect(p1.getFirstMove()).to.be.true;
            expect(p2.getFirstMove()).to.be.false;

            p1.setFirstMove();
            p2.setFirstMove();

            expect(p1.getFirstMove()).to.be.false;
            expect(p2.getFirstMove()).to.be.true;

        });

    });

    describe('the canMove() method', () => {

        context('the "firstMove" property is set to true', () => {
            
            it('should allow a white pawn to move 1 square towards enemy territory', () => {
                
                const testB = b.generateBoard();
                testB[6][3] = new Square(6, 3, p1);
        
                /*
                    [
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','P','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ]
                */

                expect(p1.canMove(testB, testB[6][3], testB[5][3])).to.be.true;

            });

            it('should allow a white pawn to move 2 squares towards enemy territory', () => {
                
                const testB = b.generateBoard();
                testB[6][3] = new Square(6, 3, p1);
        
                /*
                    [
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','P','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ]
                */

                expect(p1.canMove(testB, testB[6][3], testB[4][3])).to.be.true;

            });

            it('should allow a black pawn to move 1 square towards enemy territory', () => {
                let p3 = new Pawn();
                const testB = b.generateBoard();
                testB[1][3] = new Square(1, 3, p3);
        
                /*
                    [
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','p','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ]
                */
    
                expect(p3.canMove(testB, testB[1][3], testB[2][3])).to.be.true;
    
            });

            it('should allow a black pawn to move 2 squares towards enemy territory', () => {
                let p3 = new Pawn();
                const testB = b.generateBoard();
                testB[1][3] = new Square(1, 3, p3);
                // console.log(testB)
                /*
                    [
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','p','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ]
                */
    
                expect(p3.canMove(testB, testB[1][3], testB[3][3])).to.be.true;
    
            });

        });
        
        context('the "firstMove" property is set to false', () => {
            
            it('should allow a white pawn to move only 1 square towards enemy territory', () => {
                p1.setFirstMove();
                
                const testB = b.generateBoard();
                testB[4][3] = new Square(4, 3, p1);
        
                /*
                    [
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','P','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ]
                */
    
                expect(p1.canMove(testB, testB[4][3], testB[3][3])).to.be.true;
                expect(p1.canMove(testB, testB[4][3], testB[2][3])).to.be.false;
    
            });

            it('should allow a black pawn to move only 1 square towards enemy territory', () => {
                
                const testB = b.generateBoard();
                testB[2][3] = new Square(2, 3, p2);
        
                /*
                    [
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','p','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ]
                */
    
                expect(p2.canMove(testB, testB[2][3], testB[3][3])).to.be.true;
                expect(p2.canMove(testB, testB[2][3], testB[4][3])).to.be.false;
    
            });

        });

        context('a piece of the opposing color is in a diagonal square', () => {
            it('should allow a white pawn to attack in a forward diagonal', () => {
                const p3 = new Pawn()
                p1.setFirstMove();
                const testB = b.generateBoard();
                testB[2][3] = new Square(2, 3, p2);
                testB[3][4] = new Square(3 ,4, p1);
                testB[2][5] = new Square(2 ,5, p3);
        
                /*
                    [
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','p','.','p','.','.'],
                    ['.','.','.','.','P','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ]
                */
    
                expect(p1.canMove(testB, testB[3][4], testB[2][3])).to.be.true;
                expect(p1.canMove(testB, testB[3][4], testB[2][5])).to.be.true;
            });
    
            it('should allow a black pawn to attack in a forward diagonal', () => {
                const p3 = new Pawn()
                p1.setFirstMove();
                p2.setFirstMove();
                const testB = b.generateBoard();
                testB[2][3] = new Square(2, 3, p2);
                testB[3][4] = new Square(3 ,4, p1);
                testB[2][5] = new Square(2 ,5, p3);
        
                /*
                    [
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','p','.','p','.','.'],
                    ['.','.','.','.','P','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ]
                */
    
                expect(p2.canMove(testB, testB[2][3], testB[3][4])).to.be.true;
                expect(p3.canMove(testB, testB[2][5], testB[3][4])).to.be.true;
            });
    
        
            it ('should not allow a pawn to move to an unoccupied square diagonally', () => {
                const testB = b.generateBoard();
                testB[2][3] = new Square(2, 3, p2);
                testB[3][4] = new Square(3 ,4, p1);
    
                /*
                    [
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','p','.','.','.','.'],
                    ['.','.','.','.','P','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ['.','.','.','.','.','.','.','.'],
                    ]
                */
    
                expect(p1.canMove(testB, testB[3][4], testB[2][5])).to.be.false;
                expect(p2.canMove(testB, testB[2][3], testB[3][2])).to.be.false;
            });
        });
    });


});