// Your code here

const Employee = require('./employee');
// console.log(Employee);


const john = new Employee('John Wick', 'Dog Lover');

// function sayName(){
//   console.log(`${this} says hello`)
// };

// setTimeout(sayName, 2000);

let sayNameBound = john.sayName.bind(john);
let sayOccupationBound = john.sayOccupation.bind(john);

setTimeout(sayNameBound, 2000);//John Wick says hello
setTimeout(sayOccupationBound, 2000);//John Wick is a Dog Lover
