# Solving Graph Problems Practice Part 1

In this practice, you will be solving a variation of a popular, but tricky graph
problem: Find the size of an island in a binary matrix.

Like most graph problems, you will be following these three steps to solve it:

1. Identify and define the type of graph
2. Implement the `getNeighbors` function
3. Traverse the graph

In this part, you will be implementing steps 1 and 2.

## Setup

1. Clone the [starter]
2. Install all packages with `npm install`
3. Read the instructions and specs to understand the problem
4. Implement the code until tests are green

## The problem

Given a binary matrix, return the size of the island starting from the given
row and column. An island consists of 1s that are adjacent in the north,
south, west and east directions. (No diagonals.) The following example has an
island of size 7 starting from row 0 and column 0.

Note that this is **not** an adjacency matrix!.

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

**Tip:** When working with 2d arrays, always use `row` and `col`, or row and
column, to access items in the matrix.  It's backwards from what you're used to!
If you try to use `y` and `x`, you **will** get confused and reference them out
of order, as `x` and `y`.

## Step 1: Identify and define the type of graph

There is no code to this part but take time to identify and define the graph.

1. Is this graph directed or undirected?
2. Is this graph cyclic or acyclic?
3. What are the nodes and what are the edges?
4. What kind of traversal or search will you need to solve this?

## Step 2: Implement the `getNeighbors` function

In order to traverse any graph, you need to implement the `getNeighbors`
function. In this graph, the nodes are coordinates containing 1s and the
neighbors are the adjacent 1s.

`getNeighbors(row, col, matrix)` takes in a row, column and matrix and returns
coordinates of all the adjacent squares containing 1s.

```js
[[1,1,1,0,0],
 [0,1,1,0,1],
 [0,1,1,0,1]]
```

For the above matrix, `getNeighbors(1, 1, matrix)` would return `[[0, 1], [1,
2], [2, 1]]` since the neighbors of row 1, col 1 are `[0, 1]`, `[1, 0]`, `[1,
2]`, and `[2, 1]`. All of these contain 1s except for `[1, 0]` which is
excluded.

Read the specs in `test/island-specs.js` for more details.

[starter]: https://github.com/appacademy/practice-for-week-06-graph-problems-practice