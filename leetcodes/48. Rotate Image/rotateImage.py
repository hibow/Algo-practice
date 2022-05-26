class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        '''
        1)time O(m*n)
        matrix(x,y) -> (y, m-x) -> it can't be swap in place
        2)reverse -> swap symmetric
        3)swap four cells at the same time from row 0->n//2 + n%2 (consider odd number)
                                                      and col 0-> n//2
          time O(e-> each cells nxm), space O(1)
         no return value
        '''
        colLen = len(matrix[0])
        for x in range(colLen//2 + colLen % 2):
          for y in range(colLen//2):
            temp = matrix[x][y]
            matrix[x][y] = matrix[colLen - 1 -y][x]
            matrix[colLen-1-y][x] = matrix[colLen-1-x][colLen-1-y]
            matrix[colLen-1-x][colLen-1-y]=matrix[y][colLen-1-x]
            matrix[y][colLen-1-x] = temp