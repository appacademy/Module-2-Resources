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

const nemo = new Fish('Nemo');
// const shane = new Fish('shane')

/********************************* Scenario 1 *********************************/
// eat(); // undefined eats fish food


/********************************* Scenario 2 *********************************/
// console.log(nemo)
// nemo.eat = eat;
// nemo.eat(); // Nemo eats fish food
// console.log(nemo)
// console.log(shane)



/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // undefined eats fish food


/********************************* Scenario 4 *********************************/
// nemo.swim(); // Nemo swimming in the water


/********************************* Scenario 5 *********************************/
const shane = {
  name: 'shane'
}

const roger = {
  name: 'roger'
}
let swim = nemo.swim.bind(shane);
let rogerSwim = nemo.swim.bind(roger);
swim(); // ?
rogerSwim()
