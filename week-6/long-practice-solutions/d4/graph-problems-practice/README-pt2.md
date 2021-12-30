# Solving Graph Problems Practice Part 2

In this practice, you will finish the island counting problem by using the
`getNeighbors` function from part 1 to count islands.

Like most graph problems, you will be following these three steps to solve it:

1. Identify and define the type of graph
2. Implement the `getNeighbors` function
3. Traverse the graph

You have completed steps 1 and 2 in part 1. In this part, you will finish step 3.

## Setup

1. Clone the [starter]
2. Install all packages with `npm install`
3. Read the instructions and specs to understand the problem
4. Implement the code until tests are green

## The problem (recall)

Given a binary matrix, return the size of the island starting from the given
row and column. An island consists of 1s that are adjacent in the north,
south, west and east directions. (No diagonals.) The following example has an
island of size 7 starting from row 0 and column 0.

```js
matrix = [
    [1,1,1,0,0],
    [0,1,1,0,1],
    [0,1,1,0,1],
]

islandSize(0, 0, matrix);  // 7
islandSize(2, 4, matrix);  // 2
```

`islandSize(row, col, matrix)` takes in three arguments: a row, column and a
binary matrix. It will return the size of the island consisting of adjacent 1s
starting from the row and column.

## Step 3: Traverse the graph

Now that you have the getNeighbors function, you can visit each 1 in the
island to get an accurate count with a graph traversal. Order doesn't matter
so you can choose either a depth or breadth first traversal.

Pseudocode for a depth-first traversal is included in the starter file.

`islandSize(row, col, matrix)` takes in three arguments: a row, column and a
binary matrix. It will return the size of the island consisting of adjacent 1s
starting from the row and column.

**hint** it may help to _stringify_ coordinates before adding them to the
visited set.


[starter]: https://github.com/appacademy/practice-for-week-06-graph-problems-practice