export class Display {
  constructor(element, board) {
    //variable initializations
    this.color1 = "lightgray"
    this.color2 = "white"
    this.chessBoard = document.getElementById(element)
    this.boardSize = 700;
    this.onCellClick = null;

    //method calls
    this.#initializeBoard();
    this.#drawSquares();
    this.drawBoard(board);
  }

  drawBoard(board) {
    this.#drawPieces(board);

  }

  hightlightCell(location) {
    console.log("Highlighting cell at " + location)
  }

  unhightlight() {
    
  }

  #initializeBoard() {
    //setSize
    this.chessBoard.style.width = this.boardSize + "px";
    this.chessBoard.style.height = this.boardSize + "px";
    this.chessBoard.style.borderColor =  "black";
    this.chessBoard.style.borderStyle =  "solid";
    this.chessBoard.style.borderWidth =  "1px";
    this.chessBoard.style.display = "grid";
    this.chessBoard.style.gridTemplateColumns = "repeat(8, 1fr)";
    this.chessBoard.style.gridTemplateRows = "repeat(8, 1fr)";
  }

  #drawSquares() {
    //this.chessBoard.innerHTML = ""
    for (let row = 0; row < 8; row++) {
      
      for (let column = 0; column < 8; column++) {
        //create the cells
        let cell = document.createElement("div");
        let cellID = row + "," + column;


        //Style the cells
        cell.style.height = this.boardSize / 8 + "px";
        cell.style.width  = this.boardSize / 8 + "px";
        cell.classList.add(((row + column) % 2) ? "light" : "dark")
        cell.classList.add("boardSquare")
        cell.id = cellID;


        //create the cell events
        cell.addEventListener("click", () => {
          if (this.onCellClick) {
            this.onCellClick([row, column])    
          }
        })

        this.chessBoard.appendChild(cell);
      }
      
    }
  }

  //This looks through the board grid and then finds a corrosponding spot for each piece it finds then displays them.

  #drawPieces(board) {
    console.log(board.grid[0][0])
    for (let row = 0; row < 8; row++) {
      for (let column = 0; column < 8; column++) {
        if (board.grid[row][column] != null) {
          let currentPiece = board.grid[row][column]
          let piece = document.createElement("div");
          let cell = document.getElementById(row + "," + column);
      
          //styles the piece
          piece.classList.add("piece")
          piece.classList.add("player" + currentPiece.player.id)
          //Adds piece
          cell.appendChild(piece)
        }
      }
    }
  }

  updateSelectedPiece() {
    document.getElementById
  }

  updateHoverPiece() {

  }
}




