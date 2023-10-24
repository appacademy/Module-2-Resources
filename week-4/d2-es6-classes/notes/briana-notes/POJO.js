const song1 = {
    name: "The List",
    artist: "Moonchild",
    releaseYear: 2017,
    playSong: function () {
        console.log("Playing The List!")
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

song1.playSong() // Playing The List!


const song2 = {
    name: "Viva La Vida",
    artist: "Coldplay",
    releaseYear: 2008,
    playSong: function () {
        console.log("Playing Viva La Vida!")
    }
}

song2.playSong() // Playing Viva La Vida!
