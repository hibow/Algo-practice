class Solution:
    def hammingWeight(self, n: int) -> int:
      ones = 0
      while n:
        n = n & (n - 1)
        ones = ones + 1
        #in java or js we use >>> unsigned right shift (logical right shift 1010 -> 0101; if 1010 >> 1 = 1001 )
        #python has no unsigned right shift
        #n & (n - 1) => able to right shift until no zeros remained
      return ones

'''
class Solution(object):
    def hammingWeight(self, n):
       return bin(n).count('1')
'''