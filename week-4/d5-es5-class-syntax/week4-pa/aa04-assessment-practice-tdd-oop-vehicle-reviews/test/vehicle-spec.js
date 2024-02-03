const { expect } = require('chai');

const Vehicle = require("../class/vehicle.js");
const Bicycle = require("../class/bicycle.js");
const ElectricBicycle = require("../class/electric-bicycle.js");
const Review = require("../class/review.js");
const Tester = require("../class/tester.js");

describe ('Classes, Constructors and Inheritance', function () {

    it('VEHICLE: should set model name, year, and price attributes on creation', function () {

        let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);

        expect(vehicle1.modelName).to.equal("Toyota Prius");
        expect(vehicle1.year).to.equal(2005);
        expect(vehicle1.price).to.equal(23000);

        let vehicle2 = new Vehicle("Trek 520", 2023, 1829);

        expect(vehicle2.modelName).to.equal("Trek 520");
        expect(vehicle2.year).to.equal(2023);
        expect(vehicle2.price).to.equal(1829);
    });

    it('VEHICLE: should store an array of all reviews, which is empty on creation', function () {

        let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);

        expect(vehicle1.reviews).to.be.an('array');
        expect(vehicle1.reviews).to.be.empty;

        let vehicle2 = new Vehicle("Trek 520", 2023, 1829);

        expect(vehicle2.reviews).to.be.an('array');
        expect(vehicle2.reviews).to.be.empty;
    });

    it('BICYCLE: should be a subclass of Vehicle', function () {

        let bicycle = new Bicycle("Trek 520", 2023, 1829);

        expect(bicycle instanceof Vehicle).to.be.true;
    });

    it('BICYCLE: should have style, frame size, and tire size attributes', function () {

        let bicycle1 = new Bicycle("Trek 520", 2023, 1829);
        expect(bicycle1).to.haveOwnProperty("style");
        expect(bicycle1).to.haveOwnProperty("frameSize");
        expect(bicycle1).to.haveOwnProperty("tireSize");

        let bicycle2 = new Bicycle("Specialized", 2010, 600, "Touring", 18, 26);
        expect(bicycle2.style).to.equal("Touring");
        expect(bicycle2.frameSize).to.equal(18);
        expect(bicycle2.tireSize).to.equal(26);
    });

    it('ELECTRIC BICYCLE: should be a subclass of Bicycle', function () {

        let eBike = new ElectricBicycle("Trek 520", 2023, 1829);

        expect(eBike instanceof Bicycle).to.be.true;
        expect(eBike instanceof Vehicle).to.be.true;
    });

    it('ELECTRIC BICYCLE: should have range and maximum speed attributes', function () {

        let eBike1 = new ElectricBicycle("Trek 520", 2023, 1829);
        expect(eBike1).to.haveOwnProperty("range");
        expect(eBike1).to.haveOwnProperty("maxSpeed");

        let eBike2 = new ElectricBicycle("Specialized", 2010, 600, "Touring", 18, 26, 30, 45);
        expect(eBike2.range).to.equal(30);
        expect(eBike2.maxSpeed).to.equal(45);
    });

    it('TESTER: should set name and empty array of reviews on creation', function () {

        let tester1 = new Tester("Bob Jones");

        expect(tester1.name).to.equal("Bob Jones");
        expect(tester1.reviews).to.be.an('array');
        expect(tester1.reviews).to.be.empty;

        let tester2 = new Tester("Janelle Price");

        expect(tester2.name).to.equal("Janelle Price");
        expect(tester2.reviews).to.be.an('array');
        expect(tester2.reviews).to.be.empty;
    });


    it('REVIEW: should set vehicle, tester, star rating, and review text on creation', function () {

        let tester1 = new Tester("Bob Jones");
        let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
        let review1 = new Review(vehicle1, tester1, 5, "Great car, excellent gas mileage!")

        expect(review1.vehicle).to.deep.equal(vehicle1);
        expect(review1.tester).to.deep.equal(tester1);
        expect(review1.starRating).to.equal(5);
        expect(review1.text).to.equal("Great car, excellent gas mileage!");
    });
});


