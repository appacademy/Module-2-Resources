// Your code here
const Employee = require('./employee');

const john = new Employee('John Wick', 'Dog Lover');

const sayNameBound = john.sayName.bind(john);

setTimeout(sayNameBound, 2000);
//                  sayName()
// setTimeout(john.sayName.bind(john), 2000);

// expect(() => func().to.throw(Error)
// expect(john.sayName.bind(john)).to.throw(Error)

setTimeout(john.sayOccupation.bind(john), 3000);