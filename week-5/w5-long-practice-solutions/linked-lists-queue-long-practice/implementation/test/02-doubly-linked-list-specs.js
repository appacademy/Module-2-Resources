const chai = require('chai');
const expect = chai.expect;

const solution = require('../02-doubly-linked-list');

let DoublyLinkedList = null;
let DoublyLinkedNode = null;

if (solution !== null) {
    ({ DoublyLinkedNode, DoublyLinkedList } = solution);
}

describe('DoublyLinkedNode Constructor', () => {
    it('Should exist', () => {
        expect(DoublyLinkedNode).to.exist;
    });

    it('Should be a function (ES6 classes are "special functions")', () => {
        expect(DoublyLinkedNode).to.be.a('function');
    });

    it('Should have "value", "prev" and "next" properties', () => {
        node = new DoublyLinkedNode('A');
        expect(node).to.have.property('value');
        expect(node).to.have.property('next');
        expect(node).to.have.property('prev');  
    });
});

describe('DoublyLinkedList Constructor', () => {
    it('Should exist', () => {
        expect(DoublyLinkedList).to.exist;
    });

    it('Should be a function (ES6 classes are "special functions")', () => {
        expect(DoublyLinkedList).to.be.a('function');
    });

    it('Should have head, tail, and length properties', () => {
        const doubleLinkedList = new DoublyLinkedList();
        expect(doubleLinkedList).to.have.property('head');
        expect(doubleLinkedList).to.have.property('tail');
        expect(doubleLinkedList).to.have.property('length');
    });

    it('Should not implement an Array to store values', () => {
        for (let property in DoublyLinkedList) {
            expect(Array.isArray(DoublyLinkedList[property])).to.equal(false);
        }
    });
});

describe('DoublyLinkedList Methods', () => {
    let list;
    beforeEach(() => list = new DoublyLinkedList());

    context('addToHead()', () => {
        it('Should set head and tail on first insert', () => {
            list.addToHead('A');

            const tailResult = list.tail.value;
            const headResult = list.head.value;

            expect(tailResult).to.equal('A');
            expect(headResult).to.equal('A');
        });

        it("Should set the next and prev values on nodes appropriately on an insert", () => {
            list.addToHead('C');
            list.addToHead('B');
            list.addToHead('A');

            const head = list.head;
            const middle = list.head.next;
            const tail = list.tail;

            expect(tail.prev.value).to.equal('B');
            expect(head.next.value).to.equal('B');

            expect(middle.next.value).to.equal('C');
            expect(middle.prev.value).to.equal('A');

            expect(tail.next).to.equal(null);
            expect(head.prev).to.equal(null);
        });

        it('Should increase the size with each insert', () => {
            expect(list.length).to.equal(0);
            list.addToHead('A');
            expect(list.length).to.equal(1);
            list.addToHead('B');
            expect(list.length).to.equal(2);
            list.addToHead('C');
            expect(list.length).to.equal(3);
        });
    });

    context('peekAtHead()', () => {
        it('Should return undefined for an empty list', () => {
            const result = list.peekAtHead();
            expect(result).to.be.undefined;
        });

        it("Should return the value of the head for a non-empty list", () => {
            list.addToHead('A');
            expect(list.peekAtHead()).to.equal('A');

            list.addToHead('B');
            expect(list.peekAtHead()).to.equal('B');
        });
    });

    context('removeFromHead()', () => {
        it('Should return undefined for an empty list', () => {
            const result = list.removeFromHead();

            expect(result).to.be.undefined;
        });

        it('Should remove the head node from the list and return the node\'s value', () => {
            list.addToHead('C');
            list.addToHead('B');
            list.addToHead('A');

            expect(list.removeFromHead()).to.equal('A');
            expect(list.head.value).to.equal('B');

            expect(list.removeFromHead()).to.equal('B');
            expect(list.head.value).to.equal('C');

            expect(list.removeFromHead()).to.equal('C');
            expect(list.head).to.equal(null);
        });

        it("Should update the length for a non-empty list", () => {
            list.addToHead('B');
            list.addToHead('A');
            expect(list.length).to.equal(2);
            list.removeFromHead();
            expect(list.length).to.equal(1);
            list.removeFromHead();
            expect(list.length).to.equal(0);
            list.removeFromHead();
            expect(list.length).to.equal(0);
        });

        it('Should set the prev pointer on the new head to be null', () => {
            list.addToHead('C');
            list.addToHead('B');
            list.addToHead('A');

            list.removeFromHead();
            expect(list.head.prev).to.equal(null);
        });
    });

    context('addToTail()', () => {
        it('Should set the list head and tail if the list was empty', () => {
            list.addToTail('A');

            const tailResult = list.tail.value;
            const headResult = list.head.value;

            expect(tailResult).to.equal('A');
            expect(headResult).to.equal('A');
        });

        it("Should set the next and prev values on nodes appropriately", () => {
            list.addToTail('A');
            list.addToTail('B');
            list.addToTail('C');

            const tail = list.tail;
            const middle = list.tail.prev;
            const head = list.head;

            expect(head.next.value).to.equal('B');
            expect(tail.prev.value).to.equal('B');

            expect(middle.next.value).to.equal('C');
            expect(middle.prev.value).to.equal('A');

            expect(tail.next).to.equal(null);
            expect(head.prev).to.equal(null);
        });

        it('Should increase the size with each insert', () => {
            expect(list.length).to.equal(0);
            list.addToTail('A');
            expect(list.length).to.equal(1);
            list.addToTail('B');
            expect(list.length).to.equal(2);
            list.addToTail('C');
            expect(list.length).to.equal(3);
        });
    });

    context('peekAtTail()', () => {
        it('Should return undefined for an empty list', () => {
            const result = list.peekAtTail();
            expect(result).to.be.undefined;
        });

        it("Should return the value of the tail node for non-empty lists", () => {
            list.addToTail('B');
            expect(list.peekAtTail()).to.equal('B');

            list.addToTail('C');
            expect(list.peekAtTail()).to.equal('C');

            list.addToHead('A')
            expect(list.peekAtTail()).to.equal('C');
        });
    });
    
    context('removeFromTail()', () => {
        it('Should return undefined for an empty list', () => {
            const result = list.removeFromTail();

            expect(result).to.be.undefined;
        });

        it('Should remove the tail node from the list and return the node\'s value', () => {
            list.addToTail('C');
            list.addToTail('B');
            list.addToTail('A');

            expect(list.removeFromTail()).to.equal('A');
            expect(list.tail.value).to.equal('B');

            expect(list.removeFromTail()).to.equal('B');
            expect(list.tail.value).to.equal('C');

            expect(list.removeFromTail()).to.equal('C');
            expect(list.tail).to.equal(null);
        });

        it("Should update the length for a non-empty list", () => {
            list.addToHead('B');
            list.addToHead('A');
            expect(list.length).to.equal(2);
            list.removeFromTail();
            expect(list.length).to.equal(1);
            list.removeFromTail();
            expect(list.length).to.equal(0);
            list.removeFromTail();
            expect(list.length).to.equal(0);
        });

        it('Should set the next pointer on the new tail to be null', () => {
            list.addToTail('C');
            list.addToTail('B');
            list.addToTail('A');

            list.removeFromTail();
            expect(list.tail.next).to.equal(null);
        });
    });
});
