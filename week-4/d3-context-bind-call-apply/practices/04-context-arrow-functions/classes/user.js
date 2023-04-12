class User {
  constructor(name) {
    this.name = name;
  }

  changeName = (newName) => {
    this.name = newName;
    return this.name;
  }
}

const user = new User('user');
const user1 = new User('user1');
console.log(user)
console.log(user1)

module.exports = User;