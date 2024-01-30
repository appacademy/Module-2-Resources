
const sayHelloTo = require('../send-messages/say-hello-to');

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

giveMessageToMrsPotato("Hi Buzz");

module.exports = giveMessageToMrsPotato;
