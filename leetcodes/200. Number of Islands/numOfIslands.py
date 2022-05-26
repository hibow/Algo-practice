class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
      if not grid:
        return 0
      R, C = len(grid), len(grid[0])
      count = 0
      def dfs(i, j):
        if i>=R or j >= C or i < 0 or j < 0 or grid[i][j] == '0':
          return
        if grid[i][j] == '1':
          grid[i][j] = '0'
        for x, y in ((i-1, j), (i, j-1), (i + 1, j) ,(i, j+1)):
          dfs(x, y)
      for i in range(R):
        for j in range(C):
          if grid[i][j] ==  '1':
            dfs(i, j)
            count += 1
      return count
      #time O(nm) spaceO(h->mn)
