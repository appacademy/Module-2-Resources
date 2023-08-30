function sawFilm(opinion) {
    console.log("THIS ====>", this) // THIS ====> { filmName: 'Everything Everywhere' }
    // console.log("THIS filmName ====>", this.filmName)

    return `My friends and I saw the ${opinion} film, ${this.filmName}`
}

// Bind POJO to sawFilm func
const ee = {
    filmName: "Everything Everywhere"
}

const eeSawFilm = sawFilm.bind(ee)
// console.log(eeSawFilm("mind-blowing")) // My friends and I saw the mind-blowing film, Everything Everywhere




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



// Bind instance of Film to regular func (sawFilm)

// new func is still expecting argument, like old func
const ttmSawFilm = sawFilm.bind(ttm)
// console.log(ttmSawFilm("scary")) // My friends and I saw the scary film, Talk to Me




// Bind instance of Film to .showFilm method

const ttmShowFilm = ttm.showFilm.bind(ttm)
// console.log(ttmShowFilm("Happy Time"))
// Happy Time's guests watched Talk to Me



// Bind POJO to method in Film class

const eeShowFilm = ttm.showFilm.bind(ee)
console.log(eeShowFilm("Cat Theater"))
// Cat Theater's guests watched Everything Everywhere
