# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1)
Space complexity: O(1)
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
Justification: Removing from the FRONT of an array requires shifting all other elements to the left by one

[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Adding to the FRONT of an array requires shifting all other elements to the right by one. This happens in place.

[unshift on MDN][unshift]

## `arr.splice()`

Time complexity: O(n)
Space complexity: O(n)*
Justification: This will add or remove elements from the middle of an array, must copy and removed element over to a new return array.

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: This copies all elements over to a new array, requires iteration.

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Must iterate until we find target, worst case target is at end or doesn't exist. Happens in place. 

[indexOf on MDN][indexOf]

## `arr.map()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Assumes cb is O(1) must iterate entire array. Returns a new array

[map on MDN][map]

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Assumes cb is O(1) must iterate entire array. Returns a new array

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Must iterate entire array. Reduces down to single value. 

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Must iterate entire array. Happens in place.

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(n)
Space complexity: O(n)
Justification: This copies all elements over to a new array, requires iteration.

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
