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

/********************************* Scenario 1 *********************************/
// eat(); // ?
// Function style invocation - context: global


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // ?
// Method style invocation - context: nemo instance

/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // ?
// Function style invocation - context: global

/********************************* Scenario 4 *********************************/
// nemo.swim(); // Nemo swimming in the water
// Method style invocation - context: nemo instance


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// swim(); // ?
// Function style invocation - context lost/undefined because of class' strict mode
// TypeError

// Fix

const nemoSwim = nemo.swim.bind(nemo)
nemoSwim() // Nemo swimming in the water

const briana = {
  name: "Briana"
}

const brianaSwim = nemo.swim.bind(briana)
brianaSwim() // Briana swimming in the water
