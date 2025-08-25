export class Display {
  constructor(element, board) {
    //variable initializations
    this.color1 = "lightgray"
    this.color2 = "white"
    this.gameContainer = document.getElementById("gameContainer")
    this.chessBoard = document.getElementById(element)
    this.turnDisplay = document.getElementById("turnDisplay")
    this.hoveredPieceNameDisplay = document.getElementById("hoveredPieceNameDisplay")
    this.hoveredPieceAttackDisplay = document.getElementById("hoveredPieceAttackDisplay")
    this.hoveredPieceResistDisplay = document.getElementById("hoveredPieceResistDisplay")
    this.hoveredPieceWeaknessDisplay = document.getElementById("hoveredPieceWeaknessDisplay")
    this.hoveredPieceDescriptionDisplay = document.getElementById("hoveredPieceDescriptionDisplay")
    this.startButton = document.getElementById("startButton")
    this.boardSize = 700;
    this.onCellClick = null;
    this.startGame = null;
    this.board = board


    this.startButton.addEventListener("click", () => {
      this.startButton.classList.add("hidden")
      this.gameContainer.classList.remove("hidden")
      this.startGame();
    })
    //method calls
  }
  
  
  startDisplay() {
    this.#drawSquares();
    this.#initializeBoard();
    this.drawPieces();
  }


  highlightCell(location) {
    console.log("Highlighting cell at " + location)
    document.getElementById(`${location[0]},${location[1]}`).classList.add("selected")
  }

  highlightCells(locations) {
    for (let location of locations) {
      document.getElementById(`${location[0]},${location[1]}`).classList.add("legalMove")
    }
  }

  unhighlightCell(location) {
    console.log("Unhighlighting cell at " + location)
    document.getElementById(`${location[0]},${location[1]}`).classList.remove("selected")
  }

  unhighlightCells(locations) {
    for (let location of locations) {
      document.getElementById(`${location[0]},${location[1]}`).classList.remove("legalMove")
    }
  }

  #initializeBoard() {
    //setSize
    this.chessBoard.style.width = this.boardSize + "px";
    this.chessBoard.style.height = this.boardSize + "px";
    this.chessBoard.style.borderColor = "black";
    this.chessBoard.style.borderStyle = "solid";
    this.chessBoard.style.borderWidth = "1px";
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
        cell.style.width = this.boardSize / 8 + "px";
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
    for (let row = 0; row < 8; row++) {
      for (let column = 0; column < 8; column++) {
        let cell = document.getElementById(row + "," + column);
        cell.removeEventListener("mouseenter", this.handleHoverEnter)
        cell.removeEventListener("mouseleave", this.handleHoverLeave)
        cell.innerHTML = "";
        if (this.board.grid[row][column] != null) {
          let currentPiece = this.board.grid[row][column];
          let pieceName = currentPiece.type.Name;
          let pieceTier = currentPiece.type.Tier;
          let pieceIcon = `./img/SMT Demons/Rank ${pieceTier}/${pieceName}.png`
          let piece = document.createElement("div");


          //styles the piece
          piece.classList.add("piece")
          piece.classList.add("player" + currentPiece.player.id)

          let pieceTypeIcon = document.createElement("div")
          let pieceType = this.getPieceIcon(currentPiece)
          let iconPath = `./img/Piece Types/${pieceType}.png`

          pieceTypeIcon.style.backgroundImage = `url("${iconPath}")`
          pieceTypeIcon.classList.add("pieceTypeIcon")
          piece.appendChild(pieceTypeIcon)



          //Sets up Hover Events
          cell.addEventListener("mouseenter", this.handleHoverEnter)
          cell.addEventListener("mouseleave", this.handleHoverLeave)









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

  handleHoverEnter = (event) => {
    let location = []
    location[0] = event.currentTarget.id[0]
    location[1] = event.currentTarget.id[2]
    let hoveredPiece = this.board.getPiece(location)
    this.hoveredPieceNameDisplay.innerText = hoveredPiece.type.Name
    this.hoveredPieceAttackDisplay.innerText = hoveredPiece.type.Attack_Type
    this.hoveredPieceResistDisplay.innerText = hoveredPiece.type.Resistance
    this.hoveredPieceWeaknessDisplay.innerText = hoveredPiece.type.Weakness
    this.hoveredPieceDescriptionDisplay.innerText = hoveredPiece.type.Description
  }

  handleHoverLeave = (event) => {
    this.hoveredPieceNameDisplay.innerText = ""
    this.hoveredPieceAttackDisplay.innerText = ""
    this.hoveredPieceResistDisplay.innerText = ""
    this.hoveredPieceWeaknessDisplay.innerText = ""
    this.hoveredPieceDescriptionDisplay.innerText = ""
  }

  getPieceIcon(currentPiece) {
    let pieceTier = currentPiece.type.Tier
    let icon;
    switch (pieceTier) {
      case 1: { icon = "pawn"; break }
      case 2: {
        if (currentPiece.isBishop) {
          icon = "bishop"
        }
        else if (!currentPiece.isBishop) {
          icon = "Knight"
        }
        else {
          alert("Something has gone terribly wrong with the bishop knight logic in the piece type icon getter")
        }
        break
      }
      case 3: { icon = "rook"; break }
      case 4: { icon = "queen"; break }
      case 5: { icon = "king"; break }
      default: (alert("Something has gone terribly wrong with the piece icon getter."))
    }
    return icon
  }

}





