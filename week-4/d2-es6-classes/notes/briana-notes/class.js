class Song {
    // constructor: builds new instance
    constructor (name, artist, releaseYear) {
        this.name = name
        this.artist = artist
        this.releaseYear = releaseYear
    }

    // instance method: special function for instances of class
    playSong () {
        console.log(`Playing ${this.name}!`)
    }

    // static method: called on a class, not a specific instance, could do anything
    // doesn't have to be attached to any instance
    static putSongsInPlaylist(...songs) {
        const playlist = []
        console.log(songs) // array of songs

        songs.forEach(song => {
            playlist.push(song.name)
        })
        return playlist
    }
}

// making a new instance (object)
const song1 = new Song("The List", "Moonchild", 2017)
// console.log(song1) // Song { name: 'The List', artist: 'Moonchild', releaseYear: 2017 }

const song2 = new Song("Viva La Vida", "Coldplay", 2008)
// console.log(song2) // Song { name: 'Viva La Vida', artist: 'Coldplay', releaseYear: 2008 }

const song3 = new Song("Mantra", "Makaya McCraven", 2018)

// song1.playSong() // Playing The List!
// song2.playSong() // Playing Viva La Vida!

console.log(Song.putSongsInPlaylist(song1, song3, song2)) // [ 'The List', 'Mantra', 'Viva La Vida' ]
