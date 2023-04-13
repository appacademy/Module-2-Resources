class Piece {
    constructor(white=false) {
        this.white = this._setWhite(white);
        this.captured = false;
    }

    _isWhite() {
        return this.white;
    }

    _setWhite(white) {
        this.white = white;
        return this.white;
    }

    isCaptured() {
        return this.captured;
    }

    setCaptured(captured) {
        this.captured = captured;
    }

    findPositions(start, end) {
        return {
            startX: start.getX(),
            startY: start.getY(),
            endX: end.getX(),
            endY: end.getY(),
        }
    }
    
    checkPieceColor(board, endX, endY) {
        
        const endPiece = board[endX][endY].getPiece();
        
        return endPiece && endPiece._isWhite() === this._isWhite()
    }

    canMove(board, start, end) {

    }
}

module.exports = Piece;