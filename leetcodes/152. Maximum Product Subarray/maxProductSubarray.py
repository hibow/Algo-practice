class Solution:
    def maxProduct(self, nums: List[int]) -> int:
      lenN = len(nums)
      maxP = nums[0]
      proL = 1
      proR = 1

      for i in range(0, len(nums)):
        if proL*nums[i] == 0:
          proL = nums[i]
        else:
          proL *= nums[i]

        if proR*nums[lenN - 1 - i] == 0:
          proR = nums[lenN - 1- i]
        else:
          proR *= nums[lenN - 1- i]
        maxP = max(maxP, max(proL, proR))
      return maxP