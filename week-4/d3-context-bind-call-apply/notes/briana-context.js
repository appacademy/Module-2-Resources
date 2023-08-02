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
    // console.log("THIS", this)
    // this.filmName = "Whatever"
    // console.log(this)

    return `My friends and I saw the ${opinion} film, ${this.filmName}`
    // return `My friends and I saw the ${opinion} film, ${filmName}`
}


// console.log(sawFilm("scary"))// My friends and I saw the scary film last weekend, undefined

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
// console.log(ttmShowFilm("Some other theater"))
// function style wants to use global obj
// method in class will not allow use of non-Film instances
// JS decides context will be undefined
// keying into something that's undefined =====> TYPEERROR

/*
/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d3-context-bind-call-apply/notes/briana-context.js:39
        return `${theaterName}'s guests watched ${this.filmName}`
                                                       ^
​
TypeError: Cannot read properties of undefined (reading 'filmName')
    at showFilm (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d3-context-bind-call-apply/notes/briana-context.js:39:56)
    at Object.<anonymous> (/Users/brirobin/Desktop/aA-TA/Mod-2/Oct-22-cohort/Module-2-Resources/week-4/d3-context-bind-call-apply/notes/briana-context.js:54:13) */

// function something(word, cb) {
//     cb(word)
// }

// something("hello", ttmFilm.showFilm)

// Bind

// POJO to regular func
// POJO that has filmName property
const eeFilm = {
    filmName: "Everything Everywhere"
}

const eeSawFilm = sawFilm.bind(eeFilm)
// console.log(filmPOJOSawFilm("mind-blowning"))
// THIS { filmName: 'Everything Everywhere' }
// My friends and I saw the mind-blowning film, Everything Everywhere

// instance to regular func
// const ttmSawFilm = sawFilm.bind(ttmFilm)
// console.log(ttmSawFilm("scary"))
// My friends and I saw the scary film, Talk to Me

// POJO to method from Film class
const eeShowFilm = ttmFilm.showFilm.bind(eeFilm)
// const eeShowFilm = showFilm.bind(eeFilm) // Ref Error
// console.log(eeShowFilm("Cat Theater"))
// Cat Theater's guests watched Everything Everywhere



// Call and Apply

// const ttmSawFilm = sawFilm.bind(ttmFilm)
// console.log(ttmSawFilm("scary"))

// const returnedFromSawFilm = sawFilm.bind(ttmFilm)("scary")
// console.log(returnedFromSawFilm)

// let ttmSawFilmCall = sawFilm.call(ttmFilm, "scary")
// console.log(ttmSawFilmCall) // My friends and I saw the scary film, Talk to Me

// let ttmSawFilmApply = sawFilm.apply(ttmFilm, ["scary"])
// console.log(ttmSawFilmApply) // My friends and I saw the scary film, Talk to Me




// You can also bind arguments but keep in mind that
// if you try to pass in other unexpected arguments during the bound call,
// they won't be used
const ttmSawFilm2 = sawFilm.bind(ttmFilm, "crazy")
console.log(ttmSawFilm2()) // My friends and I saw the crazy film, Talk to Me
console.log(ttmSawFilm2("ridiculous")) // My friends and I saw the crazy film, Talk to Me


function sawFilmMoreOpinions(opinion, opinion2) {

    return `My friends and I saw the ${opinion} and ${opinion2} film, ${this.filmName}`
}

const ttmSawFilm3 = sawFilmMoreOpinions(ttmFilm, "crazy")
console.log(ttmSawFilm3()) // My friends and I saw the crazy and undefined film, Talk to Me
console.log(ttmSawFilm3("ridiculous")) // My friends and I saw the crazy and ridiculous film, Talk to Me
