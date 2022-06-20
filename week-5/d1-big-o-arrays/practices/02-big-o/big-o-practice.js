// Time complexity: O(?)
// Space complexity: O(?)
function printAnimals(animals) {
    for (let i = 0 ; i < animals.length ; i++) {
      console.log(animals[i]);
    }
}

// Print out all the animals twice
// Time complexity: O(?)
// Space complexity: O(?)
function printAnimalsTwice(animals) {
    for (let i = 0 ; i < animals.length ; i++) {
        console.log(animals[i]);
    }
    for (let j = 0 ; j < animals.length ; j++) {
        console.log(animals[j]);
    }
}

// Print all possible pairs of animals
// Time complexity: O(?)
// Space complexity: O(?)
function printAnimalPairs(animals) {
    for (let i = 0 ; i < animals.length ; i++) {
        for (let j = 0 ; j < animals.length ; j++) {
            console.log(`${animals[i]} - ${animals[j]}`);
        }
    }
}

// Return an array containing all possible pairs of animals
// Time complexity: O(?)
// Space complexity: O(?)
function getAnimalPairs(animals) {
    const pairs = [];
    for (let i = 0 ; i < animals.length ; i++) {
        for (let j = 0 ; j < animals.length ; j++) {
            pairs.push([animals[i], animals[j]]);
        }
    }
    return pairs;
}


// Return an array containing all possible pairs of animals
// Time complexity: O(?)
// Space complexity: O(?)
function getAnimalTriples(animals) {
    const triples = [];
    for (let i = 0 ; i < animals.length ; i++) {
        for (let j = 0 ; j < animals.length ; j++) {
            for (let k = 0 ; k < animals.length ; k++) {
                triples.push([animals[i], animals[j], animals[k]]);
            }
        }
    }
    return triples;
}

// Returns the index of the animal if it is in the array
// Returns -1 if it is not in the array
// Time complexity: O(?)
// Space complexity: O(?)
function findAnimal(animals, target) {
    for (let i = 0 ; i < animals.length ; i++) {
        if (animals[i] === target) return i;
    }
    return -1;
}
