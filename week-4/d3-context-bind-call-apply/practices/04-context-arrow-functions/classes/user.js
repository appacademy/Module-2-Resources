class User {
  constructor(name) {
    this.name = name;
  }

  changeName = (newName) => {
    this.name = newName;
    return this.name;
  };
}

// const user1 = new User("shane");
// const user2 = new User("briana");
// const user3 = new User("gary");
// const user4 = new User("charlie");
// const user5 = new User("roger");

// console.log({ user1 });
// console.log({ user2 });
// console.log({ user3 });
// console.log({ user4 });
// console.log({ user5 });

// user1.changeName("kristen");
// console.log({ user1 });

// const obj = {
//   name: "shane",
//   sayName: function () {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// obj.sayName();

// const obj2 = {
//   name: "briana",
// };

// const sN = obj.sayName.bind(obj2);

// sN();

// obj2.sayName();

// obj.sayName();

module.exports = User;
