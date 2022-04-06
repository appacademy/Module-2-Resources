// Your code here
const Employee = require('./employee');

let jWick = new Employee("John Wick", "Dog Lover");

// setTimeout(jWick.sayName(), 2000);
// setTimeout(jWick.sayOccupation, 3000);

let sayNameBind = jWick.sayName.bind(jWick);
let sayOccupationBind = jWick.sayOccupation.bind(jWick);

setTimeout(sayNameBind, 2000);
setTimeout(sayOccupationBind, 3000);