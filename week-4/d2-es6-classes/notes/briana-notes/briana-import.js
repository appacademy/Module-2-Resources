// IMPORTING SINGLE
// because exports was
// module.exports = hello
// const hello = require("./briana-export-module")// "." go to same folder

// const hello1 = require("../../notes/briana-notes/briana-export-module") // ".." go to parent folder

// hello() // HELLOOOOOOOO


// IMPORT ONE OR MORE ITEMS
// const { hello , goodbye } = require("./briana-export-module")

// hello() // HELLOOOOOOOO
// goodbye() // goodbye....


// const { hello , goodbye: goodbye11 } = require("./briana-export-module")
// goodbye11()


// LESS COMMON
const moduleExportsObj = require("./briana-export-module")
console.log(moduleExportsObj) // { hello: [Function: hello], goodbye: [Function: goodbye] }
const hello = moduleExportsObj.hello

hello() // HELLOOOOOOOO
