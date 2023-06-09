# Exercise: Reading Tests Solution

This is the solution for the Reading Tests exercise.

## `isFive(num)`

The `isFive(num)` function is being tested. It should return `true` if the `num`
is 5 otherwise it should return `false`.

The spec will fail if `isFive(5)` does not result in `true`. It will also fail
if `isFive(4)` does not result in `false`. Finally, it will fail if the
`isFive("not 5")` does not result in `false`. Otherwise, the test spec will
pass.

## `isOdd(number)`

The `isOdd(number)` function is being tested next. It should return `true` if
`number` is odd. It should also should return `false` if the `number` is even.
Finally, it should throw an error if the `number` is not of type `Number`.

The first spec will fail if `isOdd(3)`, `isOdd(2953)`, or `isOdd(-999)` does not
result in `true`.

The second spec will fail if `isOdd(4)`, `isOdd(2952)`, or `isOdd(-998)` does
not result in `false`.

The third and last spec will fail `isOdd("i am a string")`,
`isOdd({ i: "am", an: "object" })`, or `isOdd(["i", "am", "an", "array"])` does
not throw an Error.

## `myRange(min, max, step)`

The `myRange(min, max, step)` is the last function being tested. When the `step`
parameter is not provided, it should return the correct array with a default
value for the `step` set to 1. When the `step` parameter is provided, it should
return the correct array.

The first spec will fail if `myRange(0, 5)` does not result in
`[0, 1, 2, 3, 4, 5]` or if `myRange(6, 3)` does not result in `[]`.

The second and final spec will fail if `myRange(0, 5, 1)` does not result in
`[0, 1, 2, 3, 4, 5]`, if `myRange(0, 5, 2)` does not result in `[0, 2, 4]`, or
if `myRange(9, 5, 2)` does not result in `[]`.
