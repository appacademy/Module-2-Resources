const Dragon = require('./dragon')

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings, nemesis) {
        super(name, color)
        this.evilDoings = evilDoings
        this.nemesis = nemesis
    }

    dontInviteThemOverForDinner() {
        for (let i = 0; i < this.evilDoings.length; i++) {
            const doing = this.evilDoings[i]
            console.log(`${this.name} will ${doing}`)
        }
    }

    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
    }
}


// const enderDragon = new EvilDragon(
//     "Ender Dragon",
//     "black", [
//       "spit a fireball at Steve",
//       "rule over all the Endermen",
//       "destroy all blocks in its way"
//     ],
//     "Steve"
//   );
//   console.log(enderDragon);
//   enderDragon.dontInviteThemOverForDinner();
//   console.log(enderDragon.breathesFire());

module.exports = EvilDragon
