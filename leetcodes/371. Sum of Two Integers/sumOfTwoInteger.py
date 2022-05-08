class Solution:
    def getSum(self, a: int, b: int) -> int:
      '''
      & -> carry the number 0 & 1 = 0, 1 & 1 = 1 (carry it)
      ^ -> xor to get  0^ 1 = 1, 1 ^ 1 = 0, 0 ^ 0 = 0
      after ^ then ^ the carry number from & until no carry number
      timeO(32) -> O(1) space O(1)
      '''
      if a==0:
        return b
      if b == 0:
        return a
      while(b != 0):
        c = a & b
        a = a ^ b
        b = c << 1
      return a