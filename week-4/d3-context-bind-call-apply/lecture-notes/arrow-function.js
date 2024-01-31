// Function declaration
// ARROW FUNCTIONS REVIEW WITH CONTEXT
// * Function declaration
function sayHello1(name) {
  return ` hello ${name}`;
}

// FAT ARROW SYNTAX
// * non implicit return
// * fat arrows with curly braces need an explicit return
const sayHello2 = (name) => {
  return ` hello ${name}`;
};

// * implicit return
// * fat arrows without curly brackets have an implicit return
const sayHello3 = (name) => `hello ${name}`;

// CONTEXT WITH ARROW FUNCS
// ! Cannot bind a function defined with fat arrow function
const gorilla = {
  name: "Harambe",

  wrappedSayName: function () {
    console.log(this); // { name: 'Harambe', ... }
    return function () {
      // normal function loses context here as they do not use the context of what they are defined in
      console.log(this); // GLOBAL
      console.log("Hello my name is " + this.name);
    };
  },

  wrappedArrowSayName: function () {
    console.log(this); // { name: 'Harambe', ... }
    // arrow function this will refer to the context on the above line
    return () => {
      console.log(this); // { name: 'Harambe', ... }
      console.log("Hello my name is " + this.name);
    };
  },
};

// let wrapped = gorilla.wrappedSayName();
// let arrowWrapped = gorilla.wrappedArrowSayName();

// wrapped();
// arrowWrapped();

/*
  Whats going on?
  * arrow funcs automatically bind context to the context that they are defined in, regular functions do not

  We are storing the return value of a function which is a function in a variable by keying into the object
  * with a normal function we lose context
  let wrapped = gorilla.wrappedSayName();
  wrapped holds a function thats lost its context

  * with a arrow function
  let arrowWrapped = gorilla.wrappedArrowSayName();
  * because arrow functions use the context of the function that it is defined in
  * the context will refer to the the gorilla context
  * therefore context is not lost as fat arrow automatically under the hood has set context to gorilla
*/

// CONTEXT WITH CLASSES
class Cat {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
  print() {
    console.log(this);
  }

  // go over
  fatArrowPrint = () => console.log(this);

  normalPrint = function () {
    console.log(this);
  };

  static printCats(cats) {
    return cats.forEach((cat) => {
      console.log(cat);
    });
  }
}

let pumpkin = new Cat("pumpkin", "3", "ragamuffin");

let arrowPrintName = pumpkin.fatArrowPrint;
// context - pumpkin
// arrowPrintName();

let normalPrintName = pumpkin.normalPrint;

// this is setTimeout object
// setTimeout(() => {normalPrintName()}, 2000);

// this is global object
// setTimeout(normalPrintName, 2000);

// this is pumpkin object
setTimeout(arrowPrintName, 2000);
