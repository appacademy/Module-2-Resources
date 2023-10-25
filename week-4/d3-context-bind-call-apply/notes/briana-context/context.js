// "use strict" // protects mutation of global object


// Context will matter at TIME OF INVOCATION
// Function Style Invocation - context: GLOBAL, in most cases

function sawFilm(opinion) {
    // console.log("THIS FILMNAME ====>", this.filmName)
    // console.log("THIS", this)

    return `My friends and I saw the ${opinion} film, ${this.filmName}`
}

// Before context reference
// console.log(sawFilm("scary")) // My friends and I saw a scary film last weekend

// After context reference
// function style invocation, context will be the object that called it
// in most cases, will be GLOBAL OBJECT

// console.log(sawFilm("scary")) // My friends and I saw the scary film, undefined



// Method Style Invocation - context: the instance that called the method

// classes are automatically in "strict mode", the only way to access a class' method is through an instance
class Film {
    constructor(filmName, releaseYear) {
        this.filmName = filmName
        this.releaseYear = releaseYear
    }

    showFilm(theaterName) {
        console.log("THIS ====>", this)
        // giveFilmYear()
        return `${theaterName}'s guests watched ${this.filmName}`
    }

    // giveFilmYear() {
    //     console.log()
    // }
}

const ttm = new Film("Talk to Me", 2023)
// console.log(ttm) // Film { filmName: 'Talk to Me', releaseYear: 2023 }

// method invocation
console.log(ttm.showFilm("Briana Theater")) // Briana Theater's guests watched Talk to Me




let ttmShowFilm = ttm.showFilm
ttmShowFilm("Some Other Theater") // TYPEERROR
// function invocation, JS wants context to be global
// We accessed the functionality through TTM instance
// BUT Film class doesn't want global context, JS only wants global context
// Context is lost, ultimately



// function something(str, cb) {
//     return cb(str) // regular function invocation, want context to be global
// }

// something("hello", ttmShowFilm)
