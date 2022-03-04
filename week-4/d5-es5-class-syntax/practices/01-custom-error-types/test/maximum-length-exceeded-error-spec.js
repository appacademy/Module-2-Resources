const chai = require("chai");
const expect = chai.expect;

const spies = require('chai-spies');
chai.use(spies);

const ValidationError = require('../error-types/validation-error');
const MaximumLengthExceededError = require('../error-types/maximum-length-exceeded-error');

describe("MaximumLengthExceededError", () => {
  it("should be a child class of ValidationError", () => {
    expect(MaximumLengthExceededError.prototype instanceof ValidationError).to.be.true;
  });

  describe("constructor(excessLength)", () => {
    it("should set a name property of 'MaximumLengthExceededError'", () => {
      expect(new MaximumLengthExceededError().name).to.eq("MaximumLengthExceededError");
    });

    it("should capture the stack trace correctly", () => {
      const traceSpy = chai.spy.on(Error, 'captureStackTrace');
      new MaximumLengthExceededError();
      expect(traceSpy).to.have.been.called.once;
      chai.spy.restore(Error);
    });

    context("when an excessLength is passed in", () => {
      it("should set the message of the error to be 'Maximum length exceeded by ${excessLength}'", () => {
        const error = new MaximumLengthExceededError(5);
        expect(error.message).to.eq('Maximum length exceeded by 5');
      });
    });
  
    context("when an excessLength is NOT passed in", () => {
      it("should set the message of the error to be 'Maximum length exceeded'", () => {
        const error = new MaximumLengthExceededError();
        expect(error.message).to.eq('Maximum length exceeded');
      });
    });
  });
});