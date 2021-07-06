/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  //intput: integers array, integer
  //output: integers array (start, end)
  //edge case: if [] -> [-1, -1]; if can't find -> return [-1, -1]
  /***
   * test case: [5,6,7,8,8] , 7 -> [2,2]; 5->[0,0] ; 8 ->[3,4]
   * 1) iterate over the array to get start and end point -> time O(n), space O(1)
   *
   * 2)
   * a.find first target
   * while l < h,
   *    if target  = mid, [l, mid]
   *    else target > mid , [mid + 1, h]
   *    if target < mid, [l, mid-1]
   *
   * exit l = h, return l
   * b.find last target
   *   while l < h
   *    if target = mid, [mid, h]
   *    if target > mid, [mid + 1, h]
   *    if target < mid, [l, mid -1]
   *
   * exit l = h, return h
   *
   * return [l, h]
   */
  let result = [-1, -1];
  if (nums === null || nums.length === 0) return result;
  let h = nums.length - 1;
  let l = 0;
  while (l < h) {
    let mid = l + Math.floor((h - l)/2);
    if (target === nums[mid]) {
      h = mid;
    } else if (target > nums[mid]) {
      l = mid + 1;
    } else if (target < nums[mid]) {
      h = mid - 1;
    }
  }
  result[0] = (nums[l] === target)? l : -1;
  h = nums.length - 1;
  while (l < h) {
    //to get the upper bound of target, mid = orignal mid + 1
    let mid = l + Math.floor((h - l)/2) + 1;
    if (target < nums[mid]) {
      h = mid -1;
    } else if (target === nums[mid]) {
      l = mid;
    } else if (target > nums[mid]) {
      l = mid -1;
      //it won't happen
    }
  }
  result[1] = (nums[h] === target)? h : -1;

  return result;

};