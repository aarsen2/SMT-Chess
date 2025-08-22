export class movementCalculations {
    constructor(board, player1, player2) {
        this.board = board;
        this.debugging = true;
        this.player1 = player1
        this.player2 = player2

    }

    onBoard(location) {
        if (location[0] < 8 && location[0] >= 0) {
            if (location[1] < 8 && location[1] >= 0) {
                return true;
            }
        }
        else { return false; }
    }

    calculateLegalMoves(location) {
        let currentLegalMoves = [];
        let selectedPiece = this.board.getPiece(location)
        let pieceType = selectedPiece.type.Tier;
        switch (pieceType) {
            case 1: { currentLegalMoves = this.checkPawn(location) } break;

            case 2: { currentLegalMoves = this.checkKnight(location) } break;
            // when i implimentBishop
            //case 2: { currentLegalMoves = selectedPiece.isBishop ? this.checkBishop(location) : this.checkKnight(location)} break;

            case 3: { currentLegalMoves = this.checkRook(location) } break;

            case 4: { currentLegalMoves = this.checkQueen(location) } break;

            case 5: { currentLegalMoves = this.checkKing(location) } break;

            default: alert("Something has gone terribly wrong in the switch stament for move legality")
        }

        console.log(currentLegalMoves)
        return currentLegalMoves
    }





    checkPawn(location) {
        let currentLegalMoves = [];
        let selectedPiece = this.board.getPiece(location)
        let piecePlayer = selectedPiece.player
        let direction = piecePlayer == this.player1 ? 1 : -1;
        let testSpace = [];

        if (this.debugging) {
            console.log("Calculating legal moves for Pawn")
        }


        // Checks 1 space in front of the pawn
        testSpace = [location[0] + direction, location[1]];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) == null) {
                currentLegalMoves[currentLegalMoves.length] = testSpace

                //Checks 2 paces in front of the pawn and checks to see if it has moved.
                testSpace = [location[0] + (direction * 2), location[1]]
                if (this.onBoard(testSpace)) {
                    if (this.board.getPiece(testSpace) == null && !selectedPiece.hasMoved) {
                        currentLegalMoves[currentLegalMoves.length] = testSpace
                    }
                }
            }
        }

        //checks to the right diagonal for enemy
        testSpace = [location[0] + direction, (location[1] + 1)];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }

        //checks to the left Diagonal for enemy
        testSpace = [location[0] + direction, (location[1] - 1)];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }

        if (this.debugging) {
            console.log(currentLegalMoves)
        }


        return currentLegalMoves
    }

    checkBishop(location) {
        let currentLegalMoves = [];
        let selectedPiece = this.board.getPiece(location)
        let piecePlayer = selectedPiece.player
        let testSpace;
        let endUp = false;
        let endDown = false;
        let endRight = false;
        let endLeft = false;

        if (this.debugging) {
            console.log("'")
            console.log("current State of the directions. loop #")
            console.log(`up ${endUp}`)
            console.log(`down ${endDown}`)
            console.log(`right ${endRight}`)
            console.log(`left ${endLeft}`)
        }

        for (let i = 1; i < 9; i++) {
            console.log(i)
            if (this.debugging) {
                console.log()
                console.log("current State of the directions. loop #" + i)
                console.log(`up ${endUp}`)
                console.log(`down ${endDown}`)
                console.log(`right ${endRight}`)
                console.log(`left ${endLeft}`)
            }

            // checks up right
            if (!endUp) {
                testSpace = [location[0] - i, location[1] + i];
                if (this.onBoard(testSpace)) {
                    if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                        currentLegalMoves[currentLegalMoves.length] = testSpace;
                    }

                    //ends this direction if a piece isfound
                    if (this.board.getPiece(testSpace) != null) {
                        endUp = true;
                    }
                }
            }

            //checks down right
            if (!endDown) {
                testSpace = [location[0] + i, location[1] + i];
                if (this.onBoard(testSpace)) {
                    if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                        currentLegalMoves[currentLegalMoves.length] = testSpace;
                    }

                    //ends this direction if a piece isfound
                    if (this.board.getPiece(testSpace) != null) {
                        endDown = true;
                    }
                }
            }


            //checks down left
            if (!endRight) {
                testSpace = [location[0] + i, location[1] - i];
                if (this.onBoard(testSpace)) {
                    if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                        currentLegalMoves[currentLegalMoves.length] = testSpace;
                    }

                    //ends this direction if a piece isfound
                    if (this.board.getPiece(testSpace) != null) {
                        endRight = true;
                    }
                }
            }


            //checks up left
            if (!endLeft) {
                testSpace = [location[0] - i, location[1] - i];
                if (this.onBoard(testSpace)) {
                    if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                        currentLegalMoves[currentLegalMoves.length] = testSpace;
                    }

                    //ends this direction if a piece isfound
                    if (this.board.getPiece(testSpace) != null) {
                        endLeft = true;
                    }
                }
            }
        }
        return currentLegalMoves
    }

    checkKnight(location) {
        let currentLegalMoves = [];
        let selectedPiece = this.board.getPiece(location)
        let piecePlayer = selectedPiece.player
        let testSpace;

        testSpace = [location[0] - 2, location[1] + 1];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }

        //right top
        testSpace = [location[0] - 1, location[1] + 2];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }

        //right bottom
        testSpace = [location[0] + 1, location[1] + 2];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }

        //bottom right
        testSpace = [location[0] + 2, location[1] + 1];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }

        //bottom left
        testSpace = [location[0] + 2, location[1] - 1];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }

        //left bottom
        testSpace = [location[0] + 1, location[1] - 2];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }

        //left top
        testSpace = [location[0] - 1, location[1] - 2];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }

        //top left
        testSpace = [location[0] - 2, location[1] - 1];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }

        return currentLegalMoves
    }

    checkRook(location) {
        let currentLegalMoves = [];
        let selectedPiece = this.board.getPiece(location)
        let piecePlayer = selectedPiece.player
        let testSpace;
        let endUp = false;
        let endDown = false;
        let endRight = false;
        let endLeft = false;

        if (this.debugging) {
            console.log("'")
            console.log("current State of the directions. loop #")
            console.log(`up ${endUp}`)
            console.log(`down ${endDown}`)
            console.log(`right ${endRight}`)
            console.log(`left ${endLeft}`)
        }

        for (let i = 1; i < 9; i++) {
            // checks up
            console.log(i)
            if (this.debugging) {
                console.log()
                console.log("current State of the directions. loop #" + i)
                console.log(`up ${endUp}`)
                console.log(`down ${endDown}`)
                console.log(`right ${endRight}`)
                console.log(`left ${endLeft}`)
            }

            if (!endUp) {
                testSpace = [location[0] - i, location[1]];
                if (this.onBoard(testSpace)) {
                    if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                        currentLegalMoves[currentLegalMoves.length] = testSpace;
                    }

                    //ends this direction if a piece isfound
                    if (this.board.getPiece(testSpace) != null) {
                        endUp = true;
                    }
                }
            }

            //checks down
            if (!endDown) {
                testSpace = [location[0] + i, location[1]];
                if (this.onBoard(testSpace)) {
                    if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                        currentLegalMoves[currentLegalMoves.length] = testSpace;
                    }

                    //ends this direction if a piece isfound
                    if (this.board.getPiece(testSpace) != null) {
                        endDown = true;
                    }
                }
            }


            //checks right
            if (!endRight) {
                testSpace = [location[0], location[1] + i];
                if (this.onBoard(testSpace)) {
                    if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                        currentLegalMoves[currentLegalMoves.length] = testSpace;
                    }

                    //ends this direction if a piece isfound
                    if (this.board.getPiece(testSpace) != null) {
                        endRight = true;
                    }
                }
            }


            //checks left
            if (!endLeft) {
                testSpace = [location[0], location[1] - i];
                if (this.onBoard(testSpace)) {
                    if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                        currentLegalMoves[currentLegalMoves.length] = testSpace;
                    }

                    //ends this direction if a piece isfound
                    if (this.board.getPiece(testSpace) != null) {
                        endLeft = true;
                    }
                }
            }
        }
        return currentLegalMoves
    }

    checkQueen(location) {
        let rookOptions = this.checkRook(location);
        let bishopOptions = this.checkBishop(location);

        for (let i = 0; i < rookOptions.length; i++) {
            bishopOptions[bishopOptions.length] = rookOptions[i]
        }

        return bishopOptions;
    }

    checkKing(location) {
        let currentLegalMoves = [];
        let selectedPiece = this.board.getPiece(location)
        let piecePlayer = selectedPiece.player
        let testSpace;

        //top middle
        testSpace = [location[0] - 1, location[1] + 0];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }

        //top right
        testSpace = [location[0] - 1, location[1] + 1];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }

        //right middle
        testSpace = [location[0] + 0, location[1] + 1];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }

        //bottom right
        testSpace = [location[0] + 1, location[1] + 1];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }

        //bottom middle
        testSpace = [location[0] + 1, location[1] + 0];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }

        //bottom left
        testSpace = [location[0] + 1, location[1] - 1];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }

        //left middle
        testSpace = [location[0] + 0, location[1] - 1];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }

        //top left
        testSpace = [location[0] - 1, location[1] - 1];
        if (this.onBoard(testSpace)) {
            if (this.board.getPiece(testSpace) == null || (this.board.getPiece(testSpace) != null && this.board.getPiece(testSpace).player != piecePlayer)) {
                currentLegalMoves[currentLegalMoves.length] = testSpace
            }
        }
        return currentLegalMoves
    }
}