/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
   //input: numbers array
   //output: nums (in place)
   //edge case: nums.length >= 1
   /***
    * test case: [0 1 0 3 12], [1 0 0 2 3] [0 0 1 2 3]
    *
    *
    * 1) my brute force..
    *
    * use zIdx to track the first zero,
    * use nIdx to track the first non zero
    * use count to count zero
    *
    * iterate over the nums from 0
    * if nums[i] is zero  zIdx = i, count ++
    * if nums[i] is not zero, nIdx = i, swap(nums[nIdx], nums[zIdx])
    *   if count > 1,
    *   zIdx = zIdx + 1....
    *
    * return nums --> too many condition to consider in if else...still wrong in above..
    *
    * 2) two loops
    * append all the nonzeros start from 0 to nonZeroIdx
    * use nonZeroIdx to track nonzeroIdx = 0
    * iterate over nums -> 0 to nLen
    * if nums[i] non zero -> nums[nonZeroIdx] = nums[i], nonZeroIdx ++;
    *
    * iterate over nums from nonZeroIdx to end
    * nums[nonZeroIdx] = 0;
    *
    * return nums
    *
    * time O(2n), space O(1)
    *
    * 3) one loop with two pointers
    * use cur track cur idx, use last to track the idx after nonzero = 0
    * use one for loop iterate over the nums
    * if(cur is not zero) {
    *  let temp = nums[cur]
    *  nums[last] = temp;
    *  nums[cur] = nums[last]
    *  last ++ move to after nonzero
    * }
    * cur++ move to next
    *
    * return nums
    * time O(n), space O(1) -> not really faster than 2)
    *
    *
    *
    *
    */
  let nIdx = 0;
  for (let i = 0; i< nums.length; i++) {
    if (nums[i] !== 0){
      nums[nIdx] = nums[i];
      nIdx ++;
    }
  }
  for (let j = nIdx; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
}

var moveZeroes = function(nums) {
  let last = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[last];
      nums[last] = temp;
      last ++
    }
  }

};