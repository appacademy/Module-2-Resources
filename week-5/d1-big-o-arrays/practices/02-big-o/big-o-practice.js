animals = [
    'alligator',
    'bear',
    'cat',
    'dog',
    'elephant',
    'fish',
    'goose',
    'hamster',
    'iguana',
    'jaguar',
    'kangaroo',
];

// Count how many animals are in the list
// Time complexity: O(n)
// Space complexity: O(1)
function countAnimals(animals) {
    let count = 0;  // integer 8 bytes => constant space
    for (let i = 0; i < animals.length; i++) { // O(n) time
        count++; // O(1) time
    }
    return count;
}

// Count how many animals are in the list
// Time complexity: O(1)
// Space complexity: O(1)
function countAnimals2(animals) {
    return animals.length;
}

// Print the first 10 animals in the list
// Time complexity: O(10) => O(1)
// Space complexity: O(1)
function printTenAnimals(animals) {
    if (animals.length < 10) {
        throw Error('not enough animals');
    }

    console.log(animals[0]);
    console.log(animals[1]);
    console.log(animals[2]);
    console.log(animals[3]);
    console.log(animals[4]);
    console.log(animals[5]);
    console.log(animals[6]);
    console.log(animals[7]);
    console.log(animals[8]);
    console.log(animals[9]);
}

// Print out all the animals
// Time complexity: O(n)
// Space complexity: O(1)
function printAnimals(animals) {
    for (let i = 0; i < animals.length; i++) {
        console.log(animals[i]);
    }
}

// Print out all the animals twice
// Time complexity: O(2n) => O(n)
// Space complexity: O(1)
function printAnimalsTwice(animals) {
    for (let i = 0; i < animals.length; i++) { // O(n)
        console.log(animals[i]);
    }
    for (let j = 0; j < animals.length; j++) { // O(n)
        console.log(animals[j]);
    }
}

// Print all possible pairs of animals
// Time complexity: O(n^2)
// Space complexity: O(1)
function printAnimalPairs(animals) {
    for (let i = 0; i < animals.length; i++) {  // O(n)
        for (let j = 0; j < animals.length; j++) {  // O(n)
            console.log(`${animals[i]} - ${animals[j]}`);
        }
    }
}

// Return an array containing all possible pairs of animals
// Time complexity: O(n^2)
// Space complexity: O(2n^2) => O(n^2)
function getAnimalPairs(animals) {
    const pairs = []; // O(n^2) space
    for (let i = 0; i < animals.length; i++) {  // O(n) time
        for (let j = 0; j < animals.length; j++) {  // O(n) time
            pairs.push([animals[i], animals[j]]);  // O(1) time
        }
    }
    return pairs;
}

// Return an array containing all possible pairs of animals
// Time complexity: O(n^3)
// Space complexity: O(n^3)
function getAnimalTriples(animals) {
    const triples = []; // O(n^3)
    for (let i = 0; i < animals.length; i++) {  // O(n) time
        for (let j = 0; j < animals.length; j++) {  // O(n) time
            for (let k = 0; k < animals.length; k++) {  // O(n) time
                triples.push([animals[i], animals[j], animals[k]]);
            }
        }
    }
    return triples;
}

// Returns the index of the animal if it is in the array
// Returns -1 if it is not in the array
// Time complexity: O(n)
// Space complexity: O(1)
function findAnimal(animals, target) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i] === target) return i;
    }
    return -1;
}
