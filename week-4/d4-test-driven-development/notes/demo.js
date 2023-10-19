// try {
//     function add(num1, num2) {
//     console.log(num1 + num2)
//     }
//     add(1, 2)
// } catch (e) {
//     console.log('should not make it')
// }




// const puppy = "puppy";
// console.log(pupppy); 

// try {
//     function callPuppy() {
//         const puppy = "puppy";
//     }
//     console.log(puppy); // puppy is not in scope, it was created in the callPuppy function

// } catch (error) {
//     console.error(error.name)
// }


// let dog; // Remember unassigned variables are undefined!
// dog(); // TypeError: dog is not a function

class CustomError extends Error {
    constructor(message) {
        super(message);
    }
}

function causingErrors() {
    try {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += i;
        }
    } catch {
        throw new CustomError('hey you need an array')
    }

}

try {
    causingErrors()
} catch (e) {
    console.error(e.message)
}


// console.log('hey dan')

function login (email, password) {
    // some code
}

function lockOut() {
     
}   

try {
    login('goodEmail', 'goodPassword')
    login('email', 'password')
} catch {
    lockOut()
}


