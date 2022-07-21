const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function printBreadthFirst(start) {
    // create a queue and enqueue the starting node
    const queue = [];
    queue.push(start)
    // create a set to store visited nodes and add the starting node
    const visited = new Set();
    visited.add(start);
    // while the queue is not empty, repeat steps 4-6
    while (queue.length) {
        //  dequeue the first node
        const node = queue.shift();
        // DO THE THING
        console.log(node);
        // for each unvisited neighbor add the neighbor to the queue
        const edges = adjList[node];
        edges.forEach(edge => {
            if (!visited.has(edge)) {
                queue.push(edge);
                visited.add(edge);
            }
        });
    }
}

console.log("First Test:")
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                    // One possible solution:  3, 2, 4, 1, 5, 6
console.log("Second Test:")
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                    // One possible solution:  6, 4, 3, 5, 2, 1
console.log("Third Test:")
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                    // One possible solution:  4, 3, 5, 6, 2, 1
