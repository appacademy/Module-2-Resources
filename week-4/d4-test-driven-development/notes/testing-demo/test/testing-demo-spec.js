const { expect } = require('chai');
// const expect = require('chai').expect;
// const expect = chai.expect;

const message = require('../testing-demo');

describe('the testing-demo module', () => {
  it('should have a message', () => {
    expect(message).to.equal('Hello World')
  })
})