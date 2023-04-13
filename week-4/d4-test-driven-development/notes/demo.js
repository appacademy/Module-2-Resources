class NotNumberError extends Error {
    constructor(...params) {
        super(params )
    }
}


function add(num1, num2){
    try {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new NotNumberError('Input must be a number');
        }
    } catch (e) {
        console.error(e.message)
    }
    console.log(num1 + num2)
}

add('1', 2)
// try {
//     add(1, 2);
//     // add(1, '2')

// } catch (error) {
//     console.error(error)
//     // console.log('hello world')
// }

// const puppy = "puppy";
// console.log(pupppy); 

// try {
//     function callPuppy() {
//         const puppy = "puppy";
//     }
//     console.log(puppy); 
// } catch(error) {
//     console.error(error);
// }


// let dog; // Remember unassigned variables are undefined!
// dog(); // TypeError: dog is not a function

// const puppy = "puppy";
// puppy = "apple"; // TypeError: Assignment to constant variable.

// function funStuff(str) {
//     const arr = str.split('')
//     return arr;
// }

// try {
//     funStuff(4)
// } catch (err) {
//     console.log(err.message)
//     // throw new Error('what are you doing?')
// }



// function login(username, password) {
//     try {
//         // send this info to the server
//         // log the user in
//     } catch(e) {
//         // send error message back to the user
//     }
// }

// "Incorrect username or password"