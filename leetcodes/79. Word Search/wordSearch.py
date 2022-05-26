from operator import truediv


class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
      '''
      hard..
      1) dfs recursively:
        time O(n*m*4*L):L is the length of word, spaceO(4nm)->each stack goes 4 directions with mn cells
        itearte over the rows and cols
          if word[0] &&search(b, word, i, r, c) return true ->if find any valid path return true
        return false
          def search(b, word, i, r, c)
             if word.length <= i -> means it runs thru all the chars in the word -> return true
             if word[i]!=b[r][c] && r, c out of boundary return false
             b[r][c] =='*'
             res = search(four directions with r, c, i +1)
             b[r][c] == word[i]
             return res
      '''
      rowLen = len(board)
      colLen = len(board[0])
      for r in range(rowLen):
        for c in range(colLen):
          if word[0] and self.search(board, word, 0, r, c):
            return True
      return False
    def search (self, b, word, index, r, c):
      if len(word) <= index:
        return True
      if r < 0 or c < 0 or r>= len(b) or c >= len(b[0]) or word[index] != b[r][c]:
        return False
      b[r][c] = '*'
      res = self.search(b, word, index + 1, r + 1, c) or self.search(b, word, index + 1, r -1, c) or self.search(b, word, index + 1, r, c + 1) or self.search(b, word, index + 1, r, c-1)
      b[r][c] = word[index]
      return res