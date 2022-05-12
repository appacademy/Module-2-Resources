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
            list.addToHead('A');
            list.addToHead('B');
            list.addToHead('C');

            const head = list.head;
            const tail = list.tail;
            const middle = list.head.next;

            expect(tail.prev.value).to.equal('B');
            expect(head.next.value).to.equal('B');

            expect(middle.next.value).to.equal('A');
            expect(middle.prev.value).to.equal('C');

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

        it("Should update the length for a non-empty list", () => {
            list.addToHead('C');
            list.addToHead('B');
            list.addToHead('A');
            expect(list.length).to.eql(3);
            list.removeFromHead();
            expect(list.length).to.eql(2);
            list.removeFromHead();
            expect(list.length).to.eql(1);
            list.removeFromHead();
            expect(list.length).to.eql(0);
        });

        it('Should remove and return the value from the head', () => {
            list.addToHead('C');
            list.addToHead('B');
            list.addToHead('A');

            expect(list.removeFromHead()).to.eql('A');
            expect(list.head.value).to.eql('B');

            expect(list.removeFromHead()).to.eql('B');
            expect(list.head.value).to.eql('C');

            expect(list.removeFromHead()).to.eql('C');
            expect(list.head).to.eql(null);
        });

        it('Should set the prev pointer on the new head to be null', () => {
            list.addToHead('C');
            list.addToHead('B');
            list.addToHead('A');

            list.removeFromHead();
            expect(list.head.prev).to.eql(null);
        });
    });

    context('addToTail()', () => {
        it('Should set head and tail on first insert', () => {
            list.addToTail('A');

            const tailResult = list.tail.value;
            const headResult = list.head.value;

            expect(tailResult).to.equal('A');
            expect(headResult).to.equal('A');
        });

        it("Should set the next and prev values on nodes appropriately on an insert", () => {
            list.addToTail('A');
            list.addToTail('B');
            list.addToTail('C');

            const tail = list.tail;
            const head = list.head;
            const middle = list.tail.prev;

            expect(tail.prev.value).to.equal('B');
            expect(head.next.value).to.equal('B');

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

        it("Should return the value of the tail for a non-empty list", () => {
            list.addToTail('A');
            expect(list.peekAtTail()).to.equal('A');

            list.addToTail('B');
            expect(list.peekAtTail()).to.equal('B');
        });
    });
    
    context('removeFromTail()', () => {
        it('Should return undefined for an empty list', () => {
            const result = list.removeFromTail();

            expect(result).to.be.undefined;
        });

        it("Should update the length for a non-empty list", () => {
            list.addToHead('C');
            list.addToHead('B');
            list.addToHead('A');
            expect(list.length).to.eql(3);
            list.removeFromTail();
            expect(list.length).to.eql(2);
            list.removeFromTail();
            expect(list.length).to.eql(1);
            list.removeFromTail();
            expect(list.length).to.eql(0);
        });

        it('Should remove and return the value from the tail', () => {
            list.addToTail('C');
            list.addToTail('B');
            list.addToTail('A');

            expect(list.removeFromTail()).to.eql('A');
            expect(list.tail.value).to.eql('B');

            expect(list.removeFromTail()).to.eql('B');
            expect(list.tail.value).to.eql('C');

            expect(list.removeFromTail()).to.eql('C');
            expect(list.tail).to.eql(null);
        });

        it('Should set the next pointer on the new tail to be null', () => {
            list.addToTail('C');
            list.addToTail('B');
            list.addToTail('A');

            list.removeFromHead();
            expect(list.tail.next).to.eql(null);
        });
    });
});
