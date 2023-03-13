# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1)*
Space complexity: O(1)*
Justification: Adding to the END of an array requires no shifting and happens in place.

[push on MDN][push]


## `arr.pop()`

Time complexity: O(1)
Space complexity: O(1)
Justification: Removing from the END of an array requires no shifting and happens in place.

[pop on MDN][pop]

## `arr.shift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Removing from the FRONT of an array requires all elements shift to the left by one. This happens in place.

[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Adding to the FRONT of an array requires all elements shift to the right by one. This happens in place. 

[unshift on MDN][unshift]

## `arr.splice(start, deleteCount, item1, item2, ...itemN)`

Time complexity: O(n)
Space complexity: O(n)*
Justification: This will add or remove elements from the middle of an array. This requires shifting
to fill empty spaces. Returns an array possibly of unknown length.

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: This will create a copy of the old array with some or all elements sliced out. 
The values sliced out have to be copied individually.

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(1)
Justification: This will search and visit each node worst case element is at the end or not present. No space required.

[indexOf on MDN][indexOf]

## `arr.map()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Map creates a new array with some function applied to each element.
this assumes that the cb is O(1);

[map on MDN][map]

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Filter iterates over each element and adds values to a NEW array based on the booleans

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Iterates over each element and applies a reducer function. Assumes reducer is O(1).
No additional space is needed. 

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Reverse will move all n elements in place.

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(n)
Space complexity: O(n)
Justification: Spread will copy each element into a NEW array without altering the original. 

[spread on MDN][spread]

[push]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[pop]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[shift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[unshift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[splice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[slice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[indexOf]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
[map]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[filter]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[reverse]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[spread]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
