def twoSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    d = {}
    for i, n in enumerate(nums):
        m = target - n
        if m in d:
            return [d[m], i]
        else:
            d[n] = i


if __name__ == "__main__":
    import sys
    print(sys.argv[2])
    a = twoSum(sys.argv[1], sys.argv[2])
    print(a)
