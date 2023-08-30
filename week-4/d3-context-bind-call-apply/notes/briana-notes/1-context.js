// "use strict"


// Function Invocation Style

// function sawFilm(opinion) {
//     return `My friends and I saw a ${opinion} film last weekend`
// }

// console.log(sawFilm("scary")) // My friends and I saw a scary film last weekend


function sawFilm(opinion) {
    console.log("THIS ====>", this)
    // console.log("THIS filmName ====>", this.filmName)

    // this.filmName = "HELLO"
    // console.log("NEW THIS filmName ====>", this.filmName)

    return `My friends and I saw the ${opinion} film, ${this.filmName}`
}

// Function-style invocation
// console.log(sawFilm("scary")) // My friends and I saw the scary film, undefined

// Since we called sawFilm function style, without "use strict", the context at time of invocation was
// GLOBAL object




// Method Style Invocation

class Film {
    // classes are automatically in "strict mode"

    constructor(filmName, releaseYear) {
        // console.log(this) // Film {}
        this.filmName = filmName
        this.releaseYear = releaseYear

        // console.log(this) // FILM {filmName: 'Talk to Me', releaseYear: 2023}
    }

    showFilm(theaterName) {
        console.log("THIS in showFilm", this)
        return `${theaterName}'s guests watched ${this.filmName}`
    }

}

const ttm = new Film("Talk to Me", 2023)
// console.log(ttm) // Film { filmName: 'Talk to Me', releaseYear: 2023 }

// method style
console.log(ttm.showFilm("Briana Theater")) // Briana Theater's guests watched Talk to Me

// Method-style, context the object/instance method was called on





// Interesting Part

function something(randomWord, cb) {
    cb(randomWord)   // wants context GLOBAL
}

something("hello", ttm.showFilm)

const ttmShowFilm = ttm.showFilm

// THIS in showFilm undefined
ttmShowFilm() // Function style, wants global context, TypeError: Cannot read properties of undefined (reading 'filmName')


// Because function style invocation
// JS wants to use global object, film class doesn't allow use of global object as context,
// JS and Film class fight, They both give up and context is then undefined
