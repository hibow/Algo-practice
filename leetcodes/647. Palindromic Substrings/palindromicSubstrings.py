class Solution:
    def countSubstrings(self, s: str) -> int:
      self.count = 0
      def countHelper(i, j, s):
        if i < 0 or j < 0 or j >= len(s) or i >= len(s):
          return
        if s[i] == s[j]:
          self.count += 1
        else: return #interupt if not equal
        if (i - 1) < len(s) and (j + 1) >= 0:
          i -= 1
          j += 1
          return countHelper(i, j, s)
      for i in range(len(s)):
        countHelper(i, i, s)
        countHelper(i, i + 1,s)
      return self.count
    #two pointer: time O(n^2), spaceO(1)
#simplfiy:
class Solution:
    def countSubstrings(self, s: str) -> int:
      N = len(s)
      result = 0
      for i in range(2*N - 1): #2N-1 -> possiblie centers in len N
        left = i//2
        right = (i + 1)//2
        while left >= 0 and right < N and s[left] == s[right]:
          result += 1
          left -= 1
          right += 1
      return result
    #DP: timeO(n^2) or time O(n) spaceO(n^2)