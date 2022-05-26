class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
      nMap = dict()
      for n in nums:
        #print(n)
        if nMap.get(n) is None: 
          nMap[n] = 1
        else:
          return True
      return False