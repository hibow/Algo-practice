class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        #calculate the grid area if no island, return 0
        #dfs -> go check the nodes -> if find value 1, search for its 4 directional area until value is 0 and have seen this node
        #main -> iterate m x n matrix to search for the max area (max, dfs(i, j)) and return max
        # time O(m*n) space (1) -> didn't count the dfs stack
      m,n = len(grid), len(grid[0])
      def dfs(i, j):
          if 0 <= i < m and 0 <= j < n and grid[i][j]:
            grid[i][j] = 0
            return 1 + dfs(i - 1, j) + dfs(i, j+1) + dfs(i + 1, j) + dfs(i, j - 1)
          return 0

      maximun = 0
      for i in range(m):
        for j in range(n):
          maximun = max(dfs(i, j), maximun)
      return maximun