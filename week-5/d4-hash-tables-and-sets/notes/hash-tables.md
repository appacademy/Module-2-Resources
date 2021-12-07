# Hash Tables

Hash tables are all around you. You've actually been using them all along. JavaScript Arrays are
actually hash tables under the hood. That is why they are able to take in multiple types of data in
one array.

- Hash tables store indexed key/value pairs.
- Hash tables utilize a hashing function to generate an integer index to store your data.
- A hashing function will convert keys to integers. It will take a set of _deterministic_ steps and return a scrambled output.
- It will _always_ return the same output when given the same input.

The next step is to use that hashing function, and then utilize the % (modulo) operation to return an integer that can be used as an index to store the key/value pair.

**Example hashing function** _(very insecure...don't use)_:

```javascript

function simpleHash(str) {
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i);
  }

  return hashValue;
}

```
Each key/value pair is then stored at that index.

## Hash Collisions

A _hash collision_ is when the same index is returned by hashing (which can and does happen).

**Several ways to handle hash collisions:**

1. Resize the array
  - This can avoid the collision, but you still have a good chance that you will again hit another collision in the future
2. Institute a linked list chaining pattern
  - Utilize the `next` property on the `KeyValuePair` node, and chain multiple pairs together at the same index
    - This works to alleviate the problems with collisions, but you then have the problem that adding more key/value pairs increases your BigO time complexity

**Note:** If you return the same index by hashing, and subsequently have the same key in your key/value pairs, you will need to _override_ the existing value. You should only have unique keys in the 'list' at a certain index.

## Example implementation of a hash table

First the `KeyValuePair` Node class:

```javascript

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

```

Then the HashTable class:
**You will work on completing this table in your project**

```javascript

class HashTable {
  // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.data.length;
  }

  read(key) {}

  insert(key, value) {}

  resize() {}

  delete(key) {}
}

```
