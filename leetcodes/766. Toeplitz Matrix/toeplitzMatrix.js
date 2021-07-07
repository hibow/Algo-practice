/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
 var isToeplitzMatrix = function(matrix) {
  //input: arrays of arrays
  //output: boolean
  //1 <= m, n <= 20
  /***
   * iterate over rows (0->m)
   *  iterate over cols (0 -> n)
   *   if (i + 1 <= m && j + 1 <= n && matrix[i][j] !== matrix[i + 1][j+1]), return false
   *  or if (i > 0 && j > 0 && ,mat[i][j] !== mat[i - 1][j-1]), return false
   * return true
   *
   * time O(n^2), space O(1)
   */
  let m = matrix.length;
  let n = matrix[0].length;
  for (let i = 0; i<m;i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0 && j > 0 && matrix[i][j] !== matrix[i -1][j-1]) return false;
    }
  }
  return true;
 }