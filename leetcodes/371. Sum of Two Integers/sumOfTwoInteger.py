class Solution:
    def getSum(self, a: int, b: int) -> int:
      '''
      & -> carry the number 0 & 1 = 0, 1 & 1 = 1 (carry it)
      ^ -> xor to get  0^ 1 = 1, 1 ^ 1 = 0, 0 ^ 0 = 0
      after ^ then ^ the carry number from & until no carry number
      timeO(32) -> O(1) space O(1)
      note: Python allows unlimited length of integers.
      use mask 0xffffffff with an (very long) integer will only keep the last 32 bits by &
      2's complement -> reverse all bits + 1
      (n ^ mask) + 1 = taking n's 2's complement
      so -n = ~n + 1 = ~(n^mask + 1) + 1 = ~ (n^mask) == -n (two 1s has been canceled)
      ~ is fliping bits
      '''
      mask = 0xffffffff
      if b == 0: #test case: -1, 0
        return a
      while b:
        sum = (a ^ b) & mask
        carry = ((a & b) << 1) & mask
        a = sum
        b = carry
      #if a is negative number ex: -8 -12
      if (a >> 31) & 1:
        return ~(a^mask)
      return a