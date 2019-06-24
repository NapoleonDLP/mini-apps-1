/*
O: usable tic tac tow board
I:
C: no jquery only native dom stuff, no libraries
E:
*/

//create js version of board in index
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
var piece = "X";

//create functionality that manipulates the board
var play = function() {

}


//create function that checks an array of three to see if there is a match
var checkWin = function(group) {
  console.log(group)
  return group[0] === group[1] && group[1] === group[2];
};
//create a function that checks the whole board for a win
var checkBaoard = function(wholeBoard) {
  console.log(winningRows)
  for (var group in wholeBoard) {
    if (checkWin(wholeBoard[group])) {
      return true;
    }
  }
  return false;
}