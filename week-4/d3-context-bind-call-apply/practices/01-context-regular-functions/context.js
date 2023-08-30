function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(this)
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// Function style invocation, context global
// eat(); // undefined eats fish food


/********************************* Scenario 2 *********************************/
// Method style invocation, context Fish instance of nemo
// nemo.eat = eat;
// nemo.eat(); // Nemo eats fish food


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // undefined eats fish food


/********************************* Scenario 4 *********************************/
// nemo.swim(); // Nemo swimming in the water


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// Function style invocation, want global obj context but context is lost/undefined
// swim(); // TypeError

// Bind returns new function, with locked in context
const nemoSwim = nemo.swim.bind(nemo)

nemoSwim() // Nemo swimming in the water


const bri = {
  name: "Briana"
}

const brianaSwim = nemo.swim.bind(bri)
brianaSwim() // Briana swimming in the water


