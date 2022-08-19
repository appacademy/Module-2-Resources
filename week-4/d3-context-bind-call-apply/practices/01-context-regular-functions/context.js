function eat() {
  console.log(`${this.name} eats fish food`);
}


class Fish {
  constructor(name) {
    this.name = name;
  }

  swim () {
    console.log(this)
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// eat(); // undefined eats fish food


/********************************* Scenario 2 *********************************/
// console.log(nemo)
// nemo.eat = eat;
// nemo.age = 5
// nemo.swim();
// console.log(nemo)
// nemo.eat(); // Nemo eats fish food

// const shane = new Fish('Shane');

// console.log(shane)


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // undefined eats fish food


/********************************* Scenario 4 *********************************/
// nemo.swim(); // Nemo swimming in the water


/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
console.log(swim)
swim(); // throws an error
// const swim = nemo.swim.bind(nemo);
// const nemoEat = eat.bind(nemo);

// nemoEat()
// swim(); // throws an error