describe ('Validating Data', function () {

    it("Vehicle should not be valid unless the model name, price, and year have been set", function () {
        let validVehicle = new Vehicle("Toyota Prius", 2005, 23000);
        let invalidVehicle = new Vehicle(5);

        expect(validVehicle.validate()).to.be.true;
        expect(invalidVehicle.validate()).to.be.false;
    });

    it("Vehicle should not be valid unless the year is between 1950 and 2100", function () {
        let validYearVehicle = new Vehicle("Toyota Prius", 2005, 23000);
        let invalidYearVehicle = new Vehicle("Future Flying Vehicle", 2500, 3000);

        expect(validYearVehicle.validate()).to.be.true;
        expect(invalidYearVehicle.validate()).to.be.false;
    });
});


describe ('Updating Data and Handling Errors', function () {

    it('can update multiple details for a vehicle at once', function () {

        let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
        let vehicle2 = new Vehicle("Trek 520", 2023, 1829);

        vehicle1.update("Toyota Prius", 2007, 26000);

        expect(vehicle1.modelName).to.equal("Toyota Prius");
        expect(vehicle1.year).to.equal(2007);
        expect(vehicle1.price).to.equal(26000);

        vehicle2.update("Trek 520", 2020, 1500);

        expect(vehicle2.modelName).to.equal("Trek 520");
        expect(vehicle2.year).to.equal(2020);
        expect(vehicle2.price).to.equal(1500);
    });

    it("should throw an error and not update if year is not valid", function () {

        let vehicle = new Vehicle("Toyota Prius", 2005, 23000);

        expect(vehicle.update.bind(vehicle, "Toyota Prius", 1949, 26000)).to.throw(Error, "Year must be between 1950 and 2100");
        expect(vehicle.year).to.equal(2005);
    });

    it("should throw an error and not update if price is not valid", function () {

        let vehicle = new Vehicle("Toyota Prius", 2005, 23000);

        expect(vehicle.update.bind(vehicle, "Toyota Prius", 2007, 0)).to.throw(Error, "Price must be greater than 0");
        expect(vehicle.price).to.equal(23000);
    });
});

describe ('Data Manipulation - Instance and Static Methods', function () {

    it('should return a summary of a vehicle\'s details', function () {

        let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
        expect(vehicle1.getDetails()).to.equal("The 2005 Toyota Prius costs $23000 and has 0 reviews.");

        let vehicle2 = new Vehicle("Trek 520", 2023, 1829);
        expect(vehicle2.getDetails()).to.equal("The 2023 Trek 520 costs $1829 and has 0 reviews.");
    });

    it('can add new review to tester and vehicle', function () {
        let tester1 = new Tester("Bob Jones");
        let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
        let review1 = new Review(vehicle1, tester1, 1, "Great car, excellent gas mileage!");

        let tester2 = new Tester("Desiree Smith");
        let vehicle2 = new Vehicle("Dodge Ram", 1985, 300);
        let review2 = new Review(vehicle2, tester2, 3, "Lots of rust, but still reliable.");

        let review3 = new Review(vehicle1, tester2, 5, "Good ride, but wish it charged faster.");
        let review4 = new Review(vehicle2, tester1, 5, "Best car I've ever driven!");

        review1.addReview();
        review2.addReview();
        review3.addReview();
        review4.addReview();

        expect(vehicle1.reviews).to.have.length(2);
        expect(vehicle1.reviews).to.include(review1, review3);

        expect(tester1.reviews).to.have.length(2);
        expect(tester1.reviews).to.include(review1, review4);
    });

    it('should filter an arbitrary number of reviews by star rating', function () {

        let tester1 = new Tester("Bob Jones");
        let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
        let review1 = new Review(vehicle1, tester1, 1, "Great car, excellent gas mileage!");

        let tester2 = new Tester("Desiree Smith");
        let vehicle2 = new Vehicle("Dodge Ram", 1985, 300);
        let review2 = new Review(vehicle2, tester2, 3, "Lots of rust, but still reliable.");

        let review3 = new Review(vehicle1, tester2, 5, "Good ride, but wish it charged faster.");
        let review4 = new Review(vehicle2, tester1, 5, "Best car I've ever driven!");

        let filtered = Review.filterByStars(3, review1, review2, review3);
        expect(filtered).to.be.an("array");
        expect(filtered).to.have.length(1);
        expect(filtered[0].starRating).to.equal(3);
        expect(filtered[0]).to.deep.equal(review2);

        let filtered2 = Review.filterByStars(5, review1, review2, review3, review4);
        expect(filtered2).to.be.an("array");
        expect(filtered2).to.have.length(2);
        expect(filtered2[0].starRating).to.equal(5);
        expect(filtered2[1].starRating).to.equal(5);
        expect(filtered2).to.include(review3);
        expect(filtered2).to.include(review4);
    });

    it('should find one vehicle review by tester name', function () {

        let tester1 = new Tester("Bob Jones");
        let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
        let review1 = new Review(vehicle1, tester1, 1, "Great car, excellent gas mileage!");

        let tester2 = new Tester("Desiree Smith");
        let vehicle2 = new Vehicle("Dodge Ram", 1985, 300);
        let review2 = new Review(vehicle2, tester2, 3, "Lots of rust, but still reliable.");

        let review3 = new Review(vehicle1, tester2, 5, "Good ride, but wish it charged faster.");
        let review4 = new Review(vehicle2, tester1, 5, "Best car I've ever driven!");

        review1.addReview();
        review2.addReview();
        review3.addReview();
        review4.addReview();

        let filtered1 = vehicle1.findReviewByTester("Bob Jones");
        expect(filtered1).to.deep.equal(review1);
    });
});


