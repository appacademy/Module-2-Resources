// // 1.
// function sum(array) {
//   let sum = 0;
//   try {
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//   } catch (error) {
//     if (error instanceof TypeError) {
//       console.error(error.message)
//     }
//   }
//   return sum;
// }
// // console.log(sum([1,2,3]))
// let res = sum(null);
// console.log(res);


// 2.
// // tests

// class NameError extends TypeError {
//   constructor(...params) {
//     super(...params);
//   }
// }

// function sayName(name) {

//   if (typeof name !== 'string') {
//     throw new NameError("Invalid name! Must be a string!")
//   }

//   console.log(name)
// }

// try {
//   sayName("Alex");
//   sayName(1);
// } catch (e) {
//   console.error(e instanceof ReferenceError);
// }
// Your code here

// // 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet('')
} catch {
  console.log('Hello World!')
}