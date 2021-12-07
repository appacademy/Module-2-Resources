/*
Tabulation is another way to optimize slower functions. 
Two main features of tabulation:
    1. the function is iterative and NOT recursive
    2. the additional data structure is typically an array, 
    commonly referred to as the table.

Many problems that can be solved with memoization can also be solved
with tabulation, as long as you convert from recursion to iteration.    

Consider this implementation of fibonacci:
*/

function tabulatedFib(n) {
  // create a blank array with n reserved spots
  let table = new Array(n);
if (table[n]) return table[n]
  // seed the first two values
  table[0] = 0;
  table[1] = 1;

  // complete the table by moving from left to right,
  // following the fibonacci pattern
  for (let i = 2; i <= n; i += 1) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}

console.log(tabulatedFib(7));      // => 13

/*
The space and time complexities in this implementation would be O(n) as the
length of the array would be n elements long.

We can refactor for O(1) space by setting up an array to only hold the two most
recent calculations, as that is all that is needed to find the next fibonacci
number.
*/

function fib(n) {
  let mostRecentCalcs = [0, 1];

  if (n === 0) return mostRecentCalcs[0];

  for (let i = 2; i <= n; i++) {
    const [secondLast, last] = mostRecentCalcs;
    mostRecentCalcs = [last, secondLast + last];
  }

  return mostRecentCalcs[1];
}

/*
The formula for creating a tabulated formula is as follows:
1. Create the table array based off of the size of the input, which isn't always
   straightforward if you have multiple input values

2. Initialize some values in the table that "answer" the trivially small
   subproblem usually by initializing the first entry (or entries) of the table

3. Iterate through the array and fill in remaining entries, using previous
   entries in the table to perform the current calculation

4. Your final answer is (usually) the last entry in the table

*/