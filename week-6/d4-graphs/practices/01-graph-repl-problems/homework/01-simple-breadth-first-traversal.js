const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function printBreadthFirst(start) {
    // your code here
    // queue - keep track of nodes that we may visit
    const queue = [start]               // [3]
    // set - track nodes we've already visited
    const visited = new Set([start])    // { 3 }
    //              new Set() => visited.add(start)

    // while loop
    while (queue.length) {
        // console.log({queue})
        // console.log({visited})
        // take out first node
        const curr = queue.shift()     // 3
        // console.log(curr)

        // DO THE THING
        console.log(curr)
        // console.log("")

        // get other neighbors
        const neighbors = adjList[curr]  // [2, 4]

        // add neighbors to queue
        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor)) {
                queue.push(neighbor)
                visited.add(neighbor)
            }
        })

        // queue => [2, 4]   visited => {3, 2, 4}
    }

    // optional return
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
