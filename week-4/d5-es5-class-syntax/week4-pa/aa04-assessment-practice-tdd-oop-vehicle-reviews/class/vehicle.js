// const Tester = require("./tester")
// const Review = require("./review")

class Vehicle{
    constructor(modelName,year,price,reviews=[]){
        this.modelName = modelName
        this.year = year
        this.price = price
        this.reviews = reviews
    }

    validate(){
        if (typeof this.modelName !== "string" || !this.modelName || !this.year || !this.price) return false
        if (this.year < 1950 || this.year > 2100) return false
        return true;
    }

    update(newName, newYear, newPrice){
        if (newYear < 1950 || newYear > 2100) throw Error("Year must be between 1950 and 2100")
        if (newPrice <= 0) throw Error("Price must be greater than 0")

        this.modelName = newName
        this.year = newYear
        this.price = newPrice
    }

    getDetails(){
        return `The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`
    }

    findReviewByTester(testerName){
        // the anatomy of a single review
        // console.log(this.reviews)
        return this.reviews.find((review) => review.tester.name === testerName)
    }
}


// let tester1 = new Tester("Bob Jones");
// let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
// let review1 = new Review(vehicle1, tester1, 1, "Great car, excellent gas mileage!");

// let tester2 = new Tester("Desiree Smith");
// let vehicle2 = new Vehicle("Dodge Ram", 1985, 300);
// let review2 = new Review(vehicle2, tester2, 3, "Lots of rust, but still reliable.");

// let review3 = new Review(vehicle1, tester2, 5, "Good ride, but wish it charged faster.");
// let review4 = new Review(vehicle2, tester1, 5, "Best car I've ever driven!");

// review1.addReview();
// review2.addReview();
// review3.addReview();
// review4.addReview();

// let filtered1 = vehicle1.findReviewByTester("Bob Jones");
// console.log(filtered1)

// let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
// // // // let vehicle2 = new Vehicle("Trek 520", 2023, 1829);
// // console.log(vehicle1)
// // vehicle1.update("Toyota Prius", 2024, 0);
// console.log(vehicle1.getDetails())

// anatomy of a single review
/*

  Review {
    vehicle: Vehicle {
      modelName: 'Toyota Prius',
      year: 2005,
      price: 23000,
      reviews: [Circular *1]
    },
    tester: Tester { name: 'Bob Jones', reviews: [Array] },
    starRating: 1,
    text: 'Great car, excellent gas mileage!'
  },

*/

module.exports = Vehicle;
