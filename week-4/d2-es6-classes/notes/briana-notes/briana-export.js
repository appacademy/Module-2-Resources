// console.log(module.exports) // {}

function hello() {
    console.log("HELLO FROM THE OTHER SIIIIDE")
}

// Export a single item
// module.exports = hello

// console.log(module.exports) // [Function: hello]


function goodbye () {
    console.log("BYE BYE BYE!!")
}

// Export multiple items

// 1.
// module.exports.hello = hello
// module.exports.goodbye = goodbye

// console.log(module.exports) // { hello: [Function: hello], goodbye: [Function: goodbye] }


// 2.
// module.exports = { hello: hello, goodbye: goodbye}
module.exports = { hello, goodbye }
// console.log(module.exports) // { hello: [Function: hello], goodbye: [Function: goodbye] }



// Less common way of exporting, DON'T RECOMMEND
// console.log(exports) // {}
// exports.hello = hello
// exports.goodbye = goodbye
// console.log(exports) // { hello: [Function: hello], goodbye: [Function: goodbye] }

// exports = hello
// console.log(exports) // {}

// console.log("AT THE BOTTOM OF EXPORTS MODULE")
