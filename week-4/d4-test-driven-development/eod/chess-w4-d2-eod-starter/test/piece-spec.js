const { expect } = require('chai');

const { Piece } = require('../pieces');

describe('The Piece class', () => {
    let piece1;
    let piece2;

    beforeEach(() => {
        piece1 = new Piece();
        piece2 = new Piece(true);
    });

    describe('the constructor function', () => {

        it('should have a "white" property that defaults to false', () => {
            expect(piece1).to.have.property('white');
            expect(piece1.white).to.be.false;
        });

        it('should have a "captured" property that defaults to false', () => {
            expect(piece1).to.have.property('captured');
            expect(piece1.captured).to.be.false;
        });

        it('should set the "white" property to true if argument is passed in', () => {
            expect(piece2.white).to.be.true;
        });

    });

    describe('the isWhite() method', () => {
        it('should return the value of the "white" property', () => {
            expect(piece1.isWhite()).to.be.false;
            expect(piece2.isWhite()).to.be.true;
        });
    });

    describe('the setWhite() method', () => {
        it('should set the "white" property to the passed in argument', () => {
            expect(piece1.isWhite()).to.be.false;
            piece1.setWhite(true);
            expect(piece1.isWhite()).to.be.true;

            expect(piece2.isWhite()).to.be.true;
            piece2.setWhite(false);
            expect(piece2.isWhite()).to.be.false;
        });
    });

    describe('the isCaptured() method', () => {
        it('should return the value of the "captured" property', () => {
            expect(piece1.isCaptured()).to.be.false;
            expect(piece2.isCaptured()).to.be.false;
        });
    });

    describe('the setCaptured() method', () => {
        it('should change the "captured" property value to the passed in value', () => {
            expect(piece1.isCaptured()).to.be.false;
            piece1.setCaptured(true);
            expect(piece1.isCaptured()).to.be.true;
        });
    });

    describe('the canMove() method', () => {
        it('should just be an abstract method to be overridden in child classes', () => {
            expect(piece1.canMove()).to.be.undefined;
        });
    });
});