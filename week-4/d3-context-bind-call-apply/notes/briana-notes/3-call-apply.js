// Bind returns new function with locked in context

// Call and Apply returns a bound function that is immediately invoked

function sawFilm(opinion) {
    console.log("THIS ====>", this)
    // console.log("THIS filmName ====>", this.filmName)

    return `My friends and I saw the ${opinion} film, ${this.filmName}`
}


class Film {

    constructor(filmName, releaseYear) {
        this.filmName = filmName
        this.releaseYear = releaseYear
    }

    showFilm(theaterName) {
        // console.log("THIS in showFilm", this)
        return `${theaterName}'s guests watched ${this.filmName}`
    }
}

const knowing = new Film("Knowing", 2011)

// BEFORE with using bind...
const knowingSawFilm = sawFilm.bind(knowing)
// console.log(knowingSawFilm("apocalyptic")) // My friends and I saw the apocalyptic film, Knowing


// Could do, but not as nice to read
// const knowingSawFilmReturnVal = sawFilm.bind(knowing)("apocalyptic")
// console.log(knowingSawFilmReturnVal) // My friends and I saw the apocalyptic film, Knowing




// NOW with call and apply

// Call
const knowingSawFilmReturnVal = sawFilm.call(knowing, "apocalyptic")
console.log(knowingSawFilmReturnVal)
// My friends and I saw the apocalyptic film, Knowing


// Apply
const menu = {
    filmName: "The Menu"
}

const menuSawFilmApply = sawFilm.apply(menu, ["interesting"])
console.log(menuSawFilmApply)
// My friends and I saw the interesting film, The Menu
