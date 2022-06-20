// Your code here
const Employee = require('./employee');

const johnW = new Employee(
  'John Wick',
  'Dog Lover'
);

// const sayName = function () {
//   // console.log(this);
//   console.log(`${this.name} says hello`);
// }

// sayName();

setTimeout(johnW.sayName, 2000);
setTimeout(johnW.sayOccupation, 3000);

const boundSayName = johnW.sayName.bind(johnW);
// boundSayName();
const boundSayOccupation = johnW.sayOccupation.bind(johnW);

setTimeout(boundSayName, 2000);
setTimeout(boundSayOccupation, 3000);

