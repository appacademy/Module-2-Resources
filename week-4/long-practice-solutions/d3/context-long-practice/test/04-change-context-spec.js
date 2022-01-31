const assert = require("assert");
const changeContext = require("../problems/04-change-context.js");

describe("changeContext()", function () {
  it("should call the given function with the provided object as its context", function () {
    let map = {
      secret: "I don't know where I'm going",
    };

    let bat = {
      secret: "I'm scared of the dark",
    };

    function getSecret() {
      return this.secret;
    }

    assert.equal(changeContext(getSecret, bat), "I'm scared of the dark");
    assert.equal(changeContext(getSecret, map), "I don't know where I'm going");
  });
});
