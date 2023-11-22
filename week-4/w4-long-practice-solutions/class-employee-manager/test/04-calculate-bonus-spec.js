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

    });

    describe('Employee.calculateBonus()', () => {
        it('should multiply the Employee\'s salary by a passed in multiplier', () => {
            expect(mikey.calculateBonus(0.05)).to.equal(4250);
        });
    });

    describe('Manager.calculateBonus()', () => {    
        it('should multiply the Manager\'s salary + a total sub salary of employees under them by a passed in multiplier', () => {
            expect(leo.calculateBonus(0.05)).to.eql(8750);
            expect(splinter.calculateBonus(0.05)).to.eql(13750);
        });  
    });

    describe('Manager._totalSubSalary()', () => {
        it('should be called in calculateBonus()', () => {
            const spy = chai.spy.on(splinter, '_totalSubSalary');
            splinter.calculateBonus();
            expect(spy).to.have.been.called();
        });

        context('if element in this.employees array is an instance of Manager', () => {
            it('should recursively call itself adding all sub-employee\'s salaries to a running sum', () => {
                const totalSubSalary = splinter._totalSubSalary(); // => splinter's only employee is leo, but leo may have employees
                
                expect(totalSubSalary).to.eql(175000)
            });
        });
        context('if element in this.employees array is an instance of Employee', () => {
            it('should add the employee\'s salary to a running sum', () => {
                const totalSubSalary = leo._totalSubSalary();
                
                expect(totalSubSalary).to.eql(85000) // => leo's only employee is mikey
            });
        });
    });
});