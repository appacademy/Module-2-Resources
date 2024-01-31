
/*

  Context
  * Every function scope and context
  * Scope refers to the visibility and availability of variables,
  * Context refers to the value of the this keyword when code is executed.

  Method
  * When learning about objects you previously came across the idea of a method. A method is a function that belongs to an object.

  This
  * There will be times when you will have to know WHICH object a method belongs to.
  * The keyword this exists in every function and it evaluates to the object that is currently invoking that function.
  * So the value of THIS relies entirely on WHERE a function is invoked.

*/


// Function style invocation
// * Function this will be the global object
// * the global object is what is calling the method
// * remember THIS refers to where the function was invoked
// * this function was invoked in the global scope
// * if in browser it would be the browser object
function sayHello(name) {
	console.log(this) // Global object in node, window in browser
	console.log('hello ' + name)
}

// sayHello('maica');


// Plain old javaScript Object
const elephant = {
  name:'funkfreed',
  age: 1,
  whatIsThis: function () {
		console.log(this);
	},
	sayAge: function () {
		console.log(`my name is ${this.name} and i am ${this.age}`);
	}
};

// * Method style invocation
// * elephant object is our context
// * this refers to the elephant object
// * this.name is funkfreed
// * this.age is 1
// elephant.whatIsThis();



// PROBLEMS WITH CONTEXT
const elephant2 = {
  name:'funkfreed',
  age: 1,
  whatIsThis: function () {
		console.log(this);
	},
	sayAge: function () {
		console.log(`my name is ${this.name} and i am ${this.age}`);
	}
};


let sayAgeFunc = elephant2.sayAge;
console.log(sayAgeFunc());// my name is undefined and i am undefined

/*

  What happened?
  * weve lost context
  * We stored in a variable the function by keying into the object
  * Weve lost the context of the elephant
  * before we called the function on the elephant object
  * Now we are calling the function upon the global object
  * in the global object we haven't defined a name or age variable
*/
