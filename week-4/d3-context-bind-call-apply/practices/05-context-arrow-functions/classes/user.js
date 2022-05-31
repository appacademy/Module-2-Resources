class User {
  constructor(name) {
    this.name = name;
  }

  changeName = newName => {
    this.name = newName;
    // console.log(this);
    return this.name;
  }
}

// const jeff = new User('Jeff');
// jeff.changeName('J');

// const david = new User('David');

// console.log(jeff.changeName === david.changeName);

// function add() {
//   return 2;
// }

// jeff.add = add;
// jeff.changeName('J');



module.exports = User;
