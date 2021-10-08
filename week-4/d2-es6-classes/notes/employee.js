//Shared Function
function formatDollars(num) {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});
	return formatter.format(num);
}


//Employee base class
class Employee {
	constructor(name, department, hourlyRate, fullTime) {
		this.name = name;
		this.department = department;
		this.hourlyRate = hourlyRate;
		this.fullTime = fullTime;
	}
	//instance method
	getYearlySalary() {
		const workingWeekPerYear = 50;
		if (this.fullTime) {
			//assume full-time workers are salary exempt, so paid only for 40 hours
			return 40 * this.hourlyRate * workingWeekPerYear;
		} else {
			//assume part-time workers work an average of 25 hours per week
			return 25 * this.hourlyRate * workingWeekPerYear;
		}
	}
	//instance method
	toString() {
		return (
			"Employee: " +
			this.name +
			", " +
			this.department +
			", " +
			formatDollars(this.hourlyRate) +
			"/hr, " +
			(this.fullTime ? "Full Time" : "Part Time") +
			", " +
			formatDollars(this.getYearlySalary())
		);
	}
	//static method (part of class)
	static getDepartmentCost(employees, department) {
		const deptEmployees = employees.filter((employee) => {
			return employee.department === department;
		});
		let total = 0;
		for (let i = 0; i < deptEmployees.length; i++) {
			total += deptEmployees[i].getYearlySalary();
		}
		return total;
	}
}



class Manager extends Employee {
	constructor(name, department, yearlyBonus) {
		super(name, department, 25.25, true);
		this.yearlyBonus = yearlyBonus;
	}
	//instance method
	getYearlySalary() {
		return super.getYearlySalary() + this.yearlyBonus;
	}
	//instance method
	toString() {
		return (
			"Manager: " +
			this.name +
			", " +
			this.department +
			", " +
			formatDollars(this.hourlyRate) +
			"/hr, " +
			formatDollars(this.yearlyBonus) +
			", " +
			formatDollars(this.getYearlySalary())
		);
	}
}



// Fake Company = names from https://www.name-generator.org.uk/quick/
const employees = [
	new Employee("Jessie Blackburn", "Marketing", 12.5, true),
	new Employee("Sulaiman Long", "Marketing", 8.5, true),
	new Employee("Nansi Mccall", "Marketing", 8.5, false),
	new Employee("Jawad Hamer", "Marketing", 8.5, false),
	new Employee("Oskar Walter", "Product Development", 18.5, true),
	new Employee("Kathy Mcfarland", "Product Development", 16.5, true),
	new Employee("Rosemary Kouma", "Product Development", 16.5, true),
	new Employee("Loren Kirby", "Product Development", 14.5, true),
	new Employee("Alaina Sinclair", "Product Development", 10.5, false),
	new Employee("Chyna Sampson", "Product Development", 10.5, false),
	new Employee("Shelby Joyner", "Product Development", 8.5, false),
	new Employee("Kristin Randall", "Product Development", 8.5, false),
	new Employee("Rebecca Humphries", "Product Development", 8.5, false),
	new Employee("Alfie-Jay Brewer", "Product Development", 8.5, false),
	new Manager("Raul Penn", "Product Development", 10000),
];



//For debugging
// console.log(employees[0]);
// // console.log(employees[employees.length - 1]);
// console.log("First " + employees[0]);

console.log(JSON.stringify(employees[0]))
// console.log("Last " + employees[employees.length - 1]);
// //to test static methods
const mktgCost = Employee.getDepartmentCost(employees, "Marketing");
console.log("Marketing Cost");
console.log(formatDollars(mktgCost));
const prodCost = Employee.getDepartmentCost(employees, "Product Development");
console.log("Product Development Cost");
console.log(formatDollars(prodCost));

