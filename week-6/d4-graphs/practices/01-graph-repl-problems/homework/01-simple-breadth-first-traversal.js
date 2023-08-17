const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function printBreadthFirst(start) { // 3
    // your code here
    const queue = [start];
    const visited = new Set([start]); // visited.add(start); {3,2,4,1,5,6}
    
    // console.log({queue})
    // console.log({visited})

    while (queue.length) {  // []
        const curr = queue.shift(); // 6
        // DO THE THING
        console.log(curr); // 3,2,4,1,5,6
        // FIND NEIGHBORS
                                        //    i
        const neighbors = adjList[curr];  // [4]
        // console.log({neighbors})
        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.add(neighbor)
                // console.log({queue})
                // console.log({visited})
            }
        });
    }
    // Optional return
}

console.log("First Test:")
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                    // One possible solution:  3, 2, 4, 1, 5, 6
// console.log("Second Test:")
// printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
//                     // One possible solution:  6, 4, 3, 5, 2, 1
// console.log("Third Test:")
// printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
//                     // One possible solution:  4, 3, 5, 6, 2, 1
