class User {
  constructor(name) {
    this.name = name;
  }

  changeName = (newName) => {
    this.name = newName;
    return this.name;
  }
}

// const shane = new User('shane')
// const gary = new User('gary')
// const bri = new User('bri')
// const charlie = new User('charlie')

// console.log(shane)
// console.log(gary)
// console.log(bri)
// console.log(charlie)

module.exports = User;