function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    // console.log(this);
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');
// const shane = new Fish('Shane');

/********************************* Scenario 1 *********************************/
// eat(); // undefined eats fish food

/********************************* Scenario 2 *********************************/
// console.log(nemo);
// nemo.eat = eat;
// // console.log(nemo);
// nemo.eat(); // Nemo eats fish food
// // console.log(shane.eat());

/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // undefined eats fish food.

/********************************* Scenario 4 *********************************/
// nemo.swim(); // Nemo swimming in the water.

/********************************* Scenario 5 *********************************/
const shane = {
  name: 'Shane',
};

// const gary = {
//   name: 'Gary',
// };
// const swim = nemo.swim.bind(shane);
// swim(); // ?
// const garySwim = nemo.swim.bind(gary);
// garySwim();

function sayHelloToTas(first, second, third, fourth) {
  console.log(`${this.name} says hi to ${first} ${second} ${third} ${fourth}`);
}

const bound = sayHelloToTas.bind(shane, 'gary', 'briana', 'roger', 'charlie');

bound();
