
/*

  * OVERVIEW of BIG-O
  Big-O notation is used to describe the efficiency of algorithms with respect to the size of the input.
    * O - Order of
    * O - Theta

  Big picture ideas:
  1. function should be defined in terms of the size of the input
  2. Smaller Big-O function is more desireable than a larger one.
    * We want to use a minimal amount of time and space.
  3. Big-O describes the worst case scenario for our code
    * We don't think of best case or average case; Worst case
  4. Big-O function should be simplified to show only its most dominant mathematical term.
    Key Terms:
    n: the size of the input
    T(f): an un-simplified mathematical function
    O(f): the Big-O simplified mathematical function

    * Simplify Products: if the function is a product of many terms, we drop the terms that don't depend on the size of the input.

    Un-simplified	        Big-O Simplified
    T( 5 * n2 )	            O( n2 )
    T( 100000 * n )	        O( n )
    T( n / 12 )	            O( n )
    T( 42 * n * log(n) )	O( n * log(n) )
    T( 12 )	                O( 1 )

    * Simplify Sums: if the function is a sum of many terms, we keep the term with the largest growth rate and drop the other terms.

    Un-simplified	        Big-O Simplified
    T( n3 + n2 + n )	    O( n3 )
    T( log(n) + 2n )	    O( 2n )
    T( n + log(n) )	      O( n )
    T( n! + 10n )	        O( n! )

  Growth is the rate at which the cost of the algorithm grows as the size of its input grows.
    * coefficient -  -> 2n
    * constant -     -> 3 + 2n
*/

//
/*
  COMPLEXITY CLASSES:
  * There are 7 major complexity classes:

  Big-O	                    Complexity Class Name
  * O(1)	                      constant
  * O(log(n))	                  logarithmic
  * O(n)	                      linear
  * O(n * log(n))	              log-linear, linearithmic, quasi-linear
  * O(nc) - O(n2), O(n3), etc.	polynomial
  * O(cn) - O(2n), O(3n), etc.	exponential
  * O(n!)	                      factorial

*/

// Remember!
// * Simplify Products: if the function is a product of many terms, we drop the terms that don't depend on the size of the input.
// * Simplify Sums: if the function is a sum of many terms, we keep the term with the largest growth rate and drop the other terms.

// O(1) - Constant: the algorithm takes roughly the same amount of steps for any size

function constant(n) {
  // * Multiplying n * 2 one time
  // * Adding 1 one time
  // * 1 + 1
return n * 2 + 1;
}

// T(1 + 1)
// 0(1)

function constant2(n) {
  // * Declaring i is an operation that happens once - 1
  // * Iterating up to 100; Operation is always going to iterate 100 times
  // * Therefore operations are constant; no variation; not dependent on anything
  // * Adding 1 to as many times as the constant operation;
  // 1 + 100 + 100
for (let i = 1; i <= 100; i++){
// * console.log(i) a constant amount of times
// 100
  console.log(i)
}
}
// T(1 + 100 + 100 + 100)
// T(301)
// T(1) * simplified
// n does not change therefore n does not effect output


// O(log(n)) - Logarithmic: display a sense of continually halving the size of the input.
// * Every time you double the size of the input, it only requires one additional step.
// * larger input sizes will only increase the number of steps required by a small amount
// Ex:
// O(log(n))
// * halving input recursively
// * halves time to get to final result
function logarithmic1(n) {
// * 1 operation each recurse
// 1
if (n <= 1) return;

// log(n)
logarithmic1(n / 2);
};
// 100 -> 99 -> 98
// 100 -> 50 -> 25 -> 12 -> 6 -> 3 -> 1


// T(   log(n)  )

// O(log(n))
// * having n each time
// * halving input each time
function logarithmic2(n) {
// 1
let i = n;

// log(n)
while (i > 1) {
i /= 2;
}
}

// T(   log(n)    )

/*
O(n) Linear: linear algorithms access each item in the input
* increasing the size of the input increases the number of steps
* deals with NON-nested loops
* when n is unknown
* Operations dependent on an unknown amount of operations
*/


// O(n)
function linear1(n) {
// * Declaring i is a single operation
// * Check i is less then n; n amount of times
// * operation dependent on n; n is unknown as it varies each time
// * Add 1 to i; n amount of times
// 1 + (1 * n) +  (1 * n)
for (let i = 1; i <= n; i++) {
// * we are logging i; n amount of times
// (1 * n)
console.log(i);
}
}
// T(  1 + (1 * n) + (1 * n) + (1 * n)  )
// T(  1 + n + n + n  );
// T(  1 + 3n  )
// * drop constants
// T(n) or O(n)


// * n grows proportionally linear over time as n grows, time complexity increases
// * we dont know what n will be
// * O(n), where n is the length of the array
// * going to do console.log operation n amount of time; depends on length of array
function linear2(array) {
// 1 + (1 * n) + (1 * n)
for (let i = 0; i < array.length; i++) {
// (1 * n)
console.log(i);
}
};

