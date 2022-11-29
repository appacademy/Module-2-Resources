// Your code here
const Employee = require('./employee');

const john = new Employee('John Wick', 'Dog Lover');


const sayNameBound = john.sayName.bind(john)
// 
setTimeout(sayNameBound, 2000);
// setTimeout(() => {
//     john.sayName()
// }, 2000);

const sayOccupationBound = john.sayOccupation.bind(john);
setTimeout(sayOccupationBound, 3000);