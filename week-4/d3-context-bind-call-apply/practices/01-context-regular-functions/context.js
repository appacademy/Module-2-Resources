// 'use strict'

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
const shane = new Fish('shane');

/********************************* Scenario 1 *********************************/
// eat(); // undefined eats fish food


/********************************* Scenario 2 *********************************/
// console.log(shane)
// console.log(nemo)
// nemo.eat = eat;
// nemo.eat(); // Nemo eats fish food
// console.log(nemo)
// console.log(shane)


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// nemo.eat()
// eat(); // undefined eats fish food


/********************************* Scenario 4 *********************************/
// shane.swim()
// nemo.swim(); // Nemo swimming in the water


/********************************* Scenario 5 *********************************/
// const gary = {
//   name: 'gary'
// }
// const swim = nemo.swim.bind(gary);
// const nemoSwim = nemo.swim.bind(nemo);
// const shaneSwim = shane.swim.bind(gary)
// const takeBack = shaneSwim.bind(shane);
// swim(); // undefined swimming in the water
// nemoSwim();
// shaneSwim(); 
// takeBack();
