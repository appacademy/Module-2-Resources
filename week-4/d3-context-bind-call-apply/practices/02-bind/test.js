// Your code here
const Employee = require('./employee');

let jWick = new Employee('John Wick', 'Dog Lover');

// setTimeout(jWick.sayName, 2000);
// setTimeout(jWick.sayOccupation, 2000);

let boundSayName = jWick.sayName.bind(jWick);
let boundSayOccupation = jWick.sayOccupation.bind(jWick);

setTimeout(boundSayName, 2000);
setTimeout(boundSayOccupation, 2000);