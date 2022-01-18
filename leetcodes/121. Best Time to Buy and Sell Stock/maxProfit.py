from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # if not prices and not prices[0]:
        #     return 0
        # it will slow down the process

       #days = len(prices)
        min = prices[0]
        maxPro = 0
        for i in prices:
          #use if and else to speed up a bit
           if i < min:
            min = i
           else:
            maxPro = max(maxPro, i - min)

        return maxPro