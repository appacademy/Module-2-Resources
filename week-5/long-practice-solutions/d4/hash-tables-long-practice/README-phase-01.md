# Basic Phase 1: Implementing a hash table

Recall the key features of a Hash Table*:

* Getting is `O(1)`
* Setting is `O(1)`
* Deleting is `O(1)`

*In the best-case scenario.

Hash tables have very efficient operations with regards to time complexity and
can be used in many cases to vastly speed up a solution.

You will be implementing your own hash table from scratch. You can choose to be
creative and come up with your own unique hash function, or take inspiration
from the reading.

Some methods will be implemented for you, but they will have bugs. Squash them
and then finish implementing the rest of the methods!

You will also code the methods for handling hash collisions and resizing
your buckets.

Install specs with `npm install`, then type `npm test` from the `problems/`
directory to run tests.

Starter code is provided for you in `problems/` directory.

**HINT**: Comment out the last test in `phase1-spec.js` until you are sure
that your functions are O(1).
