// Your code here
const expect = require("chai").expect;

const reverseString = require("../problems/reverse-string");

describe("The reverseString(string) function", () => {
  it("should return a new string in reverse order from the input string", () => {
    expect(reverseString("fun")).to.equal("nuf");
    expect(reverseString("hello world")).to.equal("dlrow olleh");
  });
});
