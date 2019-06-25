var squares = document.querySelectorAll('td');
var message = document.getElementById('message_box');

var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

var winningRows = {}
var nextPiece = "X";
var playCount = 0;
var winner = false;

for (let i = 0; i < squares.length; i++) {
  let square = squares[i];
  square.addEventListener("click", (e) => play(e));
}

var play = (box) => {
  let previousPiece = nextPiece;
  let row = box.target.id[1];
  let col = box.target.id[3];

  if (!winner) {
    if (box.target.innerHTML === '') {
      box.target.innerHTML = nextPiece;
      board[row -1][col-1] = nextPiece;
      nextPiece === "O" ? nextPiece = "X" : nextPiece = "O";
      playCount++;

      winningRows = {
        row1: [board[0][0], board[0][1], board[0][2]],
        row2: [board[1][0], board[1][1], board[1][2]],
        row3: [board[2][0], board[2][1], board[2][2]],
        col1: [board[0][0], board[1][0], board[2][0]],
        col2: [board[0][1], board[1][1], board[2][1]],
        col3: [board[0][2], board[1][2], board[2][2]],
        major_diag: [board[0][0], board[1][1], board[2][2]],
        minor_diag: [board[2][0], board[1][1], board[0][2]]
      }

    message.innerHTML = `${nextPiece}'s turn`;
      var checkBoardResults = checkBoard(winningRows);
      if (checkBoardResults[0]) {

        var winningRow = checkBoardResults[1];
        var winningDivs = document.getElementsByClassName(winningRow);
        message.innerHTML = `WINNNNAH! ${previousPiece} WINS!!`;
        winner = true;
      } else if (playCount === 9) {
        message.innerHTML = 'If you aint first you last Ricky Boobie! Tied game!';
      }
    } else {
      message.innerHTML = 'THIS BOX IS TAKEN N00B TRY AGAIN';
    }
  }
}

var checkWin = function(group) {
  return group[0] !== null && group[0] === group[1] && group[1] === group[2];
};

var checkBoard = function(wholeBoard) {
  for (var group in wholeBoard) {
    if (checkWin(wholeBoard[group])) {
      return [true, group];
    }
  }
  return [false, null];
}

var resetBoard = () => {
  board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  winningRows = {
    row1: [board[0][0], board[0][1], board[0][2]],
    row2: [board[1][0], board[1][1], board[1][2]],
    row3: [board[2][0], board[2][1], board[2][2]],
    col1: [board[0][0], board[1][0], board[2][0]],
    col2: [board[0][1], board[1][1], board[2][1]],
    col3: [board[0][2], board[1][2], board[2][2]],
    majorDiag: [board[0][0], board[1][1], board[2][2]],
    minorDiag: [board[2][0], board[1][1], board[0][2]]
  };

  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
  }

  playCount = 0;
  winner = false;
  message.innerHTML = '';
  nextPiece = "X";
};

document.getElementById("reset_button").addEventListener("click", resetBoard);
