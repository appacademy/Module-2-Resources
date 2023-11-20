function sawFilm(opinion) {
    // console.log("THIS FILMNAME ====>", this.filmName)
    // console.log("THIS", this)

    return `My friends and I saw the ${opinion} film, ${this.filmName}`
}

class Film {
    constructor(filmName, releaseYear) {
        this.filmName = filmName
        this.releaseYear = releaseYear
    }

    showFilm(theaterName) {
        console.log("THIS ====>", this)
        return `${theaterName}'s guests watched ${this.filmName}`
    }
}

// Bind returns a new function with context bound

// Call and Apply returns the return value of that bound function

// Call - comma separated arguements
const knowing = new Film("Knowing", 2011)

const knowingSawFilm = sawFilm.bind(knowing)
// console.log(knowingSawFilm("apocalyptic")) // My friends and I saw the apocalyptic film, Knowing


const knowingSawFilmCall = sawFilm.call(knowing, "apocalyptic")
console.log(knowingSawFilmCall) // My friends and I saw the apocalyptic film, Knowing


// Apply - only 2 arguments, first is context, second is array of any number of arguments
const menu = {
    filmName: "The Menu"
}

const menuSawFilmApply = sawFilm.apply(menu, ["Interesting"])
console.log(menuSawFilmApply) // My friends and I saw the Interesting film, The Menu
