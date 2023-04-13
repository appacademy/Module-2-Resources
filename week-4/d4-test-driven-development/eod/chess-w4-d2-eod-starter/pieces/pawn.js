const Piece = require('./piece');

class Pawn extends Piece {
    constructor(white) {
        super(white);
        this.firstMove = true;
    }

    getFirstMove() {
        return this.firstMove;
    }

    setFirstMove() {
        this.firstMove = !this.firstMove;
    }

    canMove(board, start, end) {
        const { startX, startY, endX, endY } = this.findPositions(start, end);
        if (this.checkPieceColor(board, endX, endY)) return false;

        const wMoves = [
            [startX - 2, startY],
            [startX - 1, startY]
        ]

        const bMoves = [
            [startX + 2, startY],
            [startX + 1, startY]
        ]

        if (this.white) {
            let [move1, move2] = wMoves;

            if (this.firstMove) {

                if((move1[0] === endX && move1[1] === endY) ||
                   (move2[0] === endX && move2[1] === endY)
                ) {
                    return true;
                }
            }
        } else {
            let [move1, move2] = bMoves;

            if (this.firstMove) {

                if((move1[0] === endX && move1[1] === endY) ||
                   (move2[0] === endX && move2[1] === endY)
                ) {
                    return true;
                }
            }
        }
    }
}

module.exports = Pawn;