// T(   1 + (1 * n) + (1 * n) + (1 * n)   );
// T(   1 + n + n + n   );
// T(   1 + 3n    )
// T(   3n    )
// * drop constants
// T(   n   )

// O(n)
// * recursive n
// * we are recursing n amount of times; amount of recurses depends on how many times we check the condition
// * going to subtract 1 from n; n amount of times
// * linear
function linear3(n) {
// * do this check 1 time each recurse
// 1
if (n === 1) return;

// * we recurse in n amount of times
// n * 1
linear3(n - 1);
}
// T(   (1 * n) + 1  )
// T(   n + 1  )
// * drop constants
// T(   n   )

/*
! SKIP
O(n * log(n)) * Loglinear: combination of linear and logarithmic behavior
* use both recursion and iteration
* recursive calls will halve the input each time
* but iterations are also performed

*/

// O(n * log(n))
function loglinear(n) {
// 1
if (n <= 1) return;

// 1 + (1 * n) + (1 * n)
for (let i = 1; i <= n; i++) {
// (1 * n)
console.log(i);
}

// log(n);
loglinear(n / 2);
loglinear(n / 2);
};

// T(   (1 + (1 + 1 * n + 1 * n + 1 * n)  * log(n)         )
// T(   (1 + n + n + n)  * log(n)         )
// T(   (1 + 3n)  * log(n)         )
// T(   (3n)  * log(n)         )
// T(   n + log(n)         )
// T(   n * log(n)         )

/*
O(n^c) * Polynomial: complexity grows significantly based on the size of the
input
* O(n^2) is better than O(n^3), but they are still both polynomial
* nested loops are a good indicator of polynomial complexity

*/
// O(n^2)
function quadratic(n) {
//     1 + (1 * n) + (1 * n)
for (let i = 1; i <= n; i++) {
//  1 + (1 * n) + (1 * n)
for (let j = 1; j <= n; j++) {
  //do some stuff
}
}
}

// * multiplication n amount of work n amount of time
// T(  (1 + (1 * n) + (1 * n)) * (1 + (1 * n) + (1 * n)) )
// T(  (1 + 2n) * (1 + 2n)  )
// T(n * n);
// T(n^2)

// O(n^3)
function cubic(n) {
// 1 + (1 * n) + (1 * n)
for (let i = 1; i <= n; i++) {
// 1 + (1 * n) + (1 * n)
for (let j = 1; j <= n; j++) {
// 1 + (1 * n) + (1 * n)
  for (let k = 1; k <= n; k++) {
    //do some stuff
}
}
}
};

// * multiplication n amount of work n amount of time
// T( (1 + (1 * n) + (1 * n)) * (1 + (1 * n) + (1 * n))  * (1 + (1 * n) + (1 * n))   )
// (1 + (n) + (n)) * (1 + (n) + (n)) * (1 + (n) + (n))
// 1 + 2n * 1 + 2n * 1 + 2n
// n * n * n
// n^3


/*
! SKIP
O(c^n) * Exponential: complexity grows exponentially based on the input size
* common indicator is recursive code with a constant number of recursive
calls in each stack frame.
* these algorithms are considered VERY slow
*/

// O(2^n)
function exponential2n(n) {
// 1
if (n === 1) return;
// 1 * n
exponential_2n(n - 1);
// 1 * n
exponential_2n(n - 1);
}
// T(   (1 * n) + (1 * n)   )
// T(   (n) + (n)   )
// T(   n   )
// T(   n   ) + T(   n   )
// *  two recursive calls
// T(2n)

// O(3^n)
function exponential3n(n) {
if (n === 0) return;
exponential_3n(n - 1);
exponential_3n(n - 1);
exponential_3n(n - 1);
};

// T(   (1 * n) + (1 * n)   )
// T(   (n) + (n)   )
// T(   n   )
// T(   n   ) + T(   n   ) + T(   n   )
// *  three recursive calls
// T(3n)

/*
! SKIP

O(n!) * Factorial: code has a variable number of recursive calls based on input per stack frame
* Factorial is worse than exponential for this reason, since at least exponential algorithms have a constant amount of recursive calls.
* This is one of the worse case scenarios for code, as it is incredibly slow and can take up a lot of space.

Example: This will freeze your computer if you put too big of value for n!!
*/

// O(n!)
function factorial(n) {
// 1
if (n === 1) return;

// 1 + 1 * n + 1 * n
for (let i = 1; i <= n; i++) {
// 1 * n
factorial(n - 1);
}
}

// T(    (1 * n) + (1 + 1 * n + 1 * n) + 1 * ((1 * n) + (1 + 1 * n + 1 * n) ))
