class Solution {
  public void rotate(int[][] matrix) {
    //outer circle -> i
    //on the circle ->j
    //move four points at once
    //matrix[i][j], matrix[j][n-1-i]
    //matrix[n-1-j][i], matrix[n-1-i][n-j-1]
    //time O(m)->n*n total ceils //space O(1)
    int n = matrix.length;
    for (int i =0; i<(n+1)/2; i++) {
      for (int j =0; j <n/2; j++){
        int temp  = matrix[n-1-j][i];
        matrix[n-1-j][i] = matrix[n-1-i][n-j-1];
        matrix[n-1-i][n-j-1] = matrix[j][n-1-i];
        matrix[j][n-1-i] = matrix[i][j];
        matrix[i][j] = temp;
      }
    }
  }
}