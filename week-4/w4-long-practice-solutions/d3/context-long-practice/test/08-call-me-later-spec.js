const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const CallCenter = require("../problems/08-call-me-later");

describe("CallCenter", function () {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = chai.spy.on(console, 'log');
  });

  afterEach(() => {
    chai.spy.restore(console);
  });

  describe("sayHello()", () => {
    it("should print 'Hello this is ${name}'", () => {
      let john = new CallCenter("John");
      john.sayHello();
      expect(consoleSpy).to.be.called.once.with("Hello this is John");
    });
  });

  describe("callMeLater(delay)", () => {
    it("should invoke the sayHello method after a specified delay", function (done) {
      let john = new CallCenter("John");
      let msecs = 500;
      expect(consoleSpy).to.not.be.called();
      john.callMeLater(msecs);

      setTimeout(() => {
        expect(consoleSpy).to.be.called.once.with("Hello this is John");
        done();
      }, msecs);
    });
  });
});
