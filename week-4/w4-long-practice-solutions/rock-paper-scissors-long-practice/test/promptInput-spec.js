const chai = require("chai");
const spies = require("chai-spies");

const expect = chai.expect;
chai.use(spies);

let consoleSpy;
let promptInput;

describe('promptInput(rl)', () => {
  beforeEach(function() {
    delete require.cache[require.resolve('../game')];
    promptInput = require('../game').promptInput;
    consoleSpy = chai.spy.on(console, 'log', () => {});
  });

  afterEach(function() {
    chai.spy.restore();
  });

  it("should not print anything else after the user inputs the 'q' command", () => {
    const mockReadlineInterface = chai.spy.interface({
      question(prompt, callback) {
        const answer = 'q';
        console.log(prompt + answer);
        callback(answer);
      },
      close() {}
    });

    promptInput(mockReadlineInterface);

    const expectedPrintOutputs = [
      "0 wins - 0 losses - 0 ties",
      "> q"
    ];

    expectedPrintOutputs.forEach((output, idx) => {
      expect(consoleSpy).on.nth(idx + 1).be.called.with(output);
    });

    expect(consoleSpy).to.have.been.called.exactly(expectedPrintOutputs.length);
  });

  it("should print the list of commands after the user inputs the 'h' command", () => {
    let results = [];
    const mockReadlineInterface = chai.spy.interface({
      question(prompt, callback) {
        const answer = results.length === 0 ? 'h' : 'q';
        console.log(prompt + answer);
        results.push(answer);
        callback(answer);
      },
      close() {}
    });
    promptInput(mockReadlineInterface);

    const expectedPrintOutputs = [
      "0 wins - 0 losses - 0 ties",
      "> h",
      "\nHelp:\n",
      "  Type 'r' for Rock",
      "  Type 'p' for Paper",
      "  Type 's' for Scissors",
      "  Type 'q' to quit",
      "  Type 'h' for a list of valid commands\n",
      "0 wins - 0 losses - 0 ties",
      "> q"
    ];

    expectedPrintOutputs.forEach((output, idx) => {
      expect(consoleSpy).on.nth(idx + 1).be.called.with(output);
    });

    expect(consoleSpy).to.have.been.called.exactly(expectedPrintOutputs.length);
  });

  it("should print the list of commands after the user inputs an invalid command", () => {
    let results = [];
    const mockReadlineInterface = chai.spy.interface({
      question(prompt, callback) {
        const answer = results.length === 0 ? 'c' : 'q';
        console.log(prompt + answer);
        results.push(answer);
        callback(answer);
      },
      close() {}
    });
    promptInput(mockReadlineInterface);

    const expectedPrintOutputs = [
      "0 wins - 0 losses - 0 ties",
      "> c",
      "\nInvalid command.\n",
      "  Type 'r' for Rock",
      "  Type 'p' for Paper",
      "  Type 's' for Scissors",
      "  Type 'q' to quit",
      "  Type 'h' for a list of valid commands\n",
      "0 wins - 0 losses - 0 ties",
      "> q"
    ];

    expectedPrintOutputs.forEach((output, idx) => {
      expect(consoleSpy).on.nth(idx + 1).be.called.with(output);
    });
  });

  it("should print an updated game state after the user inputs the 'r' command", () => {
    let results = [];
    const mockReadlineInterface = chai.spy.interface({
      question(prompt, callback) {
        const answer = results.length === 0 ? 'r' : 'q';
        console.log(prompt + answer);
        results.push(answer);
        callback(answer);
      },
      close() {}
    });

    promptInput(mockReadlineInterface);

    const expectedPrintOutputs = [
      /0 wins - 0 losses - 0 ties/,
      /> r/,
      /You pick r\, computer picks [rsp]\./,
      /You (win!|lose...|tie.)\n/,
      /([0-1]) wins - ([0-1]) losses - ([0-1]) ties/,
      /> q/
    ];

    expectedPrintOutputs.forEach((output, idx) => {
      expect(consoleSpy.__spy.calls[idx][0]).to.match(output);
    });

    expect(consoleSpy).to.have.been.called.exactly(expectedPrintOutputs.length);
  });

  it("should print an updated game state after the user inputs the 'p' command", () => {
    let results = [];
    const mockReadlineInterface = chai.spy.interface({
      question(prompt, callback) {
        const answer = results.length === 0 ? 'p' : 'q';
        console.log(prompt + answer);
        results.push(answer);
        callback(answer);
      },
      close() {}
    });

    promptInput(mockReadlineInterface);

    const expectedPrintOutputs = [
      /0 wins - 0 losses - 0 ties/,
      /> p/,
      /You pick p\, computer picks [rsp]\./,
      /You (win!|lose...|tie.)\n/,
      /([0-1]) wins - ([0-1]) losses - ([0-1]) ties/,
      /> q/
    ];

    expectedPrintOutputs.forEach((output, idx) => {
      expect(consoleSpy.__spy.calls[idx][0]).to.match(output);
    });

    expect(consoleSpy).to.have.been.called.exactly(expectedPrintOutputs.length);
  });

  it("should print an updated game state after the user inputs the 's' command", () => {
    let results = [];
    const mockReadlineInterface = chai.spy.interface({
      question(prompt, callback) {
        const answer = results.length === 0 ? 's' : 'q';
        console.log(prompt + answer);
        results.push(answer);
        callback(answer);
      },
      close() {}
    });

    promptInput(mockReadlineInterface);

    const expectedPrintOutputs = [
      /0 wins - 0 losses - 0 ties/,
      /> s/,
      /You pick s\, computer picks [rsp]\./,
      /You (win!|lose...|tie.)\n/,
      /([0-1]) wins - ([0-1]) losses - ([0-1]) ties/,
      /> q/
    ];

    expectedPrintOutputs.forEach((output, idx) => {
      expect(consoleSpy.__spy.calls[idx][0]).to.match(output);
    });

    expect(consoleSpy).to.have.been.called.exactly(expectedPrintOutputs.length);
  });
});