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

const ttm = new Film("Talk to Me", 2023)

// BIND - returns new function that will maintain the same context regardless of where it was invoked

// POJO to regular func
const eePOJO = {
    filmName: "Everything Everywhere"
}

const eeSawFilmBound = sawFilm.bind(eePOJO)
// console.log(eeSawFilmBound("mind-blowing")) // My friends and I saw the mind-blowing film, Everything Everywhere


// film instance to regular func
const ttmSawFilmBound = sawFilm.bind(ttm)
// console.log(ttmSawFilmBound("scary")) // My friends and I saw the scary film, Talk to Me


// POJO to instance method
const eeShowFilmBound = ttm.showFilm.bind(eePOJO)
console.log(eeShowFilmBound("Cat Theater")) // Cat Theater's guests watched Everything Everywhere


// film instance to instance method
const ttmShowFilmBound = ttm.showFilm.bind(ttm)
console.log(ttmShowFilmBound("Briana Theater")) // Briana Theater's guests watched Talk to Me
