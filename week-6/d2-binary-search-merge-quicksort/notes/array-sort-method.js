/*
Array.sort()
*/

const numbers = [5, 6, 4, 3, 2, 0, 1];
const letters = ['C', 'B', 'F', 'A', 'D', 'G', 'E'];
const lettersMix = ['c', 'B', 'F', 'A', 'd', 'g', 'E'];

// console.log(numbers.sort()); // [ 0, 1, 2, 3, 4, 5, 6 ]
// console.log(letters.sort()); // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
console.log(lettersMix.sort()); //

const moreNumbers = [10, 120, 100, 1100, 11];

// console.log('default sort: ', moreNumbers.sort()); // ???

// moreNumbers.sort((a, b) => console.log({ a }, { b }));

function wat(array) {
    for (let i = 0; i < array.length; i++) {
        const ele = `${array[i]}`
        console.log('ele:', ele)

        for (let j = 0; j < ele.length; j++) {
            console.log(`UTF-16 code at ele index ${j}: ${ele.charCodeAt(j)}`);
        }
    }
}

// wat(moreNumbers)
// wat(letters)
// wat(numbers)

/*
compareFunction(a, b) return value sort order
> 0	sort b before a
< 0	sort a before b
*/

// // ascending
// console.log('ascending sort: ', moreNumbers.sort((a, b) => a - b)); // a = 1000 - b = 10 === positive

// // descending
// console.log('descending sort: ', moreNumbers.sort((a, b) => b - a)); // b = 1000 - a = 10 === negative


const petData = [
    {'name': 'Salsa', 'age':10, 'animal': 'cat', 'description': 'calico' },
    {'name': 'Jazz', 'age':7, 'animal': 'cat', 'description': 'tuxedo' },
    {'name': 'Mars', 'age':6, 'animal': 'dog', 'description': 'shepard' },
    {'name': 'Blondie', 'age':12, 'animal': 'dog', 'description': 'labrador' },
    {'name': 'Blues', 'age':5, 'animal': 'cat', 'description': 'tabby' },
    {'name': 'Venus', 'age':3, 'animal': 'dog', 'description': 'husky' },
]

// console.log('Not sorted: ', petData)

function sortPets() {
    return petData.sort((a, b) => {
        if (a.animal === b.animal) return a.age - b.age
        else if (a.animal === 'cat') return 1
        else if (a.animal === 'dog') return -1
    })
}


// console.log('Sorted: ', sortPets())
