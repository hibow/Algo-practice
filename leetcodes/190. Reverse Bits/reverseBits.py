class Solution:
    def reverseBits(self, n: int) -> int:
      '''
      new =n &1 and n>>1 the n then
      newN = 0 | new and newN <<1
      iterate over 32 times O(1) space O(32)-> O(1)
      '''
      ans = 0
      for i in range(1,33):
        ans = (ans << 1) + (n&1)
        n = n>>1
      return ans
