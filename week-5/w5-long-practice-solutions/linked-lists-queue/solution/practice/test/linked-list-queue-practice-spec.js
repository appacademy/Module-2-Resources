const { SinglyLinkedNode,
        SinglyLinkedList,
        DoublyLinkedNode,
        DoublyLinkedList } = require('../linked-list-queue-practice.js');
const { expect } = require('chai');

const chai = require('chai');


describe('Part 2: Linked Lists', () => {
  let node;
  let list;

  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  it('`listLength` returns the length of the linked list', () => {

    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.addToTail(4);

    expect(list.listLength()).to.equal(4);
  });


  it('`sumOfNodes` returns the sum total of all nodes', () => {

    list.addToTail(1);
    list.addToTail(4);
    list.addToTail(5);
    list.addToTail(8);

    expect(list.sumOfNodes()).to.equal(18);
  });


  it('`averageValue` returns the average of all node values', () => {

    list.addToTail(12);
    list.addToTail(6);
    list.addToTail(5);
    list.addToTail(13);

    expect(list.averageValue()).to.equal(9);
  });


  it('`findNthNode` finds a node in the linked list', () => {

    list.addToTail(13);
    list.addToTail(21);
    list.addToTail(32);
    list.addToTail(14);
    list.addToTail(53);

    expect(list.findNthNode(3).value).to.equal(14);
  });

  it('`findMid` returns the middle node (rounded down)', () => {

    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);

    expect(list.findMid().value).to.equal(2);

    list.addToTail(4);
    list.addToTail(5);
    list.addToTail(6);

    expect(list.findMid().value).to.equal(3);
  });


  it('`reverse` returns a new reversed linked list', () => {

    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.addToTail(4);
    list.addToTail(5);
    list.addToTail(6);

    const reversed = list.reverse();

    let cur = reversed.head;
    for (let i = 6 ; i >= 1 ; i--) {
      expect(cur.value).to.equal(i);
      cur = cur.next;
    }

    expect(cur).to.equal(null);
  });

  it('`reverseInPlace` reverses the linked list in-place', () => {

    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.addToTail(4);
    list.addToTail(5);
    list.addToTail(6);

    list.reverseInPlace();

    let cur = list.head;
    for (let i = 6 ; i >= 1 ; i--) {
      expect(cur.value).to.equal(i);
      cur = cur.next;
    }

    expect(cur).to.equal(null);
  });

});


describe('Part 3: Doubly Linked Lists', () => {
  let node;
  let list;

  beforeEach(() => {
    dll = new DoublyLinkedList();
  });

  it('`findMid` returns the middle node (rounded down)', () => {

    dll.addToTail(1);
    dll.addToTail(2);
    dll.addToTail(3);

    expect(dll.findMid().value).to.equal(2);

    dll.addToTail(4);
    dll.addToTail(5);
    dll.addToTail(6);

    expect(dll.findMid().value).to.equal(3);
  });


  it('`reverse` returns a new reversed linked list', () => {

    dll.addToTail(1);
    dll.addToTail(2);
    dll.addToTail(3);
    dll.addToTail(4);
    dll.addToTail(5);
    dll.addToTail(6);

    const reversed = dll.reverse();

    let cur = reversed.head;
    for (let i = 6 ; i >= 1 ; i--) {
      expect(cur.value).to.equal(i);
      cur = cur.next;
    }

    expect(cur).to.equal(null);
  });

  it('`reverseInPlace` reverses the linked list in-place', () => {

    dll.addToTail(1);
    dll.addToTail(2);
    dll.addToTail(3);
    dll.addToTail(4);
    dll.addToTail(5);
    dll.addToTail(6);

    dll.reverseInPlace();

    let cur = dll.head;
    for (let i = 6 ; i >= 1 ; i--) {
      expect(cur.value).to.equal(i);
      cur = cur.next;
    }

    expect(cur).to.equal(null);
  });


});