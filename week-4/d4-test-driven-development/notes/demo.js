// try {
//   function add(num1, num2) {
//     console.log(num1 + num2 + num3);
//   }

//   add(1, 2);
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   const puppy = "puppy";
//   console.log(pupppy);
// } catch (e) {
//   console.error(e.message);
// }

// try {
//   let dog; // Remember unassigned variables are undefined!
//   dog(); // TypeError: dog is not a function
// } catch (e) {
//   console.error(e.message);
// }

// try {
//   const puppy = "puppy";
//   puppy = "apple"; // TypeError: Assignment to constant variable.
// } catch (e) {
//   console.error(e.message);
// }

function iterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    console.log({ num });
    try {
      const res = num + num2;
      arr[i] = res;
    } catch (e) {
      console.error(e.message);
    }
  }
  return arr;
}

console.log(iterator([1, 2, 3]));
// try {

// } catch (e) {
//   console.error(e.message);
// }
