// // 1.
// function sum(array) {
//   let sum = 0;
//   try {
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//   } catch (error) {
//     if (error instanceof TypeError) {
//       console.error(error.message);
//     }
//   }
//   return sum;
// }


// let res = sum(null);
// console.log(res);



// // 2.
// tests
// Your code here
// function sayName(name) {

//   if (typeof name !== 'string') {
//     throw new TypeError("Invalid name! Must be a string!");
//   }
//   console.log(name);
// }

// try {
//   sayName("Alex");
//   sayName({});
//   sayName(1);

// } catch (e) {
//   console.error(e);
// }

// // 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try  {
  greet('Howdy!');
  greet([] === [])
} catch {

  console.log( "Hello World!");
}