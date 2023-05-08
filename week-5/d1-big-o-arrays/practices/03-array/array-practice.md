# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1) * only adding a single element
Space complexity: O(1) * no resize needs to happen
Justification: Adding to the end of an array is a constant operation. 

[push on MDN][push]


## `arr.pop()`

Time complexity: O(1)
Space complexity: O(1)
Justification: Removing from the end of an array is a constant operation. No additional space is needed. 

[pop on MDN][pop]

## `arr.shift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: All elements must shift to the left by 1. No additional space is needed. 

[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: All elements must shift to the right by 1. No additional space is needed.

[unshift on MDN][unshift]

## `arr.splice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: All elements must shift to fill empty slots. A new array is returned. 

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Must copy all elements individually. Returns a new array.

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Worst case, target is not in array, must iterate entire array to know. No new space is needed. 

[indexOf on MDN][indexOf]

## `arr.map()`

Time complexity: O(n) * call back is O(1)
Space complexity: O(n)
Justification: Must iterate over entire array, returns a new array

[map on MDN][map]

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Must iterate over entire array, returns a new array

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Must iterate over entire array. No new space is needed if only returning accumulator as an integer. 

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Must evaluate each element to move. This happens in place, no new memory is allocated. 

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(n)
Space complexity: O(n)
Justification: _Fill this in_

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
