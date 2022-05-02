class Solution {
  public LList<List<Integer>> pacificAtlantic(int[][] heights) {
    /**
     * Start DFS from each boundary.
Then find common visited node.
       timeO(m*n) space O(m*n)
       NOTE: List<List<Integer>> and res.add(Arrays.asList(i, j));
     */
    List<List<Integer>> res = new LinkedList<>();
    if(heights == null || heights.length == 0 || heights[0].length == 0) return res;
    int n = heights.length, m = heights[0].length;
    boolean[][] pacific = new boolean[n][m];
    boolean[][] atlantic = new boolean[n][m];
    for (int i = 0; i < n; i++) {
      dfs(heights, pacific, Integer.MIN_VALUE, i, 0);
      dfs(heights, atlantic, Integer.MIN_VALUE, i, m-1);
    }
    for (int i =0; i<m; i++) {
      dfs(heights, pacific, Integer.MIN_VALUE, 0, i);
      dfs(heights, atlantic, Integer.MIN_VALUE, n-1, i);
    }
    for (int i = 0; i<n;i++) {
      for (int j = 0; j < m; j++) {
        if (pacific[i][j] && atlantic[i][j]) res.add(Arrays.asList(i, j));
      }
    }
    return res;
  }
  int[][]dir = new int[][] {{0,1},{0,-1},{1,0},{-1,0}};
  public void dfs(int[][] height, boolean[][]visited, int h, int x, int y) {
    int n = height.length, m = height[0].length;
    if (x<0 || x>=n || y<0 || y>=m || visited[x][y] || height[x][y] < h) return;
    visited[x][y] = true;
    for (int[]d:dir) {
      dfs(height, visited, height[x][y], x+d[0], y+d[1]);
    }
  }
}