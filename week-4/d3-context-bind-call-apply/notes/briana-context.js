// "use strict"
// Function style invocation

// Regular function definition, no context
// function sawFilm(opinion) {
//     return `My friends and I saw a ${opinion} film last weekend`
// }

// console.log(sawFilm("scary"))
// My friends and I saw a scary film last weekend


// adding context
function sawFilm(opinion) {
    // console.log("this.filmname: ", this.filmName)
    console.log("THIS", this)
    // this.filmName = "Whatever"
    // console.log(this)

    return `My friends and I saw the ${opinion} film, ${this.filmName}`
    // return `My friends and I saw the ${opinion} film, ${filmName}`
}

// console.log(sawFilm("scary"))// My friends and I saw a scary film last weekend. It was called undefined

// Function style invocation - wants to use GLOBAL OBJECT as context



// Method style invocation
class Film {
    constructor(filmName, releaseYear) {
        this.filmName = filmName
        this.releaseYear = releaseYear
    }

    showFilm(theaterName) {
        // Method will not allow you to use global obj as context
        console.log("THIS", this)
        return `${theaterName}'s guests watched ${this.filmName}`
    }
}

const ttmFilm = new Film("Talk to Me", 2023)
// console.log(ttmFilm) // Film { filmName: 'Talk to Me', releaseYear: 2023 }

// console.log(ttmFilm.showFilm("Briana Theater")) // Briana Theater's guests watched Talk to Me

// Method style invocation - wants to use context of instance it was called on


// PROBLEM
let ttmShowFilm = ttmFilm.showFilm
console.log(ttmShowFilm("Some other theater"))
// function style wants to use global obj
// method in class will not allow use of non-Film instances
// JS decides context will be undefined
// keying into something that's undefined =====> TYPEERROR

/*
/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d3-context-bind-call-apply/notes/briana-context.js:39
        return `${theaterName}'s guests watched ${this.filmName}`
                                                       ^

TypeError: Cannot read properties of undefined (reading 'filmName')
    at showFilm (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d3-context-bind-call-apply/notes/briana-context.js:39:56)
    at Object.<anonymous> (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d3-context-bind-call-apply/notes/briana-context.js:54:13) */


// function something(word, cb) {
//     cb(word)
// }

// something("hello", ttmFilm.showFilm)
