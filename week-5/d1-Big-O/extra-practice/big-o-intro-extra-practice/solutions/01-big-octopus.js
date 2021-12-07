// O(n^2) time
// O(1) space
function quadraticBiggestFish(fishes) {
  for (let i = 0; i < fishes.length; i++) {
    let fish1 = fishes[i];
    let maxLength = true;
    for (let j = i; j < fishes.length; j++) {
      let fish2 = fishes[j];
      if (fish2.length > fish1.length) maxLength = false;
    }
    if (maxLength) return fish1;
  }
}

// O(n log n) time
// O(1) space
function nlognBiggestFish(fishes) {
  // sort the array longest to shortest
  fishes.sort((a, b) => b.length - a.length);
  //return the first element
  return fishes[0];
}

// O(n) time
// O(1) space
function linearBiggestFish(fishes) {
  let biggestFish = fishes[0];

  for (let fish of fishes) {
    if (fish.length > biggestFish.length) biggestFish = fish;
  }

  return biggestFish;
}

// linear octopus dance
// O(n) time
const tilesArray = [
  "up",
  "right-up",
  "right",
  "right-down",
  "down",
  "left-down",
  "left",
  "left-up",
];

function slowDance(direction, tilesArray) {
  for (let i = 0; i < tilesArray.length; i++) {
    let tile = tilesArray[i];
    if (tile == direction) return i;
  }
}

// constant octopus dance
//use an object for constant lookup
// O(1) time
const tilesObj = {
  up: 0,
  "right-up": 1,
  right: 2,
  "right-down": 3,
  down: 4,
  "left-down": 5,
  left: 6,
  "left-up": 7,
};

function fastDance(direction, tilesObj) {
  return tilesObj[direction];
}
