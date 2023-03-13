/*
Memoization allows us to store the results of previous calculations in an object
in key:value pairs. 
-It allows us to save time on future calculations as the
function can first check to see if a value exists in the memo, and if so, will
simply return it. 
-There is a trade off: what we gain in time, we can lose in
storage, however, it's usually a good trade-off when data is large.

There are two main features of functions that implement memoization: 
1. The function is recursive. 
2. There exists an additional data structure (usually
    an object): the MEMO

You CANNOT apply this to just any recursive problem...there must be an
"overlapping subproblem structure" 
Ex: Using pennies, nickels, dimes, and
quarters, what is the smallest combination of coins that total 27 cents?
        - In this problem, there would be a sub problem of finding the 
        smallest coin combo for 25 cents as there is really only one for
        the remaining 2 cents.

*/

//Factorial without memoization:
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

factorial(6);       // => 720, requires 6 calls
factorial(5);       // => 120, requires 5 calls
factorial(7);       // => 5040, requires 7 calls

//Factorial with memoization:
let memo = {}

function factorialMemo(n) {
  // if this function has calculated factorial(n) previously,
  // fetch the stored result in memo
  if (n in memo) return memo[n];
  if (n === 1) return 1;

  // otherwise, it halves not calculated factorial(n) previously,
  // so calculate it now, but store the result in case it is
  // needed again in the future
  memo[n] = n * factorialMemo(n - 1);
  return memo[n]
}

factorialMemo(6);       // => 720, requires 6 calls
factorialMemo(6);       // => 720, requires 1 call
factorialMemo(5);       // => 120, requires 1 call
factorialMemo(7);       // => 5040, requires 2 calls

memo;   // => { '2': 2, '3': 6, '4': 24, '5': 120, '6': 720, '7': 5040 }

//The above utilizes a global variable which is not preferable. It will also build
//a bigger tree to house data (see illustration in homework). We can correct 
//this by utilizing javascript default arguments. Because of this, we will only
//need to explore the subtree fully once, rather than several times as would be 
//required with the global object.

//Here is a more elegant solution:
function fastFib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;

  memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
  return memo[n];
}

fastFib(6);     // => 8
fastFib(50);    // => 12586269025

/* 
Rules to implement a memoization for a slow function:
1. Write the unoptimized, brute force recursion and make sure it works.

2. Add the memo object as an additional argument to the function. The keys will
   represent unique arguments to the function, and their values will represent
   the results for those arguments.

3. Add a base case condition to the function that returns the stored value if
   the function's argument is in the memo.

4. Before you return the result of the recursive case, store it in the memo as a
   value and make the function's argument it's key.


*/