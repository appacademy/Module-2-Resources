function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log("THIS ====>", this)
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// eat(); // undefined eats fish food
// Function Style Invocation, context: global


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // Nemo eats fish food
// Method style invocation, context: Fish instance, nemo

/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // undefined eats fish food


/********************************* Scenario 4 *********************************/
// nemo.swim(); // Nemo swimming in the water


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// swim(); // TypeError, Cannot read properties of undefined (reading 'name')
// Context was lost/undefined, function style invoked but Fish class doesn't want global obj as context


// Locking in context using bind
const swim = nemo.swim.bind(nemo)
swim(); // Nemo swimming in the water

const briana = {
  name: "Briana"
}
const brianaSwim = nemo.swim.bind(briana)
brianaSwim() // Briana swimming in the water
