class Solution:
    def findMin(self, nums: List[int]) -> int:
        n = len(nums)
        if n ==1 or nums[h] > nums[0] :
          return nums[0]
        l = 0
        h = n - 1

        while (l <= h):
          mid = 1 + (h - l)//2
          if mid > 0 and nums[mid -1] > nums[mid]:
            return nums[mid]
          if nums[mid] > nums[h]:
            l = mid + 1
          else:
            h = mid - 1