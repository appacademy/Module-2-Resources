// 1.
// function sum(array) {
//   let sum = 0;
//   try {
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     } 
//   } catch (e) {
//     if (e instanceof TypeError) {
//       console.error(e.message)
//     } else {
//       console.log('made it here')
//     }

//   }
//   return sum;
// }

// // let res = sum(null);
// let res = sum([1,2,3]);
// console.log(res);
// try {
// } catch (error) {
//   console.error(error.name)
// }

// 2.
// tests
// Your code here
// function sayName(name) {
//   if (typeof name !== 'string') {
//     throw new TypeError("Invalid name! Must be a string!")
//   }
//   console.log(name)
// }

// class StringError extends Error {
//   constructor(...params) {
//     super(...params)
//   }
// }

// try {
//   sayName("Alex");
//   sayName(1);
// } catch (e) {
//   console.error(e.message)
// }

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet('Howdy')
  greet(null)
} catch {
  console.error('Hello World')
}
