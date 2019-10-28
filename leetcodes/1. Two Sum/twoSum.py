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
    arg1 = [int(s) for s in sys.argv[1].split(',')]
    a = twoSum(arg1, int(sys.argv[2]))
    print(a)
