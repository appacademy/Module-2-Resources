const assert = require("assert");

const bindToAnArg = require("../problems/05-bind-to-an-arg.js");

describe("bindToAnArg()", function () {
  it("should return a function that when invoked will use the argument that was passed in to bindToAnArg", function () {
    function iSpy(thing) {
      return "I spy a " + thing;
    }

    let spyTree = bindToAnArg(iSpy, "tree");
    let spyCar = bindToAnArg(iSpy, "car");

    assert.equal(iSpy("potato"), "I spy a potato");
    assert.equal(spyTree(), "I spy a tree");
    assert.equal(spyTree("potato"), "I spy a tree");
    assert.equal(spyTree(), "I spy a tree");
    assert.equal(spyCar(), "I spy a car");
    assert.equal(spyCar("potato"), "I spy a car");
  });
});
