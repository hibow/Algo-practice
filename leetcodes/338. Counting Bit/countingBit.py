from audioop import add


class Solution:
    def countBits(self, n: int) -> List[int]:
      '''
      use and and right shift to count all 1's in the LSB
      time O(n) space O(1)
      return array int[]
      '''
      arr = [0]
      for i in range(1, n + 1):
        arr.append(arr[i >> 1] + (i & 1))
        #don't use arr[i] = ... it's size adjustable array
      return arr

