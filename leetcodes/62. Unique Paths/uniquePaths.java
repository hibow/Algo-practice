class Solution {
  public int uniquePaths(int m, int n) {
      //DP: store nums of way on each cell nxm -> time O(n*m) space O(n*m)
      int [][] DP = new int[m][n];
      for (int i = 0;i< m; i++) {
        for (int j = 0; j < n ; j++) {
          if (i == 0 || j == 0) {
            DP[i][j] = 1;
          } else {
            DP[i][j] = DP[ i - 1][j] + DP[i][j - 1];
          }
        }
      }
      return DP[m - 1][n - 1];
    }
  }