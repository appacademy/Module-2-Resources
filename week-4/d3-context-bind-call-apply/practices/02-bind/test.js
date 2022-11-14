const Employee = require('./employee');

const john = new Employee('John Wick', 'Dog Lover');

const sayName = john.sayName.bind(john);

// setTimeout(john.sayName, 2000);
// setTimeout(() => {
//     john.sayName()
// }, 2000);

setTimeout(john.sayOccupation.bind(john), 3000);
