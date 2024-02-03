// const Tester = require("./tester")
// const Vehicle = require("./vehicle")

class Review{
    constructor(vehicle,tester,starRating,text){
        this.vehicle = vehicle
        this.tester = tester
        this.starRating = starRating
        this.text = text
    }

    addReview(){

        // console.log("vehicle",this.vehicle)
        // console.log('tester',this.tester)
        this.vehicle.reviews.push(this);
        this.tester.reviews.push(this);
    }

    static filterByStars(star,...reviews){
        // reviews is an array -> array methods.
        // console.log(reviews);

        return reviews.filter((review) => review.starRating === star)

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

// let res = Review.filterByStars(3, review1, review2, review3);
// console.log(res)
// review1.addReview();
// review2.addReview();
// review3.addReview();
// review4.addReview();

// inside the arrays
// console.log("----> tester1 \n\n",tester1.reviews.length)
// console.log("----> vehicle \n\n",vehicle1.reviews.length)

// console.log("----> tester1 \n\n",tester1)
// console.log("----> vehicle \n\n",vehicle1)



// * Reviews Array

/*

[
  Review {
    vehicle: Vehicle {
      modelName: 'Toyota Prius',
      year: 2005,
      price: 23000,
      reviews: []
    },
    tester: Tester { name: 'Bob Jones', reviews: [] },
    starRating: 1,
    text: 'Great car, excellent gas mileage!'
  },
  Review {
    vehicle: Vehicle {
      modelName: 'Dodge Ram',
      year: 1985,
      price: 300,
      reviews: []
    },
    tester: Tester { name: 'Desiree Smith', reviews: [] },
    starRating: 3,
    text: 'Lots of rust, but still reliable.'
  },
  Review {
    vehicle: Vehicle {
      modelName: 'Toyota Prius',
      year: 2005,
      price: 23000,
      reviews: []
    },
    tester: Tester { name: 'Desiree Smith', reviews: [] },
    starRating: 5,
    text: 'Good ride, but wish it charged faster.'
  }
]

*/
module.exports = Review;
