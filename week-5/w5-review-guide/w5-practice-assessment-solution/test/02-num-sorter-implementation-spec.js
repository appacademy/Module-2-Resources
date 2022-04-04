const chai = require('chai');
const expect = chai.expect;

const { LinkedList, NumSorter } = require('../problems/02-num-sorter');

describe('NumSorter implementation', function () {
    it('addAllowedNum adds unique numbers', function () {
        const numSorter = new NumSorter();
        expect(numSorter.addAllowedNum(6)).to.eql('6 added to allowedNums');
        expect(numSorter.addAllowedNum(7)).to.eql('7 added to allowedNums');
        expect(numSorter.addAllowedNum(9)).to.eql('9 added to allowedNums');
    });

    it('addAllowedNum fails to register a repeat number', function () {
        const numSorter = new NumSorter();
        expect(numSorter.addAllowedNum(1)).to.eql('1 added to allowedNums');
        expect(numSorter.addAllowedNum(4)).to.eql('4 added to allowedNums');
        expect(numSorter.addAllowedNum(7)).to.eql('7 added to allowedNums');
        expect(numSorter.addAllowedNum(4)).to.eql('4 already in allowedNums');
    });

    it('allowedNums property is not an Array and is an instance of a Set OR a LinkedList', function () {
        const numSorter = new NumSorter();
        expect(Array.isArray(numSorter.allowedNums)).to.be.false;
        expect(
            numSorter.allowedNums instanceof Set ||
                numSorter.allowedNums instanceof LinkedList
        ).to.be.true;
    });

    it('numList property is not an Array and is an instance of a Set OR a LinkedList', function () {
        const numSorter = new NumSorter();
        expect(Array.isArray(numSorter.numList)).to.be.false;
        expect(
            numSorter.numList instanceof Set ||
                numSorter.numList instanceof LinkedList
        ).to.be.true;
    });

    it('numCount returns the number of nums in the numList', function () {
        const numSorter = new NumSorter();
        numSorter.addAllowedNum(0);
        numSorter.addAllowedNum(1);
        numSorter.addAllowedNum(2);
        expect(numSorter.allowedNums.size).to.eql(3);
    });

    it('isNumAllowed returns a boolean of whether or not a num is allowed', function () {
        const numSorter = new NumSorter();
        numSorter.addAllowedNum(1);
        numSorter.addAllowedNum(2);
        numSorter.addAllowedNum(3);

        expect(numSorter.isNumAllowed(2)).to.be.true;
        expect(numSorter.isNumAllowed(3)).to.be.true;
        expect(numSorter.isNumAllowed(4)).to.be.false;
        expect(numSorter.isNumAllowed(5)).to.be.false;
    });

    it('buildNumList adds nums to the numList and returns its size', function () {
        const numSorterOne = new NumSorter();
        numSorterOne.addAllowedNum(1);
        numSorterOne.addAllowedNum(3);

        expect(numSorterOne.buildNumList(5)).to.eql(2);

        const numSorterTwo = new NumSorter();
        numSorterTwo.addAllowedNum(1);
        numSorterTwo.addAllowedNum(3);
        numSorterTwo.addAllowedNum(5);

        expect(numSorterTwo.buildNumList(5)).to.eql(3);
    });

    it('getFirstNum returns the value of the first number in the numList', function () {
        const numSorter = new NumSorter();
        numSorter.addAllowedNum(0);
        numSorter.addAllowedNum(1);

        expect(numSorter.buildNumList(2)).to.eql(2);
        expect(numSorter.getFirstNum()).to.eql(0);
    });

    it('addNumToBack adds a number to the end of numList and returns the last element', function () {
        const numSorter = new NumSorter();
        numSorter.addAllowedNum(3);

        expect(numSorter.addNumToBack(3)).to.eql(3);
        expect(numSorter.addNumToBack(5)).to.eql(3);
    });
});
