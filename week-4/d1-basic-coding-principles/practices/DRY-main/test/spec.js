const chai = require("chai");
const expect = chai.expect;

const {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
} = require('../practice');

describe("multiplyBiggerNumByTwo(num1, num2)", () => {
  context("num1 is bigger than num2", () => {
    it("should return num1 multiplied by 2", () => {
      let num1 = 6;
      let num2 = 2;
      let actual = multiplyBiggerNumByTwo(num1, num2); // should return 12

      expect(actual).to.be.eq(12);
    });
  });

  context("num2 is bigger than num1", () => {
    it("should return num2 multiplied by 2", () => {
      let num1 = 5;
      let num2 = 10;
      let actual = multiplyBiggerNumByTwo(num1, num2); // should return 20

      expect(actual).to.be.eq(20);
    });
  });
});

describe("divideBiggerNumByThree(num1, num2)", () => {
  context("num1 is bigger than num2", () => {
    it("should return num1 divided by 3", () => {
      let num1 = 9;
      let num2 = 3;
      let actual = divideBiggerNumByThree(num1, num2); // should return 3

      expect(actual).to.be.eq(3);
    });
  });

  context("num2 is bigger than num1", () => {
    it("should return num2 divided by 3", () => {
      let num1 = 6;
      let num2 = 12;
      let actual = divideBiggerNumByThree(num1, num2); // should return 20

      expect(actual).to.be.eq(4);
    });
  });
});

describe("eatMostTacos(sum1, sum2)", () => {
  context("sum1 is bigger than sum2", () => {
    it("should return 'I ate ${sum1} tacos'", () => {
      let sum1 = 10;
      let sum2 = 1;
      let actual = eatMostTacos(sum1, sum2); // "I ate 10 tacos"

      expect(actual).to.be.eq(`I ate ${sum1} tacos.`);
    });
  });

  context("sum2 is bigger than sum1", () => {
    it("should return 'I ate ${sum2} tacos'", () => {
      let sum1 = 2;
      let sum2 = 20;
      let actual = eatMostTacos(sum1, sum2); // "I ate 20 tacos"

      expect(actual).to.be.eq(`I ate ${sum2} tacos.`);
    });
  });
});

describe("adoptSmallerDog(weight1, weight2)", () => {
  context("weight1 is bigger than weight2", () => {
    it("should return 'I adopted a dog that weighs ${weight1} pounds.'", () => {
      let weight1 = 30;
      let weight2 = 3;
      let actual = adoptSmallerDog(weight1, weight2); // "I adopted a dog that weighs 3 pounds."

      expect(actual).to.be.eq(`I adopted a dog that weighs ${weight2} pounds.`);
    });
  });

  context("weight2 is bigger than weight1", () => {
    it("should return 'I adopted a dog that weighs ${weight1} pounds.'", () => {
      let weight1 = 4;
      let weight2 = 30;
      let actual = adoptSmallerDog(weight1, weight2); // "I adopted a dog that weighs 4 pounds."

      expect(actual).to.be.eq(`I adopted a dog that weighs ${weight1} pounds.`);
    });
  });
});
