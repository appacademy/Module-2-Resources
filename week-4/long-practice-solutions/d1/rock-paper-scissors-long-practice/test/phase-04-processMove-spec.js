const chai = require("chai");
const spies = require("chai-spies");

const expect = chai.expect;
chai.use(spies);

const { processMove } = require('../game');

let consoleSpy;

describe('processMove(cmd, cpu)', () => {
  beforeEach(function() {
    consoleSpy = chai.spy.on(console, 'log', () => {});
  });

  afterEach(function() {
    chai.spy.restore();
  });

  context("if cpu move is 'r'", () => {
    it("should print cmd and the cpu moves to the terminal", () => {
      processMove('s', 'r');
      expect(consoleSpy).on.nth(1).be.called.with("You pick s, computer picks r.");
    });

    it("should print 'You tie.' if cmd is 'r'", () => {
      processMove('r', 'r');
      expect(consoleSpy).on.nth(2).be.called.with("You tie.\n");
    });

    it("should print 'You win!' if cmd is 'p'", () => {;
      processMove('p', 'r');
      expect(consoleSpy).on.nth(2).be.called.with("You win!\n");
    });

    it("should print 'You lose...' if cmd is 's'", () => {;
      processMove('s', 'r');
      expect(consoleSpy).on.nth(2).be.called.with("You lose...\n");
    });
  });

  context("if cpu move is 'p'", () => {
    it("should print cmd and a randomly generated CPU move to the terminal", () => {
      processMove('s', 'p');
      expect(consoleSpy).on.nth(1).be.called.with("You pick s, computer picks p.");
    });

    it("should print 'You lose...' if cmd is 'r'", () => {
      processMove('r', 'p');
      expect(consoleSpy).on.nth(2).be.called.with("You lose...\n");
    });

    it("should print 'You tie.' if cmd is 'p'", () => {
      processMove('p', 'p');
      expect(consoleSpy).on.nth(2).be.called.with("You tie.\n");
    });

    it("should print 'You win!' if cmd is 's'", () => {
      processMove('s', 'p');
      expect(consoleSpy).on.nth(2).be.called.with("You win!\n");
    });
  });

  context("if cpu move is 's'", () => {
    it("should print cmd and a randomly generated CPU move to the terminal", () => {
      processMove('r', 's');
      expect(consoleSpy).on.nth(1).be.called.with("You pick r, computer picks s.");
    });

    it("should print 'You win!' if cmd is 'r'", () => {
      processMove('r', 's');
      expect(consoleSpy).on.nth(2).be.called.with("You win!\n");
    });

    it("should print 'You lose...' if cmd is 'p'", () => {
      processMove('p', 's');
      expect(consoleSpy).on.nth(2).be.called.with("You lose...\n");
    });

    it("should print 'You tie.' if cmd is 's'", () => {
      processMove('s', 's');
      expect(consoleSpy).on.nth(2).be.called.with("You tie.\n");
    });
  });
});