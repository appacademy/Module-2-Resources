//!!START
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { Triangle, Scalene, Isosceles } = require("../problems/triangle");

describe("Triangle", () => {

    let triangle;
    let invalidTriangle;
    let anotherTriangle;
    let validTriangles;

    let side1 = 3;
    let side2 = 4;
    let side3 = 5;
    let perimeter = 12;


    beforeEach(() => {
      triangle = new Triangle(side1, side2, side3);
      invalidTriangle = new Triangle(1, 1, 7);
      anotherTriangle = new Triangle(2 ,3, 2);
    });

    describe("constructor()", () => {

      it("should return an instance of Triangle", () => {
        expect(triangle).to.be.an.instanceof(Triangle);
      });

      it("should set all three side length properties (side1, side2, side3)", () => {
        expect(triangle.side1).to.equal(side1);
        expect(triangle.side2).to.equal(side2);
        expect(triangle.side3).to.equal(side3);
      });
    });

    describe("getPerimeter()", () => {

        it("should return the perimeter (sum of all three sides)", () => {
          expect(triangle.getPerimeter()).to.deep.equal(perimeter);
        });
    });

    describe("hasValidSideLengths()", () => {

        it("should return true for a valid triangle", () => {
          expect(triangle.hasValidSideLengths()).to.be.true;
        });

        it("should return false for an invalid triangle", () => {
            expect(invalidTriangle.hasValidSideLengths()).to.be.false;
        });
    });

    describe("validate()", () => {

        beforeEach(() => {
            triangle.validate()
            invalidTriangle.validate()
        });

        it("should add `isValid: true` to the triangle instance if valid", () => {
          expect(triangle).to.haveOwnProperty("isValid");
          expect(triangle.isValid).to.be.true;
        });

        it("should add `isValid: false` to the triangle instance if invalid", () => {
          expect(invalidTriangle).to.haveOwnProperty("isValid");
          expect(invalidTriangle.isValid).to.be.false;
        });
    });

    describe("static getValidTriangles()", () => {

      beforeEach(() => {
          triangle.validate();
          invalidTriangle.validate();
          anotherTriangle.validate();
          validTriangles = Triangle.getValidTriangles(triangle, invalidTriangle, anotherTriangle);
      });

      it("should return a list of valid triangles", () => {
        expect(validTriangles).to.include(triangle);
        expect(validTriangles).to.include(anotherTriangle);
        expect(validTriangles).to.not.include(invalidTriangle);


        expect(invalidTriangle.isValid).to.be.false;
      });
  });
});


describe("Scalene", () => {

  let scalene;
  let invalidScalene;

  let side1 = 3;
  let side2 = 4;
  let side3 = 5;

  beforeEach(() => {
    scalene = new Scalene(side1, side2, side3);
    invalidScalene = new Scalene(1, 1, 7);
  });

  describe("constructor()", () => {

    it("should return an instance of Scalene", () => {
      expect(scalene).to.be.an.instanceof(Triangle);
      expect(scalene).to.be.an.instanceof(Scalene);
      expect(invalidScalene).to.be.an.instanceof(Triangle);
      expect(invalidScalene).to.be.an.instanceof(Scalene);
    });

    it("should set all three side length properties and isValidTriangle property", () => {
      expect(scalene.side1).to.equal(side1);
      expect(scalene.side2).to.equal(side2);
      expect(scalene.side3).to.equal(side3);
      expect(scalene.isValidTriangle).to.equal(true);
      expect(invalidScalene.isValidTriangle).to.equal(false);
    });
  });

  describe("isScalene()", () => {

    it("should return true for a valid Scalene triangle", () => {
      expect(scalene.isScalene()).to.be.true;
    });

    it("should return false for an invalid Scalene triangle", () => {
        expect(invalidScalene.isScalene()).to.be.false;
    });

  });


  describe("validate()", () => {

    beforeEach(() => {
        scalene.validate()
        invalidScalene.validate()
    });


    it("should add `isValidScalene: true` to the scalene instance if valid", () => {
      expect(scalene).to.haveOwnProperty("isValidScalene");
      expect(scalene.isValidScalene).to.be.true;
    });

    it("should add `isValidScalene: false` to the scalene instance if invalid", () => {
      expect(invalidScalene).to.haveOwnProperty("isValidScalene");
      expect(invalidScalene.isValidScalene).to.be.false;
    });
  });
});

describe("Isosceles", () => {

  let isosceles;
  let invalidIsosceles;

  let side1 = 4;
  let side2 = 4;
  let side3 = 5;

  beforeEach(() => {
    isosceles = new Isosceles(side1, side2, side3);
    invalidIsosceles = new Isosceles(3, 6, 7);
  });



  describe("constructor()", () => {

    it("should return an instance of Isosceles", () => {
      expect(isosceles).to.be.an.instanceof(Triangle);
      expect(isosceles).to.be.an.instanceof(Isosceles);
      expect(invalidIsosceles).to.be.an.instanceof(Triangle);
      expect(invalidIsosceles).to.be.an.instanceof(Isosceles);
    });

    it("should set all three side length properties and isValidTriangle property", () => {
      expect(isosceles.side1).to.equal(side1);
      expect(isosceles.side2).to.equal(side2);
      expect(isosceles.side3).to.equal(side3);
      expect(isosceles.isValidTriangle).to.equal(true);
      expect(invalidIsosceles.isValidTriangle).to.equal(true);
    });
  });

  describe("isIsosceles()", () => {

    it("should return true for a valid Isosceles triangle", () => {
      expect(isosceles.isIsosceles()).to.be.true;
    });

    it("should return false for an invalid Isosceles triangle", () => {
        expect(invalidIsosceles.isIsosceles()).to.be.false;
    });

  });


  describe("validate()", () => {

    beforeEach(() => {
        isosceles.validate()
        invalidIsosceles.validate()
    });


    it("should add `isValidIsosceles: true` to the isosceles instance if valid", () => {
      expect(isosceles).to.haveOwnProperty("isValidIsosceles");
      expect(isosceles.isValidIsosceles).to.be.true;
    });

    it("should add `isValidIsosceles: false` to the isosceles instance if invalid", () => {
      expect(invalidIsosceles).to.haveOwnProperty("isValidIsosceles");
      expect(invalidIsosceles.isValidIsosceles).to.be.false;
    });
  });
});

//!!END
