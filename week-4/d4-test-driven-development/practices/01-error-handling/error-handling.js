// 1.
function sum(array) {
  if (!Array.isArray(array)) throw new Error('Input must be an array');
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
try {
  let res = sum(null);
  console.log(res);
} catch (e) {
  console.error(e.message)
}

// 2.
const sayName = (name) => {
  if (!(typeof name === 'string')) throw new Error("Inalid Name! Must be a string!")
}
// tests
try {
  sayName("Alex");
  sayName(1);
} catch (e) {
  console.error(e.message)
}
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
} catch {
  console.log('Hello World!')
}
