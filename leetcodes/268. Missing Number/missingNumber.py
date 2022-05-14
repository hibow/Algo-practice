class Solution:
    def missingNumber(self, nums: List[int]) -> int:
      '''
      use xor -> index ^ all num ^ len(nums) in the array -> the result is answer
      it's bc same xor same = 0
      time O(n) space O(1)
      '''
      lens = len(nums)
      res = lens
      for i in range(lens):
        res = res ^ i ^ nums[i]
      return res