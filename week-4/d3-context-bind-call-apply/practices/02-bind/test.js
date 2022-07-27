// Your code here
const { Employee } = require('./employee');

const john = new Employee('John Wick', 'Dog Lover');

// setTimeout(john.sayName, 2000);
// setTimeout(john.sayOccupation, 3000);

const boundSayName = john.sayName.bind(john);
const boundSayOccupation = john.sayOccupation.bind(john);

setTimeout(boundSayName, 2000);
setTimeout(boundSayOccupation, 3000);