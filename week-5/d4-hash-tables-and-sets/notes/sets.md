# Sets

A set is an abstract data type that stores a collection of _unique_, unordered values.
The unique part is important as a set can have no duplicate values.

Being unordered is also important. Items are inserted into the set based on the hash valued index.

A big benefit of using a set is that it has a lookup time, using the set.has() method, of O(1)!

** Sets are implemented using hash tables to achieve that O(1) search time complexity. 

Sets have an O(n) space complexity, despite the fact that they dynamically resize when the underlying array hits .7 load capacity. 

The use of sets is very niche, but are capable of massive performance gains when used appropriately.

Javascript has a built in Set class. To instantiate a new set, you would do:

```js
const set = new Set()
```
A set has access to certain methods and properties:

```js
set.size //returns the number of values in the set
set.has(val) //returns a boolean of whether that set contains a particular value
set.add(val) //adds a new value to the set, utilizing hash table logic under the hood (hashing, modulo, etc.)
set.clear() //removes all values in the set
set.delete(val) //removes a specific value and returns a boolean of whether the removal was successful
```

Sets in javascript also have some iteration methods built in:
 - These include @@iterator, /values, values(), entries and forEach. Look these up on MDN for more info.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set