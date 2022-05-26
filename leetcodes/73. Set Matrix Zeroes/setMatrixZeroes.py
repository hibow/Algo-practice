class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        time O(n*m) spaceO(1)
        """
        rowLen = len(matrix)
        colLen = len(matrix[0])
        for i in range(rowLen):
          if matrix[i][0] == 0:
            zeroCol = True #first col
          for j in range(1, colLen): #don't do the first col (it was done by last line don't mark it zero now)
            if matrix[i][j] == 0:
              matrix[i][0] = 0
              matrix[0][j] = 0

        #can't start from row0 and col0 -> it will make the whole row to be zeros
        for i in range(1,rowLen):
          for j in range(1,colLen):
            if matrix[i][0]==0 or matrix[0][j] ==0:
              matrix[i][j] = 0

        #first row
        if matrix[0][0] == 0:
           for j in range(colLen):
             matrix[0][j] = 0

        # #first col
        if zeroCol:
          for i in range(rowLen):
            matrix[i][0] = 0

        return matrix