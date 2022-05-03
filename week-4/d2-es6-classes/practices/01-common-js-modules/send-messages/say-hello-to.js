const sayMessage = require('../messages/say-message');

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

module.exports = sayHelloTo;


// class Dog {};
// module.exports = Dog;


// const Dog = require('file-path');