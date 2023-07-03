/*
Context
- every invoked function will have a context
- refers to the value of the keyword `this` within a function
- `this` refers to how a function is invoked
*/

function sayHello(name) {
	console.log(this) // Global object in node, window in browser
	console.log('hello ' + name)
}

sayHello('tony') // hello tony
/*

Code Summary
- with function style invocation, `this` is set to the global object


*/

// METHOD STYLE INVOCATION

const narwhal = {
	name: "Wally",
	age: 20,
	whatIsThis: function () {
		console.log(this);
	},
	sayAge: function () {
		console.log(`my name is ${this.name} and i am ${this.age}`);
	}
};

narwhal.whatIsThis(); // { name: 'Wally', age: 20, ... }
narwhal.sayAge(); // my name is Wally and i am 20

/*

Code Summary
- with method style invocation, we invoke the method with the `narwhal` as
  our context
- `this` inside the method will refer to the `narwhal` object
- `this.name` will be "Wally" and `this.age` will be 20



*/

// PROBLEMS WITH CONTEXT


const narwhal = {
	name: "Wally",
	age: 20,
	sayAge: function () {
		console.log(`my name is ${this.name} and i am ${this.age}`);
	}
};

let sayAgeFunc = narwhal.sayAge;

console.log(this); // Global object
sayAgeFunc() // 'my name is undefined and i am undefined'

/*

Code Summary
- we isolate the `narwhal.saveAge` func by saving to variable `sayAgeFunc`
- thus, we lose the context of the `narwhal`
- `this` inside the `sayAge` func will no longer reference the `narwhal`,
  it will now reference the value of `this` where the `sayAgeFunc` is invoked,
  i.e the Global object


*/

// HOW TO ENSURE OUR CONTEXT NEVER CHANGES

const narwhal = {
	name: "Wally",
	age: 20,
	sayAge: function () {
		console.log(`my name is ${this.name} and i am ${this.age}`);
	}
};

let boundSayAgeFunc = narwhal.sayAge.bind(narwhal);
boundSayAgeFunc(); // my name is Wally and i am 20
/*

Code Summary
- built in JS `Function.bind(context)` method allows us to assign a context, i.e
  a specific value for `this`
- binding allows us to bind context to a function
- we pass `narwhal` as context so `this` inside the `sayAge` func will always
  reference the `narwhal`

*/

// BINDING MULTIPLE CONTEXTS TO CREATE MULTIPLE FUNCS

const narwhal = {
	name: 'wally',
	age: 20
}

const dog = {
	name: 'bodhi',
	age: 5
}

function sayAge() {
	console.log(`my name is ${this.name} and i am ${this.age}`);
}

let narwhalBoundFunc = sayAge.bind(narwhal);
let dogBoundFunc = sayAge.bind(dog);

narwhalBoundFunc(); // my name is wally and i am 20
dogBoundFunc(); // my name is bodhi and i am 5


/*
Code Summary
- the `narwhalBoundFunc` is a version of the `sayAge` func that has a context
  bound to the `narwhal` object
	- `this.name` inside the `sayAge` func will reference `narwhal.name`
- the `dogBoundFunc` is a version of the `sayAge` func that has a context
  bound to the `dog` object
	- `this.name` inside the `sayAge` func will reference `dog.name`


Common Misconceptions
- scope: availability of variables at a line in your app
- context: the value of `this` 
*/


/*
# CONTEXT CODE DEMO


Context
- set every time we invoke a function in js
- the value of `this`
*/

// FUNCTION STYLE INVOCATION

function multiplyByFive(num) {
	console.log(this);
	return num * 5
}

multiplyByFive(2) // GLOBAL OBJECT

/*
Code Summary
- when we invoke a function function style, we're not assigning a specific
  context so the context, i.e `this`, will always be the global object
*/


// METHOD STYLE INVOCATION

const pony = {
  name: "Lucy",
  whatIsThis: function () {
    console.log(this);
  },
  sayName: function () {
    console.log("Hello my name is " + this.name);
  },
  changeName: function (name) {
    this.name = name;
  }
};

pony.whatIsThis() // { name: 'lucy', ... }
pony.sayName(); // 'hello my name is lucy'


/*
Code Summary
- when you invoke a method method style, you set the context to the object
  that you invoke the method on
- `whatisThis` is a method defined on `pony` object, so must call it on 
  the `pony` object
- `this` inside the `whatisthis` method will be the `pony` object
- `this.name` innside the `sayName` method is going to be `pony.name`
*/




