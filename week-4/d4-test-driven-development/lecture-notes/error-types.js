/*

In JavaScript the Error constructor function is responsible for creating different instances of Error objects. The Error object is how JavaScript deals with runtime errors and the type of error created and thrown will attempt to communicate why that error occurred.

*/

// * Creating our own errors
// * syntax - new Error([message[, fileName[, lineNumber]]])

const myError = new Error("I am an error");

// console.log(myError);// Error: I am an error

// We can throw our own errors

function giveMeNumber(num) {
  if (typeof num !== "number") {
    throw new Error("Thats NAN");
  } else {
    return "NICE Numba!";
  }
}

// console.log(giveMeNumber(12));
// console.log(giveMeNumber('hehehe'));// Error: Thats NAN

// * What if we dont want to stop the execution of our code?
// * use try/catch block
// * syntax

try {
  // statements that will be attempted to here
} catch (error) {
  // if an error is thrown it will be "caught"
  // allowing the program to continue execution
  // these statements will be run and the program will continue!
}

function half(num) {
  if (typeof num !== "number") {
    throw new Error("Thats not a number");
  } else return num / 2;
}

// * this example we dont hit the catch block
// try {
//   console.log(half(100));// 50
// } catch(error) {
//   console.error(error.name + ': ' + error.message);
// }

// try {
//   console.log(half("sup"));
// } catch (error) {
//   console.log("===>", error); // ===> Error: Thats not a number
//   console.error(error.name + ": " + error.message); // Error: Thats not a number
// }

/*
new Error('Thats not a number');
Error: Thats not a number
error.name = Error
error.message = Thats not a number
*/

// console.log('do we make it here');// do we make it here

// *  we can check for specific errors

function wrongReference(arg) {
  console.log(args);
}

// try {
//   wrongReference(21);
//   console.log("call successful"); // we will not see this execute
// } catch (e) {
//   if (e instanceof ReferenceError) {
//     console.error("Looks you got a reference error"); // Looks you got a reference error
//   } else {
//     console.log(e.message);
//   }
// }

// Better comments extension
// ! note we cannot catch syntax errors
// ? question
// * notes

function reverseString(string) {
  return string.split('').reverse().join('');
}


try {
  reverseString('cat');// tahw
  // reverseString(12);// cant reverse a number
} catch(error){
  console.error('Cant reverse a number', error); //Cant reverse a number
} finally {
  console.log('DONE TESTING REVERSE STRING')
}


// couple lines
