// Error

// Properties
// name
// message
// stack or stack trace


// Syntax Error - caught during compile time
// {
// [

// functio hello() {}
// le num




// Reference Error
// using variables that haven't been declared

// const kitty = "kitty"
// console.log(kirty)

// ReferenceError: kirty is not defined
//     at Object.<anonymous> (......notes/briana/error-handling.js:16:13)


// for (let i = 0; i < 6; i++) {
//     let username = "Briana"
//     console.log(username[i])
// }

// console.log(username)

// ReferenceError: username is not defined
//     at Object.<anonymous> (.....notes/briana/error-handling.js:27:13)




// Type Error
// trying use invalid data types (like invoking nonfunctions or keying into something that doesn't exist)
// attempting to reassign const variable

// let nothingWord = "nothing"
// nothingWord()

// TypeError: nothingWord is not a function
// at Object.<anonymous> (...notes/briana/error-handling.js:41:1)


// const numBelow10 = 4
// numBelow10 = 5


// TypeError: Assignment to constant variable.
// at Object.<anonymous> (....notes/briana/error-handling.js:47:12)


// let obj = { bestie: "Briana"}
// console.log(obj.hello) // undefined
// obj.hello()

// TypeError: obj.hello is not a function
// at Object.<anonymous> (.....notes/briana/error-handling.js:56:5)

// let obj2  // undefined
// obj2.bestie // keying into undefined

// TypeError: Cannot read properties of undefined (reading 'bestie')
// at Object.<anonymous> (....notes/briana/error-handling.js:58:6)



// Making new Error child classes
class BrianaError extends Error {
    constructor(message) {
        super(message)
    }
}

// throw new BrianaError("Take it day by day")



// THROWING ERRORS

function makePlaylist(name, year) {
    // made new instance of Error class
    // throw will stop execution
    if (!name || !year) throw new Error("Need name of playlist and number of songs")
    if (typeof name !== "string") throw new TypeError("name input must be string data type")
    if (typeof year !== "number") throw new TypeError("year input must be number")

    // try {
        name = name.toUpperCase()
    // } catch (e) {
        // console.log(e.message)
    // }

    return {playlistName: name, creationYear: year}
}

// good test case
// const brianaPlaylist = makePlaylist("A few of my favorite songs", 2023)
// console.log(brianaPlaylist) // { playlistName: 'A few of my favorite songs', creationYear: 2023 }

// // bad cases
// const noNamePL = makePlaylist() // Error: Need name of playlist and number of songs
// const badNamePL = makePlaylist({}, 5) // TypeError: name input must be string data type
// console.log(badNamePL)


// TRY/CATCH - try some code, if it hits any error, catch that error, do something else instead
// will not stop code execution in module
try {
    // good
    const brianaPlaylist = makePlaylist("A few of my favorite songs", 2023)
    console.log(brianaPlaylist)

    // bad
    const noNamePL = makePlaylist()
    const badNamePL = makePlaylist({}, 5)
} catch (e) {
    // e is error that was caught // instance of error class, object
    console.error(e.name)
    console.error(e.message)
}

console.log("END OF CODE")
