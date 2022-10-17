const assert = require("assert");
const allTheArgs = require("../problems/07-all-the-args.js");

describe("allTheArgs()", function () {
  const bow = (...names) => {
    return "You bowed to " + names.join(" and ");
  };

  const adder = (...nums) => nums.reduce((num, sum) => sum + num);

  it("should return a function that when invoked will use the arguments that was passed in to allTheArgs", function () {
    let addFive = allTheArgs(adder, 5);
    let bowSandy = allTheArgs(bow, "Sandy");

    assert.equal(addFive(), 5);
    assert.equal(bowSandy(), "You bowed to Sandy");
  });

  it("should return a function that when invoked will use both the call time arguments and the arguments that were passed in to allTheArgs", function () {
    let addFive = allTheArgs(adder, 5);
    let addTwenty = allTheArgs(adder, 5, 10, 5);
    let bowSandy = allTheArgs(bow, "Sandy");
    let bowJoe = allTheArgs(bow, "Joe");

    assert.equal(addFive(), 5);
    assert.equal(addFive(10), 15);
    assert.equal(addTwenty(10), 30);
    assert.equal(bowSandy(), "You bowed to Sandy");
    assert.equal(bowJoe(), "You bowed to Joe");
    assert.equal(
      bowSandy("Joe", "Nico"),
      "You bowed to Sandy and Joe and Nico"
    );
  });
});
