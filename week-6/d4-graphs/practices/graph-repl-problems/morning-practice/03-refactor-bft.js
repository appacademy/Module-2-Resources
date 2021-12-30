/*
The output of your printBreadthFirst function is a bit messy.
Copy it here, and refactor it so that instead of printing each node on a newline,
the function adds each node to an array, then prints that array at the end.
*/

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4],
};

function printBreadthFirst(start) {
    const queue = [];
    const visited = new Set();

    queue.push(start);

    const nodes = [];

    while (queue.length) {
        const currentNode = queue.shift();

        if (!visited.has(currentNode)) {
            visited.add(currentNode);

            nodes.push(currentNode);

            adjList[currentNode].forEach((neighbor) => {
                queue.push(neighbor);
            });
        }
    }

    console.log({ nodes });
}

console.log('First Test:');
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
// One possible solution:  [ 3, 2, 4, 1, 5, 6 ]
console.log('Second Test:');
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
// One possible solution:  [ 6, 4, 3, 5, 2, 1 ]
console.log('Third Test:');
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
// One possible solution:  [ 4, 3, 5, 6, 2, 1 ]
