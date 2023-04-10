# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`
[1,2,3,4,5]
Time complexity: O(1)
Space complexity: O(1) * typical use case, a resize event doesn't need to occur
Justification: Adding to the end of an array requires no shifting and happens in place

[push on MDN][push]


## `arr.pop()`
[1,2,3,4]
Time complexity: O(1)
Space complexity: O(1)
Justification: Removing from the end of an array requires no shifting happens in place

[pop on MDN][pop]

## `arr.shift()`
[2,3,4,5,null]
Time complexity: O(n)
Space complexity: O(1)
Justification: Removing from the front of an array requires all elements shift to the left by one. This happens in place

[shift on MDN][shift]

## `arr.unshift()`
[1,2,3,4,5]
Time complexity: O(n)
Space complexity: O(1) * typical use case, no resize event
Justification: Adding to the front of an array requires all elements shift to the right by one. This happens in place

[unshift on MDN][unshift]

## `arr.splice()`
[1,2,4,5,null]
Time complexity: O(n)
Space complexity: O(n) * if only 1 element is removed then space is O(1);
Justification: This will add or remove elements from the middle of an array. This requires shifting to fill empty spaces. Returns an array possibly unknown length;

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: This will create a copy of the old array with some or all of the elements sliced out. The values sliced out have to be copied individually.

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Worst case is the target is not in the array or is at the end. This happens in place. 

[indexOf on MDN][indexOf]

## `arr.map()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Returns a new array, assumes that the callback is O(1), but must touch each element. 

[map on MDN][map]

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Iterates over each element returns a NEW array of unknown length

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Iterates over each element assumes reducer is O(1). No additional space is needed. 

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Move each element, happens in place

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(n)
Space complexity: O(n)
Justification: Returns a new array of indeterminate length. Must visit each element. 

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
