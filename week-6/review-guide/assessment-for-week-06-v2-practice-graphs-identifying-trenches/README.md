# Identifying trenches

You have been assigned to work with an undersea explorer who is attempting to
identify and map undersea trenches.  The explorer has provided you with several
data sets of sonar readings in this format:

```js
// Example 1
sonar = [
        [-5,-5,-5,-5,-5],
        [-5,-8,-8,-9,-7],
        [-5,-5,-5,-5,-8],
        [-5,-5,-5,-5,-5]
        ]
```

Depending on the scan, the provided matrix may be larger or smaller, but it will
always be rectangular.  Your task is to determine if a given data set contains a
trench by comparing each node and their neighbors and determining if there is a
pattern that matches the defined properties of a trench.

Nodes neighbors are considered to be nodes that are directly above, below, or to
the side.  **No diagonals**!

A trench has the following properties:

1. There are a **minimum** of three nodes that are neighbors and follow the
   rules.
1. Each node in the trench must be deeper than -5.
1. Each node in the trench must have **one** or **two** neighbors deeper than
   -5.
1. Each node must **not** have more than **two** neighbors deeper than -5.
1. Trenches may not branch into a "Y" shape.

This problem literally has edge cases!  After discussing the matter with the
explorer, you have agreed that potential trenches that otherwise meet the rules
as a trench are valid, even if part of it is on the edge of the data set, and it
can't be fully determined if those nodes follow the rules.

A few examples:

```js
// Example 1
sonar_1 = [
          [-5,-5,-5,-5,-5],
          [-5,-8,-8,-9,-7],
          [-5,-5,-5,-5,-8],
          [-5,-5,-5,-5,-5]
          ]
```

Example 1 is a trench.  The nodes containing -8, -8, -9, -7, -8 meet the rules.
This is an edge case trench, because the nodes containing -7 and -8 are on the
edge of the data set.

```js
// Example 2
sonar_2 = [
          [-5,-5,-5,-7,-5],
          [-5,-8,-8,-9,-5],
          [-5,-5,-5,-7,-5],
          [-5,-5,-5,-5,-5]
          ]
```

Example 2 is not a trench.  The node containing -9 has three neighbors with a
depth below -5. This would create a "Y" shaped trench, which is not valid.


```js
// Example 3
sonar_3 = [
          [-5,-5,-5,-5,-5],
          [-5,-5,-5,-5,-5],
          [-5,-9,-9,-5,-5],
          [-5,-5,-5,-5,-5]
          ]
```

Example 3 is not a trench.  There are two nodes that are next to one another and
are deeper than -5, but a trench must have at least 3 to be a trench.

## Instructions

1. Clone the assessment repository from the [starter].
2. `npm install` to install any dependencies
3. Fill out code in `identifying_trenches.js`
4. Uncomment the marked code and run `node identifying_trenches.js` to run local
   test cases
5. `npm test` to run the test specs

## Submission

When you are ready to submit:

1. Delete the `node_modules` directory
2. Zip up your folder
3. Upload it

[starter]: https://github.com/appacademy/assessment-for-week-06-v2-practice-graphs-identifying-trenches