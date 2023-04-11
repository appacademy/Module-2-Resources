const Employee = require('./employee');
const Manager = require('./manager');

let hobbes = new Manager('Hobbes', 1000000, 'Founder');
let calvin = new Manager('Calvin', 130000, 'Director', hobbes);
let susie = new Manager('Susie', 100000, 'TA Manager', calvin);
lily = new Employee('Lily', 90000, 'TA', susie);
clifford = new Employee('Clifford', 90000, 'TA', susie);

console.log(hobbes.calculateBonus(0.05)); // 70500
console.log(calvin.calculateBonus(0.05)); // 20500
console.log(susie.calculateBonus(0.05)); // 14000
console.log(lily.calculateBonus(0.05)); // 4500
console.log(clifford.calculateBonus(0.05)); // 4500

console.log(hobbes instanceof Manager) // true
console.log(lily instanceof Manager) // false
