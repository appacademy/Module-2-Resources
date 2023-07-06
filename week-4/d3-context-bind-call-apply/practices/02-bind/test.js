// Your code here
const Employee = require('./employee');

const john = new Employee('John Wick', 'Dog Lover');
// sayNameFunc
setTimeout(john.sayName.bind(john), 2000);
setTimeout(john.sayOccupation.bind(john), 3000);

// let a = setTimeout(john.sayName, 2000);
// // console.log(a)
// a.name = john.name
// console.log(a)

// setTimeout(function () {
//   john.sayName()
// }, 2000)

// console.log(john.sayName())
// console.log(john.sayOccupation())