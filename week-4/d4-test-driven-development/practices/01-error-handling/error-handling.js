1.
function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch(e) {
    if (e instanceof TypeError) {
      console.error(e.message);
    } else throw e
  }
  return sum;
}

let res = sum(null);
console.log(res);

// 2.
// tests

function sayName(name) {
  if (typeof name === "string") {
    console.log(name);
  } else {
    throw new TypeError("Invalid name! Must be a string!")
  }
}

try {
  sayName("Alex");
  sayName(1);
} catch(e) {
  console.error(e.message);
}
// Your code here

// // 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet(1)
  greet('Howdy')
  greet();
  greet('Hey there')

} catch(e) {
  console.log('Hello World')
}


