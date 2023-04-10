// function add(num1, num2){
//     console.log(num1 + num2)
// }

// add(1, 2)
// try {
//     const puppy = "puppy";
//     console.log(pupppy); 

// } catch(error) {
//     console.error(error.message)
// }

// console.log('howdy')


// function callPuppy() {
//     const puppy = "puppy";
// }
// console.log(puppy); // puppy is not in scope, it was created in the callPuppy function

// let dog; // Remember unassigned variables are undefined!
// dog(); // TypeError: dog is not a function

try {
    const puppy = "puppy";
    puppy = "apple"; // TypeError: Assignment to constant variable.
} catch (e){
    console.error(error)
}


function adder(arr) {
   
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        try {
            sum += arr[i]
        } catch(e) {
            console.error(e.message)
        }
        
    }
    return sum;
}

console.log(adder([1,2,3,4,5]));
// try {
// } catch(e) {
//     console.error(e.message);
// }