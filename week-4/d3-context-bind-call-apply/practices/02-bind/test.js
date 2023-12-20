// Your code here
const Employee = require("./employee");

const john = new Employee("John Wick", "Dog Lover");

// const boundFunc = john.sayName.bind(john)

setTimeout(john.sayName.bind(john), 2000);

// setTimeout(() => {
//   john.sayName();
// }, 2000);

setTimeout(john.sayOccupation.bind(john), 3000);

function adder(num1, num2) {
  return num1 + num2;
}

const boundAdder = adder.bind({}, 147374, 1893475);
const boundAdder2 = adder.bind({}, 2, 1);
console.log(adder(3, 5));

console.log(boundAdder());
console.log(boundAdder2());
