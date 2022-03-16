# Hash Table Optimization

We previously explored that hash tables can be highly performant but hash
collisions can slow them down. Recall the _best-case scenario_ time complexity
for different operations in a hash table:

* Reading/Getting is **constant**
* Inserting/Setting is **constant**
* Deleting/Removing is **constant**

This reading explores how the ability for a hash table to `resize` is
incredibly important. It is with resizing that hash tables can maintain these
time complexities even as collisions occur.

## `Resize`

Recall, the `hashMod()` process scales according to the hash table's `capacity`.
The index it outputs has a wider range if there are more buckets. The more
`capacity`, the more buckets, the lower chance of future hash table collisions.
Fewer collisions leads to less potential time iterating over linked lists which
brings us closer to those **constant** time complexity performances.

```js
class HashTable {
  constructor(numBuckets) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    // Code for a deterministic hashing algorithm goes here
    return hashValue;
  }
  hashMod(key) {
    // Code below will always return an index from 0 through to data.length - 1
    return this.hash(key) % this.capacity;
  }
}
```

To `resize` our hash table, we want to double the `capacity` which in turn
increases the number of buckets in our `data`. However, we cannot simply use
Array methods, like spread and concat, to redestribute the old elements into
the new `data` array. The indexes will not match up! Remember, the `read`
method uses the same `hash` and `hashMod` process to access the same way the
`insert` method uses them to find indexes to set new values in the hash table.

The question remains, how to re-set the previous elements back in to the larger
`data`?

The `insert` method! We can reuse the `insert` method to redistribute our copy
of old data into the `data` with more buckets. Each call of `insert` will
re-calculate an index (sometimes being a new one) for each element. Thus
preserving the functionality of the other methods.

However, some of the buckets in the hash table may contain linked list chaining
due to previous collisions. So when calling `insert` to redistribute elements
there must be checks for any nodes nested in linked lists in that bucket.

Taking all the above into consideration, the psuedocode for a hash table
`resize` method may look like this:

```js
class HashTable {
  // properties and methods in the rest of the class...

  resize() {
    // hash table property changes should occur first:
      // copy data to preserve old elements
      // reassign capacity to double its previous value
      // re-instantiate data to an array with its new size filled with null
      // reset count (calling insert will re-increment count)

    // iterate over old data
      // iterate over each element in old data, looking for nested nodes
        // insert every node back into our new data buckets
  }
}
```

## Calling `resize()` to improve `HashTable` performance

Calling `resize()` will successfully increase our `capacity` and redistribute
our elements in our now larger table of `data`. However, the `HashTable` still
requires refactoring to utilize its ability to dynamically resize.

When would we want to call `resize()`?

This depends on our **load factor**. The **load factor** is a ratio of the
hash table's total bucket space to the number of items currently in the hash
table (i.e., count / size ). If there are a lot of elements in the hash table
relative to the size of the hash table the **load factor** will be higher, and
vice versa.

Where would want to call `resize()`?

The best place to check our load factor would be right before inserting new
elements. So every time the hash table performs a setting action, check if the
**load factor** passes the threshold for warranting a `resize`.

Notice, our goal is _not_ to call `resize()` every single time we add more
inputs to the `HashTable`. If we did, we would not have the **constant** time
complexity for "setting". The `resize()` method is expensive and should only be
called when needed.

These steps will not only increase the size of our hash table, they will
decrease the chance of _future_ collisions, and also (possibly) redistribute
_old_ collisions as well. Thereby increasing the performance of future calls of
our `read()` and `insert()` methods!


## What you've learned

In this reading, you have learned how to implement a hash table `resize()`
method and how to dynamically call it by considering the hash table's
**load factor**. You have also learned how the ability for a hash table to
`resize` is critical to maintaining its **constant** time complexity
performances for certain functionalities that enable hash tables to be so
powerful.
