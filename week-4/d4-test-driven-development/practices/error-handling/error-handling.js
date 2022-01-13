// 1.
// function sum(array) {
//   let sum = 0;
//   try {
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//   } catch (err) {
//     if (err instanceof TypeError) {
//       console.log(err.message);
//     } else {
//       throw err;
//     }
//   }
//   return sum;
// }

// let res = sum(null);
// console.log(res);

// 2.
// tests
// function sayName(name) {
//   if (!(typeof name === String)) {
//     throw new TypeError("Invalid name! Must be a string!");
//   }
//   console.log(name);
// }
// try {
//   sayName("Alex");
//   sayName(1);
// } catch (err) {
//   console.log('Oops. Jeff messed up.')
//   }
// Your code here

// // 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet('Hello gorgeous!')
  greet()
} catch (e) {
  console.log("Hello World!")
}