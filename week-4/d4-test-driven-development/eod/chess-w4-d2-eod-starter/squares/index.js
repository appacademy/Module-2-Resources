class Square {
    constructor(x, y, piece=null) {
        this.x = x;
        this.y = y;
        this.piece = piece;

        if (x < 0 || x > 7) {
            throw new Error('x coordinate out of bounds');
        }

        if (y < 0 || y > 7) {
            throw new Error('y coordinate out of bounds');
        }
    }

    getPiece() {
        return this.piece;
    }

    setPiece(newPiece) {
        this.piece = newPiece;
    }

    getX() {
        return this.x;
    }

    setX(x) {
        this.x = x;
    }

    getY() {
        return this.y;
    }

    setY(y) {
        this.y = y
    }
}




module.exports = Square;