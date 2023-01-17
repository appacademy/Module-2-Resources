
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
const shane =  new Fish('Shane');

/********************************* Scenario 1 *********************************/
// eat(); // undefined eats fish food


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// console.log(nemo)
// nemo.eat(); // Nemo eats fish food


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// console.log(nemo)
// console.log(shane)
// eat(); // undefined eats fish food


/********************************* Scenario 4 *********************************/
// nemo.swim(); // Nemo swimming in the water


/********************************* Scenario 5 *********************************/
// const nick = {
//   name: 'Nick'
// }
// const swim = nemo.swim.bind(nick);
// swim(); // TypeError

// const swim = nemo.swim;
// swim();

