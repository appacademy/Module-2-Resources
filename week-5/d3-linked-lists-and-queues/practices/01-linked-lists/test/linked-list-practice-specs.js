const { expect } = require('chai');

const LinkedList = require('../linked-list.js')

describe('Linked List', () => {
    describe('Linked List - Constructor', () => {
        let linkedList;

        beforeEach(function () {
            linkedList = new LinkedList();
        });

        it('has head property that is initialized to null', () => {
            expect(linkedList.head).to.equal(null);
        });

        it('has length property that is initialized to 0', () => {
            expect(linkedList.length).to.equal(0);
        });

        it('does not have a tail pointer', () => {
            expect(linkedList.tail).to.equal(undefined);
        });
    });


    describe('Linked List - addToHead', () => {
        let linkedList;

        beforeEach(function () {
            linkedList = new LinkedList();

            linkedList.addToHead(1);
            linkedList.addToHead(2);
            linkedList.addToHead(3);
        });

        it('addToHead adds the correct head node', () => {
            expect(linkedList.head.value).to.equal(3);
        });

        it('addToHead links all of the nodes in the correct order', () => {
            expect(linkedList.head.next.value).to.equal(2);
            expect(linkedList.head.next.next.value).to.equal(1);
        });

        it('addToHead correctly modifies the length property', () => {
            expect(linkedList.length).to.equal(3);
        });
    });


    describe('Linked List - addToTail', () => {
        let linkedList;

        beforeEach(function () {
            linkedList = new LinkedList();

            linkedList.addToTail(1);
            linkedList.addToTail(2);
            linkedList.addToTail(3);
        });

        it('addToTail adds the correct tail value', () => {
            expect(linkedList.head.next.next.value).to.equal(3);
        });

        it('addToTail links all of the nodes in the correct order', () => {
            expect(linkedList.head.value).to.equal(1);
            expect(linkedList.head.next.value).to.equal(2);
        });

        it('addToTail correctly modifies the length property', () => {
            expect(linkedList.length).to.equal(3);
        });
    });
});
