/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    //input : integers array
    //output: integer
    //edge case:
    //constraints: nums.length >=1
    /***
     * test case: [3 4 5 1 2], [4 5 1 2 3 ], [ 1 2 3 4 5], [2 3 4 5 1]
     * iterate while l < h
     * get mid
     * if last < first -> check right side [mid , h]
     * if last > first ->
     *  if mid > mid + 1 return mid + 1
     *  if mid < mid -1 return mid
     *  else check left side -> [l, mid -1]
     * exit return l
     *
     * or
     * if nums[h]>= nums[m] -> [l, m]
     * else [m + 1, h]
     * return nums[l] exit when l = h
     *
     *
     */
    if (num == null || num.length == 0) {
      return 0;
    }
    let nLen = nums.length;
    if (nLen === 1) return nums[0];
    let h = nLen - 1;
    let l = 0;
    while (l < h) {
      let mid = l + Math.floor((h - l)/2);
      if (nums[h] >= nums[mid]) {
        h = mid;
      } else {
        l = mid + 1;
      }
    }
    return nums[l];
};