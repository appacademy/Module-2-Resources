// Your code here
const Employee = require('./employee');

const john = new Employee('John Wick', 'Dog Lover');
           //johnSayName()
setTimeout(john.sayName.bind(john), 2000);
// setTimeout(() => {
//     john.sayName();
// }, 2000);
// console.log(john)

// const jsn = john.sayName.bind(john);
// jsn()

setTimeout(john.sayOccupation.bind(john), 3000);
