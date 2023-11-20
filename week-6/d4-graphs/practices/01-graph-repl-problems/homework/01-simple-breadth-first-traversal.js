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

    // start queue
    const queue = [start]

    // set, to keep track of nodes already visited OR about to be visited
    const visited = new Set()
    // add start node to set
    visited.add(start)

    // while there are things in the queue
    while (queue.length) {

        // remove from front of queue
        const curr = queue.shift()

        // DO THE THING, optional return
        console.log(curr)

        // find the neighbors of current node
        const neighbors = adjList[curr] // should be an array
        // console.log(neighbors)

        neighbors.forEach(neighbor => {
            // if any neighbor hasn't been visited or "queued up"
            if (!visited.has(neighbor)) {
                // add that neighbor to queue
                queue.push(neighbor)
                // add neighbor to set
                visited.add(neighbor)
            }

        })

        // console.log(visited, " <=== set")
        // console.log(queue, "  <=== queue \n\n")

    }

    // optional return

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
