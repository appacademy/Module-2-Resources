class LLNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

const node1 = new LLNode(1, null)
// console.log(node1) // LLNode { value: 1, next: null }

const node2 = new LLNode(2, node1)
// console.log(node2) // LLNode { value: 2, next: LLNode { value: 1, next: null } }

const node3 = new LLNode(3, null)
// console.log(node3) // LLNode { value: 3, next: null }
node3.next = node2
// console.log(node3)
/*
LLNode {
  value: 3,
  next: LLNode { value: 2, next: LLNode { value: 1, next: null } }
}
*/

class LinkedList {
    constructor() {
        this.head = null
    }
}

const newLL = new LinkedList()
// console.log(newLL) // LinkedList { head: null }
newLL.head = node3
console.log(newLL)
/*
LinkedList {
  head: LLNode { value: 3, next: LLNode { value: 2, next: [LLNode] } }
}
*/
