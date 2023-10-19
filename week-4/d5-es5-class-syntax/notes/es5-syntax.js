function Cat(name) {
  this.name = name;
}
let myCat = new Cat("Chatty");

Cat.prototype.sayHello = function () {
  console.log(`my name is ${this.name}`);
};

Cat.prototype.changeName = function (newName) {
  this.name = newName;
  this.sayHello();
};

myCat.sayHello(); // my name is Chatty
myCat.changeName("Midnight"); // my name is Midnight

// console.log(myCat); // Cat { name: 'Midnight' }

console.log(Cat.prototype);

function Unicorn(name, age, color, power) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.power = power;
}

let sparkleButt = new Unicorn("sparkleButt", 3, "pink", "invisibility");
console.log(sparkleButt);
console.log(Unicorn);
