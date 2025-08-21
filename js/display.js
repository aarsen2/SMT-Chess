export class Display {
  constructor(element, board) {
    //variable initializations
    this.color1 = "lightgray"
    this.color2 = "white"
    this.chessBoard = document.getElementById(element)
    this.turnDisplay = document.getElementById("turnDisplay")
    this.hoveredPieceNameDisplay = document.getElementById("hoveredPieceNameDisplay")
    this.hoveredPieceAttackDisplay = document.getElementById("hoveredPieceAttackDisplay")
    this.hoveredPieceResistDisplay = document.getElementById("hoveredPieceResistDisplay")
    this.hoveredPieceWeaknessDisplay = document.getElementById("hoveredPieceWeaknessDisplay")
    this.hoveredPieceDescriptionDisplay = document.getElementById("hoveredPieceDescriptionDisplay")
    this.boardSize = 700;
    this.onCellClick = null;
    this.board = board

    //method calls
    this.#initializeBoard();
    this.#drawSquares();
    this.drawPieces();
  }


  highlightCell(location) {
    console.log("Highlighting cell at " + location)
    document.getElementById(`${location[0]},${location[1]}`).classList.add("selected")
  }

  unhighlightCell(location) {
    console.log("Unhighlighting cell at " + location)
    document.getElementById(`${location[0]},${location[1]}`).classList.remove("selected")
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


  
  #drawSquares() { // This creates the board visually in HTML
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

  drawPieces() {
    console.log(this.board.grid[0][0])
    for (let row = 0; row < 8; row++) {
      for (let column = 0; column < 8; column++) {
        let cell = document.getElementById(row + "," + column);
        cell.innerHTML = ""; 
        if (this.board.grid[row][column] != null) {
          let currentPiece = this.board.grid[row][column];
          let pieceName = currentPiece.type.Name;
          let pieceTier = currentPiece.type.Tier;
          let pieceType = currentPiece.type.Tier;
          let pieceIcon = `./img/SMT Demons/Rank ${pieceTier}/${pieceName}.png`
          let piece = document.createElement("div");


          //styles the piece
          piece.classList.add("piece")
          piece.classList.add("player" + currentPiece.player.id)
          
          
          //Sets up Hover Events
          cell.addEventListener("mouseenter", (event) => {
            let location = []
            location[0] = event.currentTarget.id[0]
            location[1] = event.currentTarget.id[2]
            let hoveredPiece = this.board.getPiece(location)
            this.hoveredPieceNameDisplay.innerText = "Name: " + hoveredPiece.type.Name
            this.hoveredPieceAttackDisplay.innerText = "Attack Type:" + hoveredPiece.type.Attack_Type
            this.hoveredPieceResistDisplay.innerText = "Resistance: " + hoveredPiece.type.Resistance
            this.hoveredPieceWeaknessDisplay.innerText = "Weakness: " + hoveredPiece.type.Weakness
            this.hoveredPieceDescriptionDisplay.innerText = "Description: " + hoveredPiece.type.Description
          })  



          cell.addEventListener("mouseleave", () => {
            this.hoveredPieceNameDisplay.innerText = "Name:"
            this.hoveredPieceAttackDisplay.innerText = "Attack Type:"
            this.hoveredPieceResistDisplay.innerText = "Resistance: "
            this.hoveredPieceWeaknessDisplay.innerText = "Weakness: "
            this.hoveredPieceDescriptionDisplay.innerText = "Description: "
          })  

          

          





          //preLoads the image to make sure that it works before setting the image. If it doesnt work then you get the default pawn image.
          const img = new Image();
            img.onload = () => {
              // file exists, safe to use
              piece.style.backgroundImage = `url("${pieceIcon}")`;
            };
            img.onerror = () => {
              // file not found, use fallback
              piece.style.backgroundImage = `url("./img/SMT Demons/Rank 1/Pawn.png")`;
            };
            img.src = pieceIcon;

          
          //Adds piece
          cell.appendChild(piece)

        }
      }
    }
  }
  
  updateTurnDisplay(turn) {
    let turnString = `Current Turn: ${turn.name}` 
    this.turnDisplay.innerText = turnString;
  }
}





