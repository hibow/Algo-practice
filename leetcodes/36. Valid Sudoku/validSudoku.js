/*
 * [Source]
 *
 * https://leetcode.com/problems/valid-sudoku/
 *
 * [Problem Description]
 *
 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be
 * validated according to the following rules:
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without
 * repetition.
 * A partially filled sudoku which is valid.
 * The Sudoku board could be partially filled, where empty cells are filled with
 * the character '.'.
 * Example 1:
 * Input:
 * [
 * ["5","3",".",".","7",".",".",".","."],
 * ["6",".",".","1","9","5",".",".","."],
 * [".","9","8",".",".",".",".","6","."],
 * ["8",".",".",".","6",".",".",".","3"],
 * ["4",".",".","8",".","3",".",".","1"],
 * ["7",".",".",".","2",".",".",".","6"],
 * [".","6",".",".",".",".","2","8","."],
 * [".",".",".","4","1","9",".",".","5"],
 * [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: true
 * Example 2:
 * Input:
 * [
 * ["8","3",".",".","7",".",".",".","."],
 * ["6",".",".","1","9","5",".",".","."],
 * [".","9","8",".",".",".",".","6","."],
 * ["8",".",".",".","6",".",".",".","3"],
 * ["4",".",".","8",".","3",".",".","1"],
 * ["7",".",".",".","2",".",".",".","6"],
 * [".","6",".",".",".",".","2","8","."],
 * [".",".",".","4","1","9",".",".","5"],
 * [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: false
 * Explanation: Same as Example 1, except with the 5 in the top left corner being
 * modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is
 * invalid.
 * Note:
 * A Sudoku board (partially filled) could be valid but is not necessarily
 * solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 * The given board contain only digits 1-9 and the character '.'.
 * The given board size is always 9x9.
 *
 * [Comments]
 *
 *
 *   board 9 x 9
 *
 *   find an entry point
 *   (r, c) = (0, 0) (0, 3) (0, 6)
 *          = (3, 0)
 *            (6, 0)...
 *
 *    xxxxx1 row0 , col5,
 *   search for directions
 *    if not meet : return false
 *    in the end return true if no false
 *
 *   rules:
 *   check row: no repeat number and nothing other than digits / '.'
 *   check col
 *   check 3x3 ->  9 blocks -> floor(i/3 , j/3)
 *
 *
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  //input: 9x9 array
  //output: boolean
  //constraint:
  //edge case: only contain . and digits on board
  //only check the current status
  //but not find the solutions
  //if not meet the rules -> return false
  //return true until the end

  //entry point to check-> i, j for loops
  //check if duplicate -> use set/tuple (something represent unique data structure)
  const existed = new Set();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] != ".") {
        let char = board[i][j];
        if (
          existed.has(char + "in row " + i) ||
          existed.has(char + "in col " + j) ||
          existed.has(
            char + "in block " + Math.floor(i / 3) + "&" + Math.floor(j / 3)
          )
        ) {
          return false;
        }
        existed.add(char + "in row " + i);
        existed.add(char + "in col " + j);
        existed.add(
          char + "in block " + Math.floor(i / 3) + "&" + Math.floor(j / 3)
        );
      }
    }
  }
  return true;
};
