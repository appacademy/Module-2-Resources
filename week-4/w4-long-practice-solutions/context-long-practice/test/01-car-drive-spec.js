const assert = require("assert");

const Car = require("../problems/01-car-drive.js");

describe("Car's drive() method", function () {
  it("should return the speed of the car after calling drive()", function () {
    let car = new Car();
    let test1 = car.drive(10);
    let result1 = car.speed;

    let test2 = car.drive(50);
    let result2 = car.speed;

    let test3 = car.drive(100);
    let result3 = car.speed;

    assert.equal(test1, result1);
    assert.equal(test2, result2);
    assert.equal(test3, result3);
  });
});
