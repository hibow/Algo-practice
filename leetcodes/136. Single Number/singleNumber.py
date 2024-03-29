# class Solution(object):
# def singleNumber(self, nums):
#     """
#     :type nums: List[int]
#     :rtype: int
#     """
# result = 0
# for n in nums:
#     result ^= n
# return result


# python3

# time is longer, but space is smaller..
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        return reduce(lambda x, y: x ^ y, nums, 0)
