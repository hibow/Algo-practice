class Solution:
    def search(self, nums: List[int], target: int) -> int:
     '''
      hard..
      t = 1 [23451]
      t = 6 [56123]
      t < 0 < m -> [m+1, h]
      t >= 0 > m -> [l, m]
      t > m -> [m +1 , h], t < m [l, m]
      t = m -> return m
      return -1 (can't find it)
     '''
     l, h = 0, len(nums)-1
     # deal with [1] or [1,2]
     if l == h and target == nums[l]: return l
     if target == nums[l]: return l
     if target == nums[h]: return h
     while l < h:
       m = (l + h)//2
       if target < nums[0] < nums[m]:
         l = m+1
       elif target > nums[0] > nums[m]:
         h = m
       elif nums[m] < target:
         l = m + 1
       elif nums[m] > target:
         h = m
       else:
         return m
     return -1