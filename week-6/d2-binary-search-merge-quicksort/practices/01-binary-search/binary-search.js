


/*

  What is a Logarithm?
  * inverse of an exponent
  * super-efficient
  * The logarithm base-n of a number is how many times it must be divided by n to reach 1

  Exponents
    * 2^5 === 2 * 2 * 2 * 2 * 2 = 32
      ? 2 multiplied by itself 5 times is 32
  Logarithm
    * log base(n)
    * log2(32) = 5
      ? How many times would we need to divide 32 by 2 to equal 5

  Binary search
    * finding an item from a sorted list of items
    * Time complexity
      * Average - O(log n)
      * Best - O(1) <-  find it first try
    * Space complexity: O(n)
    * Divide and conquer

  * Binary Search utilizes the divide and conquer approach.
  * You've already used this without even knowing...
          ex: Phone books, dictionaries, etc.
  * Binary search method first looks at the midpoint of a SORTED array, and then checks to see if that element is greater than, less than, or equal to the element you are looking for.


  In order to perform a binary search in logarithmic time, your data must satisfy two conditions.
    * 1.Data must be sorted
    * 2.Data can be accessed by index in constant time

  Binary search logarithm
   * A binary logarithm is a base-2 logarithm
    log2( 1 )    = 0     |      2 ** 0   // 1
    log2( 2 )    = 1     |      2 ** 1   // 2
    log2( 4 )    = 2     |      2 ** 2   // 4
    log2( 8 )    = 3     |      2 ** 3   // 8
    log2( 16 )   = 4     |      2 ** 4   // 16
    log2( 32 )   = 5     |      2 ** 5   // 32
    log2( 64 )   = 6     |      2 ** 6   // 64
    log2( 128 )  = 7     |      2 ** 7   // 128
    log2( 256 )  = 8     |      2 ** 8   // 256
    log2( 512 )  = 9     |      2 ** 9   // 512
    log2( 1024 ) = 10    |      2 ** 10  // 1024

    Math.log2(2);    // 1
    Math.log2(4);    // 2
    Math.log2(8);    // 3
    Math.log2(16);   // 4
    Math.log2(32);   // 5

    O(log n) - logarithmic growth
    * Logarithmic curves grow so slowly that they are virtually constant.
    * slower than O(1) - constant
    * faster than O(n) - linear
*/



function linearSearch (arr, target) {

  // Can you solve this in one line?

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices

  // While high and low indices do not overlap...

    // Find the midpoint between high and low indices
    // ! Math.floor

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
      // Return the midpoint index

    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1

    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1

  // Return -1 if the loop exits with overlapping pointers

};


module.exports = [linearSearch, binarySearch]
