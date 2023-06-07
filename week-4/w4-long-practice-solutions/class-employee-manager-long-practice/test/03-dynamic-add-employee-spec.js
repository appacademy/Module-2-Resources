const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const Employee = require('../employee');
const Manager = require('../manager');

describe('Adding employees dynamically', () => {
    let splinter;
    beforeEach(() => {
        splinter = new Manager('Splinter', 100000, 'Sensei');
    });

    it('should be called from the Employee constructor if a manager is passed in', () => {
        const spy = chai.spy.on(splinter, 'addEmployee');
        const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
        
        expect(spy).to.have.been.called()
    });

    it("should add a newly instantiated Employee to the passed in Manager's array", () => {
        const employees = splinter.employees;

        expect(employees).to.eql([]);

        const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
       
        expect(employees).to.eql([leo]);

        const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

        expect(employees).to.eql([leo, raph]);
    });
});