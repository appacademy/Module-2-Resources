const { Queue } = require('../03-queue.js');
const { expect } = require('chai');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  describe('Queue Behavior', function() {
    it('Should enqueue and dequeue in O(1) time', function() {
      let timeout = 100;

      const startTime = Date.now();
      let q = new Queue();

      for (let i = 0 ; i < 50000 ; i++) {
          q.enqueue(i);
      }

      for (let i = 0 ; i < 50000 ; i++) {
          q.dequeue();
      }

      expect(Date.now() - startTime < timeout).to.be.true;
    });
  });
});
