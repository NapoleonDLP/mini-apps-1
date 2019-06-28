var board = [
  [null, null, null, null, null , null , null ],
  [null, null, null, null, null , null , null ],
  [null, null, null, null, null , null , null ],
  [null, null, null, null, null , null , null ],
  [null, null, null, null, null , null , null ],
  [null, null, null, null, null , null , null ]
];



var checkWinner =function(board) {

  var obj = {
    row1: [board[0][0], board[0][2], board[0][3], board[0][4], board[0][5], board[0][6], board[0][6]],
    row2: [board[1][0], board[1][1], board[1][3], board[1][4], board[1][5], board[1][6], board[1][6]],
    row3: [board[2][0], board[2][1], board[2][2], board[2][4], board[2][5], board[2][6], board[2][6]],
    row4: [board[3][0], board[3][1], board[3][2], board[3][3], board[3][5], board[3][6], board[3][6]],
    row5: [board[4][0], board[4][1], board[4][2], board[4][3], board[4][4], board[4][6], board[4][6]],
    row6: [board[5][0], board[5][1], board[5][2], board[5][3], board[5][4], board[5][5], board[5][6]],
    col1: [board[0][0],board[1][0],board[2][0],board[3][0],board[4][0],board[5][0]],
    col2: [board[0][1],board[1][1],board[2][1],board[3][1],board[4][1],board[5][1]],
    col3: [board[0][2],board[1][2],board[2][2],board[3][2],board[4][2],board[5][2]],
    col4: [board[0][3],board[1][3],board[2][3],board[3][3],board[4][3],board[5][3]],
    col5: [board[0][4],board[1][4],board[2][4],board[3][4],board[4][4],board[5][4]],
    col6: [board[0][5],board[1][5],board[2][5],board[3][5],board[4][5],board[5][5]],
    col7: [board[0][6],board[1][6],board[2][6],board[3][6],board[4][6],board[5][6]],
    lDiag1: [board[2][0],board[3][1],board[4][2],board[5][3]],
    lDiag2: [board[1][0],board[2][1],board[3][2],board[4][3],board[5][4]],
    lDiag3: [board[0][0],board[1][1],board[2][2],board[3][3],board[4][4],board[5][5]],
    lDiag4: [board[0][1],board[1][2],board[2][3],board[3][4],board[4][5],board[5][6]],
    lDiag5: [board[0][2],board[1][3],board[2][4],board[3][5],board[4][6],],
    lDiag6: [board[0][3],board[1][4],board[2][5],board[3][6]],
    rDiag1: [board[2][6],board[3][5],board[4][4],board[5][3]],
    rDiag2: [board[1][6],board[2][5],board[3][4],board[4][3],board[5][2]],
    rDiag3: [board[0][6],board[1][5],board[2][4],board[3][3],board[4][2],board[5][1]],
    rDiag4: [board[0][5],board[1][4],board[2][3],board[3][2],board[4][1],board[5][0]],
    rDiag5: [board[0][4],board[1][3],board[2][2],board[3][1],board[4][0]],
    rDiag6: [board[0][3],board[1][2],board[2][1],board[3][0]]
  };

  for (var key in obj) {
    if (checkGroup(obj[key])) {
      return true;
    }
  }
  return false;
};

var checkGroup = function(array) {
  var count = 0;
  var piece = null;
  for (var i = 0; i < array.length; i++) {
    var currentSlot = array[i];
    if (piece === null || piece === currentSlot) {
      piece = currentSlot;
      count++;
      if (count === 3) {
        return true;
      }
    } else {
      piece = currentSlot;
      count = 0;
    }
  }
  return false;
}

var play = function(piece, col, board) {
  col = col - 1;
  for (var i = 0; i < board.length; i++) {
    var currentRow = board[i];
    var nextRow = board[i + 1]
    if (nextRow === undefined && currentRow[col] === null) {
      currentRow[col] = piece;
    } else if (nextRow[col] !== null && currentRow[col] === null) {
        currentRow[col] = piece;
        break;
      }
  }
  return board
}

var resetBoard = function(board) {
  board = [
  [null, null, null, null, null , null , null ],
  [null, null, null, null, null , null , null ],
  [null, null, null, null, null , null , null ],
  [null, null, null, null, null , null , null ],
  [null, null, null, null, null , null , null ],
  [null, null, null, null, null , null , null ]
];
  return board;
}

