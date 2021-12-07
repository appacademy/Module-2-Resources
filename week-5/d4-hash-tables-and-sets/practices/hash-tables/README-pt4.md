# Hash Table Practice Part 4

In this four-part exercise, you will start implementing a hash table that
handles hash collisions with linked list chaining.

## Setup

1. Continue working in the same starter as part 1, 2 and 3
2. Run specs with `npm test test/hash-table-pt4-spec.js`

## Part 4: Hash table insert with hash and key collisions

Finally, you will write a *complete* insert function. It will handle hash
collisions with linked list chaining as in part 3, AND, if the same key is
inserted, but with a different value, the old value is overwritten by the new
value. This functionality will enable us to "update" values that share
the same key in a `KeyValuePair`. Note this is not the same as a hash
collision!

`insert(key, value)` will create a new `KeyValuePair()` with the input key and
value and store it in the data bucket location returned by hashMod(key)`.

If that bucket is already occupied, it will insert the new `KeyValuePair` to
the head of the linked list in the bucket.

If the new `KeyValuePair` contains the same `key` as a pair already in the hash
table, the method will overwrite the old `value` with the one from the newly
inserted pair.

Note that the test specs successfully inserts 3 key/value pairs into a hash
table with a capacity of 2. Linked list chaining allows the linked list to
fill past capacity at the cost of performance.

The bucket order of keys is reliant on a valid hash function from part 1.

Read the specs in `test/hash-table-pt4-spec.js` for more details.
