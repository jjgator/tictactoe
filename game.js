//let board = '- - -\n- - -\n- - -';
let board = [ ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'] ];

let player1 = 'X';
let player2 = 'O';

let submitMove = (row, column, player) => {
  board[row][column] = player;
  return board;
};

submitMove(0, 0, player1);

submitMove(2, 0, player2);