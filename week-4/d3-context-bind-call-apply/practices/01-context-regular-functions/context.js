// 'use strict'
function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim(arg1, arg2) {
    if (!arg1 || !arg2) {
      console.log(`${this.name} swimming in the water`);
    }

    console.log(arg1, arg2)
  }

}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// eat(); // undefined eats fish food


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // Nemo eats fish food


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // undefined eats fish food


/********************************* Scenario 4 *********************************/
// nemo.swim(); // Nemo swimming in the water


/********************************* Scenario 5 *********************************/
const shane = {
  name: 'shane'
}
const charlie = {
  name: 'charlie'
}
const swim = nemo.swim.bind(shane);
nemo.swim()
const charlieSwim = nemo.swim.bind(charlie, 'hello', 'world');
swim(); // ?
charlieSwim()
