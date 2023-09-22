const sawFilm = (opinion) => {
    console.log("THIS ====>", this)
    // console.log("THIS filmName ====>", this.filmName)

    return `My friends and I saw the ${opinion} film, ${this.filmName}`
}




class Film {

    constructor(filmName, releaseYear) {
        this.filmName = filmName
        this.releaseYear = releaseYear
    }

    showFilm = (theaterName) => {
        console.log("THIS in showFilm ====>", this)
        return `${theaterName}'s guests watched ${this.filmName}`
    }
}



const ttm = new Film("Talk to Me", 2023)


const menu = {
    filmName: "The Menu",
    hello: function () {
        console.log(hi)
    }
}



// trying to bind new context to fat arrow function
// context will be locked to global obj, {}
const tryBindTtm = sawFilm.bind(ttm)
// console.log(tryBindTtm("SMTHG")) // My friends and I saw the SMTHG film, undefined


// try binding to new context for fat arrow method: showFilm
const tryBindMenu = ttm.showFilm.bind(menu)
console.log(tryBindMenu("Best Theater")) // Best Theater's guests watched Talk to Me
