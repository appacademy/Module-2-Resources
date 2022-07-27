class User {
  constructor(name) {
    this.name = name;
  }

  changeName = newName => this.name = newName;

}

module.exports = User;
