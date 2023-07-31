class Employee {
  constructor(name, salary, title, manager = null) {
    this.name = name;
    this.salary = salary;
    this.title = title;
    this.manager = manager;
    if (manager) manager.addEmployee(this);
  }

  calculateBonus(multiplier) {
    return this.salary * multiplier;
  }
}

module.exports = Employee;
