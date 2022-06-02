class Person {
  constructor(name) {
    this.name = name;
  }

  returnThis() {
    return this;
  }
}

const jeff = new Person("Jeff");

// console.log(jeff);
console.log(jeff.returnThis());

const returnThisNow = jeff.returnThis;
console.log(returnThisNow);
// console.log(returnThisNow());
// console.log(globalThis);

// console.log(module);