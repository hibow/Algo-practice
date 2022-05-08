class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
      '''
      iterate over the boundaries (row and col)
      right : row, col start->end
      down: col end, row start -> end
      left: row end, col start -> end
      up: col end, row start -> end
      push to res array and return it
      time O(n*m) spaceO(n*m)
      '''
      rowS = 0
      colS = 0
      rowE = len(matrix)
      colE = len(matrix[0])
      res = []
      while rowS <= rowE-1 and colS <= colE-1:
        #right, rowS
        for j in range(colS, colE):
          res.append(matrix[rowS][j])
        rowS += 1

        #down, colE
        for i in range(rowS, rowE):
          res.append(matrix[i][colE-1])
        colE -= 1
        if colS > colE -1 or rowS > rowE - 1:
            break
        #left, rowE
        for j in range(colE-1, colS-1, -1):
            res.append(matrix[rowE-1][j])
        rowE -=1

        #up, colS
        for i in range(rowE - 1, rowS - 1, -1):
            res.append(matrix[i][colS])
        colS +=1

      return res