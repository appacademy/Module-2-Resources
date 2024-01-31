
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
// console.log(sayAgeFunc());// my name is undefined and i am undefined

/*

  What happened?
  * weve lost context
  * We stored in a variable the function by keying into the object
  * Weve lost the context of the elephant
  * before we called the function on the elephant object
  * Now we are calling the function upon the global object
  * in the global object we haven't defined a name or age variable

*/


// HOW TO ENSURE OUR CONTEXT NEVER CHANGES
// * use Bind!
const elephant3 = {
  name:'funkfreed',
  age: 1,
  whatIsThis: function () {
		console.log(this);
	},
	sayAge: function () {
		console.log(`my name is ${this.name} and i am ${this.age}`);
	}
};

// bind
// function.bind(context)
let boundSayAgeFunc = elephant3.sayAge.bind(elephant3)
// boundSayAgeFunc();// my name is funkfreed and i am 1


/*
  What did we do here?
  * We are binding context of the sayAge function to the elephant3 object
  * Now when its called; this refers to elephant3 as opposed to the global object
  * note the use of the bind
  * we are keying into elephant3.sayAge function and binding it to the elephant3 object
  * Syntax
    * Function.bind(context)
    * function = elephant3.sayAge
    * context = elephant3
  * This now refers to elephant3
  * boundSayAgeFunc will now always reference elephant3
  * bind returns a function
*/



// BINDING MULTIPLE CONTEXTS TO CREATE MULTIPLE FUNCS
const elephant4 = {
	name: 'funkfreed',
	age: 1
}

const cat = {
	name: 'mochi',
	age: 2
}

const whale = {
  name:'laboon',
  sayHello: function(){
    console.log(`hello im ${this.name}`);
  }
};

// console.log('==>',whale.sayHello)
// let func = whale.sayHello;
// console.log(func)

function sayAge() {
	console.log(`my name is ${this.name} and i am ${this.age}`);
}


// sayAge();
// Function.bind(context)
let elephantBoundFunc = sayAge.bind(elephant4)
// elephantBoundFunc();// my name is funkfreed and i am 1

let catBoundFunc = sayAge.bind(cat);
// catBoundFunc();// my name is mochi and i am 2

/*
  We have bound a function to different objects
  * elephantBoundFunc holds the sayAge function bound to elephant4
    * this.name would refer to funkfreed
  * catBoundFunc holds the sayAge function bound to cat
    * this.name would refer to mochi

  Common Misconceptions
  * scope: availability of variables at a line in your app
  * context: the value of this
*/



// CAN BIND FUNCS TO WHATEVER OBJECT WE LIKE
const dragon = {
  name: "Smaug",
  sayName: function () {
    console.log("Hello my name is " + this.name);
  }
};

const orc = {
  name:'Azog',
}

// * function.bind(context);

// dragon.sayName();// Hello my name is Smaug

let extractedFunc= dragon.sayName;
// console.log(extractedFunc);
// extractedFunc();

let dragonBoundFunc = dragon.sayName.bind(dragon)
// dragonBoundFunc();// Hello my name is Smaug

let orcBoundFunc = dragon.sayName.bind(orc);
// orcBoundFunc();// Hello my name is Azog

let orcBoundFunc2 = extractedFunc.bind(orc);
// orcBoundFunc2();// Hello my name is Azog



// CONTEXT WITH CLASSES
class Cat {
  constructor(name, age, breed) {
      this.name = name;
      this.age = age;
      this.breed = breed;

  }
  print() {
      console.log(this)
  }

  // ! Talk about when going over arrow functions
  // fatArrowPrint = () => console.log(this)

  static printCats(cats) {
      return cats.forEach(cat => {
          console.log(cat)
      })
  }

}

let obj = {
  name: 'brandon',
  myfunc: function(){
    console.log('hello')
  }
};

let brandon = obj.name;
let func = obj.myfunc;

// console.log(brandon);// brandon
// // console.log(func());// [Function: myfunc]

let newCat = new Cat('pumpkin', 3, 'ragamuffin');
// newCat.print();// Cat { name: 'pumpkin', age: 3, breed: 'ragamuffin' }

let printCat = newCat.print;
// console.log(printCat)
// printCat();



let bindPrintCat = newCat.print.bind(newCat);

bindPrintCat();// Cat { name: 'pumpkin', age: 3, breed: 'ragamuffin' }
