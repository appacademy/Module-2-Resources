//!!START
class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3
    }

    hasValidSideLengths() {
        if (this.side1 + this.side2 <= this.side3) return false;
        if (this.side2 + this.side3 <= this.side1) return false;
        if (this.side1 + this.side3 <= this.side2) return false;
        return true
    }

    validate() {
        if (this.hasValidSideLengths() === true) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
        return this
    }

    static getValidTriangles(...triangles) {
        return triangles.filter((triangle) => triangle.isValid === true)
    }
}

class Scalene extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3)
        this.isValidTriangle = this.hasValidSideLengths()
    }

    isScalene() {
        if (this.side1 !== this.side2 && this.side2 !== this.side3) {
            return true;
        }
        return false;
    }

    validate() {
        if (this.isScalene() === true) {
            this.isValidScalene = true;
        } else {
            this.isValidScalene = false;
        }
        return this
    }
}

class Isosceles extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3)
        this.isValidTriangle = this.hasValidSideLengths()
    }

    isIsosceles() {
        if (this.side1 === this.side2) return true;
        if (this.side2 === this.side3) return true;
        if (this.side1 === this.side3) return true;
        return false;
    }

    validate() {
        if (this.isIsosceles() === true) {
            this.isValidIsosceles = true;
        } else {
            this.isValidIsosceles = false;
        }
        return this
    }
}


module.exports = {
    Triangle,
    Scalene,
    Isosceles
};

//!!END
