const helloMessage = "Greetings! Let us begin!";
const goodByeMessage = "Goodbye!"

// module.exports = helloMessage;

// exports.helloMessage = "Greetings! Let us begin!";

module.exports = {
    helloMessage,
    goodByeMessage
}

// module.exports = {
//     helloMessage: helloMessage
// };
module.exports.helloMessage = helloMessage;


// console.log(module);