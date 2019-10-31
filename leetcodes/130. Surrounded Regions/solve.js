/**
 * Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X

keep track of visited cells
Scan loop
check each cell if border, skip
                if o -> check its adjacent cells if all x ->flip to x
                                                 if find o -> check if it is border, if yes-> skip
                                                                                     if not -> check its adjacent cells 
2D matrix
[n, n]
start from [0,0] ->[r, c + 1] 
loop stop until all cells visited ->
visited = set([n,n])
when visited cells reach to nxn
BFS -> tempQ.push([r,c], [r,c + 1 ], [r +1, c], [r-1, c], [r, c-1])
  

After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of 
the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected
 to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.
 
 https://leetcode.com/problems/surrounded-regions/discuss/139944/Clean-JavaScript-solution
 time complexity: O(nxm)
 space: O(1)
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board === null || !board.length) {
    return;
  }
  if (board.length < 2 || board[0].length < 2) {
    return;
  }
  let rows = board.length;
  let cols = board[0].length;
  //deal with first col and last col boarder
  for (let i = 0; i < rows; i++) {
    mark(board, i, 0);
    mark(board, i, cols - 1);
  }
  for (let j = 1; j < board[0].length - 1; j++) {
    mark(board, 0, j);
    mark(board, board.length - 1, j);
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
      if (board[i][j] === "B") board[i][j] = "O";
    }
  }
  return;
};
var mark = function(board, r, c) {
  if (r < 0 || r > board.length - 1 || c < 0 || c > board[0].length - 1) {
    return;
  }
  if (board[r][c] !== "O") {
    return;
  }
  board[r][c] = "B";
  mark(board, r + 1, c);
  mark(board, r - 1, c);
  mark(board, r, c + 1);
  mark(board, r, c - 1);
};
