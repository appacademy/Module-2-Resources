
/*


  Sets
  * The name "set" comes from mathematics. In mathematics, a set is a well-defined collection of distinct elements or members. In computer science a set is an abstract data type which is used to store a collection of unique, unordered values.

  Properties of a set
    Sets have three important properties that will tell you when they are appropriate to use:
    * A set contains no duplicate elements
    * A set's elements are unordered
    * A set can check if an element is contained in O(1) time

  Syntax
  * const set = new Set(iterable);
  * iterable - strings and arrays

  ! Use whenever you need to find unique values

*/

let numbers = [1,1,2,3,3,4];

const numbersSet = new Set(numbers);

console.log(numbersSet);// Set(4) { 1, 2, 3, 4 }
// removes duplicate values

// * has === .includes
// * check if set has a value
console.log(numbersSet.has(1));// true


// * deletes value from set
numbersSet.delete(2);
console.log(numbersSet);// Set(3) { 1, 3, 4 }

// * add === .push
// * adds a value to a set
numbersSet.add(6);// Set(3) { 1, 3, 4, 6 }

// * size === .length
// * checks length of set
numbersSet.size;// 4

// * removes all values in the set
set.clear();// Set(0) {}
