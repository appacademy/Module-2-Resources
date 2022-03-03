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
// console.log(this)
// nemo.eat = eat;
// nemo.eat(); // ?
// nemo.color = 'orange'
// console.log(nemo)
// nemo.swim = 'i swam and touched the butt'
// console.log(nemo.swim)
// nemo.swim()

// const dog = {
//   name: 'badger',
//   age: '1',
//   breed: 'great pyrenees'
// }
// dog.tricks = ['barking', 'farting', 'destroying']
// dog.speak = function () {
//   console.log('woof')
// }
// console.log(dog);
// dog.speak()

// dog['color'] = 'white'
// console.log(dog);

/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // ?


/********************************* Scenario 4 *********************************/
// nemo.swim(); // ?


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// swim(); // ?
