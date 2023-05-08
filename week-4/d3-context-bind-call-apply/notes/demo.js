
// class Fruit {
//   constructor(name) {
//     this.name = name;
//   }

//   eat = () => {
//     console.log(`${this.name} has a bite mark`);
//   };
// }

// const apple = new Fruit("apple");
// const eat = apple.eat;
// setTimeout(eat, 1000);

/******************** */

// class Fruit {
//   constructor(name) {
//     this.name = name;
//   }

//   eat = () => {
//     console.log(`${this.name} has a bite mark`);
//   };
// }

// const apple = new Fruit("apple");
// const eat = apple.eat;
// eat();


/**************** */

// function greeting(...messages) {
//   return messages.map((message) => {
//     return `${this.firstName} says ${message}`;
//   });
// }

// const derek = {
//   firstName: "Derek",
// };

// const derekMessages = greeting.bind(derek, "Hello class!");
// console.log(derekMessages("Goodbye class!"));


/***************** */

// const sum = (...nums) => {
//   nums.reduce((acc, num) => acc + num);
// };

// console.log(sum(1, 2, 3));

/************* */

// const sum = (...nums) => {
//   return nums.reduce((acc, num) => acc + num);
// };

// console.log(sum(1, 2, 3));

/******************* */

const sum = (...nums) => {
  return nums.reduce((acc, num) => acc + num);
};

console.log(sum(1, 2, 3));