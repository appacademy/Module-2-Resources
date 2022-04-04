const { sayMessage } = require("../messages/say-message");

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`);
}

sayHelloTo("Woody");

function sayHi(name) {
  console.log(name);
}
// module.exports = sayHelloTo;
//module.exports = sayHi;
module.exports = { sayHelloTo, sayHi };
