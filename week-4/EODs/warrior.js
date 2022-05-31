const Character = require('./character');

class Warrior extends Character {
    constructor (name, race, age, profession, about, weapon, armor_type) {
        super (name, race, age, profession, about);

        this.weapon = weapon;
        this.armor_type = armor_type;
    }
}
