/*
Write a function called breadthFirstSearch that takes two nodes as arguments and
will traverse the given graph breadth-first,
printing out true if there is a path from the first node to the second,
and false if there is not.
*/

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: [],
};

function breadthFirstSearch(start, end) {
    const queue = [start];
    const visited = new Set().add(start);

    while (queue.length) {
        console.log({ queue });
        const currentNode = queue.shift();
        console.log({ currentNode });
        if (currentNode === end) return true;

        adjList[currentNode].forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        });
    }

    return false;
}

console.log('First Test:');
console.log(breadthFirstSearch(1, 3)); // -> true
console.log('Second Test:');
console.log(breadthFirstSearch(4, 1)); // -> true
console.log('Third Test:');
console.log(breadthFirstSearch(6, 1)); // -> false
