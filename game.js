let board = '- - -\n- - -\n- - -';
//let board = [ ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'] ];

let player1 = 'X';
let player2 = 'O';

let submitMove = (row, column, player) => {
  board = board.split('\n');
  let newBoard = [];
  board.forEach(row => {
    newBoard.push(row.split(' '));
  });
  newBoard[row][column] = player;
  newBoard = [].concat.apply([], newBoard);
  board = newBoard;
  return board;
};
submitMove(0, 0, player1);

submitMove(2, 0, player2);