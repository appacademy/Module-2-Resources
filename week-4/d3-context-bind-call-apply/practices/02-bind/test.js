const Employee = require('./employee');

const john = new Employee('John Wick', 'Dog Lover');

const sayNameBound = john.sayName.bind(john)
setTimeout(sayNameBound, 2000);
// setTimeout(() => {
//     john.sayName()
// }, 2000);

setTimeout(john.sayOccupation.bind(john), 3000);
