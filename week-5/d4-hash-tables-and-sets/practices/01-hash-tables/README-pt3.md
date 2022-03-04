# Hash Table Practice Part 3

In this four-part exercise, you will start implementing a hash table that
handles hash collisions with linked list chaining.

## Setup

1. Continue working in the same starter as part 1 and 2
2. Run specs with `npm test test/hash-table-pt3-spec.js`

## Hash table insert with hash collisions

You will now write an insert function to handle hash collisions with linked
list chaining.

`insertWithHashCollisions(key, value)` will create a new `KeyValuePair()`
with the input key and value and store it in the data bucket location returned
by `hashMod(key)`.

If that bucket is already occupied, it will insert the new `KeyValuePair` to
the head of the linked list in the bucket.

> Hint: if you are to add to the *head* of the linked list in a hash
> table, how might that be similar to how you have done that before?

Note that the test specs inserts 3 key/value pairs into a hash table with a
capacity of 2. Linked list chaining allows the linked list to fill past
capacity at the cost of performance.

The bucket order of keys is reliant on a valid hash function from part 1.

Read the specs in `test/hash-table-pt3-spec.js` for more details.
