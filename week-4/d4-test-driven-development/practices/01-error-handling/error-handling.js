// 1.
// function sum(array) {
//   let sum = 0;
//   try {
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//   } catch(error) {
//     if (error instanceof TypeError) {
//       console.error(error.message);
//     } else {
//       console.log('Not a TypeError');
//     }
    
//   }
//   return sum;
// }


// let res = sum(null);
// console.log(res);

// 2.
// Your code here
// function sayName(name) {
//   if (typeof name !== 'string') {
//     throw new TypeError("Invalid name! Must be a string!")
//   }

//   console.log(name)
// }
// // tests
// try {
//   sayName(1);
//   sayName("Alex");
//   sayName({})
//   sayName([])
// } catch(e) {
//   console.error(e.message);
// }

// // 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet(undefined)
} catch {
  console.log('Hello World!')
}
