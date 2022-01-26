class Solution {
  public void setZeroes(int[][] matrix) {
    //find the 0 and record it's row and col number
    //iterate over the 2d matrix when finding the 0's row and cols then change its value to 0
    //time O(m*n) space O(m+n) -> row and col Hashset
    int R = matrix.length;
    int C = matrix[0].length;
    Set<Integer> rows = new HashSet<Integer>();
    Set<Integer> cols = new HashSet<Integer>();

    for (int i = 0; i< R; i++) {
      for (int j = 0; j < C; j++) {
        if (matrix[i][j] == 0) {
          rows.add(i);
          cols.add(j);
        }
      }
    }
    for (int i =0;i < R; i++) {
      for (int j = 0; j<C;j++) {
        if (rows.contains(i) || cols.contains(j)){
          matrix[i][j] = 0;
        }
      }
    }

  }
}