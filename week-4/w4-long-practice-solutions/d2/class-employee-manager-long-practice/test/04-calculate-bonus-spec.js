const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const Employee = require('../employee');
const Manager = require('../manager');

describe('The calculateBonus(multiplier) method:', () => {
    let splinter;
    let leo;
    let mikey;
    beforeEach(() => {
        splinter = new Manager('Splinter', 100000, 'Sensei');
        leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
        mikey = new Employee('Michelangelo', 85000, 'Grasshopper', leo);

    })
    describe('The Employee class', () => {
        describe('Employee.prototype.calculateBonus', () => {
            it('should multiply the Employee\'s salary by a passed in multiplier', () => {
                expect(mikey.calculateBonus(0.05)).to.equal(4250);
            });
        });
    });

    describe('The Manager class', () => {    
        it('should multiply the Manager\'s salary + a total sub salary of employees under them by a passed in multiplier', () => {
            expect(leo.calculateBonus(0.05)).to.eql(8750);
            expect(splinter.calculateBonus(0.05)).to.eql(13750);
        });  
        describe('has a helper method named _totalSubSalary() that', () => {
            context('if employee in this.employees array is an instance of Manager', () => {
                it('should recursively call itself adding all sub-employee\'s salaries to a running sum', () => {
                    const totalSubSalary = splinter._totalSubSalary(); // => splinter's only employee is leo, but leo may have employees
                    
                    expect(totalSubSalary).to.eql(175000)
                });
            });
            context('if employee in this.employees array is an instance of Employee', () => {
                it('should add the employee\'s salary to a running sum', () => {
                    const totalSubSalary = leo._totalSubSalary();
                    
                    expect(totalSubSalary).to.eql(85000) // => leo's only employee is mikey
                });
            });
        });
    });
});