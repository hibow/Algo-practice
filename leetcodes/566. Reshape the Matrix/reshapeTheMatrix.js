/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
  //input: integers[][]array, integer, integer
  //output: integers[][] array
  //edge case: if mat can't reshape to r x c -> return mat
  /***
   * test case: mxn = 3x2 , rxc = 2 x 3
   * mat[ [00 01] [10 11] [20 21]]
   * mat[ [00, 01, 02], [10 11 12] ]
   *
   * let index = 0 (count thru all element)
   * for i to r
   *  for j to c
   *    nMat[i][j] = matt[index/n][index%n] -> nMat[1][0]-> mat[2/3][2%3]
   *    index++;
   *
   * return nMat
   *
   * time O(r*c), space O(r*c)
   */
  let m = mat.length;
  let n = mat[0].length;
  if (m * n !== r *c) return mat;
  let nMat = [];
  //this is the better way so far to fill the array..
  for (let a = 0; a < r ; a++){
    nMat[a] = new Array(c).fill(0);
  }

  let index = 0;
  for (let i = 0 ; i < r; i++) {
    for (let j = 0; j < c; j++) {
      nMat[i][j] = mat[index/n][index%n];
      index++;
    }
  }
  return nMat;
};