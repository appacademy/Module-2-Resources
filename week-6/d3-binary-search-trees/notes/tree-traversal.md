## Breadth-first traversal:

Breadth first traversal works by traveling as deep as possible down each branch
of a tree before moving to the next. 

Breadth-first traversal cannot be implemented using recursion. It is best implemented using a queue:

Put the starting node in a queue
While the queue is not empty, repeat steps 3-4
Dequeue a node and print it
Put all of the node's children in the back of the queue

```js
function breadthFirstTraversal(root) {

    // Put the starting node in a queue
    const queue = new Queue();
    queue.enqueue(root);

    // While the queue is not empty
    while (queue.size > 0) {

        // Dequeue a node and print it
        let node = queue.dequeue();
        console.log(node.value);

        // Put all of the node's children in the back of the queue
        queue.enqueue(node.left);
        queue.enqueue(node.right);
    }
}
```

## Depth first traversal:

Depth first traversal works very similar to breadth first, but we use a stack instead (think about FIFO vs LIFO):

Put the starting node on a STACK
While the STACK is not empty, repeat steps 3-4
POP a node and print it
Put all of the node's children on the TOP of the STACK

```js
function depthFirstTraversal(root) {

    // Put the starting node on a stack
    const stack = [];
    stack.push(root);

    // While the stack is not empty
    while (stack.length > 0) {

        // Pop a node and print it
        let node = stack.pop();
        console.log(node.value);

        // Put all of the node's children on the top of the stack
        stack.push(node.right);
        stack.push(node.left);
    }
}
```