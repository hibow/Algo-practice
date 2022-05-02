class Solution {
  public int numIslands(char[][] grid) {
    //dfs -> time O(n*m), space O(n*m)
    /**
     * iterate over matrix,
     *  if count += dfs(grid, i,j)
     *    check four direction until all 0 -> dfs -> return 0 or 1
     *  return count
     */
    int count = 0;
    for (int i = 0; i< grid.length; i++) {
      for (int j = 0; j<grid[i].length; j++) {
        count += dfs(grid, i, j);
      }
    }
    return count;
  }
  int dfs(char[][]grid, int i, int j) {
    if (i < 0 || i == grid.length || j<0 || j == grid[i].length || grid[i][j] == '0') return 0;
    grid[i][j] = '0';
    for (int k = 0; k < 4; k++ ) dfs(grid, i + d[k], j + d[k+1]);
    return 1;
  }
  int[] d = {0, 1, 0, -1, 0};

}