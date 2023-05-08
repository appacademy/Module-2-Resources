// funtion add(num1, num2){
//     console.log(num1 + num2)
// }

// add(1, 2)

// const puppy = "puppy";
// console.log(pupppy); 

// function sumDiv(n1, n2) {
    
    
// }

// console.log(sumDiv())

function funStuff(str) {
    const arr = str.split('')
    return arr;
}

try {
    funStuff(4)
} catch (err) {
    console.log(err.message)
    // throw new Error('what are you doing?')
}

const taco = new Array(4).fill(null)
console.log(taco)