class Solution:
    def isPalindrome(self, x: int) -> bool:
        # edge case: if x<0, return false
        '''
        time O(log10(N)), space O(1)
        reverse x and created a new integer as revertedNum until x < revertedNum

        return x == revertedNum (even) or x == revertedNum/10 (odd)

        '''
        ###
        if (x < 0 or (x % 10 == 0 and x != 0)):
            return False
        revertedNum = 0
        while (x > revertedNum):
            revertedNum = revertedNum * 10 + (x % 10)
            x = math.floor(x / 10)

        return x == revertedNum or x == math.floor(revertedNum / 10)

# add math.floor to get correct integer for python, it works in leetcode env
