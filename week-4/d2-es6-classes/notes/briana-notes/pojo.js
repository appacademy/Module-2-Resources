const song1 = {
    name: "The List",
    artist: "Moonchild",
    releaseYear: 2017,
    playSong: function () {
        console.log("playing The List!")
    }
}

console.log(song1)
/*
{
  name: 'The List',
  artist: 'Moonchild',
  releaseYear: 2017,
  playSong: [Function: playSong]
}
*/

const song2 = {
    name: "Viva La Vida",
    artist: "Coldplay",
    releaseYear: 2008,
    playSong: function () {
        console.log("playing Viva La Vida!")
    }
}

console.log(song2)
