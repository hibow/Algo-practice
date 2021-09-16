/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    //input: 2D arrays, integer
    //output: boolean
    /**
     * search for whole matrix timeO(n+m)-worse case, spaceO(1)
     * just need to find a good entry point, since col and row are sorted right top or bottom left
     * when smaller than target, col -- or row-- based on the cases
    edge case: if matrirx is null, no length return false
    */
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;
  let m = matrix.length;
  let n = matrix[0].length;
  let row = 0;
  let col = n - 1;
  while(row < m && col >= 0) {
    if (target === matrix[row][col]) return true;
    else if (target > matrix[row][col]) row ++;
    else if (target < matrix[row][col]) col --;
  }
  return false;
};