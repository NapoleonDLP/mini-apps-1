/*
O: usable tic tac tow board
I:
C: no jquery only native dom stuff, no libraries
E:
*/

//create js version of board in index
var board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
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

console.log(document.getElementById("r2c2"))

//create functionality that manipulates the board

