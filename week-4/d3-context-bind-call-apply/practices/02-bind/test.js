// Your code here
const Employee = require('./employee');

const john = new Employee('John Wick', 'Dog Lover');

// john.sayName()
//   sayNameFunc()
// const sayNameFunc = john.sayName.bind(john);

// setTimeout(sayNameFunc, 2000)
// setTimeout(() => {
//     john.sayName()
// }, 2000)
setTimeout(john.sayName.bind(john), 2000)

setTimeout(john.sayOccupation.bind(john), 3000)
