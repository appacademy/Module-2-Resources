// Ideas for functions below came from this site:
// https://www.i-programmer.info/programming/javascript/967-javascript-jems-active-logic-truthy-and-falsy.html

/******************************************************************************/

// Returns value based on the 'OR' Truth Table
const or = (A, B) => {
  if (A) return A;
  else return B;
};

// Returns value based on the 'AND' Truth Table
const and = (A, B) => {
  if (A) return B;
  else return A;
};

// 'cb' parameter should be either 'OR' or 'AND' functions from above
const calculateTruthTable = (A, cb, B,) => {
  console.log(cb(A, B));
};

module.exports = {
  or,
  and,
  calculateTruthTable,
};