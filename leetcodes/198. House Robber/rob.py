class Solution:
    def rob(self, nums: List[int]) -> int:
      '''
      DP: time O(n), space O(n)
      DP = int[nums.length + 1];
      DP[0] = 0, DP[1] = nums[0] , use DP to store the max value of current position
      iterate over the nums
        DP[i] = max(DP[i -1], DP[i-2] + nums[i-1])
      return DP[nums.length]
      '''
      if nums is None or len(nums) == 0:
        return 0
      if len(nums) == 1:
        return nums[0]
      last = 0
      now = 0
      for i in nums:
        temp = last
        last = now
        now = max(temp + i, now)
      return now