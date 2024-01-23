// funtion add(num1, num2) {
//   console.log(num1 + num2);
// }

// add(1, 2)

// try {
//   const puppy = "puppy";
//   console.log(pupppy);
// } catch (error) {
//   console.error(error.message);
// }

// function callPuppy() {
//   const puppy = "puppy";
// }
// console.log(puppy); // puppy is not in scope, it was created in the callPuppy function

// let dog = null; // Remember unassigned variables are undefined!
// dog(); // TypeError: dog is not a function

class CustomError extends Error {
  constructor(...params) {
    super(...params);
  }
}

function adder(n1, n2) {
  try {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      throw new CustomError("Hey, arguments must be numbers!");
    }
    return n1 + n2;
  } catch (e) {
    console.error(e.message);
  }
  console.log("inside of function");
}

console.log(adder("1", {}));
// try {
// } catch (e) {
//   console.error(e.message);
// }

console.log("here");