// ISOLATING A METHOD CAUSES METHOD TO LOSE ITS CONTEXT

const pony = {
  name: "Lucy",
  sayName: function () {
    console.log("Hello my name is " + this.name);
  }
};

let sayNameFunc = pony.sayName;
sayNameFunc(); // Hello my name is undefined



/*
Code Summary
- where a function is invoked sets the context for that function
- the context that the `sayNameFunc` is invoked in is the global object
  since we are now invoking it function style
- thus, when we invoke the `sayNameFunc`, the `sayName` func will try to read
  the `name` property of its current context, the global object
- `this` will no longer refer to the `pony`, it will refer to the global object
- the global object does not have a `name` property so the value is undefined
*/



// BINDING CONTEXT TO FUNCTIONS SO CONTEXT IS SET

const pony = {
  name: "Lucy",
  sayName: function () {
    console.log("Hello my name is " + this.name);
  }
};

let boundSayNameFunc = pony.sayName.bind(pony);
boundSayNameFunc(); // Hello my name is Lucy

/*
Code Summary
- `Function.bind(context)`
- `bind` is a method you can call on functions that returns the function with 
  its context bound to the object you pass into `bind` as an argument
- allows us to keep a context, regardless of how bound func is invoked
- we pass `pony` as the context so now, even though we invoke the `boundSayNameFunc`
  function style, the context will remain the `pony` object
- `this` will reference the `pony` object instead of the global object
*/



// CAN BIND FUNCS TO WHATEVER OBJECT WE LIKE

const pony = {
  name: "Lucy",
  sayName: function () {
    console.log("Hello my name is " + this.name);
  }
};

const lizard = {
  name: "Lionel"
};

let ponyNameFunc = pony.sayName.bind(pony);
ponyNameFunc(); // Hello my name is Lucy

let lizardSayName = pony.sayName.bind(lizard);
lizardSayName(); // Hello my name is Lionel

/*

Code Summary
- can bind funcs to whatever object we'd like, it doesnt have to be the object
  that the method is defined on
- the method we are binding is the `pony.sayName` method, but we are binding
  it to the context of the `lizard`
- `this` inside the `lizardSayName` func will be the `lizard` object, thus
  `this.name` will be 'lionel'



# ARROW FUNCTIONS REVIEW WITH CONTEXT 


*/

// FUNCTION STYLE SYNTAX

function sayHello(name) {
	return ` hello ${name}`
}

// FAT ARROW SYNTAX

// non implicit return
const sayHello = (name) => {
	return ` hello ${name}`
}

// implicit return
const sayHello = (name) => `hello ${name}`



/*Code Summary
- fat arrows without curly brackets have an implicit return
- fat arrows with curly braces need an explicit return
*/




// CONTEXT WITH ARROW FUNCS

const pony = {
	name: "Lucy",

	wrappedSayName: function () {
		return function () {
			console.log(this); // GLOBAL
			console.log("Hello my name is " + this.name);
		}
	},

	wrappedArrowSayName: function () {
		console.log(this); // { name: 'lucy', ... }
		return () => {
			console.log(this); // { name: 'lucy', ... }
			console.log("Hello my name is " + this.name);
		};
	}
};

let wrapped = pony.wrappedSayName();
let arrowWrapped = pony.wrappedArrowSayName();

wrapped(); // Hello my name is undefined
arrowWrapped() // Hello my name is lucy


/*Code Summary
- arrow funcs automatically bind context to the context that they are defined in,
  regular functions do not
- when we invoke `wrapped` function style, we lose the reference to the pony object
  since were returning a regular func in the `wrappedSayName` function
  - thus, `this` will refer to the context the `wrapped` func is invoked in,
	  which is the global object
- by returning a fat arrow func in the `wrappedArrowSayName` we have bound the
  context in the fat arrow func that is returned, to the value of the context
	that we defined the fat arrow func in, i.e the pony
	- `this` inside the returned fat arrow func will be the same as `this` inside the
	  `wrappedArrowSayName` func which is the `pony` object
	- thus, we can invoke the `arrowWrapped` func function style and keep the context
	  of the pony
*/
class Dog {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        
    }
    print() {
        console.log(this)
    }

    static printDogs(dogs) {
        return dogs.forEach(dog => {
            console.log(dog)
        })
    }
    
}

let newDog = new Dog('Badger', .5, 'Great Pyrenees')
newDog.print() //this refers to the newDog object that is an instance of Dog class;

let printDog = newDog.print();
printDog()

console.log(this)

