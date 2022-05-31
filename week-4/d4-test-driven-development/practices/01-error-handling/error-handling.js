// // 1.
// function sum(array) {
//   let sum = 0;
//   // if (!Array.isArray(array)) return null // This is how JEFF would handle in real world
//   try {
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//   } catch (e) {
//     // console.log(e.name)
//     if (e instanceof TypeError) console.log(e.message);
//     else throw e;
//   }

//   return sum;
// }

// let res = sum(null);
// console.log(res);

// 2.
// function sayName(name) {
//   if (!(typeof name === 'string')) throw new TypeError("Invalid name! Must be a string!")

//   console.log(name);
// }
// // tests
// try {
//   sayName("Pezzati");
//   sayName(1);
// } catch (e) {
//   console.log(e.message);
// }
// Your code here

// // 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  // if (greeting === "a") throw new Error("This is an A.")

  console.log(greeting);
}

try {
  greet("Hello");
  greet();
  // greet("a");
} catch (e) {
  console.log(e.message);
}