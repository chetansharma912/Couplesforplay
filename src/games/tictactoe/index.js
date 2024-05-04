let selectedPiece = null;

    // Function to generate the checkers board
    function generateCheckersBoard() {
      const board = document.getElementById("board");
      const boardSize = 8;

      for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
          const square = document.createElement("div");
          square.classList.add("square");
          if ((row + col) % 2 === 0) {
            square.classList.add("white");
          } else {
            square.classList.add("black");
            if (row < 3) {
              const piece = createPiece("red-piece");
              square.appendChild(piece);
            }
            if (row > 4) {
              const piece = createPiece("black-piece");
              square.appendChild(piece);
            }
          }
          square.addEventListener("click", () => {
            handleSquareClick(square);
          });
          board.appendChild(square);
        }
      }
    }

    // Function to create a piece
    function createPiece(className) {
      const piece = document.createElement("div");
      piece.classList.add("piece", className);
      return piece;
    }

    // Function to handle square click event
    function handleSquareClick(square) {
      const piece = square.querySelector(".piece");
      if (piece && !selectedPiece) {
        selectedPiece = piece;
      } else if (selectedPiece) {
        const selectedSquare = selectedPiece.parentElement;
        if (isValidMove(selectedSquare, square)) {
          square.appendChild(selectedPiece);
        }
        selectedPiece = null;
      }
    }

    // Function to check if the move is valid
    function isValidMove(fromSquare, toSquare) {
      const fromRow = parseInt(fromSquare.dataset.row);
      const fromCol = parseInt(fromSquare.dataset.col);
      const toRow = parseInt(toSquare.dataset.row);
      const toCol = parseInt(toSquare.dataset.col);

      const dx = Math.abs(toCol - fromCol);
      const dy = toRow - fromRow;

      if (dx === 1 && Math.abs(dy) === 1) {
        return true;
      }

      return false;
    }

    // Call the function to generate the checkers board
    generateCheckersBoard();