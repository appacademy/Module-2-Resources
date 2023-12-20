const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, salary, title, manager) {
    super(name, salary, title, manager);
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  calculateBonus(multiplier) {
    return (this.salary + this._totalSubSalary()) * multiplier;
  }

  _totalSubSalary() {
    let total = 0;

    for (let employee of this.employees) {
      if (employee instanceof Manager) {
        total += employee.salary + employee._totalSubSalary();
      } else {
        total += employee.salary;
      }
    }
    return total;
  }
}

module.exports = Manager;
