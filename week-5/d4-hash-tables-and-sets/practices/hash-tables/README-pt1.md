# Hash Table Practice Part 1

In this four-part exercise, you will start implementing a hash table that
handles hash collisions with linked list chaining.

## Setup

1. Download the starter at the bottom of this page
2. Install all packages with `npm install`
3. Run specs with `npm test test/hash-table-pt1-spec.js`

## Hash table constructor

Start by implementing the constructor for the hash table.

The hash table should count the key/value pairs stored in the table and
contain a data storage array filled with `null` values.

Run specs with `npm test test/hash-table-pt1-spec.js`

## Hash methods

In order to test your hash table predictably, you will be implementing hashing
methods.

`hash(key)` takes in a string key and returns the first 8 characters of
its sha256 hash as an integer.

Example: `hash('ABC')` will calculate the `sha256('ABC')`, then convert
the first 8 characters to the integer `3050570844`.

> Hint: The `sha256` function returns a string containing 64 hexadecimal
> characters. How can you convert the first 8 characters of that string into
> an integer?

`hashMod(key)` takes in a string key and return the hash modulo the capacity
of the data array.

Example: `hashMod('ABC')` in a hash table with 10 buckets would return
3050570844 modulo 10, or `4`.

Read the specs in `test/hash-table-pt1-spec.js` for more details.
