// 1.
function sum(array) {
  let sum = 0;


  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch (e) {
    if(e instanceof TypeError) {
      console.log(e.message);
    } else {
      throw e;
    }

  }
  return sum;
}


// try {
//   let res = sum(null);
//   console.log(res);
// } catch (e) {
//   console.log(e.message);
// }

// let res = sum(null);
// console.log(res + 12);
// console.log(sum([1,2,3]))

// 2.
// tests

function sayName(name){
  if(typeof name !== 'string') {
    throw new TypeError('Invalid name! Must be a string!')
  };
  console.log(name);
}


try {
  // sayName("Alex");
  sayName(1);
} catch(e) {
  console.log('Something went wrong', e)
}

// console.log('do we make it');
// sayName("Alex");
// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet();
} catch(e) {
  console.log(e, "Hello World!");
  // function sayBye() {
  //   console.log('bye')
  // }
  // sayBye();
}
