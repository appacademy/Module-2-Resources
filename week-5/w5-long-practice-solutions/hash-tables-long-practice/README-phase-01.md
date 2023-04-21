# Basic Phase 1: Implementing a hash table

Recall the key features of a Hash Table in the best case scenario:

* Reading/Getting is **constant**
* Inserting/Setting is **constant**
* Deleting/Removing is **constant**

Hash tables have very efficient operations with regards to time complexity and
can be used in many situations to increase the performance of how a problem is
solved.

You will be implementing your own hash table in the
__phases/01-implementation.js__ file, but the `hash()` and `hashMod()`methods
have been completed for you. Use the README and the spec files together
to implement each method. Refer to homework for additional support.

Run `npm test test/01-implementation-spec.js` to run specs for phase 1.

## Phase 1A: `constructor()`

The constructor already has a parameter, `numBuckets`, though it must also
have the following properties:

- `capacity`: the amount of buckets in the hash table.
- `data`: an `Array` scaling to the `capacity`.
- `count`: the amount of stored items in our hash table.

## Phase 1B: `insert()`

The hash table `insert()` must be able to handle the following scenarios:

- Add a `KeyValuePair` to its table of `data`.
- Handle collisions with linked lists if different keys and `hashMod()`
outputs arrive at the same bucket index.
- Handle already inserted `KeyValuePair` value updates. If the same key is
inserted but the value is different, the old value must be replaced with the
new value.

## Phase 1C: `read()`

The `read()` method must be able to handle the following scenarios:

- Return the value of a `KeyValuePair` associated with the key passed in as an
argument.
- The method must be able to find keys that were previously handled with linked
lists due to collisions.
- Return `undefined` if it cannot find the passed in key.

## Phase 1D: `resize()`

First we must create our `resize()` method, later we will optimize our hash
table by dynamically calling our method.

Recall the initial setup of the `HashTable`'s `constructor` and what properties
we defined. We want to change our `HashTable` properties to reflect that we are
reallocating more space for future `insert()` calls. `

1. `data`'s elements must be preserved in a copy for redistribution.
2. `capacity` should now be double its previous value.
3. `data` should now be a new `Array` scaling to the new `capacity`.
4. Redistribute all of the elements in your copy of `data` back into the
`HashTable` while making sure to check for any nodes nested in linked lists.

Make sure _not_ to use `Array` methods like `spread` and `concat` when
redistributing. Revisit the hash table homework if looking for a refresher as
to why.

## Phase 1E: Calling `resize()` to improve `HashTable` performance

The `HashTable` still requires refactoring to dynamically utilize its new
ability to `resize`. Revisit homework if there is confusion about how to
approach any of these steps.

1. Determine where to call `resize()` so that it can run dynamically.
2. Determine how to use the **load factor** to call your `resize()` method.
    - For this practice use a **load factor** value of `0.7`.
3. Refactor your code taking the above into account.
4. Test your `HashTable` running the specs.

Once you pass the benchmarking spec, notice the difference in timings between
your version with utilizing `resize()` and without. Now we are seeing why the
ability to `resize` is incredibly important to how hash tables work! Without
this, a hash table would quickly become inefficient and unusable.

## Phase 1F: `delete()`

The `delete()` method should be able to handle the following scenarios:

-   Remove a `KeyValuePair` from the `HashTable` `data`. Note that this must be
able to find pairs that were collisions and reconnect pairs removed in the
middle of linked list chains.
-   Return a `string` if the key argument is not found (see specs for details).

Consider that _disconnecting_ nodes from one another is technically similar to
_connecting_ them; it entails re-assigning pointers. Using your previously
written `insert()` code as pseudocode may be useful how to implement `delete()`.
