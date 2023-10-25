const sawFilm = (opinion) => {
    console.log("THIS FILMNAME ====>", this.filmName)
    console.log("THIS", this)

    return `My friends and I saw the ${opinion} film, ${this.filmName}`
}

class Film {
    constructor(filmName, releaseYear) {
        this.filmName = filmName
        this.releaseYear = releaseYear
    }

    showFilm = (theaterName) => {
        console.log("THIS ====>", this)
        return `${theaterName}'s guests watched ${this.filmName}`
    }
}

const ttm = new Film("Talk to Me", 2023)
const knowing = new Film("Knowing", 2011)
const menu = {
    filmName: "The Menu"
}
const eePOJO = {
    filmName: "Everything Everywhere"
}

// FAT ARROW functions/methods, lock in context where it was defined

const menuSawFilm = sawFilm.bind(menu)
// console.log(menuSawFilm("interesting")) // My friends and I saw the interesting film, undefined


const eeShowFilm = knowing.showFilm.bind(eePOJO)
// console.log(eeShowFilm("LOL Theater")) // LOL Theater's guests watched Knowing

console.log(ttm)
/*
Film {
  showFilm: [Function: showFilm],
  filmName: 'Talk to Me',
  releaseYear: 2023
}
*/
