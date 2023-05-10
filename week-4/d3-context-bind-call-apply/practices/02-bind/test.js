// Your code here
const Employee = require("./employee");

const john = new Employee("John Wick", "Dog Lover");

const sayNameBound = john.sayName.bind(john);
//          sayNameBound
setTimeout(sayNameBound, 2000);
//              sayOccupationBound
setTimeout(john.sayOccupation.bind(john), 3000);

// function anonFunc(arg1, arg2, arg3, arg, argN) {

// }

// const boundAnon = anonFunc.bind({}, arg1, arg2, arg3, ...)