describe ('Class Interactions - Submitting a Review', function () {

    it('tester can submit review for valid vehicle', function () {

        let tester = new Tester("Bob Jones");
        let validVehicle = new Vehicle("Toyota Prius", 2005, 23000);

        let submittedReview = tester.submitReview(validVehicle, 3, "Very cozy.");
        // check review is an instance of the review class
        expect(submittedReview instanceof Review).to.be.true;

        // check review is in tester's reviews
        expect(tester.reviews).to.have.length(1);
        expect(tester.reviews[0].vehicle).to.include(validVehicle);
        expect(tester.reviews[0].tester).to.include(tester);
        expect(tester.reviews[0].starRating).to.equal(3);
        expect(tester.reviews[0].text).to.equal("Very cozy.");

        // check review is in vehicle's reviews
        expect(validVehicle.reviews).to.have.length(1);
        expect(validVehicle.reviews[0].vehicle).to.include(validVehicle)
        expect(validVehicle.reviews[0].tester).to.include(tester)
        expect(validVehicle.reviews[0].starRating).to.equal(3)
        expect(validVehicle.reviews[0].text).to.equal("Very cozy.")
    });

    it('tester cannot submit review if vehicle is invalid', function () {

        let tester = new Tester("Bob Jones")
        let invalidVehicle = new Vehicle(5);

        expect(tester.submitReview.bind(tester, invalidVehicle, 5, "This vehicle is not valid")).to.throw(Error, "Cannot submit review for invalid vehicle.");
        // check review is not in tester's reviews
        expect(tester.reviews).to.have.length(0);
        // check review is not in vehicle's reviews
        expect(invalidVehicle.reviews).to.have.length(0);
    });


    it('tester receives attribute of bikeTester and/or eBikeTester after successfully submitting a review.', function () {
        let tester = new Tester("Bob Jones");
        let validVehicle = new Vehicle("Toyota Prius", 2005, 23000);

        tester.submitReview(validVehicle, 3, "Very cozy.");
        expect(tester.bikeTester).to.be.oneOf([undefined, false]);
        expect(tester.eBikeTester).to.be.oneOf([undefined, false]);

        let validBicycle = new Bicycle("Trek 520", 2023, 1829);

        tester.submitReview(validBicycle, 5, "Great for touring and gravel");
        expect(tester.bikeTester).to.be.true;
        expect(tester.eBikeTester).to.be.oneOf([undefined, false]);

        let validEBike = new ElectricBicycle("Specialized", 2010, 600, "Touring", 18, 26, 30, 45);
        tester.submitReview(validEBike, 1, "Terrible range");
        expect(tester.bikeTester).to.be.true;
        expect(tester.eBikeTester).to.be.true;
    });
});
