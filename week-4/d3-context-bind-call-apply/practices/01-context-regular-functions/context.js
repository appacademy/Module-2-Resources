function eat() {
  console.log(this);
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
const shane = new Fish("shane");

/********************************* Scenario 1 *********************************/
eat(); // => 'this' === global object => undefined eats fish food

// /********************************* Scenario 2 *********************************/
// nemo.eat = eat; // => creates a new kvp adding the eat function to the nemo object
// nemo.eat(); // Nemo eats fish food
// shane.eat();

/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // undefined eats fish food

/********************************* Scenario 4 *********************************/
// nemo.swim(); // ? Nemo swimming in the water

/********************************* Scenario 5 *********************************/
// const gary = {
//   name: "gary",
// };

// const charlie = {
//   name: "charlie",
// };

// const swim = nemo.swim.bind(gary);

// swim(); // => global object is protected from any method defined in a class, so "this" resolves to undefined throws a TypeError

// const charlieSwim = nemo.swim.bind(charlie);
// charlieSwim();
