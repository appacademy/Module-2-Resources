const { helloMessage } = require('./hello-message');
// const helloMessage = require('./hello-message'); // if we did not export an object

function sayMessage(message) {
  console.log(`"${message}"`)
  // return `"${message}"`
}

sayMessage(helloMessage);

module.exports = sayMessage;