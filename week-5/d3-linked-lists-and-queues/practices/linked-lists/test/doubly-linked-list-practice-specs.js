const { expect } = require('chai');

const DoublyLinkedList = require('../doubly-linked-list.js');

describe('Doubly Linked List', () => {
    describe('Doubly Linked List - Constructor', () => {
        let doublyLinkedList;

        beforeEach(function () {
            doublyLinkedList = new DoublyLinkedList();
        });

        it('has head property initialized to null', () => {
            expect(doublyLinkedList.head).to.equal(null);
        });

        it('has tail property initialized to null', () => {
            expect(doublyLinkedList.tail).to.equal(null);
        });

        it('has length property initialzed to 0', () => {
            expect(doublyLinkedList.length).to.equal(0);
        });
    });

    describe('Double Linked List - addToHead', () => {
        let doublyLinkedList;

        beforeEach(function () {
            doublyLinkedList = new DoublyLinkedList();

            doublyLinkedList.addToHead(1);
            doublyLinkedList.addToHead(2);
            doublyLinkedList.addToHead(3);
        });

        it('addToHead adds the correct head node', () => {
            expect(doublyLinkedList.head.value).to.equal(3);
        });

        it('addToHead adds the tail if no head exists', () => {
            expect(doublyLinkedList.tail.value).to.equal(1);
        });

        it('addToHead links the next property in the correct order', () => {
            expect(doublyLinkedList.head.next.value).to.equal(2);
            expect(doublyLinkedList.head.next.next.value).to.equal(1);
        });

        it('addToHead links the prev property in the correct order', () => {
            expect(doublyLinkedList.tail.prev.value).to.equal(2);
            expect(doublyLinkedList.tail.prev.prev.value).to.equal(3);
        });

        it('addToHead modifies the length property', () => {
            expect(doublyLinkedList.length).to.equal(3)
        });
    });

    describe('Double Linked List - addToTail', () => {
        let doublyLinkedList;

        beforeEach(function () {
            doublyLinkedList = new DoublyLinkedList();

            doublyLinkedList.addToTail(1);
            doublyLinkedList.addToTail(2);
            doublyLinkedList.addToTail(3);
        });

        it('addToTail adds the correct tail node', () => {
            expect(doublyLinkedList.tail.value).to.equal(3);
        });

        it('addToTail adds head if no head exists', () => {
            expect(doublyLinkedList.head.value).to.equal(1);
        });

        it('addToTail links the prev property in the correct order', () => {
            expect(doublyLinkedList.tail.prev.value).to.equal(2);
            expect(doublyLinkedList.tail.prev.prev.value).to.equal(1);
        });

        it('addToTail links the next property in the correct order', () => {
            expect(doublyLinkedList.head.next.value).to.equal(2);
            expect(doublyLinkedList.head.next.next.value).to.equal(3);
        });


        it('addToTail modifies the length property', () => {
            expect(doublyLinkedList.length).to.equal(3)
        });
    });
});
