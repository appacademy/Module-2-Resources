// Your code here
const Employee = require("./employee");

let john = new Employee("John Wick", "Dog Lover");
let saySomething = john.sayName
setTimeout(saySomething, 2000);
// setTimeout(john.sayOccupation, 3000);

// let sayNameBound = john.sayName.bind(john);
// let sayOccupationBound = john.sayOccupation.bind(john);

// setTimeout(sayNameBound, 2000);
// setTimeout(sayOccupationBound, 3000);
