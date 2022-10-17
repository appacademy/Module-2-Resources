const chai = require("chai");

const expect = chai.expect;

const { getWinner } = require('../game');

describe('getWinner(move1, move2)', () => {
  context('if move1 beats move2', () => {
    it('should return 1', () => {
      let expectedResult = 1;

      let actualResult = getWinner('s', 'p');
      expect(actualResult).to.eq(expectedResult, 'Expected Scissors to beat Paper');

      actualResult = getWinner('p', 'r');
      expect(actualResult).to.eq(expectedResult, 'Expected Paper to beat Rock');

      actualResult = getWinner('r', 's');
      expect(actualResult).to.eq(expectedResult, 'Expected Rock to beat Scissors');
    });
  });

  context('if move1 loses to move2', () => {
    it('should return -1', () => {
      let expectedResult = -1;

      let actualResult = getWinner('s', 'r');
      expect(actualResult).to.eq(expectedResult, 'Expected Scissors to lose to Rock');

      actualResult = getWinner('p', 's');
      expect(actualResult).to.eq(expectedResult, 'Expected Paper to lose to Scissors');

      actualResult = getWinner('r', 'p');
      expect(actualResult).to.eq(expectedResult, 'Expected Rock to lose to Paper');
    });
  });

  context('if move1 ties with move2', () => {
    it('should return 0', () => {
      let expectedResult = 0;

      let actualResult = getWinner('s', 's');
      expect(actualResult).to.eq(expectedResult, 'Expected Scissors to tie with Scissors');

      actualResult = getWinner('p', 'p');
      expect(actualResult).to.eq(expectedResult, 'Expected Paper to tie with Paper');

      actualResult = getWinner('r', 'r');
      expect(actualResult).to.eq(expectedResult, 'Expected Rock to tie with Rock');
    });
  });
});
