const { SinglyLinkedNode, SinglyLinkedList } = require('../01-singly-linked-list.js');
const { expect } = require('chai');

const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

describe('SinglyLinkedList', () => {
    let node;
    let linkedList;

    beforeEach(() => {
        linkedList = new SinglyLinkedList();
    });

    afterEach(() => {
        chai.spy.restore(console, 'log');
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

    describe('SinglyLinkedList Constructor', () => {
        it('Should exist', () => {
            expect(SinglyLinkedList).to.exist;
        });

        it('Should be a function (ES6 classes are "special functions")', () => {
            expect(SinglyLinkedList).to.be.a('function');
        });

        it('Should have head, and length properties', () => {
            expect(linkedList).to.have.property('head');
            expect(linkedList).to.have.property('length');
        });

        it('Should not implement an Array to store values', () => {
            for (let property in linkedList) {
                expect(Array.isArray(linkedList[property])).to.equal(false);
            }
        });
    });

    describe('SinglyLinkedList Methods', () => {
        it('Should have methods named "addToHead", "addToTail", "removeFromHead", "removeFromTail", "peekAtHead", and "print"', () => {
            expect(linkedList.addToHead).to.be.a('function');
            expect(linkedList.addToTail).to.be.a('function');
            expect(linkedList.removeFromHead).to.be.a('function');
            expect(linkedList.removeFromTail).to.be.a('function');
            expect(linkedList.peekAtHead).to.be.a('function');
            expect(linkedList.print).to.be.a('function');
        });

        describe('addToHead', () => {
            it('Should reassign the head pointer when new nodes are added to the head', () => {
                expect(linkedList.head).to.equal(null);
                linkedList.addToHead('B');
                expect(linkedList.head).to.eql({ value: 'B', next: null });
                linkedList.addToHead('A');
                expect(linkedList.head).to.eql({ value: 'A', next: { value: 'B', next: null } });
            });

            it('Should reassign the head pointer when a new node is added to the head of an empty list', () => {
                linkedList.addToHead('A');
                expect(linkedList.head).to.eql({ value: 'A', next: null });
            });

            it('Should update the length property after new nodes are added to the head', () => {
                expect(linkedList.length).to.equal(0);
                linkedList.addToHead('A');
                expect(linkedList.length).to.equal(1);
                linkedList.addToHead('B');
                expect(linkedList.length).to.equal(2);
            });

            it('Should return the updated list after new nodes are added to the head', () => {
                expect(linkedList.addToHead('B')).to.eql({
                    head: { value: 'B', next: null },
                    length: 1
                });
                expect(linkedList.addToHead('A')).to.eql({
                    head: { value: 'A', next: { value: 'B', next: null } },
                    length: 2
                });
            });
        });

        describe('addToTail', () => {
            it('Should should add a new node to the end of the linked list', () => {
                linkedList.addToHead('A');
                linkedList.addToTail('B');
                linkedList.addToTail('C')
                expect(linkedList.head).to.eql({ value: 'A', next: { value: 'B', next: { value: 'C', next: null } } });
            });

            it('Should reassign the head pointer when a new node is added to the tail of an empty list', () => {
                linkedList.addToTail('A');
                expect(linkedList.head).to.eql({ value: 'A', next: null });
            });

            it('Should update the length property after new nodes are added to the tail', () => {
                expect(linkedList.length).to.equal(0);
                linkedList.addToTail('A');
                expect(linkedList.length).to.equal(1);
                linkedList.addToTail('B');
                expect(linkedList.length).to.equal(2);
            });

            it('Should return the updated list after new nodes are added to the tail', () => {
                expect(linkedList.addToTail('A')).to.eql({
                    head: { value: 'A', next: null },
                    length: 1
                });
                expect(linkedList.addToTail('B')).to.eql({
                    head: { value: 'A', next: { value: 'B', next: null } },
                    length: 2
                });
            });
        });

        describe('removeFromHead', () => {
            it('Should return undefined if the list is empty', () => {
                expect(linkedList.removeFromHead()).to.equal(undefined);
            });

            it('Should remove head node from the list when removeFromHead is called', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                expect(linkedList.head.value).to.equal('A');
                linkedList.removeFromHead();
                expect(linkedList.head.value).to.equal('B');
            });

            it('Should reassign the head pointer to the next node in the list', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                expect(linkedList.head.value).to.equal('A');
                linkedList.removeFromHead();
                expect(linkedList.head.value).to.equal('B');
            });

            it('Should update the length property after removing the head node', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                expect(linkedList.length).to.equal(2);
                linkedList.removeFromHead();
                expect(linkedList.length).to.equal(1);
                linkedList.removeFromHead();
                expect(linkedList.length).to.equal(0);
            });

            it('Should reassign the head pointer to null when head is removed from a list of only one node', () => {
                linkedList.addToTail('A');
                expect(linkedList.length).to.equal(1);
                linkedList.removeFromHead();
                expect(linkedList.head).to.equal(null);
            });

            it('Should return the removed head node when removeFromHead is called', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                expect(linkedList.removeFromHead()).to.eql({ value: 'A', next: { value: 'B', next: null } });
            });
        });

        describe('removeFromTail', () => {
            it('Should return undefined if the list is empty', () => {
                expect(linkedList.removeFromTail()).to.equal(undefined);
            });

            it('Should remove tail node from the list when removeFromTail is called', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                expect(linkedList.head).to.eql({ value: 'A', next: { value: 'B', next: null } });
                linkedList.removeFromTail();
                expect(linkedList.head).to.eql({ value: 'A', next: null });
            });

            it('Should reassign the head pointer to null when tail is removed from a list of only one node', () => {
                linkedList.addToTail('A');
                expect(linkedList.length).to.equal(1);
                linkedList.removeFromTail();
                expect(linkedList.head).to.equal(null);
            });

            it('Should reassign the new tail\'s next pointer to null', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                linkedList.addToTail('C');
                expect(linkedList.head.next.next).to.eql({ value: 'C', next: null });
                linkedList.removeFromTail();
                expect(linkedList.head.next.next).to.eql(null);
            });

            it('Should update the length property after removing the tail node', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                expect(linkedList.length).to.equal(2);
                linkedList.removeFromTail();
                expect(linkedList.length).to.equal(1);
                linkedList.removeFromTail();
                expect(linkedList.length).to.equal(0);
            });

            it('Should return the removed tail node when removeFromTail is called', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                expect(linkedList.removeFromTail()).to.eql({ value: 'B', next: null });
            });

        });

        describe('peekAtHead', () => {
            it('Should return undefined for an empty list', () => {
                expect(linkedList.peekAtHead()).to.equal(undefined);
            });

            it('Should return the value of the head for a non-empty list', () => {
                linkedList.addToTail('A');
                linkedList.addToTail('B');
                linkedList.addToTail('C');
                expect(linkedList.peekAtHead()).to.eql('A');
            });
        });

        describe('print', () => {
            it('Should not print anything when there are no nodes', () => {
                const consoleSpy = chai.spy.on(console, 'log');
                linkedList.print();
                expect(consoleSpy).to.not.have.been.called();
            });

            it('Should print the values of the nodes in the linked list in order from the head to the tail', () => {
                const consoleSpy = chai.spy.on(console, 'log');
                linkedList.addToTail('B');
                linkedList.addToTail('C');
                linkedList.addToTail('D');
                linkedList.addToHead('A');
                linkedList.print();
                expect(consoleSpy).on.nth(1).be.called.with('A');
                expect(consoleSpy).on.nth(2).be.called.with('B');
                expect(consoleSpy).on.nth(3).be.called.with('C');
                expect(consoleSpy).on.nth(4).be.called.with('D');
            });
        });
    });
});
