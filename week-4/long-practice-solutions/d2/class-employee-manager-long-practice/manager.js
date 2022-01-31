const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, salary, title, manager) {
		super(name, salary, title, manager);
    this.employees = [];
  }

  addEmployee(employee) {

    this.employees.push(employee);
    return employee;
  }

  bonus(multiplier) {
    return (this.salary + this.totalSubsalary()) * multiplier;
  }
  
  totalSubsalary() {
		let totalSubsalary = 0;

    this.employees.forEach((employee) => {
      if (employee instanceof Manager) {
        totalSubsalary += employee.salary + employee.totalSubsalary();
      } else {
        totalSubsalary += employee.salary;
      }
    });

    return totalSubsalary;
  }
}

module.exports = Manager;