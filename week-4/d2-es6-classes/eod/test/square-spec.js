const { expect } = require('chai');

const Square = require('../squares');
const { Piece } = require('../pieces');


describe('The Square Class', () => {
    let square1;
    let square2;
    let piece1;
    let piece2;



    beforeEach(() => {
        piece1 = new Piece(true);
        piece2 = new Piece();
        square1 = new Square(3, 4, piece1);
        square2 = new Square(0, 0);
    });

    describe('the class constructor', () => {

        it ('should have an "x" property to be initialized as an integer', () => {
            expect(square1).to.have.property('x');
            expect(square1.x).to.equal(3);
            expect(square2).to.have.property('x');
            expect(square2.x).to.equal(0);
        });

        it ('should throw an error when the "x" coordinate is out of bounds', () => {
            expect(() => new Square(-1, 4)).to.throw(Error, 'x coordinate out of bounds')
            expect(() => new Square(8, 4)).to.throw(Error, 'x coordinate out of bounds')
        });
    
        it ('should have an "y" property to be initialized as an integer', () => {
            expect(square1).to.have.property('y');
            expect(square1.y).to.equal(4);
            expect(square2).to.have.property('y');
            expect(square2.y).to.equal(0);
        });
    
        it ('should throw an error when the "y" coordinate is out of bounds', () => {
            expect(() => new Square(4, -1)).to.throw(Error, 'y coordinate out of bounds')
            expect(() => new Square(4, 8)).to.throw(Error, 'y coordinate out of bounds')
        });

    });

    describe('the getPiece() method', () => {
        context ('if a piece occupies the square', () => {
            it('should return the piece object', () => {
                expect(square1.getPiece()).to.equal(piece1);
            });
        });
        context('if the square is unoccupied', () => {
            it ('should return null', () => {
                expect(square2.getPiece()).to.be.null;
            });
        });
    });

    describe('the setPiece() method', () => {
        context('if the square is unoccupied', () => {
            it('should set the new piece', () => {
                expect(square2.getPiece()).to.be.null;
                square2.setPiece(piece2);
                expect(square2.getPiece()).to.equal(piece2);
            });
        });

        context('if the square is occupied', () => {
            it('should replace the old piece with the incoming piece', () => {
                expect(square1.getPiece()).to.equal(piece1);
                square1.setPiece(piece2);
                expect(square1.getPiece()).to.equal(piece2);
            });
        });
    });

    describe('the getX() method', () => {
        it('should return the "x" coordinate of the specified square', () => {
            expect(square1.getX()).to.equal(3);
            expect(square2.getX()).to.equal(0);
        });
    });

    describe('the setX() method', () => {
        it('should change the "x" coordinate of the specified square', () => {
            expect(square1.getX()).to.equal(3);
            square1.setX(2);
            expect(square1.getX()).to.equal(2);
            expect(square2.getX()).to.equal(0);
            square2.setX(7);
            expect(square2.getX()).to.equal(7);
        });
    });

    describe('the getY() method', () => {
        it('should return the "y" coordinate of the specified square', () => {
            expect(square1.getY()).to.equal(4);
            expect(square2.getY()).to.equal(0);
        });
    });

    describe('the setY() method', () => {
        it('should change the "y" coordinate of the specified square', () => {
            expect(square1.getY()).to.equal(4);
            square1.setY(2);
            expect(square1.getY()).to.equal(2);
            expect(square2.getY()).to.equal(0);
            square2.setY(7);
            expect(square2.getY()).to.equal(7);
        });
    });



});