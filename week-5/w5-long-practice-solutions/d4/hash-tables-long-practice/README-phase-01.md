# Basic Phase 1: Implementing a hash table

Recall the key features of a Hash Table*:

* Reading/Getting is `O(1)`
* Inserting/Setting is `O(1)`
* Deleting/Removing is `O(1)`

*In the best-case scenario.

Hash tables have very efficient operations with regards to time complexity and
can be used in many cases to vastly speed up a solution.

You will be implementing your own hash table but the `hash()` and `hashMod()`
methods have been completed for you. Use the README and the spec files together
to implement each method.

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
- Handle already inserted `KeyValuePair` value updates. If the same key
    is inserted but the value is different, the old value must be replaced with
    the new value.

## Phase 1C: `read()`

The `read()` method be able to handle the following scenarios:

- Return the value of a `KeyValuePair` associated with the key passed in as an argument.
- The method must be able to find keys that were previously handled with linked
lists due to collisions.
- Return `undefined` if it cannot find the passed in key.

## Phase 1D: `resize()`

The ability for a hash table `resize` is incredibly important. Recall, the
`hashMod()` process scales according to the hash table's `capacity`. The index
it outputs has a wider range if there are more buckets. The more `capacity`, the
more buckets, the lower chance of future hash table collisions. Less collisions
leads to less time iterating over linked lists which brings us closer to those
`O(1)` time complexity performances (see the above intro)!

First we must create our `resize` method, then we will optimize our hash table
by calling our method.

Recall the initial setup of the `HashTable`'s `constructor` and what properties
we defined. We want to change our `HashTable` properties to reflect that we are
reallocating more space for future `insert()` calls. `

1. `data`'s elements must be copied for redistribution.
2. `capacity` should now be double its previous value.
3. `data` should now be a new `Array` scaling to the new `capacity`.
4. Redistribute all of the elements in your copy of `data` back into the
`HashTable`. But how?

Consider how these elements were initially inserted. Their original indexes
were chosen based off of the `hash` and `hashMod` process. That means the index
output may be different if the number of buckets in our `HashTable` changes.
(Look at those methods again to remind yourself why).

**Therefore we cannot simply use Array methods, like spread and concat, to
redestribute the old elements into the new `data` array.** The indexes will
not match up! Remember, the `read()` method uses the same `hash` and `hashMod`
process to access the same way the `insert()` method uses them to find indexes
to set new values in the `HashTable`.

Where have we used the logic to handle setting `KeyValuePair`s before?

The `insert()` method! We can reuse our `insert()` method to redistribute our
copy of old data into the `data` with more buckets. Each call of `insert()`
will re-calculate an index (possibly new) for each `KeyValuePair`. Our step
**4** should instead be:

4. Redistribute all of the elements in your copy of `data` back into the
`HashTable` by calling `insert()` on each `KeyValuePair`.
5. Since we re-used our `insert()`, do we have to change anything else on the
`HashTable`? Check your specs and potential error messages to figure out what
that could be.

These steps will not only increase the size of our `HashTable` to decrease the
chance of *future* collisions, but also (possibly) redistribute *old*
collisions as well. Thereby increasing the performance of future calls of our
`read()` and `insert()` methods.

## Phase 1E: Calling `resize()` to improve `HashTable` performance

Calling `resize()` will now successfully increase our `capacity` and
redistribute our `KeyValuePairs` in our now larger table of `data`. However,
the `HashTable` still requires refactoring to utilize its ability to
dynamically resize.

When would we want to call `resize()`? This depends on our `load factor`. The
`load factor` is a ratio of the hash table's total space to the number of items
currently in the hash table. If there are a lot of `KeyValuePairs` in the hash
table relative to the size of the hash table the `load factor` will be higher,
and vice versa. The threshold recommended for this practice is `0.7`.

Where would want to call `resize()`? Hint: When does the `HashTable` get new
inputs?

Notice, our goal is not to call `resize()` every single time we add more inputs
to the `HashTable`. If we did, we would not have the `O(1)` time complexity for
"setting". If we use the concept of the `load factor` we can call `resize()`
only when we need to.

Once you pass the benchmarking spec, notice the difference in timings between
your version with utilizing `resize()` and without. Now we are seeing why the
ability to `resize` is incredibly important to how hash tables work!


## Phase 1E: `delete()`

The `delete()` method should be able to handle the following scenarios:

-   Remove a `KeyValuePair` from the `HashTable` `data`. Note that this must be
able to find pairs that were collisions and reconnect pairs removed in the
middle of linked list chains.
-   Return a `string` if the key argument is not found (see specs for details).
