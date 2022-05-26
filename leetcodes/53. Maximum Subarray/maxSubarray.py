class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
      lenL = len(nums)
      sum = maxS = nums[0]
      for i in range(1, lenL):
        if sum < 0: #restart subarray
          sum = nums[i]
        else: #add up together
          sum += nums[i]

        maxS = max(sum, maxS)
      return maxS
      #time O(n) spaceO(1)
      #was using s e pointers but it involves another loop