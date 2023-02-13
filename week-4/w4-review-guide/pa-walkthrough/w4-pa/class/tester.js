const Bicycle = require("./bicycle");
const ElectricBicycle = require("./electric-bicycle");
const Review = require("./review");

class Tester {
    constructor(name) {
        this.name = name;
        this.reviews = [];
    }

    submitReview(vehicle, stars, text) {
        if (!vehicle.validate()) throw new Error("Cannot submit review for invalid vehicle.")
        if (vehicle instanceof Bicycle) this.bikeTester = true;
        if (vehicle instanceof ElectricBicycle) this.eBikeTester = true;
        const newReview = new Review(vehicle, this, stars, text);
        newReview.addReview();
        return newReview;
    }
}

module.exports = Tester;