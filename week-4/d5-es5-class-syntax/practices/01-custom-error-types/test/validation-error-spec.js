const chai = require("chai");
const expect = chai.expect;

const spies = require('chai-spies');
chai.use(spies);

const ValidationError = require('../error-types/validation-error');

describe("ValidationError", () => {
  it("should be a child class of Error", () => {
    expect(ValidationError.prototype instanceof Error).to.be.true;
  });

  describe("constructor(message)", () => {
    it("should set a name property of 'ValidationError'", () => {
      expect(new ValidationError().name).to.eq("ValidationError");
    });

    it("should capture the stack trace correctly", () => {
      const traceSpy = chai.spy.on(Error, 'captureStackTrace');
      new ValidationError();
      expect(traceSpy).to.have.been.called.once;
      chai.spy.restore(Error);
    });

    context("when a message is passed in", () => {
      it("should set the message of the error to be the passed-in message", () => {
        const error = new ValidationError("Password fields do not match");
        expect(error.message).to.eq("Password fields do not match");
      });
    });
  
    context("when a message is NOT passed in", () => {
      it("should set the default message of the error to be 'Invalid input'", () => {
        const error = new ValidationError();
        expect(error.message).to.eq("Invalid input");
      });
    });
  });
});