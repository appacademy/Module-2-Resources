// Your code here
const Employee = require('./employee');

const john = new Employee('John Wick', 'Dog Lover');
        // => sayNameFunc()
setTimeout(john.sayName.bind(john), 200)

// setTimeout(() => {
//     john.sayName();
// }, 2000);

setTimeout(john.sayOccupation.bind(john), 300);

// function adder(num1, num2) {
//     console.log(num1 + num2);
// }

// const adderFuncBound = adder.bind({}, 6843473, 549827)

// adderFuncBound();
// adderFuncBound();
// adderFuncBound();
// adderFuncBound();
