// // 1.
// function sum(array) {
//   let sum = 0;
//   if (typeof array !== "array") throw new Error("Must be an array")

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// try {
//   let res = sum(null);
//   console.log(res);
// } catch(e) {
//   console.error(e.message);
// }

// function sum(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }
// try {
//   sum()
// } catch(error) {
//   console.log(error.message);
//   throw new Error('Must be array')
// }
// let res = sum(null);
// // console.log(res);

// // 1.
function sum(array) {
  let sum = 0;

  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  } catch(e) {
    if (e instanceof TypeError) {
      console.error(e.message)
    }
  }


}

let res = sum(null);
console.log(res);




// 2.
// tests
// Your code here
function sayName(name) {
  if (typeof name === 'string') {
    console.log(name);
  } else {
    throw TypeError("Invalid name! Must be a string!")
  }
}


try {
  sayName("Alex");
  sayName(1);
} catch(e) {
  console.error(e.message)
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet()
} catch {
  console.log("Hello World!")
}
