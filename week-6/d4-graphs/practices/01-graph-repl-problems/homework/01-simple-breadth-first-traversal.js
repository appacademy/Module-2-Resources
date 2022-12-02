const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function printBreadthFirst(start) {
    // Create a queue and enqueue the starting node
    const queue = [start];
    // queue.push(start)
    // Create a set to store visited nodes
    const visited = new Set()
    visited.add(start)
    // While the queue is not empty, repeat steps 4-6
    while (queue.length) {
        // Dequeue the first node
        const curr = queue.shift();
        // DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
        console.log(curr);
        // For each unvisited neighbor, add it to the visited nodes and to the back of the queue
        const neighbors = adjList[curr];

        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.add(neighbor);
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
