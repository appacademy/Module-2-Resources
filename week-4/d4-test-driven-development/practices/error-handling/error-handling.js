// // 1.
// function sum(array) {
//   let sum = 0;
//   try {
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//   } catch (e) {
//     if (e instanceof TypeError){
//       console.log(e.message)
//     } else {
//       throw e;
//     }
//   }
//   return sum;
// }

// let res = sum(cat);
// console.log(res);

// 2.
// Your code here
// function sayName(name) {
//   if (!(typeof name === "string")) {
//     throw new TypeError("Invalid name! Must be a string!");
//   }
//   console.log(name);
// }
// // tests
// try {
//   sayName("Alex");
//   sayName(1);
// } catch (error) {
//   console.log("Oops, something went wrong: ", error.message);
// }

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet("Hola!");
  greet();
} catch (e) {
  console.log("Hello World!");
}
  greet();
