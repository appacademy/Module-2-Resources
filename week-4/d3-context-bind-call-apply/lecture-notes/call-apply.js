/*


  Call and Apply
  * JavaScript also has two alternative function methods that allow you to bind context.
  * While bind returns a function that can be called multiple times with the given context,
  * call and apply will invoke the bound function immediately, returning the return value from that function.

  * // assigning return of func.call() to a variable
  let callReturn = func.call(context, ...args);

  * // assigning return of func.apply() to a variable
  let applyReturn = func.apply(context, [...args]);

  Syntax
  * Function.call/apply (this, arguments to function)

  The only difference between the two comes in the remaining arguments:
  * call spreads them out in comma-separated values
    ! C for comma
  * Apply takes in arrays of arguments
    ! A for array


*/

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Cat {
  constructor(name) {
      this.name
  }
  purrNTimes(n) {
      for(let i = 0; i < n; i++) {
          console.log(`${this.name} says: meow`);
      }
  }
}

let dog = new Dog('Scooby');
let cat = new Cat('Garfield');

// * Function.call/apply (this, arguments to function)

// cat.purrNTimes.call(dog, 5);
// cat.purrNTimes.apply(dog, [5]);
