const assert = require("assert");

const FancyCalculator = require("../problems/06-fancy-calculator.js");

describe("FancyCalculator", function () {
  let fancyCalculator = new FancyCalculator();

  it("should be a child class of Calculator", function () {
    const calculator = new FancyCalculator()
    calculator.total = 1;
    assert.equal(calculator.add(9), 10);
  });

  describe("setTotal(newTotal)", () => {
    it("sets a new total and returns the new total", function () {
      assert.equal(fancyCalculator.setTotal(5), 5);
      assert.equal(fancyCalculator.total, 5);
    });
  });

  describe("squared()", () => {
    it("square the total and set and return the new total", function () {
      assert.equal(fancyCalculator.squared(), 25);
    });
  })

  describe("modulo(num)", () => {
    it("should modulo the total by num and set and return the new total", function () {
      assert.equal(fancyCalculator.modulo(4), 1);
    });
  });
});
