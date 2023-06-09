const chai = require('chai');
const expect = chai.expect;

const message = require('./index');

describe('the index file', () => {
  it('should have a message', () => {
    expect(message).to.equal('Hello World From Test Directory');
  });
});
