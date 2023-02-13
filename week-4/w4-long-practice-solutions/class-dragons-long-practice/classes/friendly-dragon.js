//!!START
// You need to require the Dragon parent class
const Dragon = require("./dragon");

// Remember this class needs to inherit from the Dragon parent class, so you
// need to use extends for the class declaration, and super for any attributes
// (parameters) you want to inherit for the parent as well
class FriendlyDragon extends Dragon {
  constructor(name, color, lifeGoals, friend) {
    super(name, color);
    this.lifeGoals = lifeGoals;
    this.friend = friend;
  }

  hasLifeGoals() {
    this.lifeGoals.forEach((goal) => {
      console.log(`${this.name} likes to ${goal}`);
    });
  }

  helpsPeople() {
    return `${this.name} helps their friend ${this.friend}`;
  }
}

// You need to export the FriendlyDragon class so you can use it in other
// modules
module.exports = FriendlyDragon;
//!!END
