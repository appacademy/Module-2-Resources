// 1.
// function sum(array) {
//   let sum = 0;
//   try {
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//   } catch (e) {
//     if (e instanceof TypeError) {
//       console.error(e.message);
//     }
//   }
//   return sum;
// }
// let res = sum(null);
// console.log(res);

// try {
//   let res = sum(null);
//   console.log(res);
// } catch (e) {
//   if (e instanceof TypeError) {
//     console.log(e.message);
//   }
// }

// 2.
// tests
// function sayName(name) {
//   if (typeof name !== "string") {
//     throw new TypeError("Invalid name! Must be a string!");
//   }

//   console.log(name);
// }

// try {
//   sayName("Alex");
//   sayName(1);
// } catch (e) {
//   console.error(e.message);
// }
// Your code here

class NoGreetingError extends Error {
  constructor(message) {
    super(message);
  }
}
// // 3.
function greet(greeting) {
  if (!greeting) {
    throw new NoGreetingError("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet(false);
} catch (e) {
  console.log(e);
  console.log("Hello World");
}
