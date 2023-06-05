//!!START
// You need to require the Dragon parent class
const Dragon = require("./dragon");

// Remember this class needs to inherit from the Dragon parent class, so you
// need to use extends for the class declaration, and super for any attributes
// (parameters) you want to inherit for the parent as well
class EvilDragon extends Dragon {
  constructor(name, color, evilDoings, nemesis) {
    super(name, color);
    this.evilDoings = evilDoings;
    this.nemesis = nemesis;
  }
  dontInviteThemOverForDinner() {
    this.evilDoings.forEach((trouble) => {
      console.log(`${this.name} will ${trouble}`);
    });
  }

  burnsNemesis() {
    return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
  }
}

// You need to export the FriendlyDragon class so you can use it in other
// modules
module.exports = EvilDragon;
//!!END
