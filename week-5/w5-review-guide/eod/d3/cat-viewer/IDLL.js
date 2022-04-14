// Double Linked List Node (with next and prev pointers)
class DLLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

// ImageDoubleLinkedList Class 
// Values will be image file URLs!
class IDLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        let newNode = new DLLNode(val);

        if (this.length) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    addToTail(val) {        
        let newNode = new DLLNode(val);
        if (this.length) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    removeFromHead() {
        if (!this.head) return;

        const oldHead = this.head;
        this.head = oldHead.next;
        if (this.head) this.head.prev = null;
        this.length--;
        return oldHead.value;

    }

    removeFromTail() { 
       if (!this.tail) return;

       const oldTail = this.tail;
       this.tail = oldTail.prev;
       if(this.tail) this.tail.next = null;
       return oldTail.value;
    }

    
    peekAtHead() { 
        if (!this.head) return;
        return this.head;
    }

    peekAtTail() { 
        if (!this.tail) return;
        return this.tail.value;
    }
}


// Scary syntax we have not learned yet, please ignore for now
export default IDLL;
