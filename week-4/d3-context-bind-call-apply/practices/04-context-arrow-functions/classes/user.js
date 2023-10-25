class User {
  constructor(name) {
    this.name = name;
  }

  changeName = (newName) => {
    console.log(this)
    this.name = newName;
    return this.name;
  }
}

module.exports = User;
