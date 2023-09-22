// Your code here
const Employee = require("./employee")

const john = new Employee("John Wick", "Dog Lover")

setTimeout(john.sayName.bind(john), 2000)

setTimeout(john.sayOccupation.bind(john), 3000)


// let saySomething = function() {
//     john.sayName()
// }
// setTimeout(saySomething, 2000)

// function setTimeout(cb, time) {
//     // after time ms
//     cb()
// }
