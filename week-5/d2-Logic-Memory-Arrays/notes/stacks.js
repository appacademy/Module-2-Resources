/*
Stacks  represent a linear collection of nodes or values. 


Stacks: LIFO(Last In, First Out) data structures.
    -the last Node added is always the first Node to be removed
    -the first Node added is always the last Node to be removed

**It is helpful to visualize a stack as a vertical stack of items.
    -we add to the top of the stack. We remove from the top of the stack.


Stacks and Queues are so similar that we can look at both of their properties together:

Stack Property	        Description	                    
top	                The first node in the Stack	        
----	            Stacks do not have an equivalent	

length	            The number of nodes in the Stack;   
                    the Stack's length.	                	                       
                                                                                


Each node in the stack has these properties:

Property	Description
value	    The actual value this node represents.
next	    The next node in the Stack (relative to this node).


Stack Methods:
Type	        Name	Description	                                Returns
Insertion	    push	Adds a Node to the top of the Stack.	    Integer - New size of stack
Deletion	    pop	    Removes a Node from the top of the Stack.	Node removed from top of Stack
Meta	        size	Returns the current size of the Stack.	    Integer



*/

// class _Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

//We will be implementing stacks as arrays

class Stack {
  constructor() {
    this.store = new Array();
  }
  size() {
    //return the length of the stack
    return this.store.length;
  }

  push(ele) {
    //this will add element to end of stack
    this.store.push(ele);
    return true;
  }

  pop() {
    //remove the last element
    return this.store.pop();
  }

  peek() {
    //return the last element
    return this.store[this.store.length - 1];
  }
}
