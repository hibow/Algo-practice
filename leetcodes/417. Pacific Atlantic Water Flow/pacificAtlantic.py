class Solution:
  def pacificAtlantic(self, matrix: List[List[int]]) -> List[List[int]]:
    if not matrix: return []
    p_land = set()
    a_land = set()
    R, C = len(matrix), len(matrix[0])
    def dfs( i, j, land):
      land.add((i,j))
      for x, y in ((i + 1, j),(i, j + 1), (i - 1, j), (i, j - 1)):
        if ( 0 <=x< R and 0<=y<C and matrix[x][y] >= matrix[i][j] and (x,y) not in land): #boundary + condition (from ocean to (x,y))
          dfs(x, y, land)
    for i in range(R):
      dfs(i, 0, p_land)
      dfs(i, C- 1, a_land)
    for j in range(C):
      dfs(0, j, p_land)
      dfs(R-1, j, a_land)

    return list(p_land & a_land) #intersection of two sets and converts it to a list

#time O(mn) -> each cells, space O(2mn + h) -> 2 oceans for each cells, h -> stack depth->worse case O(mn) : O(mn)