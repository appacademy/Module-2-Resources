// Your code here
const Employee = require("./employee")

const johnWick = new Employee("John Wick", "Dog Lover")

let sayNameBound = johnWick.sayName.bind(johnWick)
setTimeout(sayNameBound, 2000)

// setTimeout(() => {
//     johnWick.sayName()
// }, 2000)

setTimeout(johnWick.sayOccupation.bind(johnWick), 3000)
