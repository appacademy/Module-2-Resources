const Bicycle = require('./bicycle');

class ElectricBicycle extends Bicycle {
    constructor(modelName, year, price, style, frameSize, tireSize, range, maxSpeed) {
        super(modelName, year, price, style, frameSize, tireSize);
        this.range = range;
        this.maxSpeed = maxSpeed;
    }
}

// const eBike = new ElectricBicycle('huffy', '1992');
// console.log(eBike)

module.exports = ElectricBicycle;