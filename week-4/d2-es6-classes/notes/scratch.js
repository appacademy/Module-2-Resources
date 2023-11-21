class Guitar {
    constructor(make, model) {
        this.make = make;
        this.model = model;

        if (!make) throw new Error('Must have make!!!!')
    }

    setMake(newMake) {
        this.make = newMake;
        return this.make;
    }

    getMake() {
        return this.make;
    }

    showDetails() {
        console.log(`This is a ${this.make}, ${this.model}.`);
    }

    static showAllDetails(guitars) {
        guitars.forEach(guitar => guitar.showDetails())
    }

}

const guitar1 = new Guitar('Fender', 'Stratocaster');
const guitar2 = new Guitar('Gibson', 'Les Paul');
const guitar3 = new Guitar('', 'PRS')

// console.log(guitar1.showDetails())
// console.log(guitar2.showDetails())

Guitar.showAllDetails([guitar1, guitar2])
