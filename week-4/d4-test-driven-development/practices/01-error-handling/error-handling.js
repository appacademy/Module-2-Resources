// // 1.
// function sum(array) {
//   let sum = 0;
//   try {
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//     return sum;
//   } catch (error) {
//     if (error instanceof TypeError) {
//       console.error(error.message);
//     }
//   }
// }

// let res = sum(null);
// console.log(res);

// 2.
// // Your code here
// function sayName(name) {
//   if (typeof name === 'string') {
//     console.log(name);
//   } else {
//     throw TypeError("Invalid name! Must be a string!")
//   }
// }
// // tests
// try {
//   sayName("Alex");
//   sayName(1);
// } catch (e) {
//   console.error(e.message)
// }

// // 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet();
} catch {
  console.log('Hello World!');
}