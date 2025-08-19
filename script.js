import { createChessBoard } from "/display.js";


createChessBoard()



/*
let boardArray = Array(8).fill(null).map(() => Array(8).fill(null));;

let selected = false;
let selectedPiece = [0,0];
let lastSelectedPiece = [0,0];
let newLocation = []
let logging = true;
let player1 = "Aaron"
let player2 = "Ashton"
let turn = player1;





function changeTurn() {
    if (turn == player1) {turn = player2}
    else {turn = player1}
}


    

    
}

function placePiece(row,column) {
    let cell = boardArray[row][column]
    let piece = document.createElement("div")
    piece.style.width = (parseInt(cell.style.width) * .8) + "px" 
    piece.style.height = (parseInt(cell.style.height) * .8) + "px" 
    //piece.style.backgroundColor = "black"
    cell.appendChild(piece)
}

function initializeBoard() {

    function initializeHalf(player){
        //decide if you are doing the top or bottom player
        let start;
        let className;
        if (player == 1) {start = 0; className = player1}
        else if (player == 2) {start = 6; className = player2}

        //do half the board
        for (let row = start; row < start + 2; row++) {
            //row
            for (let column = 0; column < 8; column++) {
                //columns
                placePiece(column,row)
                let piece = boardArray[column][row].children[0]
                let image = document.createElement("img")
                piece.appendChild(image);
                // Assign them a player id
                
                piece.classList.add(className)

                // Assign Piece Type
                switch(row) {
                    case 0: 
                    case 7:
                        ///Rook
                        if (column == 0 || column == 7) {
                            image.src = "img/rook.png"
                            image.style.width = "100%";
                            image.style.height = "100%";
                        }
                        ///knight
                        if (column == 1 || column == 6) {
                            image.src = "img/knight.png"
                            image.style.width = "100%";
                            image.style.height = "100%";                        
                        }
                        ///Bishop
                        if (column == 2 || column == 5) {
                            image.src = "img/bishop.png"
                            image.style.width = "100%";
                            image.style.height = "100%";
                        }
                        ///queen
                        if (column == 3) {
                            image.src = "img/queen.png"
                            image.style.width = "100%";
                          image.style.height = "100%";
                        }
                        ///king
                        if (column == 4) {
                            image.src = "img/king.png"
                            image.style.width = "100%";
                            image.style.height = "100%";                      
                        }
                        break;
                    case 1:
                    case 6: 
                        //console.log(`current i: ${row}, current J: ${column}`)
                        //piece.style.backgroundColor = "brown"
                        image.src = "img/pawn.png"
                        image.style.width = "100%";
                        image.style.height = "100%";
                        break;
                    default: console.log("Error in row input at swtich for i. input was " + row)
                }       
            }
        }
    }

    turnDisplay.innerText = turn;
    logBox.innerText = "START"
    initializeHalf(1)
    initializeHalf(2)

}


function select(column, row) {
    lastSelectedPiece = selectedPiece
    selectedPiece = [column, row]
    selected = true;
    document.getElementById(`${selectedPiece[0]},${selectedPiece[1]}`).style.backgroundColor = highlightColor
}

function unselect() {
    document.getElementById(`${selectedPiece[0]},${selectedPiece[1]}`).style.backgroundColor = (selectedPiece[0] + selectedPiece[1]) % 2 == 0 ? color1 : color2
    selected = false;
}

function cellClickHandler() {
    //log testss
    //console.log("You have clicked")
    //console.log(coordsX + "  " + coordsY)
    //console.log(this.children[0])

    let coords = this.id
    let column = parseInt(coords[0]) 
    let row = parseInt(coords[2])
    


    ///SELECTION LOGIC
    
    //Select a piece
    if (selected == false && this.children[0] && this.children[0].classList[0] == turn) {
        logMessage = `You selected the piece at row: ${row + 1} and column ${column + 1}`
        select(column, row) 
    }

    else if (selected == false && this.children[0] && this.children[0].classList[0] != turn) {
        logMessage = `its not your turn dummy`
        unselect()
    }

    //place a piece in an empty square
    else if (selected == true && !this.children[0]) {
        logMessage = `You want to place your piece at row: ${row + 1} and column ${column + 1}`
        newLocation = [column, row]
        movePiece();
        unselect()
    }

    //tries to select an empty square
    else if (selected == false && !this.children[0]) {
        logMessage = "There is no piece here for you to select."
        unselect()
    }

    //tries to place ontop of another piece
    else if (selected == true && this.children[0]) {
        let attackingPiece = document.getElementById(`${selectedPiece[0]},${selectedPiece[1]}`).children[0]
        let defendingPiece = this.children[0]
        



        //if it is not your own piece
        if (attackingPiece.classList[0] != defendingPiece.classList[0]) {
            newLocation = [column, row]
            logMessage = "You attacked and took a piece"
            movePiece()
        }
        
        //dont move piece
        else {
            logMessage = `You cannot place your piece here. You already have a piece here.`
        }

        unselect();
    }

    //something is very wrong
    else {logMessage = "something is terribly wrong. unexpected selection conditions."}




    //Logging
    if (logging) {console.log(logMessage)}


    //Updating the Dispaly
    logBox.innerText = logMessage
    turnDisplay.innerText = turn

    //Selection Highlighting.
    //runHilights()
    


}




function movePiece() {
    let oldSpot = document.getElementById(`${selectedPiece[0]},${selectedPiece[1]}`)
    let newSpot = document.getElementById(`${newLocation[0]},${newLocation[1]}`)
    newSpot.innerHTML = oldSpot.innerHTML
    oldSpot.innerHTML = ""
    console.log("movied piece")
    changeTurn()

}



createChessBoard(boardSize);
initializeBoard()

*/