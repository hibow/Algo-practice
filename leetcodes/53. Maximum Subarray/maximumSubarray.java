class Solution {
  public int maxSubArray(int[] nums) {
    //edge case nums length = 1 return nums[0]
    //iterate over the array, with max and curSum
    if (nums.length == 1) return nums[0];
    int maxAns = nums[0];
    int curSum = nums[0];
    for (int i = 1; i< nums.length; i++) {
      if (curSum < 0) {
        curSum = nums[i];
        //create new start
      } else {
        curSum += nums[i];
      }
      maxAns = Math.max(maxAns, curSum);
    }
    return maxAns;
  }
}