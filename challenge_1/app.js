/*
O: usable tic tac tow board
I:
C: no jquery only native dom stuff, no libraries
E:
*/


var squares = document.querySelectorAll('td');

// document.getElementById("square").addEventListener("click", play(e))
//create js version of board in index
var message = document.getElementById('message_box');

var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

var winningRows = {
  row1: [board[0][0], board[0][1], board[0][2]],
  row2: [board[1][0], board[1][1], board[1][2]],
  row3: [board[2][0], board[2][1], board[2][2]],
  col1: [board[0][0], board[1][0], board[2][0]],
  col2: [board[0][1], board[1][1], board[2][1]],
  col3: [board[0][2], board[1][2], board[2][2]],
  majorDiag: [board[0][0], board[1][1], board[2][2]],
  minorDiag: [board[2][0], board[1][1], board[0][2]]
}

// console.log(document.getElementById("r2c2").id)
var nextPiece = "X";
var playCount = 0;
var winner = false;

//iterate through the list of squares
for (var i = 0; i < squares.length; i++) {
  var square = squares[i];
  //adds an eventListener to each square
  square.addEventListener("click", (e) => play(e));
}

var play = (box) => {
  let previousPiece = nextPiece;
  let row = box.target.id[1];
  let col = box.target.id[3];
  //checkk to make sure box is only used once
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
        majorDiag: [board[0][0], board[1][1], board[2][2]],
        minorDiag: [board[2][0], board[1][1], board[0][2]]
      }

    message.innerHTML = `${nextPiece}'s turn`;

      if (checkBoard(winningRows)) {

        message.innerHTML = `WINNNNAH! ${previousPiece} WINS!!`;
        winner = true;
        // setTimeout(resetBoard, 5000)
      } else if (playCount === 9) {
        message.innerHTML = 'If you aint first you last Ricky Boobie! Tied game!';
        // resetBoard();
      }
    } else {
      message.innerHTML = 'THIS BOX IS TAKEN N00B TRY AGAIN';
    }
  }
}

//create function that checks an array of three to see if there is a match
var checkWin = function(group) {
  return group[0] !== null && group[0] === group[1] && group[1] === group[2];
};
//create a function that checks the whole board for a win
var checkBoard = function(wholeBoard) {
  for (var group in wholeBoard) {
    if (checkWin(wholeBoard[group])) {
      return true;
    }
  }
  return false;
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

/*

TODO

[ X ] ensure squares can only be play once

[ X ] stop game if there is a winner

[ X ] Allert who the winner is

[ ] add button to reset the game

[ X ] alert if there is a tie

[ X ] add message box/next move

*/