class Solution:
    def climbStairs(self, n: int) -> int:
      if n<=2: return n
      DP2 = 1
      DP1 = 2
      for i in range(3, n+1):
        cur = DP1 + DP2
        DP2 = DP1
        DP1 = cur

      return cur
  #time O(n), spaceO(n)