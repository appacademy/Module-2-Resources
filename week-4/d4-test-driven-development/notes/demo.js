// add(1, 2)

// try {
//   const puppy = 'puppy';
//   console.log(pupppy);
// } catch {
//   throw new ReferenceError("Why can't you spell puppy?");
// }

// function callPuppy() {
//   const puppy = 'puppy';
// }
// console.log(puppy); // puppy is not in scope, it was created in the callPuppy function
// console.log('here');

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

// let dog; // Remember unassigned variables are undefined!
// dog(); // TypeError: dog is not a function

// let puppy = 'puppy';
// puppy = 'apple'; // TypeError: Assignment to constant variable.

function login(credential, password) {
  return {
    credential,
    password,
  };
}

try {
  login('', 'spd9iurhewjnfe');
} catch (e) {
  console.error(e.message);
}

function adder(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    try {
      sum += num;
    } catch (e) {
      console.error(e);
    }
  }
  return sum;
}

console.log(adder([1, 2, 3]));
// try {
// } catch (e) {
//   console.error(e);
// }
