// Importing single item, from single exports
// const hello = require("./briana-export")

// Importing multiple items, from exports object
const { hello, goodbye } = require("./briana-export")

// aliasing
const { adding: badAdding } = require("../import-export/adding")


hello() // HELLO FROM THE OTHER SIIIIDE
goodbye() // BYE BYE BYE!!

// console.log(badAdding(1, 2))
