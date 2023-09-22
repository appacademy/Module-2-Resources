// function add(num1, num2){
//     console.log(num1 + num2)

// }
// add(1, 2);

// const puppy = "puppy";
// console.log(pupppy); 

// function callPuppy() {
//     const puppy = "puppy";
// }
// console.log(puppy); // puppy is not in scope, it was created in the callPuppy function

// let dog; // Remember unassigned variables are undefined!
// dog(); // TypeError: dog is not a function

// const puppy = "puppy";
// puppy = "apple"; // TypeError: Assignment to constant variable.

class NotAStringError extends Error {
    constructor(message) {
        super(message)
    }
}

function funStuff(str) {
    if (typeof str !== 'string') {
        throw new NotAStringError("Hey that's not a string!!!")
    }
    const arr = str.split('')

        if (true) {
            let cow = 'moo';
            console.log(cow)
        }

   

    return arr;
}

funStuff('hello')
// try {
//     funStuff('hello')
//     funStuff(4)
// } catch (err) {
//     console.error(err.message)
//     // throw new Error('what are you doing?')
// }
// try {

// } catch (error) {

// }

