// Your code here
const Employee = require("./employee")

const johnWick = new Employee("John Wick", "Dog Lover")

setTimeout(johnWick.sayName.bind(johnWick), 2000) // John Wick says hello.

setTimeout(johnWick.sayOccupation.bind(johnWick), 3000) // John Wick is a Dog Lover.
