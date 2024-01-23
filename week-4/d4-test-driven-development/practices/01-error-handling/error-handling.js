// 1.
// function sum(array) {
//   // if (!Array.isArray(array)) {

//   // }
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
// } catch (e) {
//   console.error(e.name);
// }

// 2.
// tests
// function sayName(name) {
//   if (typeof name !== "string") {
//     throw new Error("Invalid name! Must be a string!");
//   }

//   console.log(name);
// }

// try {
//   sayName("Alex");
//   sayName(1);
// } catch (e) {
//   console.error(e.message);
// }
// // Your code here

// // 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet("");
} catch {
  console.log("Hello World!");
}
