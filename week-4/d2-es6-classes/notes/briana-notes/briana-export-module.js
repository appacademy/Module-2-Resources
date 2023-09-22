// console.log(module)
// console.log(module.exports) // {}

// exporting single item
function hello() {
    console.log("HELLOOOOOOOO")
}

// MORE COMMON
// module.exports = hello

// console.log(module.exports) // [Function: hello]



function goodbye() {
    console.log("goodbye....")
}
const variable1 = null

// exporting one or more items

// OPTION 1
// module.exports.hello = hello
// console.log(module.exports) // { hello: [Function: hello] }

// module.exports.goodbye = goodbye
// console.log(module.exports) // { hello: [Function: hello], goodbye: [Function: goodbye] }


// OPTION 2
// module.exports = {hello: hello, goodbye: goodbye}
// console.log("OPTION 2 export", module.exports) // OPTION 2 export { hello: [Function: hello], goodbye: [Function: goodbye] }

// MORE COMMON
module.exports = { hello, goodbye }
// console.log("OPTION 2.5 export", module.exports) // OPTION 2.5 export { hello: [Function: hello], goodbye: [Function: goodbye] }

// module.exports = {hello, goodbye, variable1}
// console.log("with variable", module.exports)



// Exporting as new variable name
// module.exports = {helloBriana: hello, goodbyeBri: goodbye}
// console.log(module.exports) // { helloBriana: [Function: hello], goodbyeBri: [Function: goodbye] }


// LEAST RECOMMENDED
// EXPORTS Variable
// console.log("exports", exports)

// exports.hello = hello
// console.log(module.exports) // { hello: [Function: hello] }


// JS will treat "exports" just like any random variable, no longer referencing module.exports
// exports = hello
// exports = { hello, goodbye }
// console.log("NEW WRONG", module.exports)
