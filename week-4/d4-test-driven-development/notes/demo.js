// function add(num1, num2){
//     console.log(num1 + num2
// }

// add(1, 2)

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

function funStuff(str) {
    try{
        const arr = str.split('')
        return arr;
    } catch(e) {
        if (e instanceof TypeError) {
            console.log('input must be an array')
        } else {
            console.log('not a type error');

        }
    }
}

funStuff('hello');

// try {
//     funStuff(4)
// } catch (err) {
//     console.error(err.message)
//     // throw new Error('what are you doing?')
// }

