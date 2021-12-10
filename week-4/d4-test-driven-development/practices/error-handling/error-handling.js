// // 1.
function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch (error) {
    if (error instanceof TypeError) {
      console.log(error.message)
      // console.error(error.message)
    } else {
      console.log(error.name, error.message)
    }
  }
  return sum;
}

// let res = sum(null);
// console.log(res);

// 2.
// tests
function sayName(name) {
  if (!(typeof name === 'string')) {
    throw new TypeError('This is not a string! You did it wrong!')
  } else {
    console.log(name)
  }
}

try {
  sayName("Alex");
  sayName(1);
} catch (e) {
  console.log('Something went wrong: ', e.message)
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet("Hello there")
  greet()
} catch (e) {
  console.log('Hello World!')
}
