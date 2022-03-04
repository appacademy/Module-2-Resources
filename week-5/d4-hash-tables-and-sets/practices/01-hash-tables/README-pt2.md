# Hash Table Practice Part 2

In this four-part exercise, you will start implementing a hash table that
handles hash collisions with linked list chaining.

## Setup

1. Continue working in the same starter as part 1
2. Run specs with `npm test test/hash-table-pt2-spec.js`

## Hash table insert

Next, you will use your hash function from part 1 to store a key/value pair in
your hash table. This implementation will not handle hash collisions but focus
on insertion at the bucket location.

`insertNoCollisions(key, value)` will create a new `KeyValuePair()` with
the input key and value and store it in the data bucket location returned by
`hashMod(key)`.

If a `KeyValuePair()` is inserted at a location that is already occupied your
method should throw an `Error` with an appropriate error message.

Read the specs in `test/hash-table-pt2-spec.js` for more details.
