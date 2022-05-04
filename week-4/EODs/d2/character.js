class Character {
    constructor(name, race, age, profession, about) {
        this.name = name;
        this.race = race;
        this.age = age;
        this.profession = [profession];
        this.about = about;
        this.level = 1;
    }

    levelUp (char) {
        this.level++;
        console.log(`${this.name} has gained a level!`);
    }

    addProfession (newProf) {
        this.profession.push(newProf);
    }

}



const thrall = new Character('Thrall', 'Orc', 40, 'Blacksmith', 'Former leader of the Horde');

thrall.levelUp();
console.log(thrall);

module.exports = Character;
