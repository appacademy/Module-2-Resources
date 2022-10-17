// Your code here
const Employee = require('./employee');

const john = new Employee('John Wick', 'Dog Lover');

// const obj = {
//     name: 'shane'
// }

                        //sayName
const sayNameBound = john.sayName.bind(john);

// setTimeout(john.sayName, 2000);
setTimeout(sayNameBound, 2000);

// setTimeout(function() {
//     john.sayName();
// }, 2000);


// setTimeout(john.sayOccupation, 3000);
const sayOccupationBound = john.sayOccupation.bind(john);
setTimeout(sayOccupationBound, 3000);