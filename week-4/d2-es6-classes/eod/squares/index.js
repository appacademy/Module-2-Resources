class Square {
    constructor(x, y, piece=null) {
        this.x = x;
        this.y = y;
        this.piece = piece;

        if (x > 7 || x < 0) {
            throw new Error('x coordinate out of bounds')
        }

        if (y > 7 || y < 0) {
            throw new Error('y coordinate out of bounds')
        }
    }

    getPiece() {
        return this.piece;
    }

    setPiece(newPiece) {
        this.piece = newPiece
    }

    getX() {
        return this.x;
    }

    setX(newX) {
        this.x = newX;
    }

    getY() {
        return this.y;
    }

    setY(newY) {
        this.y = newY;
    }
}

module.exports = Square;