function eatFruits(...fruits) {
    return `${this.firstName} ate ${fruits.join(' and ')}`;
  }
  
  class Person {
    constructor(firstName) {
      this.firstName = firstName;
    }
  }
  
  const mylo = new Person('Mylo');
  console.log(eatFruits.apply(mylo, 'apple', 'orange', 'banana'));