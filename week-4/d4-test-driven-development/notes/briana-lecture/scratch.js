/* Error Properties
Error name
Error message
Error Stacktrace
*/


// SyntaxError
// le hello
// funtion hello() {

// }
// {

//SyntaxError: Unexpected identifier
//


// ReferenceError
// variable or function that doesn't exist or out of scope

const kitty = "kitty"
// console.log(kirty)
// ReferenceError: kirty is not defined
// at Object.<anonymous> (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d4-test-driven-development/scratch.js:23:13)

// let username
for (let i = 0; i < 6; i++) {
    let username = "Briana"
    // username = "Briana"
    // console.log(username[i])
}

// console.log(username)
// ReferenceError: username is not defined
// at Object.<anonymous> (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d4-test-driven-development/scratch.js:33:13)



// TypeError
// invalid data types

// variable of a string but want to use it as a function => TypeError
let nothingWord = "nothing word"
// nothingWord()
// TypeError: nothingWord is not a function
//     at Object.<anonymous> (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d4-test-driven-development/scratch.js:45:1)

const numBelow10 = 4
// let numBelow10 = 4
// numBelow10 = 6
// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d4-test-driven-development/scratch.js:50:12)


// try to invoke something that's not invokable
let obj = {bestie: "Briana"}
// obj.hello()
// TypeError: obj.hello is not a function
// at Object.<anonymous> (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d4-test-driven-development/scratch.js:56:5)

// console.log(obj.hello) // undefined
// console.log(hello) // ReferenceError
// console.log(hello())

let obj2 = null
// console.log(obj2.hello)
// TypeError: Cannot read properties of null (reading 'hello')
//     at Object.<anonymous> (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d4-test-driven-development/scratch.js:67:18)



function makePlaylist(name, year) {
    if (!name || !year) {
        throw new Error("Need name of playlist and number of songs!")
    }
    if (typeof name !== "string") {
        throw new TypeError("name input must be string data type")
    }
    if (typeof year !== "number") {
        throw new TypeError("year must be number")
    }


    return {playlistName: name, creationYear: year}
}

// const brianaPlaylist = makePlaylist("These are a few of my faaaaaavorite songs", 2023)
// console.log(brianaPlaylist)
// {
//     playlistName: 'These are a few of my faaaaaavorite songs',
//     creationYear: 2023
// }

// const badPl = makePlaylist()
// console.log(badPl)
// Error: Need name of playlist and number of songs!
//     at makePlaylist (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d4-test-driven-development/scratch.js:75:15)
//     at Object.<anonymous> (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d4-test-driven-development/scratch.js:88:15)


// const badWordPl = makePlaylist({}, 5)
// console.log(badWordPl)

// TypeError: name input must be string data type
//     at makePlaylist (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d4-test-driven-development/scratch.js:78:15)
//     at Object.<anonymous> (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d4-test-driven-development/scratch.js:102:19)


// makePlaylist("heyyyy", "whats up")
// TypeError: year must be number
//     at makePlaylist (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d4-test-driven-development/scratch.js:81:15)
//     at Object.<anonymous> (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d4-test-driven-development/scratch.js:110:1)


// TRY/CATCH Block
// try to run a case
// if you hit error, catch it
// do something else instead

// try {
// const brianaPlaylist = makePlaylist("These are a few of my faaaaaavorite songs", 2023)
// console.log(brianaPlaylist)

// // const badWordPl = makePlaylist({}, 5)
// // console.log(badWordPl)

// makePlaylist("heyyyy", "whats up")

// } catch (error) {
//     console.log("WE'RE IN THE CATCH")
//     console.error(error.message)
// }


function hello(array) {
    array.forEach(name => {
        console.log("hello!!!")
    })

    return "Said hello"
}


hello(["briana", "shane", "mommy"])
hello("briana")

/*
array.forEach(name => {
      ^

TypeError: array.forEach is not a function
    at hello (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d4-test-driven-development/scratch.js:137:11)
    at Object.<anonymous> (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d4-test-driven-development/scratch.js:146:1)
*/

// Maybe use try catch in function to do something else instead of giving us a huge error
