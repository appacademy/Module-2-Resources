class User {
  constructor(name) {
    this.name = name;
  }

  changeName(newName) {
    this.name = newName;
    return this.name;
  }
}

module.exports = User;
