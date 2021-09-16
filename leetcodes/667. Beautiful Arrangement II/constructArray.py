class Solution:
    def constructArray(self, n: int, k: int) -> List[int]:
        # test case: n = 3 k = 1 -> [1,2,3], [1,1] 1 is distinct ; n = 3, k = 2 -> [1,3,2] , [2, 1] is distinct
        # find the pattern: if k is 1 -> [1,2,3,...,n] ; if k = n - 1 -> [1,n, 2, n-1, ...] 
        # first part of output: so we use i = n - k to get the first part as k = 1 which will be the same -> [1,2,..,n - k - 1]
        # second part of output: starts from ith, it will be based on [n - k, n , n - k -1, n - 1, ..] to add i//2(even num) or reduce i // 2(odd num)
        #time O(n), space O(n)
    
      ans = list(range(1, n -k))
      for i in range(k + 1):
        if i % 2 == 0:
          ans.append(n - k + i //2)
        else:
          ans.append(n - i //2)
      return ans      