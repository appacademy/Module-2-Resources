const chai = require("chai");
const spies = require("chai-spies");

const expect = chai.expect;
chai.use(spies);

const { printHelp } = require('../game');

let consoleSpy;

describe('printHelp()', () => {
  beforeEach(function() {
    consoleSpy = chai.spy.on(console, 'log', () => {});
  });

  afterEach(function() {
    chai.spy.restore();
  });

  it('should print a list of available commands to the terminal', () => {
    printHelp();

    const expectedPrintOutputs = [
      "  Type 'r' for Rock",
      "  Type 'p' for Paper",
      "  Type 's' for Scissors",
      "  Type 'q' to quit",
      "  Type 'h' for a list of valid commands\n"
    ];

    expectedPrintOutputs.forEach((output, idx) => {
      expect(consoleSpy).on.nth(idx + 1).be.called.with(output);
    });
  });
});