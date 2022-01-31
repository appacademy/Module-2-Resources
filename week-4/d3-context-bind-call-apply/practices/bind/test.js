// Your code here
const Employee = require('./employee')

const john = new Employee('John Wick', 'Dog Lover')

setTimeout(john.sayName.bind(john), 2000)
setTimeout(john.sayOccupation.bind(john), 3000)

let sayNameBound = john.sayName.bind(john)
let sayOccupationBound = john.sayOccupation.bind(john)

// setTimeout(sayNameBound, 2000)
// setTimeout(sayOccupationBound, 3000)