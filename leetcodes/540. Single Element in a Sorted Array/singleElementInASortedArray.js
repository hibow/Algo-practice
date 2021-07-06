/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNonDuplicate = function(nums) {
    //input: numbers array
    //output: integer
    //edge case: nums.length >= 1, nums[i]>=0
    //1) iterate over the string use counter to toggle two duplicates and return when there is no duplicate
    //time O(n), space O(1)
    /**
     * 2)
     * test case:
     *   mid number = odd  -> 1122334    1122344    1123344   1223344  -> left: odd elements, right odd elements ->better split to even elements on both side
     *                even -> 11233   12233  11223                     -> mid + 1 != k (single number index)
     *   run this iteration while l < h (exit when l = h, since mid may assign to h in one condition)
     *   if mid number is even
     *   if mid number is odd (make it even, mid = mid - 1)
     *   if nums [ mid ] = nums [ mid + 1] , k > mid + 1 -> [mid + 2, h]
     *   if nums [mid] != nums[ mid + 1], k < mid - 1 -> [l, mid]
     *   return nums[l] (or nums[h])
     *
     * time O(logN), space O(1)
     */
    let nLen = nums.length;
    if (nLen === 1) return nums[0];
    let h = nLen -1;
    let l = 0;
    while (l < h) {
      let mid = l + Math.floor((h-l)/2);
      if (mid % 2 === 1) mid --;
      if (nums[mid] === nums[mid + 1]){
        l = mid + 2;
      } else {
        h = mid;
      }
    }
    return nums[l]
    //return nums[h] will be slower

};