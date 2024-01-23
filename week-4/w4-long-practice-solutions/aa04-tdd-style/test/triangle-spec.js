// Your code here
const expect = require("chai").expect;

const { Triangle, Scalene, Isosceles } = require("../problems/triangle");

describe("The Triangle class", () => {
  let triangle;
  let badTri;

  beforeEach(() => {
    triangle = new Triangle(3, 3, 3);
    badTri = new Triangle(4, 2, 1);
  });

  describe("the constructor", () => {
    it("should have properties for side1, side2, and side3", () => {
      expect(triangle).to.have.property("side1", 3);
      expect(triangle).to.have.property("side2", 3);
      expect(triangle).to.have.property("side3", 3);
    });
  });

  describe("the getPerimiter() instance method", () => {
    it("should return the sum of all 3 sides", () => {
      expect(triangle.getPerimiter()).to.equal(9);
    });
  });

  describe("the hasValidLenghts() instance method", () => {
    it("should verify that the sum of any 2 sides is greater than the other side", () => {
      expect(triangle.hasValidLength()).to.be.true;
      expect(badTri.hasValidLength()).to.be.false;
    });
  });

  describe("the validate() instance method", () => {
    it("should add an isValid property to the instance with a value of true if it is valid and false if not", () => {
      triangle.validate();
      badTri.validate();

      expect(triangle).to.eql({ side1: 3, side2: 3, side3: 3, isValid: true });
      expect(badTri).to.eql({ side1: 4, side2: 2, side3: 1, isValid: false });
    });
  });

  describe("the getValidTriangles(triangles) static method", () => {
    it("should return all instances that are valid triangles", () => {
      expect(Triangle.getValidTriangles([triangle, badTri])).to.eql([triangle]);
    });
  });

  describe("The Scalene class", () => {
    let scalene;
    let badScalene;
    let invalidScalene;

    beforeEach(() => {
      scalene = new Scalene(3, 4, 5);
      badScalene = new Scalene(3, 3, 4);
      invalidScalene = new Scalene(1, 4, 6);
    });

    describe("the constructor function", () => {
      it("should inherit from the Triangle class", () => {
        expect(scalene instanceof Scalene).to.be.true;
        expect(scalene instanceof Triangle).to.be.true;
      });

      it("should have an isValidTriangle property", () => {
        expect(scalene).to.have.property("isValidTriangle", true);
        expect(invalidScalene).to.have.property("isValidTriangle", false);
      });
    });

    describe("the isScalene instance method", () => {
      it("should return true if the instance is a valid scalene triangle", () => {
        expect(scalene.isScalene()).to.be.true;
        expect(badScalene.isScalene()).to.be.false;
      });
    });

    describe("the Scalene.prototype.validate() instance method", () => {
      it("should add an isValidScalene property that is true if valid and false if not", () => {
        scalene.validate();
        badScalene.validate();

        expect(scalene).to.have.property("isValidScalene", true);
        expect(badScalene).to.have.property("isValidScalene", false);
      });

      it("should not alter the Triangle.prototype.validate() instance method", () => {
        triangle.validate();
        expect(triangle).to.not.have.property("isValidScalene");
      });
    });
  });

  describe("The Isosceles class", () => {
    let iso;
    let badIso;
    let invalidIso;

    beforeEach(() => {
      badIso = new Isosceles(3, 4, 5);
      iso = new Isosceles(3, 3, 4);
      invalidIso = new Isosceles(1, 4, 6);
    });

    describe("the constructor function", () => {
      it("should inherit from the Triangle class", () => {
        expect(iso instanceof Isosceles).to.be.true;
        expect(iso instanceof Triangle).to.be.true;
      });

      it("should have an isValidTriangle property", () => {
        expect(iso).to.have.property("isValidTriangle", true);
        expect(invalidIso).to.have.property("isValidTriangle", false);
      });
    });

    describe("the isIsosceles instance method", () => {
      it("should return true if the instance is a valid Isosceles triangle", () => {
        expect(iso.isIsosceles()).to.be.true;
        expect(badIso.isIsosceles()).to.be.false;
      });
    });

    describe("the Isosceles.prototype.validate() instance method", () => {
      it("should add an isValidIsosceles property that is true if valid and false if not", () => {
        iso.validate();
        badIso.validate();

        expect(iso).to.have.property("isValidIsosceles", true);
        expect(badIso).to.have.property("isValidIsosceles", false);
      });

      it("should not alter the Triangle.prototype.validate() instance method", () => {
        triangle.validate();
        expect(triangle).to.not.have.property("isValidIsosceles");
      });
    });
  });
});
