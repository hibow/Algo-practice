/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    //input: nums array, int target
    //output: int number -> index of nums or the place can be inserted into the array
    //edge case: no duplicate, at least one elem in nums
    //binary search -> return mid if mid equals to target
    //else return low or high is find -> it gets out of iteration when low = high since it can't find the target
    //it will be the best place to insert the target
    let low = 0;
    let high = nums.length -1;
    if (target > nums[high]) return high+1;
    if (target <= nums[low]) return low;
    while( low < high) {
      let mid = low + (high - low) /2;
      if (nums[mid] === target) {
        return mid;
      } else if(nums[mid] > target) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return low;
};