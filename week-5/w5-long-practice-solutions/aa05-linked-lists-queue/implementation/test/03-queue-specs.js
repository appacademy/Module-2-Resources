const { SinglyLinkedNode, Queue } = require('../03-queue.js');
const { expect } = require('chai');

describe('Queue', () => {
  let node;
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  describe('SinglyLinkedNode Constructor', () => {
    it('Should exist', () => {
      expect(SinglyLinkedNode).to.exist;
    });

    it('Should be a function (ES6 classes are "special functions")', () => {
      expect(SinglyLinkedNode).to.be.a('function');
    });

    it('Should have "value" and "next" properties', () => {
      node = new SinglyLinkedNode('A');
      expect(node).to.have.property('value');
      expect(node).to.have.property('next');
    });
  });

  describe('Queue Constructor', () => {
    it('Should exist', () => {
      expect(Queue).to.exist;
    });

    it('Should be a function (ES6 classes are "special functions")', () => {
      expect(Queue).to.be.a('function');
    });

    it('Should have head, tail and length properties', () => {
      expect(queue).to.have.property('head');
      expect(queue).to.have.property('tail');
      expect(queue).to.have.property('length')
    });

    it('Should not implement an Array to store values', () => {
      for (let property in queue) {
        expect(Array.isArray(queue[property])).to.equal(false);
      }
    });
  });

  describe('Queue Methods', () => {
    it('Should have methods named "enqueue" and "dequeue"', () => {
      expect(queue.enqueue).to.be.a('function');
      expect(queue.dequeue).to.be.a('function');
    });

    describe('enqueue', () => {
      it('Should accept a single input parameter', () => {
        expect(queue.enqueue.length).to.equal(1);
      });

      it('Should create a new node with the value provided as input', () => {
        queue.enqueue('A');
        expect(queue.head.value).to.equal('A');
      });

      it('Should reassign both the head and tail pointers when a new node is added to the tail of an empty queue', () => {
        queue.enqueue('A');
        expect(queue.head.value).to.equal('A');
        expect(queue.tail.value).to.equal('A');
      });

      it('Should reassign only the tail pointer when new nodes are added to the tail of the queue of size one or greater', () => {
        queue.enqueue('A');
        queue.enqueue('B');
        expect(queue.head.value).to.equal('A');
        expect(queue.tail.value).to.equal('B');
        queue.enqueue('C');
        expect(queue.head.value).to.equal('A');
        expect(queue.tail.value).to.equal('C');
      });

      it('Should point the next property of the head node to the node that follows it for queues of size one or greater', () => {
        queue.enqueue('A');
        queue.enqueue('B');
        expect(queue.head.next.value).to.eql('B');
        queue.enqueue('C');
        expect(queue.head.next.value).to.equal('B');
      });

      it('Should increment the queue\'s length by one each time a node is added to the queue', () => {
        expect(queue.length).to.equal(0);
        queue.enqueue('A');
        expect(queue.length).to.equal(1);
        queue.enqueue('B');
        expect(queue.length).to.equal(2);
        queue.enqueue('C');
        expect(queue.length).to.equal(3);
      });

      it('Should return the size of the queue after a new node is added to the queue', () => {
        expect(queue.enqueue('A')).to.equal(1);
        expect(queue.enqueue('B')).to.equal(2);
      });
    });

    describe('dequeue', () => {
      it('Should not accept any input parameters', () => {
        expect(queue.dequeue.length).to.equal(0);
      });

      it('Should not throw an error when calling dequeue on an empty queue', () => {
        expect(function () { queue.dequeue() }).to.not.throw();
      });

      it('Should return null if called on an empty queue', () => {
        expect(queue.dequeue()).to.be.equal(null);
      });

      it('Should reassign the head and tail pointers to null if there is only one node in the queue', () => {
        queue.enqueue('A');
        expect(queue.head.value).to.equal('A');
        expect(queue.tail.value).to.equal('A');
        queue.dequeue();
        expect(queue.head).to.equal(null);
        expect(queue.tail).to.equal(null);
      });

      it('Should reassign the head pointer to the node just behind the head node for queues of size two or greater', () => {
        queue.enqueue('A');
        queue.enqueue('B');
        queue.enqueue('C');
        expect(queue.head.value).to.equal('A');
        queue.dequeue();
        expect(queue.head.value).to.equal('B');
        queue.dequeue();
        expect(queue.head.value).to.equal('C');
      });

      it('Should decrement the queue\'s length by one each time a node is removed from the queue', () => {
        queue.enqueue('A');
        queue.enqueue('B');
        queue.enqueue('C');
        expect(queue.length).to.equal(3);
        queue.dequeue();
        expect(queue.length).to.equal(2);
        queue.dequeue();
        expect(queue.length).to.equal(1);
      });

      it('Should return the value of the node removed from the queue', () => {
        queue.enqueue('A');
        queue.enqueue('B');
        expect(queue.dequeue()).to.equal('A');
        expect(queue.dequeue()).to.equal('B');
      });
    });

  });

  describe('Queue Behavior', () => {
    it('Should remove the least recently added of three nodes (FIFO)', () => {
      queue.enqueue('A');
      queue.enqueue('B');
      queue.enqueue('C');
      expect(queue.dequeue()).to.equal('A');
    });

    it('Should remove the oldest node after newer nodes have already been added and others have been removed', () => {
      queue.enqueue('A');
      queue.enqueue('B');
      queue.enqueue('C');
      queue.enqueue('D');
      queue.dequeue()
      expect(queue.dequeue()).to.equal('B');
    });
  });
});
