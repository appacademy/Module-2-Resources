const { helloMessage, goodByeMessage } = require('./hello-message');

function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);
// sayMessage(goodByeMessage);

module.exports = {
  sayMessage
};