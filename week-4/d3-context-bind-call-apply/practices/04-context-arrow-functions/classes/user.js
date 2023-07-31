class User {
  constructor(name) {
    this.name = name;
  }

  changeName = (newName) => {
    this.name = newName;
    return this.name;
  }
}

const shane = new User('shane');
const roger = new User('roger');
console.log(shane)
console.log(roger)

module.exports = User;