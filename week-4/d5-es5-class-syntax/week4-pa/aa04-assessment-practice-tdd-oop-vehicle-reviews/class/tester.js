const Bicycle = require("./bicycle")
const ElectricBicycle = require("./electric-bicycle");
const Review = require("./review");
// const Vehicle = require("./vehicle");

class Tester {
  constructor(name, reviews = []) {
    this.name = name
    this.reviews = reviews;
  }

  submitReview(vehicle, star, text) {
    //need to validate the vehicle? -> use validate()!

    if (vehicle.validate()) {
      // create a review -> new Review Instance
      let review = new Review(vehicle, this, star, text);

      // console.log(review.addReview); //[Function: addReview]
      // submit a review?
      review.addReview();
      // submit the review? -> use the method addReview()

      // assign the eBike / bike attributes AFTER submission
      if (vehicle instanceof Bicycle) {
        this.bikeTester = true;
      }

      if (vehicle instanceof ElectricBicycle) {
        this.eBikeTester = true;
      }

      // if (vehicle instanceof Bicycle) this.bikeTester = true;
      // else if (vehicle instanceof ElectricBicycle) this.eBikeTester = true;

      return review;
    } else {
      throw Error("Cannot submit review for invalid vehicle.");
    }
  }
}
let tester = new Tester("Bob Jones");
let validBicycle = new Bicycle("Trek 520", 2023, 1829);

tester.submitReview(validBicycle, 5, "Great for touring and gravel");

console.log(tester);
// --------

// let tester = new Tester("Bob Jones");
// let validVehicle = new Vehicle(5);

// tester.submitReview(validVehicle, 3, "Very cozy.");
// let submittedReview = tester.submitReview(validVehicle, 3, "Very cozy.");

// console.log('test \n\n',tester)
// console.log('vehicle \n\n',validVehicle)

module.exports = Tester;
