// Your code here
class Employee {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }

    sayName() {
        console.log(`${this.name} says hello`)
    }

    sayOccupation() {
        console.log(`${this.name} is a ${this.occupation}`)
    }
}

const employee = new Employee('shane', 'teacher');
const employee2 = new Employee('whit', 'teacher');
console.log(employee)
console.log(employee2)

module.exports = Employee;