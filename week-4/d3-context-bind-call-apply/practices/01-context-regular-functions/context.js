// name = "nemo"; // adds a name property to the global object

function eat() {
  // console.log(this);
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }
  
  swim() {
    console.log(this);
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');
// const jeff = { name: "Jeff" }
// const print = () => this.name;
// jeff.print = print;

/********************************* Scenario 1 *********************************/
// eat(); // "undefined eats fish food"


/********************************* Scenario 2 *********************************/
// console.log(nemo);
// nemo.eat = eat;
// console.log(nemo);
// // const tyler = new Fish("Tyler");
// // console.log(tyler); // eat function does not change Fish class
// nemo.eat(); // "nemo eats fish food"


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // "undefined eats fish food"


/********************************* Scenario 4 *********************************/
// nemo.swim(); // ?


/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
// // console.log(this); // modules context
swim(); // TypeError
