# Identifying Paths - Practice Assessment

A friend of yours is an avid hiker who is a little too old for climbing cliffs,
but still loves to reach new peaks.  They're trying to find new mountains to
conquer, within their limits.  They want you to use your programming skills to
help them out.

Your friend has provided you with a series of topographic data of various areas.
The data takes this format:

```js
// Example 1
const mountain_1 = [
        [1, 0, 1, 1],
        [2, 3, 2, 1],
        [0, 2, 4, 1],
        [3, 2, 3, 1]
        ];
```

Depending on the scan, the provided matrix may be larger or smaller, but it will
always be rectangular.

The hiker is able to move from a node to any neighbor that is the same height,
one lower, or one higher.  Neighbors are considered to be nodes that are exactly
one node away.  **This includes diagonals!**

Your job is to find and return the starting point, at height 0 on the edge of
the map, that leads to the tallest peak on the map.  **Every map will only have
1 peak, and nodes of height 0 will only be found on the edge of the map**.

Mountains have the following properties:

1. There will be **exactly 1** peak with a height higher than the rest of the
   nodes.
1. There will always be **at least 1** starting point on the edge of the
   mountain with a height of 0.
1. **Only one** path will lead to the peak.
1. One path will **always** lead to the peak.

A valid path has the following properties:

1. It starts at a node with a height of 0 that is on an edge of the matrix.
1. It ends at the node with the highest height on the mountain.
1. The difference in height between two nodes on the path must be 1, 0, or -1.

In the example above, the correct starting point is `[0, 1]`.

**Important:** Your friend wants to do some exploring, so you don't need to
worry about reporting the exact path to them.  You just need to confirm the
location of the starting point!

A few examples:

```js
// Example 2
const mountain_2 = [
        [0, 2, 1, 1],
        [2, 2, 3, 1],
        [1, 1, 1, 1],
        [1, 0, 1, 1]
        ];
```

There are many valid paths to reach the peak of this mountain, but it's not
reachable from the top left corner!  `[3, 1]` is the correct starting point.


```js
// Example 3
const mountain_3 = [
        [0, 1, 2, 0],
        [5, 1, 3, 2],
        [4, 1, 2, 1],
        [3, 4, 3, 1]
        ];
```

The peak of mountain 3 can be reached.  Up and down are allowed!  But it can
only be reached from `[0, 0]`

## Instructions

1. Clone the practice assessment repository from the bottom of the page.
2. Rename the folder to `your-name-pt-12-graphs-hiking-mountains`
3. `npm install` to install any dependencies
4. Fill out code in `hiking-mountains.js`
5. Uncomment the marked code and run `node hiking-mountains.js` to run local
   test cases
6. `npm test` to run the test specs

## Submission

When you are ready to submit:

1. Delete the `node_modules` directory
2. Zip up your renamed folder
3. Upload it