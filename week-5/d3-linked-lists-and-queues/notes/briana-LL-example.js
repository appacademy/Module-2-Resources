class LinkedListNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}


const node1 = new LinkedListNode(1, null)
// console.log(node1) // LinkedListNode { value: 1, next: null }

const node2 = new LinkedListNode(2, node1)
// console.log(node2)
/*
LinkedListNode {
  value: 2,
  next: LinkedListNode { value: 1, next: null }
}
*/

const node3 = new LinkedListNode(3, null)
// console.log(node3) // LinkedListNode { value: 3, next: null }
node3.next = node2
// console.log(node3)
/*
LinkedListNode {
  value: 3,
  next: LinkedListNode {
    value: 2,
    next: LinkedListNode { value: 1, next: null }
  }
}
*/


// making class to keep track of entire list
class LinkedList {
    constructor() {
        this.head = null
    }
}

const ll = new LinkedList()
// console.log(ll)
// LinkedList { head: null }

ll.head = node3
console.log(ll)

/*
LinkedList {
  head: LinkedListNode {
    value: 3,
    next: LinkedListNode { value: 2, next: [LinkedListNode] }
  }
}
*/
