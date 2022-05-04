const assert = require("assert");

const callOnTarget = require("../problems/09-call-on-target.js");

describe("callOnTarget()", function () {
  const cat = {
    name: "Breakfast",
  };

  const mouse = {
    name: "Jerry",
  };

  function greet(other) {
    return "I'm " + this.name + ". Nice to meet you, " + other.name;
  }
  const dog = {
    name: "Noodles",
    chase: function (animal) {
      return (
        "Woof, my name is " + this.name + " and I'm chasing " + animal.name
      );
    },
  };

  it("should invoke a function with context of the first object and the second as an argument", function () {
    let test1 = callOnTarget(greet, cat, mouse);
    let result1 = "I'm Breakfast. Nice to meet you, Jerry";

    let test2 = callOnTarget(greet, mouse, cat);
    let result2 = "I'm Jerry. Nice to meet you, Breakfast";

    let test3 = callOnTarget(dog.chase, cat, dog);
    let result3 = "Woof, my name is Breakfast and I'm chasing Noodles";

    assert.equal(test1, result1);
    assert.equal(test2, result2);
    assert.equal(test3, result3);
  });
});
