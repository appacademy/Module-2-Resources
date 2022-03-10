// Your code here
const { Employee } = require('./employee')

const john = new Employee('john wick', 'Dog Lover')

let sayNameBound = john.sayName.bind(john)
let sayOccupationBound = john.sayOccupation.bind(john)

setTimeout(sayNameBound, 2000)
setTimeout(sayOccupationBound, 3000)