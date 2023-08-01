// const functastic = require('./main');

// function quickFunc() {
//   return 'howdy';
// }

// function anotherFunc() {
//   return 'hello'
// }

// console.log(anotherFunc() + 'world');

// // console.log(module)
// // module.exports = quickFunc;
// // module.exports.quickFunc = quickFunc
// // module.exports = { howdy: quickFunc, hello: anotherFunc }
// module.exports = { quickFunc, anotherFunc }
// // console.log(module)

// const shane = {
//   username: 'shane',
//   age: 41,
//   friends: [],
//   sayHello: function() {
//     console.log('Hello!');
//   } 
// }
// shane.sayHello()
// console.log(shane)

// const charlie = {
//   username: 'charlie',
//   age: 25,
//   friends: [],
//   sayHello: function() {
//     console.log('Hello!')
//   }
// }
// console.log(charlie)

class User {
  static count = 0;
  constructor(username, age) {
    this.username = username;
    this.age = age;
    this.friends = [];
    User.count++
  }
  sayHello() {
    // console.log(this)
    console.log(`Hello! My name is ${this.username}`)
  }

  static introduceUsers(users) {
    // console.log(this)
    users.forEach(user => user.sayHello());
  }
}

const shane = new User('shane', 41);
const charlie = new User('charlie', 25);
// console.log(shane)
// shane.sayHello()
// // console.log(charlie)
// charlie.sayHello()

User.introduceUsers([shane, charlie])
console.log(User.count)