const sayMessage = require('../messages/say-message')
// const { sayMessage } = require('../messages/say-message')
// console.log(sayMessage)


function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

module.exports = sayHelloTo