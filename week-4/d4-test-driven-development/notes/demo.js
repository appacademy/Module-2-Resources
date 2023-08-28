// funtion add(num1, num2){
//     console.log(num1 + num2)
// }

// add(1, 2)
// try {
//     const puppy = "puppy";
//     console.log(pupppy); 

//     function callPuppy() {
//         const puppy = "puppy";
//     }
//     console.log(puppy); // puppy is not in scope, it was created in the callPuppy function
    
// } catch (error) { 
//     console.error(error.message)
//     // console.log('hey')
// }

// console.log('We made it!!!')

// let dog; // Remember unassigned variables are undefined!
// dog(); // TypeError: dog is not a function

// try {
//     const puppy = "puppy";
//     puppy = "apple"; // TypeError: Assignment to constant variable.

// } catch (e){
//     console.error(e.message)
// }



// console.log(sumDiv())

function funStuff(str) {

    if (typeof str !== 'string') {
        throw new Error('what are you doing?')
    } else {
        const arr = str.split('')

        return arr;
    }

}

try {
    funStuff('shane')
    funStuff(4)
} catch (err) {
    console.log(err.message)
    // throw new Error('what are you doing?')
}

// function login(email, password) {
//     const obj = {email, password}

//     fetch('/', obj);


// }


// try {
//     login('shane', 'wojdkjnf2023845')
// } catch (e) {
//     console.error(e.message);
// }