/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    //res array -> left shift * right shift = final res
    //time O(2n) , space O(1) (don't count output array)
    let ans = [];
    let right = 1;
    let left = 1;
    for (let i = 0; i < nums.length; i++) {
      if (!ans[i]) ans[i] = 1;
      ans[i] *= right;
      right *= nums[i];
    }
    for (let j = nums.length - 1; j >= 0; j--) {
      ans[j] *= left;
      left *= nums[j];
    }
    return ans;
};