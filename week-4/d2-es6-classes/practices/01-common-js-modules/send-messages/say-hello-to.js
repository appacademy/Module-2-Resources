const sayMessage = require('../messages/say-message');

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
  // console.log('here')
}

sayHelloTo("Woody");
// sayMessage('Howdy')

module.exports = sayHelloTo;