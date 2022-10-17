const chai = require('chai');
const expect = chai.expect;

const Employee = require('../employee');
const Manager = require('../manager');

describe('The Manager class', () => {
    let splinter;

    it('should be a child of the Employee class', () => {
        expect(new Manager()).to.be.an.instanceOf(Employee)
    })

    beforeEach(() => {
        splinter = new Manager('Splinter', 100000, 'Sensei');
    });
    
    describe('constructor function', () => {
        it('should have a name property', () => {
            expect(splinter).to.have.property('name')
        });
        
        it('should have a salary property', () => {
            expect(splinter).to.have.property('salary')
        });
        
        it('should have a title property', () => {
            expect(splinter).to.have.property('title');
        });
        
        it('should have a manager property', () => {
            expect(splinter).to.have.property('manager')
        });
        
        it('manager property should be set to null if no "manager" argument is passed', () => {
            expect(splinter.manager).to.eql(null);
        });

        it('should have employees property', () => {
            expect(splinter).to.have.property('employees');
        });

        it('employees property should be an array', () => {
            expect(splinter.employees).to.eql([])
        });
    });

    describe('addEmployee(employee) instance method', () => {
        it('should add an Employee instance to the employees array', () => {
            const leo = new Employee('Leonardo', 90000, 'Ninja');
            
            expect(splinter.employees).to.eql([]);
            
            splinter.addEmployee(leo);
            
            expect(splinter.employees).to.eql([leo])
        });
    });
});