class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
      '''
        sort time nlog(n) ->iterate over the sorted array to check if consecutive and then increase the count
        space O(1) or O(n) to store new copy
      '''
      if not nums: return 0
      nums.sort()
      count = 1
      maxC = 1
      prev = nums[0]
      for i in range(1,len(nums)):
        if nums[i] == prev + 1:
          count += 1
        elif nums[i] == nums[i-1]:
          prev = nums[i]
        else:
          count = 1
        prev = nums[i]
        maxC = max(maxC, count)
      return maxC

      #hashset timeO(n) spaceO(n) -> but run time is slower than sorting
