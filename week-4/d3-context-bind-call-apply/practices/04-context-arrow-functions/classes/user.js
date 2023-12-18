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


module.exports = User;