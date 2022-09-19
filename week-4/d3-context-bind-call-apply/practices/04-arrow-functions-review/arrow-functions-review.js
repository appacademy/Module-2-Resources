// Convert restSum into a multi-line fat-arrow function
const restSum = function(...otherNums) {
  let sum = otherNums.reduce((acc, el) => (acc += el));
  return sum;
};
console.log('restSum output:');
console.log(restSum(1, 2, 3)); // 6

// Convert getFullName into a one-liner fat-arrow function with implicit return
const getFullName = function(person) {
  person.firstName + " " + person.lastName;
};

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

console.log('getFullName output:');
console.log(getFullName(new Person("Elle", "Woods"))); // Elle Woods

// Convert addFive into a one-liner fat-arrow function with implicit return
function addFive(num) {
  return num + 5;
}

console.log('addFive output:');
console.log(addFive(3)); // 8

// Convert coupon and the function it returns into fat-arrow functions
function coupon(discount) {
  return function(prices) {
    return prices.map((price) => (price -= price * discount));
  };
}

console.log('coupon output:');
console.log(coupon(0.5)([10, 6, 3, 9])); // [ 5, 3, 1.5, 4.5 ]

// Challenge: Can you define the coupon function and its returned function in
// one line?
