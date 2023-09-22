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


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // ?


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // ?


/********************************* Scenario 4 *********************************/
// nemo.swim(); // ?


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// swim(); // ?
