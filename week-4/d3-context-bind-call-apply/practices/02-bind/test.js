// Your code here
const Employee = require('./employee');

const john = new Employee('John Wick', 'Dog Lover');
// sayName()
setTimeout(john.sayName.bind(john), 2000);
setTimeout(john.sayOccupation.bind(john), 3000);

// setTimeout(() => {
//   john.sayName()
// })
