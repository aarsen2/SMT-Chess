let chessBoard = document.getElementById("chessBoard")
let boardSize = 700;
let color1 = "white"
let color2 = "DarkGray"
let highlightColor = "gray"
let hoverColor = "LightGray"
let oldHoverColor = "";
let logBox = document.getElementById("logBox")
let turnDisplay = document.getElementById("turnDisplay")

export {createChessBoard}


function createChessBoard() {
    chessBoard.style.height = boardSize + "px";
    chessBoard.style.width = boardSize + "px";
    chessBoard.style.borderColor = "black"
    chessBoard.style.borderStyle = "solid"
    chessBoard.style.borderWidth = "1"
    chessBoard.style.display = "grid";
    chessBoard.style.gridTemplateColumns = "repeat(8, 1fr)";
    chessBoard.style.gridTemplateRows = "repeat(8, 1fr)";

    
    //Cell Creation
    for (let row = 0; row < 8; row++) {
        let newthing = 9;
        for (let column = 0; column < 8; column++) {
            //new Cell Element Creation with ID's j = collumn; i = row.
            let cell = document.createElement("div")
            cell.id = `${column},${row}`
            chessBoard.appendChild(cell)


            //style cells
            cell.style.boxSizing = "border-box"; 
            cell.style.height = boardSize/8 + "px";
            cell.style.width = boardSize/8 + "px";
            cell.style.backgroundColor = (row + column) % 2 == 0 ? color1 : color2
            cell.style.alignItems = "center"
            cell.style.justifyContent = "center"
            cell.style.display = "flex"
        



            //Adding an event for each cell
            cell.addEventListener("mouseover", function() {
                    if (this.style.backgroundColor != "gray") {
                        this.style.backgroundColor = "lightGray";
                    }
                    console.log("mouseover")
                }
            )
            cell.addEventListener("mouseout", function() {
                    if (this.style.backgroundColor != "gray") {
                        this.style.backgroundColor = (row + column) % 2 == 0 ? color1 : color2
                    }
                    console.log("mouseout") 
                }
            )
        }
    }
}

function cellClickHandler() {
        console.log("clicked")
}