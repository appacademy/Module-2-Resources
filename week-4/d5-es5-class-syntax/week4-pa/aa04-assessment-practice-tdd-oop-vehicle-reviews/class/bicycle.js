const Vehicle = require("./vehicle")

class Bicycle extends Vehicle{
    constructor(modelName,year,price,style,frameSize,tireSize){
        super(modelName,year,price)
        this.style = style;
        this.frameSize = frameSize
        this.tireSize = tireSize
    }
}

// let bicycle2 = new Bicycle("Specialized", 2010, 600, "Touring", 18, 26);
// console.log(bicycle2)

module.exports = Bicycle;
