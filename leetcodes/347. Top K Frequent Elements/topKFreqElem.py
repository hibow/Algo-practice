from collections import Counter


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        '''
        (1) max heap
        (2) bucket sort Time: O(N) Space: O(N)
           counter -> items() ->[(key, freq),...]
           put it into bucket (max size: len(nums))
           get top k elem from bucket and push them into res
        '''
        cnt = Counter(nums)
        n = len(nums)
        bucket = [[] for _ in range(n+1)]
        for num, freq in cnt.items():
          bucket[freq].append(num)
        bucketIdx = n
        ans = []
        '''
        iteration of the below steps
        get k (k--) while k not 0
        skip empty bucket[bucketidx]
        
        append num from bucket[bucketIdx] which is an array

        bucektIdx from end to front (decrease with 1)        

        '''
        while k:
          while not bucket[bucketIdx]:
            bucketIdx -= 1
          for num in bucket[bucketIdx]:
            ans.append(num)
            k -=1
          bucketIdx -=1
        return ans