function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish("Nemo");

/********************************* Scenario 1 *********************************/
// eat(); // undefined eats fish food

/********************************* Scenario 2 *********************************/
// console.log(nemo);
// nemo.eat = eat;
// // console.log(nemo);
// nemo.eat(); // Nemo eats fish food

/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // undefined eats fish food

/********************************* Scenario 4 *********************************/
// nemo.swim(); // Nemo swimming in the water

/********************************* Scenario 5 *********************************/
const shane = {
  name: "shane",
};
const swim = nemo.swim.bind(shane);
swim(); // throws a TypeError because classes are in strict mode.
console.log(nemo);
