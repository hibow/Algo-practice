class Solution:
    def arrayNesting(self, nums: List[int]) -> int:
        #test case nums = [5,4,0, 3, 1, 6, 2] -> nums[0]->nums[5]->nums[6]->nums[2] ->max is 4 return 4
        #1. brute force -> iterate over the array for each element for a new loop until meeting their first element, res = max(res, count) return res 
          #time O(n^2) worse case [1,2,3,4,5,0] , spaceO(1) 
        # only go thru the unvisited one:
        #2. use visited array to record true or false -> if false -> starts a new loop until meeting their first element, res = max(res, count) return res
        # timeO(n), spaceO(n)-> visited array
        #3. optimized #2 -> use constant to store instead of visited array -> make all the visited element to be Integer.MAX_Value ->if not Max value, starts new loop and repeat above steps

        res = 0
        for i, e in nums:
          if e != float('inf'):
            start = e, count = 0
            while(nums[start] != float('inf')):
              temp = start
              start = nums[start]
              count = count + 1
              nums[temp] = float('inf')
            res = max(res, count)
        return res
