const chai = require("chai");
const spies = require("chai-spies");

const expect = chai.expect;
chai.use(spies);

const {
  bakeAndSellPies
} = require('../practice');

let spy;

describe("bakeAndSellPies(pieType, pieQuantity, profitMargin)", () => {
  beforeEach(function() {
    spy = chai.spy.on(console, "log");
  });

  afterEach(function() {
    chai.spy.restore(console);
  });

  context("apple pies", () => {
    it("bakeAndSellPies('applePie', 5, 2.5) should return print the right ingredients, cost, and revenue", () => {
      bakeAndSellPies("applePie", 5, 2.5);
      
      const expectedPrintOutputs = [
        'Combining ingredients for applePie: pie crust, sugar, butter, apples, cinnamon, eggs',
        'Baked pie 1!',
        'Combining ingredients for applePie: pie crust, sugar, butter, apples, cinnamon, eggs',
        'Baked pie 2!',
        'Combining ingredients for applePie: pie crust, sugar, butter, apples, cinnamon, eggs',
        'Baked pie 3!',
        'Combining ingredients for applePie: pie crust, sugar, butter, apples, cinnamon, eggs',
        'Baked pie 4!',
        'Combining ingredients for applePie: pie crust, sugar, butter, apples, cinnamon, eggs',
        'Baked pie 5!',
        'Cost per pie: 37.5',
        'Sold 5 pies for $468.75!'
      ];

      expectedPrintOutputs.forEach((output, idx) => {
        expect(spy).on.nth(idx + 1).be.called.with(output);
      });
    });
  });

  context("pumpkin pies", () => {
    it("bakeAndSellPies('pumpkinPie', 2) should return print the right ingredients, cost, and revenue", () => {
      bakeAndSellPies("pumpkinPie", 2);
      
      const expectedPrintOutputs = [
        'Combining ingredients for pumpkinPie: pie crust, sugar, butter, pumpkin, cinnamon, eggs',
        'Baked pie 1!',
        'Combining ingredients for pumpkinPie: pie crust, sugar, butter, pumpkin, cinnamon, eggs',
        'Baked pie 2!',
        'Cost per pie: 35.25',
        'Sold 2 pies for $84.60!'
      ];

      expectedPrintOutputs.forEach((output, idx) => {
        expect(spy).on.nth(idx + 1).be.called.with(output);
      });
    });
  });

  context("cherry pies", () => {
    it("bakeAndSellPies('cherryPie', 7, 1.7) should return print the right ingredients, cost, and revenue", () => {
      bakeAndSellPies("cherryPie", 7, 1.7);
      
      const expectedPrintOutputs = [
        'Combining ingredients for cherryPie: pie crust, sugar, butter, cherries, eggs',
        'Baked pie 1!',
        'Combining ingredients for cherryPie: pie crust, sugar, butter, cherries, eggs',
        'Baked pie 2!',
        'Combining ingredients for cherryPie: pie crust, sugar, butter, cherries, eggs',
        'Baked pie 3!',
        'Combining ingredients for cherryPie: pie crust, sugar, butter, cherries, eggs',
        'Baked pie 4!',
        'Combining ingredients for cherryPie: pie crust, sugar, butter, cherries, eggs',
        'Baked pie 5!',
        'Combining ingredients for cherryPie: pie crust, sugar, butter, cherries, eggs',
        'Baked pie 6!',
        'Combining ingredients for cherryPie: pie crust, sugar, butter, cherries, eggs',
        'Baked pie 7!',
        'Cost per pie: 38',
        'Sold 7 pies for $452.20!'
      ];

      expectedPrintOutputs.forEach((output, idx) => {
        expect(spy).on.nth(idx + 1).be.called.with(output);
      });
    });
  });
});
