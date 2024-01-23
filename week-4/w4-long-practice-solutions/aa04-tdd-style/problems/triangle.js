// Your code here
class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  getPerimiter() {
    return this.side1 + this.side2 + this.side3;
  }

  hasValidLength() {
    return this.side1 + this.side2 < this.side3
      ? false
      : this.side2 + this.side3 < this.side1
      ? false
      : this.side1 + this.side3 < this.side2
      ? false
      : true;
  }

  validate() {
    if (this.hasValidLength()) {
      this.isValid = true;
      return true;
    } else {
      this.isValid = false;
      return false;
    }
  }

  static getValidTriangles(triangles) {
    return triangles.filter((triangle) => triangle.validate());
  }
}
class Scalene extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    this.isValidTriangle = this.hasValidLength();
  }

  isScalene() {
    return this.side1 === this.side2
      ? false
      : this.side2 === this.side3
      ? false
      : this.side1 === this.side3
      ? false
      : true;
  }

  validate() {
    if (this.isScalene()) {
      this.isValidScalene = true;
      return true;
    } else {
      this.isValidScalene = false;
      return false;
    }
  }
}
class Isosceles extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    this.isValidTriangle = this.hasValidLength();
  }

  isIsosceles() {
    return this.side1 === this.side2
      ? true
      : this.side2 === this.side3
      ? true
      : this.side1 === this.side3
      ? true
      : false;
  }

  validate() {
    if (this.isIsosceles()) {
      this.isValidIsosceles = true;
    } else {
      this.isValidIsosceles = false;
    }
  }
}

module.exports = {
  Triangle,
  Scalene,
  Isosceles,
};
