class Song {
    // constructor gives properties to instances
    constructor(name, artist, releaseYear) {
        this.name = name
        this.artist = artist
        this.releaseYear = releaseYear
        // this.numOfPlays = 0
    }

    // instance method definition
    playSong () {
        console.log(`playing ${this.name}!`)
    }

    // static method
    static putSongInPlaylist(...songs) {
        const playlist = []
        // console.log(songs) // ===> array

        songs.forEach(song => {
            playlist.push(song.name)
        })

        return playlist
    }
}

            // Making new instances of the class
const song1 = new Song("The List", "Moonchild", 2017)
// console.log(song1)
// Song { name: 'The List', artist: 'Moonchild', releaseYear: 2017 }

const song2 = new Song("Viva La Vida", "Coldplay", 2008)
// console.log(song2)
// Song { name: 'Viva La Vida', artist: 'Coldplay', releaseYear: 2008 }




// instance method calls

// let arr = [1, 2, 3]
// arr.map()

// song1.playSong() // playing The List!
// song2.playSong() // playing Viva La Vida!


// static method call
// console.log(Song.putSongInPlaylist(song1, song2)) // [ 'The List', 'Viva La Vida' ]


const song3 = new Song("Mantra", "Makaya McCraven", 2018)
// console.log(song3 instanceof Song) // true
// console.log(arr instanceof Song) // false




// INHERITANCE
class ClassicalSong extends Song {
    constructor(name, artist, releaseYear, period) {
        super(name, artist, releaseYear)
        this.period = period
    }

}

const classical1 = new ClassicalSong("Prelude in C# Minor", "Sergei Rachmaninoff", 1892, "Romantic")

console.log(classical1)
/*
ClassicalSong {
  name: 'Prelude in C# Minor',
  artist: 'Sergei Rachmaninoff',
  releaseYear: 1892,
  period: 'Romantic'
}
 */

classical1.playSong() // playing Prelude in C# Minor!

console.log(ClassicalSong.putSongInPlaylist(song3, classical1)) // [ 'Mantra', 'Prelude in C# Minor' ]
