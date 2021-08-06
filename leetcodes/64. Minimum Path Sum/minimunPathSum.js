/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
  /**
   * input: int[][] array
   * output: integer
   * edge case:
   * constraint: only move right or down, grid[i][j]-> grid[i+1][j] or grid[i][j+1]
   * top-down -> grid[0][0] to grid[height - 1][width - 1]
   * botton-up -> grid[height -1][width - 1] to grid[0][0]
   * 1) DP: time: O(nxm), space O(n)-> up the the input, if use dp(i)-> O(m)
   * iterate over grid[i]
   *    iterate over grid[j] -> put sum to grid[i][j]
   *      if grid[0][0] no change
   *      if (row is 0 col is not ) -> only can move to right (add left value )
   *      if col is 0 but row is not -> only can move to down (add up value)
   *      else grid[i][j] = grid[i][j] + Math.min(left value, up value)
   * return grid[height-1][width-1]
   *2) use DP[j] instead of grid[i][j]
      space: O(m)
        if [0,0] dp[j] = dp[j]
        if i = 0, dp[j] = dp[j-1]
        else dp[j] = Math.min(dp[j], dp[j-1])
        dp[j] += grid[i][j]
      return dp[n-1]
   */
     if (grid.length === 0 || grid[0].length === 0) return 0;
     let n = grid.length;
     let m = grid[0].length;
     let dp = new Array(m).fill(0)
     for (let i = 0; i < n ; i++) {
       for (let j = 0; j<m; j++) {
         if (j === 0) {
           dp[j] = dp[j]
         } else if (i === 0) {
           dp[j] = dp[j - 1]
         } else {
           dp[j] = Math.min(dp[j], dp[j - 1])
         }
         dp[j] += grid[i][j]
       }
     }
     return dp[m-1]
};