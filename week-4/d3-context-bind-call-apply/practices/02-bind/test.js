// Your code here
const Employee = require('./employee');

const employee1 = new Employee('John Wick', 'Dog Lover');

// setTimeout(employee1.sayName, 2000);

// setTimeout(() => {
//     employee1.sayName()
// }, 2000);

// const sayName = employee1.sayName.bind(employee1);
// setTimeout(sayName, 2000);

// setTimeout(employee1.sayOccupation, 3000);

const sayOccupationBound = employee1.sayOccupation.bind(employee1);

setTimeout(employee1.sayOccupation.bind(employee1), 3000)

