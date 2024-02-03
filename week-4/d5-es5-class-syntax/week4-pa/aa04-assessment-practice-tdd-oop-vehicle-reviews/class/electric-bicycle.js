const Bicycle = require("./bicycle")

class ElectricBicycle extends Bicycle{
    constructor(modelName,year,price,style,frameSize,tireSize,range,maxSpeed){
        super(modelName,year,price,style,frameSize,tireSize)
        this.range = range
        this.maxSpeed = maxSpeed
    }

}

// let eBike2 = new ElectricBicycle("Specialized", 2010, 600, "Touring", 18, 26, 30, 45);
// console.log(eBike2);

module.exports = ElectricBicycle;
