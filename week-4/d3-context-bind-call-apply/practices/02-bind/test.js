// Your code here
const Employee = require('./employee');

const john = new Employee('John Wick', 'Dog Lover');
//           sayName()
// const sayNameBound = john.sayName.bind(john)
// setTimeout(sayNameBound, 2000)
setTimeout(john.sayName.bind(john), 2000);

setTimeout(john.sayOccupation.bind(john), 3000);

// setTimeout(() => {
//     john.sayName();
// }, 2000);

// function adder(num1, num2) {
//     return num1 + num2;
// }

// const boundAdder = adder.bind({}, 2, 2);

// console.log(boundAdder())
// console.log(boundAdder())
// console.log(boundAdder())
// console.log(boundAdder())
// console.log(adder(3, 6))
